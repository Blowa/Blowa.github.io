#include <cstdio>
#include <cstdlib>
#include <ctime>
#include <raylib.h>
#include <stack>
#include <vector>

#if defined(PLATFORM_WEB)
#include <emscripten/emscripten.h>
#endif

using namespace std;

const int WIDTH      = 16;
const int HEIGHT     = 9;
const int CELL_SIZE  = 50;
const float TICKRATE = 0.02F;

struct Index {
    int x;
    int y;
};

struct Cell {
    bool visited;
    bool walls[4];
};

enum Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST
};

vector<Index> get_valid_adjacent_cells(Cell grid[WIDTH][HEIGHT], const Index &cell) {
    static const char dir_x[] = {0, 0, -1, 1};
    static const char dir_y[] = {-1, 1, 0, 0};

    vector<Index> cells;

    for (int i = 0; i < 4; i++) {
        int cell_x = cell.x + dir_x[i];
        int cell_y = cell.y + dir_y[i];

        if (cell_x < 0 || cell_x > WIDTH-1 || cell_y < 0 || cell_y > HEIGHT-1) {
            continue;
        }

        if (!grid[cell_x][cell_y].visited) {
            cells.push_back({cell_x, cell_y});
        }
    }

    return cells;
}

void draw(Cell grid[WIDTH][HEIGHT], Index cursor) {
    for (int i = 0; i < WIDTH; i++) {
        for (int j = 0; j < HEIGHT; j++) {
            const float x = i * CELL_SIZE;
            const float y = j * CELL_SIZE;

            if (grid[i][j].walls[0]) DrawLineEx({x, y}, {x + CELL_SIZE, y}, 2.0F, BLACK);
            if (grid[i][j].walls[1]) DrawLineEx({x + CELL_SIZE, y}, {x + CELL_SIZE, y + CELL_SIZE}, 2.0F, BLACK);
            if (grid[i][j].walls[2]) DrawLineEx({x, y + CELL_SIZE}, {x + CELL_SIZE, y + CELL_SIZE}, 2.0F, BLACK);
            if (grid[i][j].walls[3]) DrawLineEx({x, y}, {x, y + CELL_SIZE}, 2.0F, BLACK);
        }
    }

    DrawRectangle(cursor.x * CELL_SIZE, cursor.y * CELL_SIZE, CELL_SIZE, CELL_SIZE, ORANGE);
}

struct GameData {
    Cell grid[WIDTH][HEIGHT];
    Index cursor;
    stack<Index> stack_;
    float accumulator;
};

void update(void *d) {
    GameData &data = *(GameData *)d;
    float &accumulator = data.accumulator;
    stack<Index> &stack_ = data.stack_;
    Index &cursor = data.cursor;
    Cell (&grid)[WIDTH][HEIGHT] = data.grid;

    float dt = GetFrameTime();
    accumulator += dt;

    if (IsKeyPressed(KEY_R)) {
        stack_ = {};
        for (int i = 0; i < WIDTH; i++) {
            for (int j = 0; j < HEIGHT; j++) {
                grid[i][j].visited = false;
                for (int k = 0; k < 4; k++) {
                    grid[i][j].walls[k] = true;
                }
            }
        }
        cursor = {rand() % WIDTH, rand() % HEIGHT};
        grid[cursor.x][cursor.y].visited = true;
        stack_.push(cursor);
    }

    while (accumulator >= TICKRATE) {
        vector<Index> valid_adjacent_cells = get_valid_adjacent_cells(grid, cursor);

        if (!stack_.empty()) {
            if (valid_adjacent_cells.size() > 0) {
                Index next_cell = valid_adjacent_cells[rand() % valid_adjacent_cells.size()];

                int dx = next_cell.x - cursor.x;
                int dy = next_cell.y - cursor.y;

                Direction direction;
                if (dx == 1) direction = EAST;
                else if (dx == -1) direction = WEST;
                else if (dy == -1) direction = NORTH;
                else direction = SOUTH; // dy == 1

                // Remove walls based on direction
                grid[cursor.x][cursor.y].walls[direction] = false; // Remove wall from current cell in the direction of movement
                grid[next_cell.x][next_cell.y].walls[(direction + 2) % 4] = false; // Remove wall from next cell in the opposite direction

                cursor = next_cell;
                grid[cursor.x][cursor.y].visited = true;
                stack_.push(cursor);
            } else {
                cursor = stack_.top();
                stack_.pop();
            }
        }

        accumulator -= TICKRATE;
    }

    for (int k = 0; k < 4; k++) {
        if (grid[cursor.x][cursor.y].walls[k]) continue;

        if (IsKeyPressed(KEY_W)) {
            if (k == 0) cursor.y--;
        } else if (IsKeyPressed(KEY_D)) {
            if (k == 1) cursor.x++;
        } else if (IsKeyPressed(KEY_S)) {
            if (k == 2) cursor.y++;
        } else if (IsKeyPressed(KEY_A)) {
            if (k == 3) cursor.x--;
        }
    }

    BeginDrawing();
    ClearBackground(RAYWHITE);

    draw(grid, cursor);

    EndDrawing();
}

int main() {
    InitWindow(800, 450, "Maze generator");
    SetWindowMonitor(0);

    srand(time(0));

    // generate grid
    Cell grid[WIDTH][HEIGHT];
    for (int i = 0; i < WIDTH; i++) {
        for (int j = 0; j < HEIGHT; j++) {
            grid[i][j].visited = false;
            for (int k = 0; k < 4; k++) {
                grid[i][j].walls[k] = true;
            }
        }
    }

    stack<Index> stack;

    // set cursor starting pos in grid
    Index cursor = {rand() % WIDTH, rand() % HEIGHT};
    grid[cursor.x][cursor.y].visited = true;
    stack.push(cursor);

    float accumulator = 0.0F;

    GameData data = {
        {},
        cursor,
        stack,
        accumulator
    };

    for (int i = 0; i < WIDTH; i++) {
        for (int j = 0; j < HEIGHT; j++) {
            data.grid[i][j].visited = false;
            for (int k = 0; k < 4; k++) {
                data.grid[i][j].walls[k] = true;
            }
        }
    }

#if defined(PLATFORM_WEB)
    emscripten_set_main_loop_arg(update, &data, 0, 1);
#else
    while (!WindowShouldClose()) {
        update(&data);
    }
#endif

    CloseWindow();
}

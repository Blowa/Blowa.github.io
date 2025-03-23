#include <array>
#include <cstdio>
#include <cstdlib>
#include <ctime>
#include <raylib.h>
#include <raymath.h>

#if defined(PLATFORM_WEB)
#include <emscripten/emscripten.h>
#endif

using namespace std;

// NPC patrol
// - array of points
// - move toward current point 
// - at each point, stop, look right, look left then go to next point
// - next point is the next in the array until reaching a limit of the array, then reverse direction

// NPC Sight
// if npc sees the player, he goes toward the player
// if the player is too far for x seconds, he goes back to patrol

// Random wandering within a range between points

enum State {
    PATROL,
    LOOK,
    CHASE,
    GO_BACK,
    IDLE
};

struct Movable_Entity {
    Rectangle rect;
    Vector2 vel;
};

struct Enemy : Movable_Entity {
    Ray ray;
    State state;
    float wait;
    int target;
};

struct Player : Movable_Entity {};

struct GameData {
    Player player;
    Enemy enemy;
    array<Vector2, 4> points;
    Font debug_font;
};

void move_toward(Vector2 dir, Movable_Entity &e, float speed, float dt) {
    Vector2 dir_n = Vector2Normalize(dir);
    e.vel.x = dir_n.x * dt * speed;
    e.vel.y = dir_n.y * dt * speed;

    e.rect.x += e.vel.x;
    e.rect.y += e.vel.y;
}

const char *state_to_str(State state) {
    switch (state) {
        case PATROL: return "PATROL";
        case CHASE:  return "CHASE";
        case IDLE:   return "IDLE";
        default:     return "UNKNOWN";
    }
}

void draw(GameData *d) {
    GameData &data = *d;
    Player &player = data.player;
    Enemy &enemy = data.enemy;
    array<Vector2, 4> &points = data.points;
    Font &debug_font = d->debug_font;

    BeginDrawing();
    ClearBackground(RAYWHITE);

    for (Vector2 p : points) {
        DrawCircleV(p, 5.0F, BLUE);
    }

    DrawRectangleRec(enemy.rect, BLACK);
    DrawRectangleRec(player.rect, ORANGE);
    DrawTextEx(debug_font, TextFormat("State %s\n", state_to_str(enemy.state)), {50, 12}, 24, -1, BLACK);
    DrawTextEx(debug_font, TextFormat("time before patrol %f\n", enemy.wait), {50, 36}, 24, -1, BLACK);

    EndDrawing();
}

void update(void *d) {
    GameData &data = *(GameData *)d;
    Enemy &enemy = data.enemy;
    Player &player = data.player;
    array<Vector2, 4> &points = data.points;
    float dt = GetFrameTime();

    Vector2 dir;
    // move enemy
    switch (enemy.state) {
        case PATROL: {
            dir = Vector2Subtract(points[enemy.target], {enemy.rect.x, enemy.rect.y}); 
            move_toward(dir, enemy, 250.0F, dt);

            if (Vector2Distance({enemy.rect.x, enemy.rect.y}, {player.rect.x, player.rect.y}) < 60.0F) {
                enemy.state = CHASE;
            }

            if (Vector2Distance({enemy.rect.x, enemy.rect.y}, points[enemy.target]) < 16.0F) {
                enemy.target = (enemy.target + 1) % points.size();
            }
        }
          break;
        case CHASE: {
            dir = Vector2Subtract({player.rect.x, player.rect.y}, {enemy.rect.x, enemy.rect.y});
            move_toward(dir, enemy, 250.0F, dt);

            if (Vector2Distance({player.rect.x, player.rect.y}, {enemy.rect.x, enemy.rect.y}) > 200.0F) {
                enemy.state = IDLE;
                enemy.wait = 0.0F;
            }
        }
          break;
        case IDLE:
          if (Vector2Distance({player.rect.x, player.rect.y}, {enemy.rect.x, enemy.rect.y}) < 200.0F) {
              enemy.state = CHASE;
          }

          static const float wait_total = 2.0F;
          if (enemy.wait > wait_total) {
              enemy.wait = 0.0F;
              enemy.state = PATROL;
          } else {
              enemy.wait += dt;
          }
          // Wait 2 seconds
          // Go to Patrol
          break;
    }

    // move player
    dir = {0, 0};
    if (IsKeyDown(KEY_W)) {
        dir.y = -1;
    }
    if (IsKeyDown(KEY_S)) {
        dir.y = 1;
    }
    if (IsKeyDown(KEY_D)) {
        dir.x = 1;
    }
    if (IsKeyDown(KEY_A)) {
        dir.x = -1;
    }

    move_toward(dir, player, 400.0F, dt);

    draw(&data);
}

int main() {
    InitWindow(800, 450, "Template");
    SetWindowMonitor(0);

    const char *font_path = "DejaVuSansMono.ttf";
    Font debug_font = LoadFontEx(font_path, 24, 0, 0);

    srand(time(0));

    State state = PATROL;

    array<Vector2, 4> points = {
        Vector2{0, 0},
        Vector2{150, 50},
        Vector2{450, 100},
        Vector2{750, 50}
    };

    Player player = {
        {{300,380,50,50},
        {0.0F, 0.0F}
    }};
    Enemy enemy = {
        {{0,0,50,50},
        {0, 0}},
        {},
        state,
        0.0F,
        0
    };

    GameData data = {
        player,
        enemy,
        points,
        debug_font
    };

    int cursor = 0;

    enemy.target = cursor;
#if defined(PLATFORM_WEB)
    emscripten_set_main_loop_arg(update, &data, 0, 1);
#else
    while (!WindowShouldClose()) {
        update(&data);
    }
#endif

    CloseWindow();
}

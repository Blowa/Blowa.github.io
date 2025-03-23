#include <raylib.h>

#if defined(PLATFORM_WEB)
#include <emscripten/emscripten.h>
#endif

using namespace std;

void draw(void *d) {
    
}

struct GameData {
};

void update(void *d) {
    GameData &data = *(GameData *)d;
    /* float &accumulator = data.accumulator; */

    draw(&data);
}

int main() {
    InitWindow(800, 450, "Template");
    SetWindowMonitor(0);

    GameData data = {
    };

#if defined(PLATFORM_WEB)
    emscripten_set_main_loop_arg(update, &data, 0, 1);
#else
    while (!WindowShouldClose()) {
        update(&data);
    }
#endif

    CloseWindow();
}

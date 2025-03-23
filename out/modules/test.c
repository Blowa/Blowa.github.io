#include <raylib.h>

#if defined(PLATFORM_WEB)
#include <emscripten/emscripten.h>
#endif

void update(void) {
    BeginDrawing();
    ClearBackground(RAYWHITE);
    DrawText("Congrats! You created your first window!", 190, 200, 20, LIGHTGRAY);
    EndDrawing();
}

int main(void) {
    // init raylib
    InitWindow(640, 480, "raylib [core] example - basic window");
    SetWindowMonitor(0);

#if defined(PLATFORM_WEB)
    emscripten_set_main_loop(update, 0, 1);
#endif

    while (!WindowShouldClose()) {
        update();
    }

    CloseWindow();
}

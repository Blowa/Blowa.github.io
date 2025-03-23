// global.d.ts
export {}; // This is needed to make it a module

declare global {
  interface Window {
    Module: any; // Or be more specific if you know the structure of Module
  }
}

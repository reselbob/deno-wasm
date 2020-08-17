const wasmCode = await Deno.readFile("./rust_for_deno/target/wasm32-unknown-unknown/debug/rust_for_deno.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const {
    square,
} = wasmInstance.exports;
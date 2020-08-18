const wasmCode = await Deno.readFile("./rust_for_deno/target/wasm32-unknown-unknown/release/cube_it.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const {cube} = wasmInstance.exports;

console.log(cube(1));
console.log(cube(2));
console.log(cube(3));
console.log(cube(4));
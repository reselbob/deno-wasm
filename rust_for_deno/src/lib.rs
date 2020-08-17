#[no_mangle]
pub extern "C" fn cube(x: u32) -> u32 {
    x * x * x
}
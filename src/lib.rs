mod utils;

use wasm_bindgen::prelude::*;
use cv::feature::akaze::{Akaze, KeyPoint};
use image::{DynamicImage, ImageBuffer, Rgba};
use image::io::Reader as ImageReader;
use imageproc::drawing;
use web_sys::console;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]
pub fn open_from_buffer(buf: Vec<u8>, width: u32, height: u32) -> Vec<u8> {
    utils::set_panic_hook();
    let src_image = ImageBuffer::<Rgba<u8>, Vec<u8>>::from_vec(width, height, buf).unwrap();
    let threshold = 0.001f64;
    let akaze = Akaze::new(threshold);
    console::log_1(&"Init Akaze...".into());
    let dyn_image = DynamicImage::ImageRgba8(src_image.clone());
    console::log_1(&"DynamicImage...".into());
    let (key_points, _descriptor) = akaze.extract(&dyn_image);
    console::log_1(&"Creating descriptors with akaze...".into());
    let mut image = drawing::Blend(src_image);
    for KeyPoint { point: (x, y), .. } in key_points {
        drawing::draw_cross_mut(&mut image, Rgba([0, 255, 255, 128]), x as i32, y as i32);
    }
    image.0.into_raw()
}

#[wasm_bindgen]
pub fn print_test(value: u32) {
    //this can't work... printing are lost.
    println!("{}", value);
}

#[wasm_bindgen]
pub fn print_console() {
  console::log_1(&"Hello using web-sys".into());
}

#[wasm_bindgen]
pub fn open_image(url: String) {
    let img = image::open(url).unwrap();
    img.save("empty.jpg").unwrap();
}

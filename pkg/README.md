<div class="repo-badge inline-block vertical-align">
  <a title="Latest push build on default branch: " name="status-images" class="pointer open-popup">
    <img src="https://travis-ci.com/kalwalt/wasm-akaze-example.svg?branch=main&amp;status=unknown" alt="build:">
  </a>
</div>

# WASM AKAZE EXAMPLE

I'm testing akaze from the [cv crate](https://github.com/rust-cv/cv) with rustwasm. I'ts a work in progress, you can test it locally for now.

## Instructions

If you want to test locally on your machine just run:
```
cd www
npm install
npm run start
```
If you make changes, you need to install [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/):

`curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`


run the 🛠️ `wasm-pack build` command and then the steps below:

```
cd www
npm install
npm run start
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
* image
* imageproc
* rust-cv
* web-sys

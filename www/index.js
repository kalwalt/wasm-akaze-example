import init, { open_from_buffer, print_console } from "../pkg/wasm_akaze_example.js";

const img = new Image()
const canvas = document.getElementById('cv')
const ctx = canvas.getContext('2d')
const canvasAkaze = document.getElementById('cv-akaze')
const ctxAkz = canvasAkaze.getContext('2d')

async function run() {
    // First up we need to actually load the wasm file, so we use the
    // default export to inform it where the wasm file is located on the
    // server, and then we wait on the returned promise to wait for the
    // wasm to be loaded.
    //
    // It may look like this: `await init('./pkg/without_a_bundler_bg.wasm');`,
    // but there is also a handy default inside `init` function, which uses
    // `import.meta` to locate the wasm file relatively to js file.
    //
    // Note that instead of a string you can also pass in any of the
    // following things:
    //
    // * `WebAssembly.Module`
    //
    // * `ArrayBuffer`
    //
    // * `Response`
    //
    // * `Promise` which returns any of the above, e.g. `fetch("./path/to/wasm")`
    //
    // This gives you complete control over how the module is loaded
    // and compiled.
    //
    // Also note that the promise, when resolved, yields the wasm module's
    // exports which is the same as importing the `*_bg` module in other
    // modes
    await init();

    // from stackoverflow article: https://stackoverflow.com/questions/3511200/new-image-how-to-know-if-image-100-loaded-or-not/39415783#39415783
    function getImage(url){
        return new Promise(function(resolve, reject){
            
            img.onload = function(){
                resolve(url)
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0)
                let imgData = ctx.getImageData(0,0,canvas.width, canvas.height)
                let raw = open_from_buffer(imgData.data,canvas.width,canvas.height)

                canvasAkaze.width = canvas.width
                canvasAkaze.height = canvas.height

                let imageData = new ImageData(canvasAkaze.width, canvasAkaze.height)
                imageData.data.set(raw);
                ctxAkz.putImageData(imageData, 0, 0);
            }
            img.onerror = function(){
                reject(url)
            }
            img.src = url
        })
    }
    getImage('./pinball.jpg');
    print_console();
}

run();

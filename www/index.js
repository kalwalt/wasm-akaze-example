import * as wasm from "wasm-akaze-example";

console.log(wasm);

wasm.print_test(2);

// from stackoverflow article: https://stackoverflow.com/questions/3511200/new-image-how-to-know-if-image-100-loaded-or-not/39415783#39415783
function getImage(url){
        return new Promise(function(resolve, reject){
            var img = new Image()
            const canvas = document.getElementById('cv')
            const ctx = canvas.getContext('2d')
            img.onload = function(){
                resolve(url)
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0)
                let imgData = ctx.getImageData(0,0,canvas.width, canvas.height)
                console.log(imgData);
                wasm.open_from_buffer(imgData.data,canvas.width,canvas.height)
            }
            img.onerror = function(){
                reject(url)
            }
            img.src = url
        })
    }

getImage('./pinball.jpg');
wasm.print_console();

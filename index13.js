alert('Я учу JavaScript!');

let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider_Next').addEventListener('click', function(){
offset = offset + 256; // offset += 256
if (offset > 512) {
    offset = 0;
}
sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_Previos').addEventListener('click', function(){
    offset -= 256;
   if (offset < 0){
        offset = 512;
    }
    sliderLine.style.left = -offset + 'px';
    });





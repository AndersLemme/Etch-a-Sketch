let dark = "#111820"
let blue = "blue"
let color = "#111820"

//Color buttons
const white_btn = document.getElementById("white");
white_btn.addEventListener("click", () =>{ color = "#D0B3FF";});
const black_btn = document.getElementById("black");
black_btn.addEventListener("click", () =>{ color = "#111820";});
const rand_btn = document.getElementById("rand");
rand_btn.addEventListener("click", () =>{ color = "rand"});

//const gray_btn = document.getElementById("gray");
//gray_btn.addEventListener("click", () =>{ color = "gray"});


//define Grid
const grid = document.querySelector(".grid");

//Define slider and slider value di
const slider = document.querySelector(".slider");
const sliderval = document.querySelector(".slider_value");

//Creat Grid on window load.
document.addEventListener("DOMContentLoaded",() => {
    createGrid(10)
})


slider.addEventListener("input", () =>{
    sliderval.textContent = Math.round(slider.value /5)*5;
})
slider.addEventListener("change", () =>{
    let val = Math.round(slider.value /5)*5;
    createGrid(val);
})

function createGrid(size){
    grid.innerHTML = ""; //clear grid before creating new one

    for(let i = 0; i < size*size; i++){
        const grid_div = document.createElement("div");
        grid_div.style.cssText = `background: #D0B3FF; height: ${(500/size).toString()}px; width: ${(500/size).toString()}px; outline: 0.5px solid;`;
        grid_div.addEventListener("mouseover", () =>{
            if( color == "rand"){
                grid_div.style.cssText = `background: ${(randRGB())}; height: ${(500/size).toString()}px; width: ${(500/size).toString()}px; outline: 0.5px solid;`;
            }else{
                grid_div.style.cssText = `background: ${color}; height: ${(500/size).toString()}px; width: ${(500/size).toString()}px; outline: 0.5px solid;`;
            }
        });

        grid.appendChild(grid_div);
    }
}

function randRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}

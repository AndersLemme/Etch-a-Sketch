let dark = "#111820"
let blue = "blue"
let color = "#111820"

//Color buttons
const white_btn = document.getElementById("white");
white_btn.addEventListener("click", () =>{ color = "#D0B3FF";});
const black_btn = document.getElementById("black");
black_btn.addEventListener("click", () =>{ color = "#111820";});

//define Grid
const grid = document.querySelector(".grid");

//Define slider and slider value di
const slider = document.querySelector(".slider");
const sliderval = document.querySelector(".slider_value");

//Creat Grid on window load.
document.addEventListener("DOMContentLoaded",() => {
    createGrid(10, color)
})


slider.addEventListener("input", () =>{
    sliderval.textContent = Math.round(slider.value /5)*5;
})
slider.addEventListener("change", () =>{
    let val = Math.round(slider.value /5)*5;
    console.log("activate create grid funcrion-- debugging");
    console.log(val);
    console.log(typeof val);

    createGrid(val, color);
})

function createGrid(size, color){
    grid.innerHTML = ""; //clear grid before creating new one

    for(let i = 0; i < size*size; i++){
        console.log("loop is running");
        const grid_div = document.createElement("div");
        grid_div.style.cssText = `background: #D0B3FF; height: ${(500/size).toString()}px; width: ${(500/size).toString()}px; outline: 0.5px solid;`;
        grid_div.addEventListener("mouseover", () =>{
            grid_div.style.cssText = `background: ${color}; height: ${(500/size).toString()}px; width: ${(500/size).toString()}px; outline: 0.5px solid;`;
        } );

        grid.appendChild(grid_div);
    }
}

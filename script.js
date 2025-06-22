let dark = "#111820"
let blue = "blue"
let color = "#111820"

const white_btn = document.getElementById("white");
white_btn.addEventListener("click", () =>{ color = "#D0B3FF";});
const black_btn = document.getElementById("black");
black_btn.addEventListener("click", () =>{ color = "#111820";});

const slider = document.querySelector(".slider");
const sliderval = document.querySelector(".slider_value");
slider.addEventListener("input", () =>{
    sliderval.textContent = slider.value;
})

const grid = document.querySelector(".grid");
for(let i = 0; i < 10*10; i++){
    const grid_div = document.createElement("div");
    grid_div.style.cssText = "background: #D0B3FF; height: 50px; width: 50px; outline: 0.5px solid;";
    grid_div.addEventListener("mouseover", () =>{
        grid_div.style.cssText = `background: ${color}; height: 50px; width: 50px; outline: 0.5px solid;`;
    } );
    grid.appendChild(grid_div);
}

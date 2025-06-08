
const grid = document.querySelector(".grid");
for(let i = 0; i < 10*10; i++){
    const grid_div = document.createElement("div");
    grid_div.style.cssText = "background: gray; height: 20px; width: 20px; outline: 0.5px solid;";
    grid.appendChild(grid_div);
}

const grid = document.querySelector(".grid");
for(let i = 0; i < 10*10; i++){
    const grid_div = document.createElement("div");
    grid_div.style.cssText = "background: #D0B3FF; height: 50px; width: 50px; outline: 0.5px solid;";
    grid_div.addEventListener("mouseover", () =>{
        grid_div.style.cssText = "background: #111820; height: 50px; width: 50px; outline: 0.5px solid;";
        console.log("turn Black")
    } );
    grid.appendChild(grid_div);
}

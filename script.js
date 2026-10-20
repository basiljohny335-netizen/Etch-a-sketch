const gridContainer = document.querySelector("#grid-container");

function createGrid(size) {
    const squareSize = 960 / size;
   for ( let i = 0; i < size * size; i++) 
{ 
const square = document.createElement("div");
square.classList.add("grid-square");
square.style.width = `${squareSize}px`;
square.style.height = `${squareSize}px`;
    let hoverCount = 0;
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    square.addEventListener("mouseenter", () => {
        hoverCount++;
        const darkRed = Math.floor(red * Math.pow(0.9, hoverCount));
        const darkGreen = Math.floor(green * Math.pow(0.9, hoverCount));
        const darkBlue = Math.floor(blue * Math.pow(0.9, hoverCount));
        const color = `rgb(${darkRed}, ${darkGreen}, ${darkBlue})`;
        square.style.backgroundColor = color;
    }); 
gridContainer.appendChild(square);
}
}
createGrid(16);

const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", () => {
    const size = Number(prompt("How many squares per side?"));
    if (!Number.isInteger(size) || size > 100 || size < 1) {
        alert("Enter a number betwwen 1 and 100");
        return;
    }
    gridContainer.innerHTML = "";
    createGrid(size);

});
const gridContainer = document.querySelector("#grid-container");

function createGrid(size) {
    const squareSize = 960 / size;
   for ( i = 0; i < size * size; i++) 
{ 
const square = document.createElement("div");
square.classList.add("grid-square");
square.style.width = `${squareSize}px`;
square.style.height = `${squareSize}px`;
gridContainer.appendChild(square);
}
const squares = document.querySelectorAll(".grid-square");
squares.forEach((square) =>  {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
}); 
}
createGrid(16);

const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", () => {
    const size = Number(prompt("How many squares per side?"));
    if (size > 100 || size < 1) {
        alert("Enter a number betwwen 1 and 100");
        return;
    }
    gridContainer.innerHTML = "";
    createGrid(size);

});

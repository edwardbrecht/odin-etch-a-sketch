const CONTAINER_SIDE_LENGTH = 900

function generateGrid(numSquaresPerSide) {
    const content = document.getElementById("content");
    for (let i = 0; i < numSquaresPerSide; i++) {
        const row = document.createElement("div");
        row.style.height = (CONTAINER_SIDE_LENGTH / numSquaresPerSide) + "px";
        row.style.display = "flex";
        content.appendChild(row);
        for (let j = 0; j < numSquaresPerSide; j++) {
            const square = document.createElement("div");
            square.style.width = (CONTAINER_SIDE_LENGTH / numSquaresPerSide) + "px";
            square.style.height = (CONTAINER_SIDE_LENGTH / numSquaresPerSide) + "px";
            square.style.border = "1px solid black";
            square.addEventListener("mouseenter", function() {
                square.style.backgroundColor = getRandomColor();
                square.style.transition = "background-color 0s";
            });
            square.addEventListener("mouseleave", function() {
                square.style.backgroundColor = "white";
                square.style.transition = "background-color 1s";
            })
            row.appendChild(square);
        }
    }
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function newGrid() {
    numSquaresPerSide = prompt("How many squares per side?", 16);
    if (numSquaresPerSide <= 0 || numSquaresPerSide > 100) {newGrid()};
    deleteGrid();
    generateGrid(numSquaresPerSide);

}

function deleteGrid(node) {
    const content = document.getElementById("content");
    while (content.firstChild) {
        const row = content.firstChild;
        while (row.firstChild) {
            row.removeChild(row.firstChild);
        }
        content.removeChild(content.firstChild);
    }
}

document.getElementById("new-grid-btn").addEventListener("click", newGrid);

generateGrid(16);
const CONTAINER_SIDE_LENGTH = 600
const NUM_SQUARES_PER_SIDE = 16;

const content = document.getElementById("content");
for (let i = 0; i < NUM_SQUARES_PER_SIDE; i++) {
    const row = document.createElement("div");
    row.style.height = (CONTAINER_SIDE_LENGTH / NUM_SQUARES_PER_SIDE) + "px";
    row.style.display = "flex";
    content.appendChild(row);
    for (let j = 0; j < NUM_SQUARES_PER_SIDE; j++) {
        const square = document.createElement("div");
        square.style.width = (CONTAINER_SIDE_LENGTH / NUM_SQUARES_PER_SIDE) + "px";
        square.style.height = (CONTAINER_SIDE_LENGTH / NUM_SQUARES_PER_SIDE) + "px";
        square.style.border = "1px solid black";
        row.appendChild(square);
    }
}

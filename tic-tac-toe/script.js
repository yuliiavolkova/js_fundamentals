const sizeVertical = 3;
const sizeHorizontal = 3;
let currentPlayer = "X";

for (let i = 0; i < sizeHorizontal * sizeVertical; i++) {
  const cell = document.createElement("div"); // Створюємо div
  cell.classList.add("cell"); // Додаємо клас
  cell.id = `cell-${i}`; //Присвоюємо унікальний id

  cell.addEventListener("click", function clickOnCell() {
    if (cell.innerText === "") {
      cell.innerText = currentPlayer;

      if (checkWinner()) {
        return; // Якщо є переможець — виходимо з функції, щоб не змінювати хід
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });

  const board = document.getElementById("gameBoard"); //Знаходимо контейнер
  board.appendChild(cell); //Додаємо клітинку в контейнер
}

function checkWinner() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Горизонтальні
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Вертикальні
    [0, 4, 8],
    [2, 4, 6], // Діагоналі
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    let combination = winCombinations[i];
    const [a, b, c] = combination;

    const cellA = document.getElementById(`cell-${a}`).innerText;
    const cellB = document.getElementById(`cell-${b}`).innerText;
    const cellC = document.getElementById(`cell-${c}`).innerText;

    if (cellA !== "" && cellA === cellB && cellB === cellC) {
      document.getElementById(
        "winnerMessage"
      ).innerText = `Player ${cellA} wins!`;
      return true;
    }
  }
  return false;
}

const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function clickOnButton() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.innerText = ""; // Clear the cell
  });
  currentPlayer = "X";
});

// INFO2180 Lab 3
// Tic-Tac-Toe JavaScript Implementation

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');

  let currentPlayer = 'X';
  let gameOver = false;

  // ---------------------------
  // Exercise 1: Layout the Board
  // ---------------------------
  squares.forEach(square => {
    square.classList.add('square');
  });

  // ---------------------------
  // Exercise 2: Add X or O when clicked
  // ---------------------------
  squares.forEach(square => {
    square.addEventListener('click', () => {
      // Only allow marking empty squares and if game not over
      if (!square.textContent && !gameOver) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Check for a winner after every move
        if (checkWinner(currentPlayer)) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add('you-won');
          gameOver = true;
        } else {
          // Switch to the other player
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });

    // ---------------------------
    // Exercise 3: Hover effect
    // ---------------------------
    square.addEventListener('mouseover', () => {
      square.classList.add('hover');
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
    });
  });

  // ---------------------------
  // Exercise 5: Restart the Game
  // ---------------------------
  newGameBtn.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
    currentPlayer = 'X';
    gameOver = false;
  });

  // ---------------------------
  // Exercise 4 & 6: Check Winner + Disallow Cheating
  // ---------------------------
  function checkWinner(player) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return (
        squares[a].textContent === player &&
        squares[b].textContent === player &&
        squares[c].textContent === player
      );
    });
  }
});

/**
 * Find all possible moves for your king!
 * Your task is to find all squares to where your king can make a legal move.
 *
 * Function kingAllPossibleMoves() will take 2 arguments:
 *
 * 1.) startingPos => which is a string (e.g "C3") and represent square where your king currently is.
 * 2.) occupiedPos => which is an unsorted array/list of strings (e.g ['C4', 'B2']) and represent occupied squares by your other chess pieces. This means that your king cannot
 * move on any of occupied squares. Let's also assume that every other square is free and ready to welcome your king.
 *
 * Remember, king can only move 1 square in every direction.
 *
 * Function should return a sorted array of all possible squares where your king can make a legal move. If there is no possible moves return empty array.
 *
 * Some examples:
 *
 * kingAllPossibleMoves('A1', ['B1','B2']) => should return ['A2']
 * kingAllPossibleMoves('A1', []) => should return ['A2', 'B1', 'B2']
 * kingAllPossibleMoves('H5', ['G6','G5', 'A2']) => should return ['G4', 'H4', 'H6']
 * kingAllPossibleMoves('H8', ['H7', 'G7', 'G8']) => should return []
 */

function kingAllPossibleMoves(startingPos, occupiedPos) {
  const chessBoard = [
    ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
    ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
    ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
  ];
  const availableSteps = [];

  const checkAvailableSteps = (grid, R, C) => {
    // Проверяем левый элемент
    if (grid[R] !== undefined && grid[R][C - 1] !== undefined && !occupiedPos.includes(grid[R][C - 1])) {
      availableSteps.push(grid[R][C - 1]);
    }
    // Проверяем правый элемент
    if (grid[R] !== undefined && grid[R][C + 1] !== undefined && !occupiedPos.includes(grid[R][C + 1])) {
      availableSteps.push(grid[R][C + 1]);
    }
    // Проверяем верхний элемент
    if (grid[R - 1] !== undefined && grid[R - 1][C] !== undefined && !occupiedPos.includes(grid[R - 1][C])) {
      availableSteps.push(grid[R - 1][C]);
    }
    // Проверяем нижний элемент
    if (grid[R + 1] !== undefined && grid[R + 1][C] !== undefined && !occupiedPos.includes(grid[R + 1][C])) {
      availableSteps.push(grid[R + 1][C]);
    }
    // Проверяем верхний левый элемент
    if (grid[R - 1] !== undefined && grid[R - 1][C - 1] !== undefined && !occupiedPos.includes(grid[R - 1][C - 1])) {
      availableSteps.push(grid[R - 1][C - 1]);
    }
    // Проверяем верхний правый элемент
    if (grid[R - 1] !== undefined && grid[R - 1][C + 1] !== undefined && !occupiedPos.includes(grid[R - 1][C + 1])) {
      availableSteps.push(grid[R - 1][C + 1]);
    }
    // Проверяем нижний левый элемент
    if (grid[R + 1] !== undefined && grid[R + 1][C - 1] !== undefined && !occupiedPos.includes(grid[R + 1][C - 1])) {
      availableSteps.push(grid[R + 1][C - 1]);
    }
    // Проверяем нижний правый элемент
    if (grid[R + 1] !== undefined && grid[R + 1][C + 1] !== undefined && !occupiedPos.includes(grid[R + 1][C + 1])) {
      availableSteps.push(grid[R + 1][C + 1]);
    }
  };

  for (let i = 0; i < chessBoard.length; i++) {
    for (let y = 0; y < chessBoard[i].length; y++) {
      if (chessBoard[i][y] === startingPos) {
        checkAvailableSteps(chessBoard, i, y);
      }
    }
  }

  return availableSteps;
}

const available = kingAllPossibleMoves('H5', ['G6', 'G5', 'A2']);

console.log(available);

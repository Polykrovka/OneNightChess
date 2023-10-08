export const data = {};

let toggle = false;

for (let j = 1; j <= 8; j++) {
  for (let i = 1; i <= 8; i++) {
    data[`${i}${j}`] = { color: `${toggle ? 'white' : 'black'}`, figure: null, isActive: false, canGo: false, canFight: false }
    if (i === 2 ) {
      data[`${i}${j}`].figure = 'whitePawn';
      data[`${i}${j}`].figureColor = 'white';
    } else if (i === 7) {
      data[`${i}${j}`].figure = 'blackPawn';
      data[`${i}${j}`].figureColor = 'black';
    } else if (i === 8 && j ===5) {
      data[`${i}${j}`].figure = 'blackQueen';
      data[`${i}${j}`].figureColor = 'black';
    } else if (i === 1 && j === 5) {
      data[`${i}${j}`].figure = 'whiteQueen';
      data[`${i}${j}`].figureColor = 'white';
    } else if (i === 8 && (j === 8 || j === 1)) {
      data[`${i}${j}`].figure = 'blackCastle';
      data[`${i}${j}`].figureColor = 'black';
    } else if (i === 1 && (j === 8 || j === 1)) {
      data[`${i}${j}`].figure = 'whiteCastle';
      data[`${i}${j}`].figureColor = 'white';
    }
    
    toggle = !toggle;
  }
  toggle = !toggle;
}
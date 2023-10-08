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
    }
    toggle = !toggle;
  }
  toggle = !toggle;
}
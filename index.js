const R = require('ramda');

const d = ['1','2','3','4','5','6'];
let initial = [''];

// recursively generate all permutations of six dice rolls
function getCombos(x){
  if (x.length > 0 && x[0].length === 6)
    return x;

  let out = [];
  x.map( (y) => {
    d.map((i) => {
      out.push(y.concat(i));
    });
  });

  return getCombos(out);
}

// count all possibilities of 1st place prize
const firstPrize = (combos) => combos.filter((x) => {
  if( ( x.split('').filter((x) => x === '4').length >= 4 ) || 
      ( x.split('').filter((x) => x === '1').length >= 5 ) || 
      ( x.split('').filter((x) => x === '2').length >= 5 ) ||
      ( x.split('').filter((x) => x === '3').length >= 5 ) ||
      ( x.split('').filter((x) => x === '5').length >= 5 ) ||
      ( x.split('').filter((x) => x === '6').length >= 5 ))
    return true;
}).length / Math.pow(6,6);

const secondPrize = (combos) => combos.filter((x) => {
  if( ( x.split('').filter((x) => x === '1').length === 1 ) && 
      ( x.split('').filter((x) => x === '2').length === 1 ) && 
      ( x.split('').filter((x) => x === '3').length === 1 ) &&
      ( x.split('').filter((x) => x === '4').length === 1 ) &&
      ( x.split('').filter((x) => x === '5').length === 1 ) &&
      ( x.split('').filter((x) => x === '6').length === 1 ) || 
      ( x.split('').filter((x) => x === '1').length === 3 ) && ( x.split('').filter((x) => x === '2').length === 3 ) || 
      ( x.split('').filter((x) => x === '1').length === 3 ) && ( x.split('').filter((x) => x === '3').length === 3 ) || 
      ( x.split('').filter((x) => x === '1').length === 3 ) && ( x.split('').filter((x) => x === '4').length === 3 ) || 
      ( x.split('').filter((x) => x === '1').length === 3 ) && ( x.split('').filter((x) => x === '5').length === 3 ) || 
      ( x.split('').filter((x) => x === '1').length === 3 ) && ( x.split('').filter((x) => x === '6').length === 3 ) || 
      ( x.split('').filter((x) => x === '2').length === 3 ) && ( x.split('').filter((x) => x === '3').length === 3 ) || 
      ( x.split('').filter((x) => x === '2').length === 3 ) && ( x.split('').filter((x) => x === '4').length === 3 ) || 
      ( x.split('').filter((x) => x === '2').length === 3 ) && ( x.split('').filter((x) => x === '5').length === 3 ) || 
      ( x.split('').filter((x) => x === '2').length === 3 ) && ( x.split('').filter((x) => x === '6').length === 3 ) || 
      ( x.split('').filter((x) => x === '3').length === 3 ) && ( x.split('').filter((x) => x === '4').length === 3 ) || 
      ( x.split('').filter((x) => x === '3').length === 3 ) && ( x.split('').filter((x) => x === '5').length === 3 ) || 
      ( x.split('').filter((x) => x === '3').length === 3 ) && ( x.split('').filter((x) => x === '6').length === 3 ) || 
      ( x.split('').filter((x) => x === '4').length === 3 ) && ( x.split('').filter((x) => x === '5').length === 3 ) || 
      ( x.split('').filter((x) => x === '4').length === 3 ) && ( x.split('').filter((x) => x === '6').length === 3 ) || 
      ( x.split('').filter((x) => x === '5').length === 3 ) && ( x.split('').filter((x) => x === '6').length === 3 )
      )
    return true;
}).length / Math.pow(6,6);

const thirdPrize = (combos) => combos.filter((x) => {
  if( ( x.split('').filter((x) => x === '1').length === 4 ) || 
      ( x.split('').filter((x) => x === '2').length === 4 ) || 
      ( x.split('').filter((x) => x === '3').length === 4 ) ||
      ( x.split('').filter((x) => x === '5').length === 4 ) ||
      ( x.split('').filter((x) => x === '6').length === 4 )
      )
    return true;
}).length / Math.pow(6,6);

const fourthToSixthPrize = (fours, combos) => combos.filter((x) => {
  if( ( x.split('').filter((x) => x === '4').length === fours ) )
    return true;
}).length / Math.pow(6,6);

// compute probabilities and log out the results
R.pipe(getCombos, firstPrize, console.log)(initial);
R.pipe(getCombos, secondPrize, console.log)(initial);
R.pipe(getCombos, thirdPrize, console.log)(initial);
R.pipe(getCombos, R.curry(fourthToSixthPrize)(3), console.log)(initial);
R.pipe(getCombos, R.curry(fourthToSixthPrize)(2), console.log)(initial);
R.pipe(getCombos, R.curry(fourthToSixthPrize)(1), console.log)(initial);

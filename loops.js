function forLoop(array) {
  // it's wanting an array to be returned
  // the array is going to have elements pushed into based on a condition
  // if we are on loop i where i is equal to 1 it will push 'I am 1 strange loop.'
  // else we are going to populate the array with 'I am ${i} strange loops.'
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push( `I am ${i} strange loop.` )
    }
    else {
      array.push( `I am ${i} strange loops.` )
    }
  }
  return array
}

function whileLoop(n) {
  let countdown = n;
    while (countdown > 0) {
  console.log(--countdown)
  }
  return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
      array.shift()
} while (array.length > 0 && maybeTrue(true))
return array
}

// Selection Sort
// Mason L.
// Nov. 3, 2023
//

let values = [];
const NUM_VALUES = 20;

function setup() {
  //randomSeed(10); // for debugging
  noCanvas();
  populateArray();
  print(values);
  SelectionSort();
  print(values);
}

function SelectionSort(){
  for(let index = 0; index < values.length - 1; index++){
    let minimum = values[index];
    let minimumLoc = index;
    for(let searchIndex = index + 1; searchIndex < values.length; searchIndex++){
      let cur = values[searchIndex];
      if(cur < minimum){
        minimum = cur;
        minimumLoc = searchIndex;
      }
    }
    //Now, time to swap!
    let temp = values[index];
    values[index] = values[minimumLoc];
    values[minimumLoc] = temp;
  }
}

function populateArray(){
  //fill the array with NUM_VALUES nymber of items
  for(let i = 0; i < NUM_VALUES; i++){
    values.push(floor(random(1000)));
  }
}

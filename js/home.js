const arrayContainer = document.querySelector('.array-container');
const generateArrayBtn = document.querySelector('#generate-array-btn');
const bubbleSortBtn = document.querySelector('#bubble-sort-btn');
const selectionSortBtn = document.querySelector('#selection-sort-btn');
const insertionSortBtn = document.querySelector('#insertion-sort-btn');
const mergeSortBtn = document.querySelector('#merge-sort-btn');
const quickSortBtn = document.querySelector('#quick-sort-btn');

let isSorting = false; // for STOP button 

// CALLS GENERATE ARRAY FILE
const generateArrayHandler = () =>{
    generateArray(arrayContainer); // calls the generate_array function
}
generateArrayBtn.addEventListener('click', generateArrayHandler);

// CALLS BUBBLE SORT FILE
const bubbleSortHandler = async () => {
    isSorting = true; // can continue even after stopped
    const arrayElements = document.querySelectorAll('.array-element');
    await bubbleSort(arrayElements); //calls the bubbleSort function in the sorts folder
}
bubbleSortBtn.addEventListener('click', bubbleSortHandler);

// CALLS MERGE SORT FILE
const mergeSortHandler = async () => {
    isSorting = true;
    const arrayElements = document.querySelectorAll('.array-element');
    const array = Array.from(arrayElements, (el) => parseInt(el.style.height)); // Convert the heights of the elements to an array of numbers
    await mergeSort(array, 0, array.length - 1, arrayElements);
};
mergeSortBtn.addEventListener('click', mergeSortHandler);
  
// CALLS SELECTION SORT FILE
selectionSortBtn.addEventListener('click', () => {
	// TODO 
});

insertionSortBtn.addEventListener('click', () => {
	// TODO 
});

quickSortBtn.addEventListener('click', () => {
	// TODO
});

const stopSortingBtn = document.getElementById('stop-button');
stopSortingBtn.addEventListener('click', ()=>{
    isSorting = false; // stops the sorting on click of stop
})

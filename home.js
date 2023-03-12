const arrayContainer = document.querySelector('.array-container');
const generateArrayBtn = document.querySelector('#generate-array-btn');
const bubbleSortBtn = document.querySelector('#bubble-sort-btn');
const selectionSortBtn = document.querySelector('#selection-sort-btn');
const insertionSortBtn = document.querySelector('#insertion-sort-btn');
const mergeSortBtn = document.querySelector('#merge-sort-btn');
const quickSortBtn = document.querySelector('#quick-sort-btn');

let isSorting = false; // for STOP button 

const generateArray = () => {
    // Get the array size from the input field
    const arraySize = Number(document.getElementById('array-size-btn').value);
	// Generate an array of random numbers between 1 and 100
	const array = Array.from({ length: arraySize}, () => Math.floor(Math.random() * 100) + 1);
	// Clear the previous array
	arrayContainer.innerHTML = '';
	// Add array elements to the container
    array.forEach((value) => {
        const arrayElement = document.createElement('div');
        arrayElement.classList.add('array-element');
        arrayElement.style.height = `${value * 4}px`;
        arrayContainer.appendChild(arrayElement);
      });
};
generateArrayBtn.addEventListener('click', generateArray);

const bubbleSortHandler = async () => {
    isSorting = true; // can continue even after stopped
    const arrayElements = document.querySelectorAll('.array-element');
    await bubbleSort(arrayElements); //calls the bubbleSort function in the sorts folder
}
bubbleSortBtn.addEventListener('click', bubbleSortHandler);


const mergeSortHandler = async () => {
    isSorting = true;
    const arrayElements = document.querySelectorAll('.array-element');
    const array = Array.from(arrayElements, (el) => parseInt(el.style.height));
    await mergeSort(array, 0, array.length - 1, arrayElements);
};
mergeSortBtn.addEventListener('click', mergeSortHandler);
  

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

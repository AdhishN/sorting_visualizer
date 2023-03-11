const arrayContainer = document.querySelector('.array-container');
const generateArrayBtn = document.querySelector('#generate-array-btn');
const bubbleSortBtn = document.querySelector('#bubble-sort-btn');
const selectionSortBtn = document.querySelector('#selection-sort-btn');
const insertionSortBtn = document.querySelector('#insertion-sort-btn');
const mergeSortBtn = document.querySelector('#merge-sort-btn');
const quickSortBtn = document.querySelector('#quick-sort-btn');

let isSorting = false; // for STOP button 

const generateArray = () => {
	// Generate an array of random numbers between 1 and 100
	const array = Array.from({ length: 150 }, () => Math.floor(Math.random() * 100) + 1);
	// Clear the array container
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

bubbleSortBtn.addEventListener('click', async () => {
    isSorting=!isSorting; // can continue even after stopped
    const arrayElements = document.querySelectorAll('.array-element');
    const n = arrayElements.length;
  
    // Bubble sort algorithm
    for (let i = 0; i < n - 1 && isSorting; i++) {
      for (let j = 0; j < n - i - 1 && isSorting; j++) {
        const currentElement = arrayElements[j];
        const nextElement = arrayElements[j + 1];
        currentElement.classList.add('active');
        nextElement.classList.add('active');
        await new Promise((resolve) => setTimeout(resolve, 50));
        const currentValue = parseInt(currentElement.style.height);
        const nextValue = parseInt(nextElement.style.height);
        if (currentValue > nextValue) {
          currentElement.style.height = `${nextValue}px`;
          nextElement.style.height = `${currentValue}px`;
        }
        currentElement.classList.remove('active');
        nextElement.classList.remove('active');
      }
    }
  });

selectionSortBtn.addEventListener('click', () => {
	// TODO 
});

insertionSortBtn.addEventListener('click', () => {
	// TODO 
});

mergeSortBtn.addEventListener('click', () => {
	// TODO
});

quickSortBtn.addEventListener('click', () => {
	// TODO
});

const stopSortingBtn = document.getElementById('stop-button');
stopSortingBtn.addEventListener('click', ()=>{
    isSorting = false; // stops the sorting on click of stop
})
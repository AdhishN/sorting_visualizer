const quickSort = async (arrayElements, low, high) => {
  if (low < high && isSorting) {
    // Partition the array and get the pivot index
    const pivotIndex = await partition(arrayElements, low, high);

    arrayElements[pivotIndex].classList.add('sorted');

    // Sort the left half of the array
    await quickSort(arrayElements, low, pivotIndex - 1);

    // Sort the right half of the array
    await quickSort(arrayElements, pivotIndex + 1, high);

  }
  else if (low >= 0 && high >= 0 && low < arrayElements.length && high < arrayElements.length) {
    // Mark the remaining elements as sorted
    for (let i = low; i <= high; i++) {
      arrayElements[i].classList.add('sorted');
    }
  }
};

const partition = async (arrayElements, low, high) => {
  // Choose the last element as the pivot
  const pivotElement = arrayElements[high];

  let i = low - 1;

  for (let j = low; j <= high - 1 && isSorting; j++) {
    // Highlight the two elements being compared
    const currentElement = arrayElements[j];
    const pivotElement = arrayElements[high];
    currentElement.classList.add('active');
    pivotElement.classList.add('pivot');

    // Wait for a short period to show the comparison
    await new Promise((resolve) => setTimeout(resolve, 5));

    // Get the heights of the two elements being compared
    const currentValue = parseInt(currentElement.style.height);
    const pivotValue = parseInt(pivotElement.style.height);

    // Swap the elements if they are in the wrong order
    if (currentValue < pivotValue) {
      i++;
      const iElement = arrayElements[i];
      iElement.classList.add('active');
      currentElement.classList.remove('active');
      // Swap the elements
      const temp = currentElement.style.height;
      currentElement.style.height = iElement.style.height;
      iElement.style.height = temp;
      // Wait for a short period to show the swap
      await new Promise((resolve) => setTimeout(resolve, 5));
      iElement.classList.remove('active');
      currentElement.classList.add('active');
    }

    // Remove the highlighting from the two elements
    currentElement.classList.remove('active');
    pivotElement.classList.remove('pivot');
  }

  // Swap the pivot element with the element at i + 1
  const iElement = arrayElements[i + 1];
  iElement.classList.add('active');
  pivotElement.classList.add('pivot');
  const temp = pivotElement.style.height;
  pivotElement.style.height = iElement.style.height;
  iElement.style.height = temp;
  iElement.classList.remove('active');
  pivotElement.classList.remove('pivot');
  iElement.classList.add('sorted');

  // Return the index of the pivot element
  return i + 1;
};



const quickSort = async (arrayElements, low, high) => {
    if (low < high && isSorting) {
      // Find the partition index
      const partitionIndex = await partition(arrayElements, low, high);
  
      // Recursively sort the left and right sub-arrays
      await Promise.all([
        quickSort(arrayElements, low, partitionIndex - 1),
        quickSort(arrayElements, partitionIndex + 1, high),
      ]);
    } else {
      // Mark the last element as sorted
      arrayElements[high].classList.add('sorted');
    }
  };
  
  const partition = async (arrayElements, low, high) => {
    // Get the pivot element (the rightmost element in the sub-array)
    const pivotValue = parseInt(arrayElements[high].style.height);
  
    // Set the partition index to the leftmost element
    let partitionIndex = low;
  
    // Iterate through the sub-array
    for (let i = low; i < high; i++) {
      // Highlight the current element being compared to the pivot
      arrayElements[i].classList.add('active');
  
      // Wait for a short period to show the comparison
      await new Promise((resolve) => setTimeout(resolve, 5));
  
      // If the current element is smaller than the pivot, swap it with the element at the partition index
      const currentValue = parseInt(arrayElements[i].style.height);
      if (currentValue < pivotValue) {
        const temp = arrayElements[i].style.height;
        arrayElements[i].style.height = arrayElements[partitionIndex].style.height;
        arrayElements[partitionIndex].style.height = temp;
        partitionIndex++;
      }
  
      // Remove the highlighting from the current element
      arrayElements[i].classList.remove('active');
    }
  
    // Swap the pivot with the element at the partition index
    const temp = arrayElements[high].style.height;
    arrayElements[high].style.height = arrayElements[partitionIndex].style.height;
    arrayElements[partitionIndex].style.height = temp;
  
    // Mark the pivot as sorted
    arrayElements[partitionIndex].classList.add('sorted');
  
    // Return the partition index
    return partitionIndex;
  };
  
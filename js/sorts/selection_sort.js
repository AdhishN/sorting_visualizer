const selectionSort = async (arrayElements) => {
    const n = arrayElements.length;
    // One by one move the boundary of unsorted subarray
    for (let i = 0; i < n - 1 && isSorting; i++) {
      // Find the minimum element in unsorted array
      let minIndex = i;
      for (let j = i + 1; j < n && isSorting; j++) {
        // Highlight the two elements being compared
        const currentElement = arrayElements[minIndex];
        const nextElement = arrayElements[j];
        currentElement.classList.add('active');
        nextElement.classList.add('active');
  
        // Wait for a short period to show the comparison
        await new Promise((resolve) => setTimeout(resolve, 5));
  
        // Get the heights of the two elements being compared
        const currentValue = parseInt(currentElement.style.height);
        const nextValue = parseInt(nextElement.style.height);
  
        // Check if the next element is smaller than the current minimum element
        if (nextValue < currentValue) {
          // Update the index of minimum element
          minIndex = j;
        }
  
        // Remove the highlighting from the two elements
        currentElement.classList.remove('active');
        nextElement.classList.remove('active');
      }
  
      // Swap the found minimum element with the first element
      const temp = arrayElements[minIndex].style.height;
      arrayElements[minIndex].style.height = arrayElements[i].style.height;
      arrayElements[i].style.height = temp;
  
      // Add sorted class to the current element
      arrayElements[i].classList.add('sorted');
    }
  
    // Add sorted class to the last element in the array
    arrayElements[n - 1].classList.add('sorted');
  };
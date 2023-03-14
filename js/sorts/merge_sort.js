// Function to merge two subarrays of the given array
const merge = async (array, start, middle, end, arrayElements) => {
    
    // Create two subarrays from the given array
    const leftArray = array.slice(start, middle + 1);
    const rightArray = array.slice(middle + 1, end + 1);
    
    // Initialize variables for the subarray indices and the result array index
    let i = 0,
        j = 0,
        k = start;

    // Loop through the left and right subarrays and merge them into the result array
    while (i < leftArray.length && j < rightArray.length && isSorting) {
        // Highlight the two elements being compared
        const currentElement1 = arrayElements[start + i];
        const currentElement2 = arrayElements[middle + 1 + j];
        currentElement1.classList.add('active');
        currentElement2.classList.add('active');

        // Wait for a short period to show the comparison
        await new Promise((resolve) => setTimeout(resolve, 10));

        // Determine which element is smaller and put it into the result array
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }

        // Add the 'sorted' class to the corresponding element
        arrayElements[k].classList.add('sorted');

        // Update the height of the corresponding array element to show the updated value
        arrayElements[k].style.height = `${array[k]}px`;

        // Remove the highlighting from the elements
        currentElement1.classList.remove('active');
        currentElement2.classList.remove('active');

        k++;
    }

    // Put the remaining elements from the left subarray into the result array
    while (i < leftArray.length && isSorting) {
        array[k] = leftArray[i];
        arrayElements[k].style.height = `${array[k]}px`;
        arrayElements[start + i].classList.add('active');
        
        // Wait for a short period to show the element being added to the result array
        await new Promise((resolve) => setTimeout(resolve, 10));
        
        // Remove the highlighting from the element
        arrayElements[start + i].classList.remove('active');
        
        i++;
        k++;
    }

    // Put the remaining elements from the right subarray into the result array
    while (j < rightArray.length && isSorting) {
        array[k] = rightArray[j];
        arrayElements[k].style.height = `${array[k]}px`;
        arrayElements[middle + 1 + j].classList.add('active');

        // Wait for a short period to show the element being added to the result array
        await new Promise((resolve) => setTimeout(resolve, 10));

        // Remove the highlighting from the element
        arrayElements[middle + 1 + j].classList.remove('active');
        
        j++;
        k++;
    }
};

// Function to perform merge sort on the given array
const mergeSort = async (array, start, end, arrayElements) => {
    // If there is only one element in the subarray, return it
    if (start >= end) {
        return;
    }
  
    // Calculate the middle index of the subarray
    const middle = Math.floor((start + end) / 2);
  
    // Recursively sort the left and right halves of the subarray
    await mergeSort(array, start, middle, arrayElements);
    await mergeSort(array, middle + 1, end, arrayElements);

    // Merge the sorted halves
    await merge(array, start, middle, end, arrayElements);

    // Check if the last element has been sorted
    if (end === array.length - 1) {
        arrayElements[end].classList.add('sorted');
    }
  };

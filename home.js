const arrayContainer = document.getElementById("array-container");
const generateArrayButton = document.getElementById("generate-array");

function generateRandomArray()
{
    const array = [];
    for (let i = 0; i< 20; i++)
    {
        array.push(Math.floor(Math.random()*100)+1);
    }
    arrayContainer.innerHTML = array.join(" ");

    for (let i =0; i<array.length;i++)
    {
        const bar= document.createElement('div');
        bar.classList.add('bar');
        bar.style.height= array[i] * 3+ 'px';
        arrayContainer.appendChild(bar);
    }
}

function sortArray()
{
    //TODO Implement the sorting algorithm
    console.log('Sorting Array...')
}

generateArrayButton.addEventListener("click", generateRandomArray);
function swap(arr, idx1, idx2) {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
    return arr
}

function selectionSort(arr) {
    for(let i=0; i < arr.length; i++){
        minIndex = i;
        for(let j= i+1; j < arr.length;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        swap(arr,i,minIndex)
    }
    return arr
}

module.exports = {
    selectionSort,
    swap
};
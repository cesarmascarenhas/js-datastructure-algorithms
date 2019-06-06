function quickSort(arr){
    
    if(arr <= 1){
        return arr;
    }

    let pivot = arr.pop();
    let left = [];
    let right = [];
    for(let item of arr){
        if(item < pivot){
            left.push(item);
        } else {
            right.push(item);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}

module.exports = quickSort;

//console.log(quickSort([12,8,25,33,4,2,7,6]));
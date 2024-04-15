const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function manipulateArray(arr){
    let array2 = arr.map((num) => {
        return num * 2;
    })
    let array3 = array2.filter((num2) =>{
        return num2 > 10;
    })
    let array4 = array3.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    return array4;
}

console.log(manipulateArray(arr));
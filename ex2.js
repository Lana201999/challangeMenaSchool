/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/

function contains(array, num) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "object") {
            contains(array[i], num);
        } else if (array[i] === num) {
            j = true;
            break;
        } else j = false;
    }
    return j;
}

function contains(array, num) {
    var newa = array.flat();
    var finds = newa.includes(num);
    return finds;
}
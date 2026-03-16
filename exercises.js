// Returning the large interger among 2 integers 
let a = 2
let b =5
if (a>b){
    console.log(a)
}else if(a === b){
    console.log('The intergers are equal')
}else{
    console.log(b)
}

b = 2
console.log(b)
//Sign of Product of Three numbers 
let c =1
let d =2 
let e = -3
if (c*d*e<0){
    console.log('The sign is -')
} else{
    console.log('The sign is +')
}
//Sorting Three numbers 

const h =13
const i = 12
const j =10

let smallest, middle, largest
if (h >= i && i >= j){
    largest = h;
if(i >= j ){
    middle = i;
    smallest = j;
} else {
    middle = j;
    smallest = i;
}
 } else if (i >= j && j >=h){
    largest =i;
    if(j >= h){
        middle = j;
        smallest = h;
    } else{middle = h;
        smallest = j;
    }
 } else {
    largest = j; if(i >= h){
        middle = i;
        smallest = h;
    } else {
        middle = h;
        smallest =i;
    }
}
console.log(smallest, middle, largest);
console.log(largest,  middle, smallest);





//========== export ile dışarıya açma!

//export ile dışarı açılabilir
// export const sum = (...numbers) => {
//     return numbers.reduce((num, total) => num + total);
// }

// //export ile dışarı açılabilir
// export const mult = (...numbers) => {
//     return numbers.reduce((num, total) => total * num);
// }


// sum(1,2,3);
// sum(1,2,3,4);

//========== export default ile dışarıya açma!

export default class {
    constructor(){
        this.PI = 3.123456789;
    }
    sum(...numbers){
        return numbers.reduce((num, total) => num + total);
    }
    
    mult(...numbers){
        return numbers.reduce((num, total) => total * num);
    }
}


//ya da bu şekilde de dışarı açılabilir
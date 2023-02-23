//1

function mapping (array, callback) {
    const resArr = [];
    for (let i = 0; i < array.length; i++) {
        resArr.push(callback(array[i], i, array));
    }
    return resArr;
}

//2.1  

const arrRed = [6,"34",7,8,"56",1,3];

function  myReduce(array, callback, initialValue) {
    if (array.length === 0 && !initialValue || typeof callback !== "function") {
        return 'Error'
    }
    let accumulator;
    let iter = 0;
    if (initialValue) {
        accumulator = initialValue;
    } else {
        accumulator = array[0];
        iter = 1;
    }
    for (let i = iter; i <array.length; i++) {
        let resCall = callback(accumulator, array[i], i, array);
        if (resCall){
            accumulator = resCall;   
        } else {                      
            continue
            }
    }
    return accumulator;
}

//2.2

let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

// не мутабельный
let a = users.entries();
for (el of users) {
    console.log(a.next().value);
}

// не мутабельный
console.log(users.every((el) => typeof el.name === "string"));

// не мутабельный
let arrFilter = users.filter(el => el.index > 2 && el.index < 5);
console.log(arrFilter);




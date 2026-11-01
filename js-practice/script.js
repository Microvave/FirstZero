console.log("สวัสดี JavaScript");

// const menuName = "มาม่าแสนอร่อย";
// const price = 1;
// const quantity = 2;
// const money = 3;

// const total = price*quantity;
// const message = "สั่ง " + menuName + "ชิ้น"+quantity+ "รวม"+total +"บาท";
// console.log(message);

// if (money >= total){
//     console.log("เหลือเงินทอน"+(money-total))
// }else{
//     console.log("เงินไม่พอ"+(total-money));
// }

//#ข้อที่ 1 

// for (let i = 1; i <= 12; i++) {
//     console.log(`7 x ${i} = ${7*i}`)
// }



// function calculateChange(total, money) {
//     return money - total;
// }

// function canBuy(total, money) {
//     if (money>=total){
//         return true
//     }else{
//         return false
//     }
// }



// const refun1 = calculateChange(10,5);
// const refun2 = calculateChange(20,5);
// const buy1 = canBuy(10,5);
// const buy2 = canBuy(20,5);
// console.log(refun1,refun2);
// console.log(buy1,buy2);

// for (let i = 1; i <= 20; i++) {


//    if (i % 2 === 0 ){
//     console.log(i)
//    }
// }



// const menuName = [
//     {name: "mama", price: 6},
//     {name: "noodle", price: 40},
//     {name: "chacloate", price: 50},
//     {name: "Mala", price: 100},
//     {name: "pizza", price: 300}
// ];





// for (const item of menuName){
//     console.log(`${item.name} ราคา ${item.price} บาท`);
// }

// console.log("สินค้าราคาน้อยกว่า 50")
// for (const item of menuName){
//     if(item.price <= 50){
//         console.log(`${item.name} ราคา ${item.price} บาท`);
//     }
// }

// let sum =0;
// for (const item of menuName){
//    sum += item.price;
// }
// console.log("ผลรวม : " + sum);

// console.log("ราคามากที่สุด")

// let maxItem = menuName[0];
// for (const item of menuName){
//    if (item.price>maxItem.price){
//     maxItem = item;
//    }
// }
// console.log(maxItem.name);


// const menuName = [
//     { name: "mama", price: 6 },
//     { name: "noodle", price: 40 },
//     { name: "chacloate", price: 50 },
//     { name: "Mala", price: 100 },
//     { name: "pizza", price: 300 }
// ];

// const list = menuName.filter(item => item.price > 50);
// console.log(list);

// const price = menuName.map(item => item.price);
// console.log(price);

// const noodle = menuName.find(item => item.name === "noodle");
// console.log(noodle.price);

// const newmenu = menuName.map(item => `${item.name} : ` + `${item.price} บาท` );
// console.log(newmenu);

// const findmenu = menuName
//     .filter(item => item.price <= 50)
//     .map(item => item.name);
// console.log(findmenu);

//ข้อที่ 1 
function isEven(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(2));

//ข้อที่ 2 
function getGrade(score) {
    if (score >= 80) {
        return "A"
    } else if (score >= 70) {
        return "B"
    } else if (score >= 60) {
        return "C"
    } else {
        return "F"
    }
}

console.log(getGrade(80));
console.log(getGrade(50));


//ข้อที่ 3
function sunTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum;
}

console.log(sunTo(5));

//ข้อที่ 4
function countDown(n) {
    while (n >= 1) {
        console.log(n)
        n--;
    }
}

countDown(10);


//ข้อที่5
console.log(findMin([5, 2, 9]));
function findMin(number) {

    let min = number[0];

    for (let i = 1; i < number.length; i++) {
        if (number[i] < min) {
            min = number[i];
        }
    }
    return min;
}


const users = [
  { name: "เวฟ", age: 25 },
  { name: "มิ้นท์", age: 16 },
  { name: "บอส", age: 18 }
];


// const price = menuName.map(item => item.price);
// console.log(price);

//ข้อ8
function getNames(users) {
  return users.map(item => item.name);
}

console.log(getNames(users));   
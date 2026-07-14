Javascript (nâng cao)

# Phạm vi của biến: xác định nơi biến có thể truy cập
- Ba loại phạm vi:

1. Block scope (khối): biến được khai báo trong cặp ngoặc nhọn
- var: không bị giới hạn bởi cặp ngoặc nhọn
- let/const: bị giới hạn bởi cặp ngoặc nhọn, ra ngoài bị undefined

2. Function scope (hàm): biến được khai báo trong 1 hàm
- cả let/var/const ra ngoài hàm đều bị undefined

3. Toàn cục (global): biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm

# Break & Continue
1. break: Thoát hoàn toàn khỏi vòng lặp ngay lập tức

2. continue: bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

# Vòng lặp nâng cao

1. for..in loop : Dùng để duyệt qua các thuộc tính (properties) của một object

2. forEach method : method của array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue

# Câu điều kiện
1. Câu điều kiện if.. else: Thực thi code khác nhau cho trường hợp true và false

2. Câu điều kiện if.. else..if: Kiểm tra nhiều điều kiện theo thứ tự

3. Toán tử điều kiện (Ternary Operator): cách viết ngắn gọn cho if.. else đơn giản

# Utils Functions: hàm có sẵn của javascript, giúp việc code nhanh, gọn hơn
1. String utils: hàm xử lý chuỗi

2. Array utils: hàm xử lý mảng

===============================

# Phạm vi của biến: xác định nơi biến có thể truy cập
if(true){
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const có block scope";
}

console.log(varVariable);
console.log(letVariable);
console.log(constVariable);


function myFunction(){
    var functionScoped = "Chỉ có thể truy cập trong hàm này"
    let alsoFunctionScoped = "Tương tụ";

    console.log(functionScoped);
}
console.log(functionScoped);

myFunction();

# Break & Continue
// break 

for (let i =0 ; i < 10 ; i++){
    if (i===5){
        break;
    }
    console.log(i);
}

const numbers = [1,3,5,8,10,12] ;
let firstEven = null;

for (let i = 1 ; i < numbers.length; i++){
    const num = numbers[i];

    if (num % 2 === 0){
        firstEven = num;
        break;
    }
    console.log(`So ${num} khong phai so chan`)

}

console.log(`So chan dau tien: ${firstEven}`);

//continue

//In ra so le

for (let j = 0 ; j < 10 ; j++){
    if (j % 2 === 0) {
        continue;
    }
    console.log(j);
}

// Bo qua diem < 88

const scores = [25, 20, 55 , 65, 87 , 89, 100 , 15 , 3]
console.log ("Score > = 80: ")

for (let i = 0 ; i < scores.length ; i++){
    const score = scores[i];
    if (score < 80) {
        continue
    }
    console.log (score);
}


# Vòng lặp nâng cao
//for..in

const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
};

for (const key in person){
    console.log(key);
}

//forEach

const numbers = [1,2,3,4,5];

numbers.forEach(function(value){
    console.log(value);
});


# Câu điều kiện
//if..else

let score = 45;

if (score >= 60){
    console.log ("You're Passed")
} else {
    console.log ("You're Failed")
}

//if-else-if

let score = 85;

if (score >= 90){
    console.log ("Xuat sac")
} else if (score >= 80){
    console.log ("Gioi")
} else if (score >= 70){
    console.log ("Kha")
} else if (score >= 60){
    console.log ("Trung binh")
} else {
    console.log ("Yeu")
}

//Toán tử điều kiện

let age = 24;

let xepHang = age > 18 ? "nguoi lon" : "tre em"
console.log (xepHang)

# Utils Functions: hàm có sẵn của javascript, giúp việc code nhanh, gọn hơn
//String

// trim

let text = "   Hello World   ";

//trim() - bỏ khoảng trắng hai đầu
console.log(text.trim());

//trimStart() - bỏ khoảng trắng bên trái
console.log(text.trimStart());

//trimEnd() - bỏ khoảng trắng bên phải
console.log(text.trimEnd());

// Uppercase - Lowercase

let str = "Javascript";

str.toUpperCase();
str.toLowerCase();

//Kiểm tra chuỗi chứa chuỗi con

let text1 = "Hello World 1";

console.log(text.includes("World")); //true

console.log(text.includes("Javascript")); //false

console.log(text.includes("world")); //false

//Cắt chuỗi
let text2 = "Hello World Javascript";

console.log(text.split(" "));

let email = "user@email.com"

console.log(email.split("@"));

//Thay thế kí tự trong chuỗi
let text3 = "Hello World";

console.log(text.replace("World" , "Javascript"));


//Array

// 1 - Thêm phần tử vào mảng
let arr = [1, 2, 3];

// Thêm vào cuối - push()
arr.push(4);

console.log(arr);

// Thêm vào đầu unshift()
arr.unshift(4);

console.log(arr);

//Thêm vào giữa - splice(vị trí, 0, phần tử)
arr.splice(2, 0, 1.5);

console.log(arr)

// 2 - Xóa phần tử khỏi mảng
let arr1 = [1, 2, 3, 4, 5];

//Xóa phần tử cuối - pop()
arr1.pop();

console.log(arr1);

//Xóa phần tử đầu - shift()
arr1.shift();

console.log(arr1);

//Xóa phần tử ở vị trí bất kì - splice(vị trí, số lượng)
arr1.slice(1, 1); //Xóa 1 phần tử ở vị trí số 1

console.log(arr1); 

// 3 - Tìm kiếm phần tử
const numbers = [5, 12, 8, 132, 44];

//Trả về phần tử đầu tiên > 10 - find()
let first = numbers.find(num => num > 10);
console.log(first);

//Trả về tất cả phần tử > 10 - filter()
let all = numbers.filter(num => num > 10);
console.log(all);

// 4 - Biến đổi mảng
const number1 =[1, 2, 3, 4, 5]

//Nhân mỗi phần tử với 2
let doubled = number1.map(num => num*2);
console.log(doubled);

// 5 - Sắp xếp mảng
let numbers1 = [30,100,20,15,10];

//Sắp xếp tăng dần
numbers1.sort((a, b) => a - b);

console.log(numbers1);

// Sắp xếp giảm dần
numbers1.sort((a, b) => b - a);

console.log(numbers1);

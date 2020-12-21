
//************************** Task_1 *************************\\
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;

console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
//-----------------------------------------------------------\\

//************************** Task_2 *************************\\
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [ ,name2, , name4], ages: [, age2, , age4]} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
//-----------------------------------------------------------\\

//************************** Task_3 *************************\\
function mul(...arr) {
    let rezult = 1;
    let zero = true;
    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === "number") {
            rezult *= arr[i];
            zero = false;
        } 
    }
    if(zero == true) {
        rezult = 0;
    }
    return rezult;
    // Ваш код
}

console.log("Task 3: " + mul(1, "str", 2, 3, true)); // 6
console.log("Task 3: " + mul(null, "str", false, true)); // 0
//-----------------------------------------------------------\\

//************************** Task_4 *************************\\
let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => this.data + "");
   }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => this.result = callback();
    }
 };

 client.calc(123);

 console.log("Task 4: " + client.result); // "123"
 console.log("Task 4, typeof: " + typeof client.result); // "string"
//-----------------------------------------------------------\\

//************************** Task_5 *************************\\
function mapBuilder(key, value) {
   let myMap = new Map();

   for(let i = 0; i < key.length; i++) {
      myMap.set(key[i], value[i]);
   }

   return myMap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log("Task 5, map size: " + map.size); // 4
console.log("Task 5, in map position: " + map.get(2)); // "span"
//-----------------------------------------------------------\\    
export function sum(a,b) {
    return a + b;
}

export function total() {
    let nums = [1,2,3];
    return nums.reduce((total,num) => {return total + num});
}

export function matchObj() {
    let obj = {name: 'jack', age: 18};
    return obj;
}

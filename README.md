# js-code-test

一个简单的javascript微型leetCode框架，测试框架基于jest：

> 支持ES6语法
> 功能代码和测试代码配套一起，即时编写测试

## 使用方式

克隆代码后，执行 `npm install`
在`./src`文件夹编写代码和测试代码文件，比如 ./src/demo：
```javascript
代码文件-src/demo/demo.js
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

测试文件-src/demo/demo.test.js
import {sum, total, matchObj} from './demo';

// toBe使用 === 匹配
test("add 1 + 2  tobe 3", () => {
    expect(sum(1,2)).toBe(3);
});

test("array total tobe 6", () => {
    expect(total()).toBe(6);
});

// 对象,数组使用toEqual匹配
test("matchObj equal directly", () => {
    expect(matchObj()).toEqual({name: 'jack', age: 18});
});
```
其他有用的mathers：

    .not.toBe()
    .toBeNull()
    .toBeUndefined()
    .toBeDefined()
    .toBeTruthy()
    .toBeFalsy()
    .toBeGreaterThan()
    .toBeLessThan()
    .toMatch()
    .toContain()

## 执行测试
在项目目录下执行

    npm run test  // 执行测试
    npm run test_c  // 执行测试，带测试覆盖报告
    npm run test_w  // 执行测试，启动实时监控，检测文件变化并重新测试

了解更多的test和命令语法可参考[jest](https://jestjs.io/en/)官网

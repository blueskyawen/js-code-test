import {sum, total, matchObj} from './demo';

// toBe使用 === 匹配对象数组
test("add 1 + 2  tobe 3", () => {
    expect(sum(1,2)).toBe(3);
});

test("array total tobe 6", () => {
    expect(total()).toBe(6);
});

// 对象,数组使用匹配
test("matchObj equal directly", () => {
    expect(matchObj()).toEqual({name: 'jack', age: 18});
});

// 其他matcher
// expect(..).not.toBe()
// expect(..).toBeNull()
// expect(..).toBeUndefined()
// expect(..).toBeDefined()
// expect(..).toBeTruthy()
// expect(..).toBeFalsy()
// expect(..).toBeGreaterThan()
// expect(..).toBeLessThan()
// expect(..).toBeGreaterThanOrEqual()
// expect(..).toBeLessThanOrEqual()
// expect(..).toMatch()
// expect(..).toContain()


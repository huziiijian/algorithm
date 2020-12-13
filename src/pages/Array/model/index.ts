import { observable, computed, action } from "mobx";
import { history, qs } from "src/utils";
import Service from "../service";

import LifeCycle, { LifeCycleProps } from "src/utils/VM/lifeCycle";
interface Params {}
interface Query {}
class PageModel extends LifeCycle<Params, Query> {
    constructor(props: LifeCycleProps<Params, Query>) {
        super(props);
        this.runningSum([1, 2, 3, 4]);
        this.twoSum([1, 2, 3, 4], 5);
        console.log(this.isPalindrome(2020202));
        console.log(this.maximumSwap(68124));
        console.log(this.isValid("(]"));
        console.log(this.romanToInt("MCMXCIV"));
        console.log(this.longestCommonPrefix(["asdf", "ascez", "awwww"]));
        console.log(this.threeSum([1, -3, 2, 3, -1, -1, -1, -2, 4]));
    }

    // 一维数组的动态和
    runningSum = (nums: Array<number>) => {
        let currentSum = 0;
        let runningSum: Array<number> = [];
        let len = nums.length;
        for (let i = 0; i < len; i++) {
            currentSum += nums[i];
            runningSum.push(currentSum);
        }
        console.log(runningSum);
    };

    // 两数之和
    twoSum = (nums: Array<number>, target: number) => {
        let index = nums.length - 1;
        let hash: {
            [key: number]: number;
        } = {};
        while (index > 0) {
            if (hash[target - nums[index]]) {
                // 目标值是否已经储存在索引内
                console.log(index, hash[target - nums[index]]);
                return;
            } else {
                hash[nums[index]] = index;
            }
            index--;
        }
    };

    // 回文数
    isPalindrome = (x: number) => {
        if (x < 0) return false;
        if (x < 10) return true;
        let n = 10 ** Math.floor(Math.log10(x)); // 当前位数下最小整数
        while (n > 1 && x > 0) {
            if (Math.floor(x / n) !== x % 10) return false; // 判断最大位数和最小位数是否相等
            x = Math.floor((x % n) / 10); // 直接删除首末两位数
            n /= 100; // 因为删除了两位数，直接除以100
        }
        return true;
    };

    //  最大交换
    maximumSwap = (num: number) => {
        // 从右向左找一个不靠边的最大数字max，然后找到最靠边的比max小的数字置为min，
        let nums = ("" + num).split("");
        let max = nums.length - 1;
        let min = nums.length - 1;
        let temp = -1; // 暂时的最大值
        if (nums.length == 1) return num;
        for (let i = nums.length - 2; i >= 0; i--) {
            let curMax = temp > -1 ? nums[temp] : nums[max]; //当前用来比较的数字
            if (nums[i] < curMax) {
                // 当前值和暂时最大值比较
                min = i;
                if (temp > -1) {
                    //min的左边存在一个比max大的值，且该值左边还有一个较小的值，可以进行移位，因此重新调整max和temp
                    max = temp;
                    temp = -1;
                }
            }
            if (nums[i] > curMax) {
                temp = i;
            }
        }
        [nums[max], nums[min]] = [nums[min], nums[max]];
        return +nums.join("");
    };

    //  有效的括号
    isValid = (str: string) => {
        // 利用栈的性质，按顺序储存字符内的括号
        let arr: Array<string> = [];
        const len = str.length;
        if (len % 2) return false;
        for (let i = 0; i < len; i++) {
            let letter = str[i];
            switch (letter) {
                case "(": {
                    arr.push(letter);
                    break;
                }
                case "[": {
                    arr.push(letter);
                    break;
                }
                case "{": {
                    arr.push(letter);
                    break;
                }
                case ")": {
                    if (arr.pop() !== "(") return false;
                    break;
                }
                case "]": {
                    if (arr.pop() !== "[") return false;
                    break;
                }
                case "}": {
                    if (arr.pop() !== "{") return false;
                    break;
                }
            }
        }
        return !arr.length;
    };

    //  罗马数字转整数
    romanToInt = (str: string) => {
        const map: {
            [key: string]: number;
        } = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
            IV: 4,
            IX: 9,
            XL: 40,
            XC: 90,
            CD: 400,
            CM: 900,
        };
        let res = 0;
        const len = str.length;
        for (let i = 0; i < len; ) {
            if (map[str[i] + str[i + 1]]) {
                res += map[str[i] + str[i + 1]];
                i += 2;
            } else {
                res += map[str[i]];
                i++;
            }
        }
        return res;
    };

    //  最长公共前缀
    longestCommonPrefix = (strs: Array<string>) => {
        if (strs.length === 0) return "";
        let prefix = strs[0]; // 初始化公共前缀
        const len = prefix.length;
        for (let i = 1; i < len - 1; i++) {
            // 字符串索引
            let j = 0;
            const curStr = strs[i];
            const curLen = curStr.length;
            for (; j < curLen; j++) {
                if (curStr[j] != prefix[j]) break;
            }
            prefix = curStr.substr(0, j);
        }
        return prefix;
    };

    //  三数之和
    threeSum = function (nums: Array<number>) {
        let ans: Array<Array<number>> = [];
        const len = nums.length;
        if (nums == null || len < 3) return ans;
        nums.sort((a, b) => a - b); // 排序
        for (let i = 0; i < len; i++) {
            if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
            if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
            let L = i + 1;
            let R = len - 1;
            while (L < R) {
                const sum = nums[i] + nums[L] + nums[R];
                if (sum == 0) {
                    ans.push([nums[i], nums[L], nums[R]]);
                    while(L < R && nums[L] == nums[L + 1]) L++; // 去重
                    while(L < R && nums[R] == nums[R - 1]) R--; // 去重
                    L++;
                    R--;
                } else if (sum < 0) L++;
                else if (sum > 0) R--;
            }
        }
        return ans;
    };
}

export default PageModel;

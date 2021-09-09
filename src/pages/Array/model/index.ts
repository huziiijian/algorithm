import { observable, computed, action } from "mobx";
import { history, qs } from "src/utils";
import Service from "../service";

import LifeCycle, { LifeCycleProps } from "src/utils/VM/lifeCycle";
interface Params {}
interface Query {}
class PageModel extends LifeCycle<Params, Query> {
    constructor(props: LifeCycleProps<Params, Query>) {
        super(props);
        console.log(this.maximumSwap(125723));
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
        while (index >= 0) {
            if (hash[target - nums[index]]) {
                // 目标值是否已经储存在索引内
                return [index, hash[target - nums[index]]];
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
        let n = 10 ** Math.floor(Math.log10(x)); // 当前位数下最小个位数为0的数
        while (n > 1 && x > 0) {
            // 判断当前X的最大位数，和最小位数是否相等
            if (Math.floor(x / n) !== x % 10) return false;
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
        // min代表比max小的，但不一定需要最小的那个数
        let min = nums.length - 1;
        let temp = -1; // 每次循环中用来记录max左侧是否有更大值
        if (nums.length == 1) return num;
        // i用来比较min和temp
        for (let i = nums.length - 2; i >= 0; i--) {
            let curMax = temp > -1 ? nums[temp] : nums[max]; //当前用来比较的数字
            if (nums[i] < curMax) {
                // 当前值小于暂时最大值
                min = i;
                // 将max更新为当前最大值，temp重置
                if (temp > -1) {
                    //min的左边存在一个比max大的值，重定义max，重置temp
                    max = temp;
                    temp = -1;
                }
            }
            if (nums[i] > curMax) {
                // 当前值大于暂时最大值
                temp = i;
            }
        }
        [nums[max], nums[min]] = [nums[min], nums[max]];
        return +nums.join("");
    };

    /**
     * @description: 有效的括号
     * @param {string} str
     * @return {*}
     */
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
    threeSum = (nums: Array<number>) => {
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
                    while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                    while (L < R && nums[R] == nums[R - 1]) R--; // 去重
                    L++;
                    R--;
                } else if (sum < 0) L++;
                else if (sum > 0) R--;
            }
        }
        return ans;
    };

    //  删除排序数组中的重复项
    removeDuplicates = (nums: Array<number>) => {
        let j = 0; // 新数组指针
        const len = nums.length;
        for (let i = 1; i < len; i++) {
            if (nums[i] != nums[i - 1]) {
                j++;
                nums[j] = nums[i];
            } // 重复情况不生成新数组元素，指针不改变
        }
        console.log(nums);
    };

    //  移除元素
    removeElement = (nums: Array<number>, target: number) => {
        let res = 0;
        for (const item of nums) {
            if (item != target) {
                nums[res] = item;
                res++;
            }
        }
        return res;
    };

    //  上升下降字符串
    sortString = (str: string) => {
        // str => /a-z/ 初始化一个空桶记录a-z字符出现的频率
        const nums = new Array(26).fill(0);
        for (const char of str) {
            // 利用index表示字符，val表示出现次数
            nums[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        let res = "";
        while (res.length < str.length) {
            // 第一步，添加上升字符串
            for (let i = 0; i < 26; i++) {
                // i是有序的，代表哪种字符
                if (nums[i]) {
                    // 如果某字符存在则会被添加进res
                    res += String.fromCharCode(i + "a".charCodeAt(0));
                    nums[i]--;
                }
            }
            // 第二步，添加下降字符串
            for (let i = 25; i >= 0; i--) {
                if (nums[i]) {
                    res += String.fromCharCode(i + "a".charCodeAt(0));
                    nums[i]--;
                }
            }
        }
        return res;
    };

    //  单词拆分
    wordBreak = (str: string, wordDict: Array<string>) => {
        const wordSet = new Set(wordDict); // 可以方便的用has
        const len = str.length;
        const dp = new Array(len + 1).fill(false);
        dp[0] = true; // 让边界情况满足状态转移方程
        for (let i = 1; i <= len; i++) {
            for (let j = i - 1; j >= 0; j--) {
                const suffix = str.slice(j, i);
                if (wordSet.has(suffix) && dp[j]) {
                    // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
                    dp[i] = true;
                    break; // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
                }
            }
        }
        return dp[len];
    };

    //  最长连续递增数列
    findLengthOfLCIS = (arr: Array<number>) => {
        // 记录当前连续递增序列的起始下标，遍历过程中比较相邻元素，根据大小决定是否需要更新连续递增序列的开始下标
        let ans = 0;
        let start = 0;
        const len = arr.length - 1;
        for (let i = 0; i <= len; i++) {
            if (arr[i] <= arr[i - 1] && i > 0) {
                // 注意i的取值范围限定
                start = i; // 如果相邻元素不满足递增，则前进一步
            }
            ans = Math.max(ans, i - start + 1); // 比较不同递增序列长度
        }
        return ans;
    };

    //  最长回文子串
    longestPalindrome = (str: string) => {
        const len = str.length;
        let ans = "";
        const dp = Array.from(new Array(len), () => new Array(len).fill(false));
        // dp[i][j] = dp[i+1][j-1] && s[i] == s[j] 状态转移方程
        // dp[i,j]：字符串s从索引i到j的子串是否是回文串
        for (let i = len - 1; i >= 0; i--) {
            for (let j = i; j < len; j++) {
                // 考虑三种情况：1.首位相等；2.字串为回文字符串；3.字串为空或者一个字符的边界收缩条件
                dp[i][j] = str[i] === str[j] && (j - i < 2 || dp[i + 1][j - 1]);
                if (dp[i][j])
                    j - i + 1 > ans.length
                        ? (ans = str.substring(i, j + 1))
                        : null;
            }
        }
        return ans;
    };
}

export default PageModel;

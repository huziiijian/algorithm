import LifeCycle, { LifeCycleProps } from "src/utils/VM/lifeCycle";

/**
 * @description: https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/tu-jie-guan-fang-tui-jian-ti-jie-yong-li-yjbf/
 * @param {*} 用两个栈实现队列
 * @return {*}
 */
class CQueue {
    stackIn: Array<number>;
    stackOut: Array<number>;
    constructor() {
        // 入队栈
        this.stackIn = [];
        // 出对栈
        this.stackOut = [];
    }
    appendTail = (value: any) => {
        this.stackIn.push(value);
    };
    deleteHead = () => {
        // 检查出队栈是否有数据，若无，需要从入队栈倒入后再出队
        if (this.stackOut.length) return this.stackOut.pop();
        else {
            while (this.stackIn.length) {
                this.stackOut.push(this.stackIn.pop() || 0);
            }
            if (!this.stackOut.length) return -1;
            else return this.stackOut.pop();
        }
    };
}

class PageModel extends LifeCycle {
    constructor(props: LifeCycleProps) {
        super(props);
        console.log(this.addStrings("123", "11"));
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
        // 注意i++交给内部控制
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
        // 初始化公共前缀为某一个字符，然后和其余字符串逐字比较
        let prefix = strs[0];
        const len = strs.length;
        for (let i = 0; i < len; i++) {
            // 字符串内字符索引
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
        nums.sort((a, b) => a - b);
        // 递增排序后，即可根据位置知道相对大小
        for (let i = 0; i < len; i++) {
            // i为起始数字
            if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
            if (i > 0 && nums[i] == nums[i - 1]) continue; // 注意去重是在执行一遍逻辑之后，即比较i-1和i
            // 因为是递增数组，因此在i右边的数组中，两端相加为0概率更大
            let L = i + 1;
            let R = len - 1;
            while (L < R) {
                // 便利i右边的数组，找到相加为0的情况，同时考虑去重
                const sum = nums[i] + nums[L] + nums[R];
                if (sum == 0) {
                    ans.push([nums[i], nums[L], nums[R]]);
                    // 因为是去除连续出现的重复数字，所以要用while代替if
                    while (L < R && nums[L] == nums[L + 1]) L++;
                    while (L < R && nums[R] == nums[R - 1]) R--;
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
        return j + 1;
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
        // 声明一个空桶记录a-z字符出现的频率
        const nums = new Array(26).fill(0);
        for (const char of str) {
            nums[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        let res = "";
        while (res.length < str.length) {
            // 第一步，添加上升字符串，有则只添加一次，无则不添加
            for (let i = 0; i < 26; i++) {
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
        // 对应长度的字串，是否为字典中单词的拼接体
        // 因为需要记录到str最后一个字符的检测状态，即最大下标为len
        const dp = new Array(len + 1).fill(false);
        // 0个字符时，自然是满足状态转移方程
        dp[0] = true;
        for (let i = 1; i <= len; i++) {
            for (let j = i - 1; j >= 0; j--) {
                // 检查字符串左侧中 > 不同长度字串，是否为单词
                const suffix = str.slice(j, i);
                if (wordSet.has(suffix) && dp[j]) {
                    // 后缀部分是单词，且左串[0,j-1]为字典中单词的拼接体
                    dp[i] = true;
                    // i长度的子串已经可以拆成单词了，不需要j继续划分子串
                    break;
                }
            }
        }
        return dp[len];
    };

    //  最长连续递增数列
    findLengthOfLCIS = (arr: Array<number>) => {
        // 记录当前连续递增序列的起始下标，遍历过程中比较上次记录，根据大小决定是否需要更新结果
        let ans = 0;
        let start = 0;
        const len = arr.length;
        for (let i = 0; i <= len - 1; i++) {
            if (arr[i] <= arr[i - 1] && i > 0) {
                // 注意i的取值范围限定
                start = i; // 如果相邻元素不满足递增，则前进一步
            }
            ans = Math.max(ans, i - start + 1); // 比较不同递增序列长度
        }
        return ans;
    };

    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome = (s: string) => {
        const len = s.length;
        if (len < 2) return s;
        let leftSide = 0;
        let rightSide = 0;
        // m、n代表回文串的中心，向外发散；leftSide、rightSide为回文串为"外边界"（代表类似'cbabd'中的'c'和'd'）
        // 注意不要用leftSide、rightSide代表内边界，会造成额外的复杂度
        const confirmSide = (m: number, n: number) => {
            while (m >= 0 && n < len && s[m] == s[n]) {
                m--;
                n++;
            }
            // m,n的值循环完后  是恰好不满足循环条件的时刻，m，n为"外边界"
            // n，m满足对称，则扩充res区间，记录外边界
            if (n - m > rightSide - leftSide) [leftSide, rightSide] = [m, n];
        };

        // 循环遍历字符串 对每个字符区分奇偶，假设可能成为回文串中心进行判断
        for (let i = 0; i < len; i++) {
            confirmSide(i, i);
            confirmSide(i, i + 1);
        }
        const res = s.slice(leftSide + 1, rightSide);
        return res;
    };

    /**
     * @description: https://leetcode-cn.com/problems/jump-game-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-tan-x-yh58/
     * @param {*} Array
     * @return {*}
     */
    jump = (nums: Array<number>) => {
        const len = nums.length;
        let curIndex = 0;
        let nextIndex = 0;
        let steps = 0;
        // 控制下只移动到倒数第二的位置，所以只要移动下标只要遇到当前覆盖最远距离时，就可以加一
        // 因为题目假设总是可以到达数组的最后一个位置，所以可以这么做
        for (let i = 0; i < len - 1; i++) {
            // 比较出"能够"覆盖的最远距离下标
            nextIndex = Math.max(nums[i] + i, nextIndex);
            // 当下标为"当前"覆盖最远距离时
            if (i === curIndex) {
                // 更新"当前"覆盖最远距离下标，步数加一
                curIndex = nextIndex;
                steps++;
            }
        }

        return steps;
    };

    /**
     * @description: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
     * @param {string} str
     * @return {*}
     */
    lengthOfLongestSubstring = (str: string) => {
        // 哈希集合，记录每个字符是否出现过
        const occ = new Set();
        const len = str.length;
        // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
        let rk = -1,
            ans = 0;
        for (let i = 0; i < len; i++) {
            // 从0之后，左指针向右移动一格，移除一个字符
            if (i != 0) {
                occ.delete(str[i - 1]);
            }
            while (rk < len - 1 && !occ.has(str[rk + 1])) {
                // 不断地移动右指针
                occ.add(str[rk + 1]);
                ++rk;
            }
            // 第 i 到 rk 个字符是一个极长的无重复字符子串
            ans = Math.max(ans, rk - i + 1);
        }
        return ans;
    };

    /**
     * @description: https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solution/ha-xi-biao-shu-zu-zhong-zhong-fu-de-shu-bh7co/
     * @param {Array} nums
     * @return {*}
     */
    findRepeatNumber = (nums: Array<number>) => {
        const len = nums.length;
        let map = new Map();
        for (let i = 0; i < len; i++) {
            if (map.has(nums[i])) return nums[i];
            map.set(nums[i], true);
        }
    };

    /**
     * @description: https://leetcode-cn.com/problems/binary-search/solution/er-fen-cha-zhao-by-leetcode-solution-f0xw/
     * @param {Array} nums
     * @param {number} target
     * @return {*}
     */
    binarySearch = (nums: Array<number>, target: number) => {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            const mid = Math.floor((high - low) / 2) + low;
            if (nums[mid] === target) return mid;
            if (nums[mid] > target) high = mid - 1;
            if (nums[mid] < target) low = mid + 1;
        }
        return -1;
    };

    /**
     * @description: https://leetcode-cn.com/problems/generate-parentheses/solution/pei-yang-chou-xiang-si-wei-hui-su-jie-fa-7dwu/
     * @param {number} n
     * @return {*}
     */
    generateParenthesis = (n: number) => {
        const res: Array<string> = [];
        if (n <= 0) return res;
        /**
         * @description: 用来生成每种结果的递归逻辑
         * @param {string} path 变化的字符串
         * @param {number} open '('的数量
         * @param {number} close ')'的数量
         * @return {*}
         */
        const dfs = (path: string, open: number, close: number) => {
            // 递归终止条件的顺序：1. 左括号数量大于要求；2. 右括号晚于左括号生成，所以肯定少于或等于左括号
            if (open > n || close > open) return;
            // 3. 满足上述要求后，左右括号能成对出现，则确定一种组合方式
            if (path.length === 2 * n) {
                res.push(path);
                return;
            }
            dfs(path + "(", open + 1, close);
            dfs(path + ")", open, close + 1);
        };
        dfs("", 0, 0);
        return res;
    };

    /**
     * @description: https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/di-gui-zi-fu-chuan-de-pai-lie-by-jack_lz-p45c/
     * @param {string} str
     * @return {*}
     */
    permutation = (str: string) => {
        const len = str.length;
        // 定义递归的出口
        if (len === 0) return [""];
        if (len === 1) return str;
        const res: Array<string> = [];
        for (let i = 0; i < len; i++) {
            // 依次取出一个字符用于递归后的全排列
            const char = str[i];
            const leftStr = str.slice(0, i) + str.slice(i + 1);
            const next = this.permutation(leftStr);
            // 将char与leftStr的全排列拼接，放入res
            for (let item of next) {
                res.push(char + item);
            }
        }
        return [...new Set(res)];
    };

    /**
     * @description: https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/
     * @param {number} n
     * @return {*}
     */
    climbStairs = (n: number) => {
        // 利用动态规划，推导出 dp[n]=dp[n−1]+dp[n−2]
        const dp = [];
        dp[1] = 1;
        dp[2] = 2;
        if (n <= 2) return n;
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    };

    /**
     * @description: https://leetcode-cn.com/problems/merge-intervals/solution/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu/
     * @param {Array} intervals
     * @return {*}
     */
    mergeSection = (intervals: Array<Array<number>>) => {
        let res: Array<Array<number>> = [];
        intervals.sort((a, b) => a[0] - b[0]); // 对每个子区间进行排序
        let prev = intervals[0]; // 初始化带对比区间
        const len = intervals.length;
        for (let i = 1; i < len; i++) {
            let cur = intervals[i]; // 当前子区间
            if (prev[1] >= cur[0]) {
                // “带对比子区间” 和 ”当前子区间“ 中有重复部分
                prev[1] = Math.max(cur[1], prev[1]); // 判断“带对比子区间” 和 ”当前子区间“ 覆盖最大范围
            } else {
                // 不重合，先将prev推入res数组，再更新prev为新的子区间
                res.push(prev);
                prev = cur;
            }
        }
        // 保证最后情况为不重合时，最后的prev会被推入res
        res.push(prev);
        return res;
    };

    /**
     * @description: https://leetcode-cn.com/problems/add-strings/solution/zi-fu-chuan-xiang-jia-by-leetcode-solution/
     * @param {Array} num1
     * @param {Array} num2
     * @return {*}
     */
    addStrings = (str1: string, str2: string) => {
        // 从末尾开始计算
        let i = str1.length - 1;
        let j = str2.length - 1;
        let add = 0;
        const ans = [];
        // 考虑到首位相加减进一位的情况
        while (i >= 0 || j >= 0 || add != 0) {
            // 将当前位进行计算，对于位数缺失的补 0
            const x = i >= 0 ? Number(str1[i]) : 0;
            const y = j >= 0 ? Number(str2[j]) : 0;
            const result = x + y + add;
            ans.unshift(result % 10); // 注意是保留一位数即可，即为将当前位的计算的余数保留下来
            add = Math.floor(result / 10);
            // 当前位置计算完后，计算上一位
            i -= 1;
            j -= 1;
        }
        return ans.join("");
    };

    /**
     * @description: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/dai-ma-sui-xiang-lu-121-mai-mai-gu-piao-odhle/
     * @param {Array} prices
     * @return {*} 时间复杂度O(n) 空间复杂度O(n)
     */
    maxProfit = (prices: Array<number>) => {
        // 可以理解为整个股票最后肯定是要卖出的，不卖出那么利润永远都是负
        const len = prices.length;
        // dp[i][0] 表示第i天“持有”状态下（昨天或之前买入 || 今天买入）股票所得最多现金；
        // dp[i][1] 表示第i天”非持有“状态下（昨天或之前卖出 || 今天卖出）股票所得最多现金；
        const dp = new Array(len).fill([0, 0]);
        dp[0] = [-prices[0], 0]; // 初始化状态为买入，收益为负的当天股价
        for (let i = 1; i < len; i++) {
            // 分别考虑第i天，持有或者卖出的情况
            dp[i] = [
                // 比较昨天“持有”状态下和今天买入的收益的大小
                Math.max(dp[i - 1][0], -prices[i]),
                // 比较昨天”非持有“状态下和今天卖出(也得加上昨日持有收益)的收益的大小
                Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
            ];
        }
        return dp[len - 1][1];
    };

    /**
     * @description: https://leetcode-cn.com/problems/3sum-closest/solution/gu-ding-yi-ge-shu-zai-shuang-zhi-zhen-shun-bian-fu/
     * @param {Array} prices
     * @return {*} 
     */
    threeSumClosest = (nums: Array<number>, target: number) => {
        nums.sort((a, b) => a - b);
        let res = nums[0] + nums[1] + nums[nums.length - 1];

        for (let i = 0; i < nums.length - 2; i++) {
            const n1 = nums[i];
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const n2 = nums[l];
                const n3 = nums[r];
                const sum = n1 + n2 + n3;
                if (sum > target) {
                    r--;
                } else {
                    l++;
                }
                if (Math.abs(sum - target) < Math.abs(res - target)) {
                    res = sum;
                }
            }
        }
        return res;
    };
}

export default PageModel;

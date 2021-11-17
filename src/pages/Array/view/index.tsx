/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-09 09:54:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-17 18:03:12
 */
import React, { FC } from "react";
import { observer } from "mobx-react";
import style from "../style/index.less";

import Model from "../model";
interface Props {
    store: Model;
}

const View: FC<Props> = observer((props) => {
    return (
        <div>
            <h1>数组类算法题</h1>
            <a href="https://leetcode-cn.com/problems/running-sum-of-1d-array/">
                一维数组的动态和
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/two-sum/">两数之和</a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/palindrome-number/">
                回文数
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/maximum-swap/solution/">
                最大交换
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/valid-parentheses/">
                有效括号
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/roman-to-integer/solution/hua-jie-suan-fa-13-luo-ma-shu-zi-zhuan-zheng-shu-b/">
                罗马数字转整数
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/longest-common-prefix/solution/hua-jie-suan-fa-14-zui-chang-gong-gong-qian-zhui-b/">
                最长公共前缀
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/26-shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-xian-6/">
                删除排序数组中的重复项 removeDuplicates
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/remove-element/solution/hua-jie-suan-fa-27-yi-chu-yuan-su-by-guanpengchn/">
                移除元素 removeElement
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/increasing-decreasing-string/solution/shang-sheng-xia-jiang-zi-fu-chuan-by-leetcode-solu/">
                上升下降字符串 sortString
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/word-break/solution/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/">
                单词拆分 wordBreak
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/solution/zui-chang-lian-xu-di-zeng-xu-lie-by-leet-dmb8/">
                最长连续递增序列 findLengthOfLCIS
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-alexer-660/">
                最长回文子串 longestPalindrome
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/jump-game-ii/">
                跳跃游戏 II jump
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/">
                无重复字符的最长子串 lengthOfLongestSubstring
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/">
                数组中重复的数字 findRepeatNumber
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/binary-search//">
                二分查找 binarySearch
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/">
                用两个栈实现队列 CQueue
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/generate-parentheses/">
                括号生成 generateParenthesis
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/generate-parentheses/">
                字符串全排列 permutation
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/climbing-stairs/">
                爬楼梯（青蛙跳） climbStairs
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/">
                合并区间 mergeSection
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/add-strings/">
                字符串相加 addStrings
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/">
                买卖股票的最佳时机 maxProfit
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/3sum-closest/">
                最接近的三数之和 threeSumClosest
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/3sum-closest/">
                旋转数组的最小数字 minArray
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/longest-consecutive-sequence/">
                最长连续序列 longestConsecutive
            </a>
        </div>
    );
});

export default View;

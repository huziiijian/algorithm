
import React, { FC } from 'react';
import { observer } from 'mobx-react';
import style from '../style/index.less';

import Model from '../model';

interface Props {
  store: Model;
}

const View: FC<Props> = observer((props) => {
  const content = [
    {
      href: 'https://leetcode-cn.com/problems/running-sum-of-1d-array/',
      title: '一维数组的动态和',
    },
    {
      href: 'https://leetcode-cn.com/problems/two-sum/',
      title: '两数之和',
    },
    {
      href: 'https://leetcode-cn.com/problems/palindrome-number/',
      title: '回文数',
    },
    {
      href: 'https://leetcode-cn.com/problems/maximum-swap/solution/',
      title: '最大交换',
    },
    {
      href: 'https://leetcode-cn.com/problems/valid-parentheses/',
      title: '有效括号',
    },
    {
      href: 'https://leetcode-cn.com/problems/roman-to-integer/solution/hua-jie-suan-fa-13-luo-ma-shu-zi-zhuan-zheng-shu-b/',
      title: '罗马数字转整数',
    },
    {
      href: 'https://leetcode-cn.com/problems/longest-common-prefix/solution/hua-jie-suan-fa-14-zui-chang-gong-gong-qian-zhui-b/',
      title: '最长公共前缀',
    },
    {
      href: 'https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/26-shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-xian-6/',
      title: '删除排序数组中的重复项 removeDuplicates',
    },
    {
      href: 'https://leetcode-cn.com/problems/remove-element/solution/hua-jie-suan-fa-27-yi-chu-yuan-su-by-guanpengchn/',
      title: '移除元素 removeElement',
    },
    {
      href: 'https://leetcode-cn.com/problems/increasing-decreasing-string/solution/shang-sheng-xia-jiang-zi-fu-chuan-by-leetcode-solu/',
      title: '上升下降字符串 sortString',
    },
    {
      href: 'https://leetcode-cn.com/problems/word-break/solution/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/',
      title: '单词拆分 wordBreak',
    },
    {
      href: 'https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/solution/zui-chang-lian-xu-di-zeng-xu-lie-by-leet-dmb8/',
      title: '最长连续递增序列 findLengthOfLCIS',
    },
    {
      href: 'https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-alexer-660/',
      title: '最长回文子串 longestPalindrome',
    },
    {
      href: 'https://leetcode-cn.com/problems/jump-game-ii/',
      title: '跳跃游戏 II jump',
    },
    {
      href: 'https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/',
      title: '无重复字符的最长子串 lengthOfLongestSubstring',
    },
    {
      href: 'https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/',
      title: '数组中重复的数字 findRepeatNumber',
    },
    {
      href: 'https://leetcode-cn.com/problems/binary-search/',
      title: '二分查找 binarySearch',
    },
    {
      href: 'https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/',
      title: '用两个栈实现队列 CQueue',
    },
    {
      href: 'https://leetcode-cn.com/problems/generate-parentheses/',
      title: '括号生成 generateParenthesis',
    },
    {
      href: 'https://leetcode-cn.com/problems/climbing-stairs/',
      title: '爬楼梯（青蛙跳） climbStairs',
    },
    {
      href: 'https://leetcode-cn.com/problems/binary-tree-level-order-traversal/',
      title: '合并区间 mergeSection',
    },
    {
      href: 'https://leetcode-cn.com/problems/add-strings/',
      title: '字符串相加 addStrings',
    },
    {
      href: 'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/',
      title: '买卖股票的最佳时机 maxProfit',
    },
    {
      href: 'https://leetcode-cn.com/problems/3sum-closest/',
      title: '最接近的三数之和 threeSumClosest',
    },
    {
      href: 'https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof',
      title: '旋转数组的最小数字 minArray',
    },
    {
      href: 'https://leetcode-cn.com/problems/longest-consecutive-sequence/',
      title: '最长连续序列 longestConsecutive',
    },
    {
      href: 'https://leetcode-cn.com/problems/maximum-subarray/',
      title: '最大子序和 maxSubArray',
    },
    {
      href: 'https://leetcode-cn.com/problems/sort-an-array/solution/',
      title: '选择排序 selectSort',
    },
    {
      href: 'https://leetcode-cn.com/problems/move-zeroes/',
      title: '移动零 moveZeroes',
    },
    {
      href: '',
      title: '',
    },
    {
      href: '',
      title: '',
    },
  ];

  return (
    <div>
      <h1>数组类算法题</h1>
      {content.map((item, index) => (
        <div key={index}>
          <a href={item.href}>{item.title}</a>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
});

export default View;

/** @format */

import React, { FC } from 'react';
import { observer } from 'mobx-react';

import Model from '../model';

interface Props {
  store: Model;
}

const View: FC<Props> = observer((props) => {
  return (
    <div>
      <h1>链表类算法题</h1>
      <a href="https://leetcode-cn.com/problems/reverse-linked-list/solution/206-fan-zhuan-lian-biao-duo-chong-shi-xian-duo-cho/">
        翻转单链表
      </a>
      <br />
      <br />
      <a href="https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-leetcode-solution/">
        两数相加
      </a>
      <br />
      <br />
      <a href="https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/21-he-bing-liang-ge-you-xu-lian-biao-by-alexer-6-2/">
        合并有序链表 mergeTwoLists
      </a>
      <br />
      <br />
      <a href="https://leetcode-cn.com/problems/permutations/">全排列 permute</a>
      <br />
      <br />
      <a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/">
        二叉树的层序遍历 levelOrder
      </a>
      <br />
      <br />
      <a href="https://leetcode-cn.com/problems/number-of-islands/">岛屿数量 numIslands</a>
      <br />
      <br />
      <a href="https://leetcode-cn.com/problems/number-of-islands/">
        链表中倒数第k个节点 getKthFromEnd1 getKthFromEnd2
      </a>
    </div>
  );
});

export default View;

import LifeCycle, { LifeCycleProps } from "src/utils/VM/lifeCycle";
interface Params {}
interface Query {}
const list1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: null,
        },
    },
};
const list2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 7,
            next: null,
        },
    },
};
const list3 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};
const list4 = {
    val: 3,
    left: {
        val: 9,
    },
    right: {
        val: 20,
        left: {
            val: 15,
        },
        right: {
            val: 7,
        },
    },
};
class ListNode {
    val: any;
    next: any;
    constructor(val: any, next = null) {
        this.val = val;
        this.next = next;
    }
}

class PageModel extends LifeCycle<Params, Query> {
    constructor(props: LifeCycleProps<Params, Query>) {
        super(props);
        console.log(
            "numIslands",
            this.numIslands([
                ["1", "1", "0", "0", "1"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "1", "0", "0"],
                ["0", "0", "0", "1", "1"],
            ])
        );
    }

    // 翻转单链表
    reverseList = (head: any) => {
        if (!head || !head.next) return list1;
        let tail = null;
        // 注意链表的末节点是null
        while (head) {
            // 1,4步用来遍历，2,3步用来赋值
            const current = head.next; // 中间值保存当前节点指针指向
            head.next = tail; // 使当前节点指针指向上次的tail
            tail = head; // 新tail获得当前head值，上一步中已将指针指向老tail
            head = current; // head降级
        }
        return tail;
    };

    // 两数相加
    addTwoNumbers = (list1: any, list2: any) => {
        let head: any = null,
            curr: any = null; // head作为输出，curr作为过程计算值
        let carry = 0; // 代表进位值
        while (list1 || list2) {
            // 通过指针list,list2判断是否到达循环终点
            const n1 = list1 ? list1.val : 0; // 考虑链表长度不一致的情况
            const n2 = list2 ? list2.val : 0;
            const sum = n1 + n2 + carry; // 每位总值等于同级数值加上一位的进位值
            if (!head) {
                // 首次遍历，创造根节点
                head = curr = new ListNode(sum % 10);
            } else {
                curr.next = new ListNode(sum % 10);
                curr = curr.next; // 指针继续指向下一层
            }
            carry = Math.floor(sum / 10);
            list1 && (list1 = list1.next);
            list2 && (list2 = list2.next);
        }
        carry && (curr.next = new ListNode(carry)); // 考虑到最后位相加依然进位的情况
        return head;
    };

    //  合并有序链表
    mergeTwoLists1 = (list1: any, list2: any) => {
        if (list1 === null) {
            // 防止特殊情况，若有一者为空则返回非空链表
            return list2;
        }
        if (list2 === null) {
            // 防止特殊情况
            return list1;
        }
        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists1(list1.next, list2);
            return list1;
        } else {
            // 注意上面的非空判断并不是常规的出口，这里的else为list.next在非null情况下，最后所有情况的出口
            list2.next = this.mergeTwoLists2(list1, list2.next);
            return list2;
        }
    };
    mergeTwoLists2 = (l1: any, l2: any) => {
        let prevHead = new ListNode(-1);
        let currNode = prevHead; // 指针
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                currNode.next = l1;
                l1 = l1.next;
            } else {
                currNode.next = l2;
                l2 = l2.next;
            }
            currNode = currNode.next; // 改变currNode去获得新的next指向，但prevHead不会被污染
        }
        // 如果出现null，则指向剩余的l1,l2
        currNode.next = l1 ? l1 : l2;
        return prevHead.next;
    };

    /**
     * @description: https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
     * @param {Array} nums
     * @return {*}
     */
    permute = (nums: Array<number>) => {
        const res: Array<Array<number>> = [];
        const used: {
            [key: number]: boolean;
        } = {};

        const dfs = (path: Array<number>) => {
            if (path.length == nums.length) {
                // 个数选够了
                // 结束当前递归分支，并不代表整个函数的结束，所以 path 还在参与递归
                res.push(path.slice()); // 拷贝path，因为path会被递归函数直接修改
                return;
            }
            for (const num of nums) {
                // for枚举出每个可选的属性值
                // if (path.includes(num)) continue; // 别这么写！查找是O(n)，增加时间复杂度
                if (used[num]) continue; // 使用过的，跳过
                path.push(num); // 选择当前的数，加入path
                used[num] = true; // 记录一下 使用了
                dfs(path); // 基于选了当前的数，递归
                // 每一次递归结束，得到完整的一种结果后要（ 回溯 ）将最后选的数pop出来
                path.pop();
                // 我们不是找到一个排列就完事，要找出所有满足条件的排列。
                // 递归结束时，结束的是当前的递归分支，还要去别的分支继续搜。
                // 所以，要撤销当前的选择，回到选择前的状态，去选下一个选项，即切入下一个分支。
                // 注意，往map添加的当前选择也要同时撤销。代表没有做这个选择。
                // 退回来，把路走全，才能在一棵空间树中，回溯出所有的解
                used[num] = false; // 撤销这个记录
            }
        };

        dfs([]); // 递归的入口，空path传进去
        return res;
    };

    /**
     * @description: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/dai-ma-sui-xiang-lu-er-cha-shu-ceng-xu-b-zhun/
     * @param {any} root
     * @return {*}
     */
    levelOrder = function (root: any) {
        // 二叉树的层序遍历，即为广度优先遍历
        const res: Array<Array<number>> = [];
        const quene: Array<any> = []; // 记录当前层级所有节点
        quene.push(root);
        if (root === null) return res;
        // 当前节点不为空的时候进行遍历
        while (quene.length !== 0) {
            // 用来记录当前层级所有节点的值
            const curLevel: Array<number> = [];
            const len = quene.length;
            for (let i = 0; i < len; i++) {
                // 从左至右，先进先出
                const node = quene.shift();
                curLevel.push(node.val);
                // 将当前层每个节点放进临时队列，进行下一次遍历
                node.left && quene.push(node.left);
                node.right && quene.push(node.right);
            }
            // 把每一层的结果放到结果数组
            res.push(curLevel);
        }
        return res;
    };

    /**
     * @description: https://leetcode-cn.com/problems/number-of-islands/solution/pythonjavascript-tao-lu-dfs200-dao-yu-shu-liang-by/
     * @param {Array} grid
     * @return {*} 时间复杂度：O(m*n); 空间复杂度：O(m*n)
     */
    numIslands = (grid: Array<Array<string>>) => {
        let res = 0;
        const rowsLen = grid.length;
        const colsLen = grid[0].length;
        const determinScope = (
            grid: Array<Array<string>>,
            i: number,
            j: number
        ) => {
            if (
                // 保证i，j不超出临界范围，且指针遇到了 ’0‘
                i < 0 ||
                j < 0 ||
                i > rowsLen - 1 ||
                j > colsLen - 1 ||
                grid[i][j] === "0"
            )
                return;
            grid[i][j] = "0"; // 访问过的，置为”0“，使递归逼近return
            // 上下左右查找
            determinScope(grid, i - 1, j);
            determinScope(grid, i + 1, j);
            determinScope(grid, i, j - 1);
            determinScope(grid, i, j + 1);
        };
        for (let i = 0; i < rowsLen; i++) {
            for (let j = 0; j < colsLen; j++) {
                if (grid[i][j] === "1") {
                    // 开始递归找寻边界
                    determinScope(grid, i, j);
                    res++;
                }
            }
        }
        return res;
    };
}

export default PageModel;

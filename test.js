/*
 * @Description: 
 * @Autor: zijian.hu01
 * @Date: 2021-09-26 14:27:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-26 14:36:46
 */

class ListNode {
    val;
    next;
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

addTwoNumbers = (list1, list2) => {
    let head = null,
        curr = null; // head作为输出，curr作为过程计算值
        head = curr = {a:1}
        curr.a =2
        curr = {c:3}
        console.log(curr)
    return head;
};
const list1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {},
        },
    },
};
const list2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {},
        },
    }
};
console.log(addTwoNumbers(list1, list2));
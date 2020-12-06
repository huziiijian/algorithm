import { observable, computed, action } from "mobx";
import { history, qs } from "src/utils";
import Service from "../service";

import LifeCycle, { LifeCycleProps } from "src/utils/VM/lifeCycle";
interface Params {}
interface Query {}
const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 7,
            next: null,
        },
    },
};
const list2 = {
    val: 4,
    next: {
        val: 5,
        next: {
            val: 6,
            next: null,
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
        // this.addTwoNumbers(list1, list2)
        //   this.reverseList(list1);
        console.log(this.mergeTwoLists1(list1, list2));
    }
    @observable showLoading = true;

    // 两数相加
    addTwoNumbers = (list1: any, list2: any) => {
        let head: any = null,
            tail: any = null; // head作为输出，tail作为过程计算值
        let carry = 0; // 代表进位值
        while (list1 || list2) {
            // 通过指针list,list2判断是否到达循环终点
            const n1 = list1 ? list1.val : 0; // 考虑链表长度不一致的情况
            const n2 = list2 ? list2.val : 0;
            const sum = n1 + n2 + carry; // 每位总值等于同级数值加上一位的进位值
            if (!head) {
                // 首次遍历，创造根节点
                head = tail = new ListNode(sum % 10);
            } else {
                tail.next = new ListNode(sum % 10);
                tail = tail.next; // 指针继续指向下一层
            }
            carry = Math.floor(sum / 10);
            list1 && (list1 = list1.next);
            list2 && (list2 = list2.next);
        }
        carry && (tail.next = new ListNode(carry)); // 考虑到最后位相加依然进位的情况
        console.log(head);
    };

    // 翻转单链表
    reverseList = (list1: any) => {
        if (!list1 || !list1.next) return list1;
        let head = list1,
            tail: any = null;
        while (head) {
            const current = head.next; // 保存当前节点的指针指向
            head.next = tail; // 使当前节点指针指向老tail
            tail = head; // 新tail获得当前head值并能将指针指向老tail
            head = current; // head降级
        }
        console.log(tail);
    };

    //  合并有序链表
    mergeTwoLists1 = (list1: any, list2: any) => {
        if (list1 === null) { // 防止特殊情况
            return list2; 
        }
        if (list2 === null) { // 防止特殊情况
            return list1;
        }
        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists1(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists2(list1, list2.next);
            return list2;
        }
    };
    mergeTwoLists2 = (l1: any, l2: any) => {
        var prevHead = new ListNode(-1);
        var prevNode = prevHead; // 指针
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                prevNode.next = l1;
                l1 = l1.next;
            } else {
                prevNode.next = l2;
                l2 = l2.next;
            }
            prevNode = prevNode.next;
        }
        prevNode.next = l1 ? l1 : l2; // 指向剩余的l1,l2
        return prevHead.next;
    };
}

export default PageModel;

import { observable, computed, action } from "mobx";
import {
   history,
   qs,
} from 'src/utils';
import Service from '../service'


import LifeCycle, { LifeCycleProps } from 'src/utils/VM/lifeCycle'
interface Params {
}
interface Query {
}
const list1 = {
   val: 2,
   next: {
      val: 4,
      next: {
         val: 3,
         next: null
      }
   }
}
const list2 = {
   val: 5,
   next: {
      val: 6,
      next: {
         val: 4,
         next: null
      }
   }
}
class ListNode {
   val: any;
   next: any;
   constructor(val: any, next = null) {
      this.val = val;
      this.next = next;
   }
}

class PageModel extends LifeCycle<Params, Query>{
   constructor(props: LifeCycleProps<Params, Query>) {
      super(props)
      this.addTwoNumbers(list1, list2)
   }
   @observable showLoading = true;
   addTwoNumbers = (list1: any, list2: any) => {
      let head: any = null, tail: any = null; // head作为输出，tail作为过程计算值
      let carry = 0; // 代表进位值
      while (list1 || list2) { // 通过指针list,list2判断是否到达循环终点
         const n1 = list1 ? list1.val : 0; // 考虑链表长度不一致的情况
         const n2 = list2 ? list2.val : 0;
         const sum = n1 + n2 + carry; // 每位总值等于同级数值加上一位的进位值
         if (!head) { // 首次遍历，创造根节点
            head = tail = new ListNode(sum % 10)
         } else {
            tail.next = new ListNode(sum % 10)
            tail = tail.next; // 指针继续指向下一层
         }
         carry = Math.floor(sum / 10)
         list1 && (list1 = list1.next);
         list2 && (list2 = list2.next);
      }
      carry && (tail.next = new ListNode(carry)) // 考虑到最后位相加依然进位的情况
      console.log(head)
   }
}


export default PageModel;

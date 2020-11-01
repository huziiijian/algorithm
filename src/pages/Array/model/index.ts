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
class PageModel extends LifeCycle<Params, Query>{
   constructor(props: LifeCycleProps<Params, Query>) {
      super(props)
      this.runningSum([1, 2, 3, 4])
      this.twoSum([1, 2, 3, 4], 5)
   }
   @observable showLoading = true;

   // 一维数组的动态和
   @action runningSum = (nums: Array<number>) => {
      let currentSum = 0;
      let runningSum: Array<number> = [];
      let len = nums.length;
      for (let i = 0; i < len; i++) {
         currentSum += nums[i];
         runningSum.push(currentSum)
      }
      console.log(runningSum)
   }

   // 两数之和
   @action twoSum = (nums: Array<number>, target: number) => {
      let index = nums.length-1;
      let hash:{
         [key:number]:number
      } = {};
      while(index > 0) {
         if(hash[target-nums[index]]){ // 目标值是否已经储存在索引内
            console.log(index,hash[target-nums[index]])
            return
         }else {
            hash[nums[index]] = index;
         }
         index --;
      }
   }

}


export default PageModel;

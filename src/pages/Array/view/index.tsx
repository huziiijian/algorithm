import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less';



import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   return (
      <div>
         <h1>数组类算法题</h1>
         <a href='https://leetcode-cn.com/problems/running-sum-of-1d-array/'>一维数组的动态和</a>
         <br/><br/>
         <a href='https://leetcode-cn.com/problems/two-sum/'>两数之和</a>
      </div>
   );
})

export default View;

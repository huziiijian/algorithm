import React, {FC} from "react";
import { observer } from "mobx-react";
import style from '../style/index.less';



import Model from '../model'
interface Props {
    store: Model
}

const View:FC<Props> = observer((props) => {

    return (
      <div>
         <h1>链表类算法题</h1>
         <a href='https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-leetcode-solution/'>两数相加</a>
         <br/><br/>
      </div>
    );
})

export default View;

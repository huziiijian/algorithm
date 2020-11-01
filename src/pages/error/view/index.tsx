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
         <h1>力扣算法题解</h1>
         <p onClick={() => props.store.JumpTo('array')}>数组思想</p>
         <p onClick={() => props.store.JumpTo('list')}>链表思想</p>
         <p onClick={() => props.store.JumpTo('numbers')}>数字类型</p>
      </div>
   );
})

export default View;

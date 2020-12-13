import React, { FC } from "react";
import { observer } from "mobx-react";
import style from "../style/index.less";

import Model from "../model";
interface Props {
    store: Model;
}

const View: FC<Props> = observer((props) => {
    return (
        <div>
            <h1>数组类算法题</h1>
            <a href="https://leetcode-cn.com/problems/running-sum-of-1d-array/">
                一维数组的动态和
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/two-sum/">两数之和</a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/palindrome-number/">
                回文数
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/maximum-swap/solution/">
                最大交换
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/valid-parentheses/">
                有效括号
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/roman-to-integer/solution/hua-jie-suan-fa-13-luo-ma-shu-zi-zhuan-zheng-shu-b/">
                罗马数字转整数
            </a>
            <br />
            <br />
            <a href="https://leetcode-cn.com/problems/longest-common-prefix/solution/hua-jie-suan-fa-14-zui-chang-gong-gong-qian-zhui-b/">
                最长公共前缀
            </a>
        </div>
    );
});

export default View;

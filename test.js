/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-26 14:27:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-15 18:13:14
 */


let global = 0;

const fun1 = (fun) => {
    setTimeout(() => {
        fun();
        global = 1;
        console.log("fun1", global);
    }, 1000);
};

const fun2 = () => {
    setTimeout(() => {
        global = 2;
        console.log("fun2", global);
    }, 2000);
};

const fun3 = () => {
    setTimeout(() => console.log("fun3", global), 1000);
};

const fun4 = () => {
    setTimeout(() => console.log("fun4", global), 2500);
};

fun1(fun2);
fun3();
fun4();

console.log("global", global);

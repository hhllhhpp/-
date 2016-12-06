/**
 * js，返回一个对象的类型
 *
 * 当调用toString方法时，程序将做出以下行为：
 * 1. 获得对象的class属性的值。 
 * 2. 计算出包含这三个部分"[object "， Result (1)， 和 "]"的字符串。 
 * 3. 返回运算结果。
 *
 * __getClass(5); // => "Number"
 * __getClass({}); // => "Object"
 * __getClass(/foo/); // => "RegExp"
 * __getClass(''); // => "String"
 * __getClass(true); // => "Boolean"
 * __getClass([]); // => "Array"
 * __getClass(undefined); // => "Window"
 * __getClass(Element); // => "Constructor"
 *
 */
function __getClass(object){
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};

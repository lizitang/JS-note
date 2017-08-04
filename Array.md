### Array类型
#### 创建数组
var array = new Array();  
var array = new Array(20);//20传入的为length
#### 1.join
如果不给join传任何参数则默认以逗号分隔

```
var a = [1,2,3];
console.log(a.join());//'1,2,3'
console.log(a.join(' '));//'1 2 3'
console.log(a.join(''));//'123'

var b = new Array(10);
b.join('-');//'---------'，9个连字符组成的字符串
```
#### push，pop
array.push,返回的是数组的长度  
array.pop,返回删除的一项  
两者都==改变了原数组==
#### shift
删除头部，返回第一项，==改变原数组==
var colors = [1,2,3];
colors.shift();//1
console.log(colors);
#### unshift
在数组前端添加任意项，==返回新数组的长度==  
总结：==一般添加元素，返回的是长度，删除返回删除项==
#### reverse：反转数组

```
var a = [1,2,3,4];
a.reverse();//[4,3,2,1]
console.log(a);
```
#### sort() 
调用每个数组项的toString()方法，比较得到的字符串  

```
//升序
function compare(value1,value2){
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else{
        return 0;
    }
}
var values = [0,1,5,10,15]
values.sort(compare);
```
#### 使用sort方法创建随机数组

```
function compare(){
    return Math.random()-0.5;
}
array.sort(compare);
```
#### concat()
#### slice
slice(start,end)//==返回字数组，对原数组没有改变==
#### splice
spice(start,howmany,a1,a2)  
howmany=0时，不删除，a1,a2表示添加项  
==改变原数组==
#### indexof(search,satrt);
indexOf(search,start)方法接收search和start两个参数，返回search首次出现的位置，如果没有找到则返回-1
start参数表示该搜索的开始位置
##### indexof兼容性写法
```
if (typeof Array.prototype.indexOf != "function") {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var index = -1;
    fromIndex = fromIndex * 1 || 0;
    for (var k = 0, length = this.length; k < length; k++) {
      if (k >= fromIndex && this[k] === searchElement) {
          index = k;
          break;
      }
    }
    return index;
  };
}
```
2....==循环调用indexof找到所有匹配的项==

```
function allIndexof(array,value){
    var result =[];
    var pos = array.indexof(value);
    if(pos = -1){
        return -1;
    }
    while(pos>-1){
        result.push(pos);
        pos = array.indexof(value,pos+1)
    }
    return result;
}
```
#### 归并方法：reduce(),reduceRight()
迭代数组所有的项，构建一个最终返回值
* reduce :从第一项开始向后遍历
```
//values是一个数组
values.reduce(function(prev,cur,index,array){
   //todo 
});
//index:当前变量对应的元素在数组中的索引(从0开始)
//只有前两个参数是必须的


var a =[1,2,3,4,5];
var sum = a.reduce(function(x,y){return x+y},0);//求和
var product = a.reduce(function(x,y){return x*y},1);
var max=a.reduce(function(x,y){return (x>y)?x:y})
```
==利用reduce方法可以写一个数组求和的sum方法==

```
Array.prototype.sum(){
    return this.reduce(function(prev,cur){
      return prev+cur;  
    })
};
```
==二维数组的扁平化==

```
var matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
//二维数组扁平化
var flatten = matrix.reduce(function (prev, cur) {
  return prev.concat(cur);
});
console.log(flatten); // [1, 2, 3, 4, 5, 6]
```


* reduceRight:从数组最后一项开始向前遍历
#### 迭代方法之
* ==map()==:对数组的每一项运行给定函数，返回每次函数调用的结果组成的数组

```
[1,2,3].map(function(item,index,arr){return item*item});//[1,4,9]
[1,2,3].map(function(item,index,arr){return item*index});//[0,2,6]
```


```
//map()方法还可以接受第二个参数，表示回调函数执行时this所指向的对象
var arr = ['a','b','c'];
[1,2].map(function(item,index,arr){return this[item]},arr);//['b','c']
```

* ==forEach()==
类似for循环

```
array.forEach(function(item,index,arr){
    
});
```




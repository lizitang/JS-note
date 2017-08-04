### 闭包
#### 开始之前先讨论一下如何从外部读取局部变量
就是在函数的内部再定义一个函数

```
function f1() {
    var n = 3;
    function f2(){
        alert(n);//3
    }
}
```
在上面f1内部的所有局部变量对f2是可见的。但是f2的局部变量对f1却是不可见的。因为js的链式作用域结构，子对象会一级级向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象是可见的。  
既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，就可以在f1外部读取它的内部变量了啊  

```
function f1(){
    var n = 3;
    function f2(){
        alert(n);
    }
    return f2;
}

var result = f1();
result();//3
```
### 含义：
闭包就是能够读取其他函数内部变量的函数


```
var name = "The Window";
var object ={
    name : "My Object",
    getNameFunc ：function(){
        return function(){
            return this.name;
        };
    }
};
alert(object.getNameFunc()());//The Window
```

```
var name = "The Window";
var object ={
    name : "My Object",
    getNameFunc:function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
alert(object.getNameFunc()());//My Object
```

```
function foo(){
    var a = 2;
    return function(){
        console.log(a);//2
    }
}
foo()();
```




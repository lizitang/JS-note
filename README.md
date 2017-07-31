### Javascript高级程序设计学习笔记
#### 1.富文本编辑
    1.本质是在页面中嵌入iframe,设置designMode属性。designMode有两个值：on 和off
    
```
//跨浏览器事件处理程序
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,hander);
		}else{
			element["on"+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false)
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type] = handler;
		}
	}
};
```
    2.另一个方法是使用属性：contenteditable
        <div id="aa" contenteditable></div>
    3.操作富文本
    document.execCommand----->包含三个参数：执行命令的名称，布尔值，执行命令必须的一个值（不需要，传入null）
    document.execCommand('italic',false,null);
    4.富文本选区
    getSelection()//获取选区文本
    anchorNode :选区起点所在节点
### 15章 canvas
- 0.先判断getContext()是否存在
- 1.toDataURL()方法，可以导出在canvas元素上绘制的图像<canvas id="drawing" width="100px" height="100px"></canvas>
```
var draw=document.getElementById("drawing");
if(draw.getContext){
    //取得图像的数据URI
    var imgURI = draw.toDataURL("image/png");
   
    //显示图像
    var image = document.createElement('img');
    image.src=imgURI;
    document.body.appendChild(image);
}
```
2.绘制矩形
###### fillRect()、strokeRect()、clearRect()
fillRect(x,y,width,height);  
arc()
## 第6章 HTML5
    1.跨文档消息传递 ：postMessage



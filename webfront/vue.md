---
title: 'Vue'
---

## 为什么学习vue.js

1原有项目使用vue进行重构

2常用的vue技术栈(储备)

3招聘中的需求

## 简单认识一个vuejs

1读音

2vue是一个渐进式的框架，什么是渐进式框架呢？

​	渐进式以为着你可以将vue作为应用的一部分嵌入使用，带来交互体验（想用啥用啥，不用全都用，渐进式框架）

​	vue的核心库以及生态系统 （我们有很多NB的东西，非常的丰富）

​	core-vue-router-vuex vue全家桶

vue-cli webpack

vue-dev



3vue具有很多高级功能

​	解耦视图和数据

​	可复用的组件

​	前端路由技术

​	状态管理

​	虚拟DOM

## vuejs安装方式

##### CDN引入

​	类似jquery的引入方式叫做CDN引入

##### 下载和引入

​	下载后加入项目中，然后引用

##### NPM安装管理

​	npm install vue

## vuejs初体验

##### hello vuejs



​	声明式编程

​	命令式编程

​	vue是一个响应式框架，即数据发生改变时，界面会自动改变。

## vue实例传入的options

目前需要掌握这些选项

​	el：

​		类型：string|HTMLElement

​		作用：决定之后Vue实例会管理哪一个DOM

​	data:

​		类型：Object|Function(函数)

​		作用：Vue实例对应的数据对象

​	methods:

​		类型：[key:string]:Function

​		作用：定义属于Vue的方法，可以在其他地方进行调用，也可以在指令中使用。		 
## MVVM

框架：jquery框架（封装了很多对DOM对象操作的方法 包括选择元素 筛选元素 事件 动画 ajax）     bootstrap框架（帮助我们快速创建网站，不需要去编写繁琐的CSS样式）  vue框架（帮我们快速创建高端的项目）   

总结：框架就是为我们提供了一整套便利的工具，让我们开发更加的快捷方便。

架构：软件设计的一种思想      三层架构 MVC架构  MVVM架构

总结：架构能让整个项目更具条理性和维护性。

## 什么是MVVM Model  View ViewModel

**MVVM**是一种软件架构。

MVVM有助于将[图形用户界面](https://wiki.hk.wjbk.site/baike-图形用户界面)的开发与[业务逻辑](https://wiki.hk.wjbk.site/w/index.php?title=业务逻辑&action=edit&redlink=1)或[后端](https://wiki.hk.wjbk.site/baike-前端和后端)逻辑（*数据模型*）的开发[分离](https://wiki.hk.wjbk.site/baike-关注点分离)开来，这是通过[置标语言](https://wiki.hk.wjbk.site/baike-置标语言)或GUI代码实现的。MVVM的*视图模型*是一个值转换器，[[1\]](https://wiki.hk.wjbk.site/wiki/MVVM#cite_note-MVVM-eliminates-valueconverters-1) 这意味着视图模型负责从模型中暴露（转换）[数据对象](https://wiki.hk.wjbk.site/baike-对象_(计算机科学))，以便轻松管理和呈现对象。在这方面，视图模型比视图做得更多，并且处理大部分视图的显示逻辑。[[1\]](https://wiki.hk.wjbk.site/wiki/MVVM#cite_note-MVVM-eliminates-valueconverters-1) 视图模型可以实现[中介者模式](https://wiki.hk.wjbk.site/baike-中介者模式)，组织对视图所支持的[用例](https://wiki.hk.wjbk.site/baike-用例)集的后端逻辑的访问。

### View层

视图层

在前端开发中，通常就是DOM层

主要的作用是给用户展示各种信息

### Model

数据层

数据可能是我们固定的死数据，更多的是来自我们服务器（远程接口），从网络上请求来的数据

### ViewModel

视图模型层

视图模型层是View和Model的桥梁。

一方面它实现了DataBinding，将Model的改变实时反映到View中。

另一方面他实现了DOM对象的监听，当DOM发生一些事件（点击、滚动等）,可以监听到，并在需要的情况下改变相应的Data。

## Vue的生命周期

一个vue程序从开始到消亡的过程。

当一个new Vue()的时候，就表示vue的生命周期开始了，然后伴随着程序不断的进行，最终走向消亡。

主要的生命周期函数分类：

​	**创建生命周期函数:**

​	beforeCreate:实例刚在内存中被创建出来，此刻还没有初始化好data和methods属性

​	created:实例已经在内存中创建OK，此时data和methods已经创建OK，此时还没有开始编译模板。

​	beforeMount:此时已经完成模板的编译，但是还没有挂载到页面中

​	mounted:此时已经将编译好的模板挂载到页面指定的容器中显示。

​	**运行期间的生命周期函数:**

​	beforeUpdate:状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上的数据还是旧的，因为此时还没有重新渲染DOM。

​	updated：示例更新完毕调用次函数，此时data和界面都已经渲染。

​	**销毁期间的生命周期函数**

​	beforeDestroy:实例销毁之前调用，在这一步，实例仍然可用。

​	destroyed:销毁，所有事件监听会被移出，子实例也会被销毁。



![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png)

------

适用场景：

```
beforecreate : 可以在这加个loading事件 
created ：在这结束loading，还做一些初始化，实现函数自执行 
mounted ： 在这发起axios请求，拿回数据，配合路由钩子做一些事情，处理数据
beforeDestory： destoryed ：当前组件已被删除，清空相关内容
```
## 指令
指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素。

### [参数](https://cn.vuejs.org/v2/guide/syntax.html#参数)

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute：

```html
<a v-bind:href="url">...</a>
```

在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 `href` attribute 与表达式 `url` 的值绑定。

另一个例子是 `v-on` 指令，它用于监听 DOM 事件：

```html
<a v-on:click="doSomething">...</a>
```

在这里参数是监听的事件名。我们也会更详细地讨论事件处理。

### [动态参数](https://cn.vuejs.org/v2/guide/syntax.html#动态参数)

> 2.6.0 新增

从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：

```html
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 `data` property `attributeName`，其值为 `"href"`，那么这个绑定将等价于 `v-bind:href`。

同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

在这个示例中，当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`。

#### 对动态参数的值的约束

动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

#### 对动态参数表达式的约束

动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：

```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

### [修饰符](https://cn.vuejs.org/v2/guide/syntax.html#修饰符)

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

在接下来对 [`v-on`](https://cn.vuejs.org/v2/guide/events.html#事件修饰符) 和 [`v-for`](https://cn.vuejs.org/v2/guide/forms.html#修饰符) 等功能的探索中，你会看到修饰符的其它例子。

### [缩写](https://cn.vuejs.org/v2/guide/syntax.html#缩写)

`v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的[单页面应用程序 (SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时，`v-` 前缀也变得没那么重要了。因此，Vue 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

#### [`v-bind` 缩写](https://cn.vuejs.org/v2/guide/syntax.html#v-bind-缩写)

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

#### [`v-on` 缩写](https://cn.vuejs.org/v2/guide/syntax.html#v-on-缩写)

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

它们看起来可能与普通的 HTML 略有不同，但 `:` 与 `@` 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。
## bind指令

作用：动态绑定属性

指令：v-bind

缩写：:

参数：attrOrProp

```javascript
//基本用法
<img v-bind:src="url">
//对象语法
<h2 :class="{active:true,line:false}">{{message}}</h2>
//函数语法
<h2 :class="getClasses()">{{message}}</h2>
methods:{
getClasses:function(){
   return {active:this.isActive,line:this.isLine}
	}
}
//数组语法（不常用）
<h2 :class="[active,line]">{{message}}</h2>

```


### 计算属性

一般情况下，在模板中可以直接通过插值显示一些data数据。

当我们对变量需要进行计算的时候需要将计算写在计算属性中：

```javascript
<h3>{{方法名}}</h3>


computed:{//计算属性
	方法名(){
		return this.n+this.m;
	}
}
```

### 侦听器watch

```javascript
<div id="app">
        <input type="text" v-model="user_info.name">
    </div>
    <script>
        const app=new Vue({
            el:"#app",
            data:{
                message:"",
                user_info:{
                    name:'blue',
                    age:18
                }
            },
            watch:{
                'user_info.name':function(){
                    console.log('name变了');
                }
            }
        })
```

计算属性和侦听器的区别是：

1计算支持缓存 不支持异步

2不支持缓存     支持异步

当需要的数据变化时执行异步或开销较大的操作时，该方式比较有用。

### 计算属性的setter和getter

```javascript
computed：{
    fullName:{
        //计算属性一般只有get没有set
        //如果要实现set是一定有参数的
        set:function(){},
        get：function{
         return 
        }
    }
}
```



## 事件监听

在前端开发中，我们经常需要进行交互，比如我们需要监听用户的点击、拖拽、键盘事件等。

**在Vue中我们使用v-on指令进行监听。**

**v-on介绍**

**作用：绑定事件监听器**

**缩写：@**

**参数：Event**

**语法糖：@事件名**



事件使用注意：

1.事件监听时，该方法没有参数，那么可以省略括号。

```html
<button @click="clickFunction()">测试</button>
<button @click="clickFunction">测试</button>
```

2.事件监听时，方法如果有参数。

1）那么括号中需要写参数

**2）但是如果省略括号，那么此时会默认接收一个事件参数event(重要！)**

```javascript
//调用没有传入参数
<button @click="method2">测试</button>
//方法有参数
method2(x){
     console.log(x);
 }
 //结果：
MouseEvent{isTrusted......}
```

那么 这个事件参数有什么用呢？

1..可以通过$event进行对dom元素的获取

```
//通过srcElement获取元素
e.srcElement
```

2..除此之外我们还可以对标签自身的属性进行修改，比如说改变button按钮的文字值

```
 e.srcElement.style.display="none";
```

3..我们也可以通过$event获取标签自定义的属性值

```
   e.srcElement.textContent="HelloWorld!";
```



总结：

1mouseEvent事件对象非常的重要，他可以让我们捕捉到我们点击的元素。

2vue中所有的方法都会内置一个事件对象，参数名$event。

## 条件判断

vue中的流程控制提供了v-if、v-else-if、v-else

这三个指令与javascript条件语句类似

vue的条件指令可以根据表达式的值在DOM中渲染或销毁元素或组件

简单演示：





总结：

v-if:适合一种特殊的判断

```javascript
let type=0;
if(type==1)
{
	//颜色变成红色
}
```



v-if+v-else:双选一的情况

```javascript
let gendar=1;
if(gendar==0)
{
	//男
}
else
{
	//女
}

  <a v-if="gendar==0">男</a>
<a v-else>女</a>


```



v-if + v-else if +v-else:情况比较多的条件判断

```javascript
let week=3;
if(week==1){星期一}
else if(week==2){星期二}
...
else{星期天}


//该语法效率很低
if(week==1){星期一}
if(week==2){星期二}
if(week==3){星期三}
if(week==4){星期四}
...
if(week==7){星期天}


```





v-show用来控制元素进行显示

语法：

```javascript
<h2 v-if="false">{{message}}</h2>
<h2 v-show="false">{{message}}</h2>
```

v-show和v-if的区别是什么呢

v-if和v-show对比

```
v-if当条件为false时，vue不会有对应的元素在DOM中

v-show当条件为false时，仅仅是将元素的display属性设置为none
```

**开发中使用选择：**

**当需要在显示和隐藏之间切片频繁的时候，使用v-show**

**当只用一次切换时，使用v-if**

## v-for指令

1.遍历数组

```javascript
//简单的数组遍历
v-for="item in list"
//带索引的数组遍历
v-for="(item,index) in list"
```



2.遍历对象

遍历对象就相当于将对象中的所有属性的值输出出来

```javascript
//简单对象遍历
v-for="item in list"
//带key值的遍历
v-for="(value,key) in list"
```





### 组件的key属性

**官方推荐我们再使用v-for时，给对应的元素或组件添加上一个:key属性**。

为什么需要这个key属性呢？

diff算法：



**key的作用主要是为了高效的更新虚拟DOM**

diff算法



总结：一般来说我们把主键当做key来进行设置

注意：key值不能重复



### ES6for of和for in

for in返回的值是数据结构的**键名**。

for of循环的是键值中的**值**,且需要具有iterator接口。

具有iterrator的数据类型:Array Map Set String arguments NodeList



```javascript
可以使用Object.keys()或者Object.values()给对象部署iterator属性
```

```javascript
const obj = {
        a: 1,
        b: 2,
        c: 3
    }
 for (let i of Object.values(obj)) {
        console.log(i)
 }
   for (let i of Object.keys(obj)) {
        console.log(i)
 }
```
## 过滤器Filter

```javascript
//vue
filters: {
    showPrice(price)
    {
        return price.toFixed(2)
    }
}
//html
{{item.price | showPrice }}
```


## [v-model基础用法](https://cn.vuejs.org/v2/guide/forms.html#基础用法)

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

对于需要使用[输入法](https://zh.wikipedia.org/wiki/输入法) (如中文、日文、韩文等) 的语言，你会发现 `v-model` 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 `input` 事件。

### [文本](https://cn.vuejs.org/v2/guide/forms.html#文本)

```javascript
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

Message is:

### [多行文本](https://cn.vuejs.org/v2/guide/forms.html#多行文本)

```javascript
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效，应用 `v-model` 来代替。

### [复选框](https://cn.vuejs.org/v2/guide/forms.html#复选框)

单个复选框，绑定到布尔值：

```javascript
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

 false

多个复选框，绑定到同一个数组：

```javascript
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```

 Jack John Mike
Checked names: []

### [单选按钮](https://cn.vuejs.org/v2/guide/forms.html#单选按钮)

```javascript
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```

 One
 Two
Picked:

### [选择框](https://cn.vuejs.org/v2/guide/forms.html#选择框)

单选时：

```javascript
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

请选择 A B C Selected:

如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

多选时 (绑定到一个数组)：

```javascript
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```

A B C
Selected: []

用 `v-for` 渲染的动态选项：

```javascript
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

​     One       Two       Three   Selected: A

### [值绑定](https://cn.vuejs.org/v2/guide/forms.html#值绑定)

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```javascript
<!-- 当选中时，`picked` 为字符串 "a" --><input type="radio" v-model="picked" value="a"><!-- `toggle` 为 true 或 false --><input type="checkbox" v-model="toggle"><!-- 当选中第一个选项时，`selected` 为字符串 "abc" --><select v-model="selected">  <option value="abc">ABC</option></select>
```

但是有时我们可能想把值绑定到 Vue 实例的一个动态 property 上，这时可以用 `v-bind` 实现，并且这个 property 的值可以不是字符串。

### [复选框](https://cn.vuejs.org/v2/guide/forms.html#复选框-1)

```javascript
<input  type="checkbox"  v-model="toggle"  true-value="yes"  false-value="no">// 当选中时vm.toggle === 'yes'// 当没有选中时vm.toggle === 'no'
```

这里的 `true-value` 和 `false-value` attribute 并不会影响输入控件的 `value` attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，请换用单选按钮。

### [单选按钮](https://cn.vuejs.org/v2/guide/forms.html#单选按钮-1)

```javascript
<input type="radio" v-model="pick" v-bind:value="a">// 当选中时vm.pick === vm.a
```

### [选择框的选项](https://cn.vuejs.org/v2/guide/forms.html#选择框的选项)

```javascript
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

### [修饰符](https://cn.vuejs.org/v2/guide/forms.html#修饰符)

### [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy)

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件_之后_进行同步：

```javascript
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```

### [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number)

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```javascript
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

### [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim)

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```javascript
<input v-model.trim="msg">
```

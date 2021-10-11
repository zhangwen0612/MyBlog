---
title: 'ASP.NET MVC框架'
---

## ORM对象关系映射

什么是ORM
ORM(Object-relational mapping)，中文翻译为对象关系映射，是一种为了解决面向对象与关系数据库存在的互不匹配的现象的技术。简单的说，ORM是通过使用描述对象和数据库之间映射的元数据，将程序中的对象自动持久化到关系数据库中。

为什么用ORM
在程序开发中，数据库保存的表，字段与程序中的实体类之间是没有关联的，在实现持久化时就比较不方便。那么，到底如何实现持久化呢？一种简单的方案是采用硬编码方式，为每一种可能的数据库访问操作提供单独的方法。这种方案存在以下不足：

1.持久化层缺乏弹性。一旦出现业务需求的变更，就必须修改持久化层的接口
2.持久化层同时与域模型与关系数据库模型绑定，不管域模型还是关系数据库模型发生变化，都要修改持久化曾的相关程序代码，增加了软件的维护难度
ORM提供了实现持久化层的另一种模式，它采用**映射元数据**来描述**对象关系的映射**，使得ORM中间件能在任何一个应用的业务逻辑层和数据库层之间充当桥梁

ORM的方法论基于三个核心原则：

简单：以最基本的形式建模数据
传达性：数据库结构被任何人都能理解的语言文档化
精确性：基于数据模型创建正确标准化了的结构



ORM作用：**实现了数据库的映射**  通俗讲就是2件事：1创建数据模型  2实现底层的增删改查等数据库常规操作





常用的ORM

```
.NET(C#)主流ORM总揽

SqlSugar (国内) 轻量化，执行速度快

Dos.ORM (国内)

Chloe (国内)

StackExchange/Dapper (国外) 轻量化，执行速度   

Entity Framework (EF) (国外) 全能型  懒加载/惰性加载 

NHibernate (国外)

ServiceStack/ServiceStack.OrmLite (国外)

linq2db (国外)

Massive (国外)

PetaPoco (国外)

```



EF：Model+DAL=ORM



## EF的创建

CodeFirst:代码优先，先有代码后又数据库。

CodeBehind：代码后置，先设计数据库再编写代码。（ 传统）

注意：没有绝对好的，各自都有自己的优点和缺点。



EF中的两个类

DbContext:若干表的一个集合。

DbSet：对表映射，提供对表的常规操作方法。

方式一：

通过VS中的向导工具创建

方式二：

```csharp
1创建一个DbContext集合类 
    public class StudentsContext : DbContext
    {
        public StudentsContext()
            : base("StudentsEntities")
        {
        }
        public DbSet<Users> Users { get; set; }
		
    }
2根据表编写类 
   public class Users
    {
        public int UserId { get; set; }
        public Nullable<int> IsDelete { get; set; }
        public string UserName { get; set; }
        public string ImageUrl { get; set; }
        public string Pwd { get; set; }
    }
 3将类注册在数据库上下文对象中
 public DbSet<Users> Users { get; set; }
```







CodeFirst代码优先

程序设计时，优先编写代码，通过相关工具生成数据库。

CodeBehind

程序设计时，先设计数据库，然后编写代码。

注意：本身两种模式互有优缺点。





作业：使用Dapper实现MVC下的绑定



思考：1CodeBehind和CodeFirst

​           2EF和Dapper SqlSuger三款ORM的区别各自的特点

​           3Razor语法  



懒加载（惰性加载）：

目的：提高效率，

EF是一个虚拟的数据库，

1.在查询时，EF给的数据在渲染页面的时候才能看见；

2.EF在操作数据时，如果不进行db.SaveChanges()那么将一直保存惰性加载机制

注意：调试过程中可以使用.ToLis()结束懒加载



## IEnumerable、IQueryable、List三种数据结构

IEnumerable：C#基础的迭代类型基类。如果一个对象可以迭代，那么他必须继承IEnumerable

IQueryable:迭代类型，他继承自IEnumerable，他的功能会更加丰富。

List：迭代类型，他继承自IQueryable,他的功能更加丰富。 

注意：在开发中我们一般可以使用IQueryable和List，但是区别在于

**List会结束EF惰性加载，而IQueryable不会结束惰性加载**





## ASP.NET MVC框架

MVC是一种架构设计模式

Model数据模型    数据的操作 CURD+建模   (类似三层中的DAL+Model)

View                      UI页面 

Controller            控制器业务逻辑代码



微软针对于MVC架构模型，推出了一个框架：这个框架叫做ASP. NET MVC  框架  



.cshtml：强类型页面   强类型指页面的数据必须是某一个类型的。     可以使用一种Razor语法





## Razor



### MVC中编写联合语句

lambda

```csharp
 var list = db.Students.Join(db.Classes, x => x.classid, y => y.classid, (x, y) => new StudentVM
            {
               id = x.id,
               name = x.name,
               age = x.age,
               createtime = x.createtime,
               classid = x.classid,
               DistrictID = x.DistrictID,
               type = x.type,
               isdelete = x.isdelete,
               intro = x.intro,
               cname = y.cname
            });
```

linq

```csharp
 var list = from s in db.Students
                      join c in db.Classes on s.classid equals c.classid
                      select new StudentVM
                      {
                          //学生字段+班级的名字
                          id=s.id,
                          name=s.name,
                          age=s.age,
                          createtime=s.createtime,
                          classid=s.classid,
                          DistrictID=s.DistrictID,
                          type=s.type,
                          isdelete=s.isdelete,
                          intro=s.intro,
                          cname=c.cname

                      };
```

sql

```csharp
   var list = db.Database.SqlQuery<StudentVM>("select s.*,c.cname from students as s inner join classes as c on c.classid=s.classid");
```

 视图写法

```csharp
  //前提：使用的是SQLServer数据库或者MySql 库中有视图的这种数据库 并且EF支持可视化连接
var list = db.VStudents;
```

注意：前三种写法必须都要创建一个**视图模型类StudentsVM**,他的作用就是将多张表的结果存放到一个对象中，视图页面直接绑定这个对象就可以了。



## 前后端分离开发模式

后端程序员：处理数据，**写应用程序接口（接口）**

前端程序员：负责编写页面的包括css js html

**应用程序接口**：提供一个出口，当你访问的时候给你相应的功能。例如我们调用的高德接口。

通常工作中，我们简称写接口、调接口。

如何进行前后端分离：

前端什么都能干但是不能处理数据库。





后端在前后端分离模式下只负责数据，不负责页面。**后端工程师写的接口最终需要给前端返回一个json字符串**







ASP.NET MVC框架中，前后端都是由.NET开发人员写的。





## EF的常用方法

```csharp
1toList()结束懒加载
//懒加载
2Find()通过主键获取一个对象
3.Where()
4.Select()
5.OrderBy()
6.Take(5)   top  5
7.Skip(5)   跳过前5条
8.FirstOrDefault()
```





 练习：

1手写一个ef。

2自动化工具创建EF。

3创建一个MVC项目。

4编写一个页面，从EF中获取数据。

5Razor语法详细的看一遍。

6将第4部中的页面 使用联合语句写一下  。

7去把ef中常用方法每一个都调用一遍。

8尝试使用lambda 和linq进行一个联合  （没讲）。

9重新创建一个mvc项目，试一试dapper （自行百度）。





## ViewData和ViewBag

Action向视图传递数据可以使用return View()

只能传递一个对象过去。



如果想传递多个对象到视图页面，使用ViewData和ViewBag

ViewData不会保存数据类型，效率略微高

ViewBag会保存数据类型，效率略微低（可以忽略不计）







## Action四种返回类型

View创建一个强类型页面

Content返回字符串

Json返回JSON字符串

JavaScript 返回脚本（待定）





## 区域Area

电商网站

​      商户平台

​      客户中心

​      管理员后台

在一个站点中，存在若干个子站点，那么ASP.NET MVC为每一个子站点提供了独立的路由和MVC组件。



## Filter拦截器（过滤器）

AOP：面向切面编程  

OOP：面向对象编程

拦截比较适合做：登录状态验证、权限、场景限制

### 概念

特性（Attribute）是用于在运行时传递程序中各种元素（比如类、方法、结构、枚举、组件等）的行为信息的声明性标签。您可以通过使用特性向程序添加声明性信息。一个声明性标签是通过放置在它所应用的元素前面的方括号（[ ]）来描述的。

特性（Attribute）用于添加元数据，如编译器指令和注释、描述、方法、类等其他信息。.Net 框架提供了两种类型的特性：预定义特性和自定义特性



### 过滤器的类型与作用

MVC给我们提供了四种过滤器，基本满足了我们实际业务中常用的需求，包括以下：

| 过滤器类型名称 | 实现的接口           | 默认的实现类          | 作用                                           | 执行的顺序与节点                               |
| -------------- | -------------------- | --------------------- | ---------------------------------------------- | ---------------------------------------------- |
| 授权过滤器     | IAuthorizationFilter | AuthorizeAttribute    | 用于限制进入控制器或控制器的某个行为方法       | 在控制器方法调用前执行，所有过滤器中最先执行的 |
| 动作过滤器     | IActionFilter        | ActionFilterAttribute | 用于进入动作方法之前或之后的处理               | 在控制器方法调用前/后执行                      |
| 结果过滤器     | IResultFilter        | ActionFilterAttribute | 用于动作方法返回结果之前或之后的处理           | 在控制器方法调用完，跳转至view页面前/后执行    |
| 异常处理过滤器 | IExceptionFilter     | HandleErrorAttribute  | 用于处理某个动作方法或某个控制器里面抛出的异常 | 在控制器方法抛出异常时执行                     |

这四种类型的接口是MVC对过滤器的一个接口规范，同时MVC默认通过**AuthorizeAttribute**(授权)、**HandleErrorAttribute**(异常处理)、**ActionFilterAttribute**(动作和结果)三个类实现了这四个接口。

需要注意的是ActionFilterAttribute类既实现了IActionFilter接口，也实现了IResultFilter接口。这是个抽象类，要求必须提供一个实现，AuthorizeAttribute和HandleErrorAttribute类则包含了一些有用的特性，可以不必创建派生类进行使用。所以我们一般都会通过继承ActionFilterAttribute类，实现自定义的过滤器。

除以上接口之外，我们还要用到FilterAttribute类，这个类将我们的过滤器包装成了特性，使我们的过滤器可以方便的在Action方法上方使用。



### ActionFilterAttribute

OnActionExecuting

```csharp
//该方法会在action方法执行之前调用  
public override void OnActionExecuting(ActionExecutingContext filterContext)  
{  
    filterContext.HttpContext.Response.Write("我是OnActionExecuting，我在action方法调用钱执行<br/>");  
    base.OnActionExecuting(filterContext);  
}  
```

OnActionExecuted

```csharp
//该方法会在action方法执行之后调用  
public override void OnActionExecuted(ActionExecutedContext filterContext)  
{  
    filterContext.HttpContext.Response.Write("我是OnActionExecuted，我在action方法调用后执行<br/>");  
    base.OnActionExecuted(filterContext);  
} 
```

### **ResultFilter**

OnResultExecuting

```csharp
//在action方法返回结果之后执行  
public override void OnResultExecuting(ResultExecutingContext filterContext)  
{  
    filterContext.HttpContext.Response.Write("我是OnActionExecuting，我action方法返回结果之前执行<br/>");  
    base.OnResultExecuting(filterContext);  
} 
```

  OnResultExecuting

```csharp
//在action方法返回结果之后执行
public override void OnResultExecuting(ResultExecutingContext filterContext)  
{  
    filterContext.HttpContext.Response.Write("我是OnActionExecuting，我action方法返回结果之前执行<br/>");  
    base.OnResultExecuting(filterContext);  
} 
```



注意：上述两种过滤器中的方法都是一样的，只是执行位置不一样。

用途：当我们需要跳过一些验证规则时，可以在此处获取Action或者Controller信息

### AuthorizeAttribute

该过滤器在所有action方法过滤器之前执行，也就是说，提供了一个可以超前验证的方法。

```c#
//在所有action方法过滤器之前执行  
public override void OnAuthorization(AuthorizationContext filterContext)  
{  
    filterContext.HttpContext.Response.Write("我是OnAuthorization，在所有action方法过滤器之前执行<br/>");  
    //base.OnAuthorization(filterContext);  
}  
```



### HandleErrorAttribute

异常拦截器接口

```c#
public override void OnException(ExceptionContext filterContext)
{
    string controller = filterContext.RouteData.Values["controller"] as string;

    string action = filterContext.RouteData.Values["action"] as string;

    filterContext.RequestContext.HttpContext.Response.Write
        (string.Format("{0}:{1}发生异常!{2}", controller, action, filterContext.Exception.Message));
    //表示是否已处理异常
    filterContext.ExceptionHandled = true;
    filterContext.Result = new RedirectResult("/404.html");
    //base.OnException(filterContext);
}
```



## 路由

ASP.NET MVC 使用的路由进行URI资源定向的。

框架中允许我们对路径进行配置

规则一：静态路由配置

说明：静态路由配置实际上就是写死

```csharp
 routes.MapRoute(
                name: "Default",
                url: "Home/Index",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
```

规则二：动态路由配置

```csharp
 routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "AAA", id = UrlParameter.Optional }
            );
```



规则三：比较常用配置(动态路由)

```csharp
 routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{brand}-{cate}-{color}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
```



## 模型注解

### 什么是验证，数据注解

验证
 从全局来看，发现逻辑仅是整个验证的很小的一部分。验证首先需要管理用户友好(本地化)的与验证逻辑相关的错误提示消息；当验证失败时，在把这些错误提示消息呈现给用户界面上，当然还要向用户提供从验证失败中恢复的机制。

数据注解
 注解是一种通用机制，可以用来向框架注入元数据，同时，框架不只驱动元数据的验证，还可以在生成显示和编辑模型的HTML标记时使用元数据。通俗的说就是模型上面的特定标识符(具有一定意义和作用)。

### 验证注解的使用

数据注解定义在一般在命名空间”System.ComponentModel.DataAnnotations”提供了服务器端验证的功能，在模型属性上使用时，框架也支持客户端验证。注解后面都是可以添加错误提示语的,ErrorMessage是每个验证特性中用来设置错误提示消息的参数，比如:



```csharp
    [Required(ErrorMessage = "不能为空")]
    public int Age { get; set; }
```

- Required
  强调属性是必须的，不可为空。当属性中有一个是null或空时，会引发一个验证错误。

  

  ```csharp
  [Required]
  public int Age { get; set; }
  ```

- StringLength
  要求必须输入名字的长度。参数可以限制最小的。如下：

  

  ```csharp
  [StringLength(160,MinimumLength = 3)]
  public string Name { get; set; }
  ```

- RegularExpression
  正则表达式验证，比如邮箱等需要验证正则的地方。很是方便，这样就减少了服务端的验证。

  

  ```css
  [RegularExpression(@"^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+",ErrorMessage = "邮箱输入有误，重新输入。")]        
  public string Email { get; set; }
  ```

- Range
  用来指定数值类型值得最小值和最大值。主要为int类型服务。其余的也可以，需要使用构造函数的重载版本。Type参数来做。

  

  ```csharp
 [Range(20,30,ErrorMessage = "年龄不符合要求")]
  public int Age { get; set; }
  ```

------



```csharp
    [Range(typeof(decimal),"0.00","59.99")]
    public decimal Price { get; set; }
```

------

- Compare
  确定两个模型属性拥有一样的值。密码的验证(输入两次，看二者是否一样。)，参数为前面模型的值。

  

  ```csharp
  [Required(ErrorMessage = "密码不能为空")]
  public string Password { get; set; }
  [Compare("Password",ErrorMessage="两次密码输入不正确")]
  public string PasswordPalt { get; set; }
  ```

- Remote
  此特性利用服务器端的回调函数执行客户端的验证逻辑。通俗的说就是这个特性可以直接找到某个控制器的action并且执行其中的方法。

![img](https:////upload-images.jianshu.io/upload_images/1403717-1eed793b7f59f57d.png?imageMogr2/auto-orient/strip|imageView2/2/w/691/format/webp)



```csharp
    /// <summary>
    /// 验证模型中输入的姓名是否和数据库中重复
    /// </summary>
    /// <returns></returns>
    public JsonResult CheckUserName(string username)
    {            //数据库中的相关验证
        return Json(DateTime.Now.ToString(),JsonRequestBehavior.AllowGet);
    }
```

------



```csharp
    [Remote("CheckUserName", "Admin")]
    public string UserName { get; set; }
```

上面控制器操作会利用与UserName属性同名的参数进行验证，同时返回一个javascript object Notaion(json)对象中的布尔类型值(0/1)

- 自定义回复消息占位符
  使用{0}占位符，来显示用户的输入，并且形成友好提示。

  

  ```csharp
  [Range(20,30,ErrorMessage = "年龄{0}不符合要求")]
  public int Age { get; set; } 
  ```

- 服务端的一些处理(验证与绑定)
  ASP.NET MVC的验证特性是由模型绑定器，模型元数据，模型验证器和模型状态组成。



### 注解的验证

一：前端的验证

```csharp
//1需要使用@Html.TextBoxFor(x=>x.name)标签   注意：不是必须使用，不用比较麻烦
//2需要配合@Html.ValidationMessageFor(x=>x.name)
//3需要引入三个前端脚本 jquery.js  validate.js  validate.unobtrusive.js
```

二：后端验证

```csharp
ModelState.IsValid进行验证，当验证成功时次属性为true
if (ModelState.IsValid)
{
     //调用EF进行添加
     //db.Students.Add(model);
     db.Entry<Students>(model).State = EntityState.Added;
     db.SaveChanges();
}
```



### 显示和编辑注解

- Display
  显示模型属性设置友好的“显示名称”

  

  ```csharp
  [Display(Name = "姓名")]
  [StringLength(160,MinimumLength = 3)]
  public string Name { get; set; }
  ```

- ScaffoldColumn
  可以隐藏HTML的辅助方法

![img](https:////upload-images.jianshu.io/upload_images/1403717-c3a33425b235e950.png?imageMogr2/auto-orient/strip|imageView2/2/w/691/format/webp)



```csharp
    [ScaffoldColumn(false)]
    public string Address { get; set; }
```

- DisplayFormat
  处理属性各种格式化选项，当属性包含空值，可以提供可选的显示文本。也可以为包含标记的属性关闭HTML编码。还可以运行时指定一个应用于属性值的格式化字符串。

  

  ```csharp
  [DisplayFormat(ApplyFormatInEditMode = true,DataFormatString = "{0:c}")]
  public decimal Total { get; set; }
  ```

- ReadOnly
  可以确保默认的模型绑定器不使用请求中的新值来更新属性。

- DataType
  运行时提供关于属性的特定用途信息。String类型的属性可应用于很多场合--可以保存e-mail地址，URL或密码。

  

  ```csharp
  [Required(ErrorMessage = "密码不能为空")]
  [DataType(DataType.Password)]
  public string Password { get; set; }
  ```

------

- UIHint
  给运行时提供一个模版名称，以备调用模版辅助方法渲染输出时使用。

  

  ### 自定义验证逻辑

  1:将验证逻辑封装在自定义的数据注解中。
  2:将验证逻辑封装在模型对象中。
   把验证逻辑封装在自定义的数据注解中可以轻松地实现在多个模型中重用逻辑。需要在特性内部编写代码以应对不同类型的模型中。

  - 自定义注解
    所有的验证注解特性最终都派生自基类ValidationAttribute,它是个抽象类，在System.ComponentMode.DataAnnotation中定义。同样自定义的验证逻辑必须派生自ValidationAttribute的类。且重写IsValid方法(方法里面实现我们相应的逻辑)。

  需求：限制用户输入地址中单词数量，设定一个最大值。

  

```csharp
/// <summary>
/// 自定义模型验证
/// 输入数字的单词最大数量
/// </summary>
public class MaxWordsAttribute:ValidationAttribute
{
    private readonly int _maxWord;
    public MaxWordsAttribute(int maxWord)
    {
        _maxWord = maxWord;
    }
    protected override ValidationResult IsValid(object value,ValidationContext validationContext)
    {
        if (value!=null)
        {
            //将输入转换为string类型
            var valueAsString = value.ToString();
            //使用split(' ')空格来分隔输入值，统计生成字符串的数量。对数目比较验证。
            if (valueAsString.Split(' ').Length>_maxWord)      
            {
                 return new ValidationResult("单词超过长度");  //string类型
            }
        }
        return ValidationResult.Success;         //bool类型
    }
}
```

  第一个参数要验证对象中的值。后面进行逻辑的判断。这样做这里的错误提示不能显示到前台。我们需要修改下，使用ValidationAttrubute的ErrorMessage属性来自定义提示错误消息。

  - 修改之后

------

  

```csharp
public class MaxWordsAttribute:ValidationAttribute
{
    private readonly int _maxWord;
    public MaxWordsAttribute(int maxWord)
        :base("{0} has too many words")     
    {
        _maxWord = maxWord;
    }
    protected override ValidationResult IsValid(object value,ValidationContext validationContext)
    {
        if (value!=null)
        {
            //将输入转换为string类型
            var valueAsString = value.ToString();
            //使用split(' ')空格来分隔输入值，统计生成字符串的数量。对数目比较验证。                
            if (valueAsString.Split(' ').Length>_maxWord)
            {
                var errorMessage = FormatErrorMessage(validationContext.DisplayName);
                 return new ValidationResult(errorMessage);  
            }
        }
        return ValidationResult.Success;         //bool类型
    }
}
  ```

  
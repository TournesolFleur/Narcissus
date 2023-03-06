# 水仙花 README

> 欢迎使用水仙花ChatGTP for Visual Studio Code 扩展项目
> 因该项目是vs code 扩展,请使用VS code 来打开该项目

### 项目主要结构
>  -- app 使用React编写可视化页面，该部分是React项目

>  -- media 存放一些资源

>  -- src 扩展相关代码

一般来说，你只需要关注 app 文件夹下的React部分

### 项目安装
下载源码之后，执行下面命令完成npm包还原
```shell
   yarn
```

### 运行
 > 可以在Vs code 中直接按 F5 启动调试

### 发布
需安装全局打包工具
```shell
   npm i vsce -g
   //或使用yarn
   yarn global add vsce
```
打包成vsix格式

```shell 
    vsce package
```

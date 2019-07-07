# 使用[VuePress](https://vuepress.vuejs.org/zh/)在windows系统中建立博客

> VuePress 由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题

------

## 环境搭建

需要安装Node.js并且保证版本要>=8

```sh
npm install -g vuepress
```

切换到你想要存放博客的系统盘, 并建立存储博客内容的文件夹

比如: 切换到D盘, 新建blog文件夹

进入blog文件夹, 执行以下命令进行初始化项目

```sh
npm init -y
```

执行完成以后会生成package.json文件, 打开package.json文件, 并在其增加如下脚本

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

在blog文件夹中新建docs文件夹, 并在docs文件夹下创建README.md(这将是首页)

在README.md里面随便写点什么, 比如

```markdown
# Hello Word!
```

在blog文件夹位置下执行一下指令

```sh
npm run docs:build
npm run docs:dev
```

命令运行完成以后就可以在浏览器中输入http://localhost:8080/来访问博客了

后续要撰写的md直接在docs文件夹下创建文件或者文件夹即可, 然后使用上述两命令编译运行

关于博客目录结构和主题显示样式看下面配置

## 相关配置

接上文, 配置文件位于D://blog/docs/.vuepress/config.js, docs是自己创建的, .vuepress是执行了npm run docs:build 命令后生成的, 如果没有.vuepress文件夹和config.js, 那么需要自己创建.

当前的目录结构应该是这样:

```
D
|─blog
  ├─ docs
  │  ├─ README.md
  │  └─ .vuepress
  │     └─ config.js
  └─ package.json
```

> 一个 VuePress 网站必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象：
>
> ```javascript
> module.exports = {
>   title: 'Hello VuePress', //网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中
>   description: 'Just playing around' //网站描述。这将在页面 HTML 中表现为一个 <meta> 标签
> }
> ```

详细配置项见: [配置参考](http://caibaojian.com/vuepress/config/)

主题配置见: [默认主题配置](https://vuepress.vuejs.org/zh/default-theme-config/)

## 部署

### GitHub

官方建议是写成脚本, 然后在在持续集成工具中push之前配置自动运行, 见[部署GitHub](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

你也可以手动部署到GitHub上:

使用命令npm run docs:build进行编译后, 将会在.vuepress文件夹下产生dist文件夹, 将此文件夹下所有文件夹和文件添加到github项目根目录即可

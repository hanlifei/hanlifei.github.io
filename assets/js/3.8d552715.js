(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(e,r,t){e.exports=t.p+"assets/img/1-1.c628b5d0.png"},188:function(e,r,t){e.exports=t.p+"assets/img/1-2.97ca5f7b.png"},189:function(e,r,t){e.exports=t.p+"assets/img/1-3.1a9eece1.png"},190:function(e,r,t){e.exports=t.p+"assets/img/1-4.044cfdb1.png"},191:function(e,r,t){e.exports=t.p+"assets/img/1-5.f5041947.png"},192:function(e,r,t){e.exports=t.p+"assets/img/1-6.95a0884f.png"},193:function(e,r,t){e.exports=t.p+"assets/img/1-7.3bf0d20a.png"},194:function(e,r,t){e.exports=t.p+"assets/img/1-8.78699f7e.png"},202:function(e,r,t){"use strict";t.r(r);var i=t(0),o=Object(i.a)({},function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"准备项"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备项","aria-hidden":"true"}},[e._v("#")]),e._v(" 准备项")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("JDK 8 update 20或更高版本")])]),e._v(" "),i("li",[i("p",[e._v("IntelliJ IDEA")]),e._v(" "),i("p",[e._v("(我的版本2019.1.3-U [IDEA 2017.1版本会有问题, 后续会说] )")])]),e._v(" "),i("li",[i("p",[e._v("gradle (我的版本4.0.1)")])])]),e._v(" "),i("h1",{attrs:{id:"下载源码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#下载源码","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载源码")]),e._v(" "),i("p",[e._v("网上很多说使用git通过git clone来去下载源码, 其实大可不必, 直接上github上下载源码包即可, 下载地址: https://github.com/spring-projects/spring-framework/tags, 下载zip包")]),e._v(" "),i("p",[i("img",{attrs:{src:t(187),alt:"源代码下载页面"}})]),e._v(" "),i("p",[e._v("我下载的是5.0.0.RELEASE版本.")]),e._v(" "),i("h1",{attrs:{id:"构建"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#构建","aria-hidden":"true"}},[e._v("#")]),e._v(" 构建")]),e._v(" "),i("p",[e._v("下载完成后, 将下载的zip包拷贝到你的工作目录并解压, 打开解压后的文件夹, 将看到如下")]),e._v(" "),i("p",[i("img",{attrs:{src:t(188),alt:"解压后的内容"}})]),e._v(" "),i("p",[e._v("首先查看README.md文件, 这个文件一般会是对项目的说明和引导")]),e._v(" "),i("p",[i("img",{attrs:{src:t(189),alt:"README.md"}})]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("将源代码导入你的IDE")]),e._v("\n根据需要 运行'./ import-into-eclipse.sh' 或 读取'import-into-idea.md'。")]),e._v(" "),i("blockquote",[i("p",[e._v("**注意：**确保在IDE中正确配置了JDK 8")])]),e._v(" "),i("p",[i("strong",[e._v("将所有Spring的jar安装到本地Maven缓存")]),e._v("\n执行 ./gradlew build指令")])]),e._v(" "),i("p",[e._v("我选用的IDE是IDEA, 那么根据文档提示, 首先需要阅读import-into-idea.md, 在上面截图中")]),e._v(" "),i("p",[e._v("我也标注了出来.")]),e._v(" "),i("p",[i("img",{attrs:{src:t(190),alt:"import-into-idea.md"}})]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("导入步骤")])]),e._v(" "),i("p",[e._v("首先移步到spring-framewock的工作目录(也就是import-into-idea.md所在目录)")]),e._v(" "),i("ol",[i("li",[e._v("执行./gradlew :spring-oxm:compileTestJava命令对spring-oxm进行预编译(这里是因为打包的依赖关系)")]),e._v(" "),i("li",[e._v("导入IDEA (File -> New -> Project from Existing Sources -> Navigate to directory -> Select build.gradle)")]),e._v(" "),i("li",[e._v("导入过程中, 有提示时应排除'spring-aspects'模块 或者 在导入成功后通过File-> Project Structure -> Modules来排除")])])]),e._v(" "),i("p",[e._v("那按照他的步骤来呗.")]),e._v(" "),i("p",[e._v("在当前目录打开命令行, 执行./gradlew :spring-oxm:compileTestJava (这里要保证你的Gradle安装正确, 可以使用gradle -version进行测试)")]),e._v(" "),i("p",[i("img",{attrs:{src:t(191),alt:"./gradlew :spring-oxm:compileTestJava"}})]),e._v(" "),i("p",[e._v("过程比较耗时, 等待结束了以后打开IDEA, 通过File -> New -> Project from Existing Sources -> Navigate to directory -> Select build.gradle进行导入")]),e._v(" "),i("p",[i("img",{attrs:{src:t(192),alt:"IDEA导入"}})]),e._v(" "),i("p",[e._v("然后在打开窗口选择spring-framework文件夹下的build.gradle文件, 然后在"),i("a",{attrs:{name:"GradleConfig"}},[e._v("Gradle配置页面")]),e._v("注意")]),e._v(" "),i("p",[i("img",{attrs:{src:t(193),alt:"Gradle"}})]),e._v(" "),i("p",[e._v("记得勾选Use auto-import选项, 将Gradle的路径和java配置完善")]),e._v(" "),i("p",[e._v("导入成功后, 记得排除spring-aspects模块")]),e._v(" "),i("p",[i("img",{attrs:{src:t(194),alt:"排除spring-aspects"}})]),e._v(" "),i("p",[e._v("至此, 项目算是导入成功了, 正常情况下IDE会自动下载项目声明的依赖包, 如果没有的话, 可以通过快捷键Ctrl+Shift+A调出搜索窗口, 在窗口中键入Refresh all Gradle projects, 点击匹配项进行Gradle的刷新.  或者也可以在工作目录调出命令窗口, 执行README.md中提示的指令./gradlew build, 这样同样也会下载相应的依赖")]),e._v(" "),i("h1",{attrs:{id:"遇到的问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 遇到的问题")]),e._v(" "),i("p",[i("strong",[e._v("Gradle在下载依赖期间出现如下错误")])]),e._v(" "),i("blockquote",[i("p",[e._v("FAILURE: Build failed with an exception.")]),e._v(" "),i("ul",[i("li",[e._v("What went wrong:\nA problem occurred configuring root project 'spring'.\nCould not resolve all dependencies for configuration ':classpath'.\nCould not resolve org.springframework.build.gradle:propdeps-plugin:0.0.7.\nRequired by:\n:spring:4.2.3.BUILD-SNAPSHOT\n> Could not resolve org.springframework.build.gradle:propdeps-plugin:0.0.7.\n> Could not get resource 'https://repo.spring.io/plugins-release/org/springframework/build/gradle/propdeps-plugin/0.0.7/propdeps-plugin-0.0.7.pom'.\n> Could not GET 'https://repo.spring.io/plugins-release/org/springframework/build/gradle/propdeps-plugin/0.0.7/propdeps-plugin-0.0.7.pom'.\n> Connect to repo.spring.io:443 [repo.spring.io/35.186.232.213] failed: Connection timed out: connect")]),e._v(" "),i("li",[e._v("Try:\nRun with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.")])])]),e._v(" "),i("p",[e._v("不用注意细节, 就类似这种"),i("strong",[e._v("在某个网络地址下找不到某个文件")]),e._v('的问题, 解决方案是在build.gradle文件中repositories节点下面增加[maven{url "http://repo.springsource.org/plugins-release"}]仓库就好了')]),e._v(" "),i("p",[i("strong",[e._v("运行测试: Error:Unable to make the module: ****, related gradle configuration was not found. Please, re-import the Gradle project and try again.")])]),e._v(" "),i("p",[e._v("出现这种问题的可能性有两种:")]),e._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#GradleConfig"}},[e._v("Gradle配置页面")]),e._v("配置不正确, 那么就需要打开settings配置页 --\x3e Build, Execution, Dployment --\x3e Build Toos --\x3e Gradle配置页面照上述重新配置")]),e._v(" "),i("li",[e._v("我一开始尝试用idea 2017版本去构建, 然后卡在这个错误里了, 后来在GitHub上的某个问题中找到了"),i("a",{attrs:{href:"https://github.com/edvin/tornadofx-idea-plugin/issues/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("解答"),i("OutboundLink")],1),e._v(", 我的解决方案就是升级idea版本")])])])},[],!1,null,null,null);r.default=o.exports}}]);
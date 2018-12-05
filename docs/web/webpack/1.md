---
sidebar: false
---

# 初识Webpack

webpack是一款前端的打包工具，用于将大量的JS文件，CSS文件等，按项目的要求（根据配置文件进行配置）,压缩打包成一个或多个固定的JS文件。这样做的好处是大大减少的项目的大小,避免重复加载,实现按需加载等。webpack能大大优化前端性能。

需要安装webpack webpack-cli
```
mkdir demo && cd demo
npm init -y
npm install webpack webpack-cli -D
```

安装完成后，我们将创建目录结构和文件如下:  
project  
```
demo
|- package.json
|- index.html
|- src
  |- index.js
```

接着在index.js中写入我们的代码  
src/index.js  
```
import _ from 'lodash'
import './style.css'
function componnet () {
  var ele = document.createElement('div')

  ele.innerHTML = _.join(['Hello', 'webpack'], '~')
  ele.classList.add('hello')
  return ele
}

document.body.appendChild(componnet())
```
写入css代码  
src/style.css  
```
.hello{
  color: red;
}
```
lodash是一个前端的工具库，用来处理字符串，数组等操作的util，[使用说明](https://www.lodashjs.com/docs/4.17.5.html)

接下来，我们开始写html
如果不使用webpack,我们过去的写法是 将src/index.js顶部的import去掉,在html中使用\<script>标签引入两个js文件。这样做的缺点是,不易管理js,css文件等,并且浏览器会根据js文件的引入顺序进行执行,一旦顺序没有放对,浏览器将无法正常运行网页。
现在我们来使用webpack
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>demo2 Asset Management</title>
</head>
<body>
  <script src="./bundle.js"></script>
</body>
</html>
```
在html中只需要引入一个js文件即可。这个bundle.js文件，就是我们使用webpack将所有依赖的js,css等打包成的一个js文件。  
在开始配置打包之前，我们先将项目的目录整理一下，使其更接近于生产环境。
```
demo
|- dist
  |- index.html
|- src
  |- index.js
  |- style.css
|- package.json
```
webpack需要在根目录建立一个固定的配置文件，名为webpack.config.js
```
demo
|- webpack.config.js
```

编辑webpack.config.js
```
const path = require('path')

module.exports = {
  entry: './src/index.js', // 入口文件。表示从哪一个js开始打包。
  output: {                //  输出文件 
    filename: 'bundle.js', // 输出文件名称
    path: path.resolve(__dirname, 'dist') // 输出的js路径
  },
  module: {  // webpack的依赖组件
    rules: [  // webpack采用style-loader 和 css-loader共同作用为html添加css样式
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
}
```

webpack的命令可以直接在shell窗口中输入webpack 即可开始打包。但是在生产环境中，通常通过配置npm的配置文件，来执行自定义的脚本。  
编辑package.json
```
···
"scripts": {
    "build": "webpack"
  },
···
```
最后，执行npm run build即可开始webpack的打包，打包完成后，可以看见在dist目录下生成了我们需要的bundle.js文件。改文件自动打包了lodash依赖和css依赖，我们的html只需要引用这个bundle.js文件，就已经集成了我们所需要的js依赖。
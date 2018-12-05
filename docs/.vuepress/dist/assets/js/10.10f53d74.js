(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{164:function(e,n,a){"use strict";a.r(n);var s=a(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"webpack开发环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack开发环境搭建","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack开发环境搭建")]),e._v(" "),a("p",[e._v("首先搭建一个项目环境,并安装webpack webpack-cli lodash")]),e._v(" "),a("p",[e._v("然后构建项目目录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project\n|- src\n  |- index.js\n  |- print.js\n|- package.json\n|- webpack.config.js\n")])])]),a("h2",{attrs:{id:"使用source-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用source-map","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用source map")]),e._v(" "),a("p",[e._v("source map是在开发中用来追踪错误和警告在源代码中位置的插件。首先webpack存在多个js打包成为一个bundle的情况：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("entry: {\n  app: ['./1.js', './2.js', './3.js']\n},\noutput: {\n  filename: 'bundle.js',\n  path: path.resolve(__dirname, 'dist')\n}\n")])])]),a("p",[e._v("1.js, 2.js, 3.js三个js文件都被打包进入bundle.js文件中，当其中某一个文件出错时浏览器都会粗略的提示bundle.js出错，而并不能追踪到具体的文件，这对于我们开发环境来说是很不利的。source map的存在就是为了解决这一问题，当然source map在生产环境中也存在着配置可以使用，但是会影响代码加载和构建的速度。具体请参考source map的配置文档。当前代码中简单采用source map的inline-source-map选项。注意，该选项只有在dev环境才能使用，因此编译的时候要加入--development")]),e._v(" "),a("p",[e._v("webpack.config.js文件如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nconst CleanWebpackPlugin = require('clean-webpack-plugin')\n\nmodule,exports = {\n  entry: { // 多个入口。\n    app: './src/index.js',\n    print: './src/print.js'\n  },\n  devtool: 'inline-source-map', // source-map用于调试，该模式只能再dev环境下生效。详情参考文档\n  \n  // devserver提供一个简单的web服务器，能够进行live reloading \n  // 需要使用 webpack-dev-server --open\n  // 或者跟webpack-dev-middleware一起使用，实现本地localhost\n  // devServer: {\n  //   contentBase: './dist'\n  // },\n  plugins: [\n    new CleanWebpackPlugin(['dist']), // 用于在每次构建时，清理dist文件夹\n    new HtmlWebpckPlugin({ // 会自动生成index.html，并自动引入js依赖\n      title: 'Output Management'\n    })\n  ],\n  // module: {\n  //   rules: [\n  //     {\n  //       test: /\\.css$/,\n  //       use: ['style-loader', 'css-loader']\n  //     }, \n  //     {\n  //       test: /\\.(png|jpg|svg|gif)$/,\n  //       use: ['file-loader']\n  //     }\n  //   ]\n  // },\n  output: {\n    // 多入口，必须有多输出, 根据name和hash生成，确保每一次生成的JS文件都不一样\n    filename: '[name].[hash].bundle.js', \n    path: path.resolve(__dirname, 'dist'),\n    // publicPath配置会再自动生成的html的script标签中体现，引入的具体路径之前加上该配置目录，模拟CDN引用\n    // 比如配置 '/assest/',则script src=\"/assest/***.js */\"\n    publicPath: '/'  // 该字段会被dev server使用，用来决定在哪个目录下加载文件。通常使用'/'根目录\n  }\n  \n}\n")])])]),a("p",[e._v("index.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import _ from 'lodash'\nimport printMe from './print.js'\n\nfunction component () {\n  var ele = document.createElement('div')\n  var btn = document.createElement('button')\n\n  ele.innerHTML = _.join(['Hello', 'webpack', '来点中文吧'], '~')\n  \n  btn.innerHTML = \"Click me and check the console!\"\n  btn.onclick = printMe\n\n  ele.appendChild(btn)\n  return ele\n}\n\ndocument.body.appendChild(component())\n")])])]),a("p",[e._v("print.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default function printMe() {\n  console.log('I get called from print.js!')\n  consola.error('error!!!') //  故意写错，使用source map编译之后，可以很直观看到在print.js中报错\n}\n")])])]),a("p",[e._v("package.json")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"scripts": {\n  "build:dev": "webpack --development"\n}\n')])])]),a("p",[e._v("执行"),a("code",[e._v("npm run build:dev")]),e._v("后，打开index.html，可以在日志面板很清楚看到，在print.js文件中报错。")]),e._v(" "),a("h2",{attrs:{id:"使用webpack-dev-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用webpack-dev-server","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用webpack-dev-server")]),e._v(" "),a("p",[a("code",[e._v("webpack-dev-server")]),e._v("提供了一个简单的web服务器搭载前端项目，实现live reloading"),a("br"),e._v("\n首先我们安装"),a("code",[e._v("webpack-dev-server")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -D webpack-dev-server\n")])])]),a("p",[e._v("设置webpack.config.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("···\n// devserver提供一个简单的web服务器，能够进行live reloading \n// 需要使用 webpack-dev-server --open\n// 或者跟webpack-dev-middleware一起使用，实现本地localhost\ndevServer: {\n  contentBase: './dist'\n},\n···\n")])])]),a("p",[e._v("package.json中添加指令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"script": {\n  "start": "webpack-dev-server --open"\n}\n')])])]),a("p",[e._v("运行"),a("code",[e._v("npm run start")])]),e._v(" "),a("h2",{attrs:{id:"使用webpack-dev-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用webpack-dev-middleware","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用webpack-dev-middleware")]),e._v(" "),a("p",[e._v("webpack-dev-middleware配合dev-server使用，来实现更多需求。\n需要在webpack.config.js中增加配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("···\noutput: {\n  ···\n    // publicPath配置会再自动生成的html的script标签中体现，引入的具体路径之前加上该配置目录，模拟CDN引用\n    // 比如配置 '/assest/',则script src=\"/assest/***.js */\"\n    publicPath: '/'  // 该字段会被dev server使用，用来决定在哪个目录下加载文件。通常使用'/'根目录\n  ···\n}\n···\n")])])]),a("p",[e._v("我们在project项目下，新建一个服务器文件server.js，该服务器文件采用node.js中的express框架。")]),e._v(" "),a("p",[e._v("projec/server.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const express = require('express')\nconst webpack = require('webpack')\nconst webpackDevMiddleware = require('webpack-dev-middleware')\n\nconst app = express()\nconst config = require('./webpack.config.js')\nconst compiler = webpack(config)\n\napp.use(webpackDevMiddleware(compiler, {\n  publicPath: config.output.publicPath\n}))\n\nvar server = app.listen(8999, function() {\n  console.log(\"app start on port \" + server.address().port)\n  console.log('server', server.address())\n})\n\n// app.get('/a1', (req, res) => {\n//   console.log('/a1请求')\n//   res.send('a1 Hello')\n// })\n")])])]),a("p",[e._v("package.json新增指令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('···\n"script": {\n  ···\n  "server": "node server.js"\n  ···\n}\n···\n')])])]),a("p",[e._v("执行"),a("code",[e._v("npm run server")]),e._v("，打开localhost:8999即可看到网页。")])])}],!1,null,null,null);t.options.__file="3.md";n.default=t.exports}}]);
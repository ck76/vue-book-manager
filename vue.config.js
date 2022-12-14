// module.exports = {
//     publicPath: '/reading-recorder/'
//   }

module.exports = {
    chainWebpack: config => config.resolve.symlinks(false)
}

module.exports = {
    devServer: {
        overlay: {
            warnings: false, //不显示警告
            errors: false	//不显示错误
        }
    },
    lintOnSave: false
}


module.exports = {
    publicPath: process.env.NODE_ENV === 'production' 
    ? './' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    devServer: {
        proxy: {
            //名字可以自定义，这里我用的是api
            '/api': {
                target: 'http://api.budejie.com', //目标路径，别忘了加http和端口号
                changeOrigin: true, //是否跨域
            }
        }
    }
}


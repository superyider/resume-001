module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',

    outputDir: 'dist',

    assetsDir: 'static',

    filenameHashing: true,

    lintOnSave: true,

    runtimeCompiler: false,

    transpileDependencies: [],

    productionSourceMap: false,

    configureWebpack: (config) => {
    },
    chainWebpack: (config) => {
        config.optimization
            .splitChunks({
                cacheGroups: {}
            });

        // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
        config.module
            .rule('eslint')
            .exclude
            .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
            .end()
    },

    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/css/global.scss";`
            }
        }
    },

    devServer: {
        open: true,
        //host: '172.20.10.6',
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {
        }
    },
    parallel: require('os').cpus().length > 1,

    pwa: {},

    // 第三方插件配置
    pluginOptions: {
        $: 'jquery',
        jQuery: 'jquery'
    },

};
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    // baseUrl: '/api',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5d08d65d78c2cb2a1bddf16a/rest/jtyj',
                changeOrigin: true,
                // secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        console.log(config);

        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    resources: 'src/style/common.scss',

                    // Or array of paths
                    // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                })
                .end()
        })
    }
}


// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('postcss-px-to-viewport')({ // 把px单位换算成rem单位
//                 viewportWidth: 1920,
//                 viewportHeight: 1080,
//                 unitPrecision: 3,
//                 viewportUnit: 'vw',
//                 selectorBlackList: ['.ignore', '.hairlines'],
//                 minPixelValue: 1,
//                  exclude: [/node_modules/],
//                 mediaQuery: false
//           })
//         ]
//       }
//     }
//   },
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'production') {
//       // 为生产环境修改配置...
//     } else {
//       // 为开发环境修改配置...
//     }
//   }
// }
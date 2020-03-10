const { 
    override, 
    fixBabelImports,
    addLessLoader
} = require('customize-cra');

// 使用ant-design搭建React+ts项目，可在此重重定义antd全局样式
const overConfig  = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        // libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#009688' },
    }),
);

module.exports = function (config, env) {
    return overConfig(config, env)
}


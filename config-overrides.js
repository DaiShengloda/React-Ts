const { 
    override, 
    fixBabelImports,
    addLessLoader,
    addWebpackPlugin,
} = require('customize-cra');

// 版本控制
const Package = require("./package.json");
const Version = Package.version;
const GenerateAssetPlugin = require("generate-asset-webpack-plugin");
const createVersionConfig = function (params) {
    let config = {
        version: Version,
        force_refresh: false
    };
    return JSON.stringify(config);
};

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
    addWebpackPlugin(
        new GenerateAssetPlugin({
            filename: "version_config.json",
            fn: (compilation, cb) => {
                cb(null, createVersionConfig(compilation));
            },
            extraFiles: []
        })
    )
);

module.exports = function (config, env) {
    return overConfig(config, env)
}


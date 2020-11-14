const{
    override,
    fixBabelImports,
    addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libararyName: 'antd',
        libararyDirectory: 'es',
        style: 'css'
    }),
    addDecoratorsLegacy()
);
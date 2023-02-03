const postcss = require('rollup-plugin-postcss');
module.exports = {
  rollup(config, options) {
    console.log('----option', options);
    config.plugins.push(
      postcss({
        inject: true,
        // extract: !!options.writeMeta,
        extract: 'hippoUI.css',
        modules: true, // 使用css modules 
        namedExport: true, // 类名导出
        camelCase: true, // 支持驼峰  // autoModules:true, // namedExports(name) { //   // Maybe you simply want to convert dash to underscore //   return name.replace(/-/g, '_') // }
        less: true,
        sass: true,
      })
    );
    return config;
  },
};

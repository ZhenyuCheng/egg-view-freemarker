'use strict';

const { Render } = require('fast-ftl');
const Freemarker = require('freemarker');
module.exports = class FreemarkerView {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.freemarker; // { root: __dirname}
  }

  render(filename, locals, viewOptions) {
    // const freemarker = new Freemarker(this.config);

    const render = Render(Object.assign({
      defaultEncoding: 'utf-8', // 默认 encoding
      urlEscapingCharsetSet: 'utf-8', // URLEscapingCharset
      numberFormat: '0.##########', // 数字格式化方式
      templateUpdateDelay: 0, // milliseconds 为单位
    }, this.config));

    return new Promise((resolve, reject) => {
      render.parse(filename, locals).then(data => {
        resolve(data);
      }).catch(e => {
        reject(e);
      });
    });
  }

  renderString(tpl, locals, viewOptions) {
    try {
      // 同步调用 API
      const freemarker = new Freemarker();
      return new Promise((resolve, reject) => {
        freemarker.render(tpl, { local: '暂不支持' }, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
};

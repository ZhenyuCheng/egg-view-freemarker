'use strict';

const Freemarker = require('freemarker');
const freemarker = new Freemarker();

module.exports = class FreemarkerView {

    constructor(ctx) {
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.app.config.freemarker; // { root: __dirname}
    }

    async render(filename, locals, viewOptions) {
        const freemarker = new Freemarker(this.config);
        return new Promise((resolve, reject) => {
            freemarker.renderFile(path.join(__dirname, filename), locals, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    renderString(tpl, locals, viewOptions) {
        try {
            // 同步调用 API
            const freemarker = new Freemarker();
            return new Promise((resolve, reject) => {
                freemarker.render(tpl, locals, (err, result) => {
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
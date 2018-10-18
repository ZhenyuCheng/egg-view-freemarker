'use strict';

module.exports = app => {
  app.view.use('freemarker', require('./lib/view'));
};

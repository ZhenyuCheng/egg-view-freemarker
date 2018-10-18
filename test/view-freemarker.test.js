'use strict';

const mock = require('egg-mock');

describe('test/view-freemarker.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/view-freemarker-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, viewFreemarker')
      .expect(200);
  });
});

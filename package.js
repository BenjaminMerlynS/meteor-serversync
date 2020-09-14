Package.describe({
  name: 'merlyn:serversync',
  version: '0.5.0',
  summary: 'Synchronize collections across multiple meteor servers (belonging to separate apps)',
  git: 'https://github.com/BenjaminMerlynS/meteor-serversync.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('underscore');
  api.use('mongo');
  api.use('matb33:collection-hooks@0.8.1');
  api.mainModule('serversync.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('merlyn:serversync');
  api.mainModule('serversync-tests.js');
});

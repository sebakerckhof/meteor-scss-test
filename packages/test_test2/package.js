Package.describe({
  summary: 'Test 2.',
  version: "0.0.1",
  git: "https://github.com/fourseven/meteor-scss.git",
  name: "test:test2"
});


Package.onUse(function (api) {
  api.use(["meteor", 'fourseven:scss']);
  api.addFiles([
      'test2.scss'
  ],['client']);

  api.addFiles([
      'sub/test2import.scss'
  ],['client'],{isImport:true});
});

Package.on_test(function (api) {

});

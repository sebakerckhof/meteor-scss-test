Package.describe({
  summary: 'Test 1.',
  version: "0.0.1",
  git: "https://github.com/fourseven/meteor-scss.git",
  name: "test1"
});


Package.onUse(function (api) {
  api.use(["meteor", 'fourseven:scss']);
  api.addFiles([
      'sub/_3.scss',
      'sub/_3_1.scss',
      '_3_2.scss',
      'test1.scss'
  ],['client']);

  api.addFiles([
  ],['client'],{isImport:true});
});

Package.on_test(function (api) {

});

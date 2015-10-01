Package.describe({
  summary: 'Test 2.',
  version: "0.0.1",
  git: "https://github.com/fourseven/meteor-scss.git",
  name: "test:test2"
});


Package.onUse(function (api) {
  api.use(["meteor", 'fourseven:scss']);
  api.addFiles([
      '2/_2_1_1.scss',
      'sub/_4.scss',
      'sub/_4_1.scss',
      'sasstest.sass',
      'variables/global/_3_1_1_1.scss',
      'variables/_3_1_1.scss',
      '_2_1.scss',
      '_4_1_1.scss'
  ],['client']);

  api.addFiles([],['client'],{isImport:true});
});

Package.on_test(function (api) {

});

// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['app.e2e-spec.ts'],

   capabilities: {
     browserName: 'firefox'
   }
   
  }
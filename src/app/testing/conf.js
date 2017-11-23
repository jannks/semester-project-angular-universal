// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
   // capabilities: {
   //   browserName: 'firefox'
   // } 
   capabilities: get('browserName').replace(/ /g, "_")
   
  }
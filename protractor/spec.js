// spec.js


 // var ProtractorPerf = require('protractor-perf');
  describe('HFU Angular Project', function() {
 //     var perf = new ProtractorPerf(protractor); // Initialize the perf runner
      it('should open front page', function() {
          browser.get('http://localhost:4000');
          
         
      });
      it('should open login page', function(){
      //  browser.get('http://localhost:4000/login');
        var elem = $('loginID');
        elem.click();
        
      });
      it('should perform the login', function(){
      element(by.model('email')).sendKeys('nathalie.giessler@hs-furtwangen.de');
      element(by.model('password')).sendKeys('12345');
      browser.pause();
      });

      
  });
  
/*
  var PerfRunner = require('..');
  describe('angularjs homepage todo list', function() {
      var perfRunner = new PerfRunner(protractor, browser);
  
      it('should add a todo', function() {
          browser.get('http://www.angularjs.org');
          perfRunner.start();
  
          element(by.model('todoList.todoText')).sendKeys('write a protractor test');
          element(by.css('[value="add"]')).click();
  
          perfRunner.stop();
  
          if (perfRunner.isEnabled) {
              expect(perfRunner.getStats('meanFrameTime')).toBeLessThan(60);
          };
  
          var todoList = element.all(by.repeater('todo in todoList.todos'));
          expect(todoList.count()).toEqual(3);
          expect(todoList.get(2).getText()).toEqual('write a protractor test');
  
      });
  });
  */
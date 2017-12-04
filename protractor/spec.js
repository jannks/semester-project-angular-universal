// spec.js


  var ProtractorPerf = require('protractor-perf');
  describe('HFU Angular Project', function() {
      var perf = new ProtractorPerf(protractor); // Initialize the perf runner
      it('should open front page', function() {
          browser.get('http://localhost:4200');
  
          perf.start(); // Start measuring the metrics
         
          //Functional tests

          perf.stop(); // Stop measuring the metrics 
  
          if (perf.isEnabled) { // Is perf measuring enabled ?
              // Check for perf regressions, just like you check for functional regressions
              expect(perf.getStats('meanFrameTime')).toBeLessThan(60); 
          };
  
         // var todoList = element.all(by.repeater('todo in todos'));
         // expect(todoList.count()).toEqual(3);
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
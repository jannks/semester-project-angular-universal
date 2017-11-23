// spec.js


  var ProtractorPerf = require('protractor-perf');
  describe('site todo list', function() {
      var perf = new ProtractorPerf(protractor); // Initialize the perf runner
      it('should add a todo', function() {
          browser.get('http://localhost:4200');
  
          perf.start(); // Start measuring the metrics
         
          //Functional tests

          perf.stop(); // Stop measuring the metrics 
  
          if (perf.isEnabled) { // Is perf measuring enabled ?
              // Check for perf regressions, just like you check for functional regressions
              expect(perf.getStats('meanFrameTime')).toBeLessThan(60); 
          };
  
          var todoList = element.all(by.repeater('todo in todos'));
          expect(todoList.count()).toEqual(3);
      });
  });
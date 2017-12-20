
    browser.ignoreSynchronization = true;
      it('should open front page', function() {
          browser.get('http://localhost:4200');
      });

      it('should open login page', function(){
        element(by.linkText('Log In')).click();
      });

      it('should perform the login', function(){
      element(by.id('emailInput')).sendKeys('nathalie.giessler@hs-furtwangen.de');
      element(by.id('passwordInput')).sendKeys('123456');
      element(by.css('button[type="submit"]')).click();
      browser.pause(); //needed to let the site load, we need an automation!
      });
      
      it('should open upload page', function(){
        element(by.linkText('Upload')).click();
      });

      //just works with chrome, for other browsers: set elements visible
      it('should upload a file', function() {
        element(by.css('input[type="file"]')).sendKeys('C:/Users/Nathalie/Documents/GitHub/semester-project-angular-universal/Katzi.jpg');    
        element(by.id('uploadButton')).click();
      });

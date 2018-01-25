
    browser.ignoreSynchronization = true;
    //browser.pause();
      it('should open front page', function() {
        browser.get('http://localhost:4200');
      });

      it('should open login page', function(){
        element(by.linkText('Log In')).click();
      });
      
      it('should perform the login and open start page', function(){
        element(by.id('emailInput')).sendKeys('nathalie.giessler@hs-furtwangen.de');
        element(by.id('passwordInput')).sendKeys('123456');
        element(by.css('button[type="submit"]')).click();
        browser.driver.sleep(2000); //needed to let the site load
      });
  
      it('should open upload page', function(){
        browser.waitForAngular();
        element(by.linkText('Upload')).click();
      });

      //just works with chrome, for other browsers: set elements visible
      it('should upload a file', function() {
        browser.waitForAngular();
        element(by.css('input[type="file"]')).sendKeys('C:/Users/Nathalie/Documents/GitHub/semester-project-angular-universal/Katzi.jpg');    
        element(by.id('uploadButton')).click();
      });

      it('should click on first picture', function(){
        element(by.xpath("/html/body/app-root/div/app-front-page/div[1]/div/a/img")).click();
      })
      
      it('should insert a comment an click send button', function(){
        element(by.css("input[id='chatInputId']")).sendKeys("automatic comment");
        element(by.id("commentButtonId")).click();
      })
      
      it('should click logout button', function(){
        element(by.linkText("Log Out")).click();
      })
      

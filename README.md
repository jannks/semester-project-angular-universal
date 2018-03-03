<p><h1>Angular Universal Semester Project</h1></p>

### Project Documentation
https://github.com/jannks/semester-project-angular-universal/blob/master/Semesterprojekt_final.pdf

### Installation
* `npm install` 

### Client-side only rendering (Angular)
* run `npm run start` which will start `ng serve` on `http://localhost:4200`.

### Server-side rendering (Universal)
First: **`npm run build:ssr`** 

Then: **`npm run serve:ssr`** 

Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

### Testing - Start Selenium Server
First: **`webdriver-manager update`**
Then: **`webdriver-manager start`**
Sets Selenium Server up on `localhost:4444/wd/hub` - needs seperate console. 

### Testing Start Protractor
First: Change diretory to `\semester-project-angular-universal\protractor`
Then: **`protractor conf.js`**
Runs protractor test - needs seperate console.

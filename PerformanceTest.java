
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PerformanceTest {

	static long pageLoadTime(JavascriptExecutor js) {
		long loadEventEnd = (Long) js.executeScript("return window.performance.timing.loadEventEnd;");
		long navigationStart = (Long) js.executeScript("return window.performance.timing.navigationStart;");
		return loadEventEnd - navigationStart;
	}

	static long pageRenderTime(JavascriptExecutor js) {
		long domLoading = (Long) js.executeScript("return window.performance.timing.domLoading;");
		long domComplete = (Long) js.executeScript("return window.performance.timing.domComplete;");
		return domComplete - domLoading;
	}

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C://Users/Nathalie/Desktop/AIN4/Semesterprojekt Angular Universal/Selenium_javafiles/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		JavascriptExecutor js = (JavascriptExecutor) driver;

		long timePageLoadTotal = 0;
		long timePageRenderTotal = 0;
		int x = 10; // number of iterations

		for (int i = 0; i < x; i++) {

			// open front page
			driver.get("http://localhost:4200");
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// click Login button
			driver.findElement(By.linkText("Log In")).click();
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// perform login incl redirect to start page
			driver.findElement(By.id("emailInput")).sendKeys("nathalie.giessler@hs-furtwangen.de");
			driver.findElement(By.id("passwordInput")).sendKeys("123456");
			driver.findElement(By.cssSelector("button[type='submit']")).click();
			Thread.sleep(2000); // needed to let the site load
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// click Upload button
			driver.findElement(By.linkText("Upload")).click();
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// upload a file
			driver.findElement(By.cssSelector("input[type='file']")).sendKeys("C:/Users/Nathalie/Documents/GitHub/semester-project-angular-universal/Katzi.jpg");
			driver.findElement(By.id("uploadButton")).click();
			driver.findElement(By.linkText("HFU Angular Project")).click();
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// click first image
			driver.findElement(By.xpath("/html/body/app-root/div/app-front-page/div[1]/div/a/img")).click();
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// insert a comment and click send button
			driver.findElement(By.cssSelector("input[id='chatInputId']")).sendKeys("automatic comment");
			driver.findElement(By.id("commentButtonId")).click();
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

			// click logout button
			driver.findElement(By.linkText("Log Out")).click();
			timePageLoadTotal += pageLoadTime(js);
			timePageRenderTotal += pageRenderTime(js);

		}

		driver.quit();

		System.out.println("Page Loading Time:");
		System.out.println("Total time for " + x + " iterations: " + timePageLoadTotal + "ms.");
		System.out.println("Average time per iteration over " + x + " iterations: " + (timePageLoadTotal / x) + "ms.");

		System.out.println("Page Render Time:");
		System.out.println("Total time for " + x + " iterations: " + timePageRenderTotal + "ms.");
		System.out
				.println("Average time per iteration over " + x + " iterations: " + (timePageRenderTotal / x) + "ms.");
	}
}

import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class FormService {
  async submitForm() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto('https://warehouse-theme-metal.myshopify.com/account/register');

      // Wait for the form to be visible on the page
      await page.waitForSelector('#create_customer');

      // Fill in the form inputs
      await page.type('input[autocomplete^="given"]', 'john');
      await page.type('input[autocomplete^="family"]', 'doe');
      await page.type('input[autocomplete^="email"]', 'demo@username.com');
      await page.type('input[type=password]', '123456');

      // Submit the form by clicking the login button
      await Promise.all([
          // Wait for navigation to complete
          page.waitForNavigation(),
          page.click('.form__submit.button--full'),
      ]);

      // Verify registration by checking if the URL contains 'challenge'.
      // This is a ReCaptcha challenge checking if you're a bot.
      // We will teach you how to work around it in another tutorial.
      const signUpUrl = await page.url();
      if (signUpUrl.includes('challenge')) {
          console.log('successful!');
      } else {
          console.log('failed!');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      // Close the browser
      await browser.close();
    }
  }
}

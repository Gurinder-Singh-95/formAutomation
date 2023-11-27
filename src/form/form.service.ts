import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class FormService {
  async submitForm() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      // Navigate to the form page
      await page.goto('https://bukabantuan.bukalapak.com/form/175');

      // Fill out the form with dummy data
      await page.type('#firstName', 'John');
      await page.type('#lastName', 'Doe');
      // Add more fields as needed

      // Submit the form
      await page.click('#submitBtn');

      // Wait for form submission (you may need to adjust the selector and timing)
      await page.waitForNavigation();

      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      // Close the browser
      await browser.close();
    }
  }
}

import { Controller, Get } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get('submit')
  async submitForm() {
    await this.formService.submitForm();
    return 'Form submitted successfully';
  }
}

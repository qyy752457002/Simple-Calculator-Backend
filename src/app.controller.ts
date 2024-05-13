import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get-problem')
  getMathProbllem(): { problem: string, answer: number } {
    const { problem, answer } = this.appService.getUniqueProblem();
    return { problem, answer };
  }
}

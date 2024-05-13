import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private history: Set<string> = new Set();

  private generateRandomNumber(): number {
    // Generates numbers between 0 and 10
    return Math.floor(Math.random() * 10);
  }

  private createProblem(): { problem: string, answer: number } {
    // generate operator
    const operation: string = Math.random() > 0.5 ? '+' : '-';
    // generate number a
    const a: number = this.generateRandomNumber();
    // generate number b
    const b: number = this.generateRandomNumber();
    //  generate problem
    const problem: string = `${a} ${operation === '+' ? '+' : '-'} ${b}`;
    // generate answer
    const answer: number = operation === '+' ? a + b : a - b;

    if (this.history.has(problem)) {
      // Recursively call until a unique problem is generated
      return this.createProblem();
    }

    this.history.add(problem);
    return { problem, answer };
  }

  public getUniqueProblem(): { problem: string, answer: number } {
    return this.createProblem();
  }
}

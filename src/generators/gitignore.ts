import { Generator } from '.';

export class Gitignore extends Generator {
  ignorePatterns = ['node_modules/'];
  constructor() {
    super('.gitignore');
  }
  add(pattern: string): void {
    this.ignorePatterns.push(pattern);
  }
  make(): void {
    this.makeFile(this.ignorePatterns.join('\n'));
  }
}

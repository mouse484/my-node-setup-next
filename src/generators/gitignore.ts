import { Generator } from '.';

export class Gitignore extends Generator {
  ignorePatterns = ['node_modules/'];
  constructor() {
    super('.gitignore');
  }
  make(): void {
    this.makeFile(this.ignorePatterns.join('\n'));
  }
}

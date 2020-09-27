import { Generator } from '.';

import { formatJson } from '../lib';

export class ESLintrc extends Generator {
  rules: string[];
  constructor(dependencies: string[]) {
    super('.eslintrc.json');

    this.rules = dependencies.filter((name) =>
      name.startsWith('@mouse_484/eslint-config-')
    );
  }
  make(): void {
    const eslintrc = {
      extends: this.rules,
    };
    this.makeFile(formatJson(eslintrc));
  }
}

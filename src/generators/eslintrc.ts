import { Generator } from '.';

import { makeFile, formatJson } from '../lib';

export class ESLintrc extends Generator {
  rules: string[];
  constructor(dependencies: string[]) {
    super('.eslintrc.json');

    console.log(dependencies);

    this.rules = dependencies.filter((name) =>
      name.startsWith('@mouse_484/eslint-config-')
    );
  }
  make(): void {
    const eslintrc = {
      extends: this.rules,
    };
    makeFile(this.name, formatJson(eslintrc));
  }
}

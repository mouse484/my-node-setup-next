import { PromptAnsers } from './prompt';
import {
  Package,
  ESLintrc,
  Gitignore,
  TSConfig,
  Prettierrc,
} from './generators';

export const generator = ({
  name,
  description,
  author,
  type,
  typescript,
  lint,
}: PromptAnsers): void => {
  const packageGenerator = new Package();
  const gitignoreGenerator = new Gitignore();

  if (typescript) {
    packageGenerator.add('typescript', true);

    gitignoreGenerator.add('dist/');

    if (type.includes('node')) {
      packageGenerator
        .add('ts-node')
        .add('@types/node', true)
        .addScript('dev', 'ts-node src');
    }
  }

  if (lint.includes('eslint')) {
    packageGenerator.add('eslint', true).addScript('lint', 'eslint src');

    if (type.includes('node')) {
      packageGenerator.add('@mouse_484/eslint-config-node', true);
    } else if (type.includes('browser')) {
      packageGenerator.add('@mouse_484/eslint-config-browser', true);
    }

    if (lint.includes('prettier')) {
      packageGenerator
        .add('@mouse_484/eslint-config-prettier', true)
        .addScript('fix', 'yarn fmt && yarn lint --fix');
    }

    if (typescript) {
      packageGenerator.add('@mouse_484/eslint-config-typescript', true);
    }
  }

  packageGenerator.make({ name, description, author });

  if (lint.includes('eslint')) {
    new ESLintrc(packageGenerator.getAllDependencies()).make();
  }

  if (lint.includes('prettier')) {
    packageGenerator
      .add('prettier', true)
      .addScript('fmt', 'prettier --write .');
    new Prettierrc().make();
  }

  if (typescript) {
    new TSConfig().make({ isNode: type.includes('node') });
  }

  gitignoreGenerator.make();
};

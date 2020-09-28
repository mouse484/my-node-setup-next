import { Generator } from '.';
import { formatJson } from '../lib';

export class TSConfig extends Generator {
  constructor() {
    super('tsconfig.json');
  }
  make({ isNode }: { isNode: boolean }): void {
    const compilerOptions: {
      target: 'es2019';
      strict: boolean;
      declaration: boolean;
      outDir: string;
      declarationDir: string;
      module?: 'commonjs';
      esModuleInterop?: boolean;
      moduleResolution?: 'node';
    } = {
      target: 'es2019',
      strict: true,
      declaration: true,
      outDir: './dist',
      declarationDir: 'dist/type',
    };

    if (isNode) {
      compilerOptions['module'] = 'commonjs';
      compilerOptions['esModuleInterop'] = true;
      compilerOptions['moduleResolution'] = 'node';
    }

    const tsconfig = { compilerOptions, include: ['src/**/*.ts'] };

    this.makeFile(formatJson(tsconfig));
  }
}

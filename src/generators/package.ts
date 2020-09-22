import { Generator } from '.';
import { PromptAnsers } from '../prompt';
import { formatJson } from '../lib';
import { dependencies as dependenciesList } from '../lib/package.json';

export type packageJson = Pick<PromptAnsers, 'name' | 'description' | 'author'>;

export type dependenciesType = keyof typeof dependenciesList;

export class Package extends Generator {
  private dependencies: { [key: string]: string } = {};
  private devDependencies: { [key: string]: string } = {};
  constructor() {
    super('package.json');
  }
  add(name: dependenciesType, dev?: true): this {
    if (dev) {
      this.devDependencies[name] = dependenciesList[name];
    } else {
      this.dependencies[name] = dependenciesList[name];
    }
    return this;
  }
  make(data: packageJson): void {
    const packageData = {
      ...data,
      dependencies: this.dependencies,
      devDependencies: this.devDependencies,
    };
    this.makeFile(formatJson(packageData));
  }
  getAllDependencies(): string[] {
    return Object.keys({
      ...this.dependencies,
      ...this.devDependencies,
    });
  }
}

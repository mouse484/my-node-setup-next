import { makeFile } from '../lib';

export abstract class Generator {
    constructor(public name: string) { }
    abstract make(data: unknown): void;
    protected makeFile(data: string): void {
        makeFile(this.name, data);
    }
}

export { formatJson } from '../lib';

export * from './package';
export * from './gitignore';
export * from './eslintrc';
export * from './tsconfig';

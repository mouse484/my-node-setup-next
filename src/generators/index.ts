import { makeFile } from '../lib';

export abstract class Generator {
  constructor(public name: string) {}
  abstract make(data: unknown): void;
  makeFile(data: string): void {
    makeFile(this.name, data);
  }
}

import fs from 'fs/promises';
import path from 'path';

export abstract class Generator {
  private file: unknown;
  private filePath: string;
  constructor(public name: string) {
    this.filePath = path.join(process.cwd(), name);
  }
  abstract make(data: unknown): void;
  protected makeFile(data: string): void {
    fs.writeFile(this.filePath, data);
  }
}

export abstract class Generator {
  constructor(public name: string) {}
  abstract make(data: unknown): void;
}

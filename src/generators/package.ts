import { Generator } from ".";
import { PromptAnsers } from "../prompt";
import { makeFile, formatJson } from "../lib";

export type packageJson = Pick<PromptAnsers, "name" | "description" | "author">;

export class Package extends Generator {
  constructor() {
    super("package.json");
  }
  make(data: packageJson) {
    makeFile(this.name, formatJson(data));
  }
}

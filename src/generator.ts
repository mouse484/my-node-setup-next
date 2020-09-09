import { PromptAnsers } from "./prompt";
import { formatJson } from "./lib/formatJson";
import { makeFile } from "./lib/makeFile";
import path from "path";
import { promises as fs } from "fs";

export const generator = ({ name, description }: PromptAnsers) => {
  const packageJson = {
    name,
    description,
  };

  makeFile("package.json", formatJson(packageJson));
};

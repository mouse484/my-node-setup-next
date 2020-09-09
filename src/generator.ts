import { PromptAnsers } from "./prompt";
import { formatJson } from "./lib/formatJson";
import { makeFile } from "./lib/makeFile";
import path from "path";
import { promises as fs } from "fs";

export const generator = ({ name, description, author }: PromptAnsers) => {
  const packageJson = {
    name,
    description,
    author,
  };

  makeFile("package.json", formatJson(packageJson));
};

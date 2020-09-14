import prompts from "prompts";
import path, { basename } from "path";
import { homedir } from "os";
import ini from "ini";
import { promises as fs } from "fs";

const getGitUserDate = async () =>
  ini.parse(await fs.readFile(path.join(homedir(), ".gitconfig"), "utf8")) as {
    user: { name?: string };
  };

export type PromptAnsers = {
  name: string;
  description: string;
  author: string;
  type: string;
  typescript: boolean;
  lint: ("eslint" | "prettier")[];
};

export const prompt = async () => {
  const rootPath = process.cwd();
  const defaultProjectName = process.argv[2] || basename(rootPath);
  const { user } = await getGitUserDate();

  const response: PromptAnsers = await prompts([
    {
      name: "name",
      message: "Project name.",
      type: "text",
      initial: defaultProjectName,
    },
    {
      name: "description",
      message: "Project description",
      type: "text",
    },
    {
      name: "author",
      message: "Author name",
      type: "text",
      initial: user.name,
    },
    {
      name: "type",
      message: "Select development type",
      type: "select",
      choices: [
        { title: "Node.js", value: "node" },
        { title: "Browser", value: "browser" },
      ],
    },
    {
      name: "typescript",
      message: "Use TypeScript?",
      type: "confirm",
    },
    {
      name: "lint",
      message: "Select Linting tools",
      type: "multiselect",
      choices: [
        { title: "ESLint", value: "eslint" },
        { title: "Prettier", value: "prettier" },
      ],
    },
  ]);
  return response;
};

import path from "path";
import { promises as fs } from "fs";

export const makeFile = (filename: string, data: string) => {
  const projectDirectory = process.cwd();
  const filePath = path.join(projectDirectory, filename);
  fs.writeFile(filePath, data);
};

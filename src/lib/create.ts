import { promisify } from 'util';
import { exec as cpexec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const exec = promisify(cpexec);
const dirName = 'my-node-setup-next';

export type created = { name: string; path: string };

export const create = async (creator: string): Promise<void> => {
  await exec(`npx create-${creator}-app ${dirName}`);

  const walk = async (dirPath: string) => {
    const dirents = await fs.readdir(dirPath, { withFileTypes: true });

    dirents.map(({ isDirectory, name }) => {
      const direntPath = path.join(dirPath, name);
      if (isDirectory()) {
        if (name === 'node_modules') return;
        walk(direntPath);
      } else {
        console.log({ name, path: direntPath });
      }
    });
  };

  walk(path.join(process.cwd(), dirName))
};

import { promisify } from 'util';
import { exec as cpexec } from 'child_process';
const exec = promisify(cpexec);

export const create = async (creator: string): Promise<void> => {
  await exec(`npx create-${creator}-app my-node-setup-next`);
};

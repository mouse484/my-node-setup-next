#!/usr/bin/env ts-node-script

import { prompt } from './prompt';
import { generator } from './generator';

const main = async () => {
  const promptAnswers = await prompt();

  generator(promptAnswers);
};

main();

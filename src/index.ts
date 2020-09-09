import { prompt } from "./prompt";
import { generator } from "./generator";

const main = async () => {
  const promptAnswers = await prompt();
  console.log(promptAnswers);
  generator(promptAnswers);
};

main();

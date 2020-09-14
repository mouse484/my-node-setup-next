import { PromptAnsers } from "./prompt";
import { Package } from "./generators/package";

export const generator = ({
  name,
  description,
  author,
  typescript,
}: PromptAnsers) => {
  const packageGenerator = new Package();

  if (typescript) {
    packageGenerator.add("typescript", true);
  }

  packageGenerator.make({ name, description, author });
};

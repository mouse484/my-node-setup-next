import { PromptAnsers } from "./prompt";
import { Package } from "./generators/package";

export const generator = ({ name, description, author }: PromptAnsers) => {
  new Package().add("typescript", true).make({ name, description, author });
};

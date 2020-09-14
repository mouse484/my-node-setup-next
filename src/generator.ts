import { PromptAnsers } from "./prompt";
import { Package } from "./generators/package";

export const generator = ({
  name,
  description,
  author,
  typescript,
  lint,
}: PromptAnsers) => {
  const packageGenerator = new Package();

  if (typescript) {
    packageGenerator.add("typescript", true);
  }

  if (lint.includes("eslint")) {
    packageGenerator.add("eslint", true);
    if (lint.includes("prettier")) {
      packageGenerator
        .add("eslint-config-prettier", true)
        .add("eslint-plugin-prettier", true);
    }
  }

  if (lint.includes("prettier")) {
    packageGenerator.add("prettier", true);
  }

  packageGenerator.make({ name, description, author });
};

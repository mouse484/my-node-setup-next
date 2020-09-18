import { PromptAnsers } from "./prompt";
import { Package } from "./generators/package";
import { ESLintrc } from "./generators/eslintrc";

export const generator = ({
  name,
  description,
  author,
  type,
  typescript,
  lint,
}: PromptAnsers) => {
  const packageGenerator = new Package();

  if (typescript) {
    packageGenerator.add("typescript", true);
  }

  if (lint.includes("eslint")) {
    packageGenerator.add("eslint", true);

    if (type.includes("node")) {
      packageGenerator.add("@mouse_484/eslint-config-node");
    } else if (type.includes("browser")) {
      packageGenerator.add("@mouse_484/eslint-config-browser");
    }

    if (lint.includes("prettier")) {
      packageGenerator.add("@mouse_484/eslint-config-prettier");
    }

    if (typescript) {
      packageGenerator.add("@mouse_484/eslint-config-typescript");
    }
  }

  if (lint.includes("prettier")) {
    packageGenerator.add("prettier", true);
  }

  packageGenerator.make({ name, description, author });

  if (lint.includes("eslint")) {
    new ESLintrc(packageGenerator.getAllDependencies()).make();
  }
};

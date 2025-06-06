import { type Registry } from "shadcn/registry";

export const copyCode: Registry["items"] = [
  {
    name: "Copy Code",
    author: "shadcn (https://ui.shadcn.com)",
    title: "Copy Code",
    description: "Copy code to clipboard",
    type: "registry:block",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "components/registry/copy-code/component.tsx",
        type: "registry:component",
        target: "app/components/alphaUI/copy-code.tsx",
      },
    ],
  },
];

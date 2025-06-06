import { registryItemSchema, type Registry } from "shadcn/registry";
import { z } from "zod";

import { copyCode } from "@/components/registry/copy-code/registry";

export const registry = {
  name: "alpha/ui",
  homepage: "https://example.com",
  items: z.array(registryItemSchema).parse([...copyCode]),
} satisfies Registry;

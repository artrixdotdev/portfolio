"use client";

import { Button } from "@heroui/react";
import { Copy } from "lucide-react";

export const CopyCode: React.FC<{ code: string }> = ({ code }) => (
   <Button
      variant="light"
      size="sm"
      className="p-0 rounded w-12 h-12"
      onPress={() => navigator.clipboard.writeText(code)}
   >
      <Copy />
   </Button>
);

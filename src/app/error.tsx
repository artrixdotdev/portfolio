"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";
import { Code } from "@heroui/code";
export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex gap-4 flex-col h-screen w-full items-center justify-center">
      <h2>Something went wrong!</h2>
      <Code className="bg-danger-50 rounded text-danger-600 border border-danger-100">
        {error.message}
      </Code>
    </div>
  );
}

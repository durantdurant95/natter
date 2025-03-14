"use client";
import { insertRandomMessage } from "@/db/mutations";
import { Button } from "./ui/button";

export default function AddMessageButton() {
  return (
    <Button
      onClick={() => {
        insertRandomMessage(); // This function should be defined in your mutations.ts file
      }}
    >
      add random message
    </Button>
  );
}

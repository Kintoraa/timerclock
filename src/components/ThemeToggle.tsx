"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggles() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      className={"absolute top-1 right-1"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}

"use client";

import { Button } from "@/components/ui/button";

interface RandomFactButtonProps {
  readonly onPick: () => void;
  readonly disabled?: boolean;
}

export const RandomFactButton = ({ onPick, disabled = false }: RandomFactButtonProps) => {
  return (
    <Button type="button" onClick={onPick} disabled={disabled}>
      Losuj ciekawostke
    </Button>
  );
};

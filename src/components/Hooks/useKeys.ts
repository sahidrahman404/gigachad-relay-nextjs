import { useMemo } from "react";

function useKeys({ length }: { length: number }) {
  const ids: string[] = [];

  for (let i = 0; i < length; i++) {
    ids.push(crypto.randomUUID());
  }

  return useMemo(() => ids, []);
}

export { useKeys };

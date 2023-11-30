import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

type InfiniteScrollProps = {
  hasNextPage: boolean;
  // function should be memoized with loadNext fn as a dependency
  loadFn: () => void;
};

function InfiniteScroll({ hasNextPage, loadFn }: InfiniteScrollProps) {
  const divRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        loadFn();
      }
    });
    const ref = divRef?.current;
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [loadFn]);

  if (!hasNextPage) {
    return null;
  }
  return (
    <Button ref={divRef} className="opacity-0">
      Load More
    </Button>
  );
}

export { InfiniteScroll };

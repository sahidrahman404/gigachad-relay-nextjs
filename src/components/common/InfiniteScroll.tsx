import { useEffect, useRef } from "react";

type InfiniteScrollProps = {
  hasNextPage: boolean;
  // function should be memoized with loadNext fn as a dependency
  loadFn: () => void;
};

function InfiniteScroll({ hasNextPage, loadFn }: InfiniteScrollProps) {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadFn();
        }
      },
      { threshold: 1 },
    );
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
  return <div ref={divRef} />;
}

export { InfiniteScroll };

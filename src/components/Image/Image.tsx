import { ComponentProps, forwardRef } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { ImageFragment$key } from "@/queries/__generated__/ImageFragment.graphql";
export type ImageProps = ComponentProps<"img"> & {
  image: ImageFragment$key;
};
const ImageFragment = graphql`
  fragment ImageFragment on Image {
    src
    srcset
    width
    height
    priority
    loading
    fetchPriority
    decoding
    layout
    aspectRatio
    objectFit
    breakpoints
    alt
    role
    sizes
    style {
      aspectRatio
      height
      maxHeight
      maxWidth
      width
    }
  }
`;

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    const data = useFragment(ImageFragment, props.image);
    if (data === null || data.src.length === 0) {
      return null;
    }

    return (
      <img
        src={data.src}
        srcSet={data.srcset}
        width={data.width ?? undefined}
        height={data.height ?? undefined}
        //@ts-ignore
        loading={data.loading ?? undefined}
        //@ts-ignore
        fetchpriority={data.fetchPriority ?? undefined}
        //@ts-ignore
        decoding={data.decoding ?? undefined}
        alt={data.alt ?? undefined}
        role={data.role ?? undefined}
        sizes={data.sizes ?? undefined}
        style={{
          aspectRatio: data.style.aspectRatio ?? undefined,
          height: data.style.height ?? undefined,
          maxHeight: data.style.maxHeight ?? undefined,
          maxWidth: data.style.maxWidth ?? undefined,
          width: data.style.width ?? undefined,
          // @ts-ignore
          objectFit: data.objectFit ?? undefined,
        }}
        {...props}
        ref={ref}
      />
    );
  },
);

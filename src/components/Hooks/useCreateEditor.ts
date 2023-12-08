import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ComponentProps } from "react";
import Youtube from "@tiptap/extension-youtube";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";

type UseCreateEditorProps = ComponentProps<"div"> & {
  description?: Content;
  placeholder: string;
  onChange: (...event: any[]) => void;
};

function useCreateEditor({
  description,
  placeholder,
  onChange,
}: UseCreateEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Youtube,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: `${placeholder}`,
        emptyEditorClass:
          "cursor-text before:content-[attr(data-placeholder)] before:absolute before:opacity-50 before-pointer-events-none",
      }),
    ],
    content: description,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose focus:outline-none mx-auto",
      },
    },
  });
  return editor;
}

export { useCreateEditor };

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ComponentProps, forwardRef, useEffect } from "react";
import { MenuBar } from "./MenuBar";

type EditorProps = ComponentProps<"div"> & {
  description: string;
  shouldReset: boolean;
  onChange: (...event: any[]) => void;
};

const Editor = forwardRef<HTMLDivElement, EditorProps>(function Editor(
  { description, shouldReset, onChange },
  ref,
) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (shouldReset) {
      editor?.commands.clearContent();
    }
  }, [shouldReset]);

  return (
    <div className="space-y-2">
      <MenuBar editor={editor} ref={ref} />
      <EditorContent editor={editor} />
    </div>
  );
});

export { Editor };

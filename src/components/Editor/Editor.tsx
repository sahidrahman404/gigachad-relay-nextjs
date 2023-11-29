import { Editor, EditorContent } from "@tiptap/react";
import { MenuBar } from "./MenuBar";

function EditorField({ editor }: { editor: Editor | null }) {
  return (
    <>
      <MenuBar editor={editor} />
      <div className="flex flex-col max-h-96 w-full rounded-md border border-input bg-transparent shadow-sm">
        <EditorContent
          editor={editor}
          className="overflow-x-hidden overflow-y-auto py-5 px-4"
        />
      </div>
    </>
  );
}

export { EditorField };

import { Editor, EditorContent } from "@tiptap/react";
import { MenuBar } from "./MenuBar";

function EditorField({ editor }: { editor: Editor | null }) {
  return (
    <>
      <div className="flex">
        <MenuBar editor={editor} className="mx-auto" />
      </div>
      <div className="flex flex-col h-[50dvh] w-full rounded-md border border-input bg-transparent shadow-sm">
        <EditorContent
          editor={editor}
          className="overflow-x-hidden overflow-y-auto py-5 px-4 min-h-full"
        />
      </div>
    </>
  );
}

export { EditorField };

import { Editor } from "@tiptap/react";
import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ReactAriaUI/Button";
import {
  AlignCenter,
  AlignLeft,
  Bold,
  Heading1,
  Heading2,
  ImagePlus,
  Italic,
  List,
  Redo,
  Undo,
  YoutubeIcon,
} from "lucide-react";
import { YoutubeDialog } from "./YoutubeDialog";
import { ImageDialog } from "./ImageDialog";

type MenuBarProps = ComponentProps<"div"> & { editor: Editor | null };

const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(function MenuBar(
  { editor, className },
  ref,
) {
  if (!editor) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap", className)} ref={ref}>
      <Button
        onPress={() => {
          editor.chain().focus().toggleBold().run();
        }}
        isDisabled={!editor.can().chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "secondary" : "ghost"}
      >
        <Bold size={16} />
      </Button>

      <Button
        onPress={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        isDisabled={!editor.can().chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "secondary" : "ghost"}
      >
        <Italic size={16} />
      </Button>

      <Button
        onPress={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
        variant={editor.isActive("bulletList") ? "secondary" : "ghost"}
      >
        <List size={16} />
      </Button>

      <Button
        onPress={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 1 }) ? "secondary" : "ghost"
        }
      >
        <Heading1 size={16} />
      </Button>
      <Button
        onPress={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 2 }) ? "secondary" : "ghost"
        }
      >
        <Heading2 size={16} />
      </Button>

      <Button
        onPress={() => {
          editor.chain().focus().setTextAlign("left").run();
        }}
        variant={editor.isActive({ textAlign: "left" }) ? "secondary" : "ghost"}
      >
        <AlignLeft size={16} />
      </Button>

      <Button
        onPress={() => {
          editor.chain().focus().setTextAlign("center").run();
        }}
        variant={
          editor.isActive({ textAlign: "center" }) ? "secondary" : "ghost"
        }
      >
        <AlignCenter size={16} />
      </Button>

      <YoutubeDialog
        editor={editor}
        ButtonTrigger={
          <Button variant="ghost">
            <YoutubeIcon size="16" />
          </Button>
        }
      />

      <ImageDialog
        editor={editor}
        ButtonTrigger={
          <Button variant="ghost">
            <ImagePlus size="16" />
          </Button>
        }
      />

      <Button
        onPress={() => {
          editor.chain().focus().undo().run();
        }}
        isDisabled={!editor.can().chain().focus().undo().run()}
        variant="ghost"
      >
        <Undo size={16} />
      </Button>

      <Button
        onPress={() => {
          editor.chain().focus().redo().run();
        }}
        isDisabled={!editor.can().chain().focus().redo().run()}
        variant="ghost"
      >
        <Redo size={16} />
      </Button>
    </div>
  );
});

export { MenuBar };

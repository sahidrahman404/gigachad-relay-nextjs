import { Editor } from "@tiptap/react";
import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";

type MenuBarProps = ComponentProps<"div"> & { editor: Editor | null };

const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(function (
  { editor, className },
  ref,
) {
  if (!editor) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap gap-1.5 bg-background z-50 sticky top-[52px] pt-2 pb-2",
        className,
      )}
      ref={ref}
    >
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "secondary" : "outline"}
      >
        <Bold size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "secondary" : "outline"}
      >
        <Italic size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "secondary" : "outline"}
      >
        <Strikethrough size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setParagraph().run();
        }}
        variant={editor.isActive("paragraph") ? "secondary" : "outline"}
      >
        <Pilcrow size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 1 }) ? "secondary" : "outline"
        }
      >
        <Heading1 size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 2 }) ? "secondary" : "outline"
        }
      >
        <Heading2 size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 3 }) ? "secondary" : "outline"
        }
      >
        <Heading3 size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        variant={editor.isActive("bulletList") ? "secondary" : "outline"}
      >
        <List size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        variant={editor.isActive("orderedList") ? "secondary" : "outline"}
      >
        <ListOrdered size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBlockquote().run();
        }}
        variant={editor.isActive("blockquote") ? "secondary" : "outline"}
      >
        <Quote size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setHorizontalRule().run();
        }}
        variant="outline"
      >
        <Minus size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        disabled={!editor.can().chain().focus().undo().run()}
        variant="outline"
      >
        <Undo size={16} />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
        disabled={!editor.can().chain().focus().redo().run()}
        variant="outline"
      >
        <Redo size={16} />
      </Button>
    </div>
  );
});

export { MenuBar };

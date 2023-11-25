import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Bold, Italic, List, Pencil } from "lucide-react";

type TextDropDownProps = {
  editor: Editor;
};

function TextDropDown({ editor }: TextDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Pencil size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DropdownMenuLabel>Text</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().toggleBold().run();
          }}
        >
          <Bold className="mr-2 h-4 w-4" />
          <span>Bold</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().toggleItalic().run();
          }}
        >
          <Italic className="mr-2 h-4 w-4" />
          <span>Italic</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().toggleBulletList().run();
          }}
        >
          <List className="mr-2 h-4 w-4" />
          <span>List</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { TextDropDown };

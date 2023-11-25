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
import { Heading, Heading1, Heading2 } from "lucide-react";

type HeadingDropDownProps = {
  editor: Editor;
};

function HeadingDropDown({ editor }: HeadingDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Heading size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DropdownMenuLabel>Heading</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          disabled={editor.isActive("heading", { level: 1 }) ? true : false}
        >
          <Heading1 className="mr-2 h-4 w-4" />
          <span>Heading 1</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          disabled={editor.isActive("heading", { level: 2 }) ? true : false}
        >
          <Heading2 className="mr-2 h-4 w-4" />
          <span>Heading 2</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { HeadingDropDown };

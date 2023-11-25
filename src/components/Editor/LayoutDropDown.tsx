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
import { AlignCenter, AlignLeft, Layout } from "lucide-react";

type LayoutDropDownProps = {
  editor: Editor;
};

function LayoutDropDown({ editor }: LayoutDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Layout size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DropdownMenuLabel>Layout</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().setTextAlign("left").run();
          }}
          disabled={editor.isActive({ textAlign: "left" }) ? true : false}
        >
          <AlignLeft className="mr-2 h-4 w-4" />
          <span>Align Left</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            editor.chain().focus().setTextAlign("center").run();
          }}
          disabled={editor.isActive({ textAlign: "center" }) ? true : false}
        >
          <AlignCenter className="mr-2 h-4 w-4" />
          <span>Align Center</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { LayoutDropDown };

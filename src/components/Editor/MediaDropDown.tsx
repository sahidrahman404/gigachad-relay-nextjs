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
import { Film, ImagePlus, YoutubeIcon } from "lucide-react";
import { YoutubeDialog } from "./YoutubeDialog";
import { ImageDialog } from "./ImageDialog";

type MediaDropDownProps = {
  editor: Editor;
};

function MediaDropDown({ editor }: MediaDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Film size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Add Media</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <YoutubeDialog
          editor={editor}
          ButtonTrigger={
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <YoutubeIcon className="mr-2 h-4 w-4" />
              <span>Youtube</span>
            </DropdownMenuItem>
          }
        />
        <ImageDialog
          editor={editor}
          ButtonTrigger={
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <ImagePlus className="mr-2 h-4 w-4" />
              <span>Image</span>
            </DropdownMenuItem>
          }
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { MediaDropDown };

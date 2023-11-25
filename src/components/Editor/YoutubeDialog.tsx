import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ReactNode, useState } from "react";
import { Editor } from "@tiptap/react";

type YoutubeDialogProps = {
  editor: Editor;
  ButtonTrigger: ReactNode;
};

function YoutubeDialog({ editor, ButtonTrigger }: YoutubeDialogProps) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{ButtonTrigger}</DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px]"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Add YouTube video</DialogTitle>
          <DialogDescription>
            Enter YouTube url here. Click add when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Url
            </Label>
            <Input
              id="url"
              placeholder="https://www.youtube.com/watch?v=fksg8mWwxTM"
              className="col-span-3"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setUrl("");
              if (url.length > 5) {
                editor.chain().focus().setYoutubeVideo({ src: url }).run();
              }
              setOpen(false);
            }}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { YoutubeDialog };

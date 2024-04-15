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
import { Button } from "../ReactAriaUI/Button";

type ImageDialogProps = {
  editor: Editor;
  ButtonTrigger: ReactNode;
};

function ImageDialog({ editor, ButtonTrigger }: ImageDialogProps) {
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
          <DialogTitle>Add Image</DialogTitle>
          <DialogDescription>
            Enter image url here. Click add when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Url
            </Label>
            <Input
              id="url"
              placeholder="https://images.unsplash.com/photo-1700403322391-f1cd144394cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            onPress={() => {
              setUrl("");
              if (url.length > 5) {
                editor.chain().focus().setImage({ src: url }).run();
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

export { ImageDialog };

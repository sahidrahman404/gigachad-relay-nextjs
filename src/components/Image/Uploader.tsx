// Don't forget the CSS: core and the UI components + plugins you are using.
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import AwsS3 from "@uppy/aws-s3";
import Uppy from "@uppy/core";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Dashboard } from "@uppy/react";

type Uploader = {
  setHeight: (h: number) => void;
  setWidth: (w: number) => void;
  setFilename: (f: string) => void;
};

type CreateUppy = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Uploader;

function createUppy({ setHeight, setWidth, setFilename, setOpen }: CreateUppy) {
  const uppy = new Uppy({
    restrictions: {
      maxFileSize: 30000000,
      minNumberOfFiles: 1,
      maxNumberOfFiles: 1,
      allowedFileTypes: ["image/*"],
    },
  });

  uppy.on("file-added", (file) => {
    const data = file.data; // is a Blob instance
    const url = URL.createObjectURL(data);
    const image = new Image();
    image.src = url;
    image.onload = () => {
      uppy.setFileMeta(file.id, { width: image.width, height: image.height });
      URL.revokeObjectURL(url);
    };
  });

  uppy.on("upload-success", (file) => {
    setHeight((file?.meta.height as number | undefined) ?? 0);
    setWidth((file?.meta.width as number | undefined) ?? 0);
    setFilename(file?.meta.name ?? "");
    setOpen(false);
  });

  uppy.use(AwsS3, {
    id: "myAWSPlugin",
    async getUploadParameters(file) {
      // Send a request to our Express.js signing endpoint.
      const signURL = process.env.NEXT_PUBLIC_SIGN_S3_URL;

      if (!signURL) {
        throw new Error("Please add NEXT_PUBLIC_SIGN_S3_URL env");
      }

      const response = await fetch(signURL, {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      });

      if (!response.ok)
        throw new Error("Unsuccessful request", { cause: response });

      // Parse the JSON response.
      const data = (await response.json()) as {
        method: "POST" | "PUT";
        url: string;
      };

      // Return an object in the correct shape.
      return {
        method: data.method,
        url: data.url,
        fields: {}, // For presigned PUT uploads, this should be left empty.
        // Provide content type header required by S3
        headers: {
          "Content-Type": file.type,
        },
      } as any;
    },
  });

  return uppy;
}

function Uploader({ setWidth, setHeight, setFilename }: Uploader) {
  const [open, setOpen] = useState(false);
  const [uppy] = useState(() =>
    createUppy({
      setWidth,
      setHeight,
      setFilename,
      setOpen,
    }),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Upload</Button>
      </DialogTrigger>
      <DialogContent className="flex max-w-min">
        <Dashboard className="w-full mt-4" uppy={uppy} />
      </DialogContent>
    </Dialog>
  );
}

export default Uploader;

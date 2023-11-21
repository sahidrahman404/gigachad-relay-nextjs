import AwsS3 from "@uppy/aws-s3";
import Uppy from "@uppy/core";

export default function createUppy() {
  const uppy = new Uppy({
    onBeforeFileAdded: (currentFile) => {
      const name = Date.now() + "-" + currentFile.name;
      const modifiedFile = {
        ...currentFile,
        meta: {
          ...currentFile.meta,
          name,
        },
        name,
      };
      uppy.log(modifiedFile.name);
      return modifiedFile;
    },
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

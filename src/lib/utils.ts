import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import AwsS3 from "@uppy/aws-s3";
import Uppy, { InternalMetadata } from "@uppy/core";
import { ChangeEvent, MutableRefObject } from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function removeTokenAndRedirect() {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = await getToken();
  await fetch(`${url}/v1/tokens/delete/${token}`, {
    method: "DELETE",
    credentials: "include",
  });
  window.localStorage.removeItem("auth");
  window.location.replace("/auth/signin");
}

async function getToken(): Promise<string | null> {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(`${url}/v1/tokens/get`, {
    credentials: "include",
  });
  const token = (await response.json()) as string | null;
  return token;
}

function setTokenAndRedirect(token: string) {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  fetch(`${url}/v1/tokens/set/${token}`, {
    credentials: "include",
  }).then((_) => {
    window.location.replace(`/dashboard/routines`);
  });
}

function createUppy() {
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

type UploadImageAndDoGqlMutation = {
  image?: File;
  uppy: Uppy;
  form: UseFormReturn<any>;
  imageInputRef: MutableRefObject<HTMLInputElement | null>;
  setIsUploadInFlight: (state: boolean) => void;
  mutation: (meta?: InternalMetadata & Record<string, unknown>) => void;
};

function uploadImageAndDoGqlMutation({
  image,
  uppy,
  form,
  imageInputRef,
  setIsUploadInFlight,
  mutation,
}: UploadImageAndDoGqlMutation) {
  if (image) {
    setIsUploadInFlight(true);
    if (image.size > 0) {
      const img = document.createElement("img");
      uppy.addFile({
        data: image,
        name: image.name,
        size: image.size,
        meta: {
          name: image.name,
          type: image.type,
        },
      });

      const objectURL = URL.createObjectURL(image);

      img.onload = function handleLoad() {
        uppy.setMeta({
          width: img.width,
          height: img.height,
        });
        URL.revokeObjectURL(objectURL);
      };

      img.src = objectURL;

      uppy.upload().then((res) => {
        const meta = res.successful[0].meta;
        form.reset();
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }
        setIsUploadInFlight(false);
        mutation(meta);
      });
    }
    return;
  }
  form.reset();
  mutation();
}

type ImageFieldOnChange = {
  event: ChangeEvent<HTMLInputElement>;
  field: ControllerRenderProps<any, "image">;
};
function imageFieldOnChange({ event, field }: ImageFieldOnChange) {
  const file = event.target.files ? event.target.files[0] : undefined;
  field.onChange(file);
}

function capitalizeFirstLetter(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function checkDuplicate(arr: string[]) {
  let result = false;
  // create a Set with array elements
  const s = new Set(arr);
  // compare the size of array and Set
  if (arr.length !== s.size) {
    result = true;
  }
  return result;
}

const OneKgInLb = 2.20462;
const OnePoundInKg = 0.453592;

function convertPoundToKg(val: number): number {
  return val * OnePoundInKg;
}

function convertKgToPound(val: number): number {
  return val * OneKgInLb;
}

function getNumberFieldUnitFormatOptions(
  unit: string,
  label: string,
): Intl.NumberFormatOptions {
  const u = unit !== "METRIC" ? "pound" : "kilogram";
  if (label.toLowerCase() !== "reps") {
    return {
      style: "unit",
      unit: u,
      unitDisplay: "short",
    };
  } else {
    return {};
  }
}

export {
  cn,
  getToken,
  setTokenAndRedirect,
  removeTokenAndRedirect,
  createUppy,
  uploadImageAndDoGqlMutation,
  imageFieldOnChange,
  capitalizeFirstLetter,
  checkDuplicate,
  convertPoundToKg,
  convertKgToPound,
  getNumberFieldUnitFormatOptions,
};

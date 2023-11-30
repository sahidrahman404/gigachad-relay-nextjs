import { z } from "zod";

const ID_LENGTH = 29;
const MusclesGroupID = z
  .string()
  .length(ID_LENGTH, { message: "Muscles group must be selected" });
const ExerciseTypeID = z
  .string()
  .length(ID_LENGTH, { message: "Exercise type must be selected" });

const MAX_FILE_SIZE = 30000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const image = z
  .instanceof(File)
  .refine((f) => f.size <= MAX_FILE_SIZE, `Max file size is 30MB.`)
  .refine(
    (f) => ACCEPTED_IMAGE_TYPES.includes(f.type),
    "Only .jpg, .jpeg, .png and .webp formats are accepted.",
  );

export { image, MusclesGroupID, ExerciseTypeID };

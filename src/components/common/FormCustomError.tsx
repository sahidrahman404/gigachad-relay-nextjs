import { UseFormReturn, FieldValues, Path } from "react-hook-form";

type FormCustomErrorPorps<T extends FieldValues> = {
  form: UseFormReturn<T, any, undefined>;
  name: Path<T>;
};

function FormCustomError<T extends FieldValues>({
  form,
  name,
}: FormCustomErrorPorps<T>) {
  const { error } = form.getFieldState(name, form.formState);
  const body = error ? String(error?.message) : null;
  return (
    error?.message && (
      <p className="text-[0.8rem] font-medium text-destructive">{body}</p>
    )
  );
}

export { FormCustomError };

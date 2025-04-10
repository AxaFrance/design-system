import "@axa-fr/design-system-slash-css/dist/Form/File/File.scss";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { type ConsumerFieldProps, Field } from "../core";
import { CustomFile, File } from "./File";
import { FileTable } from "./FileTable";

type FileProps = ComponentPropsWithoutRef<typeof File>;
type FileTableProps = ComponentPropsWithoutRef<typeof FileTable>;

type Props = ConsumerFieldProps &
  FileProps &
  Pick<FileTableProps, "values" | "errors"> & {
    fileLabel?: string;
    helpMessage?: ReactNode;
  };
const FileInput = ({
  values = [],
  name = "",
  onChange,
  children,
  label,
  errors,
  fileLabel,
  ...otherFileProps
}: Props) => {
  const onDeleteClick = (selectedId: string, selectInputId: string) => {
    const newValues = values.filter(
      (element: CustomFile) => element.id !== selectedId,
    );
    onChange({
      values: newValues,
      name,
      id: selectInputId,
      fileAction: "delete",
    });
  };
  return (
    <Field
      label={label}
      labelPosition="top"
      {...otherFileProps}
      renderInput={({ classModifier, id, ariaInvalid, errorId }) => (
        <>
          <File
            id={id}
            name={name}
            onChange={onChange}
            classModifier={classModifier}
            label={fileLabel}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            {...otherFileProps}
          />
          {children}
          <FileTable
            errors={errors}
            values={values}
            onClick={(selectedId) => onDeleteClick(selectedId, id)}
            classModifier={classModifier}
          />
        </>
      )}
    />
  );
};

export { FileInput };

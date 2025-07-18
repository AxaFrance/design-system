import "@axa-fr/design-system-slash-css/dist/Form/File/File.scss";
import { ComponentPropsWithoutRef, ReactNode, useId } from "react";

import { type ConsumerFieldProps, Field } from "../core";
import { CustomFile, File } from "./File";
import { FileTable } from "./FileTable";

type FileProps = ComponentPropsWithoutRef<typeof File>;
type FileTableProps = ComponentPropsWithoutRef<typeof FileTable>;

type Props = Omit<
  ConsumerFieldProps &
    FileProps &
    Pick<FileTableProps, "values" | "errors"> & {
      fileLabel?: string;
      helpMessage?: ReactNode;
    },
  "children"
>;
const FileInput = ({
  values = [],
  id,
  name = "",
  onChange,
  rightElement,
  label,
  errors,
  fileLabel,
  classModifier,
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
  const generatedId = useId();
  const actualId = id ?? generatedId;
  return (
    <Field
      label={label}
      labelPosition="top"
      id={actualId}
      classNameSuffix="file"
      {...otherFileProps}
      renderInput={({
        classModifier: inputClassModifiers,
        id: inputId,
        ariaInvalid,
        errorId,
        ...inputProps
      }) => (
        <>
          <File
            id={inputId}
            name={name}
            onChange={onChange}
            classModifier={inputClassModifiers}
            label={fileLabel}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            {...inputProps}
          />
          {rightElement}
        </>
      )}
      appendChildren={
        <FileTable
          errors={errors}
          values={values}
          onClick={(selectedId) => onDeleteClick(selectedId, actualId)}
          classModifier={classModifier}
        />
      }
    />
  );
};

export { FileInput };

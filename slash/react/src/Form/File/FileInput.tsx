import { ComponentPropsWithoutRef, ReactNode, useId } from "react";
import { Field, FieldInput, HelpMessage, useInputClassModifier } from "../core";
import { FileTable } from "./FileTable";
import { CustomFile, File } from "./File";
import "@axa-fr/design-system-slash-css/dist/Form/File/File.scss";

type FieldProps = ComponentPropsWithoutRef<typeof Field>;
type FileProps = ComponentPropsWithoutRef<typeof File>;
type FileTableProps = ComponentPropsWithoutRef<typeof FileTable>;

type Props = FieldProps &
  FileProps &
  Pick<FileTableProps, "values" | "errors"> & {
    fileLabel?: string;
    helpMessage?: ReactNode;
  };
const FileInput = ({
  values = [],
  name = "",
  onChange,
  classModifier = "",
  message,
  children,
  helpMessage,
  id = "",
  forceDisplayMessage,
  messageType,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  isVisible,
  className,
  errors,
  fileLabel,
  disabled = false,
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
    });
  };
  const rowModifier = `${classModifier} label-top`;
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    Boolean(children),
  );
  return (
    <Field
      label={label}
      id={inputId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}
    >
      <FieldInput
        className="af-form__file"
        classModifier={inputFieldClassModifier}
      >
        <File
          id={inputId}
          name={name}
          onChange={onChange}
          disabled={disabled}
          classModifier={inputClassModifier}
          label={fileLabel}
          required={classModifier?.includes("required")}
          {...otherFileProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
      <FileTable
        errors={errors}
        values={values}
        onClick={(selectedId) => onDeleteClick(selectedId, inputId)}
        classModifier={classModifier}
      />
    </Field>
  );
};

export { FileInput };

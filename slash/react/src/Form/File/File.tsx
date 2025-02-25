import {
  DropzoneInputProps,
  DropzoneOptions,
  FileRejection,
  useDropzone,
} from "react-dropzone";
import { useId } from "react";
import { getComponentClassName } from "../../utilities";
import { Button } from "../../Button/Button";
import { FileActions } from "./constants";

type Dropzone = DropzoneInputProps & DropzoneOptions;
type Props = Omit<Dropzone, "onDrop" | "onChange"> & {
  classModifier?: string;
  label?: string;
  icon?: string;
  onChange: (data: onChangeProps) => void;
};

export type FilePreview = File & { preview: string };

export type CustomFile<T = FilePreview> = {
  id: string;
  file: T;
};
type onChangeProps = {
  id?: string;
  name?: string;
  fileAction?: FileActions;
  values: CustomFile[];
  errors?: CustomFile<FileRejection>[];
};

const File = ({
  className,
  classModifier,
  id,
  name,
  disabled,
  onChange,
  multiple = true,
  maxSize = 20000000,
  minSize = 0,
  accept,
  readOnly,
  placeholder = "Glissez/déposez vos fichiers",
  label = "Parcourir",
  icon = "open",
  ...otherProps
}: Props) => {
  const valueId = useId();
  const errorsId = useId();

  const handleOnChange = <T extends File>(
    acceptedFiles: T[],
    rejectedFiles: FileRejection[],
  ) => {
    if (!onChange) return;

    const values = acceptedFiles.map((file) => ({
      id: valueId,
      file: {
        ...file,
        lastModified: file.lastModified,
        name: file.name,
        type: file.type,
        size: file.size,
        stream: file.stream,
        arrayBuffer: file.arrayBuffer,
        slice: file.slice,
        text: file.text,
        preview: URL.createObjectURL(file),
      },
    }));
    const errors = rejectedFiles.map((error) => ({
      id: errorsId,
      file: {
        errors: error.errors,
        file: {
          ...error.file,
          lastModified: error.file.lastModified,
          name: error.file.name,
          type: error.file.type,
          size: error.file.size,
        } as File,
      },
    }));

    const onChangeProps: onChangeProps = {
      values,
      errors,
      name,
      fileAction: "add",
      id,
    };

    onChange(onChangeProps);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: handleOnChange,
    minSize,
    maxSize,
    multiple,
    accept,
    disabled,
  });

  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-form__file-input",
  );

  return (
    <div className={componentClassName}>
      <div {...getRootProps({ className: "drop-box" })}>
        <input {...getInputProps({ id, name, readOnly, ...otherProps })} />
        <div>{placeholder}</div>
      </div>
      <Button
        type="button"
        className="af-btn"
        classModifier="file hasIconLeft"
        onClick={open}
        disabled={disabled}
      >
        <i className={`glyphicon glyphicon-${icon}`} /> {label}
      </Button>
    </div>
  );
};

export { File };

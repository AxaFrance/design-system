import { ComponentPropsWithoutRef } from "react";
import { FileRejection } from "react-dropzone";
import { FileLine } from "./FileLine";
import { CustomFile } from "./File";
import { FileErrors } from "./FileErrors";
import { getComponentClassName } from "../../utilities";

type FileLineProps = ComponentPropsWithoutRef<typeof FileLine>;
type Props = Pick<FileLineProps, "onClick"> & {
  errors?: FileRejection[];
  values?: CustomFile[];
  className?: string;
  classModifier?: string;
  disabled?: boolean;
};
const FileTable = ({
  errors,
  values,
  className,
  classModifier,
  disabled,
  onClick,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "custom-table-file af-file-table",
  );
  return (
    <div className={componentClassName}>
      {errors && errors.length > 0 && <FileErrors errors={errors} />}
      {values && values.length > 0 && (
        <ul className="af-form__file-list">
          {values.map(({ file, id }) => (
            <FileLine
              disabled={disabled}
              file={file}
              onClick={onClick}
              id={id}
              key={id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export { FileTable };

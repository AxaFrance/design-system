import type { ComponentPropsWithoutRef } from "react";
import type { FileRejection } from "react-dropzone";
import { getClassName } from "../../utilities";
import type { CustomFile } from "./File";
import { FileErrors } from "./FileErrors";
import { FileLine } from "./FileLine";

type FileLineProps = ComponentPropsWithoutRef<typeof FileLine>;
type Props = Pick<FileLineProps, "onClick"> & {
  errors?: FileRejection[];
  values?: CustomFile[];
  className?: string;
  disabled?: boolean;
};
const FileTable = ({ errors, values, className, disabled, onClick }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-file-table",
    className: `custom-table-file ${className ?? ""}`,
  });
  return (
    <div className={componentClassName}>
      {errors && errors.length > 0 ? <FileErrors errors={errors} /> : null}
      {values && values.length > 0 ? (
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
      ) : null}
    </div>
  );
};

export { FileTable };

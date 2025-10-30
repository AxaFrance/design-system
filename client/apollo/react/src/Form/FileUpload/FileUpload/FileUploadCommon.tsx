import {
  Children,
  type ComponentType,
  forwardRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { generateId } from "../../../utilities/generateId";
import { getClassName } from "../../../utilities/getClassName";
import type { InputFileProps } from "../InputFile/InputFileCommon";
import type { ItemFileProps } from "../ItemFile/ItemFileCommon";

export type FileUploadProps = Omit<InputFileProps, "children"> & {
  /**
   * List of ItemFile components representing uploaded files.
   */
  children?: ReactElement<ItemFileProps> | ReactElement<ItemFileProps>[];
  /**
   * Custom label for the uploaded files list. Defaults to "Vos fichiers importés :".
   */
  fileListLabel?: ReactNode;
};

type FileUploadCommonProps = FileUploadProps & {
  InputFileComponent: ComponentType<InputFileProps>;
};

export const FileUploadCommon = forwardRef<
  HTMLInputElement,
  FileUploadCommonProps
>(
  (
    {
      InputFileComponent,
      className,
      children,
      fileListLabel = "Vos fichiers importés :",
      ...props
    },
    ref,
  ) => {
    return (
      <InputFileComponent
        {...props}
        className={getClassName({
          baseClassName: "af-file-upload",
          className,
        })}
        ref={ref}
      >
        {children ? (
          <>
            <p className="af-file-list__title">{fileListLabel}</p>
            <ul className="af-file-list">
              {Children.map(children, (child) => (
                <li
                  className="af-file-list__item"
                  key={generateId(child as object)}
                >
                  {child}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </InputFileComponent>
    );
  },
);

FileUploadCommon.displayName = "FileUploadCommon";

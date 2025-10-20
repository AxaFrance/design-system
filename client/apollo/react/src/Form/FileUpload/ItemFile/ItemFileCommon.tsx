import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type MouseEvent,
} from "react";
import type { ClickIconProps } from "../../../ClickIcon/ClickIconCommon";
import type { IconProps } from "../../../Icon/IconCommon";
import type { SpinnerProps } from "../../../Spinner/SpinnerCommon";
import type { ItemMessageProps } from "../../ItemMessage/ItemMessageCommon";

export type ItemFileProps = {
  /**
   * The JavaScript File object representing the uploaded file.
   * (required)
   */
  file: File;
  /**
   * When true, a spinner is shown instead of the validation icon and actions
   * may be disabled.
   * @default false
   */
  isLoading?: boolean;
  /**
   * An optional error message shown below the file. If present, the item is
   * rendered in an error state.
   */
  errorMessage?: string;
  /**
   * Callback invoked when the remove action is triggered. Receives the file
   * and the click event.
   */
  onRemove?: (file: File, event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Callback invoked when the preview action is triggered. Receives the file
   * and the click event.
   */
  onPreview?: (file: File, event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Optional props forwarded to the preview icon button (except `src` and
   * `onClick`).
   * @default {}
   */
  previewProps?: Partial<Omit<ClickIconProps, "src" | "onClick">>;
  /**
   * Optional props forwarded to the remove icon button (except `src` and
   * `onClick`).
   * @default {}
   */
  removeProps?: Partial<Omit<ClickIconProps, "src" | "onClick">>;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export type ItemFileCommonProps = ItemFileProps & {
  ItemMessageComponent: ComponentType<ItemMessageProps>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemSpinnerComponent: ComponentType<SpinnerProps>;
  ClickIconComponent: ComponentType<ClickIconProps>;
  removeIcon: string;
  previewIcon: string;
};

const BASE_UNIT = 1000;
const BYTE_UNITS = ["Ko", "Mo", "Go"];
const getReadableFileSizeString = (fileSizeInBytes: number) => {
  let i = -1;
  let fileSizeInBytesCopy = fileSizeInBytes;
  do {
    fileSizeInBytesCopy /= BASE_UNIT;
    i += 1;
  } while (fileSizeInBytesCopy > BASE_UNIT);

  return `${Math.max(fileSizeInBytesCopy, 0.1).toFixed(1)} ${BYTE_UNITS[i]}`;
};

export const ItemFileCommon = ({
  file,
  isLoading,
  errorMessage,
  className,
  onRemove = () => {},
  onPreview = () => {},
  previewProps = {},
  removeProps = {},
  removeIcon,
  previewIcon,
  ItemSpinnerComponent,
  ItemIconComponent,
  ItemMessageComponent,
  ClickIconComponent,
  ...props
}: ItemFileCommonProps) => {
  const hasError = Boolean(errorMessage);

  const handleClick =
    (callback: (file: File, event: MouseEvent<HTMLButtonElement>) => void) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      callback(file, e);
    };

  return (
    <section
      className={["af-item-file", hasError && "af-item-file--error", className]
        .filter(Boolean)
        .join(" ")}
      aria-busy={isLoading ? true : undefined}
      aria-live="polite"
      {...props}
    >
      <div className="af-item-file__body">
        {isLoading && !hasError ? (
          <ItemSpinnerComponent size={24} />
        ) : (
          <ItemIconComponent
            size="S"
            src={hasError ? errorIcon : validationIcon}
          />
        )}
        <p className="af-item-file__file-name">{file.name}</p>
        <p className="af-item-file__file-size">
          {getReadableFileSizeString(file.size)}
        </p>
        <div className="af-item-file__actions">
          {!isLoading && !hasError && (
            <ClickIconComponent
              src={previewIcon}
              onClick={handleClick(onPreview)}
              aria-label={`Previsualiser le fichier ${file.name}`}
              {...previewProps}
            />
          )}
          <ClickIconComponent
            src={removeIcon}
            onClick={handleClick(onRemove)}
            aria-label={`Suppression du fichier ${file.name}`}
            {...removeProps}
          />
        </div>
      </div>
      <ItemMessageComponent message={errorMessage} />
    </section>
  );
};

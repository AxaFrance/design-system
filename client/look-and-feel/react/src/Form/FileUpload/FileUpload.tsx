import { ComponentPropsWithRef, useId } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/FileUpload/FileUpload.scss";
import visibility from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import close from "@material-symbols/svg-400/outlined/close-fill.svg";
import check from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import errorO from "@material-symbols/svg-400/outlined/error.svg";
import plus from "@material-symbols/svg-400/outlined/add_circle-fill.svg";
import classNames from "classnames";
import { Svg } from "../../Svg";
import { Loader } from "../../Loader";
import { Button } from "../..";
import { Variants } from "../../Button/Button";
import { InputError } from "../InputError";

function getReadableFileSizeString(fileSizeInBytes: number) {
  let i = -1;
  let fileSizeInBytesCopy = fileSizeInBytes;
  const byteUnits = [" Ko", " Mo", " Go"];
  do {
    fileSizeInBytesCopy /= 1024;
    i += 1;
  } while (fileSizeInBytesCopy > 1024);

  return Math.max(fileSizeInBytesCopy, 0.1).toFixed(1) + byteUnits[i];
}

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  id: string;
  label?: string;
  buttonLabel?: string;
  dropzoneDescription?: string;
  instructions?: string;
  required?: boolean;
  globalError: string;
  errors: Array<{
    id?: string | undefined;
    message: string;
  }>;
  files: Array<{
    id: string;
    name: string;
    size: number;
    isLoading: boolean;
  }>;
  accept: string;
  isMobile?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
};

const FileUpload = ({
  id,
  label,
  buttonLabel,
  instructions,
  dropzoneDescription,
  required,
  files,
  errors,
  globalError,
  isMobile,
  onView,
  onDelete,
  ...otherProps
}: Props) => {
  const idError = useId();
  const getIcon = (isInError: boolean, isLoading: boolean) => {
    if (isInError) {
      return (
        <Svg src={error} className="af-form__file-title-container-icon-error" />
      );
    }
    if (isLoading) {
      return <Loader size={18} border={2} />;
    }
    return (
      <Svg src={check} className="af-form__file-title-container-icon-success" />
    );
  };

  return (
    <div>
      <label className="af-form__group--label" htmlFor={id}>
        {label} {required ? "*" : ""}
      </label>
      <div
        className={classNames(
          "af-form__file-input",
          globalError && "af-form__file-input--error",
          (isMobile || !dropzoneDescription) && "is-mobile",
        )}
      >
        <input
          type="file"
          name="file-input"
          id={id}
          aria-errormessage={idError}
          aria-invalid={Boolean(globalError)}
          {...otherProps}
        />
        {dropzoneDescription && (
          <div className="af-form__file-input-dropdown-text">
            <p>{dropzoneDescription}</p>
            <p>ou</p>
          </div>
        )}
        <Button
          variant={Variants.tertiary}
          onClick={() => document.getElementById(id)?.click()}
          iconLeft={<Svg src={plus} className="af-form__file-input-icon" />}
        >
          {buttonLabel}
        </Button>
      </div>
      {globalError && <InputError id={idError} message={globalError} />}
      <small className="af-form__file-input-help">{instructions}</small>
      <div className="custom-table-file af-file-table">
        <ul className="af-form__file-list">
          {files.map(({ id: fileId, name, size, isLoading }) => {
            const effectiveSize = getReadableFileSizeString(size);

            const isInError = errors.some(
              (fileError) => fileError.id === fileId,
            );

            const errorMessage = errors.find(
              (fileError) => fileError.id === fileId,
            )?.message;

            return (
              <li key={fileId} className="af-form__file-line">
                <div
                  className={`af-form__file-line-container ${isInError ? "af-form__file-line-container--error" : ""}`}
                >
                  <div className="af-form__file-title">
                    {getIcon(isInError, isLoading)}
                    <div>
                      <span className="af-form__file-name">{name}</span>
                      <span className="af-form__file-size">
                        {effectiveSize}
                      </span>
                    </div>
                  </div>
                  <div className="af-form__file-actions">
                    {onView && (
                      <Svg
                        tabIndex={0}
                        role="button"
                        aria-label="Visualiser"
                        onClick={() => onView(fileId)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            onView(fileId);
                          }
                        }}
                        className="af-form__file-actions-icon"
                        src={visibility}
                      />
                    )}
                    {onDelete && (
                      <Svg
                        tabIndex={0}
                        role="button"
                        aria-label="Supprimer"
                        onClick={() => onDelete(fileId)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            onDelete(fileId);
                          }
                        }}
                        className="af-form__file-actions-icon"
                        src={close}
                      />
                    )}
                  </div>
                </div>
                {isInError && (
                  <small className="af-form__file-error">
                    <Svg
                      src={errorO}
                      className="af-form__file-error-icon"
                      width={18}
                    />
                    {errorMessage}
                  </small>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

FileUpload.displayName = "FileUpload";

export { FileUpload };

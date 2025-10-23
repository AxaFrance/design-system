import {
  Button,
  ItemMessage,
  Spinner,
  Svg,
} from "@axa-fr/design-system-apollo-react/lf";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/FileUpload/FileUpload.scss";
import plus from "@material-symbols/svg-400/outlined/add_circle-fill.svg";
import check from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import close from "@material-symbols/svg-400/outlined/close-fill.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import visibility from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import classNames from "classnames";
import { ComponentPropsWithRef, useId } from "react";

function getReadableFileSizeString(fileSizeInBytes: number) {
  let i = -1;
  let fileSizeInBytesCopy = fileSizeInBytes;
  const byteUnits = [" Ko", " Mo", " Go"];
  do {
    fileSizeInBytesCopy /= 1000;
    i += 1;
  } while (fileSizeInBytesCopy > 1000);

  return Math.max(fileSizeInBytesCopy, 0.1).toFixed(1) + byteUnits[i];
}

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  id: string;
  label?: string;
  buttonLabel?: string;
  dropzoneDescription?: string;
  instructions?: string;
  filesListLabel?: string;
  required?: boolean;
  globalError?: string;
  errors?: Array<{
    id?: string | undefined;
    message: string;
  }>;
  files?: Array<{
    id: string;
    name: string;
    size: number;
    isLoading: boolean;
  }>;
  accept?: string;
  isMobile?: boolean;
  withPadding?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
};

/**
 * @deprecated Use `FileUpload` from apollo/lf package instead.
 */
const FileUpload = ({
  id,
  label,
  buttonLabel,
  instructions,
  dropzoneDescription,
  filesListLabel,
  required,
  files,
  errors,
  globalError,
  isMobile,
  withPadding = false,
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
      return <Spinner size={24} />;
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
      <div className="af-form__file-input-container">
        <div
          className={classNames(
            "af-form__file-input",
            globalError && "af-form__file-input--error",
            (isMobile || (!withPadding && !dropzoneDescription)) && "is-mobile",
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
          {dropzoneDescription ? (
            <div className="af-form__file-input-dropdown-text">
              <p>{dropzoneDescription}</p>
              <p>ou</p>
            </div>
          ) : null}
          <Button
            variant="tertiary"
            onClick={() => document.getElementById(id)?.click()}
            iconLeft={<Svg src={plus} className="af-form__file-input-icon" />}
          >
            {buttonLabel}
          </Button>
        </div>
        {globalError ? (
          <ItemMessage id={idError} message={globalError} />
        ) : null}
        {instructions ? (
          <small className="af-form__file-input-help">{instructions}</small>
        ) : null}
      </div>
      {files && files.length !== 0 ? (
        <div className="custom-table-file af-file-table">
          {filesListLabel ? (
            <div className="af-form__group--label af-form__files-list-label">
              {filesListLabel}
            </div>
          ) : null}
          <ul className="af-form__file-list">
            {files.map(({ id: fileId, name, size, isLoading }) => {
              const effectiveSize = getReadableFileSizeString(size);

              const isInError = errors
                ? errors.some((fileError) => fileError.id === fileId)
                : false;

              const errorMessage = errors?.find(
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
                      {onView ? (
                        <Button
                          aria-label="Visualiser"
                          onClick={() => onView(fileId)}
                          variant="ghost"
                          iconLeft={<Svg src={visibility} />}
                        />
                      ) : null}
                      {onDelete ? (
                        <Button
                          aria-label="Supprimer"
                          onClick={() => onDelete(fileId)}
                          variant="ghost"
                          iconLeft={<Svg src={close} />}
                        />
                      ) : null}
                    </div>
                  </div>
                  {isInError ? <ItemMessage message={errorMessage} /> : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

FileUpload.displayName = "FileUpload";

export { FileUpload };

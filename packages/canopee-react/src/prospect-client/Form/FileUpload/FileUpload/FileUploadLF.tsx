import { forwardRef } from "react";
import { InputFile } from "../InputFile/InputFileLF";
import { FileUploadCommon, type FileUploadProps } from "./FileUploadCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/FileUpload/FileUpload/FileUploadLF.css";

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (props, ref) => (
    <FileUploadCommon {...props} ref={ref} InputFileComponent={InputFile} />
  ),
);

FileUpload.displayName = "FileUpload";

import { forwardRef } from "react";
import { InputFile } from "../InputFile/InputFileLF";
import { FileUploadCommon, type FileUploadProps } from "./FileUploadCommon";

import "@axa-fr/canopee-css/client/Form/FileUpload/FileUpload/FileUploadAll.css";

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (props, ref) => (
    <FileUploadCommon {...props} ref={ref} InputFileComponent={InputFile} />
  ),
);

FileUpload.displayName = "FileUpload";

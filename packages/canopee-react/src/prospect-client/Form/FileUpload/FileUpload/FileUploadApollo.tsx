import { forwardRef } from "react";
import { InputFile } from "../InputFile/InputFileApollo";
import { FileUploadCommon, type FileUploadProps } from "./FileUploadCommon";

import "@axa-fr/canopee-css/prospect/Form/FileUpload/FileUpload/FileUploadAll.css";

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (props, ref) => (
    <FileUploadCommon {...props} ref={ref} InputFileComponent={InputFile} />
  ),
);

FileUpload.displayName = "FileUpload";

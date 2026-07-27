import { InputFile } from "../InputFile/InputFileLF";
import { FileUploadCommon, type FileUploadProps } from "./FileUploadCommon";

import "@axa-fr/canopee-css/client/Form/FileUpload/FileUpload/FileUploadAll.css";

export const FileUpload = ({ ...props }: FileUploadProps) => (
  <FileUploadCommon {...props} InputFileComponent={InputFile} />
);

FileUpload.displayName = "FileUpload";

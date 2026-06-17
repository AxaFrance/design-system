import { InputFile } from "../InputFile/InputFileApollo";
import { FileUploadCommon, type FileUploadProps } from "./FileUploadCommon";

import "@axa-fr/canopee-css/prospect/Form/FileUpload/FileUpload/FileUploadAll.css";

export const FileUpload = ({ ...props }: FileUploadProps) => (
  <FileUploadCommon {...props} InputFileComponent={InputFile} />
);

FileUpload.displayName = "FileUpload";

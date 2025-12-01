import { forwardRef } from "react";
import { ItemLabel } from "../../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { InputFileCommon, type InputFileProps } from "./InputFileCommon";

import "@axa-fr/canopee-css/client/Form/FileUpload/InputFile/InputFileLF.css";

const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => (
  <InputFileCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

InputFile.displayName = "InputFile";

export { InputFile };

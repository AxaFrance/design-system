import { forwardRef } from "react";
import { ItemLabel } from "../../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { InputFileCommon, type InputFileProps } from "./InputFileCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/FileUpload/InputFile/InputFileApollo.css";

const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  return (
    <InputFileCommon
      {...props}
      ref={ref}
      ItemLabelComponent={ItemLabel}
      ItemMessageComponent={ItemMessage}
    />
  );
});

InputFile.displayName = "InputFile";

export { InputFile };

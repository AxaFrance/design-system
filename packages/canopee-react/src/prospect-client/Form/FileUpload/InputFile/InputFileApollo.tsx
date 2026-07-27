import { ItemLabel } from "../../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { InputFileCommon, type InputFileProps } from "./InputFileCommon";

import "@axa-fr/canopee-css/prospect/Form/FileUpload/InputFile/InputFileApollo.css";

const InputFile = ({ ...props }: InputFileProps) => {
  return (
    <InputFileCommon
      {...props}
      ItemLabelComponent={ItemLabel}
      ItemMessageComponent={ItemMessage}
    />
  );
};

InputFile.displayName = "InputFile";

export { InputFile };

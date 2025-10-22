/* eslint-disable react/no-multi-comp */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  ButtonCommon,
  type ButtonProps,
} from "../../../../Button/ButtonCommon";
import { ClickIcon } from "../../../../ClickIcon/ClickIconCommon";
import { Icon } from "../../../../Icon/IconCommon";
import { Spinner } from "../../../../Spinner/SpinnerCommon";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../../../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../../../ItemMessage/ItemMessageCommon";
import {
  InputFileCommon,
  type InputFileProps,
} from "../../InputFile/InputFileCommon";
import {
  ItemFileCommon,
  type ItemFileProps,
} from "../../ItemFile/ItemFileCommon";
import { FileUploadCommon, type FileUploadProps } from "../FileUploadCommon";

const ButtonMock = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);

const ItemLabel = (props: ItemLabelProps) => (
  <ItemLabelCommon {...props} ButtonComponent={ButtonMock} />
);

const InputFile = (props: InputFileProps) => (
  <InputFileCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);

const FileUpload = (props: FileUploadProps) => (
  <FileUploadCommon {...props} InputFileComponent={InputFile} />
);

const ItemFile = (props: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    ClickIconComponent={ClickIcon}
    removeIcon="remove-icon.svg"
    previewIcon="preview-icon.svg"
    {...props}
  />
);

describe("FileUpload", () => {
  it("should not render file list or label when no files are uploaded", () => {
    render(
      <FileUpload label="Upload document" fileListLabel="Files uploaded" />,
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(screen.queryByText("Files uploaded")).not.toBeInTheDocument();
  });

  it("should render file list label when files are uploaded", () => {
    render(
      <FileUpload label="Upload document" fileListLabel="Files uploaded">
        <ItemFile file={new File(["content"], "file1.txt")} />
      </FileUpload>,
    );

    expect(screen.getByText("Files uploaded")).toBeInTheDocument();
  });

  it("should render correct number of list items for uploaded files", () => {
    render(
      <FileUpload label="Upload document" fileListLabel="Files uploaded">
        <ItemFile file={new File(["content"], "file1.txt")} />
        <ItemFile file={new File(["content"], "file2.txt")} />
      </FileUpload>,
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});

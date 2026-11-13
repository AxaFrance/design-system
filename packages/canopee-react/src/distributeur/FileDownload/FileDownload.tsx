import classNames from "classnames";
import type { ComponentProps } from "react";
import "@axa-fr/canopee-css/distributeur/FileDownload/FileDownload.css";
import Eye from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import Download from "@material-symbols/svg-400/outlined/download_2-fill.svg";
import Security from "@material-symbols/svg-400/outlined/security-fill.svg";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { Svg } from "../Svg";
import { Title } from "../Title/Title";

export type FileDownloadProps = {
  /** Additional CSS class name applied to the component. */
  className?: string;
  /** Label displayed on the download button. Default : Télécharger */
  downloadButtonLabel?: string;
  /** Disables the download button. */
  downloadDisabled?: boolean;
  /** Label displayed on the consult button. Default : Consulter */
  consultButtonLabel?: string;
  /** Disables the consult button. */
  consultDisabled?: boolean;
  /** Source of the file icon displayed next to the label. Default : Security icon */
  iconSrc?: string;
  /** Main label describing the downloadable file. */
  label: string;
  /** Optional file name displayed below the label. */
  fileName?: string;
  /** Optional status displayed next to the file information. */
  status?: string;
  /** Callback called when the download button is clicked. The button is visible only if the onDownload prop is provided. */
  onDownload?: () => Promise<void>;
  /** Callback called when the consult button is clicked. The button is visible only if the onConsult prop is provided. */
  onConsult?: () => Promise<void>;
} & ComponentProps<"div">;

export const FileDownload = ({
  className,
  consultButtonLabel = "Consulter",
  consultDisabled,
  downloadButtonLabel = "Télécharger",
  downloadDisabled,
  iconSrc = Security,
  fileName,
  label,
  status,
  onDownload,
  onConsult,
  ...props
}: FileDownloadProps) => (
  <div className={classNames("af-file-download", className)} {...props}>
    <div className="af-file-download__content">
      <span className="af-file-download__icon">
        <Svg src={iconSrc} />
      </span>
      <div>
        <Title heading="h3" withDivider={false}>
          {label}
        </Title>
        {fileName ? (
          <span className="af-file-download__subtitle">{fileName}</span>
        ) : null}
      </div>
      {status ? <Tag className="af-file-download__status">{status}</Tag> : null}
    </div>
    <div className="af-file-download__actions">
      {onConsult ? (
        <Button
          variant="secondary"
          leftIcon={<Svg src={Eye} />}
          disabled={consultDisabled}
          onClick={onConsult}
        >
          {consultButtonLabel}
        </Button>
      ) : null}
      {onDownload ? (
        <Button
          variant="secondary"
          leftIcon={<Svg src={Download} />}
          disabled={downloadDisabled}
          onClick={onDownload}
        >
          {downloadButtonLabel}
        </Button>
      ) : null}
    </div>
  </div>
);

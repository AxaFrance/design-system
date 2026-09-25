import { getClassName } from "../../utilities";
import type { CustomFile } from "./File";

type Props = CustomFile & {
  onClick: (id: string) => void;
  className?: string;
  disabled?: boolean;
};
const FileLine = ({ className, file, disabled, id, onClick }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-form__file-line",
    className,
  });
  return (
    <li className={componentClassName}>
      {file && file.type && file.type.startsWith("image") ? (
        <i className="glyphicon glyphicon-picture" />
      ) : (
        <i className="glyphicon glyphicon-file" />
      )}
      <span>{file.name}</span>
      <span>{file.size}</span>

      <button
        disabled={disabled}
        type="button"
        className="af-link af-link--delete-file"
        onClick={() => onClick(id)}
      >
        <span className="af-link__text">Supprimer</span>
      </button>
    </li>
  );
};

export { FileLine };

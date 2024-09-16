import { getComponentClassName } from "../../utilities";
import { CustomFile } from "./File";

type Props = CustomFile & {
  onClick: (id: string) => void;
  className?: string;
  classModifier?: string;
  disabled?: boolean;
};
const FileLine = ({
  className,
  classModifier,
  file,
  disabled,
  id,
  onClick,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-form__file-line",
  );
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

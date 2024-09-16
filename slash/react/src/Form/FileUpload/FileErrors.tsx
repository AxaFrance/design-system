import { FileRejection } from "react-dropzone";

type Props = {
  errors?: FileRejection[];
};
const FileErrors = ({ errors }: Props) => (
  <div className="af-form__file-errors">
    <span>Le chargement de certains fichiers a échoué : </span>
    <ul className="af-form__file-errors-list">
      {errors &&
        errors.map((err) => (
          <li key={err.file.name}>
            {err.file.name} ({err.file.size})
          </li>
        ))}
    </ul>
  </div>
);

export { FileErrors };

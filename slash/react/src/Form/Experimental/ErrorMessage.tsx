import {
  ItemMessageHelper,
  type ItemMessageHelperProps,
} from "./ItemMessageHelper";

type ErrorMessageProps = Omit<ItemMessageHelperProps, "error">;

export const ErrorMessage = ({ ...props }: ErrorMessageProps) => {
  return <ItemMessageHelper error {...props} />;
};

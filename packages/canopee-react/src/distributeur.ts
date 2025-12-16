import "@axa-fr/canopee-css/distributeur/common/grid.css";
import "@axa-fr/canopee-css/distributeur/common/icons.css";
import "@axa-fr/canopee-css/distributeur/common/reboot.css";
import "@axa-fr/canopee-css/distributeur/common/tokens.css";
import "@axa-fr/canopee-css/distributeur/Form/core/FormCore.css";

import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";

import { Message } from "./distributeur/Messages/Message";
import { Tag } from "./distributeur/Tag/Tag";

export { Action } from "./distributeur/Action/Action";
export { Button } from "./distributeur/Button/Button";
export type { ButtonVariant } from "./distributeur/Button/Button";
export { Card } from "./distributeur/Card/Card";
export { Divider } from "./distributeur/Divider/Divider";
export {
  Checkbox,
  CheckboxInput,
  CheckboxItem,
  CheckboxModes,
} from "./distributeur/Form/Checkbox";
export { Choice, ChoiceInput } from "./distributeur/Form/Choice";
export {
  LegacyField as Field,
  FieldError,
  FieldForm,
  FieldInput,
  FormClassManager,
  HelpMessage,
  InputList,
  MessageTypes,
} from "./distributeur/Form/core";
export { Date, DateInput } from "./distributeur/Form/Date";
export {
  File,
  FileInput,
  FileTable,
  type FilePreview,
} from "./distributeur/Form/File";
export { MultiSelect, MultiSelectInput } from "./distributeur/Form/MultiSelect";
export { NestedQuestion } from "./distributeur/Form/NestedQuestion/NestedQuestion";
export { Number, NumberInput } from "./distributeur/Form/Number";
export { Pass, PassInput } from "./distributeur/Form/Pass";
export {
  Radio,
  RadioInput,
  RadioItem,
  RadioModes,
} from "./distributeur/Form/Radio";
export { Select, SelectBase, SelectInput } from "./distributeur/Form/Select";
export { Slider, SliderInput } from "./distributeur/Form/Slider";
export { Text, TextInput } from "./distributeur/Form/Text";
export { Textarea, TextareaInput } from "./distributeur/Form/Textarea";
export { Footer } from "./distributeur/Layout/Footer";
export {
  Header,
  HeaderTitle,
  Infos,
  MenuTitleWrapper,
  Name,
  NavBar,
  NavBarBase,
  NavBarItem,
  NavBarItemBase,
  NavBarItemLink,
  ToggleButton,
  User,
  type AnchorNavBarItem,
} from "./distributeur/Layout/Header";
export { MainContainer } from "./distributeur/Layout/MainContainer/MainContainer";
export { Link, type LinkProps } from "./distributeur/Link/Link";
export {
  BooleanModal,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeaderBase,
} from "./distributeur/ModalAgent";
export {
  ArticleRestitution,
  HeaderRestitution,
  Restitution,
  RestitutionList,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  SectionRestitutionTitle,
} from "./distributeur/Restitution";
export { Step, StepBase, Steps, VerticalStep } from "./distributeur/Steps";
export type { VerticalStepMode } from "./distributeur/Steps/types";
export { Summary } from "./distributeur/Summary";
export { Svg } from "./distributeur/Svg";
export { Tabs } from "./distributeur/Tabs/Tabs";
export { Title } from "./distributeur/Title/Title";
export { getComponentClassName } from "./distributeur/utilities";

/** @deprecated Use `Tag` instead. */
const Badge = Tag;

export type { TagVariants } from "./distributeur/Tag/Tag";
export { Badge, Tag };

/**
 * @deprecated `Alert` has been renamed `Message` in order to comply with UX naming of components. Use `Message` instead.
 * @see {@link Message}
 */
const Alert = Message;

export * from "./distributeur/Accordion";
export {
  type MessageProps,
  type MessageVariants,
} from "./distributeur/Messages/Message";
export {
  type MessageBarProps,
  type MessageBarVariants,
} from "./distributeur/MessageBar/MessageBar";
export * from "./distributeur/Popover";
export * from "./distributeur/Table";
export { Alert, Message };

export { HelpButton } from "./distributeur/HelpButton";
export { Loader } from "./distributeur/Loader/Loader";

export { CardData } from "./distributeur/CardData/CardData";
export type { CardDataVariant } from "./distributeur/CardData/CardData";

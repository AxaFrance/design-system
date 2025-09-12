import "@axa-fr/design-system-slash-css/dist/common/grid.css";
import "@axa-fr/design-system-slash-css/dist/common/icons.css";
import "@axa-fr/design-system-slash-css/dist/common/reboot.css";
import "@axa-fr/design-system-slash-css/dist/common/tokens.css";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.css";

import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";

import { Message } from "./Messages/Message";
import { Tag } from "./Tag/Tag";

export { Action } from "./Action/Action";
export { Button } from "./Button/Button";
export type { ButtonVariant } from "./Button/Button";
export { Card } from "./Card/Card";
export { Divider } from "./Divider/Divider";
export {
  Checkbox,
  CheckboxInput,
  CheckboxItem,
  CheckboxModes,
} from "./Form/Checkbox";
export { Choice, ChoiceInput } from "./Form/Choice";
export {
  LegacyField as Field,
  FieldError,
  FieldForm,
  FieldInput,
  FormClassManager,
  HelpMessage,
  InputList,
  MessageTypes,
} from "./Form/core";
export { Date, DateInput } from "./Form/Date";
export { File, FileInput, FileTable, type FilePreview } from "./Form/File";
export { MultiSelect, MultiSelectInput } from "./Form/MultiSelect";
export { NestedQuestion } from "./Form/NestedQuestion/NestedQuestion";
export { Number, NumberInput } from "./Form/Number";
export { Pass, PassInput } from "./Form/Pass";
export { Radio, RadioInput, RadioItem, RadioModes } from "./Form/Radio";
export { Select, SelectBase, SelectInput } from "./Form/Select";
export { Slider, SliderInput } from "./Form/Slider";
export { Text, TextInput } from "./Form/Text";
export { Textarea, TextareaInput } from "./Form/Textarea";
export { Footer } from "./Layout/Footer";
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
} from "./Layout/Header";
export { MainContainer } from "./Layout/MainContainer/MainContainer";
export { Link, type LinkProps } from "./Link/Link";
export {
  BooleanModal,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeaderBase,
} from "./ModalAgent";
export {
  ArticleRestitution,
  HeaderRestitution,
  Restitution,
  RestitutionList,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  SectionRestitutionTitle,
} from "./Restitution";
export { Step, StepBase, Steps, VerticalStep } from "./Steps";
export { Summary } from "./Summary";
export { Svg } from "./Svg";
export { Tabs } from "./Tabs/Tabs";
export { Title } from "./Title/Title";
export { getComponentClassName } from "./utilities";

/** @deprecated Use `Tag` instead. */
const Badge = Tag;

export type { TagVariants } from "./Tag/Tag";
export { Badge, Tag };

/**
 * @deprecated `Alert` has been renamed `Message` in order to comply with UX naming of components. Use `Message` instead.
 * @see {@link Message}
 */
const Alert = Message;

export * from "./Accordion";
export { type MessageProps, type MessageVariants } from "./Messages/Message";
export * from "./Popover";
export * from "./Table";
export { Alert, Message };

export { HelpButton } from "./HelpButton";
export { Loader } from "./Loader/Loader";

export { CardData } from "./CardData/CardData";
export type { CardDataVariant } from "./CardData/CardData";

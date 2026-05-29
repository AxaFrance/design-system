import "@axa-fr/canopee-css/prospect/common/reboot.css";
import "@axa-fr/canopee-css/prospect/common/tokens.css";
import "@axa-fr/canopee-css/prospect/Grid/Grid.css";
import "@fontsource/source-sans-pro";

export {
  Accordion,
  accordionVariants,
  type AccordionVariants,
} from "./prospect-client/Accordion/AccordionApollo";
export {
  AccordionContextual,
  accordionContextualVariants,
  type AccordionContextualVariants,
} from "./prospect-client/AccordionContextual/AccordionContextualApollo";
export { AccordionCore } from "./prospect-client/AccordionCore/AccordionCoreApollo";
export { BasePicture } from "./prospect-client/BasePicture/BasePicture";
export {
  Button,
  buttonVariants,
  type ButtonVariants,
} from "./prospect-client/Button/ButtonApollo";
export { Card, type CardProps } from "./prospect-client/Card/CardApollo";
export {
  CardMessage,
  cardMessageVariants,
  type CardMessageVariants,
} from "./prospect-client/CardMessage/CardMessageApollo";
export { ClickIcon } from "./prospect-client/ClickIcon/ClickIconApollo";
export {
  ContentItemDuoAction,
  type ContentItemDuoActionState,
} from "./prospect-client/ContentItemDuoAction/ContentItemDuoActionApollo";
export { ContentItemMono } from "./prospect-client/ContentItemMono/ContentItemMonoApollo";
export {
  DataAgent,
  type DataAgentProps,
} from "./prospect-client/DataAgent/DataAgentApollo";
export { Divider } from "./prospect-client/Divider/DividerApollo";
export {
  Fieldset,
  type FieldsetProps,
} from "./prospect-client/Fieldset/FieldsetApollo";
export {
  CardCheckbox,
  /** @deprecated Use `CardCheckbox` instead. */
  CardCheckbox as CheckboxCard,
} from "./prospect-client/Form/Checkbox/CardCheckbox/CardCheckboxApollo";
export { CardCheckboxOption } from "./prospect-client/Form/Checkbox/CardCheckboxOption/CardCheckboxOptionApollo";
export { Checkbox } from "./prospect-client/Form/Checkbox/Checkbox/CheckboxApollo";
export { CheckboxText } from "./prospect-client/Form/Checkbox/CheckboxText/CheckboxTextApollo";
export { Dropdown } from "./prospect-client/Form/Dropdown/DropdownApollo";
export { FileUpload } from "./prospect-client/Form/FileUpload/FileUpload/FileUploadApollo";
export { InputFile } from "./prospect-client/Form/FileUpload/InputFile/InputFileApollo";
export { ItemFile } from "./prospect-client/Form/FileUpload/ItemFile/ItemFileApollo";
export { InputDate } from "./prospect-client/Form/InputDate/InputDateApollo";
export { type OptionType } from "./prospect-client/Form/InputPhone/InputPhone.types";
export { InputPhone } from "./prospect-client/Form/InputPhone/InputPhoneApollo";
export { InputText } from "./prospect-client/Form/InputText/InputTextApollo";
export { InputTextAtom } from "./prospect-client/Form/InputTextAtom/InputTextAtomApollo";
export { ItemLabel } from "./prospect-client/Form/ItemLabel/ItemLabelApollo";
export {
  ItemMessage,
  itemMessageVariants,
  type ItemMessageVariants,
} from "./prospect-client/Form/ItemMessage/ItemMessageApollo";
export {
  /** @deprecated Use `CardRadioGroup` instead. */
  CardRadioGroup as CardRadio,
  CardRadioGroup,
} from "./prospect-client/Form/Radio/CardRadioGroup/CardRadioGroupApollo";
export { CardRadioOption } from "./prospect-client/Form/Radio/CardRadioOption/CardRadioOptionApollo";
export { Radio } from "./prospect-client/Form/Radio/Radio/RadioApollo";
export {
  RadioText,
  type RadioTextProps,
} from "./prospect-client/Form/Radio/RadioText/RadioTextApollo";
export { TextArea } from "./prospect-client/Form/TextArea/TextAreaApollo";
export { DebugGrid } from "./prospect-client/Grid/DebugGridApollo";
export {
  Heading,
  type HeadingLevel,
  type HeadingProps,
} from "./prospect-client/Heading/HeadingApollo";
export {
  Icon,
  iconSizeVariants,
  iconVariants,
  type IconSizeVariants,
  type IconVariants,
} from "./prospect-client/Icon/IconApollo";
export {
  ItemTabBar,
  type ItemTabBarProps,
} from "./prospect-client/ItemTabBar/ItemTabBarApollo";
export {
  ExitLayout,
  type ExitLayoutProps,
  type ExitLayoutWithSubComponents,
} from "./prospect-client/Layout/ExitLayout/ExitLayoutApollo";
export {
  Footer,
  type FooterProps,
} from "./prospect-client/Layout/Footer/FooterApollo";
export {
  FormLayout,
  type FormLayoutProps,
} from "./prospect-client/Layout/FormLayout/FormLayout";
export {
  LevelSelector,
  type LevelSelectorProps,
} from "./prospect-client/LevelSelector/LevelSelectorApollo";
export {
  Link,
  linkVariants,
  type LinkProps,
  type LinkVariants,
} from "./prospect-client/Link/LinkApollo";
export {
  ClickItem,
  clickItemStates,
  clickItemVariants,
  type ClickItemStates,
  type ClickItemVariants,
} from "./prospect-client/List/ClickItem/ClickItemApollo";
export { ContentItemDuo } from "./prospect-client/List/ContentItemDuo/ContentItemDuoApollo";
export { List, type ListProps } from "./prospect-client/List/List/ListApollo";
export {
  Loader,
  type LoaderProps,
} from "./prospect-client/Loader/LoaderApollo";
export {
  Message,
  messageVariants,
  type MessageVariants,
} from "./prospect-client/Message/MessageApollo";
export {
  MultiMessage,
  type MultiMessageItem,
  type MultiMessageProps,
} from "./prospect-client/MultiMessage/MultiMessageApollo";
export {
  Modal,
  ModalCore,
  ModalCoreBody,
  ModalCoreFooter,
  ModalCoreHeader,
} from "./prospect-client/Modal/ModalApollo";
export {
  ErrorPage,
  type ErrorPageProps,
} from "./prospect-client/pages/ErrorPage/ErrorPageApollo";
export {
  ValidPage,
  type ValidPageProps,
} from "./prospect-client/pages/ValidPage/ValidPageApollo";
export {
  ItemPagination,
  type ItemPaginationProps,
} from "./prospect-client/Pagination/ItemPagination/ItemPaginationApollo";
export { Pagination } from "./prospect-client/Pagination/PaginationApollo";
export { ProgressBar } from "./prospect-client/ProgressBar/ProgressBarApollo";
export { ProgressBarGroup } from "./prospect-client/ProgressBarGroup/ProgressBarGroupApollo";
export {
  Skeleton,
  type SkeletonProps,
} from "./prospect-client/Skeleton/SkeletonApollo";
export {
  SkeletonList,
  type SkeletonListProps,
} from "./prospect-client/SkeletonList/SkeletonListApollo";
export {
  Spinner,
  spinnerVariants,
  type SpinnerVariants,
} from "./prospect-client/Spinner/SpinnerApollo";
export { Stepper } from "./prospect-client/Stepper/StepperApollo";
export { Svg } from "./prospect-client/Svg/Svg";
export {
  TabBar,
  tabBarDirection,
  type TabBarDirection,
  type TabBarProps,
} from "./prospect-client/TabBar/TabBarApollo";
export {
  Table,
  type BodyColorVariants,
  type HeadColorVariants,
  type RowSizeVariants,
  type TableProps,
} from "./prospect-client/Table/TableApollo";
export { TableMobileCard } from "./prospect-client/TableMobileCard/TableMobileCard";
export {
  Tag,
  tagVariants,
  type TagVariants,
} from "./prospect-client/Tag/TagApollo";
export { TimelineVertical } from "./prospect-client/TimelineVertical/TimelineVerticalApollo";
export { Toggle } from "./prospect-client/Toggle/ToggleApollo";
export type { GridContainerProps } from "./prospect-client/utilities/types/GridContainerProps";

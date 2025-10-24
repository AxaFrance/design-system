import "@axa-fr/design-system-look-and-feel-css/dist/common/tokens.scss";
import "@fontsource/source-sans-pro";

// Alias From Apollo/LF
export {
  Message,
  messageVariants,
  type MessageVariants,
} from "./Message/Message";
export { BasePicture } from "./BasePicture/BasePicture";
export { Button, buttonVariants, type ButtonVariants } from "./Button/Button";
export {
  CardMessage,
  cardMessageVariants,
  type CardMessageVariants,
} from "./CardMessage/CardMessage";
export { ClickIcon } from "./ClickIcon/ClickIcon";
export { ContentItemMono } from "./ContentItemMono/ContentItemMono";
export { Divider } from "./Divider/Divider";
export { Checkbox, CheckboxText } from "./Form/Checkbox";
export { Dropdown, Select } from "./Form/Dropdown/Dropdown";
export { DateInput, InputDate } from "./Form/InputDate/InputDate";
export { ItemMessage } from "./Form/ItemMessage/ItemMessage";
export { InputText, TextInput } from "./Form/InputText/InputText";
export { ItemFile } from "./Form/ItemFile/ItemFile";
export { ItemLabel } from "./Form/ItemLabel/ItemLabel";
export { Radio } from "./Form/Radio";
export { TextArea } from "./Form/TextArea/TextArea";
export { DebugGrid } from "./Grid/DebugGrid";
export { Heading, type HeadingLevel } from "./Heading/Heading";
export {
  Icon,
  iconSizeVariants,
  iconVariants,
  type IconSizeVariants,
  type IconVariants,
} from "./Icon/Icon";
export { ItemTabBar, type ItemTabBarProps } from "./ItemTabBar/ItemTabBar";
export {
  TabBar,
  type TabBarProps,
  tabBarDirection,
  type TabBarDirection,
} from "./TabBar/TabBar";
export { Footer } from "./Layout/Footer/Footer";
export { Link } from "./Link/Link";
export { ContentItemDuo } from "./List/ContentItemDuo/ContentItemDuo";
export {
  Modal,
  ModalCore,
  ModalCoreBody,
  ModalCoreFooter,
  ModalCoreHeader,
  type ModalCoreBodyProps,
  type ModalCoreFooterProps,
  type ModalCoreHeaderProps,
  type ModalCoreProps,
  type ModalProps,
} from "./Modal";
export { Stepper } from "./Stepper/Stepper";
export { ProgressBar } from "./ProgressBar/ProgressBar";
export { ProgressBarGroup } from "./ProgressBarGroup/ProgressBarGroup";
export {
  Spinner,
  spinnerVariants,
  type SpinnerVariants,
} from "./Spinner/Spinner";
export { Tag, tagVariants, type TagVariants } from "./Tag/Tag";
export { TimelineVertical } from "./TimelineVertical/TimelineVertical";
export { Toggle } from "./Toggle/Toggle";

// deprecated because moved to Apollo/LF
export { Accordion } from "./Accordion";
export { AccordionCore } from "./AccordionCore";
export { CardCheckbox, CheckboxCard } from "./Form/Checkbox/CardCheckbox";
export { RadioCard, CardRadio } from "./Form/Radio/RadioCard";
export { ClickItem, createClickItemParent } from "./List/ClickItem";
export { TabsClient as Tabs, Direction as TabsDirection } from "./Tabs/Tabs";
export { Svg } from "./Svg";
export { FileUpload } from "./Form/FileUpload";

// LF deprecated because renamed
export { Alert, type AlertType } from "./Alert/Alert";
export { InputError } from "./Form/InputError";
export { IconBg } from "./IconBg";
export { Title, TitleSize, type TitleLevel } from "./Title";

// TODO: move to Apollo/LF or deprecated usage
export { Card } from "./Card";
export { BurgerMenu, Header, NavBar, PreviousLink } from "./Layout/Header";
export { List } from "./List";
export { ContentTabItem, ContentTabList } from "./List/ContentTabList";
export { Pagination } from "./Pagination/Pagination";
export { Skeleton } from "./Skeleton/Skeleton";
export { SkeletonList } from "./SkeletonList/SkeletonList";

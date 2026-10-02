#!/usr/bin/env node
// canopee-migrate.mjs: inventory and safe rewrites for a migration to the Canopée design system
// (@axa-fr/canopee-react, @axa-fr/canopee-css). Node >= 18, no dependency, works offline.
//
//   node canopee-migrate.mjs [projectDir] [--target 1|2] [--write] [--report FILE] [--json] [--all]
//   node canopee-migrate.mjs [projectDir] [--target 1|2] --check
//
//   (default)      dry run: prints the report, writes nothing
//   --write        applies the AUTO rewrites (safe 1:1 changes only), then prints the report
//   --target 2     also prepares the 2.0 breaking changes (default 1 = latest 1.x)
//   --report FILE  also writes the report as a Markdown checklist (relative to projectDir)
//   --json         machine-readable report
//   --all          also lists every AUTO edit and every deprecated usage
//   --check        dry run, then runs the project typecheck, lint, test and build scripts and
//                  prints VERDICT: DONE only when nothing is left and every check passes
//
// Everything listed under MANUAL is left to you: one line per change, with file:line, what to do
// and the reference to read (search the code, e.g. TK_REMOVED, in the given references/*.md file).
// MANUAL is ordered: styles first (they break the build), then imports, then components.
// A folder with its own package.json (template, other application) is not scanned: see its NOTE.
//
// The facts embedded below were read from the published npm packages: @axa-fr/canopee-react and
// @axa-fr/canopee-css 1.8.0 and 2.0.0-alpha.76, @axa-fr/react-toolkit-* 3.0.2,
// @axa-fr/design-system-slash-* 1.2.0 / 2.0.5 / 3.0.0, @axa-fr/design-system-apollo-* 3.2.0,
// @axa-fr/design-system-look-and-feel-* 3.2.0. toolkit-sass.json, next to this file, holds the
// resolved values of the toolkit Sass variables and the literal Canopée distributeur colour tokens.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const words = (s) => new Set(s.split(/\s+/).filter(Boolean));

// Value and type exports of @axa-fr/canopee-react/<universe> 1.8.0, and the 2.0 differences.
const EXPORTS = {
  distributeur: {
    v1: words(
      "Accordion Action Alert AnchorNavBarItem ArticleRestitution Badge BooleanModal Button " +
        "ButtonVariant Card CardData CardDataVariant Checkbox CheckboxInput CheckboxItem CheckboxModes " +
        "Choice ChoiceInput CollapseCard CollapseProps Date DateInput Divider EditorialMessage " +
        "EditorialMessageProps EditorialMessageType Field FieldError FieldForm FieldInput File FileInput " +
        "FilePreview FileTable Footer FormClassManager Header HeaderRestitution HeaderTitle HelpButton " +
        "HelpMessage Infos InputList Items Link LinkProps Loader MainContainer MandatoryMention " +
        "MenuTitleWrapper Message MessageProps MessageTypes MessageVariants Modal ModalBody ModalFooter " +
        "ModalHeader ModalHeaderBase MultiSelect MultiSelectInput Name NavBar NavBarBase NavBarItem " +
        "NavBarItemBase NavBarItemLink NestedQuestion Number NumberInput Pager Paging Pass PassInput " +
        "Placement Popover PopoverModes Radio RadioInput RadioItem RadioModes Restitution RestitutionList " +
        "SectionRestitution SectionRestitutionColumn SectionRestitutionRow SectionRestitutionTitle Select " +
        "SelectBase SelectInput Slider SliderInput Step StepBase StepLinkOnClickHandler StepMode Steps " +
        "Summary Svg TBody THead Table Tabs Tag TagVariants Td Text TextInput Textarea TextareaInput Th " +
        "Timeline TimelineProps TimelineVariants Title ToggleButton Tr User VerticalStep VerticalStepMode " +
        "getComponentClassName",
    ),
    removedIn2: words(
      "Alert Badge FieldForm FieldInput Pass PassInput SelectBase Slider SliderInput getComponentClassName",
    ),
    addedIn2: words(
      "BaseCard BaseCardProps ButtonMultiActions ButtonMultiActionsProps CardButton CardButtonProps " +
        "ItemFormHelper ItemFormHelperProps ItemFormHelperVariant ItemLoader ItemLoaderVariant ThProps " +
        "getClassName",
    ),
  },
  prospect: {
    v1: words(
      "Accordion AccordionContextual AccordionContextualVariants AccordionCore AccordionVariants " +
        "BasePicture BodyColorVariants Button ButtonVariants Card CardCheckbox CardCheckboxOption " +
        "CardMessage CardMessageVariants CardProps CardRadio CardRadioGroup CardRadioOption Checkbox " +
        "CheckboxCard CheckboxText ClickIcon ClickItem ClickItemStates ClickItemVariants ContentItemDuo " +
        "ContentItemDuoAction ContentItemDuoActionState ContentItemMono DataAgent DataAgentProps " +
        "DebugGrid Divider Dropdown ErrorPage ErrorPageProps ExitLayout ExitLayoutProps " +
        "ExitLayoutWithSubComponents Fieldset FieldsetProps FileUpload Footer FooterProps FormLayout " +
        "FormLayoutProps GridContainerProps HeadColorVariants Heading HeadingLevel HeadingProps Icon " +
        "IconSizeVariants IconVariants InputDate InputFile InputPhone InputText InputTextAtom ItemFile " +
        "ItemLabel ItemMessage ItemMessageVariants ItemPagination ItemPaginationProps ItemTabBar " +
        "ItemTabBarProps LevelSelector LevelSelectorProps Link LinkProps LinkVariants List ListProps " +
        "Loader LoaderProps Message MessageVariants Modal ModalCore ModalCoreBody ModalCoreFooter " +
        "ModalCoreHeader MultiMessage MultiMessageItem MultiMessageProps OptionType Pagination " +
        "ProgressBar ProgressBarGroup Radio RadioText RadioTextProps RowSizeVariants Skeleton " +
        "SkeletonList SkeletonListProps SkeletonProps Spinner SpinnerVariants Stepper Svg TabBar " +
        "TabBarDirection TabBarProps Table TableMobileCard TableProps Tag TagVariants TextArea " +
        "TimelineVertical Toggle ValidPage ValidPageProps accordionContextualVariants accordionVariants " +
        "buttonVariants cardMessageVariants clickItemStates clickItemVariants iconSizeVariants " +
        "iconVariants itemMessageVariants linkVariants messageVariants spinnerVariants tabBarDirection " +
        "tagVariants",
    ),
    removedIn2: words("CardRadioOption CheckboxCard"),
    addedIn2: words(
      "AppName AppNameProps CardCheckboxProps CardVariants ExitLayoutSkeleton ExitLayoutSkeletonProps " +
        "Header HeaderProps ItemMenu ItemMenuProps ItemMultiSelect ItemMultiSelectProps MenuBurger " +
        "MenuBurgerProps MessageBar MessageBarProps MessageBarVariant MultiSelectList " +
        "MultiSelectListProps SkeletonActionSizeVariant SkeletonCircleSizeVariant SkeletonGrid " +
        "SkeletonGridProps SkeletonSizeVariant SkeletonVariant TabMenu TabMenuProps TagList TagListProps " +
        "cardVariants skeletonSizeVariants skeletonVariants",
    ),
  },
  client: {
    v1: words(
      "Accordion AccordionContextual AccordionContextualVariants AccordionCore AccordionVariants " +
        "BasePicture BodyColorVariants Button ButtonVariants Card CardCheckbox CardCheckboxOption " +
        "CardMessage CardMessageVariants CardProps CardRadio CardRadioGroup CardRadioOption Checkbox " +
        "CheckboxCard CheckboxText ClickIcon ClickItem ClickItemStates ClickItemVariants ContentItemDuo " +
        "ContentItemDuoAction ContentItemDuoActionState ContentItemMono DataAgent DataAgentProps " +
        "DateInput DebugGrid Divider Dropdown ErrorPage ErrorPageProps ExitLayout ExitLayoutProps " +
        "ExitLayoutWithSubComponents Fieldset FieldsetProps FileUpload Footer FooterProps FormLayout " +
        "FormLayoutProps GridContainerProps HeadColorVariants Heading HeadingLevel HeadingProps Icon " +
        "IconSizeVariants IconVariants InputDate InputFile InputPhone InputText InputTextAtom ItemFile " +
        "ItemLabel ItemMessage ItemMessageVariants ItemPagination ItemPaginationProps ItemTabBar " +
        "ItemTabBarProps LevelSelector LevelSelectorProps Link LinkProps LinkVariants List ListProps " +
        "Loader LoaderProps Message MessageVariants Modal ModalCore ModalCoreBody ModalCoreFooter " +
        "ModalCoreHeader MultiMessage MultiMessageItem MultiMessageProps OptionType Pagination " +
        "ProgressBar ProgressBarGroup Radio RadioText RadioTextProps RowSizeVariants Skeleton " +
        "SkeletonList SkeletonListProps SkeletonProps Spinner SpinnerVariants Stepper Svg TabBar " +
        "TabBarDirection TabBarProps Table TableMobileCard TableMobileCardProps TableProps Tag " +
        "TagVariants TextArea TextInput TimelineVertical Toggle ValidPage ValidPageProps " +
        "accordionContextualVariants accordionVariants buttonVariants cardMessageVariants clickItemStates " +
        "clickItemVariants iconSizeVariants iconVariants itemMessageVariants linkVariants messageVariants " +
        "spinnerVariants tabBarDirection tagVariants",
    ),
    removedIn2: words("CardRadioOption CheckboxCard DateInput TextInput"),
    addedIn2: words(
      "AppName AppNameProps CardCheckboxProps CardVariants ExitLayoutSkeleton ExitLayoutSkeletonProps " +
        "Header HeaderProps ItemMenu ItemMenuProps ItemMultiSelect ItemMultiSelectProps MenuBurger " +
        "MenuBurgerProps MessageBar MessageBarProps MessageBarVariant MultiSelectList " +
        "MultiSelectListProps SkeletonActionSizeVariant SkeletonCircleSizeVariant SkeletonGrid " +
        "SkeletonGridProps SkeletonSizeVariant SkeletonVariant TabMenu TabMenuProps TagList TagListProps " +
        "cardVariants skeletonSizeVariants skeletonVariants",
    ),
  },
};

// CSS files published by @axa-fr/canopee-css 1.8.0 (paths after the package name), and those
// removed in 2.0.
const CSS_FILES_1 = words(
  "client/Accordion/AccordionLF.css client/AccordionContextual/AccordionContextualLF.css " +
    "client/AccordionCore/AccordionCoreLF.css client/BasePicture/BasePictureAll.css " +
    "client/Button/ButtonLF.css client/Card/CardLF.css client/CardMessage/CardMessageLF.css " +
    "client/ClickIcon/ClickIconLF.css client/ContentItemMono/ContentItemMonoLF.css " +
    "client/DataAgent/DataAgentLF.css client/Divider/DividerLF.css client/Fieldset/FieldsetLF.css " +
    "client/Form/Checkbox/CardCheckbox/CardCheckboxLF.css " +
    "client/Form/Checkbox/CardCheckboxOption/CardCheckboxOptionLF.css " +
    "client/Form/Checkbox/Checkbox/CheckboxLF.css " +
    "client/Form/Checkbox/CheckboxText/CheckboxTextLF.css client/Form/Dropdown/DropdownLF.css " +
    "client/Form/FileUpload/FileUpload/FileUploadAll.css " +
    "client/Form/FileUpload/InputFile/InputFileLF.css client/Form/FileUpload/ItemFile/ItemFileLF.css " +
    "client/Form/InputDate/InputDateLF.css client/Form/InputPhone/InputPhoneLF.css " +
    "client/Form/InputText/InputTextLF.css client/Form/InputTextAtom/InputTextAtomLF.css " +
    "client/Form/ItemLabel/ItemLabelLF.css client/Form/ItemMessage/ItemMessageLF.css " +
    "client/Form/Radio/CardRadioGroup/CardRadioGroupLF.css " +
    "client/Form/Radio/CardRadioOption/CardRadioOptionLF.css client/Form/Radio/Radio/RadioLF.css " +
    "client/Form/Radio/RadioText/RadioTextAll.css client/Form/TextArea/TextAreaLF.css " +
    "client/Grid/DebugGrid.css client/Grid/Grid.css client/Heading/HeadingLF.css " +
    "client/Icon/IconLF.css client/ItemTabBar/ItemTabBarLF.css " +
    "client/Layout/ExitLayout/ExitLayoutAll.css client/Layout/Footer/FooterLF.css " +
    "client/Layout/FormLayout/FormLayoutAll.css client/LevelSelector/LevelSelectorLF.css " +
    "client/Link/LinkLF.css client/List/ClickItem/ClickItemLF.css " +
    "client/List/ContentItemDuo/ContentItemDuoLF.css " +
    "client/List/ContentItemDuoAction/ContentItemDuoActionAll.css client/List/List/ListLF.css " +
    "client/Loader/LoaderLF.css client/Message/MessageLF.css client/Modal/ModalLF.css " +
    "client/MultiMessage/MultiMessageLF.css client/Pagination/ItemPagination/ItemPaginationLF.css " +
    "client/Pagination/PaginationLF.css client/ProgressBar/ProgressBarLF.css " +
    "client/ProgressBarGroup/ProgressBarGroupLF.css client/Skeleton/SkeletonLF.css " +
    "client/Spinner/SpinnerLF.css client/Stepper/StepperLF.css client/Svg/Svg.css " +
    "client/TabBar/TabBarLF.css client/Table/TableLF.css " +
    "client/TableMobileCard/TableMobileCardAll.css client/Tag/TagLF.css " +
    "client/TimelineVertical/TimelineVerticalLF.css client/Toggle/ToggleLF.css client/client.css " +
    "client/common/breakpoints.scss client/common/reboot.css client/common/rebootLF.css " +
    "client/common/tokens.css distributeur/Accordion/Accordion.css distributeur/Action/Action.css " +
    "distributeur/Alert/Alert.css distributeur/Button/Button.css distributeur/Card/Card.css " +
    "distributeur/CardData/CardData.css distributeur/Divider/Divider.css " +
    "distributeur/EditorialMessage/EditorialMessage.css distributeur/Form/Checkbox/Checkbox.css " +
    "distributeur/Form/Date/Date.css distributeur/Form/Experimental/Input.css " +
    "distributeur/Form/Experimental/InputContainer.css distributeur/Form/Experimental/InputUnit.css " +
    "distributeur/Form/Experimental/ItemMessage.css distributeur/Form/Experimental/Label.css " +
    "distributeur/Form/File/File.css distributeur/Form/MultiSelect/MultiSelect.css " +
    "distributeur/Form/NestedQuestion/NestedQuestion.css distributeur/Form/Pass/Pass.css " +
    "distributeur/Form/Radio/Radio.css distributeur/Form/Radio/RadioCardGroup.css " +
    "distributeur/Form/Select/Select.css distributeur/Form/Slider/Slider.css " +
    "distributeur/Form/Text/Text.css distributeur/Form/Textarea/Textarea.css " +
    "distributeur/Form/core/FormCore.css distributeur/HelpButton/HelpButton.css " +
    "distributeur/Layout/Footer/Footer.css distributeur/Layout/Header/AnchorNavBar/AnchorNavBar.css " +
    "distributeur/Layout/Header/Drawer/Drawer.css distributeur/Layout/Header/Header.css " +
    "distributeur/Layout/Header/HeaderTitle/HeaderTitle.css " +
    "distributeur/Layout/Header/Infos/Infos.css distributeur/Layout/Header/Logo/Logo.css " +
    "distributeur/Layout/Header/Name/Name.css distributeur/Layout/Header/NavBar/NavBar.css " +
    "distributeur/Layout/Header/User/User.css distributeur/Link/Link.css " +
    "distributeur/Loader/Loader.css distributeur/MainContainer/MainContainer.css " +
    "distributeur/MandatoryMention/MandatoryMention.css distributeur/Message/Message.css " +
    "distributeur/Modal/Modal.css distributeur/Popover/Popover.css " +
    "distributeur/Restitution/ExperimentalRestitution.css distributeur/Restitution/Restitution.css " +
    "distributeur/Steps/Steps.css distributeur/Steps/VerticalStep.css distributeur/Table/Pager.css " +
    "distributeur/Table/Paging.css distributeur/Table/Table.css distributeur/Tabs/Tabs.css " +
    "distributeur/Tag/Tag.css distributeur/Timeline/Timeline.css distributeur/Title/Title.css " +
    "distributeur/common/breakpoints.css distributeur/common/grid.css distributeur/common/icons.css " +
    "distributeur/common/reboot.css distributeur/common/tokens.css distributeur/distributeur.css " +
    "prospect/Accordion/AccordionApollo.css " +
    "prospect/AccordionContextual/AccordionContextualApollo.css " +
    "prospect/AccordionCore/AccordionCoreApollo.css prospect/BasePicture/BasePictureAll.css " +
    "prospect/Button/ButtonApollo.css prospect/Card/CardApollo.css " +
    "prospect/CardMessage/CardMessageApollo.css prospect/ClickIcon/ClickIconApollo.css " +
    "prospect/ContentItemMono/ContentItemMonoApollo.css prospect/DataAgent/DataAgentApollo.css " +
    "prospect/Divider/DividerApollo.css prospect/Fieldset/FieldsetApollo.css " +
    "prospect/Form/Checkbox/CardCheckbox/CardCheckboxApollo.css " +
    "prospect/Form/Checkbox/CardCheckboxOption/CardCheckboxOptionApollo.css " +
    "prospect/Form/Checkbox/Checkbox/CheckboxApollo.css " +
    "prospect/Form/Checkbox/CheckboxText/CheckboxTextApollo.css " +
    "prospect/Form/Dropdown/DropdownApollo.css prospect/Form/FileUpload/FileUpload/FileUploadAll.css " +
    "prospect/Form/FileUpload/InputFile/InputFileApollo.css " +
    "prospect/Form/FileUpload/ItemFile/ItemFileApollo.css prospect/Form/InputDate/InputDateApollo.css " +
    "prospect/Form/InputPhone/InputPhoneApollo.css prospect/Form/InputText/InputTextApollo.css " +
    "prospect/Form/InputTextAtom/InputTextAtomApollo.css prospect/Form/ItemLabel/ItemLabelApollo.css " +
    "prospect/Form/ItemMessage/ItemMessageApollo.css " +
    "prospect/Form/Radio/CardRadioGroup/CardRadioGroupApollo.css " +
    "prospect/Form/Radio/CardRadioOption/CardRadioOptionApollo.css " +
    "prospect/Form/Radio/Radio/RadioApollo.css prospect/Form/Radio/RadioText/RadioTextAll.css " +
    "prospect/Form/TextArea/TextAreaApollo.css prospect/Grid/DebugGrid.css prospect/Grid/Grid.css " +
    "prospect/Heading/HeadingApollo.css prospect/Icon/IconApollo.css " +
    "prospect/ItemTabBar/ItemTabBarApollo.css prospect/Layout/ExitLayout/ExitLayoutAll.css " +
    "prospect/Layout/Footer/FooterApollo.css prospect/Layout/FormLayout/FormLayoutAll.css " +
    "prospect/LevelSelector/LevelSelectorApollo.css prospect/Link/LinkApollo.css " +
    "prospect/List/ClickItem/ClickItemApollo.css " +
    "prospect/List/ContentItemDuo/ContentItemDuoApollo.css " +
    "prospect/List/ContentItemDuoAction/ContentItemDuoActionAll.css prospect/List/List/ListApollo.css " +
    "prospect/Loader/LoaderApollo.css prospect/Message/MessageApollo.css " +
    "prospect/Modal/ModalApollo.css prospect/MultiMessage/MultiMessageApollo.css " +
    "prospect/Pagination/ItemPagination/ItemPaginationApollo.css " +
    "prospect/Pagination/PaginationApollo.css prospect/ProgressBar/ProgressBarApollo.css " +
    "prospect/ProgressBarGroup/ProgressBarGroupApollo.css prospect/Skeleton/SkeletonApollo.css " +
    "prospect/Spinner/SpinnerApollo.css prospect/Stepper/StepperApollo.css prospect/Svg/Svg.css " +
    "prospect/TabBar/TabBarApollo.css prospect/Table/TableApollo.css " +
    "prospect/TableMobileCard/TableMobileCardAll.css prospect/Tag/TagApollo.css " +
    "prospect/TimelineVertical/TimelineVerticalApollo.css prospect/Toggle/ToggleApollo.css " +
    "prospect/common/breakpoints.scss prospect/common/reboot.css prospect/common/rebootLF.css " +
    "prospect/common/tokens.css prospect/prospect.css",
);
const CSS_REMOVED_IN_2 = words(
  "client/Form/ItemMessage/ItemMessageLF.css " +
    "client/Form/Radio/CardRadioOption/CardRadioOptionLF.css client/Skeleton/SkeletonLF.css " +
    "client/common/rebootLF.css distributeur/Form/Pass/Pass.css distributeur/Form/Slider/Slider.css " +
    "prospect/Form/ItemMessage/ItemMessageApollo.css " +
    "prospect/Form/Radio/CardRadioOption/CardRadioOptionApollo.css " +
    "prospect/Skeleton/SkeletonApollo.css prospect/common/rebootLF.css",
);

// ---------------------------------------------------------------------------------------------
// Migration knowledge
// ---------------------------------------------------------------------------------------------

const REACT_PKG = "@axa-fr/canopee-react";
const CSS_PKG = "@axa-fr/canopee-css";

// Old React entry points that map to one Canopée universe.
const REACT_ENTRIES = {
  "@axa-fr/design-system-slash-react": { origin: "slash", u: "distributeur" },
  "@axa-fr/design-system-slash-react/utilities": {
    origin: "slash",
    u: "distributeur",
  },
  "@axa-fr/design-system-apollo-react": { origin: "apollo", u: "prospect" },
  "@axa-fr/design-system-apollo-react/lf": { origin: "apollo", u: "client" },
  "@axa-fr/design-system-look-and-feel-react": { origin: "oldlf", u: "client" },
  "@axa-fr/design-system-react/agent": { origin: "ds0", u: "distributeur" },
  "@axa-fr/canopee-react/distributeur": {
    origin: "canopee",
    u: "distributeur",
  },
  "@axa-fr/canopee-react/prospect": { origin: "canopee", u: "prospect" },
  "@axa-fr/canopee-react/client": { origin: "canopee", u: "client" },
};
// Old entry points without a 1:1 target.
const MANUAL_ENTRIES = {
  "@axa-fr/design-system-react": "DS0",
  "@axa-fr/design-system-react/client": "DS0",
  "@axa-fr/design-system-react/utilities": "DS0",
  "@axa-fr/design-system-look-and-feel-react/utilities": "OLD_LF",
};

// Deprecated aliases, renamed in every case (valid in 1.x, required in 2.0).
const ALIASES = {
  distributeur: { Alert: "Message", Badge: "Tag" },
  prospect: { CheckboxCard: "CardCheckbox" },
  client: {
    CheckboxCard: "CardCheckbox",
    DateInput: "InputDate",
    TextInput: "InputText",
  },
};
// In 1.x `CardRadio` is a deprecated alias of `CardRadioGroup`; in 2.0 `CardRadio` is the option
// (formerly `CardRadioOption`). Both are renamed together, only while the project is still on 1.x.
const CARDRADIO_1 = { CardRadio: "CardRadioGroup" };
const CARDRADIO_2 = { CardRadioOption: "CardRadio" };

// @axa-fr/react-toolkit-*: name of the default export of each package (as re-exported by
// @axa-fr/react-toolkit-all), and named exports that react-toolkit-all renamed.
const TK_DEFAULT = {
  action: "Action",
  alert: "Alert",
  badge: "Badge",
  button: "Button",
  "form-filter": "Filter",
  "form-filter-inline": "FilterInline",
  help: "HelpButton",
  helpinfo: "HelpInfo",
  icon: "Icon",
  link: "Link",
  loader: "Loader",
  "modal-boolean": "BooleanModal",
  "modal-default": "Modal",
  panel: "Panel",
  popover: "Popover",
  table: "Table",
  tabs: "Tabs",
  title: "Title",
};
const TK_PKG_RENAME = {
  "modal-default": {
    Body: "ModalBody",
    Footer: "ModalFooter",
    Header: "ModalHeader",
  },
};
// Toolkit name -> Canopée distributeur name, when they differ.
const TK_RENAME = {
  Alert: "Message",
  AlertCore: "Message",
  Badge: "Tag",
  BadgeRaw: "Tag",
  ActionCore: "Action",
  ButtonCore: "Button",
  FooterCore: "Footer",
  HeaderBase: "ModalHeaderBase",
};
// Toolkit names with no 1:1 target (the import is left in place and reported).
const TK_NO_TARGET = {
  Switch:
    'removed, no equivalent: single choice among options -> RadioInput; on/off -> CheckboxInput mode="toggle"',
  SwitchInput:
    'removed, no equivalent: single choice among options -> RadioInput; on/off -> CheckboxInput mode="toggle"',
  CardGroupRadio: 'removed: use <RadioInput mode="cardRadio" .../>',
  CardGroupCheckbox: "removed: use CheckboxInput",
  Card: "toolkit form card removed; Canopée `Card` is a different (layout) component",
  CardMeta: "toolkit form card removed",
  CardContent: "toolkit form card removed",
  CardHeader: "toolkit form card removed",
  CardFooter: "toolkit form card removed",
  FileLine: "removed: FileTable renders the file lines",
  Filter: "no equivalent",
  FilterInline: "no equivalent",
  Panel: "no equivalent",
  HelpInfo:
    '<Popover mode="hover" placement="top" popoverElement={content}>{children}</Popover>; with no content or isDisabled, render {children} alone',
  Icon: 'no equivalent: <i className="glyphicon glyphicon-NAME" /> or <Svg src={...} /> (Material Symbols)',
  FooterClient: "no equivalent",
  FooterClientList: "no equivalent",
  FooterClientItem: "no equivalent",
  LanguageSelection: "no equivalent",
  SocialNetwork: "no equivalent",
  useId: "use useId from react",
  createId: "internal helper, no equivalent",
  getClickId: "internal helper, no equivalent",
  Constants: "internal helper, no equivalent",
  PropsManager: "internal helper, no equivalent",
  PopoverBase: "use Popover",
  AlertWithType:
    'use Message with variant="error" | "warning" | "info" | "success"',
  AlertIcons: "no equivalent: Message picks its icon from variant",
  withIsVisible: "no equivalent",
  useInputClassModifier: "no equivalent",
  getOptionClassName: "no equivalent",
  useOptionsWithId: "no equivalent",
  getFirstId: "no equivalent",
  StrengthEnum: "not exported by Canopée",
};
// Toolkit 2.x Modal sub-components -> Canopée exports.
const MODAL_MEMBERS = {
  Header: "ModalHeader",
  Body: "ModalBody",
  Footer: "ModalFooter",
  HeaderBase: "ModalHeaderBase",
};
// Toolkit enums replaced by string literals.
const TK_ENUMS = {
  PopoverModes: { over: "hover", click: "click" },
  PopoverPlacements: {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
  },
  LoaderModes: {
    none: "none",
    get: "get",
    post: "post",
    delete: "delete",
    update: "update",
    error: "error",
  },
};

// Exports removed in 2.0 without a rename.
const REMOVED_2 = {
  Pass: 'use <TextInput type="password" .../>',
  PassInput: 'use <TextInput type="password" .../>',
  Slider: "use NumberInput or another control",
  SliderInput: "use NumberInput or another control",
  SelectBase: "use <Select> with <option> children",
  FieldForm: "use the *Input components (TextInput, SelectInput...)",
  FieldInput: "use the *Input components (TextInput, SelectInput...)",
  getComponentClassName:
    "use getClassName({ baseClassName, modifiers, className })",
};
const OTHER_HINTS = {
  BREAKPOINT:
    "not exported by Canopée: copy it into the project (packages-and-css.md, EXPORT_MISSING)",
  ClickEvent:
    "toolkit type { id?: string }: Canopée callbacks receive a React event (React.SyntheticEvent)",
  useIsSmallScreen:
    "not exported by Canopée: copy it into the project (packages-and-css.md, EXPORT_MISSING)",
};

// JSX: classModifier values that have a 1:1 prop.
const BUTTON_MODIFIERS = {
  reverse: 'variant="secondary"',
  success: 'variant="validated"',
  danger: 'variant="danger"',
  small: "small",
  disabled: "disabled",
};
const MESSAGE_VARIANTS = {
  error: "error",
  warning: "warning",
  info: "info",
  success: "success",
  danger: "warning",
};
const TAG_VARIANTS = {
  success: "success",
  information: "information",
  warning: "warning",
  error: "error",
  default: "default",
  dark: "dark",
  purple: "purple",
  gray: "gray",
  white: "white",
  info: "information",
  danger: "warning",
};
// B2C deprecated props with a 1:1 replacement (both exist in 1.x; old one removed in 2.0).
const MORE_BUTTON = {
  buttonLabel: "moreButtonLabel",
  onButtonClick: "onMoreButtonClick",
};
const B2C_PROP_RENAMES = {
  Accordion: { isOpen: "open" },
  AccordionContextual: { isOpen: "open" },
  AccordionCore: { isOpen: "open" },
  Dropdown: MORE_BUTTON,
  InputDate: MORE_BUTTON,
  InputPhone: MORE_BUTTON,
  InputText: MORE_BUTTON,
  TextArea: MORE_BUTTON,
  CardCheckbox: {
    labelGroup: "label",
    descriptionGroup: "description",
    isRequired: "required",
  },
  CardRadioGroup: {
    labelGroup: "label",
    descriptionGroup: "description",
    isRequired: "required",
  },
  ItemLabel: { ...MORE_BUTTON, inputId: "htmlFor" },
  ProgressBarGroup: { nbSteps: "stepsCount" },
  Checkbox: { hasError: "aria-invalid", errorId: "aria-errormessage" },
};
// B2C deprecated props removed in 2.0 without a 1:1 replacement.
const MSG = 'use message="..." with messageType="error" | "success"';
const B2C_REMOVED_PROPS_2 = {
  CardCheckbox: { error: MSG },
  CheckboxText: { errorMessage: MSG },
  Dropdown: { error: MSG, success: MSG },
  InputDate: { error: MSG, success: MSG },
  InputPhone: { error: MSG, success: MSG },
  InputText: { error: MSG, success: MSG },
  TextArea: { error: MSG },
  CardRadioGroup: {
    error: MSG,
    type: "use position and cardStyle",
    value: "set checked on the selected item of options",
  },
  CardRadioOption: { type: "use position" },
  ContentItemMono: { icon: "use iconProps" },
  ContentItemDuo: {
    classModifier: "use size or className",
    isVertical: 'use position="vertical"',
  },
  Link: { classModifier: "use variant" },
  Modal: {
    icon: "move it into headingProps={{ icon }}",
    iconProps: "move it into headingProps={{ iconProps }}",
  },
  ItemLabel: { label: "pass the label as children" },
};
const HIDDEN_FIELD = "render the field conditionally";
const DIST_REMOVED_PROPS_2 = {
  Select: { options: "render <option> children (SelectInput keeps options)" },
  ModalHeader: { title: "pass the title as children" },
  Field: { isVisible: HIDDEN_FIELD, classNameSuffix: "removed" },
  ...Object.fromEntries(
    [
      "CheckboxInput",
      "ChoiceInput",
      "DateInput",
      "FileInput",
      "MultiSelectInput",
      "NumberInput",
      "RadioInput",
      "SelectInput",
      "TextInput",
      "TextareaInput",
    ].map((n) => [n, { isVisible: HIDDEN_FIELD }]),
  ),
};

// CSS custom properties defined by @axa-fr/design-system-apollo-css 3.2.0 (tokens.css, tokensLF.css)
// and absent from @axa-fr/canopee-css 1.8.0, with their former value.
const REMOVED_TOKENS_APOLLO = {
  "--black-20": "hsl(from var(--black) h s l/20%)",
  "--axa-red-digital-100": "#ff4751",
  "--red-alert-80": "#ff1f1f",
  "--warning-4": "#fef9f6",
  "--spacing-8": "8px",
  "--spacing-10": "10px",
  "--spacing-12": "12px",
  "--spacing-16": "16px",
  "--color-red-600": "#d4435b",
  "--error-custom-border": "#d18e8e",
  "--error-custom-bg": "#ffbfbf",
  "--color-alert-danger-color-border": "#c8b282",
  "--color-alert-danger-bg-color": "#f1d596",
  "--color-gray-300": "#e9ecf2",
};
// Component variables of the prospect and client CSS removed in 2.0 (--orange-100 is renamed).
const REMOVED_TOKENS_B2C_2 = Object.fromEntries(
  [
    "--item-message-icon-size",
    "--link-font-size",
    "--dropdown-border-color",
    "--radio-option-border-width",
    "--radio-option-border-color",
    "--radio-option-color-title",
    "--radio-option-color-subtitle",
    "--radio-option-gap",
    "--radio-option-border-radius",
    "--radio-option-background-color",
  ].map((n) => [n, ""]),
);

// Toolkit < 3 called onChange with { name, value, id }; Canopée does not.
const NATIVE =
  "receives the native event now: use e.target.value and e.target.name";
const ONCHANGE_HINTS = {
  Text: NATIVE,
  TextInput: NATIVE,
  Number: NATIVE,
  NumberInput: NATIVE,
  Textarea: NATIVE,
  TextareaInput: NATIVE,
  Date: NATIVE,
  DateInput: NATIVE,
  Select: NATIVE,
  SelectInput: NATIVE,
  SelectBase: NATIVE,
  Radio: NATIVE,
  RadioInput: NATIVE,
  Pass: NATIVE,
  PassInput: NATIVE,
  Checkbox: "receives { values, target: { value, checked }, name } now",
  CheckboxInput: "receives { values, target: { value, checked }, name } now",
  Choice: "check the onChange type in the component .d.ts",
  ChoiceInput: "check the onChange type in the component .d.ts",
  MultiSelect: "check the onChange type in the component .d.ts",
  MultiSelectInput: "check the onChange type in the component .d.ts",
  File: "check the onChange type in the component .d.ts",
  FileInput: "check the onChange type in the component .d.ts",
};

const CODES = {
  TK_ONCHANGE: [
    "toolkit < 3 onChange signature changed",
    "toolkit-to-canopee.md",
  ],
  TK_REMOVED: [
    "toolkit export without a 1:1 Canopée export",
    "toolkit-to-canopee.md",
  ],
  TK_NAMESPACE: [
    "namespace import or require() of an old package",
    "toolkit-to-canopee.md",
  ],
  TK_ENUM: [
    "toolkit enum used in a way the script cannot rewrite",
    "toolkit-to-canopee.md",
  ],
  TK_CSS_IN_STYLES: [
    "toolkit stylesheet imported from a style file",
    "toolkit-to-canopee.md",
  ],
  TK_ALERT_ICON: [
    "toolkit Alert icon / iconClassName has no equivalent",
    "toolkit-to-canopee.md",
  ],
  TK_ALERT_CLASSMODIFIER: [
    "toolkit Alert classModifier: Message only renders its variant class",
    "toolkit-to-canopee.md",
  ],
  TK_FOOTER: ["Footer copyright prop removed", "toolkit-to-canopee.md"],
  TK_ACTION_ROLE: [
    "Action no longer adds role and href",
    "toolkit-to-canopee.md",
  ],
  CSS_ORDER: [
    "project stylesheets load before the Canopée CSS",
    "packages-and-css.md",
  ],
  TK_ACTION_CLASS: [
    "project rule on an Action class: Canopée styles .btn.af-btn--circle",
    "toolkit-to-canopee.md",
  ],
  TK_COLLAPSECARD: ["CollapseCard API changed", "toolkit-to-canopee.md"],
  TK_POPOVER: ["Popover.Pop / Popover.Over removed", "toolkit-to-canopee.md"],
  TK_MODAL: [
    "toolkit 2.x Modal (isOpen, Modal.Header) became a native <dialog>",
    "toolkit-to-canopee.md",
  ],
  TK_DATE: [
    "DateInput: native onChange and UTC display",
    "toolkit-to-canopee.md",
  ],
  BUTTON_CLASSMODIFIER: [
    "Button classModifier removed since Slash 2.0",
    "toolkit-to-canopee.md",
  ],
  BUTTON_CLASSNAME: [
    "toolkit Button whose className replaced af-btn: Canopée adds af-btn",
    "toolkit-to-canopee.md",
  ],
  EXPORT_MISSING: [
    "name not exported by the target entry point",
    "packages-and-css.md",
  ],
  OLD_LF: [
    "old Look & Feel package (Sass era) has no 1:1 target",
    "packages-and-css.md",
  ],
  DS0: [
    "@axa-fr/design-system-react 0.x entry without 1:1 target",
    "packages-and-css.md",
  ],
  CSS_MISSING: [
    "stylesheet path without a 1:1 file in @axa-fr/canopee-css",
    "packages-and-css.md",
  ],
  SASS: [
    "Sass import from an old package: no Sass in Canopée",
    "packages-and-css.md",
  ],
  SASS_VAR: [
    "toolkit Sass variable: replace it exactly as written",
    "packages-and-css.md",
  ],
  SASS_MIXIN: [
    "toolkit Sass mixin or function: replace it exactly as written",
    "packages-and-css.md",
  ],
  SASS_VALUE: [
    "toolkit Sass variable redefined with another value",
    "packages-and-css.md",
  ],
  TOKEN_REMOVED: [
    "CSS custom property removed from Canopée",
    "packages-and-css.md",
  ],
  OLD_STRING: [
    "old package name outside an import (version lookup, config, URL)",
    "packages-and-css.md",
  ],
  NO_CAST: [
    "cast or checker suppression added since --write",
    "packages-and-css.md",
  ],
  REMOVED_2: ["export removed in 2.0", "canopee-1-to-2.md"],
  CLASSMODIFIER: ["classModifier removed in 2.0", "canopee-1-to-2.md"],
  PROP_REMOVED_2: ["deprecated prop removed in 2.0", "canopee-1-to-2.md"],
  PROP_CONFLICT: ["old and new prop both present", "canopee-1-to-2.md"],
  LOADER_2: ["distributeur Loader has a new API in 2.0", "canopee-1-to-2.md"],
  FIELD_2: ["distributeur Field has a new API in 2.0", "canopee-1-to-2.md"],
  CARDRADIO_2: ["CardRadio changes meaning in 2.0", "canopee-1-to-2.md"],
};

// ---------------------------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------------------------

function fail(msg) {
  process.stderr.write(`canopee-migrate: ${msg}\n`);
  process.exit(2);
}
function parseArgs(argv) {
  const o = {
    dir: ".",
    target: 1,
    write: false,
    json: false,
    all: false,
    check: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--write") o.write = true;
    else if (a === "--check") o.check = true;
    else if (a === "--json") o.json = true;
    else if (a === "--all") o.all = true;
    else if (a === "--report") o.report = argv[++i];
    else if (a.startsWith("--report=")) o.report = a.slice(9);
    else if (a === "--target") o.target = Number(argv[++i]);
    else if (a.startsWith("--target=")) o.target = Number(a.slice(9));
    else if (a === "-h" || a === "--help") o.help = true;
    else if (a.startsWith("-")) fail(`unknown option ${a} (see --help)`);
    else o.dir = a;
  }
  if (![1, 2].includes(o.target)) fail("--target must be 1 or 2");
  if (o.check && (o.write || o.json))
    fail("--check runs alone: first --write, then --check");
  return o;
}
const majorOf = (range) => {
  const m =
    /(\d+)\./.exec(String(range)) || /^\D*(\d+)\D*$/.exec(String(range));
  return m ? Number(m[1]) : null;
};
function lineOf(text, index) {
  let n = 1;
  for (
    let i = text.indexOf("\n");
    i !== -1 && i < index;
    i = text.indexOf("\n", i + 1)
  )
    n++;
  return n;
}
function exportsOf(u, target) {
  const e = EXPORTS[u];
  if (target === 1) return e.v1;
  const s = new Set([...e.v1].filter((n) => !e.removedIn2.has(n)));
  for (const n of e.addedIn2) s.add(n);
  return s;
}

// ---------------------------------------------------------------------------------------------
// File discovery and project facts
// ---------------------------------------------------------------------------------------------

const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  "build",
  "coverage",
  "storybook-static",
  "out",
]);
const CODE_EXT = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".mts",
  ".cts",
]);
const JSX_EXT = new Set([".js", ".jsx", ".tsx"]);
const STYLE_EXT = new Set([".css", ".scss", ".sass", ".less"]);

// A folder with its own package.json is another package (a template copied by a script, an example,
// another application): it is not scanned, only its package.json is read for the NOTE. A workspace
// root (workspaces, pnpm-workspace.yaml, lerna.json) keeps the old behaviour and scans everything.
function walk(root, skip, scanNested = false) {
  const out = { code: [], style: [], pkg: [], leftover: [] };
  const stack = [[root, false]];
  while (stack.length) {
    const [dir, inOther] = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (
          SKIP_DIRS.has(e.name) ||
          (e.name.startsWith(".") && e.name !== ".storybook")
        )
          continue;
        if (p === skip) continue;
        stack.push([
          p,
          inOther ||
            (!scanNested && fs.existsSync(path.join(p, "package.json"))),
        ]);
      } else if (e.isFile()) {
        if (e.name === "package.json") out.pkg.push(p);
        // inside another package: only its package.json files are read (NOTE)
        if (inOther) continue;
        // backup copies left by hand edits (sed -i.bak, patch, editors)
        if (/\.(bak|orig|rej)$|~$/.test(e.name)) out.leftover.push(p);
        if (e.name.endsWith(".d.ts")) continue;
        const ext = path.extname(e.name).toLowerCase();
        if (CODE_EXT.has(ext)) out.code.push(p);
        else if (STYLE_EXT.has(ext)) out.style.push(p);
      }
    }
  }
  out.code.sort();
  out.style.sort();
  return out;
}

function readDeps(pkgFiles) {
  const deps = new Map();
  for (const f of pkgFiles) {
    let j;
    try {
      j = JSON.parse(fs.readFileSync(f, "utf8"));
    } catch {
      continue;
    }
    for (const k of ["dependencies", "devDependencies", "peerDependencies"]) {
      for (const [n, r] of Object.entries(j[k] || {}))
        if (!deps.has(n)) deps.set(n, String(r));
    }
  }
  return deps;
}

function packageManager(root) {
  if (fs.existsSync(path.join(root, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(root, "yarn.lock"))) return "yarn";
  return "npm";
}

// ---------------------------------------------------------------------------------------------
// Module specifiers
// ---------------------------------------------------------------------------------------------

// Returns null (not a design-system module) or a description of the module.
function classify(spec) {
  const clean = spec.replace(/^~/, "");
  if (REACT_ENTRIES[clean]) return { kind: "react", ...REACT_ENTRIES[clean] };
  if (MANUAL_ENTRIES[clean])
    return { kind: "manual", code: MANUAL_ENTRIES[clean] };
  let m = /^@axa-fr\/react-toolkit-([a-z-]+)(\/.*)?$/.exec(clean);
  if (m) {
    if (!m[2]) return { kind: "toolkit", pkg: m[1], u: "distributeur" };
    return { kind: "asset", family: "toolkit", pkg: m[1], sub: m[2].slice(1) };
  }
  m =
    /^@axa-fr\/(design-system-slash-css|design-system-apollo-css|design-system-look-and-feel-css|design-system-css|canopee-css)(\/.*)?$/.exec(
      clean,
    );
  if (m) return { kind: "asset", family: m[1], sub: m[2] ? m[2].slice(1) : "" };
  if (
    /^@axa-fr\/design-system-(slash|apollo|look-and-feel)-react\//.test(clean)
  )
    return { kind: "manual", code: "EXPORT_MISSING" };
  return null;
}

// Maps an asset path (CSS, SCSS, SVG) to its Canopée path. Returns { to } or { code, hint } or null.
// fromCode: the stylesheet is imported from a JS/TS file (import "x.scss"), not from a stylesheet.
function mapAsset(info, target, usesToolkitReact, fromCode = false) {
  const { family, sub } = info;
  const isSass = /\.s[ac]ss$/.test(sub);
  const logo = "@axa-fr/canopee-css/logo-axa.svg";
  const exists = (p) =>
    CSS_FILES_1.has(p) && !(target === 2 && CSS_REMOVED_IN_2.has(p));
  // 2.0 renamed a few B2C files; returns the new path, or null.
  const css2 = (p) => {
    if (target !== 2 || !CSS_REMOVED_IN_2.has(p)) return null;
    const r = p
      .replace(/common\/rebootLF\.css$/, "common/reboot.css")
      .replace(
        /Form\/ItemMessage\/ItemMessage(LF|Apollo)\.css$/,
        "Form/ItemMessage/ItemMessageAll.css",
      )
      .replace(
        /Form\/Radio\/CardRadioOption\/CardRadioOption(LF|Apollo)\.css$/,
        "Form/Radio/CardRadio/CardRadio$1.css",
      )
      .replace(
        /Skeleton\/Skeleton(LF|Apollo)\.css$/,
        "Skeleton/SkeletonAll.css",
      );
    return r !== p ? r : null;
  };
  if (/(^|\/)logo-axa\.svg$/.test(sub)) return { to: logo };
  if (family === "toolkit") {
    // imported from JS, a toolkit .scss (af-components.scss) is a whole stylesheet, like its .css
    if (isSass && !fromCode)
      return {
        code: "SASS",
        hint: "toolkit Sass: delete this import, then replace what SASS_VAR and SASS_MIXIN list for this file",
      };
    if (/\.css$/.test(sub) || isSass)
      return usesToolkitReact
        ? { remove: true }
        : {
            code: "CSS_MISSING",
            hint: "toolkit CSS: import @axa-fr/canopee-css/distributeur/distributeur.css instead",
          };
    return { code: "CSS_MISSING", hint: "toolkit asset without equivalent" };
  }
  if (family === "canopee-css") {
    const p = sub;
    if (target === 2 && CSS_REMOVED_IN_2.has(p)) {
      const r = css2(p);
      return r
        ? { to: `${CSS_PKG}/${r}` }
        : { code: "CSS_MISSING", hint: "removed in 2.0 (component removed)" };
    }
    return null;
  }
  // The only Sass file of Apollo is published unchanged by Canopée.
  if (
    family === "design-system-apollo-css" &&
    /^(dist\/)?common\/breakpoints\.scss$/.test(sub)
  )
    return { to: `${CSS_PKG}/prospect/common/breakpoints.scss` };
  if (isSass)
    return {
      code: "SASS",
      hint: "Sass removed (Slash 3.0, Look & Feel 3.0): use the CSS custom properties of <universe>/common/tokens.css",
    };
  if (family === "design-system-slash-css") {
    const rest = sub.replace(/^dist\//, "");
    const p =
      rest === "slash.css"
        ? "distributeur/distributeur.css"
        : `distributeur/${rest}`;
    if (exists(p)) return { to: `${CSS_PKG}/${p}` };
    const r = css2(p);
    return r
      ? { to: `${CSS_PKG}/${r}` }
      : {
          code: "CSS_MISSING",
          hint: "no file at this path in @axa-fr/canopee-css/distributeur",
        };
  }
  if (family === "design-system-apollo-css") {
    const rest = sub.replace(/^dist\//, "");
    let p;
    if (rest === "apollo.css") p = "prospect/prospect.css";
    else if (rest === "look-and-feel.css") p = "client/client.css";
    else if (rest === "common/tokensLF.css") p = "client/common/tokens.css";
    else if (/LF\.css$/.test(rest)) p = `client/${rest}`;
    else p = `prospect/${rest}`;
    if (exists(p)) return { to: `${CSS_PKG}/${p}` };
    const r = css2(p);
    return r
      ? { to: `${CSS_PKG}/${r}` }
      : {
          code: "CSS_MISSING",
          hint: "no file at this path in @axa-fr/canopee-css (CardRadio was renamed CardRadioGroup in 1.x)",
        };
  }
  if (family === "design-system-look-and-feel-css")
    return {
      code: "OLD_LF",
      hint: "old Look & Feel CSS: the client universe is @axa-fr/canopee-css/client/client.css (different styles)",
    };
  return { code: "DS0", hint: "@axa-fr/design-system-css 0.x has no 1:1 file" };
}

// ---------------------------------------------------------------------------------------------
// Import parsing
// ---------------------------------------------------------------------------------------------

const IMPORT_RE =
  /^([ \t]*)(import|export)(\s+type)?\s+([^;'"]*?)\s*from\s*(['"])([^'"\n]+)\5[ \t]*;?/gm;
const SIDE_EFFECT_RE =
  /^([ \t]*)import\s*(['"])([^'"\n]+)\2[ \t]*;?[ \t]*\r?\n?/gm;
const CALL_RE =
  /\b(require|import|jest\.mock|vi\.mock|jest\.doMock|vi\.doMock|jest\.requireActual|vi\.importActual|jest\.unmock|vi\.unmock)\s*\(\s*(['"])([^'"\n]+)\2/g;
const CSS_IMPORT_RE =
  /@(import|use|forward)\s+(?:url\(\s*)?(['"])([^'"\n]+)\2\s*\)?[^;\n]*;?[ \t]*\r?\n?/g;
const CSS_URL_RE = /url\(\s*(['"]?)(~?@axa-fr\/[^'")\s]+)\1\s*\)/g;

// Parses an import/export clause. Returns null when unsupported.
function parseClause(kind, clause) {
  const c = clause.trim();
  const res = { def: null, ns: null, named: [], star: false };
  if (kind === "export") {
    if (c === "*") return { ...res, star: true };
    if (/^\*\s+as\s+\w+$/.test(c)) return { ...res, ns: c.split(/\s+/)[2] };
  }
  let rest = c;
  const nsM =
    /^(?:([A-Za-z_$][\w$]*)\s*,\s*)?\*\s+as\s+([A-Za-z_$][\w$]*)$/.exec(rest);
  if (nsM) return { ...res, def: nsM[1] || null, ns: nsM[2] };
  const defM = /^([A-Za-z_$][\w$]*)\s*(?:,\s*|$)/.exec(rest);
  if (defM && !rest.startsWith("{")) {
    res.def = defM[1];
    rest = rest.slice(defM[0].length).trim();
  }
  if (!rest) return res;
  const brace = /^\{([\s\S]*)\}$/.exec(rest);
  if (!brace) return null;
  for (const raw of brace[1].split(",")) {
    const s = raw
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "")
      .trim();
    if (!s) continue;
    const m =
      /^(type\s+)?([A-Za-z_$][\w$]*)(?:\s+as\s+([A-Za-z_$][\w$]*))?$/.exec(s);
    if (!m) return null;
    res.named.push({ type: !!m[1], imported: m[2], local: m[3] || m[2] });
  }
  return res;
}

function specText(s) {
  return `${s.type ? "type " : ""}${s.imported === s.local ? s.local : `${s.imported} as ${s.local}`}`;
}
function formatNamed(
  kind,
  typeOnly,
  specs,
  module,
  indent,
  quote,
  semi,
  multiline,
) {
  const kw = `${kind}${typeOnly ? " type" : ""}`;
  const parts = specs.map(specText);
  const one = `${indent}${kw} { ${parts.join(", ")} } from ${quote}${module}${quote}${semi}`;
  if (!multiline && one.length <= 100) return one;
  return `${indent}${kw} {\n${parts.map((p) => `${indent}  ${p},`).join("\n")}\n${indent}} from ${quote}${module}${quote}${semi}`;
}

// ---------------------------------------------------------------------------------------------
// JSX opening tags
// ---------------------------------------------------------------------------------------------

function skipString(text, i) {
  const q = text[i];
  for (let k = i + 1; k < text.length; k++) {
    const c = text[k];
    if (c === "\\") {
      k++;
      continue;
    }
    if (q === "`" && c === "$" && text[k + 1] === "{") {
      const e = skipBraces(text, k + 1);
      if (e < 0) return -1;
      k = e - 1;
      continue;
    }
    if (c === q) return k;
    if (c === "\n" && q !== "`") return -1;
  }
  return -1;
}
// text[i] === "{" ; returns the index after the matching "}" or -1.
function skipBraces(text, i) {
  let depth = 0;
  let prev = "{";
  for (let k = i; k < text.length; k++) {
    const c = text[k];
    if (
      (c === '"' || c === "'" || c === "`") &&
      (c === "`" || !/[\w>]/.test(prev))
    ) {
      const e = skipString(text, k);
      if (e < 0) return -1;
      k = e;
      prev = c;
      continue;
    }
    if (c === "/" && text[k + 1] === "/") {
      const e = text.indexOf("\n", k);
      if (e < 0) return -1;
      k = e;
      continue;
    }
    if (c === "/" && text[k + 1] === "*") {
      const e = text.indexOf("*/", k + 2);
      if (e < 0) return -1;
      k = e + 1;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return k + 1;
    }
    if (!/\s/.test(c)) prev = c;
  }
  return -1;
}
function parseAttributes(text, i) {
  const attrs = [];
  const n = text.length;
  while (i < n) {
    const c = text[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    if (c === "/" && text[i + 1] === ">") return { attrs, end: i + 2 };
    if (c === ">") return { attrs, end: i + 1 };
    if (c === "/" && text[i + 1] === "*") {
      const j = text.indexOf("*/", i + 2);
      if (j < 0) return null;
      i = j + 2;
      continue;
    }
    if (c === "{") {
      const j = skipBraces(text, i);
      if (j < 0) return null;
      attrs.push({ spread: true, start: i, end: j });
      i = j;
      continue;
    }
    const nm = /^[A-Za-z_$][\w$:-]*/.exec(text.slice(i, i + 100));
    if (!nm) return null;
    const name = nm[0];
    const start = i;
    i += name.length;
    let j = i;
    while (j < n && /\s/.test(text[j])) j++;
    if (text[j] !== "=") {
      attrs.push({ name, start, end: i, kind: "bool" });
      continue;
    }
    j++;
    while (j < n && /\s/.test(text[j])) j++;
    const q = text[j];
    if (q === '"' || q === "'") {
      const k = text.indexOf(q, j + 1);
      if (k < 0) return null;
      attrs.push({
        name,
        start,
        end: k + 1,
        kind: "string",
        value: text.slice(j + 1, k),
      });
      i = k + 1;
    } else if (q === "{") {
      const k = skipBraces(text, j);
      if (k < 0) return null;
      const expr = text.slice(j + 1, k - 1).trim();
      const lit =
        /^(['"])([^'"\\]*)\1$/.exec(expr) || /^`([^`$\\]*)`$/.exec(expr);
      if (lit)
        attrs.push({
          name,
          start,
          end: k,
          kind: "string",
          value: lit[2] ?? lit[1],
        });
      else attrs.push({ name, start, end: k, kind: "expr", value: expr });
      i = k;
    } else return null;
  }
  return null;
}
function* jsxTags(text, locals) {
  const re = /<([A-Z][\w$]*)((?:\.[A-Za-z_$][\w$]*)*)(?=[\s/>])/g;
  let m;
  while ((m = re.exec(text))) {
    if (!locals.has(m[1])) continue;
    const parsed = parseAttributes(text, re.lastIndex);
    if (!parsed) continue;
    yield {
      local: m[1],
      member: m[2] ? m[2].slice(1) : "",
      start: m.index,
      ...parsed,
    };
  }
}

// ---------------------------------------------------------------------------------------------
// Analysis of one code file
// ---------------------------------------------------------------------------------------------

function analyzeCode(file, text, ctx) {
  const edits = [];
  const items = [];
  const locals = new Map(); // local name -> { u, name, name1, origin }
  const tkEnumLocals = new Map(); // local -> enum name
  const ext = path.extname(file).toLowerCase();
  const add = (index, code, detail, breaksIn = 1, spec = undefined) =>
    items.push({
      file,
      index,
      line: lineOf(text, index),
      code,
      detail,
      breaksIn,
      spec,
    });
  const usesTkCss = ctx.usesToolkitReact;
  const target = ctx.target;
  const rewritten = []; // statements rewritten to a Canopée entry point, for merging
  const crlf = text.includes("\r\n");
  const actionClasses = []; // { file, index, line, cls }: project classes on an <Action>

  // Maps one imported name. Returns { name } (Canopée name), or { code, hint }.
  function mapName(mod, imported, isDefault) {
    const u = mod.u;
    let note = null;
    const avail = exportsOf(u, target);
    let name = imported;
    let name1 = imported;
    if (mod.kind === "toolkit") {
      if (isDefault) name = TK_DEFAULT[mod.pkg];
      else if (TK_PKG_RENAME[mod.pkg]?.[imported])
        name = TK_PKG_RENAME[mod.pkg][imported];
      if (!name)
        return {
          code: "TK_REMOVED",
          hint: `default export of @axa-fr/react-toolkit-${mod.pkg}: no equivalent`,
        };
      if (TK_ENUMS[name]) return { enumName: name };
      if (TK_NO_TARGET[name] !== undefined)
        return { code: "TK_REMOVED", hint: `${name}: ${TK_NO_TARGET[name]}` };
      if (mod.pkg === "form-input-card")
        return { code: "TK_REMOVED", hint: `${name}: ${TK_NO_TARGET.Card}` };
      name = TK_RENAME[name] || name;
      name1 = name;
    } else if (mod.origin === "oldlf") {
      if (!avail.has(name))
        return {
          code: "OLD_LF",
          hint: `${name}: not exported by ${REACT_PKG}/client`,
        };
      return { name, name1 };
    } else {
      const alias = ALIASES[u]?.[name];
      if (alias) name = alias;
      // CardRadio is renamed only when the project is known to be on 1.x semantics.
      const known1 =
        mod.origin === "apollo" ||
        (mod.origin === "canopee" &&
          mod.canopeeMajor !== 2 &&
          (mod.canopeeMajor === 1 || ctx.fromApollo || ctx.state.cardRadio1));
      const crDone = ctx.state.cardRadio1 || ctx.state.cardRadio2;
      if (
        u !== "distributeur" &&
        !known1 &&
        !crDone &&
        mod.canopeeMajor !== 2 &&
        target === 2 &&
        (name === "CardRadio" || name === "CardRadioOption")
      ) {
        note = {
          code: "CARDRADIO_2",
          hint: `${name}: version of ${REACT_PKG} unknown; in 1.x CardRadio is the group (-> CardRadioGroup) and CardRadioOption the option (-> CardRadio)`,
          breaksIn: 2,
        };
      }
      if (u !== "distributeur" && known1) {
        if (
          CARDRADIO_1[name] &&
          !ctx.state.cardRadio1 &&
          !ctx.state.cardRadio2
        ) {
          name = CARDRADIO_1[name];
          ctx.applied.cardRadio1 = true;
        } else if (target === 2 && CARDRADIO_2[name] && !ctx.state.cardRadio2) {
          name = CARDRADIO_2[name];
          ctx.applied.cardRadio2 = true;
        }
      }
      // after the renames above, a B2C `CardRadio` is always the option (CardRadioOption in 1.x)
      name1 =
        u !== "distributeur" && name === "CardRadio" ? "CardRadioOption" : name;
    }
    if (!avail.has(name)) {
      if (note) return note;
      if (target === 2 && REMOVED_2[name])
        return {
          code: "REMOVED_2",
          hint: `${name}: ${REMOVED_2[name]}`,
          breaksIn: 2,
        };
      return {
        code: "EXPORT_MISSING",
        hint: `${name}: ${OTHER_HINTS[name] || `not exported by ${REACT_PKG}/${u}`}`,
      };
    }
    return { name, name1, note };
  }

  // 1. import / export ... from
  IMPORT_RE.lastIndex = 0;
  let m;
  while ((m = IMPORT_RE.exec(text))) {
    const [full, indent, kind, typeKw, clause, quote, spec] = m;
    const mod0 = classify(spec);
    if (!mod0) continue;
    const start = m.index;
    const end = start + full.length;
    if (mod0.kind === "manual") {
      add(start, mod0.code, `${spec}: rewrite by hand`);
      continue;
    }
    if (mod0.kind === "asset") continue;
    const mod = { ...mod0, canopeeMajor: ctx.canopeeMajor };
    const parsed = parseClause(kind, clause);
    const targetModule = `${REACT_PKG}/${mod.u}`;
    if (!parsed) {
      add(
        start,
        "TK_NAMESPACE",
        `${spec}: import form not understood, rewrite by hand`,
      );
      continue;
    }
    if (parsed.ns || parsed.star) {
      if (
        mod.kind === "react" &&
        mod.origin !== "canopee" &&
        mod.origin !== "oldlf"
      ) {
        edits.push({
          start: m.index + full.lastIndexOf(spec),
          end: m.index + full.lastIndexOf(spec) + spec.length,
          text: targetModule,
          kind: "import",
        });
      } else if (mod.origin !== "canopee")
        add(
          start,
          "TK_NAMESPACE",
          `${spec}: \`${parsed.ns ? `* as ${parsed.ns}` : "*"}\` cannot be mapped name by name`,
        );
      continue;
    }
    const keep = []; // specs staying on the old module
    const moved = []; // specs for the target module
    const all = [];
    if (parsed.def)
      all.push({
        type: false,
        imported: "default",
        local: parsed.def,
        isDefault: true,
      });
    for (const s of parsed.named)
      all.push({ ...s, isDefault: s.imported === "default" });
    let renamed = false;
    for (const s of all) {
      if (s.isDefault && mod.kind !== "toolkit") {
        keep.push(s);
        add(
          start,
          "EXPORT_MISSING",
          `${spec}: default import \`${s.local}\` (Canopée has named exports only)`,
          1,
          spec,
        );
        continue;
      }
      const r = mapName(mod, s.imported, s.isDefault);
      if (r.enumName) {
        tkEnumLocals.set(s.local, r.enumName);
        keep.push({ ...s, enumName: r.enumName });
        continue;
      }
      if (r.code) {
        keep.push(s);
        add(start, r.code, `${spec}: ${r.hint}`, r.breaksIn || 1, spec);
        continue;
      }
      if (r.note)
        add(start, r.note.code, `${spec}: ${r.note.hint}`, r.note.breaksIn);
      if (r.name !== s.imported) renamed = true;
      moved.push({ type: s.type, imported: r.name, local: s.local });
      locals.set(s.local, {
        u: mod.u,
        name: r.name,
        name1: r.name1,
        origin:
          mod.origin === "canopee"
            ? "canopee"
            : mod.kind === "toolkit"
              ? "toolkit"
              : mod.origin,
      });
    }
    const needed =
      mod.origin !== "canopee" ||
      renamed ||
      (keep.length > 0 && moved.length > 0);
    if (!needed) continue;
    rewritten.push({
      start,
      end,
      indent,
      kind,
      typeOnly: !!typeKw,
      quote,
      semi: /;\s*$/.test(full) ? ";" : "",
      spec,
      mod,
      moved,
      keep,
      targetModule,
      multiline: /\n/.test(clause),
      full,
    });
  }

  // 2. toolkit enums: PopoverModes.over -> "hover"
  const enumOk = new Set();
  for (const [local, en] of tkEnumLocals) {
    const map = TK_ENUMS[en];
    const re = new RegExp(
      `(?<![\\w$.])${local.replace(/\$/g, "\\$")}\\b(\\.([A-Za-z_$][\\w$]*))?`,
      "g",
    );
    const uses = [];
    let ok = true;
    let k;
    while ((k = re.exec(text))) {
      if (rewritten.some((r) => k.index >= r.start && k.index < r.end))
        continue;
      if (!k[2] || map[k[2]] === undefined) {
        ok = false;
        add(
          k.index,
          "TK_ENUM",
          `${local}${k[1] || ""}: use the string value instead (${Object.entries(
            map,
          )
            .map(([a, b]) => `${a} -> "${b}"`)
            .join(", ")})`,
        );
        continue;
      }
      let es = k.index;
      let ee = k.index + k[0].length;
      const before = /=\s*\{\s*$/.exec(text.slice(Math.max(0, es - 20), es));
      const after = /^\s*\}/.exec(text.slice(ee, ee + 20));
      if (before && after) {
        es -= before[0].length - before[0].indexOf("{");
        ee += after[0].length;
      }
      uses.push({
        start: es,
        end: ee,
        text: JSON.stringify(map[k[2]]),
        kind: "enum",
      });
    }
    if (ok) {
      enumOk.add(local);
      edits.push(...uses);
    }
  }

  // 3. emit rewritten import statements (merged per target module)
  const byTarget = new Map();
  for (const r of rewritten) {
    const key = `${r.kind}|${r.typeOnly}|${r.targetModule}`;
    if (!byTarget.has(key)) byTarget.set(key, []);
    byTarget.get(key).push(r);
  }
  for (const group of byTarget.values()) {
    const first = group[0];
    const merged = [];
    const seen = new Set();
    for (const r of group) {
      for (const s of r.moved) {
        const id = `${s.type}|${s.imported}|${s.local}`;
        if (!seen.has(id)) {
          seen.add(id);
          merged.push(s);
        }
      }
    }
    group.forEach((r, gi) => {
      const keep = r.keep.filter((s) => !(s.enumName && enumOk.has(s.local)));
      if (!r.moved.length && keep.length === r.keep.length) return;
      const lines = [];
      if (gi === 0 && merged.length)
        lines.push(
          formatNamed(
            r.kind,
            r.typeOnly,
            merged,
            r.targetModule,
            r.indent,
            r.quote,
            r.semi,
            r.multiline,
          ),
        );
      if (keep.length) {
        const def = keep.find((s) => s.isDefault);
        const named = keep.filter((s) => !s.isDefault);
        const kw = `${r.kind}${r.typeOnly ? " type" : ""}`;
        const parts = [];
        if (def) parts.push(def.local);
        if (named.length) parts.push(`{ ${named.map(specText).join(", ")} }`);
        lines.push(
          `${r.indent}${kw} ${parts.join(", ")} from ${r.quote}${r.spec}${r.quote}${r.semi}`,
        );
      }
      let end = r.end;
      let text2 = lines.join("\n");
      if (crlf) text2 = text2.replace(/\r?\n/g, "\r\n");
      if (!lines.length) {
        // drop the whole line
        if (text[end] === "\r") end++;
        if (text[end] === "\n") end++;
      }
      if (text2 !== r.full)
        edits.push({ start: r.start, end, text: text2, kind: "import" });
    });
    void first;
  }

  // 4. side-effect imports (CSS, SVG...) and require/mock calls
  // The toolkit stylesheet usually sat in the entry file before the project's own stylesheets,
  // which override it. Deleting it moves the Canopée CSS to the first component import, after
  // those stylesheets: every project rule as specific as a Canopée one would silently lose. The
  // first one of a file becomes the Canopée entry point, which brings all the Canopée CSS there.
  let keepCssPlace =
    !/(^|[\\/])(__tests__|__mocks__)[\\/]|\.(test|spec|stories)\.[cm]?[jt]sx?$|setupTests/.test(
      file,
    ) &&
    !/\bfrom\s*['"]@axa-fr\/(react-toolkit-|canopee-react\b|design-system-)/.test(
      text,
    );
  SIDE_EFFECT_RE.lastIndex = 0;
  while ((m = SIDE_EFFECT_RE.exec(text))) {
    const spec = m[3];
    const info = classify(spec);
    if (!info) continue;
    if (info.kind !== "asset") continue;
    const r = mapAsset(info, target, ctx.usesToolkitReact, true);
    if (!r) continue;
    const specStart = m.index + m[0].indexOf(spec);
    if (r.remove) {
      const eol = /\r?\n$/.exec(m[0])?.[0] || "";
      edits.push({
        start: m.index,
        end: m.index + m[0].length,
        text: keepCssPlace
          ? `${m[1]}import ${m[2]}${REACT_PKG}/distributeur${m[2]}${/;/.test(m[0]) ? ";" : ""}${eol}`
          : "",
        kind: "css",
      });
      keepCssPlace = false;
    } else if (r.to)
      edits.push({
        start: specStart,
        end: specStart + spec.length,
        text: r.to,
        kind: "css",
      });
    else add(m.index, r.code, `${spec}: ${r.hint}`);
  }
  CALL_RE.lastIndex = 0;
  while ((m = CALL_RE.exec(text))) {
    const spec = m[3];
    const info = classify(spec);
    if (!info) continue;
    const specStart = m.index + m[0].lastIndexOf(spec);
    if (info.kind === "react") {
      if (info.origin === "canopee") continue;
      if (info.origin === "oldlf") {
        add(m.index, "OLD_LF", `${m[1]}("${spec}"): rewrite by hand`);
        continue;
      }
      edits.push({
        start: specStart,
        end: specStart + spec.length,
        text: `${REACT_PKG}/${info.u}`,
        kind: "import",
      });
    } else if (info.kind === "asset") {
      const r = mapAsset(info, target, false);
      if (r?.to)
        edits.push({
          start: specStart,
          end: specStart + spec.length,
          text: r.to,
          kind: "css",
        });
      else if (r)
        add(
          m.index,
          r.code || "CSS_MISSING",
          `${spec}: ${r.hint || "no 1:1 target"}`,
        );
    } else
      add(
        m.index,
        "TK_NAMESPACE",
        `${m[1]}("${spec}"): rewrite by hand with ${REACT_PKG}/${info.u || "distributeur"}`,
      );
  }
  // asset imports with a binding: import logo from "...logo-axa.svg"
  IMPORT_RE.lastIndex = 0;
  while ((m = IMPORT_RE.exec(text))) {
    const spec = m[6];
    const info = classify(spec);
    if (!info || info.kind !== "asset") continue;
    const r = mapAsset(info, target, false);
    const specStart = m.index + m[0].lastIndexOf(spec);
    if (r?.to)
      edits.push({
        start: specStart,
        end: specStart + spec.length,
        text: r.to,
        kind: "css",
      });
    else if (r)
      add(
        m.index,
        r.code || "CSS_MISSING",
        `${spec}: ${r.hint || "no 1:1 target"}`,
      );
  }
  // 4b. an old package name outside an import: version lookup, bundler or test setting, comment
  {
    const covered = [];
    for (const re of [IMPORT_RE, SIDE_EFFECT_RE, CALL_RE]) {
      re.lastIndex = 0;
      let c;
      while ((c = re.exec(text)))
        covered.push([c.index, c.index + c[0].length]);
      re.lastIndex = 0;
    }
    const re =
      /(['"`])(@axa-fr\/(?:react-toolkit-|design-system-)[^'"`\s]*)\1/g;
    let o;
    while ((o = re.exec(text))) {
      const at = o.index;
      if (covered.some(([a, b]) => at >= a && at < b)) continue;
      const spec = o[2];
      const ver = ctx.oldVersions?.[spec];
      add(
        at,
        "OLD_STRING",
        `"${spec}" outside an import: a version lookup (dependencies["${spec}"]) becomes the old version as text${ver ? ` ("${ver}")` : ""} and the URL around it stays; a bundler or test setting takes the Canopée package; a comment: update it. Never write a new URL or repository: unsure, keep the line and ask (STOP)`,
      );
    }
  }

  // 5. JSX rules
  if (JSX_EXT.has(ext) && locals.size) {
    let dateField = false;
    for (const tag of jsxTags(text, locals)) {
      const info = locals.get(tag.local);
      if (
        info.u === "distributeur" &&
        (info.name === "Date" || info.name === "DateInput")
      )
        dateField = true;
      jsxRules(text, tag, info, {
        add,
        edits,
        target,
        fromToolkit: ctx.fromToolkit,
        toolkitMajor: ctx.toolkitMajor,
        actionClass: (index, cls) =>
          actionClasses.push({ file, index, line: lineOf(text, index), cls }),
      });
    }
    // Canopée shows value.toISOString(): a date built at local midnight shows the day before in
    // France. Literal dates only, so the line disappears once written with Date.UTC.
    if (dateField && ctx.fromToolkit) {
      const re = /new Date\(\s*(\d{4})\s*,\s*(\d{1,2})\s*,\s*(\d{1,2})\s*\)/g;
      let d;
      while ((d = re.exec(text)))
        add(
          d.index,
          "TK_DATE",
          `${d[0]} is local midnight: DateInput shows the day before; write new Date(Date.UTC(${d[1]}, ${d[2]}, ${d[3]}))`,
        );
    }
  }
  // 6. member renames: Table.Header -> Table.THead ; toolkit sub-components
  for (const [local, info] of locals) {
    const esc = local.replace(/\$/g, "\\$");
    const re = new RegExp(`(?<![\\w$.])${esc}\\.([A-Za-z_$][\\w$]*)`, "g");
    let k;
    while ((k = re.exec(text))) {
      const member = k[1];
      const mStart = k.index + local.length + 1;
      if (
        info.u === "distributeur" &&
        info.name === "Table" &&
        (member === "Header" || member === "Body")
      ) {
        edits.push({
          start: mStart,
          end: mStart + member.length,
          text: member === "Header" ? "THead" : "TBody",
          kind: "member",
        });
      } else if (
        info.u === "distributeur" &&
        info.name === "CollapseCard" &&
        (member === "Header" || member === "Body")
      ) {
        add(
          k.index,
          "TK_COLLAPSECARD",
          `${local}.${member}: move the header into title="..." and the body into children`,
        );
      } else if (
        info.u === "distributeur" &&
        info.name === "Modal" &&
        Object.hasOwn(MODAL_MEMBERS, member) &&
        text.slice(k.index - 2, k.index) !== "</"
      ) {
        add(
          k.index,
          "TK_MODAL",
          `${local}.${member}: use <${MODAL_MEMBERS[member]}>, imported from ${REACT_PKG}/distributeur`,
        );
      } else if (
        info.u === "distributeur" &&
        info.name === "Popover" &&
        (member === "Pop" || member === "Over")
      ) {
        add(
          k.index,
          "TK_POPOVER",
          `${local}.${member}: use popoverElement={...} for the content and children for the trigger`,
        );
      }
    }
  }
  return { edits, items, locals, actionClasses };
}

function jsxRules(
  text,
  tag,
  info,
  { add, edits, target, fromToolkit, toolkitMajor, actionClass },
) {
  const attr = (n) => tag.attrs.find((a) => a.name === n);
  const where = tag.start;
  const removeAttr = (a) => {
    let s = a.start;
    while (s > 0 && /[ \t]/.test(text[s - 1])) s--;
    if (text[s - 1] === "\n") {
      s = a.start;
      let e = a.end;
      while (/[ \t]/.test(text[e] || "")) e++;
      if (text[e] === "\n") e++;
      let ls = a.start;
      while (ls > 0 && /[ \t]/.test(text[ls - 1])) ls--;
      return { start: ls, end: e, text: "" };
    }
    return { start: s, end: a.end, text: "" };
  };
  const label = `<${tag.local}${tag.member ? `.${tag.member}` : ""}>`;
  if (tag.member) return;
  const name = info.name;
  const cm = attr("classModifier");
  // The toolkit Button used its className INSTEAD of "btn af-btn" and put the modifiers on its last
  // class (className="af-link" classModifier="download" -> "af-link af-link--download", no af-btn).
  // Canopée always adds af-btn, which paints such a button as a primary blue button.
  const cn = attr("className");
  const ownClass =
    name === "Button" &&
    fromToolkit &&
    cn?.kind === "string" &&
    !/(^|\s)af-btn(\s|$)/.test(cn.value)
      ? cn.value.trim().split(/\s+/).pop() || null
      : null;
  if (
    info.u === "distributeur" &&
    ownClass &&
    !cm &&
    !attr("variant") &&
    !tag.attrs.some((a) => a.spread)
  )
    add(
      where,
      "BUTTON_CLASSNAME",
      `${label} className="${cn.value}": the toolkit rendered these classes instead of "btn af-btn" (no button look); Canopée always adds af-btn (a primary blue button). ${/(^|\s)af-link(\s|$)/.test(cn.value) ? 'A link look: add variant="ghost" and keep className' : 'A link look: variant="ghost"; any other look is a design choice: STOP and ask'}`,
    );
  if (info.u === "distributeur") {
    if (name === "Button" && cm) {
      const toks =
        cm.kind === "string" ? cm.value.split(/\s+/).filter(Boolean) : null;
      const mapped =
        toks && !ownClass && toks.every((t) => BUTTON_MODIFIERS[t])
          ? toks.map((t) => BUTTON_MODIFIERS[t])
          : null;
      const variants = mapped
        ? mapped.filter((x) => x.startsWith("variant"))
        : [];
      const conflict =
        variants.length > 1 || (variants.length && attr("variant"));
      if (mapped && !conflict) {
        const extra = mapped.filter(
          (x) =>
            !(x === "small" && attr("small")) &&
            !(x === "disabled" && attr("disabled")),
        );
        edits.push(
          extra.length
            ? {
                start: cm.start,
                end: cm.end,
                text: extra.join(" "),
                kind: "prop",
              }
            : { ...removeAttr(cm), kind: "prop" },
        );
      } else {
        const icon = (t) =>
          `move the <i> child into ${/left/i.test(t) ? "leftIcon" : "rightIcon"}={...}`;
        // with its own className, every word was a class of that className, never a variant
        const advice = (t) =>
          ownClass
            ? `${t} -> className "${ownClass}--${t}"${/^hasicon(left|right)$/i.test(t) ? ` and ${icon(t)}` : ""}`
            : BUTTON_MODIFIERS[t]
              ? `${t} -> ${BUTTON_MODIFIERS[t]}`
              : /^hasicon(left|right)$/i.test(t)
                ? `${t} -> ${icon(t)}`
                : /^circle/.test(t)
                  ? `${t} -> use <Action> (round icon button)`
                  : `${t} -> no prop: className="af-btn--${t}"`;
        const own = ownClass
          ? `; className="${cn.value}" has no af-btn: the toolkit put the words on ${ownClass} and gave no button look; Canopée adds af-btn: ${/(^|\s)af-link(\s|$)/.test(cn.value) ? 'a link look, add variant="ghost"' : 'a link look takes variant="ghost", any other look is a design choice (STOP)'} (BUTTON_CLASSNAME)`
          : "";
        const detail =
          (toks
            ? toks.map(advice).join("; ") +
              (conflict && !ownClass ? "; only one variant" : "")
            : ownClass
              ? `expression: each word becomes the class "${ownClass}--WORD" (no buttonModifier: its words become af-btn--WORD), never a cast`
              : 'expression: buttonModifier helper ("Expression" in BUTTON_CLASSMODIFIER), never a cast') +
          own;
        add(
          where,
          "BUTTON_CLASSMODIFIER",
          `${label} classModifier=${cm.kind === "string" ? `"${cm.value}"` : "{...}"}: ${detail}`,
        );
      }
    } else if (name === "Message" && cm) {
      const v = cm.kind === "string" ? MESSAGE_VARIANTS[cm.value.trim()] : null;
      if (v && !attr("variant"))
        edits.push({
          start: cm.start,
          end: cm.end,
          text: `variant="${v}"`,
          kind: "prop",
        });
      else if (fromToolkit) {
        // The toolkit Alert rendered every modifier (af-alert--notification); Message only renders
        // af-alert--<variant>, and its classModifier type only accepts the variants.
        const toks =
          cm.kind === "string" ? cm.value.split(/\s+/).filter(Boolean) : null;
        const detail = toks
          ? toks
              .map((t) =>
                MESSAGE_VARIANTS[t]
                  ? `${t} -> variant="${MESSAGE_VARIANTS[t]}"`
                  : `${t} -> className="af-alert--${t}"`,
              )
              .join("; ")
          : 'expression: messageModifier helper ("Expression" in TK_ALERT_CLASSMODIFIER): variant for error | warning | info | success (danger -> warning), className="af-alert--WORD" for every other word, never a cast';
        add(
          where,
          "TK_ALERT_CLASSMODIFIER",
          `${label} classModifier=${toks ? `"${cm.value}"` : "{...}"}: ${detail}`,
        );
      } else
        add(
          where,
          "CLASSMODIFIER",
          `${label} classModifier: use variant="error" | "warning" | "info" | "success" (danger -> warning)`,
          2,
        );
    } else if (name === "Tag" && cm) {
      const v = cm.kind === "string" ? TAG_VARIANTS[cm.value.trim()] : null;
      if (v && !attr("variant"))
        edits.push({
          start: cm.start,
          end: cm.end,
          text: `variant="${v}"`,
          kind: "prop",
        });
      else
        add(
          where,
          "CLASSMODIFIER",
          `${label} classModifier: use variant (info -> information, danger -> warning)`,
          2,
        );
    } else if (cm) {
      add(
        where,
        "CLASSMODIFIER",
        `${label} classModifier=${cm.kind === "string" ? `"${cm.value}"` : "{...}"}: use the matching prop if one exists, otherwise className with the modifier class`,
        2,
      );
    }
    if (
      info.origin === "toolkit" &&
      toolkitMajor !== null &&
      toolkitMajor < 3 &&
      attr("onChange") &&
      ONCHANGE_HINTS[name] &&
      name !== "Date" &&
      name !== "DateInput"
    )
      add(where, "TK_ONCHANGE", `${label} onChange: ${ONCHANGE_HINTS[name]}`);
    if (name === "Message" && attr("iconClassName"))
      add(
        where,
        "TK_ALERT_ICON",
        `${label} iconClassName: remove it (the icon follows variant)`,
      );
    // toolkit Alert `icon` was a glyphicon name; Canopée Message `icon` is the URL of an SVG file
    const icon = name === "Message" ? attr("icon") : null;
    if (
      icon &&
      ((icon.kind === "string" && !/[./]/.test(icon.value)) ||
        (icon.kind !== "string" && info.origin === "toolkit"))
    )
      add(
        where,
        "TK_ALERT_ICON",
        `${label} icon${icon.kind === "string" ? `="${icon.value}"` : "={...}"}: remove it (Canopée icon is an SVG URL; the icon follows variant)`,
      );
    if (
      (name === "Modal" || name === "BooleanModal") &&
      fromToolkit &&
      (attr("isOpen") || attr("open"))
    )
      add(
        where,
        "TK_MODAL",
        `${label} ${attr("isOpen") ? "isOpen" : "open"}: native <dialog> now: pass ref, call showModal() / close() in an effect, add onClose`,
      );
    if (
      (name === "Date" || name === "DateInput") &&
      info.origin === "toolkit" &&
      (attr("value") || attr("defaultValue") || attr("onChange"))
    )
      add(
        where,
        "TK_DATE",
        `${label}: onChange gets the native event (date = e.target.valueAsDate, null when empty); value is shown as a UTC day`,
      );
    if (name === "Footer" && attr("copyright"))
      add(
        where,
        "TK_FOOTER",
        `${label} copyright="...": pass the text as children`,
      );
    // the project's own classes on an Action: Canopée styles it with two classes (.btn.af-btn--circle)
    if (name === "Action" && fromToolkit && actionClass) {
      const acn = attr("className");
      if (acn?.kind === "string")
        for (const c of acn.value.split(/\s+/))
          if (c && c !== "btn" && !/^af-btn--circle/.test(c))
            actionClass(where, c);
    }
    // still listed after the migration until both are there: role alone leaves a link that the
    // keyboard cannot reach (an <a> without href takes no focus)
    const noHref = !attr("href") && !attr("tabIndex");
    if (
      name === "Action" &&
      fromToolkit &&
      attr("onClick") &&
      !tag.attrs.some((a) => a.spread) &&
      (noHref || !attr("role"))
    )
      add(
        where,
        "TK_ACTION_ROLE",
        `${label} with onClick: add ${[noHref && 'href="#"', !attr("role") && 'role="button"'].filter(Boolean).join(" and ")} (the toolkit added both; without href the keyboard cannot reach it)`,
      );
    // Checked again after the migration: these compile but break the field.
    if ((name === "Date" || name === "DateInput") && fromToolkit) {
      const ch = attr("onChange");
      const v = ch && ch.kind === "expr" ? ch.value : "";
      if (/valueAsDate\s*(\|\||\?\?)/.test(v))
        add(
          where,
          "TK_DATE",
          `${label} onChange: valueAsDate || / ?? another date turns an empty field into that date: keep null (setX(e.target.valueAsDate)) and type the state Date | null`,
        );
      if (/new Date\(\s*[\w$.]*target\.value\s*\)/.test(v))
        add(
          where,
          "TK_DATE",
          `${label} onChange: new Date(e.target.value) is an Invalid Date while the field is empty (blank page): use e.target.valueAsDate`,
        );
    }
    if (
      name === "CollapseCard" &&
      (!attr("title") || !attr("id") || attr("isOpen"))
    )
      add(
        where,
        "TK_COLLAPSECARD",
        `${label}: id and title are required, isOpen -> open, no Header/Body children`,
      );
    for (const [p, hint] of Object.entries(DIST_REMOVED_PROPS_2[name] || {})) {
      const a = attr(p);
      if (a) add(where, "PROP_REMOVED_2", `${label} ${p}: ${hint}`, 2);
    }
    if (name === "Loader" && attr("mode"))
      add(
        where,
        "LOADER_2",
        `${label}: 2.0 Loader takes text and variant and is rendered only while loading (no mode)`,
        2,
      );
    if (name === "Field" && !attr("renderInput"))
      add(
        where,
        "FIELD_2",
        `${label}: in 2.0 Field is the new renderInput API; prefer the *Input components`,
        2,
      );
    return;
  }
  // prospect / client
  const renames = B2C_PROP_RENAMES[info.name1] || B2C_PROP_RENAMES[name] || {};
  for (const [oldP, newP] of Object.entries(renames)) {
    const a = attr(oldP);
    if (!a) continue;
    if (attr(newP)) {
      add(
        where,
        "PROP_CONFLICT",
        `${label} has both ${oldP} and ${newP}: keep ${newP} only`,
        2,
      );
      continue;
    }
    edits.push({
      start: a.start,
      end: a.start + oldP.length,
      text: newP,
      kind: "prop",
    });
  }
  // 2.0: B2C Radio `isInvalid` -> `variant="error"` (variant does not exist in 1.x).
  const inv = name === "Radio" && target === 2 ? attr("isInvalid") : null;
  if (inv && !attr("variant")) {
    if (inv.kind === "bool" || (inv.kind === "expr" && inv.value === "true"))
      edits.push({
        start: inv.start,
        end: inv.end,
        text: 'variant="error"',
        kind: "prop",
      });
    else if (inv.kind === "expr" && inv.value === "false")
      edits.push({ ...removeAttr(inv), kind: "prop" });
    else if (inv.kind === "expr")
      edits.push({
        start: inv.start,
        end: inv.end,
        text: `variant={${inv.value} ? "error" : undefined}`,
        kind: "prop",
      });
  } else if (inv)
    add(
      where,
      "PROP_CONFLICT",
      `${label} has both isInvalid and variant: keep variant only`,
      2,
    );
  const removed =
    B2C_REMOVED_PROPS_2[info.name1] || B2C_REMOVED_PROPS_2[name] || {};
  for (const [p, hint] of Object.entries(removed)) {
    if (attr(p)) add(where, "PROP_REMOVED_2", `${label} ${p}: ${hint}`, 2);
  }
  if (
    info.origin === "canopee" &&
    info.name1 === "CardRadioGroup" &&
    target === 2 &&
    tag.local === "CardRadio"
  ) {
    // renamed by the import alias: nothing to do
  }
}

// ---------------------------------------------------------------------------------------------
// Style files and tokens
// ---------------------------------------------------------------------------------------------

function analyzeStyle(file, text, ctx) {
  const edits = [];
  const items = [];
  const add = (index, code, detail, breaksIn = 1) =>
    items.push({
      file,
      index,
      line: lineOf(text, index),
      code,
      detail,
      breaksIn,
    });
  CSS_IMPORT_RE.lastIndex = 0;
  let m;
  while ((m = CSS_IMPORT_RE.exec(text))) {
    const spec = m[3];
    const info = classify(spec);
    if (!info || info.kind !== "asset") continue;
    const r = mapAsset(info, ctx.target, false);
    if (!r) continue;
    const specStart = m.index + m[0].indexOf(spec);
    if (r.to)
      edits.push({
        start: specStart,
        end: specStart + spec.length,
        text: (spec.startsWith("~") ? "~" : "") + r.to,
        kind: "css",
      });
    else if (
      r.code === "SASS" &&
      info.family === "toolkit" &&
      m[1] === "import" &&
      !m[0].includes(",") &&
      blankComments(text)[m.index] === "@"
    ) {
      // toolkit Sass @import (one path): deleted; toolkitSassItems replaces what the file used
      let start = m.index;
      while (start > 0 && (text[start - 1] === " " || text[start - 1] === "\t"))
        start--;
      if (start > 0 && text[start - 1] !== "\n") start = m.index;
      edits.push({
        start,
        end: m.index + m[0].length,
        text: "",
        kind: "sass",
      });
    } else if (info.family === "toolkit" && /\.css$/.test(info.sub))
      add(
        m.index,
        "TK_CSS_IN_STYLES",
        `${spec}: remove it if the app uses ${REACT_PKG} (components import their CSS), otherwise import ${CSS_PKG}/distributeur/distributeur.css`,
      );
    else add(m.index, r.code, `${spec}: ${r.hint}`);
  }
  CSS_URL_RE.lastIndex = 0;
  while ((m = CSS_URL_RE.exec(text))) {
    const spec = m[2];
    const info = classify(spec);
    if (!info || info.kind !== "asset") continue;
    const r = mapAsset(info, ctx.target, false);
    const specStart = m.index + m[0].indexOf(spec);
    if (r?.to)
      edits.push({
        start: specStart,
        end: specStart + spec.length,
        text: (spec.startsWith("~") ? "~" : "") + r.to,
        kind: "css",
      });
    else if (r)
      add(
        m.index,
        r.code || "CSS_MISSING",
        `${spec}: ${r.hint || "no 1:1 target"}`,
      );
  }
  return { edits, items };
}

// Token renames, applied to style and code files.
function tokenRenames(ctx) {
  const map = {};
  if (ctx.slashCssMajor !== null && ctx.slashCssMajor < 2 && !ctx.state.green)
    Object.assign(map, { "--green40": "--green30", "--green50": "--green40" });
  if (
    ctx.target === 2 &&
    ctx.universes.has("b2c") &&
    (ctx.canopeeMajor === null || ctx.canopeeMajor < 2)
  )
    map["--orange-100"] = "--orange-050";
  return map;
}
function tokenEdits(text, map) {
  const keys = Object.keys(map);
  if (!keys.length) return [];
  const re = new RegExp(
    `(${keys.map((k) => k.replace(/-/g, "\\-")).join("|")})(?![\\w-])`,
    "g",
  );
  const out = [];
  let m;
  while ((m = re.exec(text)))
    out.push({
      start: m.index,
      end: m.index + m[1].length,
      text: map[m[1]],
      kind: "token",
    });
  return out;
}

// Custom properties removed from Canopée (usage or override in the project).
function removedTokenItems(file, text, ctx) {
  const items = [];
  const lists = [];
  if (ctx.fromApollo)
    lists.push([
      REMOVED_TOKENS_APOLLO,
      1,
      (v) =>
        `removed (Apollo/Look & Feel token), its value was ${v}: use a Canopée token or a project variable`,
    ]);
  if (ctx.target === 2 && ctx.universes.has("b2c"))
    lists.push([
      REMOVED_TOKENS_B2C_2,
      2,
      () =>
        "component variable removed in 2.0: overriding it has no effect any more",
    ]);
  for (const [list, breaksIn, hint] of lists) {
    const names = Object.keys(list);
    if (!names.some((n) => text.includes(n))) continue;
    const re = new RegExp(
      `(${names.map((n) => n.replace(/-/g, "\\-")).join("|")})(?![\\w-])`,
      "g",
    );
    let m;
    while ((m = re.exec(text)))
      items.push({
        file,
        index: m.index,
        line: lineOf(text, m.index),
        code: "TOKEN_REMOVED",
        detail: `${m[1]}: ${hint(list[m[1]])}`,
        breaksIn,
      });
  }
  return items;
}

// ---------------------------------------------------------------------------------------------
// Toolkit Sass: variables, mixins and functions that disappear with @axa-fr/react-toolkit-core
// ---------------------------------------------------------------------------------------------

// Sass colour functions do not accept var(...): a toolkit variable used inside one keeps a literal.
const SASS_FUNCS =
  /\b(darken|lighten|rgba?|mix|transparentize|fade-?out|fade-?in|opacify|saturate|desaturate|adjust-hue|scale-color|adjust-color|change-color|color\.[a-z-]+)\(/;
const TK_SASS_OTHER =
  /@include\s+(generate-universes)\b|\b(theme-color-level|theme-color|color-yiq|breakpoint-(?:next|min|max|infix)|str-replace)\(/g;

function loadToolkitSass(scriptDir) {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(scriptDir, "toolkit-sass.json"), "utf8"),
    );
  } catch {
    return null;
  }
}
// "#FFF" -> "#ffffff"; other values: lower case, single spaces.
function normValue(v) {
  const s = String(v).trim().toLowerCase().replace(/\s+/g, " ");
  const m = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(s);
  return m ? `#${m[1]}${m[1]}${m[2]}${m[2]}${m[3]}${m[3]}` : s;
}
// Blanks Sass comments, keeping offsets and line numbers.
function blankComments(t) {
  return t
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(
      /(^|[^:"'\\])\/\/[^\n]*/gm,
      (m, p) => p + " ".repeat(m.length - p.length),
    );
}
// Media query of a toolkit media-breakpoint-* mixin (Bootstrap 4 rules, toolkit breakpoints).
function mediaQuery(kind, args, bp) {
  const names = Object.keys(bp);
  if (
    args.length !== (kind === "between" ? 2 : 1) ||
    !args.every((a) => names.includes(a))
  )
    return null;
  const min = (n) => (bp[n] ? `${bp[n]}px` : null);
  const max = (n) => {
    const i = names.indexOf(n);
    return i < names.length - 1
      ? `${Math.round((bp[names[i + 1]] - 0.02) * 100) / 100}px`
      : null;
  };
  const lo = kind === "down" ? null : min(args[0]);
  const hi = kind === "up" ? null : max(args[kind === "between" ? 1 : 0]);
  if (!lo && !hi)
    return "no media query: keep the content, remove the @include wrapper";
  return `@media ${[lo && `(min-width: ${lo})`, hi && `(max-width: ${hi})`]
    .filter(Boolean)
    .join(" and ")}`;
}

// The replacement --write makes for a toolkit Sass variable without changing what Sass computes, or
// null (left to MANUAL). The literal toolkit value is what the variable held, so it fits anywhere Sass
// reads a value, except next to "/" (a literal division becomes a plain CSS slash). var(--token) only
// where plain CSS reads it: a declaration, outside Sass functions and arithmetic. Maps, lists inside
// expressions, interpolation, module members (tk.$x) and unary minus stay MANUAL.
function sassAutoValue(t, index, name, value, token) {
  if (value.startsWith("(") || t[index - 1] === "." || t[index - 1] === "-")
    return null;
  let s = index;
  while (s > 0 && !";{}".includes(t[s - 1])) s--;
  let e = index;
  while (e < t.length && !";{}".includes(t[e])) e++;
  const st = t.slice(s, e).trim();
  const lineStart = t.lastIndexOf("\n", index) + 1;
  const lineEnd =
    t.indexOf("\n", index) === -1 ? t.length : t.indexOf("\n", index);
  if (
    st.includes("#{") ||
    (t[s - 1] === "{" && t[s - 2] === "#") ||
    t.slice(lineStart, lineEnd).includes("#{")
  )
    return null;
  const kind = /^\$[\w-]+\s*:/.test(st)
    ? "def"
    : /^@include\s/.test(st)
      ? "include"
      : /^@media\b/.test(st)
        ? "media"
        : /^-?[A-Za-z][\w-]*\s*:/.test(st)
          ? "decl"
          : null;
  if (!kind) return null;
  const v = value.trim();
  const single = !/[\s,()]/.test(v) || /^(['"])[^'"]*\1$/.test(v);
  if (kind === "decl") {
    const math = /[*/+%]|\s-\s/.test(st);
    if (token && !math && !SASS_FUNCS.test(st)) return `var(${token})`;
    if (st.includes("/")) return null;
    if (single) return v;
    const val = st
      .slice(st.indexOf(":") + 1)
      .replace(/!important\s*$/, "")
      .trim();
    return val === `$${name}` ? v : null; // a whole list value, e.g. a font stack
  }
  if (st.includes("/")) return null;
  return single ? v : null;
}

// Lists every toolkit Sass variable, mixin and function the project still needs, with the exact
// replacement, so that nobody guesses a colour or a breakpoint once the toolkit is uninstalled.
// Also returns the toolkit variables the project defines itself, recorded on --write: a definition
// added later with another value than the toolkit one is reported (SASS_VALUE).
function toolkitSassItems(styleFiles, texts, ctx, data, rel) {
  const items = [];
  const edits = new Map(); // file -> safe replacements, applied by --write (AUTO kind "sass")
  const src = new Map();
  for (const f of styleFiles)
    if (/\.s[ac]ss$/i.test(f) && texts.has(f))
      src.set(f, blankComments(texts.get(f)));
  if (!src.size) return { items, edits, defs: [] };
  const defined = new Set();
  const own = new Set(); // mixins and functions of the project
  const defs = [];
  let bootstrapSass = false;
  for (const [f, t] of src) {
    for (const m of t.matchAll(
      /^[ \t]*\$([A-Za-z_][\w-]*)[ \t]*:[ \t]*([^;\n]*)/gm,
    )) {
      defined.add(m[1]);
      defs.push({
        file: f,
        index: m.index + m[0].indexOf("$"),
        name: m[1],
        value: m[2].replace(/\s*!(default|global)\b/g, "").trim(),
      });
    }
    for (const m of t.matchAll(
      /@(?:mixin|function)\s+([\w-]+)\s*(\(([^)]*)\))?/g,
    )) {
      own.add(m[1]);
      for (const p of (m[3] || "").matchAll(/(?:^|,)\s*\$([\w-]+)/g))
        defined.add(p[1]);
    }
    for (const m of t.matchAll(/@(?:each|for)\s+([^{]*?)\s+(?:in|from)\b/g))
      for (const p of m[1].matchAll(/\$([\w-]+)/g)) defined.add(p[1]);
    if (/@(?:import|use|forward)\s+[^;\n]*bootstrap/.test(t))
      bootstrapSass = true;
  }
  // with Bootstrap's own Sass still imported, its variables are not the toolkit's to replace
  const bs = bootstrapSass ? {} : data.bootstrap;
  const valueOf = (n) => data.toolkit[n] ?? bs[n];
  const tokenOf = new Map(
    Object.entries(data.tokens).map(([t, v]) => [normValue(v), t]),
  );
  for (const [f, t] of src) {
    const text = texts.get(f);
    const add = (index, code, detail) =>
      items.push({
        file: f,
        index,
        line: lineOf(text, index),
        code,
        detail,
        breaksIn: 1,
      });
    const fileEdits = [];
    const edit = (start, end, text) =>
      fileEdits.push({ start, end, text, kind: "sass" });
    // one line per variable and replacement, with every line where it is used
    const vars = new Map();
    for (const m of t.matchAll(/\$([A-Za-z_][\w-]*)(?![\w-])/g)) {
      const name = m[1];
      const value = defined.has(name) ? undefined : valueOf(name);
      if (value === undefined) continue;
      const line = lineOf(text, m.index);
      const lineText = t.slice(
        t.lastIndexOf("\n", m.index) + 1,
        (t.indexOf("\n", m.index) + 1 || t.length + 1) - 1,
      );
      const token = tokenOf.get(normValue(value));
      const auto = /\.scss$/i.test(f)
        ? sassAutoValue(t, m.index, name, value, token)
        : null;
      if (auto !== null) {
        edit(m.index, m.index + name.length + 1, auto);
        continue;
      }
      let detail;
      if (value.startsWith("("))
        detail = `$${name}: toolkit map ${value}: declare $${name} in the project with exactly this value`;
      else if (token && !SASS_FUNCS.test(lineText))
        detail = `$${name} -> var(${token}) (same value as the toolkit: ${value})`;
      else if (token)
        detail = `$${name} inside a Sass function -> ${value} (toolkit value; a Sass function does not accept var(...))`;
      else
        detail = `$${name} -> ${value} (toolkit value; no Canopée token has exactly this value, never use a close one)`;
      // "30px / 2" in a property is printed as is: Sass only divides a variable or a parenthesis
      if (!value.startsWith("(") && /[^/]\/[^/*]/.test(lineText))
        detail += `; next to "/", write the result or calc(): Sass does not divide two literals in a property`;
      const v = vars.get(detail);
      if (!v) vars.set(detail, { index: m.index, lines: [line] });
      else if (!v.lines.includes(line)) v.lines.push(line);
    }
    for (const [detail, v] of vars)
      add(
        v.index,
        "SASS_VAR",
        v.lines.length > 1
          ? `${detail}, also line${v.lines.length > 2 ? "s" : ""} ${v.lines.slice(1).join(", ")}`
          : detail,
      );
    for (const m of t.matchAll(
      /@include\s+media-breakpoint-(up|down|only|between)\s*\(([^)]*)\)/g,
    )) {
      if (own.has(`media-breakpoint-${m[1]}`)) continue;
      const args = m[2]
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""));
      const q = mediaQuery(m[1], args, data.breakpoints);
      if (q && q.startsWith("@media ") && /\.scss$/i.test(f)) {
        edit(m.index, m.index + m[0].length, q);
        continue;
      }
      add(
        m.index,
        "SASS_MIXIN",
        `@include media-breakpoint-${m[1]}(${m[2].trim()}) -> ${
          q ||
          "toolkit breakpoints xs 0, sm 576px, md 768px, lg 992px, xl 1200px; up(X) = min-width X, down(X) = max-width of the next one minus 0.02px"
        }`,
      );
    }
    if (!own.has("rem"))
      for (const m of t.matchAll(/\brem\(\s*(-?[\d.]+)px\s*\)/g))
        edit(
          m.index,
          m.index + m[0].length,
          `${Math.round((Number(m[1]) / 16) * 10000) / 10000}rem`,
        );
    TK_SASS_OTHER.lastIndex = 0;
    for (const m of t.matchAll(TK_SASS_OTHER)) {
      const n = m[1] || m[2];
      if (own.has(n)) continue;
      add(
        m.index,
        "SASS_MIXIN",
        `${n}: toolkit Sass ${m[1] ? "mixin" : "function"} without Canopée equivalent: STOP and ask`,
      );
    }
    if (fileEdits.length) edits.set(f, fileEdits);
  }
  const tkDefs = defs.filter((d) => valueOf(d.name) !== undefined);
  if (Array.isArray(ctx.state.sassDefs)) {
    const before = new Set(ctx.state.sassDefs);
    for (const d of tkDefs) {
      const value = valueOf(d.name);
      const v = normValue(d.value);
      if (value.startsWith("(") || before.has(`${rel(d.file)}|${d.name}|${v}`))
        continue;
      const token = tokenOf.get(normValue(value));
      const ref = /^\$([\w-]+)$/.exec(v);
      if (
        v === normValue(value) ||
        (token && v === `var(${token})`) ||
        (ref && normValue(valueOf(ref[1]) ?? "") === normValue(value))
      )
        continue;
      items.push({
        file: d.file,
        index: d.index,
        line: lineOf(texts.get(d.file), d.index),
        code: "SASS_VALUE",
        detail: `$${d.name}: ${d.value} was added after --write and is not the toolkit value ${value}${token ? ` (var(${token}))` : ""}: use the toolkit value`,
        breaksIn: 1,
      });
    }
  }
  return {
    items,
    edits,
    defs: tkDefs.map((d) => `${rel(d.file)}|${d.name}|${normValue(d.value)}`),
  };
}

// ---------------------------------------------------------------------------------------------
// --check: the project's own checks
// ---------------------------------------------------------------------------------------------

// Rules of a style file with their selectors resolved (Sass nesting and `&`, interpolations left
// out): [{ index, sels }]. Approximate on purpose: it only feeds TK_ACTION_CLASS and VISUAL.
function styleRules(text) {
  const t = blankComments(text);
  const out = [];
  const stack = [];
  let start = 0;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c === "#" && t[i + 1] === "{") {
      const j = t.indexOf("}", i);
      if (j < 0) break;
      i = j;
    } else if (c === "{") {
      const raw = t.slice(start, i);
      const head = raw.trim();
      const parent = [...stack].reverse().find((x) => x) || null;
      let sels = null;
      if (head && !head.startsWith("@") && !/^[\w-]+\s*:\s*$/.test(head)) {
        const parts = head
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean);
        sels = parent
          ? parts.flatMap((x) =>
              parent.map((q) =>
                x.includes("&") ? x.replace(/&/g, q) : `${q} ${x}`,
              ),
            )
          : parts;
        out.push({ index: start + raw.length - raw.trimStart().length, sels });
      }
      stack.push(sels);
      start = i + 1;
    } else if (c === "}") {
      stack.pop();
      start = i + 1;
    } else if (c === ";") start = i + 1;
  }
  return out;
}
const classesOf = (sel) =>
  [...sel.matchAll(/\.(-?[A-Za-z_][\w-]*)/g)]
    .filter((m) => sel[m.index + m[0].length] !== "#" && !m[1].endsWith("-"))
    .map((m) => m[1]);

// A project rule on its own class of an <Action>: the toolkit styled .af-btn--circle (one class), so
// the project's rule, loaded later, won; Canopée styles .btn.af-btn--circle (two classes) and wins.
function actionClassItems(actionClasses, styleFiles, texts, rel) {
  const items = [];
  const rules = new Map();
  for (const f of styleFiles) {
    const t = texts.get(f);
    if (t) rules.set(f, styleRules(t));
  }
  const seen = new Set();
  for (const a of actionClasses)
    for (const [f, list] of rules)
      for (const r of list)
        for (const sel of r.sels) {
          const last =
            sel
              .trim()
              .split(/[\s>+~]+/)
              .pop() || "";
          const cls = classesOf(last);
          if (
            !cls.includes(a.cls) ||
            cls.includes("btn") ||
            cls.includes("af-btn--circle")
          )
            continue;
          const k = `${f}|${r.index}|${a.cls}`;
          if (seen.has(k)) continue;
          seen.add(k);
          items.push({
            file: f,
            index: r.index,
            line: lineOf(texts.get(f), r.index),
            code: "TK_ACTION_CLASS",
            detail: `${last.trim()} is a class of the <Action> at ${rel(a.file)}:${a.line}: Canopée styles the Action with .btn.af-btn--circle (two classes: display, size, colours), so this rule now loses; write the selector with .btn as well (${last.trim().replace(`.${a.cls}`, `.btn.${a.cls}`)})`,
            breaksIn: 1,
          });
        }
  return items;
}

// Coming from the toolkit, the entry file must load the Canopée CSS before the project's own
// stylesheets (--write puts the Canopée entry point where the toolkit stylesheet was). Without it,
// the Canopée CSS comes with the first component, after them, and wins every tie.
function cssOrderItems(codeFiles, texts) {
  const items = [];
  // a toolkit stylesheet still imported (--write puts the Canopée entry point in its place), or
  // that entry point already imported for its CSS somewhere: nothing to say
  if (
    codeFiles.some((f) =>
      /^[ \t]*import\s*['"]@axa-fr\/(react-toolkit-[^'"]+\.s?css|canopee-react\/[a-z]+)['"]/m.test(
        texts.get(f) || "",
      ),
    )
  )
    return items;
  for (const f of codeFiles) {
    const t = texts.get(f);
    if (!t || !/\b(createRoot|hydrateRoot|ReactDOM\.render)\s*\(/.test(t))
      continue;
    if (/(^|[\\/])(__tests__|__mocks__)[\\/]|\.(test|spec|stories)\./.test(f))
      continue;
    const local = [];
    let firstCanopee = -1;
    SIDE_EFFECT_RE.lastIndex = 0;
    let m;
    while ((m = SIDE_EFFECT_RE.exec(t))) {
      if (
        /\.(s?css|sass|less)$/.test(m[3]) &&
        !m[3].startsWith("@") &&
        !/node_modules/.test(m[3])
      )
        local.push(m.index);
    }
    const c = new RegExp(`(['"])${REACT_PKG.replace("/", "\\/")}/`).exec(t);
    if (c) firstCanopee = c.index;
    if (!local.length) continue;
    const last = local[local.length - 1];
    if (firstCanopee >= 0 && firstCanopee < last) continue;
    items.push({
      file: f,
      index: last,
      line: lineOf(t, last),
      code: "CSS_ORDER",
      detail: `your stylesheets load before the Canopée CSS, so Canopée wins every rule as specific as yours: add import "${REACT_PKG}/distributeur"; where the toolkit stylesheet import was (git log -p shows it), before the stylesheets that override the design system`,
      breaksIn: 1,
    });
  }
  return items;
}

// After the install: project rules on a class of a Canopée block (af-alert__..., af-link--...) that
// neither Canopée nor the project renders any more. They compile and pass every check, but do
// nothing: the toolkit markup they styled is gone (af-alert__title-icon), or a modifier class was
// lost on the way (af-link--hasIconLeft).
function deadSelectorLines(root, styleFiles, codeFiles, texts, rel) {
  let dir = root;
  let css = null;
  for (;;) {
    const c = path.join(dir, "node_modules", CSS_PKG, "dist");
    if (fs.existsSync(c)) {
      css = c;
      break;
    }
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  if (!css) return [];
  const known = new Set();
  const scan = (d, re) => {
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) scan(p, re);
      else if (re.test(e.name))
        for (const m of fs
          .readFileSync(p, "utf8")
          .matchAll(/af-[A-Za-z0-9_-]+/g))
          known.add(m[0]);
    }
  };
  scan(css, /\.css$/);
  scan(
    path.join(path.dirname(path.dirname(css)), "canopee-react", "dist"),
    /\.js$/,
  );
  const blockOf = (c) => c.split(/__|--/)[0];
  const blocks = new Set([...known].map(blockOf));
  const code = codeFiles.map((f) => texts.get(f) || "").join("\n");
  const word = (w) =>
    new RegExp(
      `(^|[^\\w-])${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\w-]|$)`,
    ).test(code);
  const alive = (c) => {
    if (known.has(c) || code.includes(c)) return true;
    const el = /^[^_]+?(__[\w-]+?)(--|$)/.exec(c);
    if (el && !code.includes(el[1]) && !known.has(blockOf(c) + el[1]))
      return false;
    const mod = /--([\w-]+)$/.exec(c);
    return mod ? word(mod[1]) : true;
  };
  const lines = [];
  const seen = new Set();
  for (const f of styleFiles) {
    const t = texts.get(f);
    if (!t) continue;
    for (const r of styleRules(t))
      for (const sel of r.sels)
        for (const c of classesOf(sel)) {
          if (
            !c.startsWith("af-") ||
            !blocks.has(blockOf(c)) ||
            c === blockOf(c)
          )
            continue;
          if (seen.has(`${f}|${c}`) || alive(c)) continue;
          seen.add(`${f}|${c}`);
          lines.push(`  ${rel(f)}:${lineOf(t, r.index)}  .${c}`);
        }
  }
  return lines;
}

// A name that a migration edit left unused is often a value the old component used and the new
// code dropped: an Alert type that chose the colour, a HelpInfo content that was the help bubble.
function unusedHint(list) {
  return `FIX unused after your edits: ${list.join(", ")}. Look at what the old code did with each one before deleting it: a value that chose a colour, a variant or a help bubble must reach the new component (TK_ALERT_CLASSMODIFIER: type -> variant; TK_REMOVED: HelpInfo content -> Popover popoverElement). Delete only a name with no equivalent (TK_ALERT_ICON: icon) or an import nothing uses`;
}

// What to do for the usual failures after a migration, read from the check output.
function fixHints(name, lines, pm, deps, root, rel, codeFiles = []) {
  const exec = { npm: "npx", yarn: "yarn", pnpm: "pnpm exec" }[pm];
  const show = (set) =>
    [...set]
      .filter(Boolean)
      .map((f) => (path.isAbsolute(f) ? rel(f) : f))
      .map((f) => (/\s/.test(f) ? `"${f}"` : f))
      .join(" ");
  const out = [];
  if (name === "lint") {
    // ESLint "stylish": the file path alone on a line, then "  line:col  error  message  rule"
    let cur = null;
    const prettier = new Set();
    const unused = [];
    let anyType = false;
    for (const l of lines) {
      if (/^\s*\d+:\d+\s+(error|warning)\s/.test(l)) {
        if (/prettier\/prettier/.test(l)) prettier.add(cur);
        if (/no-explicit-any|Unexpected any/.test(l)) anyType = true;
        const u =
          /^\s*(\d+):\d+\s.*'([^']+)' is (?:defined|assigned a value) but never used/.exec(
            l,
          );
        if (u && cur)
          unused.push(
            `${path.isAbsolute(cur) ? rel(cur) : cur}:${u[1]} ${u[2]}`,
          );
      } else if (/^\s*(\/|[A-Za-z]:\\|\.{0,2}\/?\w).*\.[cm]?[jt]sx?$/.test(l))
        cur = l.trim();
    }
    if (prettier.size)
      out.push(
        `FIX lint: Prettier: run \`${exec} prettier --write ${show(prettier) || "<the files you changed>"}\`, then --check again`,
      );
    if (unused.length) out.push(unusedHint(unused));
    if (anyType)
      out.push(
        "FIX lint: Unexpected any: remove the cast or the any you added (NO_CAST); a classModifier expression takes a typed table (BUTTON_CLASSMODIFIER, TK_ALERT_CLASSMODIFIER)",
      );
  }
  if (name === "test") {
    // Vitest prints several FAIL lines in a row above one error when the error is the same
    let cur = [];
    let prevFail = false;
    const snap = new Set();
    const query = new Set();
    const cls = new Set();
    const addCur = (set) => cur.forEach((f) => set.add(f));
    for (const l of lines) {
      const f = /^\s*(?:FAIL|×|✗)\s+(\S+\.(?:test|spec)\.[cm]?[jt]sx?)/.exec(l);
      if (f) {
        cur = prevFail ? [...cur, f[1]] : [f[1]];
        prevFail = true;
        continue;
      }
      prevFail = false;
      if (
        /Snapshot .*mismatched|snapshots? (failed|obsolete)|toMatch(Inline)?Snapshot/i.test(
          l,
        )
      )
        addCur(snap);
      if (/Unable to find (an accessible element|an element|a label)/i.test(l))
        addCur(query);
      if (/toHaveClass\(/.test(l)) addCur(cls);
    }
    const runner = deps.has("vitest")
      ? `${exec} vitest run -u`
      : deps.has("jest") || deps.has("react-scripts")
        ? `${exec} jest -u`
        : null;
    if (snap.size)
      out.push(
        `FIX test: snapshot mismatch in ${show(snap) || "the files above"}: fix the other failures first (a snapshot of broken code is wrong), then read each diff (TESTS). Design system markup only (classes, wrappers, icons): ${runner ? `\`${runner} ${show(snap)}\`` : "update these snapshots"}, and list them in the report. Your own text or data changed: the migration is wrong`,
      );
    if (query.size) {
      // where the failing queries are written: often a shared step or helper, not the test file
      const asked = new Set();
      for (const l of lines) {
        const q =
          /with the (?:role|text|label(?: text)?) "?([^"`]+?)"?(?: and name `([^`]+)`)?$/.exec(
            l.replace(
              /^.*Unable to find (an accessible element|an element|a label)\s*/i,
              "with the ",
            ),
          );
        if (q && /Unable to find/i.test(l))
          asked.add(JSON.stringify([q[2] || q[1], /role/.test(l)]));
      }
      const where = [];
      for (const a of asked) {
        const [needle, byRole] = JSON.parse(a);
        for (const f of codeFiles) {
          let t;
          try {
            t = fs.readFileSync(f, "utf8");
          } catch {
            continue;
          }
          if (!t.includes(needle)) continue;
          t.split("\n").forEach((x, n) => {
            if (x.includes(needle) && (!byRole || /Role/.test(x)))
              where.push(`${rel(f)}:${n + 1}`);
          });
        }
      }
      out.push(
        `FIX test: a role, name or text query finds nothing in ${show(query) || "the files above"}${where.length ? `; the query is written at ${[...new Set(where)].slice(0, 5).join(", ")}` : ""}: change the query to what Canopée renders (TESTS; the distributeur User link is named "user info link"), never the component`,
      );
    }
    if (cls.size)
      out.push(
        `FIX test: a class expected by ${show(cls) || "a test"} is gone: fix the component, not the test (TK_ALERT_CLASSMODIFIER, BUTTON_CLASSMODIFIER: every other modifier word becomes className="af-alert--WORD" / "af-btn--WORD")`,
      );
  }
  if (
    name === "typecheck" &&
    lines.some((l) => /TS2307.*@axa-fr\/canopee-react/.test(l))
  )
    out.push("FIX typecheck: TS2307 on @axa-fr/canopee-react: TSCONFIG");
  if (name === "typecheck") {
    // "src/a.tsx(35,11): error TS2783: 'disabled' is specified more than once..."
    const at = (re) =>
      [
        ...new Set(
          lines
            .map((l) => re.exec(l))
            .filter(Boolean)
            .map((m) => `${m[1]}:${m[2]}${m[3] ? ` ${m[3]}` : ""}`),
        ),
      ].slice(0, 8);
    const twice = at(
      /^\s*(\S+?)\((\d+),\d+\): error TS2783: '([^']+)' is specified more than once/,
    );
    if (twice.length)
      out.push(
        `FIX typecheck: TS2783 at ${twice.join(", ")}: a prop is given by you and by a spread after it. Put the spread first ({...modifier}), then your own props, and merge what both give: disabled={yours || modifier.disabled}, className={[yours, modifier.className].filter(Boolean).join(" ")} (BUTTON_CLASSMODIFIER, "Expression")`,
      );
    const unusedTs = at(
      /^\s*(\S+?)\((\d+),\d+\): error TS6(?:133|192|196): '([^']+)' is declared but/,
    );
    if (unusedTs.length) out.push(unusedHint(unusedTs));
    if (
      lines.some((l) =>
        /TS7053.*['"]@axa-fr\/(react-toolkit|design-system)/.test(l),
      )
    )
      out.push(
        'FIX typecheck: TS7053 on dependencies["@axa-fr/..."]: OLD_STRING (write the old version printed by the OLD_STRING line as text, keep the URL)',
      );
  }
  if (
    lines.some((l) => /Undefined (variable|mixin)|Undefined function/.test(l))
  )
    out.push(
      "FIX: Sass undefined variable or mixin: use the SASS_VAR / SASS_MIXIN lines above with their exact value",
    );
  return out;
}

function runChecks(root, pm, deps, rel, codeFiles) {
  let scripts = {};
  try {
    scripts =
      JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"))
        .scripts || {};
  } catch {
    scripts = {};
  }
  const run = (s) => `${pm} run ${s}`;
  const checks = [];
  const tc = ["typecheck", "type-check", "check-types", "tsc"].find(
    (s) => scripts[s],
  );
  const tsc = path.join(root, "node_modules", "typescript", "bin", "tsc");
  if (tc) checks.push(["typecheck", run(tc)]);
  else if (
    fs.existsSync(path.join(root, "tsconfig.json")) &&
    fs.existsSync(tsc)
  )
    checks.push([
      "typecheck",
      `"${process.execPath}" "${tsc}" --noEmit -p tsconfig.json`,
      "tsc --noEmit -p tsconfig.json",
    ]);
  const notRun = [];
  if (
    !tc &&
    fs.existsSync(path.join(root, "tsconfig.json")) &&
    !fs.existsSync(tsc)
  )
    notRun.push(
      "typecheck (tsconfig.json but no typescript in node_modules: install first)",
    );
  if (scripts.lint) checks.push(["lint", run("lint")]);
  if (scripts.test && !/no test specified/.test(scripts.test))
    checks.push(["test", run("test")]);
  if (scripts.build) checks.push(["build", run("build")]);
  const failed = [];
  const L = [""];
  // error lines, file names and code frames, without stack traces
  const useful = (l) =>
    !/^\s*at\s|node_modules/.test(l) &&
    (/error|fail|✗|×|cannot|undefined|mismatch|│/i.test(l) ||
      /\.(s[ac]ss|css|[cm]?[jt]sx?)(\s+\d+:\d+|:\d+|\(\d+,\d+\))/.test(l) ||
      /^\s*\S+\.(s[ac]ss|css|[cm]?[jt]sx?)$/.test(l));
  for (const [name, cmd, shown = cmd] of checks) {
    const r = spawnSync(cmd, {
      cwd: root,
      shell: true,
      encoding: "utf8",
      maxBuffer: 256 * 1024 * 1024,
      timeout: 20 * 60 * 1000,
      env: { ...process.env, CI: "true", FORCE_COLOR: "0", NO_COLOR: "1" },
    });
    if (r.status === 0) {
      L.push(`CHECK ${name}: PASS (${shown})`);
      continue;
    }
    failed.push(`${name} failed`);
    L.push(
      `CHECK ${name}: FAIL (${shown}, ${r.status === null ? "stopped after 20 min: watch mode? run it once by hand" : `exit ${r.status}`})`,
    );
    const lines = `${r.stdout || ""}\n${r.stderr || ""}`
      .replace(new RegExp(`${String.fromCharCode(27)}\\[[0-9;]*m`, "g"), "")
      .split("\n")
      .map((l) => l.trimEnd())
      .filter(Boolean);
    for (const l of lines.filter(useful).slice(0, 40))
      L.push(`  ${l.slice(0, 220)}`);
    L.push("  ...");
    for (const l of lines.filter((x) => !/^\s*at\s/.test(x)).slice(-6))
      L.push(`  ${l.slice(0, 220)}`);
    L.push(...fixHints(name, lines, pm, deps, root, rel, codeFiles));
  }
  for (const n of notRun)
    L.push(`CHECK ${n.split(" ")[0]}: NOT RUN ${n.slice(n.indexOf(" ") + 1)}`);
  return {
    L,
    failed: [...failed, ...notRun.map((n) => `${n.split(" ")[0]} not run`)],
    count: checks.length,
  };
}

// ---------------------------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------------------------

function applyEdits(text, edits) {
  const sorted = [...edits].sort((a, b) => a.start - b.start || a.end - b.end);
  const kept = [];
  let last = -1;
  for (const e of sorted) {
    if (e.start < last) continue; // overlapping edit: keep the first one
    kept.push(e);
    last = e.end;
  }
  let out = text;
  for (const e of [...kept].reverse())
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  return { out, applied: kept.length, kept };
}
// Offset in the rewritten text of an offset of the original text.
function shiftIndex(index, kept) {
  let delta = 0;
  for (const e of kept) {
    if (e.start >= index) break;
    if (e.end <= index) delta += e.text.length - (e.end - e.start);
  }
  return index + delta;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    const src = fs.readFileSync(fileURLToPath(import.meta.url), "utf8");
    process.stdout.write(
      src
        .split("\n")
        .slice(1, 18)
        .map((l) => l.replace(/^\/\/ ?/, ""))
        .join("\n") + "\n",
    );
    return;
  }
  const root = path.resolve(opts.dir);
  if (!fs.existsSync(root)) fail(`no such directory: ${root}`);
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const skillDir = path.resolve(scriptDir, "..");
  let workspaceRoot = ["pnpm-workspace.yaml", "lerna.json"].some((f) =>
    fs.existsSync(path.join(root, f)),
  );
  try {
    workspaceRoot ||= !!JSON.parse(
      fs.readFileSync(path.join(root, "package.json"), "utf8"),
    ).workspaces;
  } catch {
    // no package.json at the root: only its own folders are scanned
  }
  const files = walk(root, skillDir, workspaceRoot);
  // the dependencies of this package only, unless it is a workspace root (old behaviour)
  const deps = readDeps(
    workspaceRoot
      ? files.pkg
      : files.pkg.filter((f) => path.dirname(f) === root),
  );
  const rel = (f) => path.relative(root, f).split(path.sep).join("/") || ".";
  const refDir = path.join(skillDir, "references");
  const refBase = refDir.startsWith(root + path.sep) ? rel(refDir) : refDir;

  const isOld = (n) => /^@axa-fr\/(react-toolkit-|design-system-)/.test(n);
  const oldDeps = [...deps.keys()].filter(isOld).sort();
  // other package.json files (template, sub-app) that still declare an old package
  const otherOld = files.pkg
    .filter((f) => path.dirname(f) !== root)
    .map((f) => [f, [...readDeps([f]).keys()].filter(isOld)])
    .filter(([, l]) => l.length);
  const rootDeps = readDeps([path.join(root, "package.json")]);
  const rootOld = [...rootDeps.keys()].filter(isOld);
  const canopeeRange = deps.get(REACT_PKG) || deps.get(CSS_PKG) || null;
  const tkRanges = [...deps.entries()]
    .filter(([n]) => n.startsWith("@axa-fr/react-toolkit-"))
    .map(([, r]) => majorOf(r))
    .filter((x) => x !== null);
  // One-shot renames (CardRadio, green tokens) and the origin of the project are recorded on --write
  // so that a second run never applies a rename twice and still knows the origin after the install.
  const statePath = path.join(root, ".canopee-migrate.json");
  let state = {};
  try {
    state = JSON.parse(fs.readFileSync(statePath, "utf8"));
  } catch {
    state = {};
  }
  const origin = {
    fromToolkit:
      tkRanges.length > 0 ||
      [...deps.keys()].some((n) => n.startsWith("@axa-fr/react-toolkit-")),
    toolkitMajor: tkRanges.length ? Math.min(...tkRanges) : null,
    slashCssMajor: deps.has("@axa-fr/design-system-slash-css")
      ? majorOf(deps.get("@axa-fr/design-system-slash-css"))
      : null,
    fromApollo: [...deps.keys()].some((n) =>
      /^@axa-fr\/design-system-(apollo|look-and-feel)-/.test(n),
    ),
  };
  for (const k of Object.keys(origin))
    if (origin[k] === null || origin[k] === false)
      origin[k] = state.origin?.[k] ?? origin[k];
  const ctx = {
    target: opts.target,
    canopeeMajor: canopeeRange ? majorOf(canopeeRange) : null,
    usesToolkitReact: false,
    universes: new Set(),
    state,
    applied: {},
    ...origin,
  };
  // versions of the old packages, kept after the install for the OLD_STRING hints
  ctx.oldVersions = { ...(state.oldVersions || {}) };
  for (const n of oldDeps)
    ctx.oldVersions[n] ??= String(deps.get(n)).replace(/^[\^~=v\s]+/, "");
  if (opts.write && !state.oldVersions && oldDeps.length)
    ctx.applied.oldVersions = ctx.oldVersions;

  // first pass: what does the code import?
  const texts = new Map();
  for (const f of [...files.code, ...files.style]) {
    let t;
    try {
      const st = fs.statSync(f);
      if (st.size > 1_500_000) continue;
      t = fs.readFileSync(f, "utf8");
    } catch {
      continue;
    }
    texts.set(f, t);
  }
  const usedUniverses = new Set();
  let usesReact = false;
  let usesCssOnly = false;
  for (const f of files.code) {
    const t = texts.get(f);
    if (!t || !t.includes("@axa-fr/")) continue;
    for (const m of t.matchAll(/(['"])(@axa-fr\/[^'"\n]+)\1/g)) {
      const info = classify(m[2]);
      if (!info) continue;
      if (info.kind === "toolkit") {
        ctx.usesToolkitReact = true;
        usesReact = true;
        usedUniverses.add("distributeur");
      } else if (info.kind === "react") {
        usesReact = true;
        usedUniverses.add(info.u);
      } else if (info.kind === "asset") usesCssOnly = true;
    }
  }
  for (const f of files.style) {
    const t = texts.get(f);
    if (t && t.includes("@axa-fr/")) usesCssOnly = true;
  }
  if (usedUniverses.has("prospect") || usedUniverses.has("client"))
    ctx.universes.add("b2c");
  if (usedUniverses.has("distributeur")) ctx.universes.add("distributeur");
  if (
    ctx.canopeeMajor === null &&
    (deps.get(REACT_PKG) === "next" || deps.get(CSS_PKG) === "next")
  )
    ctx.canopeeMajor = 2;

  const tokMap = tokenRenames(ctx);
  const results = [];
  let items = [];
  const actionClasses = [];
  for (const [f, t] of texts) {
    if (
      !t.includes("@axa-fr/") &&
      !Object.keys(tokMap).some((k) => t.includes(k))
    )
      continue;
    const isCode = CODE_EXT.has(path.extname(f).toLowerCase());
    const r = isCode ? analyzeCode(f, t, ctx) : analyzeStyle(f, t, ctx);
    const te = tokenEdits(t, tokMap);
    if (te.some((e) => e.text === "--green30" || e.text === "--green40"))
      ctx.applied.green = true;
    r.edits.push(...te);
    items.push(...r.items);
    if (r.actionClasses) actionClasses.push(...r.actionClasses);
    if (r.edits.length) results.push({ file: f, text: t, edits: r.edits });
  }
  items.push(...actionClassItems(actionClasses, files.style, texts, rel));
  if (ctx.fromToolkit) items.push(...cssOrderItems(files.code, texts));
  for (const [f, t] of texts) items.push(...removedTokenItems(f, t, ctx));
  // Toolkit Sass: exact values for every variable and mixin the project still uses
  const tkSass = ctx.fromToolkit ? loadToolkitSass(scriptDir) : null;
  if (tkSass) {
    const r = toolkitSassItems(files.style, texts, ctx, tkSass, rel);
    items.push(...r.items);
    // the safe replacements join the other AUTO edits of the same file
    for (const [f, e] of r.edits) {
      const res = results.find((x) => x.file === f);
      if (res) res.edits.push(...e);
      else results.push({ file: f, text: texts.get(f), edits: e });
    }
    if (opts.write && !Array.isArray(state.sassDefs))
      ctx.applied.sassDefs = r.defs;
  }
  // Casts and checker suppressions: counted per file at the first --write, listed when a file has
  // more of them afterwards (a cast hides a wrong migration from the typecheck and the linter).
  const CAST_RE =
    /\bas\s+any\b|\bas\s+unknown\s+as\b|:\s*any\b|@ts-ignore\b|@ts-expect-error\b|eslint-disable/g;
  const casts = {};
  for (const f of files.code) {
    const n = (texts.get(f) || "").match(CAST_RE)?.length || 0;
    if (n) casts[rel(f)] = n;
  }
  if (opts.write && !state.casts) ctx.applied.casts = casts;
  if (state.casts)
    for (const [rf, n] of Object.entries(casts)) {
      const before = state.casts[rf] || 0;
      if (n <= before) continue;
      const f = path.join(root, rf);
      const t = texts.get(f);
      CAST_RE.lastIndex = 0;
      let c;
      while ((c = CAST_RE.exec(t)))
        items.push({
          file: f,
          index: c.index,
          line: lineOf(t, c.index),
          code: "NO_CAST",
          detail: `${c[0].trim()}: this file has ${n} casts or suppressions, ${before} before --write: remove the ones you added; a classModifier expression takes a typed table (BUTTON_CLASSMODIFIER, TK_ALERT_CLASSMODIFIER)`,
          breaksIn: 1,
        });
    }
  // backup files (sed -i.bak...) that were not there at the first --write
  const leftover = files.leftover.map(rel).sort();
  if (opts.write && !state.leftover) ctx.applied.leftover = leftover;
  const newLeftover = leftover.filter(
    (f) => !(state.leftover || []).includes(f),
  );

  // apply
  let autoCount = 0;
  const autoByKind = {};
  const autoList = [];
  const rewrittenFiles = new Map();
  for (const r of results) {
    const { out, applied, kept } = applyEdits(r.text, r.edits);
    if (out === r.text) continue;
    rewrittenFiles.set(r.file, { out, kept });
    autoCount += applied;
    for (const e of r.edits) autoByKind[e.kind] = (autoByKind[e.kind] || 0) + 1;
    for (const e of r.edits.sort((a, b) => a.start - b.start))
      autoList.push(
        `${rel(r.file)}:${lineOf(r.text, e.start)} ${e.kind}: ${JSON.stringify(r.text.slice(e.start, e.end).trim().slice(0, 80))} -> ${JSON.stringify(e.text.trim().slice(0, 80))}`,
      );
    if (opts.write) fs.writeFileSync(r.file, out);
  }
  const autoFiles = rewrittenFiles.size;
  // after --write, line numbers must point into the rewritten files
  if (opts.write) {
    for (const i of items) {
      const w = rewrittenFiles.get(i.file);
      if (!w || i.index === undefined) continue;
      const at = i.spec
        ? Math.max(w.out.indexOf(`"${i.spec}"`), w.out.indexOf(`'${i.spec}'`))
        : -1;
      i.line = lineOf(w.out, at >= 0 ? at : shiftIndex(i.index, w.kept));
    }
  }
  const hasOrigin =
    origin.fromToolkit || origin.fromApollo || origin.slashCssMajor !== null;
  if (
    opts.write &&
    (Object.keys(ctx.applied).length || (hasOrigin && !state.origin))
  ) {
    fs.writeFileSync(
      statePath,
      JSON.stringify({ ...state, ...ctx.applied, origin }, null, 2) + "\n",
    );
  }
  const hasState = fs.existsSync(statePath);

  // project-level facts
  const info = [];
  const reactRange = deps.get("react");
  const reactMajor = reactRange ? majorOf(reactRange) : null;
  const needReact = opts.target === 2 ? 19 : 18;
  if (reactMajor !== null && reactMajor < needReact)
    info.push(
      `react ${reactRange}: Canopée ${opts.target}.x needs react >= ${needReact} (upgrade react and react-dom first)`,
    );
  if (deps.has("jest") || deps.has("react-scripts"))
    info.push(
      `Jest detected: ${REACT_PKG} is ESM only (exports "import" only) and imports .css; see packages-and-css.md (JEST)`,
    );
  if (ctx.fromToolkit && !tkSass)
    info.push(
      "toolkit-sass.json is missing next to the script: copy the whole skill folder again",
    );
  for (const name of ["tsconfig.json", "tsconfig.app.json"]) {
    let t;
    try {
      t = fs.readFileSync(path.join(root, name), "utf8");
    } catch {
      continue;
    }
    const m = /"moduleResolution"\s*:\s*"(node|node10|classic)"/i.exec(t);
    if (m && usesReact)
      info.push(
        `${name} has "moduleResolution": "${m[1]}": TypeScript cannot resolve ${REACT_PKG}/<universe> (the package only declares "exports"); set "moduleResolution": "bundler" (packages-and-css.md, TSCONFIG)`,
      );
  }
  for (const [f, l] of otherOld)
    info.push(
      workspaceRoot
        ? `${rel(f)} declares ${l.join(" ")}: workspace package, scanned with this root; better: run the procedure once per application folder`
        : `${rel(f)} declares ${l.join(" ")}: its folder is another package and is NOT scanned. A template or an example: leave it, it does not count in MANUAL nor in the VERDICT. Another application: run the whole procedure on its folder afterwards`,
    );
  if (deps.has("bootstrap"))
    info.push(
      "bootstrap dependency: Canopée ships its own reboot and grid; remove bootstrap if nothing else uses it",
    );
  if (opts.target === 2 && ctx.universes.size)
    info.push(
      "2.0 wraps all Canopée CSS in @layer: your own unlayered CSS now wins over it; review overrides (canopee-1-to-2.md, LAYERS)",
    );
  if (opts.target === 2 && usedUniverses.has("distributeur"))
    info.push(
      "2.0: Header Name renders <p> instead of <h2>; update tests that look for that heading (canopee-1-to-2.md, NAME)",
    );

  // install command
  const pm = packageManager(root);
  const ver = opts.target === 2 ? "@next" : "@^1.8.0";
  const toAdd = [];
  if (usesReact)
    toAdd.push(
      `${REACT_PKG}${ver}`,
      `${CSS_PKG}${ver}`,
      "@material-symbols/svg-400",
      "@material-symbols/svg-700",
    );
  else if (usesCssOnly || oldDeps.length)
    toAdd.push(`${CSS_PKG}${ver}`, "@material-symbols/svg-400");
  const already =
    toAdd.length &&
    opts.target === 1 &&
    ctx.canopeeMajor === 1 &&
    !oldDeps.length;
  let install = null;
  if (toAdd.length && !already) {
    const rm = {
      npm: "npm uninstall",
      yarn: "yarn remove",
      pnpm: "pnpm remove",
    }[pm];
    const addCmd = { npm: "npm install", yarn: "yarn add", pnpm: "pnpm add" }[
      pm
    ];
    install = `${oldDeps.length ? `${rm} ${oldDeps.join(" ")} && ` : ""}${addCmd} ${toAdd.join(" ")}`;
  }
  // the rewritten imports follow no formatter: give the project's Prettier the files to format
  const format =
    opts.write && rewrittenFiles.size && deps.has("prettier")
      ? `${{ npm: "npx prettier --write", yarn: "yarn prettier --write", pnpm: "pnpm exec prettier --write" }[pm]} ${[
          ...rewrittenFiles.keys(),
        ]
          .map((f) => (/\s/.test(rel(f)) ? `"${rel(f)}"` : rel(f)))
          .join(" ")}`
      : null;

  // report
  {
    const seen = new Set();
    items = items.filter((i) => {
      const k = `${i.file}|${i.line}|${i.code}|${i.detail}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }
  // work order: styles break the build and every page, imports break the typecheck, then components
  const rank = (code) =>
    /^(SASS|SASS_VAR|SASS_MIXIN|SASS_VALUE|CSS_MISSING|CSS_ORDER|TK_CSS_IN_STYLES|OLD_LF|DS0|TOKEN_REMOVED)$/.test(
      code,
    )
      ? 0
      : /^(EXPORT_MISSING|OLD_STRING|TK_NAMESPACE|TK_REMOVED|TK_ENUM|REMOVED_2|NO_CAST)$/.test(
            code,
          )
        ? 1
        : 2;
  items.sort((a, b) =>
    rank(a.code) !== rank(b.code)
      ? rank(a.code) - rank(b.code)
      : a.code < b.code
        ? -1
        : a.code > b.code
          ? 1
          : a.file < b.file
            ? -1
            : a.file > b.file
              ? 1
              : a.line - b.line,
  );
  const shown = items.filter((i) => opts.all || i.breaksIn <= opts.target);
  const later = items.filter((i) => !opts.all && i.breaksIn > opts.target);
  if (opts.json) {
    process.stdout.write(
      JSON.stringify(
        {
          root,
          target: opts.target,
          written: opts.write,
          oldDependencies: oldDeps,
          universes: [...usedUniverses],
          install,
          auto: {
            count: autoCount,
            files: autoFiles,
            byKind: autoByKind,
            list: autoList,
          },
          manual: shown.map((i) => ({
            ...i,
            file: rel(i.file),
            ref: `${refBase}/${CODES[i.code]?.[1] || ""}`,
          })),
          laterFor2: later.length,
          info,
        },
        null,
        2,
      ) + "\n",
    );
    return;
  }
  const L = [];
  L.push(
    `canopee-migrate: ${opts.write ? "WRITE" : "DRY RUN (nothing written)"}, target ${opts.target === 2 ? "2.0 (next)" : "1.x (latest 1.8.0)"}`,
  );
  L.push(`project: ${root}`);
  L.push(
    `scanned: ${files.code.length} code files, ${files.style.length} style files`,
  );
  L.push(
    `old packages in package.json: ${oldDeps.length ? oldDeps.join(" ") : "none"}`,
  );
  L.push(
    `universes used: ${usedUniverses.size ? [...usedUniverses].join(", ") : "none found"}`,
  );
  L.push("");
  L.push(`INSTALL: ${install || "nothing to install"}`);
  for (const i of info) L.push(`NOTE: ${i}`);
  L.push("");
  L.push(
    `AUTO: ${autoCount} safe edits in ${autoFiles} files ${opts.write ? "WRITTEN" : "(run again with --write to apply)"}${
      autoCount
        ? ` [${Object.entries(autoByKind)
            .map(([k, v]) => `${k} ${v}`)
            .join(", ")}]`
        : ""
    }`,
  );
  if (opts.all) for (const a of autoList) L.push(`  ${a}`);
  if (format) L.push(`FORMAT: ${format}`);
  L.push("");
  if (!shown.length) L.push("MANUAL: nothing left for the script to report.");
  else {
    L.push(
      `MANUAL: ${shown.length} changes to make by hand, in this order (styles, then imports, then components). For each code, read the reference section (search the code in the file).`,
    );
    let cur = null;
    for (const i of shown) {
      if (i.code !== cur) {
        cur = i.code;
        const c = CODES[i.code] || ["", ""];
        L.push(`[${i.code}] ${c[0]} -> ${refBase}/${c[1]}`);
      }
      L.push(`  ${rel(i.file)}:${i.line}  ${i.detail}`);
    }
  }
  if (later.length) {
    L.push("");
    L.push(
      `LATER: ${later.length} deprecated usages still work in 1.x but break in 2.0 (run with --target 2 to list them).`,
    );
  }
  L.push("");
  if (hasState)
    L.push(
      `STATE: ${rel(statePath)} remembers the one-shot renames already applied; delete it when the migration is finished.`,
    );
  L.push(
    `RESULT: auto=${autoCount}${opts.write ? " written" : " pending"} manual=${shown.length} install=${install ? "yes" : "no"}`,
  );
  if (!opts.check && !autoCount && !shown.length && !install)
    L.push(
      "NEXT: nothing left for the script. The migration is finished only when --check prints VERDICT: DONE.",
    );
  process.stdout.write(L.join("\n") + "\n");
  if (opts.check) {
    const c = runChecks(root, pm, deps, rel, files.code);
    const open = [];
    if (newLeftover.length) {
      c.L.push(
        `CHECK leftover files: FAIL (${newLeftover.length} backup files not in the project before --write)`,
        ...newLeftover.slice(0, 20).map((f) => `  ${f}`),
        "FIX leftover: delete these files (your edits are in the source files, git keeps the history)",
      );
      open.push(`${newLeftover.length} backup files left`);
    }
    if (rootOld.length)
      open.push(`package.json still declares ${rootOld.join(" ")} (INSTALL)`);
    else if (usesReact && !rootDeps.has(REACT_PKG))
      open.push(`${REACT_PKG} missing from package.json (INSTALL)`);
    if (autoCount) open.push(`AUTO ${autoCount} (run --write)`);
    if (shown.length) open.push(`MANUAL ${shown.length}`);
    open.push(...c.failed);
    if (!c.count)
      open.push(
        "no typecheck, lint, test or build script found: run the checks by hand",
      );
    const dead = deadSelectorLines(root, files.style, files.code, texts, rel);
    if (dead.length)
      c.L.push(
        "",
        `VISUAL: ${dead.length} project style rules use a design system class that nothing renders (toolkit markup gone, a modifier class lost, or a rule already dead before): they compile and pass every check, but no longer apply. Check these pages, restyle on the Canopée markup or delete the rule, and list them in the report (packages-and-css.md, VISUAL)`,
        ...dead.slice(0, 40),
        ...(dead.length > 40 ? [`  ... and ${dead.length - 40} more`] : []),
      );
    c.L.push(
      "",
      open.length
        ? `VERDICT: NOT DONE: ${open.join(", ")}. Do what the MANUAL and FIX lines say, then run --check again. Until VERDICT: DONE the migration is not finished: never report it as done, complete or successful.`
        : `VERDICT: DONE: nothing left for the script and ${c.count} checks passed. Then check visually the pages listed in SKILL.md${dead.length ? " and the VISUAL lines" : ""}.`,
    );
    process.stdout.write(c.L.join("\n") + "\n");
    process.exitCode = open.length ? 1 : 0;
  }
  if (opts.report) {
    const R = [
      `# Canopée migration checklist (target ${opts.target === 2 ? "2.0" : "1.x"})`,
      "",
    ];
    R.push(
      "Generated by canopee-migrate.mjs. Work from top to bottom (styles, then imports, then components);",
      "tick each line when done; delete this file only after `--check` prints `VERDICT: DONE`.",
      "",
    );
    if (install) R.push(`- [ ] Install: \`${install}\``);
    if (format) R.push(`- [ ] Format: \`${format}\``);
    for (const i of info) R.push(`- [ ] ${i}`);
    let cur = null;
    for (const i of shown) {
      if (i.code !== cur) {
        cur = i.code;
        const c = CODES[i.code] || ["", ""];
        R.push(
          "",
          `## ${i.code}: ${c[0]}`,
          "",
          `Reference: \`${refBase}/${c[1]}\` (search \`${i.code}\`)`,
          "",
        );
      }
      R.push(`- [ ] \`${rel(i.file)}:${i.line}\` ${i.detail}`);
    }
    R.push(
      "",
      "## Checks",
      "",
      "- [ ] `--check` prints `VERDICT: DONE` (typecheck, lint, tests and build pass, nothing left)",
      "- [ ] `.canopee-migrate.json` and this file deleted",
      "",
    );
    fs.writeFileSync(path.resolve(root, opts.report), R.join("\n"));
  }
}

main();

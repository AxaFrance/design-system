import {
  ClickItem,
  ContentItemMono,
  createClickItemParent,
  List,
  Svg,
} from "@axa-fr/design-system-look-and-feel-react";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";
import mailIcon from "@material-symbols/svg-400/outlined/mail-fill.svg";

export const Contacts = () =>
  [...Array(6).keys()].map((_, index) => (
    <List classModifier="first-separator-full-width" key="John Doe-agent">
      <ContentItemMono
        type="picture"
        picture="https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg"
        title="Texte principale"
        subtitle="Texte secondaire"
      />
      {index % 3 === 0 && (
        <ClickItem
          icon={<Svg src={callIcon} aria-hidden />}
          classModifier="small"
          parentClickComponent={createClickItemParent("a", {
            href: `tel:0601010101`,
          })}
        >
          06 01 01 01 01
        </ClickItem>
      )}

      <ClickItem
        icon={<Svg src={mailIcon} aria-hidden />}
        classModifier="small"
        parentClickComponent={createClickItemParent("a", {
          href: `mailto:john.doe@axa.fr`,
        })}
      >
        john.doe@axa.fr
      </ClickItem>
    </List>
  ));

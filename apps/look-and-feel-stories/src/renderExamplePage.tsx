import {
  DebugGrid,
  Title,
  TitleSize,
} from "@axa-fr/design-system-look-and-feel-react";
import { Contacts } from "./Grid/components/Contacts";
import { MainTitle } from "./Grid/components/MainTitle";
import { MyFooter } from "./Grid/components/MyFooter";
import { MyHeader } from "./Grid/components/MyHeader";
import { MyList } from "./Grid/components/MyList";

export const render = () => (
  <>
    <DebugGrid isCheckedByDefault />
    <MyHeader />
    <main className="grid example-page">
      <MainTitle />
      <div className="container-part">
        <div className="subgrid af-left-part">
          <Title size={TitleSize.L}>My list title</Title>
          <div className="subgrid af-list-part">
            <MyList />
            <MyList />
          </div>
        </div>
        <div className="subgrid af-right-part">
          <Title size={TitleSize.L}>Contacts</Title>
          <div className="af-contacts-part subgrid">
            <Contacts />
          </div>
        </div>
      </div>
    </main>
    <MyFooter />
  </>
);

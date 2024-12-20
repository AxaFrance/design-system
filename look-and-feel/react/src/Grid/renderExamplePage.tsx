import { MyHeader } from "./components/MyHeader";
import { MyFooter } from "./components/MyFooter";
import { MainTitle } from "./components/MainTitle";
import { DebugGrid } from "./DebugGrid";
import { MyList } from "./components/MyList";
import { Contacts } from "./components/Contacts";
import { Title, TitleSize } from "../Title";

export const render = () => (
  <>
    <DebugGrid />
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

// eslint-disable-next-line import/no-extraneous-dependencies
import { DebugGrid, Heading } from "@axa-fr/design-system-apollo-react/lf";
import { Contacts } from "../components/Contacts";
import { MainTitle } from "../components/MainTitle";
import { MyFooter } from "../components/MyFooter";
import { MyHeader } from "../components/MyHeader";
import { MyList } from "../components/MyList";

export const Restitution = () => (
  <>
    <DebugGrid isCheckedByDefault />
    <MyHeader />
    <main className="grid example-page">
      <MainTitle />
      <div className="container-part">
        <div className="subgrid af-left-part">
          <Heading level={2}>My list title</Heading>
          <div className="subgrid af-list-part">
            <MyList />
            <MyList />
          </div>
        </div>
        <div className="subgrid af-right-part">
          <Heading level={2}>Contacts</Heading>
          <div className="af-contacts-part subgrid">
            <Contacts />
          </div>
        </div>
      </div>
    </main>
    <MyFooter />
  </>
);

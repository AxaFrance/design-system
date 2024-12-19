import { DebugGrid } from "./DebugGrid";
import { Card } from "./components/Card";
import { Offsets } from "./components/Offsets";

export const render = () => (
  <>
    <DebugGrid />
    <main className="grid">
      <h1 className="box">Bonjour, Samuel G.</h1>
      <div className="box box-example-1 subgrid">
        <h2 className="box">Mes contrats</h2>
        {[...Array(6).keys()].map((_, index) => (
          <Card key={crypto.randomUUID()} title={`contrat-${index + 1}`} />
        ))}
      </div>
      <div className="box box-example-2 subgrid">
        <h2 className="box">Profil</h2>
        <Card title="Mes coordonnées" />
      </div>
      <div className="box box-example-3 subgrid">
        <h2 className="box">Mes Infos</h2>
        <div className="box box-half" />
        <div className="box box-half" />
        <div className="box box-half" />
        <div className="box box-half" />
      </div>

      <div className="box box-custom">
        <h2 className="box">Custom</h2>
        <div className="box box-content1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
          dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos
          iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae
          necessitatibus similique eos! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut
          consectetur corrupti sed quos iste, nemo porro dicta necessitatibus
          aliquam! Ratione magni quae necessitatibus similique eos!
        </div>
        <div className="box box-content2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam,
          aliquid itaque magni sint natus earum praesentium minima. Laborum enim
          error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid
          itaque magni sint natus earum praesentium minima. Laborum enim error
          animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid
          itaque magni sint natus earum praesentium minima. Laborum enim error
          animi similique delectus vel. Ipsa deleniti ut ipsam quis.
        </div>
        <footer>@copyright</footer>
      </div>
      <Offsets />
    </main>
  </>
);

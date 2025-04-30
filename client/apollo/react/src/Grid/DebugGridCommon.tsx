import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";

export const DebugGridCommon = ({ cols = 12 }: { cols?: number }) => {
  return (
    <div className="debug-grid">
      <div className="grid">
        {[...Array(cols).keys()].map((col: number) => (
          <div key={col} className="cols" />
        ))}
      </div>
    </div>
  );
};

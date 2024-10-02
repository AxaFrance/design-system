import "@axa-fr/design-system-look-and-feel-css/dist/Loader/Loader.scss";

type LoaderProps = {
  border?: number;
  size?: number;
  text?: string;
};

const Loader = ({
  border = 5,
  size = 60,
  text = "Chargement en cours",
}: LoaderProps) => (
  <div
    role="alert"
    aria-busy
    aria-label={text}
    aria-live="assertive"
    className="af-loader__container"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      border: `${border}px solid #f3f3f3`,
      borderTop: `${border}px solid #00008f`,
    }}
  >
    <div className="af-loader__container-spin" aria-hidden="true" />
  </div>
);

Loader.displayName = "Loader";

export { Loader };

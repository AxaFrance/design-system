const InnerUser = ({ name, profile }: { name: string; profile?: string }) => (
  <>
    <span key="1" className="af-info-user__name">
      {name}
    </span>
    {profile ? (
      <span key="2" className="af-info-user__profile">
        [{profile}]
      </span>
    ) : null}
  </>
);

export { InnerUser };

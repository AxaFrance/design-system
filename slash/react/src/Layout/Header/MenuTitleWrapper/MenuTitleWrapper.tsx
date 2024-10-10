import { useCallback, useState } from "react";
import { NavBar } from "../NavBar";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";

type TMenuTitleWrapperProps = {
  children: React.ReactNode;
  menuVisible: boolean;
  subtitle: string;
  title: string;
};

const MenuTitleWrapper = ({
  children,
  menuVisible,
  subtitle,
  title,
}: TMenuTitleWrapperProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(menuVisible);

  const handleClick = useCallback(() => {
    const { body } = document;
    body.classList.toggle("af-menu-open");
    setIsMenuVisible((prev) => !prev);
  }, []);

  return (
    <>
      <NavBar isVisible={isMenuVisible} onClick={handleClick}>
        {children}
      </NavBar>
      <HeaderTitle title={title} subtitle={subtitle} toggleMenu={handleClick} />
    </>
  );
};

export { MenuTitleWrapper };

import { useCallback, useState, type ComponentProps } from "react";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { NavBar } from "../NavBar";

type TMenuTitleWrapperProps = {
  children: React.ReactNode;
  menuVisible: boolean;
  subtitle: string;
  title: string;
  navBarProps?: Partial<ComponentProps<typeof NavBar>>;
};

const MenuTitleWrapper = ({
  children,
  menuVisible,
  subtitle,
  title,
  navBarProps,
}: TMenuTitleWrapperProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(menuVisible);

  const handleClick = useCallback(() => {
    const { body } = document;
    body.classList.toggle("af-menu-open");
    setIsMenuVisible((prev) => !prev);
  }, []);

  return (
    <>
      <NavBar isVisible={isMenuVisible} onClick={handleClick} {...navBarProps}>
        {children}
      </NavBar>
      <HeaderTitle title={title} subtitle={subtitle} toggleMenu={handleClick} />
    </>
  );
};

export { MenuTitleWrapper };

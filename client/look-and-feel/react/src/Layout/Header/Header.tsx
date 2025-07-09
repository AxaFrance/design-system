import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import logo from "@axa-fr/design-system-look-and-feel-css/logo-axa.svg";
import {
  Children,
  ComponentProps,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import menu from "@material-symbols/svg-400/outlined/menu.svg";
import { NavBar } from "./NavBar";
import { PreviousLink } from "./PreviousLink/PreviousLink";
import { Button, IconBg, Modal, Svg } from "../..";
import { BurgerMenu } from "./BurgerMenu";
import { BREAKPOINT } from "../../utilities";

type HeaderProps = PropsWithChildren<
  {
    defaultActiveLink?: number;
    previousLink?: ReactNode;
    rightItem?: ReactElement | ReactElement[];
  } & ComponentProps<"header">
>;

export const Header = ({
  children,
  defaultActiveLink,
  previousLink,
  rightItem,
  ...props
}: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<number | undefined>(
    defaultActiveLink,
  );
  const ref = useRef<HTMLDialogElement>(null);

  const toggleMenu = () => {
    ref.current?.showModal();
  };

  const resetActiveLink = useCallback(
    () => setActiveLink(defaultActiveLink),
    [defaultActiveLink],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > BREAKPOINT.MD && ref.current?.open) {
        ref.current?.close();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current?.open]);

  const burgerMenuItems = useMemo<ReactElement[]>(() => {
    const mapValidElements = (
      items: ReactNode | ReactElement | ReactElement[],
    ) =>
      (
        Children.map(items, (child) => isValidElement(child) && child) ?? []
      ).filter(Boolean);
    const validLinks = mapValidElements(children);

    if (!rightItem) {
      return [...validLinks];
    }

    if (Array.isArray(rightItem)) {
      return [...validLinks, ...mapValidElements(rightItem)];
    }

    return [...validLinks, rightItem];
  }, [children, rightItem]);

  return (
    <>
      <header className="af-header" {...props}>
        <div className="af-header-container">
          <div className="af-header-left-item">
            <img className="af-logo" src={logo} alt="logo AXA" />
            <NavBar activeLink={activeLink} setActiveLink={setActiveLink}>
              {children}
            </NavBar>
          </div>
          {rightItem ? (
            <div className="af-header-right-item">{rightItem}</div>
          ) : null}
          {burgerMenuItems && burgerMenuItems.length > 0 ? (
            <Button
              aria-label="Ouvrir le menu"
              onClick={toggleMenu}
              variant="ghost"
            >
              <IconBg>
                <Svg src={menu} aria-hidden="true" />
              </IconBg>
            </Button>
          ) : null}
        </div>
      </header>
      <PreviousLink handleClick={resetActiveLink}>{previousLink}</PreviousLink>
      <Modal
        ref={ref}
        onClose={() => {
          ref.current?.close();
        }}
        onCancel={() => {
          ref.current?.close();
        }}
        title="Menu principal"
        role="dialog"
      >
        <BurgerMenu
          refModal={ref}
          items={burgerMenuItems}
          setActiveLink={setActiveLink}
        />
      </Modal>
    </>
  );
};

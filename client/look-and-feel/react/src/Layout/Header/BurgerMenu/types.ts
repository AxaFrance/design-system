import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";
import { HeaderItemProps } from "../types";

export type BurgerMenuProps = {
  isOpen: boolean;
  links?: HeaderItemProps[];
  rightItems?: HeaderItemProps[];
  setActiveLink: Dispatch<SetStateAction<number | undefined>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} & ComponentPropsWithoutRef<"nav">;

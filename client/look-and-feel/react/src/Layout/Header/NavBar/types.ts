import type { ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";
import { HeaderItemProps } from "../types";

export type NavBarProps = {
  activeLink?: number;
  links?: HeaderItemProps[];
  setActiveLink: Dispatch<SetStateAction<number | undefined>>;
} & ComponentPropsWithoutRef<"nav">;

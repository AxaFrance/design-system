import accountBalanceIcon from "@material-symbols/svg-400/outlined/account_balance-fill.svg";
import accountBalanceWalletIcon from "@material-symbols/svg-400/outlined/account_balance_wallet-fill.svg";
import type { MessageBarVariant } from "./types";

export const messageBarVariants: Record<MessageBarVariant, MessageBarVariant> =
  {
    blue: "blue",
    red: "red",
  };

export { accountBalanceIcon, accountBalanceWalletIcon };

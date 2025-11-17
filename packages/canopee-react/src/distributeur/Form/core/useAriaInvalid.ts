import { MessageTypes } from ".";

export const useAriaInvalid = (
  message?: string,
  forceDisplayMessage?: boolean,
  messageType?: MessageTypes,
) =>
  Boolean(message && forceDisplayMessage && messageType === MessageTypes.error);

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import close from "@material-symbols/svg-400/outlined/close.svg";
import { PropsWithChildren } from "react";
import {
  ButtonClient as Button,
  Variants,
  Variants as ButtonVariants,
} from "../Button/Button";
import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";
import { Svg } from "../Svg";
import { TModalType } from "./type";

export const Modal = ({
  modalRef,
  idTitle,
  idContent,
  iconTitle,
  title,
  subtitle,
  hasCloseBtn,
  handleCloseModal,
  actionCallback,
  children,
  actions,
  fullWidthButtons,
}: PropsWithChildren<TModalType>) => (
  <dialog
    ref={modalRef}
    className="af-modal"
    aria-labelledby={idTitle}
    aria-describedby={idContent}
  >
    <div id={idTitle} className="af-modal__top">
      {iconTitle}
      <h2 className="af-modal__top-title">
        <div>
          <div className="af-modal__top-title-text">{title}</div>
          {subtitle && (
            <span className="af-modal__top-title-subtitle">{subtitle}</span>
          )}
        </div>
        {hasCloseBtn && (
          <Button
            className="af-modal__top-title-close-btn"
            onClick={handleCloseModal}
            variant={Variants.ghost}
            type="button"
            aria-label="close"
          >
            <Svg src={close} width={32} height={32} />
          </Button>
        )}
      </h2>
    </div>
    <div id={idContent} className="af-modal__content">
      {children}
      {actions && (
        <div
          className={`af-modal__actions${fullWidthButtons ? " af-modal__actions--fullWidth" : ""} `}
        >
          {actions?.primary && (
            <Button
              variant={ButtonVariants.primary}
              onClick={() => actionCallback(actions?.primary?.callback)}
              disabled={actions?.primary.disabled}
            >
              {actions?.primary.text}
            </Button>
          )}
          {actions?.secondary && (
            <Button
              variant={ButtonVariants.secondary}
              onClick={() => actionCallback(actions?.secondary?.callback)}
              disabled={actions?.secondary.disabled}
            >
              {actions?.secondary.text}
            </Button>
          )}
          {actions?.tertiary && (
            <Button
              variant={ButtonVariants.tertiary}
              onClick={() => actionCallback(actions?.tertiary?.callback)}
              disabled={actions?.tertiary.disabled}
            >
              {actions?.tertiary.text}
            </Button>
          )}
        </div>
      )}
    </div>
  </dialog>
);

import { render, screen } from "@testing-library/react";
import { Summary } from "../index";

describe("Composant Summary", () => {
  it("ne s'affiche pas si messages est vide", () => {
    render(<Summary messages={[]} isVisible />);
    expect(screen.queryByText(/Invalid form/i)).toBeNull();
  });

  it("ne s’affiche pas si isVisible est false", () => {
    render(<Summary messages={["Erreur 1"]} isVisible={false} />);
    expect(screen.queryByText(/Erreur 1/i)).toBeNull();
  });

  it("affiche les messages quand ils sont fournis et visibles", () => {
    const messages = ["Erreur 1", "Erreur 2"];
    render(<Summary messages={messages} isVisible />);
    messages.forEach((msg) => {
      expect(screen.getByText(msg)).toBeInTheDocument();
    });
  });

  it("affiche un titre personnalisé si fourni", () => {
    const customTitle = "Attention";
    render(<Summary messages={["Erreur"]} title={customTitle} isVisible />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it("rend la liste de messages avec la bonne structure", () => {
    const messages = ["Erreur A", "Erreur B"];
    render(<Summary messages={messages} isVisible />);

    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();

    messages.forEach((msg) => {
      expect(screen.getByText(msg)).toBeInTheDocument();
    });
  });

  it("chaque message est rendu dans un élément <li>", () => {
    const messages = ["Msg1", "Msg2"];
    const { container } = render(<Summary messages={messages} isVisible />);
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(messages.length);
    listItems.forEach((li) => {
      expect(li).toBeInTheDocument();
    });
  });
});

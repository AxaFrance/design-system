import { render, fireEvent } from '@testing-library/react';
import { TabsClient, Direction } from '../Tabs';

describe('TabsClient', () => {
    const setupTabTest = () => render(<TabsClient
        items={[
            { title: "Tab 1", content: "Content 1" },
            { title: "Tab 2", content: "Content 2" },
            { title: "Tab 3", content: "Content 3" },
        ]}
        direction={Direction.center}
        preSelectedTabIndex={0}></TabsClient>);

    test('renders all tabs and their contents', () => {
        const { getByText } = setupTabTest();
        expect(getByText("Tab 1")).toBeInTheDocument();
        expect(getByText("Content 1")).toBeInTheDocument();
        expect(getByText("Tab 2")).toBeInTheDocument();
        expect(getByText("Content 2")).toBeInTheDocument();
        expect(getByText("Tab 3")).toBeInTheDocument();
        expect(getByText("Content 3")).toBeInTheDocument();
    });

    test('initially focuses the first tab', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        expect(firstTab.ariaSelected).toBe('true');
        expect(secondTab.ariaSelected).toBe('false');
        expect(thirdTab.ariaSelected).toBe('false');
    });

    test('changes tab content on tab click', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        expect(firstTab.ariaSelected).toBe('true');
        expect(secondTab.ariaSelected).toBe('false');
        expect(thirdTab.ariaSelected).toBe('false');
        fireEvent.click(secondTab);
        expect(secondTab.ariaSelected).toBe('true');
        expect(firstTab.ariaSelected).toBe('false');
        expect(thirdTab.ariaSelected).toBe('false');
    });

    test('navigates to the next tab on ArrowRight', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        fireEvent.keyDown(firstTab, { key: 'ArrowRight' });
        expect(secondTab.ariaSelected).toBe('true');
        expect(thirdTab.ariaSelected).toBe('false');
        expect(firstTab.ariaSelected).toBe('false');
        fireEvent.keyDown(secondTab, { key: 'ArrowRight' });
        expect(thirdTab.ariaSelected).toBe('true');
        expect(secondTab.ariaSelected).toBe('false');
        expect(firstTab.ariaSelected).toBe('false');
        fireEvent.keyDown(thirdTab, { key: 'ArrowRight' });
        expect(firstTab.ariaSelected).toBe('true');
        expect(thirdTab.ariaSelected).toBe('false');
        expect(secondTab.ariaSelected).toBe('false');
    });

    test('navigates to the previous tab on ArrowLeft', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        fireEvent.keyDown(firstTab, { key: 'ArrowLeft' });
        expect(thirdTab.ariaSelected).toBe('true');
        expect(firstTab.ariaSelected).toBe('false');
        expect(secondTab.ariaSelected).toBe('false');
        fireEvent.keyDown(thirdTab, { key: 'ArrowLeft' });
        expect(secondTab.ariaSelected).toBe('true');
        expect(thirdTab.ariaSelected).toBe('false');
        expect(firstTab.ariaSelected).toBe('false');
        fireEvent.keyDown(secondTab, { key: 'ArrowLeft' });
        expect(firstTab.ariaSelected).toBe('true');
        expect(secondTab.ariaSelected).toBe('false');
        expect(thirdTab.ariaSelected).toBe('false');
    });
    test('navigates to the next tab on random Key', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        fireEvent.keyDown(firstTab, { key: 'Escape' });
        expect(firstTab.ariaSelected).toBe('true');
        expect(thirdTab.ariaSelected).toBe('false');
        expect(secondTab.ariaSelected).toBe('false');
    });

    test('jumps to the first tab on Home key', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        fireEvent.keyDown(secondTab, { key: 'Home' });
        expect(firstTab.tabIndex).toBe(0);
        expect(firstTab.ariaSelected).toBe('true');
        expect(thirdTab.ariaSelected).toBe('false');
    });

    test('jumps to the last tab on End key', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        fireEvent.keyDown(firstTab, { key: 'End' });
        expect(thirdTab.ariaSelected).toBe('true');
        expect(secondTab.ariaSelected).toBe('false');
    });

    test('displays the correct tab content when a tab is clicked', () => {
        const { getAllByRole } = setupTabTest();
        const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
        fireEvent.click(secondTab);
        expect(secondTab.ariaSelected).toBe('true');
        expect(firstTab.ariaSelected).toBe('false');
        expect(thirdTab.ariaSelected).toBe('false');
    });

    test('renders component with 0 tabs', () => {
        const { getByRole } = render(<TabsClient
            items={[]}
            preSelectedTabIndex={0}></TabsClient>);
        expect(getByRole('tablist').children.length).toBe(0);

    });
});
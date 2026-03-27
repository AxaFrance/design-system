# Modal

## Overview
The Modal component displays content in a dialog box overlaying the page. It supports multiple sizes and provides header, body, and footer sections for structured content.

## Import
```tsx
import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  BooleanModal
} from "@axa-fr/canopee-react/distributeur";
```

## Components

### Modal
Main modal container and coordinator.

### ModalHeader / ModalHeaderBase
Header section with title and close button.

### ModalBody
Content area of the modal.

### ModalFooter
Footer section, typically for action buttons.

### BooleanModal
Specialized modal for yes/no confirmation dialogs.

## Props

### Modal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"" \| "lg" \| "sm"` | `""` | Modal size (empty = default) |
| `onSubmit` | `() => void` | - | Submit/confirm handler |
| `onCancel` | `() => void` | - | Cancel/close handler |
| `onOutsideTap` | `() => void` | - | Click outside handler |
| `children` | `ReactNode` | - | Modal content |

### ModalHeader / ModalHeaderBase

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string \| ReactNode` | - | Header title |
| `onClose` | `() => void` | - | Close button click handler |
| `children` | `ReactNode` | - | Custom header content |

### ModalBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Body content |

### ModalFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content (usually buttons) |

## Basic Usage

### Simple Modal
```tsx
import { useRef } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@axa-fr/canopee-react/distributeur";

const SimpleModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleOpen = () => {
    modalRef.current?.showModal?.();
  };
  
  const handleClose = () => {
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      
      <Modal ref={modalRef} onCancel={handleClose}>
        <ModalHeader title="Modal Title" onClose={handleClose} />
        <ModalBody>
          This is the modal content.
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
```

## Sizes

### Default Size
```tsx
<Modal ref={modalRef}>
  {/* content */}
</Modal>
```

### Large Size
```tsx
<Modal ref={modalRef} size="lg">
  {/* content */}
</Modal>
```

### Small Size
```tsx
<Modal ref={modalRef} size="sm">
  {/* content */}
</Modal>
```

## Confirmation Dialog

```tsx
const ConfirmationModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleConfirm = () => {
    console.log("Action confirmed");
    modalRef.current?.close?.();
  };
  
  return (
    <Modal 
      ref={modalRef} 
      onSubmit={handleConfirm}
      onCancel={() => modalRef.current?.close?.()}
    >
      <ModalHeader 
        title="Confirm Action" 
        onClose={() => modalRef.current?.close?.()}
      />
      <ModalBody>
        Are you sure you want to proceed? This action cannot be undone.
      </ModalBody>
      <ModalFooter>
        <Button 
          variant="secondary" 
          onClick={() => modalRef.current?.close?.()}
        >
          Cancel
        </Button>
        <Button 
          variant="danger" 
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};
```

## Form in Modal

```tsx
const FormModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button onClick={() => modalRef.current?.showModal?.()}>
        Add User
      </Button>
      
      <Modal ref={modalRef}>
        <ModalHeader 
          title="Add New User" 
          onClose={() => modalRef.current?.close?.()}
        />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <TextInput
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <TextInput
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button 
            variant="secondary" 
            onClick={() => modalRef.current?.close?.()}
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              handleSubmit({ preventDefault: () => {} } as any);
            }}
          >
            Add User
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
```

## BooleanModal (Yes/No Dialog)

```tsx
import { BooleanModal } from "@axa-fr/canopee-react/distributeur";

const DeleteConfirmation = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleDelete = () => {
    console.log("Deleted");
    modalRef.current?.close?.();
  };
  
  return (
    <>
      <Button 
        variant="danger" 
        onClick={() => modalRef.current?.showModal?.()}
      >
        Delete Item
      </Button>
      
      <BooleanModal
        ref={modalRef}
        title="Delete Item?"
        submitLabel="Delete"
        cancelLabel="Keep"
        onSubmit={handleDelete}
        onCancel={() => modalRef.current?.close?.()}
      >
        This item will be permanently deleted. Are you sure?
      </BooleanModal>
    </>
  );
};
```

## Click Outside to Close

```tsx
const DismissibleModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  return (
    <Modal 
      ref={modalRef}
      onOutsideTap={() => modalRef.current?.close?.()}
    >
      <ModalHeader 
        title="Click outside to close" 
        onClose={() => modalRef.current?.close?.()}
      />
      <ModalBody>
        Content here. Click outside or click X to dismiss.
      </ModalBody>
    </Modal>
  );
};
```

## Rich Content Modal

```tsx
const ArticleModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  return (
    <Modal ref={modalRef} size="lg">
      <ModalHeader 
        title="Article Preview" 
        onClose={() => modalRef.current?.close?.()}
      />
      <ModalBody>
        <img src="banner.jpg" alt="Article" style={{ width: "100%" }} />
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
        <section>
          <h3>Section</h3>
          <p>More content...</p>
        </section>
      </ModalBody>
      <ModalFooter>
        <Button 
          variant="secondary" 
          onClick={() => modalRef.current?.close?.()}
        >
          Close
        </Button>
        <Button variant="primary">
          Read Full Article
        </Button>
      </ModalFooter>
    </Modal>
  );
};
```

## Accessibility
- Modals trap focus (can't tab out)
- Escape key closes modal (when programmed)
- ARIA attributes for dialog semantics
- Close button has accessible label
- Backdrop prevents interaction with background
- Semantic header/body/footer structure

## Best Practices
- Use modal for critical actions or confirmations
- Keep modal content focused and concise
- Provide clear close button and alternative (Cancel button)
- Use appropriate size to fit content
- Avoid nested modals when possible
- Always provide a way to close without action
- Use confirm dialogs for destructive actions
- Test keyboard navigation (Tab, Escape)

## CSS Classes
- `.af-modal` - Base modal class
- `.af-modal--lg` - Large modal
- `.af-modal--sm` - Small modal
- `.af-modal__header` - Header section
- `.af-modal__body` - Body section
- `.af-modal__footer` - Footer section

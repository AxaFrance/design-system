import {
  MultiMessage,
  messageVariants,
  type Notification,
} from "@axa-fr/canopee-react/client";
import { type Args } from "storybook/internal/types";

export const renderMultiMessageAll = () => {
  const singleNotification: Notification[] = [
    {
      key: "Single Notification",
      value:
        "This is a single notification without navigation controls. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const multipleNotifications: Notification[] = [
    {
      key: "Important Update",
      value:
        "Your account has been successfully updated. All changes have been saved and will take effect immediately.",
    },
    {
      key: "New Feature Available",
      value:
        "We've added a new feature to help you manage your notifications more efficiently. Check it out in the settings menu.",
    },
    {
      key: "Maintenance Schedule",
      value:
        "Scheduled maintenance will occur this weekend from 2:00 AM to 4:00 AM. During this time, some services may be temporarily unavailable.",
    },
    {
      key: "Security Notice",
      value:
        "We've enhanced our security measures to better protect your data. No action is required from your side.",
    },
  ];

  const customLabels: Notification[] = [
    {
      key: "Message 1",
      value: "This example uses custom labels for the navigation controls.",
    },
    {
      key: "Message 2",
      value: "Previous and next buttons have different aria-labels.",
    },
    {
      key: "Message 3",
      value: "The separator text is also customized.",
    },
  ];

  return (
    <div className="af-multimessage-demo">
      <div>
        <h2>Single Notification</h2>
        <MultiMessage notifications={singleNotification} />
      </div>

      <div>
        <h2>Multiple Notifications</h2>
        <MultiMessage notifications={multipleNotifications} />
      </div>

      <div>
        <h2>All Variants</h2>
        {Object.values(messageVariants).map((variant) => (
          <div key={variant}>
            <h3>{variant.charAt(0).toUpperCase() + variant.slice(1)}</h3>
            <MultiMessage
              notifications={multipleNotifications}
              variant={variant}
            />
          </div>
        ))}
      </div>

      <div>
        <h2>Custom Labels</h2>
        <MultiMessage
          notifications={customLabels}
          previousLabel="Previous message"
          nextLabel="Next message"
          separatorText="of"
        />
      </div>

      <div>
        <h2>With Custom Heading Level</h2>
        <MultiMessage notifications={multipleNotifications} heading="h3" />
      </div>
    </div>
  );
};

export const renderMultiMessage = (args: Args) => <MultiMessage {...args} />;

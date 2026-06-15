import type { TimelineListItem } from "./Timeline";

export const formatDate = (date?: Date) => {
  if (!date) {
    return "";
  }

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export const isDateInFuture = (date?: Date) => {
  if (!date) {
    return true;
  }

  return date > new Date();
};

export const getTimelineItemKey = (item: TimelineListItem) => {
  const dateKey = item.date ? item.date.toISOString() : "without-date";
  const headerKey = typeof item.header === "string" ? item.header : "header";
  const detailsKey =
    typeof item.details === "string" ? item.details : "details";

  return `timeline-item-${dateKey}-${headerKey}-${detailsKey}`;
};

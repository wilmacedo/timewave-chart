import { format } from "date-fns";

export function formatDate(timestamp: number) {
  const date = new Date(timestamp * 1000);

  return format(date, "MMM dd, yyyy");
}

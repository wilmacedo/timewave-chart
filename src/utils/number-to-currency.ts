export function numberToCurrency(amount: number | string) {
  if (typeof amount === "string") {
    amount = Number(amount);
  }

  if (isNaN(amount)) {
    return "N/A";
  }

  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

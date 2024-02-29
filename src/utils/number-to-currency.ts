export function numberToCurrency(amount: number | string) {
  if (typeof amount === "string") {
    amount = Number(amount);
  }

  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

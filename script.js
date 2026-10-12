const toggle = document.getElementById("billing-toggle");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");

const prices = document.querySelectorAll(".amount");
const proNote = document.querySelector('[data-note="pro"]');
const businessNote = document.querySelector('[data-note="business"]');

function updateBilling(isYearly) {
  toggle.setAttribute("aria-checked", String(isYearly));
  toggle.setAttribute(
    "aria-label",
    isYearly ? "Switch to monthly billing" : "Switch to yearly billing"
  );

  monthlyLabel.classList.toggle("selected", !isYearly);
  yearlyLabel.classList.toggle("selected", isYearly);

  prices.forEach(price => {
    const amount = isYearly
      ? price.dataset.yearly
      : price.dataset.monthly;

    price.textContent = `$${amount}`;
  });

  proNote.textContent = isYearly
    ? "Billed $180 per year"
    : "Billed monthly";

  businessNote.textContent = isYearly
    ? "Billed $372 per year"
    : "Billed monthly";
}

toggle.addEventListener("click", () => {
  const isYearly = toggle.getAttribute("aria-checked") === "true";
  updateBilling(!isYearly);
});
export function parseDuration(duration) {
  const match = duration.match(/(\d+)\s*(month|year|day)/i);
  if (!match) return 0;

  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();

  if (unit.includes("month")) return value;
  if (unit.includes("year")) return value * 12;
  if (unit.includes("day")) return value / 30; // Approximate conversion

  return 0;
}
const calculateIGST = (amount, igstRate = 18) => {
  return (amount * igstRate) / 100;
};

const calculateTotalExclIGST = (amount, discount = 0) => {
  return amount - discount;
};

const calculateTotalAmount = (totalExclIGST, igstAmount) => {
  return totalExclIGST + igstAmount;
};

const calculateAmountDue = (totalAmount, paidAmount) => {
  return Math.max(0, totalAmount - paidAmount);
};
 
export const generateInvoiceNumber = () => {
  const timestamp = new Date().toISOString().replace(/[-:T.Z]/g, "");
  const randomPart = Math.floor(Math.random() * 9000) + 1000; 
  return `MV-${timestamp}-${randomPart}`;
};

export const calculateNextBillingDate = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start >= end) {
    return null;
  }

  end.setDate(end.getDate() + 1);
  return end.toISOString().split("T")[0];
};

export const formatDate = (dateString, locale = "en-IN") => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
};

// Function to calculate all financial details
export const calculateInvoiceDetails = ({amount, discount = 0, igstRate = 18, paidAmount = 0}) => {
  const totalExclIGST = calculateTotalExclIGST(amount, discount);
  const igstAmount = calculateIGST(totalExclIGST, igstRate);
  const totalAmount = calculateTotalAmount(totalExclIGST, igstAmount);
  const amountDue = calculateAmountDue(totalAmount, paidAmount);

  return {
    discount,
    totalExclIGST,
    igstAmount,
    igstTotal: igstAmount, 
    totalAmount,
    amountDue,
  };
};


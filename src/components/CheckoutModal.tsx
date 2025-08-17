import React from "react";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  onProceed?: () => void;
  orderDetails: {
    name: string;
    items: Array<{
      productName: string;
      quantity: number;
      price: number;
    }>;
    total: number;
    address: string;
    phone: string;
    notes?: string;
  };
}

const ADMIN_PHONE = "6285250000690";

export function buildOrderMessage(order: CheckoutModalProps["orderDetails"]) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  let itemsText = order.items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.productName} (Quantity: ${
          item.quantity
        }) - ${formatPrice(item.price)}`
    )
    .join("\n");

  return (
    `Hello Polux Cabin Admin,\n` +
    `I would like to checkout my order with the following details:\n` +
    `Name: ${order.name}\n` +
    `Phone: ${order.phone}\n` +
    `Address: ${order.address}\n` +
    `Order Items:\n${itemsText}\n` +
    `Total Amount: ${formatPrice(order.total)}\n` +
    (order.notes ? `Additional Notes: ${order.notes}\n` : "") +
    `Please confirm and process my order. Thank you!`
  );
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  open,
  onClose,
  onProceed,
  orderDetails,
}) => {
  if (!open) return null;

  const handleProceed = () => {
    if (onProceed) onProceed();
    const message = encodeURIComponent(buildOrderMessage(orderDetails));
    const waLink = `https://wa.me/${ADMIN_PHONE}?text=${message}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm p-4 sm:p-6 mx-4 text-center">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-polux-grayDark">
          Checkout Confirmation
        </h3>
        <p className="mb-5 sm:mb-6 text-polux-grayDark text-sm sm:text-base">
          You will be redirected to <br />
          <span className="text-polux-green font-bold">WhatsApp</span>
          <span className="text-polux-red font-bold"> Admin</span>
          <br /> to continue the order process.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-polux-grayDark font-semibold hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleProceed}
            className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

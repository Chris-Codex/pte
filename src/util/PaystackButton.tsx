type PaystackArgs = {
  email: string;
  amount: number; // kobo
  onSuccess: (reference: string) => void;
};

const payWithPaystack = ({ email, amount, onSuccess }: PaystackArgs) => {
  const PaystackPop = (window as any).PaystackPop;

  if (!PaystackPop) {
    console.error("Paystack script not loaded");
    return;
  }

  const handler = PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount,
    currency: "NGN",
    callback: (response: any) => {
      onSuccess(response.reference);
    },
    onClose: () => {
      console.log("Payment cancelled");
    },
  });

  handler.openIframe();
};

export default payWithPaystack;

// components/paymentbutton.tsx
"use client";

import { Button } from "@/components/ui/button";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProButton() {
  const stripePromise = loadStripe(
    "pk_test_51RlU08P0Xk5vXGCCOWBOY09fjvmJaqNd6zftgfKtH9Xu1Jn0C8mf3MHi7rTpUjgNjqUpWDAUS72F4iFVkRVSZKFB00tr6ePoiA"
  );

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="submit" formMethod="post" variant={"default"}>
          Make Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="my-4  py-12 xl:max-w-screen-xl ">
        <DialogTitle className="text-xl font-semibold">
          Pro Membership
        </DialogTitle>

        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout className="max-h-[80dvh]" />
        </EmbeddedCheckoutProvider>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel Payment
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, ThumbsUp, DollarSign, IndianRupee } from "lucide-react";

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
}

const pricingPlans = [
  {
    name: "Basic Plan",
    description: "Perfect for students",
    priceUSD: 9.99,
    priceINR: 799,
    originalPriceUSD: 14.99,
    originalPriceINR: 1199,
    features: [
      "Unlimited project ideas",
      "All domains access",
      "Basic templates",
      "7 days delivery"
    ],
    color: "from-emerald-900/50 to-emerald-800/30",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    spotsLeft: 9
  },
  {
    name: "Premium Plan",
    description: "For teams & projects",
    priceUSD: 19.99,
    priceINR: 1599,
    originalPriceUSD: 29.99,
    originalPriceINR: 2399,
    features: [
      "Everything in Basic",
      "Priority support",
      "Team features",
      "3 days delivery"
    ],
    color: "from-orange-900/50 to-orange-800/30",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    spotsLeft: 5
  }
];

export function PricingModal({ open, onClose }: PricingModalProps) {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/95 border-white/10 text-white w-[95vw] max-w-xl p-4 rounded-xl">
        <DialogHeader className="space-y-2 text-center mb-4">
          <div className="flex justify-center">
            <span className="bg-orange-500/20 text-orange-400 text-xs px-2.5 py-1 rounded-full inline-flex items-center">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Pricing
            </span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold mt-1">
            Simple tasty plans
          </DialogTitle>
          <p className="text-lg sm:text-xl font-bold text-white/90">
            for every needs
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center gap-1 mt-2">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2.5 py-1 rounded-l-lg flex items-center gap-1 text-xs transition-colors ${
                currency === "USD"
                ? "bg-orange-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <DollarSign className="w-3 h-3" />
              USD
            </button>
            <button
              onClick={() => setCurrency("INR")}
              className={`px-2.5 py-1 rounded-r-lg flex items-center gap-1 text-xs transition-colors ${
                currency === "INR"
                ? "bg-orange-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <IndianRupee className="w-3 h-3" />
              INR
            </button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence mode="wait">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`relative bg-gradient-to-b ${plan.color} backdrop-blur-sm border border-white/10 rounded-lg p-3 space-y-3`}
              >
                <div>
                  <h3 className="text-base font-bold">{plan.name}</h3>
                  <p className="text-white/70 text-xs">{plan.description}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold">
                      {currency === "USD" ? "$" : "₹"}
                      {currency === "USD" ? plan.priceUSD : plan.priceINR}
                    </span>
                    <span className="text-white/50 line-through text-xs">
                      {currency === "USD" ? "$" : "₹"}
                      {currency === "USD" ? plan.originalPriceUSD : plan.originalPriceINR}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span className="text-[10px] text-white/70">
                      {plan.spotsLeft} spots left
                    </span>
                  </div>
                </div>

                <Button
                  className={`w-full ${plan.buttonColor} text-white font-semibold h-8 rounded text-xs`}
                  onClick={onClose}
                >
                  Get started
                </Button>

                <ul className="space-y-1.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-white/30 flex-shrink-0" />
                      <span className="text-white/70 text-[11px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-white/50">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0012 6.5a3.501 3.501 0 00-3.433 2.813l1.962.393A1.5 1.5 0 1112 11.5a1 1 0 00-1 1V14h2v-.645z"/>
            </svg>
            Payment secured by Stripe
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 
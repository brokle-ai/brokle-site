import { BrokleLoader } from "@/components/ui/brokle-loader";

export default function PricingLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <BrokleLoader size="lg" />
    </div>
  );
}

import { InvoicesTableAll } from "@/app/ui/invoices/table";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import CustomerHeader from "./customer-header";

export default async function Customers({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params?.query || "";

  return (
    <div className="w-full">
      {/* ✅ Zustand customer info */}
      <CustomerHeader />

      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl mb-2`}>Customers</h1>
      </div>

      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTableAll query={query} />
      </Suspense>
    </div>
  );
}

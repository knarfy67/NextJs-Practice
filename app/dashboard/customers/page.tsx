import { InvoicesTableAll } from "@/app/ui/invoices/table";
import { lusitana } from "@/app/ui/fonts";
import {
  InvoicesTableSkeleton,
  InvoicesTableSkeletonCustomers,
} from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Customers(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl mb-2`}>Customers</h1>
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeletonCustomers />}>
        {/* Remove currentPage, just pass query */}
        <InvoicesTableAll query={query} />
      </Suspense>
    </div>
  );
}

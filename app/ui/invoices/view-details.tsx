"use client";

import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function ViewInvoiceDetails({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const customer = customers.find((c) => c.id === invoice.customer_id);

  return (
    <div className="max-w-xl mx-auto overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-32" />

      <div className="p-6 space-y-6">
        {/* Customer */}
        <div className="flex items-center gap-4 -mt-14">
          {/* Customer Image */}
          {customer?.image_url && (
            <Image
              src={customer.image_url}
              alt={customer.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-white object-cover"
            />
          )}

          <div className="mt-6">
            <p className="text-sm text-gray-500">Customer</p>
            <p className="text-xl font-semibold">
              {customer?.name || "Unknown"}
            </p>
          </div>
        </div>

        {/* Amount */}
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Invoice Amount</p>
          <p className="text-2xl font-bold">${invoice.amount}</p>
        </div>

        {/* Status */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Status</p>

          {invoice.status === "pending" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-4 py-1 text-sm text-yellow-700">
              Pending <ClockIcon className="h-4 w-4" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-4 py-1 text-sm text-white">
              Paid <CheckIcon className="h-4 w-4" />
            </span>
          )}
        </div>

        {/* Back */}
        <div className="pt-4 flex justify-end">
          <Link
            href="/dashboard/invoices"
            className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200"
          >
            ← Back to Invoices
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function ViewCustomerDetails({
  id,
  customers,
}: {
  id: string;
  customers: CustomerField[];
}) {
  const customer = customers.find((c) => c.id === id);

  // Safety check
  if (!customer) {
    return <p className="text-center mt-10">Customer not found.</p>;
  }

  return (
    <div className="max-w-xl mx-auto overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-32" />

      <div className="p-6 space-y-6">
        {/* Customer */}
        <div className="flex items-center gap-4 -mt-14">
          {customer.image_url && (
            <Image
              src={customer.image_url}
              alt={customer.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-white object-cover"
            />
          )}

          <div className="mt-8">
            <p className="text-sm text-gray-500">Customer</p>
            <p className="text-xl font-semibold">{customer.name}</p>
            <p className="text-sm text-gray-600">{customer.email}</p>
          </div>
        </div>

        {/* Back */}
        <div className="pt-4 flex justify-end">
          <Link
            href="/dashboard/customers"
            className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200"
          >
            ← Back to Customers
          </Link>
        </div>
      </div>
    </div>
  );
}

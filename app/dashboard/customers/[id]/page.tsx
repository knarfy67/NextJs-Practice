import Form from "@/app/ui/invoices/view-customer-details";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchCustomersById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import ModalPage from "@/app/ui/customers/modals/customer-modals";

export default async function Page(props: {
  params: Promise<{ id: string; name: string; image_url: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const name = params.name;
  const image_url = params.image_url;
  const [customers] = await Promise.all([fetchCustomers()]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "View Customer",
            href: `/dashboard/customers/${id}&name=${name}`,
            active: true,
          },
        ]}
      />
      {/* <Form id={id} customers={customers} /> */}
      <ModalPage id={id} name={name} />
    </main>
  );
}

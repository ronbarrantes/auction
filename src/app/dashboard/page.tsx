import { DataTable } from "./data-table"
import { Payment, columns } from "./columns"

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "12345",
      amount: 100,
      status: 'pending',
      email: 'sample@email.com'
    },
    {
      id: "12345",
      amount: 400,
      status: 'success',
      email: 'sample@email.com'
    },
    {
      id: "67890",
      amount: 300,
      status: 'failed',
      email: 'sample@email.com'
    },
    {
      id: "98765",
      amount: 1000,
      status: 'processing',
      email: 'sample@email.com'
    },
    {
      id: "23489",
      amount: 250,
      status: 'success',
      email: 'sample@email.com'
    },
  ]
}


export default async function Dashboard() {
  const data = await getData()

  return (
    <div className="flex flex-col w-screen justify-center">
      <div className="flex w-full">
        <div className="flex w-1/2 border border-red-500">
          Quick Add form
        </div>
        <div className="flex w-1/2 border border-red-500">
          Quick info
        </div>
      </div>
      <div className="flex w-full border border-green-500">
        <DataTable columns={columns} data={data} />
      </div>
    </div>)
}



// import { unstable_noStore as noStore } from "next/cache"
// import { getData } from "@/actions/todoActions";
// import Todos from "@/components/Todos";

export default async function Dashboard() {
  // noStore()
  // const data = await getData()

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
        Information table
      </div>
    </div>)
}


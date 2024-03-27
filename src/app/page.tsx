import { getData } from "@/actions/todoActions";
import Todos from "@/components/Todos";

export default async function Home() {
  const data = await getData()
  return (
    <div className="flex w-screen justify-center">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <Todos todos={data} />
      </div>
    </div>)
}


import { getData } from "@/actions/todoActions";
import Todos from "@/components/Todos";

export default async function Home() {
  const data = await getData()
  return (
    <div className="flex w-screen justify-center">
      <div className="w-1/2">
        <Todos todos={data} />
      </div>
    </div>)
}


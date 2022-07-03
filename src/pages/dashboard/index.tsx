import { Carousel } from "flowbite-react";
import DefaultLayout from "../../components/layouts/defaultLayout";
import AllSheets from "../../components/sheets/allSheets";
import StatCard from "../../components/stats/statCard";

export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className="gap-y-8 flex flex-col">
        <div className="grid grid-cols-4 gap-x-6">
          <StatCard />

          <StatCard />

          <StatCard />

          <StatCard />
        </div>

        <AllSheets />
      </div>
    </DefaultLayout>
  );
}

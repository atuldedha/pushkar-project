import Head from "next/head";
import HomeCard from "../components/HomeCard/HomeCard";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Pushkar Project</title>
      </Head>

      <div className="flex flex-col lg:ml-[300px] py-4 px-8">
        <span className="text-4xl tracking-wide mt-4 text-gray-700 font-sans font-bold">
          Your Dashboard
        </span>

        <div className="border-b-[1px] border-b-gray-300 w-full my-6" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="basis-1/2">
            <HomeCard
              text="Reports"
              reportsAvailable={0}
              useButton2
              buttonText1="Kwd Finder"
              buttonText2="Import Bulk"
            />
          </div>
          <div className="basis-1/2">
            <HomeCard
              text="Credits Available"
              reportsAvailable={10}
              buttonText1="Add credits"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

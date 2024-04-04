import ListItem from "@/components/ListItem";
import Header from "@/components/layout/Header";
import React from "react";

function Page(props) {
  // CHƯA
  return (
    <div className="h-full w-full rounded-lg overflow-hidden overflow-y-auto bg-neutral-950">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">Welcome back</h1>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <ListItem
              image={"/images/liked.png"}
              name={"Liked Songs"}
              href={"liked"}
            />
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Newest songs</h1>
        </div>

        <div>List</div>
      </div>
    </div>
  );
}

export default Page;

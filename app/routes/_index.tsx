import type { V2_MetaFunction } from "@remix-run/node";
import { BaseEditor } from "~/components";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" w-screen h-screen text-white px-10 pt-10">
      <BaseEditor />
    </div>
  );
}

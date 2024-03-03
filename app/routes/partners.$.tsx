/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { redirect, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeMedia" },
    { name: "description", content: "Welcome to DragonForgeMedia!" },
  ];
};

export default function Index() {
  return (
    <div>
    </div>
  );
}

export async function loader() {
  return redirect("/partners", 303);
}
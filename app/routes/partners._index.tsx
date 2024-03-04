/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeNEXUS Partners" },
    { name: "description", content: "Welcome to DragonForgeNEXUS Partners!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="p-6">
        <div className="text-4xl">DragonForgeNEXUS Partnerships</div>
        <br />
        DragonForgeNEXUS partnerships are FYTS members and sponserships.<br />As of now we do not have any sponsors, thus the page is not available.
      </div>
    </div>
  );
}
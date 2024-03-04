/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { LoaderFunctionArgs, redirect, type MetaFunction } from "@remix-run/node";
import { SendDiscordWebhook } from "~/lib/redirectwebhookpartners";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeNEXUS Partners" },
    { name: "description", content: "Welcome to DragonForgeNEXUS Partners!" },
  ];
};

export default function Index() {
  return (
    <div>
    </div>
  );
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  SendDiscordWebhook(String(params["*"]), userAgent);
  return redirect("/partners", 303);
}
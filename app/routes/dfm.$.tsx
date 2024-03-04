/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { SendDiscordWebhook } from "~/lib/redirectwebhookdfm";

export default function Index() {
  return (
    <div>
    </div>
  );
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  SendDiscordWebhook(String(params["*"]), userAgent);
  return redirect("/dfm", 303);
}
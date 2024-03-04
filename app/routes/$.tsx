/* eslint-disable react/display-name */
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { SendDiscordWebhook } from "~/lib/404webhook";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  SendDiscordWebhook(String(params["*"]), userAgent);
  throw json({}, { status: 404 });
}

export default function () {
  return null;
}
/* eslint-disable react/display-name */
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { SendDiscordWebhook } from "~/lib/404webhook";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  SendDiscordWebhook(String(params["*"]));
  throw json({}, { status: 404 });
}

export default function () {
  return null;
}
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css";
import { canUseDOM } from "./ui/primitives/utils";
import { Footer } from "~/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/remix"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  { rel:"manifest", href:"/manifest.webmanifest" },
  { rel:"sitemap", href:"/sitemap-index.xml" }, // Generate the sitemap with https://www.xml-sitemaps.com then update sitemap.xml NOT sitemap-index.xml
];

export default function App() {
  return (
    <html lang="en" className=" bg-slate-900 min-h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className=" min-h-screen">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <SpeedInsights/>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (!canUseDOM) {
    console.error(error);
  }

  if (isRouteErrorResponse(error)) {
    return (
      <div className="bg-[#3f6212] min-h-screen">
      <Links />
        <div className="flex flex-1 flex-col justify-center text-white">
          <div className="text-center leading-none">
            <h1 className="font-mono text-[25vw]">{error.status}</h1>
            <a
              className="inline-block text-[8vw] underline"
              href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error.status}`}
            >
              {error.statusText}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#3f6212] min-h-screen">
      <div className="flex flex-1 flex-col justify-center text-white">
        <div className="text-center leading-none">
          <h1 className="text-[25vw]">Error</h1>
          <div className="text-3xl">
            Something went wrong! Please try again later.
          </div>
        </div>
      </div>
      </div>
  );
}
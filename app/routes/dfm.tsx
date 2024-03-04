/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { LoaderFunctionArgs, MetaFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { SendDiscordWebhook } from "~/lib/redirectwebhookdfm";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeMedia" },
    { name: "description", content: "Welcome to DragonForgeMedia!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function Header() {
  return(
    <div className="navbar bg-base-100 sticky top-0 drop-shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl" href="/dfm">DragonForgeMedia</a>
      </div>
      <div className="navbar-end">
        <div className="join">
          <a className="btn join-item" href="https://blog.dragonforgenexus.xyz">Blog</a>
          <a className="btn join-item" href="/">Hub</a>
        </div>
      </div>
    </div>
  );
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  SendDiscordWebhook(String(params["*"]), userAgent);
  return redirect("/", 303);
}
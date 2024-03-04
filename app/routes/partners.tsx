/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { type MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeNEXUS Partners" },
    { name: "description", content: "Welcome to DragonForgeNEXUS Partners" },
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
            <li><a href="/partners/fyts">FYTS</a></li>
            {/* <li><a>Portfolio</a></li>
            <li><a>About</a></li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl" href="/partners">Partners</a>
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
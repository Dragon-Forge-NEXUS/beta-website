/* eslint-disable react/no-unknown-property */
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
      <Header />
      <div className="p-6">
          <iframe src="https://discord.com/widget?id=1153106771926323270&theme=dark" title="discord" height="200" allowTransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin       allow-scripts" className=" w-[100%]"></iframe>
          <h5 className="text-center text-2xl">About DragonForgeMedia</h5>
          <p className="text-center">We are a small media studio owned by DragonForgeNEXUS.</p>
          <p className="text-center">As of now, we have no channels, more info in the recommended/recent blog post.</p>
          <div className="container mx-auto px-4 text-center pt-3">
            <div className="card w-100% bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:scale-105">
              <figure><img src="/imgs/Logos/Banner/Solid/3000x1500/PNG/DRAGONFORGEMEDIA-solid-banner.png" alt="DragonForgeNEXUS banner" /></figure>
              <div className="card-body">
                <h2 className="card-title">Recommended Blog Post</h2>
                <p>Goodbye to the DragonForgeGaming Youtube Channel<br />Say goodbye to the DragonForgeGaming Youtube Channel<br />Media | 2023-11-30</p>
                <div className="card-actions justify-end">
                  <a className="btn btn-primary" href="https://blog.dragonforgenexus.xyz/blog/goodbye-dragonforgegaming-youtube-channel/">View</a>
                </div>
              </div>
            </div>
        </div>
      </div>
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
        <a className="btn btn-ghost text-xl" href="/dfm">DragonForgeMEDIA</a>
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

export async function loader() {
  return redirect("/", 303);
}
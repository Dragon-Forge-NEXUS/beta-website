import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeNEXUS" },
    { name: "description", content: "Welcome to DragonForgeNEXUS!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="navbar bg-base-100 drop-shadow-lg">
        <a className="btn btn-ghost text-xl" href="/">DragonForgeNEXUS</a>
      </div>
      {/* <div className="mx-auto w-1/2 transition ease-in-out delay-150 hover:scale-105 bg-slate-800 text-slate-400 hover:bg-sky-800 duration-300 h-auto lg:px-8 md:px-6 sm:px-4 rounded-lg drop-shadow-lg py-4 text-center my-5">
        <a href="/dfm">
          <div className="text-2xl">DragonForgeMedia</div>
          <div>DragonForgeMedia is a small media studio that makes youtube videos, twitch streams and more social media based stuff.</div>
        </a>
      </div> */}
      <div className="mx-auto w-1/2 transition ease-in-out delay-150 hover:scale-105 bg-slate-800 text-slate-400 hover:bg-[#3f6212] duration-300 h-auto lg:px-8 md:px-6 sm:px-4 rounded-lg drop-shadow-lg py-4 text-center my-5">
        <a href="https://blog.dragonforgenexus.xyz/">
          <div className="text-2xl">DragonForgeNEXUS Blog</div>
        </a>
      </div>
      <div className="mx-auto w-1/2 transition ease-in-out delay-150 hover:scale-105 bg-slate-800 text-slate-400 hover:bg-[#3f6212] duration-300 h-auto lg:px-8 md:px-6 sm:px-4 rounded-lg drop-shadow-lg py-4 text-center my-5">
        <a href="/partners">
          <div className="text-2xl">DragonForgeNEXUS&apos; Partners</div>
          <div>DragonForgeNEXUS&apos; Partnerships.</div>
        </a>
      </div>
    </div>
  );
}

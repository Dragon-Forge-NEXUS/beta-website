/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

export default function Index() {
  return (
    <div>
      <div className="p-6">
        <iframe src="https://discord.com/widget?id=1153106771926323270&theme=dark" title="discord" height="200" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className=" w-[100%]"></iframe>
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
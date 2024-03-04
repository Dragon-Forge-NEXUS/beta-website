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
          <div className="text-center mx-auto container min-h-screen">
        <div className="flex flex-row mt-10">
          <div className="basis-1/2">
            <h2 className="text-xl">Permitted uses</h2>
            <h3 className="text-lg">Text Names</h3>
            <p>you may use:</p>
            <li>DragonForgeNEXUS</li>
            <li>DragonForgeMedia</li>
            <li>DragonForgeCode</li>
            <li>DragonForgeNews</li>
            <li>DragonForgeNetwork</li>
            <li>DragonForgeGaming</li>
            <p>to mention DragonForgeNEXUS or any of its &apos;Entities&apos;</p>
            <br />
            <h3 className="text-lg">Logos</h3>
            <p>You may use the logos in any case aproprate, as long as you dont;</p>
            <li>change the logo&apos;s color</li>
            <li>change the logo&apos;s formating and layout</li>
            <li>keep the size to 1:1 ratio with a minimum size of 50px with a recommened minimum of 100px</li>
          </div>
          <div className="basis-1/2">
            <h2 className="text-xl">Press Kit & Colors</h2>
            <h3 className="text-lg">Press kit download</h3>
            <p>The press kit currently contains logos and banners for each &apos;Entity&apos; aswell as DragonForgeNEXUS</p>
            <a className="btn btn-info" href="https://github.com/Dragon-Forge-NEXUS/Logos/blob/main/DragonForgeNEXUS%20logos.zip" download>Download</a>
            <br />
            <h3 className="text-lg">Colors</h3>
            <p>below is the list of colors that we use, they are all from <a href="https://tailwindcss.com/">Tailwindcss</a>&apos;s color range</p>
            <div className="flex flex-row mt-10 gap-2">
              <div className="basis-1/2 bg-lime-800 rounded-lg p-2">
                <p>DragonForgeNEXUS</p>
                <p>hex: #3f6212</p>
                <p>tailwindcss: lime-800</p>
              </div>
              <div className="basis-1/2 bg-blue-800 rounded-lg p-2">
                <p>DragonForgeMedia</p>
                <p>hex: #1e40af</p>
                <p>tailwindcss: blue-800</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 gap-2">
              <div className="basis-1/2 bg-violet-800 rounded-lg p-2">
                <p>DragonForgeCode</p>
                <p>hex: #5b21b6</p>
                <p>tailwindcss: violet-800</p>
              </div>
              <div className="basis-1/2 bg-emerald-800 rounded-lg p-2">
                <p>DragonForgeNews</p>
                <p>hex: #065f46</p>
                <p>tailwindcss: emerald-800</p>
              </div>
            </div>
            <div className="flex flex-row mt-2 gap-2">
              <div className="basis-1/2 bg-amber-800 rounded-lg p-2">
                <p>DragonForgeNetwork</p>
                <p>hex: #92400e</p>
                <p>tailwindcss: amber-800</p>
              </div>
              <div className="basis-1/2 bg-fuchsia-800 rounded-lg p-2">
                <p>DragonForgeGaming</p>
                <p>hex: #86198f</p>
                <p>tailwindcss: fuchsia-800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

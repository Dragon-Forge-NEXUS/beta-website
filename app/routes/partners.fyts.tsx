/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeNEXUS Partners" },
    { name: "description", content: "Welcome to DragonForgeNEXUS Partners!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="p-6">
        <div className="text-4xl">About the FYTS program:</div>
        <br />
        <div className="text-2xl">What is the FYTS program?</div>
        The the FYTS program is a program for content creators to be able to easily help each other, hang out, meet other creators, and get their uploads/streams announced in discord!
        <br />
        <br />
        <div className="text-2xl">How do I join the FYTS program?</div>
        We are currently reworking the prosess so applications are closed, please DM @altie122 on discord for more information
        {/* afew steps:
        <ol className="list-decimal list-inside">
          <li>make sure you meet the requirements <a href="./requirements">here</a></li>
          <li>Join the discord*, to find the join link go <a href="../DragonForgeMedia/Discord">here</a></li>
          <li>Make a ticket in #tickets under &quot;FYTS&quot;</li>
          <ul className="list-disc list-inside">
            <li>For the &quot;channel ID&quot; spot of the form, you need your youtube channel id, If you don&apos;t know where to find it go <a href="https://www.youtube.com/account_advanced">here</a></li>
          </ul>
          <li>hit submit and we will review your request</li>
        </ol>
        <div className="text-xl">You are not guaranteed to be excepted!</div>
        <br />
        <div className="text-2xl">I have applied, what should I expect?</div>
        <ul className="list-disc list-inside">
          <li>being held to a higher standard than even MODS.</li>
          <li>You will get the @YouTuber and/or @Twitch Streamer role(s) on discord depending on what you signed up for</li>
          <li>You will get your channel(s) added to the welcome message.</li>
          <li>Your new videos and/or streams will get automatically announced in the #fyts-announcements channel on the discord</li>
        </ul>
        <br /> */}
        <div className="text-4xl text-center">FYTS Youtube channels:</div>
        <div className="text-xs text-center">oldest members on the bottom</div>
        <table className="table-auto container mx-auto text-center">
          <thead>
            <tr className="bg-gray-800 border-slate-600">
              <th>Channel</th>
              <th>Link</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody className="bg-pink-800 text-pink-400">
            <tr className="border border-slate-600">
              <td>Altie122</td>
              <td><a href="https://www.youtube.com/@altie122">@altie122</a></td>
              <td>Gaming</td>
            </tr>
            <tr className="border border-slate-600">
              <td>MiniQle</td>
              <td><a href="https://www.youtube.com/@MiniQle">@MiniQle</a></td>
              <td>Gaming</td>
            </tr>
            <tr className="border border-slate-600">
              <td>Lolbit The Fox</td>
              <td><a href="https://www.youtube.com/@Lolbit_The_Fox">@Lolbit_The_Fox</a></td>
              <td>Film/Animation/Art</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="text-4xl text-center">FYTS Twitch channels:</div>
        <div className="text-xs text-center">oldest members on the bottom</div>
        <table className="table-auto container mx-auto text-center">
          <thead>
            <tr className="bg-gray-800 border-slate-600">
              <th>Channel</th>
              <th>Link</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody className="bg-pink-800 text-pink-400">
            <tr className="border border-slate-600">
              <td>Altie122</td>
              <td><a href="https://www.twitch.tv/altie122">altie122</a></td>
              <td>Gaming</td>
            </tr>
            <tr className="border border-slate-600">
              <td>Glitchgameretteyt</td>
              <td><a href="https://www.twitch.tv/glitchgameretteyt">glitchgameretteyt</a></td>
              <td>Gaming</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="text-4xl text-center">FYTS Websites:</div>
        <div className="text-xs text-center">oldest on the bottom | All sites here coded/ran by DragonForgeCode</div>
        <table className="table-auto container mx-auto text-center">
          <thead>
            <tr className="bg-gray-800 border-slate-600">
              <th>Owner</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody className="bg-pink-800 text-pink-400">
            <tr className="border border-slate-600">
              <td>MiniQle/Glitchgameretteyt</td>
              <td><a href="https://miniqle.dragonforgenexus.xyz">MiniQle&apos;s Blog</a></td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="text-4xl text-center">Videos:</div>
        <div className="flex flex-wrap gap-y-8 gap-x-8 mt-6">
          <iframe className="flex-auto aspect-video" src="https://www.youtube-nocookie.com/embed/S7cyG91oZho" title="@Lolbit_The_Fox's recent video"></iframe>
          <iframe className="flex-auto aspect-video" src="https://www.youtube-nocookie.com/embed/qkOvXXohUKs" title="MiniQle's recent video"></iframe>
          <iframe className="flex-auto aspect-video" src="https://www.youtube-nocookie.com/embed/87TdQAGmeOA?t=3569s" title="Altie122's recent video"></iframe>
        </div>
      </div>
    </div>
  );
}
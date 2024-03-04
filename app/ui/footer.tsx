import { Version } from "~/ui/version";

export function Footer(){
  return(
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <img src="/imgs/Logos/Square/Clear - white/250/DRAGONFORGENEXUS.png" height="90rem" width="90rem" alt=""/>
        <p>DragonForgeNEXUS<br />Website made by DragonForgeCode</p>
        <div className="text-slate-700">Website version: <Version /></div>
      </aside> 
      <nav>
        <header className="footer-title">Entities</header> 
        {/* <a className="link link-hover" href="/dfm">DragonForgeMedia</a> */}
        {/* <a className="link link-hover">DragonForgeCode</a> */}
        {/* <a className="link link-hover">DragonForgeNews</a> */}
        {/* <a className="link link-hover">DragonForgeNetwork</a> */}
        {/* <a className="link link-hover">DragonForgeGaming</a> */}
        <a className="link link-hover" href="https://nightly.dragonforgenexus.xyz">Nightly Website</a> 
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        {/* <a className="link link-hover">About us</a> */}
        {/* <a className="link link-hover">Contact</a> */}
        <a className="link link-hover" href="https://blog.dragonforgenexus.xyz">Blog</a> 
        <a className="link link-hover" href="/presskit">Press kit</a>
      </nav> 
      <nav>
        <header className="footer-title">Socials</header> 
        <a className="link link-hover" href="https://twitter.com/@DRAGONFNEXUS">Twitter/X</a> 
        <a className="link link-hover" rel="me" href="https://mastodon.social/@DRAGONFORGENEXUS">Mastodon</a>
        <a className="link link-hover" href="https://discord.dovahkiin.xyz">Discord</a>
      </nav>
    </footer>
  );
}
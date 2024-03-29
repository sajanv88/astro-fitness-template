/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, i as addAttribute, k as renderSlot, l as renderHead } from '../astro_JIIj7_ZX.mjs';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { $ as $$Image } from './generic_DxpCg749.mjs';

function cn(...args) {
  return twMerge(clsx(...args));
}

const $$Astro$a = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Logo;
  const { width, height } = Astro2.props;
  const w = width || "100";
  const h = height || "80";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": "/assets/logo.png", "alt": "Fitness Logo", "width": Number(w), "height": Number(h), "class": "w-1/2 md:w-2/3 h-auto" })}`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/logo.astro", void 0);

const $$Astro$9 = createAstro();
const $$SocialLinkWithLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SocialLinkWithLogo;
  const socialIcons = [
    {
      name: "facebook",
      icon: "bi-facebook"
    },
    {
      name: "twitter",
      icon: "bi-twitter-x"
    },
    {
      name: "instagram",
      icon: "bi-instagram"
    },
    {
      name: "youtube",
      icon: "bi-youtube"
    }
  ];
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex flex-col items-center md:items-start w-full", className), "class")}> ${renderComponent($$result, "Logo", $$Logo, { "width": "300", "height": "250" })} <p class="pb-3 text-center md:text-left">
Fuisruam est aui dolorem ipsum ruia dolor sit amet…
</p> <div role="region" aria-labelledby="social-links" class="flex items-center justify-center md:justify-start space-x-4 w-full"> ${socialIcons.map((s) => renderTemplate`<a href="#" class="block rounded-full p-2 border transition delay-150 ease-in hover:bg-accent"> ${s.icon == "bi-facebook" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path> </svg>`} ${s.icon == "bi-twitter-x" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"> <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path> </svg>`} ${s.icon == "bi-instagram" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path> </svg>`} ${s.icon == "bi-youtube" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path> </svg>`} </a>`)} </div> </div>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/socialLinkWithLogo.astro", void 0);

const $$Astro$8 = createAstro();
const $$OpeningHours = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpeningHours;
  return renderTemplate`${maybeRenderHead()}<section role="region" aria-labelledby="opening-hours" class="pt-3 md:pt-0"> <div id="opening-hours" class="flex flex-col w-full items-center md:items-start"> <h2 class="uppercase font-bold text-xl leading-8 pb-3 truncate">
Opening Hours
</h2> <div class="space-y-2"> <h3 class="capitalize text-md text-accent-content">Monday - Saturday</h3> <p class="text-sm text-accent-content/60">12.00 – 14.45</p> <h3 class="capitalize text-md text-accent-content">Sunday - Thursday</h3> <p class="text-sm text-accent-content/60">17.30 – 00.</p> <h3 class="capitalize text-md text-accent-content">Friday - Saturday</h3> <p class="text-sm text-accent-content/60">17.30 – 00.00</p> </div> </div> </section>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/openingHours.astro", void 0);

const $$Astro$7 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Link;
  const { to, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")}${addAttribute(cn(
    "md:px-3 lg:px-5 pl-5 md:pl-0 py-2 rounded-md text-lg md:text-sm lg:text-xl font-medium hover:underline hover:text-accent-content capitalize",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/link.astro", void 0);

const $$Astro$6 = createAstro();
const $$QuickLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$QuickLinks;
  const navs = [
    { text: "home", href: "/" },
    { text: "about", href: "/about" },
    { text: "pricing", href: "/pricing" },
    { text: "services", href: "/services" },
    { text: "contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<section role="region" aria-labelledby="quick-links" class="pt-3 md:pt-0"> <div id="quick-links" class="flex flex-col w-full items-center md:items-start"> <h2 class="uppercase font-bold text-xl leading-8 pb-3 truncate">
Quick Links
</h2> <nav class="space-y-2 flex flex-col"> ${navs.map((nav) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": nav.href, "className": "md:px-0 md:pl-0 py-0 lg:px-0 md:text-md lg:text-md" }, { "default": ($$result2) => renderTemplate`${nav.text}` })}`)} </nav> </div> </section>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/quickLinks.astro", void 0);

const $$Astro$5 = createAstro();
const $$Address = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Address;
  return renderTemplate`${maybeRenderHead()}<section role="region" aria-labelledby="contact-us" class="pt-5 md:pt-0"> <div id="contact-us" class="flex flex-col w-full items-start"> <h2 class="uppercase font-bold text-xl leading-8 pb-3 truncate">
Contact Us
</h2> <div class="space-y-2"> <h3 class="capitalize text-md text-accent-content">Address:</h3> <p class="text-sm text-accent-content/60">
12 Somewhere street, PG 3434, Netherlands
</p> <h3 class="capitalize text-md text-accent-content">Email:</h3> <p class="text-sm text-accent-content/60">Info@fitness.nl</p> <h3 class="capitalize text-md text-accent-content">Phone:</h3> <p class="text-sm text-accent-content/60">+31644123456</p> </div> </div> </section>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/address.astro", void 0);

const $$Astro$4 = createAstro();
const $$Subscribe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Subscribe;
  return renderTemplate`${maybeRenderHead()}<section role="region" aria-labelledby="subscribe" class="px-5"> <div id="subscribe"> <form class="flex flex-col w-full space-y-2"> <label for="email" class="uppercase font-bold text-xl leading-8 pb-3 truncate">Subscribe to our newsletter</label> <input type="email" id="email" name="email" class="p-3 text-secondary-content" placeholder="Enter your email address"> <button type="submit" class="p-3 bg-secondary hover:bg-secondary/80 transition ease-in">Subscribe</button> </form> </div> </section>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/subscribe.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="full-bleed p-5 pt-10"> <div class="grid md:grid-cols-2 gap-2"> ${renderComponent($$result, "SocialLinkWithLogo", $$SocialLinkWithLogo, {})} ${renderComponent($$result, "Subscribe", $$Subscribe, {})} </div> <div class="grid grid-cols-2 md:grid-cols-3 pt-10 px-5"> ${renderComponent($$result, "OpeningHours", $$OpeningHours, {})} ${renderComponent($$result, "QuickLinks", $$QuickLinks, {})} ${renderComponent($$result, "Address", $$Address, {})} </div> <hr class="mt-10 mb-5 full-bleed-border"> <p class="text-sm text-center">
Copyright © Fitness 2024. All rights reserved
</p> </footer>`;
}, "/Users/sajan/projects/astro-fitness-template/src/components/footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { headerClass } = Astro2.props;
  const navs = [
    { text: "home", href: "/" },
    { text: "about", href: "/about" },
    { text: "pricing", href: "/pricing" },
    { text: "services", href: "/services" },
    { text: "contact", href: "/contact" }
  ];
  return renderTemplate(_a || (_a = __template(['<script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const menuBtn = document.querySelector(".js-menu-btn");\n    const nav = document.querySelector("nav");\n    menuBtn.addEventListener("click", () => {\n      nav.classList.toggle("hidden");\n      nav.classList.toggle("flex");\n    });\n  });\n<\/script> ', '<header class="full-bleed relative w-full"> <section', '> <div class="col-span-9 md:col-span-3 place-self-end"> ', ' </div> <div class="col-span-3 place-self-end md:hidden"> <button class="inline-flex justify-center px-3 py-3 bg-accent border-none items-center space-y-0 js-menu-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path> </svg> </button> </div> <div class="col-span-12 md:col-span-9 place-self-center w-full"> <nav', "> ", " </nav> </div> </section> </header>"])), maybeRenderHead(), addAttribute(cn("grid grid-cols-12 gap-1 p-3", headerClass), "class"), renderComponent($$result, "Logo", $$Logo, {}), addAttribute(cn(
    "hidden p-3 md:flex flex-col items-start md:flex-row md:items-center md:justify-end"
  ), "class"), navs.map((nav) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": nav.href }, { "default": ($$result2) => renderTemplate`${nav.text}` })}`));
}, "/Users/sajan/projects/astro-fitness-template/src/components/header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <main class="bg-primary text-primary-content"> <section class="max-w-screen-sm mx-auto px-3 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"> ${renderComponent($$result, "Header", $$Header, {})} </section> <section role="region" aria-labelledby="main-content"> ${renderSlot($$result, $$slots["default"])} </section> <section class="max-w-screen-sm mx-auto px-3 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"> ${renderComponent($$result, "Footer", $$Footer, {})} </section> </main> </body></html>`;
}, "/Users/sajan/projects/astro-fitness-template/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { path } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dynamic page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>I am a ${path}</p> ` })}`;
}, "/Users/sajan/projects/astro-fitness-template/src/pages/[...path]/index.astro", void 0);

const $$file = "/Users/sajan/projects/astro-fitness-template/src/pages/[...path]/index.astro";
const $$url = "/[...path]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, $$Layout as a, cn as c, index as i };

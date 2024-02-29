import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot, l as defineStyleVars } from '../astro_oSKVmDrg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */
/* empty css                          */

const $$Astro$7 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    text,
    href,
    style,
    icon,
    isFilled = true,
    borderVisible = false,
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "link",
    classes,
    style,
    { filled: isFilled, bordered: borderVisible }
  ], "class:list")}${spreadAttributes(rest)}> <span>${text}</span> </a>`;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/components/Link.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.props;
  return renderTemplate`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charter-webfont@4/charter.min.css">${maybeRenderHead()}<div class="all" data-astro-cid-3ef6ksr2> <div class="left" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <h1 data-astro-cid-3ef6ksr2>hook</h1> </a> </div> <div class="prod" data-astro-cid-3ef6ksr2> <h1 class="littletitle" data-astro-cid-3ef6ksr2>Products</h1> <div class="flex" data-astro-cid-3ef6ksr2> <div class="link" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Link", $$Link, { "text": "Nova", "href": "/nova/nova/", "data-astro-cid-3ef6ksr2": true })}</div> <div class="link" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Link", $$Link, { "text": "Magazine", "href": "/nova/nova/", "data-astro-cid-3ef6ksr2": true })}</div> <div class="link" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Link", $$Link, { "text": "Home", "href": "/nova/nova/", "data-astro-cid-3ef6ksr2": true })}</div> <div class="link" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Link", $$Link, { "text": "Display", "href": "/nova/nova/", "data-astro-cid-3ef6ksr2": true })}</div> </div> </div> </div> `;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-sz7xmlte> <div class="all" data-astro-cid-sz7xmlte> <div class="lefttop" data-astro-cid-sz7xmlte> <h1 data-astro-cid-sz7xmlte>hook</h1> <h5 data-astro-cid-sz7xmlte>Copyright ${currentYear} Hook Technologies Corporation. All rights reserved.</h5> </div> <div class="rightbottom" data-astro-cid-sz7xmlte> <div class="column" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Terms</h2> <div class="links" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Link", $$Link, { "text": "Terms of Service", "href": "/tos/", "data-astro-cid-sz7xmlte": true })} <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Terms of Privacy</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Terms of Use</h3></a> </div> </div> <div class="column" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Products</h2> <div class="links-products" data-astro-cid-sz7xmlte> <div class="" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Software</h4> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Nova</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Magazine</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Home</h3></a> </div> <div class="" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Hardware</h4> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Display</h3></a> </div> </div> </div> <div class="column" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Resources</h2> <div class="links" data-astro-cid-sz7xmlte> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Blog</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>How-to</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Support</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Hook for Business</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Advertise</h3></a> <a href="" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>Documentation</h3></a> ${renderComponent($$result, "Link", $$Link, { "text": "Beta Access", "href": "/nova/joinbeta/", "data-astro-cid-sz7xmlte": true })} </div> </div> </div> </div> </div> `;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, href, appicon, desc, backgroundimage } = Astro2.props;
  const $$definedVars = defineStyleVars([{ image: `url("${backgroundimage}")` }]);
  return renderTemplate`${maybeRenderHead()}<div class="ex" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <div class="bottom-align" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <div class="nova-description" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <img${addAttribute(appicon, "src")} alt="nova-icon" class="nova-icon" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <div class="text-app" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <div class="flex-bottom" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <h1 class="app-title" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>${title}</h1> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <path d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z" fill="rgba(144, 144, 144, 0.74)" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}></path> </svg> </div> <h1 class="app-subtitle" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>${desc}</h1> </div> </div> </div> </div> `;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro();
const $$PurchaseView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PurchaseView;
  const { productname, href, backgroundimage } = Astro2.props;
  const $$definedVars = defineStyleVars([{ image: `url("${backgroundimage}")` }]);
  return renderTemplate`${maybeRenderHead()}<div class="ex" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <div class="bottom-align" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <div class="nova-description" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <div class="text-app" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <div class="flex-bottom" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <h1 class="app-title" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}>${productname}</h1> <path d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z" fill="rgba(144, 144, 144, 0.74)" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}></path> </div> <div class="buttons" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <a${addAttribute(href, "href")} data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <h3 class="buy" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}>Purchase</h3> </a> <a href="" data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}> <h3 data-astro-cid-3tqt3imh${addAttribute($$definedVars, "style")}>Learn about</h3> </a> </div> </div> </div> </div> </div>`;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/components/PurchaseView.astro", void 0);

const $$Astro$1 = createAstro();
const $$FullCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FullCard;
  const { title, subtitle, hrefcustom, appicon, desc, backgroundimage, button1, button2, button3, button1href, button2href, button3href } = Astro2.props;
  const $$definedVars = defineStyleVars([{ image: `url("${backgroundimage}")` }]);
  return renderTemplate`${maybeRenderHead()}<div class="ex" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}> <div class="exnor" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}> <div class="exnornor" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}> <h1 class="app-title" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}>${title}</h1> <h3 class="app-subtitle" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}>${subtitle}</h3> <h2 class="desc" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}>${desc}</h2> <div class="buttonsflex" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}> <div class="link" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Link", $$Link, { "text": "{button1}", "href": "{button1href}", "data-astro-cid-7x5462sl": true })}</div> <div class="link" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Link", $$Link, { "text": "{button2}", "href": "{button1href}", "data-astro-cid-7x5462sl": true })}</div> <div class="link" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Link", $$Link, { "text": "{button3}", "href": "{button1href}", "data-astro-cid-7x5462sl": true })}</div> </div> <div class="bottom-align" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}> <a${addAttribute(hrefcustom, "href")} data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}></a> </div> </div> </div> <img class="icon"${addAttribute(appicon, "src")} alt="nova-icon" data-astro-cid-7x5462sl${addAttribute($$definedVars, "style")}> </div> `;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/components/FullCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<head><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charter-webfont@4/charter.min.css"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#515151"><meta name="apple-mobile-web-app-title" content="Hook Tech"><meta name="application-name" content="Hook Tech"><meta name="msapplication-TileColor" content="#2b5797"><meta name="msapplication-TileImage" content="/mstile-144x144.png"><meta name="theme-color" content="#ffffff">${renderHead()}</head> ${renderComponent($$result, "Layout", $$Layout, { "title": "Hook Technologies", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <div class="allbox" data-astro-cid-j7pv25f6> ${renderComponent($$result, "FullCard", $$FullCard, { "title": "Nova is near", "subtitle": "Remind me when Nova is ready", "button1href": "/nova/nova", "button1": "Remind Me", "button2href": "/nova/nova", "button2": "Join Beta", "button3href": "/nova/nova", "button3": "Learn More", "appicon": "Assets/Screenshot 2024-01-25 at 8.18 1.webp", "backgroundimage": "Assets/waldemar-mad-405bV4Lh5U4-unsplash 2.webp", "desc": "The all-in-one learner platform.", "subtitle": "", "hrefcustom": "", "data-astro-cid-j7pv25f6": true })} <!-- https://pixboost.com/api/2/img/[IMAGE_URL|IMAGES_SOURCE_ALIAS_WITH_PATH]/[OPERATION]?[OPERATION_PARAMS]&auth=MTg4MjMxMzM3MA --> <!-- https://pixboost.com/api/2/img/[IMAGE_URL|IMAGES_SOURCE_ALIAS_WITH_PATH]/[OPERATION]?[OPERATION_PARAMS]&auth=[API_KEY] --> <div class="boxes" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Card", $$Card, { "title": "nova", "appicon": "Assets/Frame 1.png", "desc": "The all-in-one learner platform.", "backgroundimage": "Assets/Group 200.webp", "href": "src/pages/nova/nova.astro", "data-astro-cid-j7pv25f6": true })} <!-- 200 --> ${renderComponent($$result, "Card", $$Card, { "title": "magazine", "appicon": "Assets/Frame 2.png", "desc": "The world through hook eyes.", "backgroundimage": "Assets/Group 205.webp", "href": "", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Card", $$Card, { "title": "home", "appicon": "Assets/Frame 3.png", "desc": "A real touch with hook.", "backgroundimage": "Assets/Group 206.webp", "href": "", "data-astro-cid-j7pv25f6": true })} <!--  --> ${renderComponent($$result, "PurchaseView", $$PurchaseView, { "productname": "Display", "backgroundimage": "Assets/waldemar-mad-405bV4Lh5U4-unsplash 2.webp", "href": "", "data-astro-cid-j7pv25f6": true })} </div> </div> <hr class="hrfooter" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} `;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/index.astro", void 0);

const $$file = "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Header as a, $$Footer as b, $$Link as c, index as i };

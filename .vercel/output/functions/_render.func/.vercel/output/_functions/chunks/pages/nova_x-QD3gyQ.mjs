import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_oSKVmDrg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout, a as $$Header, c as $$Link, b as $$Footer } from './index_hJUK6DsN.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Nova = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nova;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hook Technologies", "data-astro-cid-sxupxh4e": true })} ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sxupxh4e": true })} ${maybeRenderHead()}<div class="flexcenter" data-astro-cid-sxupxh4e> <div data-astro-cid-sxupxh4e> <h1 data-astro-cid-sxupxh4e>Hook products are under development. </h1> <h2 data-astro-cid-sxupxh4e>Hook products are going to available earlier this year.</h2> <div class="link" data-astro-cid-sxupxh4e>${renderComponent($$result, "Link", $$Link, { "href": "", "text": "Become Donator | Grant Previous Access", "data-astro-cid-sxupxh4e": true })}</div> </div> </div> <hr class="hrfooter" data-astro-cid-sxupxh4e> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sxupxh4e": true })} `;
}, "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/nova/nova.astro", void 0);

const $$file = "/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/nova/nova.astro";
const $$url = "/nova/nova";

export { $$Nova as default, $$file as file, $$url as url };

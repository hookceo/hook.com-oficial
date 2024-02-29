import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_oSKVmDrg.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,a[data-astro-cid-3ef6ksr2],h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{text-decoration:none}h1[data-astro-cid-3ef6ksr2]{font-family:Charter,sans-serif;font-size:25px}.link[data-astro-cid-3ef6ksr2]{color:#000}.all[data-astro-cid-3ef6ksr2]{padding:0;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-family:Charter,sans-serif;font-weight:600;color:#000}.flex[data-astro-cid-3ef6ksr2]{display:flex;align-items:last baseline;gap:20px;margin-bottom:-7px}.littletitle[data-astro-cid-3ef6ksr2]{font-size:9px;font-family:SF Pro Display,sans-serif;height:0px;margin-top:auto;margin-bottom:7px;margin-left:-50px}h2[data-astro-cid-3ef6ksr2]{margin-top:0;margin-bottom:0;font-size:13px;font-family:Charter,sans-serif;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2],.link[data-astro-cid-3ef6ksr2]{color:#fff}}@media (prefers-color-scheme: light){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{color:#000}}h2[data-astro-cid-3ef6ksr2]:hover{border-radius:1px}.rightbottom[data-astro-cid-sz7xmlte]{display:flex;gap:10%}.all[data-astro-cid-sz7xmlte]{display:flex;gap:20%}@media screen and (max-width: 950px){.all[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr;gap:0%}}.column[data-astro-cid-sz7xmlte]{width:200px}h2[data-astro-cid-sz7xmlte]{font-family:SF Pro Display,sans-serif;font-size:20px}html{font-family:SF Pro Display,sans-serif}h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-decoration:none;font-weight:400;font-size:15px;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#fff}}@media (prefers-color-scheme: light){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#000}}.lefttop[data-astro-cid-sz7xmlte]{align-items:baseline;text-align:left}h5[data-astro-cid-sz7xmlte]{color:#5b5b5b;font-weight:500}h1[data-astro-cid-sz7xmlte]{height:20px;margin-top:5px;font-family:Charter,sans-serif}h3[data-astro-cid-sz7xmlte]:hover,a[data-astro-cid-sz7xmlte]:hover{color:#848484}.links-products[data-astro-cid-sz7xmlte]{display:flex;gap:50px}h4[data-astro-cid-sz7xmlte]{color:#434343;font-size:12px;margin:0}.all[data-astro-cid-sz7xmlte]{padding:60px}@media screen and (max-width: 950px){.rightbottom[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr}.all[data-astro-cid-sz7xmlte]{padding:0}}\n@media (prefers-color-scheme: light){html{background-color:#fff}}.section[data-astro-cid-gjxbtj2e]{display:flex;justify-content:left;align-items:end;gap:10px;text-decoration:none;margin-bottom:20px}.appselect[data-astro-cid-gjxbtj2e]{display:flex;align-items:baseline;gap:7px;margin-top:-20px}.hrfooter[data-astro-cid-gjxbtj2e]{margin-top:60px;margin-bottom:0}.note[data-astro-cid-gjxbtj2e]{width:350px}.number[data-astro-cid-gjxbtj2e]{width:10px}.all[data-astro-cid-gjxbtj2e]{display:flex;justify-content:center;align-items:center;margin-top:60px;gap:20%}@media screen and (max-width: 990px){.all[data-astro-cid-gjxbtj2e]{display:block;justify-content:center;align-items:center;padding:40px}.right[data-astro-cid-gjxbtj2e]{margin-bottom:80px}}h1[data-astro-cid-gjxbtj2e]{font-size:50px;margin-bottom:0}h3[data-astro-cid-gjxbtj2e]{font-family:Charter,sans-serif;font-size:23px;color:#b8b8b8;font-weight:600}.left[data-astro-cid-gjxbtj2e]{padding:30px;background-color:#f5f5f5;border-radius:20px}h3[data-astro-cid-gjxbtj2e].selected{color:#000}h4[data-astro-cid-gjxbtj2e]{font-weight:400}.underline[data-astro-cid-gjxbtj2e]{font-weight:500;text-decoration:underline}h2[data-astro-cid-gjxbtj2e]{font-size:15px;font-weight:400;color:#b8b8b8}@media screen and (max-width: 490px){.left[data-astro-cid-gjxbtj2e]{padding:20px;background-color:#f5f5f5;border-radius:20px}.right[data-astro-cid-gjxbtj2e]{padding:20px;background-color:#f5f5f5;border-radius:20px;margin-bottom:10px}.all[data-astro-cid-gjxbtj2e]{padding:10px}}@media (prefers-color-scheme: dark){html{background-color:#141414}h1[data-astro-cid-gjxbtj2e],h4[data-astro-cid-gjxbtj2e],h3[data-astro-cid-gjxbtj2e].selected{color:#fff}h3[data-astro-cid-gjxbtj2e]{color:#414141}.left[data-astro-cid-gjxbtj2e]{background-color:#1c1c1c}@media screen and (max-width: 490px){.right[data-astro-cid-gjxbtj2e]{background-color:#1c1c1c}}}\n"}],"routeData":{"route":"/nova/joinbeta","isIndex":false,"type":"page","pattern":"^\\/nova\\/joinbeta\\/?$","segments":[[{"content":"nova","dynamic":false,"spread":false}],[{"content":"joinbeta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nova/joinbeta.astro","pathname":"/nova/joinbeta","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,a[data-astro-cid-3ef6ksr2],h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{text-decoration:none}h1[data-astro-cid-3ef6ksr2]{font-family:Charter,sans-serif;font-size:25px}.link[data-astro-cid-3ef6ksr2]{color:#000}.all[data-astro-cid-3ef6ksr2]{padding:0;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-family:Charter,sans-serif;font-weight:600;color:#000}.flex[data-astro-cid-3ef6ksr2]{display:flex;align-items:last baseline;gap:20px;margin-bottom:-7px}.littletitle[data-astro-cid-3ef6ksr2]{font-size:9px;font-family:SF Pro Display,sans-serif;height:0px;margin-top:auto;margin-bottom:7px;margin-left:-50px}h2[data-astro-cid-3ef6ksr2]{margin-top:0;margin-bottom:0;font-size:13px;font-family:Charter,sans-serif;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2],.link[data-astro-cid-3ef6ksr2]{color:#fff}}@media (prefers-color-scheme: light){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{color:#000}}h2[data-astro-cid-3ef6ksr2]:hover{border-radius:1px}.rightbottom[data-astro-cid-sz7xmlte]{display:flex;gap:10%}.all[data-astro-cid-sz7xmlte]{display:flex;gap:20%}@media screen and (max-width: 950px){.all[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr;gap:0%}}.column[data-astro-cid-sz7xmlte]{width:200px}h2[data-astro-cid-sz7xmlte]{font-family:SF Pro Display,sans-serif;font-size:20px}html{font-family:SF Pro Display,sans-serif}h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-decoration:none;font-weight:400;font-size:15px;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#fff}}@media (prefers-color-scheme: light){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#000}}.lefttop[data-astro-cid-sz7xmlte]{align-items:baseline;text-align:left}h5[data-astro-cid-sz7xmlte]{color:#5b5b5b;font-weight:500}h1[data-astro-cid-sz7xmlte]{height:20px;margin-top:5px;font-family:Charter,sans-serif}h3[data-astro-cid-sz7xmlte]:hover,a[data-astro-cid-sz7xmlte]:hover{color:#848484}.links-products[data-astro-cid-sz7xmlte]{display:flex;gap:50px}h4[data-astro-cid-sz7xmlte]{color:#434343;font-size:12px;margin:0}.all[data-astro-cid-sz7xmlte]{padding:60px}@media screen and (max-width: 950px){.rightbottom[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr}.all[data-astro-cid-sz7xmlte]{padding:0}}\nh2[data-astro-cid-sxupxh4e]{font-size:20px;font-weight:400}.link[data-astro-cid-sxupxh4e]{color:#000;text-decoration:none;background-color:#f6f6f6;padding:10px;border-radius:6px;width:fit-content}@media (prefers-color-scheme: dark){h1[data-astro-cid-sxupxh4e],h2[data-astro-cid-sxupxh4e],h3[data-astro-cid-sxupxh4e]{color:#fff}.link[data-astro-cid-sxupxh4e]{color:#fff;background-color:#202020}html{background-color:#141414}}@media (prefers-color-scheme: light){html{background-color:#fff}}.hrfooter[data-astro-cid-sxupxh4e]{margin-top:60px;margin-bottom:0}.flexcenter[data-astro-cid-sxupxh4e]{display:flex;justify-content:center;align-items:center;height:70vh}\n"}],"routeData":{"route":"/nova/nova","isIndex":false,"type":"page","pattern":"^\\/nova\\/nova\\/?$","segments":[[{"content":"nova","dynamic":false,"spread":false}],[{"content":"nova","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nova/nova.astro","pathname":"/nova/nova","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7O0mNCM9.css"},{"type":"inline","content":"html,a[data-astro-cid-3ef6ksr2],h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{text-decoration:none}h1[data-astro-cid-3ef6ksr2]{font-family:Charter,sans-serif;font-size:25px}.link[data-astro-cid-3ef6ksr2]{color:#000}.all[data-astro-cid-3ef6ksr2]{padding:0;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-family:Charter,sans-serif;font-weight:600;color:#000}.flex[data-astro-cid-3ef6ksr2]{display:flex;align-items:last baseline;gap:20px;margin-bottom:-7px}.littletitle[data-astro-cid-3ef6ksr2]{font-size:9px;font-family:SF Pro Display,sans-serif;height:0px;margin-top:auto;margin-bottom:7px;margin-left:-50px}h2[data-astro-cid-3ef6ksr2]{margin-top:0;margin-bottom:0;font-size:13px;font-family:Charter,sans-serif;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2],.link[data-astro-cid-3ef6ksr2]{color:#fff}}@media (prefers-color-scheme: light){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{color:#000}}h2[data-astro-cid-3ef6ksr2]:hover{border-radius:1px}.rightbottom[data-astro-cid-sz7xmlte]{display:flex;gap:10%}.all[data-astro-cid-sz7xmlte]{display:flex;gap:20%}@media screen and (max-width: 950px){.all[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr;gap:0%}}.column[data-astro-cid-sz7xmlte]{width:200px}h2[data-astro-cid-sz7xmlte]{font-family:SF Pro Display,sans-serif;font-size:20px}html{font-family:SF Pro Display,sans-serif}h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-decoration:none;font-weight:400;font-size:15px;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#fff}}@media (prefers-color-scheme: light){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#000}}.lefttop[data-astro-cid-sz7xmlte]{align-items:baseline;text-align:left}h5[data-astro-cid-sz7xmlte]{color:#5b5b5b;font-weight:500}h1[data-astro-cid-sz7xmlte]{height:20px;margin-top:5px;font-family:Charter,sans-serif}h3[data-astro-cid-sz7xmlte]:hover,a[data-astro-cid-sz7xmlte]:hover{color:#848484}.links-products[data-astro-cid-sz7xmlte]{display:flex;gap:50px}h4[data-astro-cid-sz7xmlte]{color:#434343;font-size:12px;margin:0}.all[data-astro-cid-sz7xmlte]{padding:60px}@media screen and (max-width: 950px){.rightbottom[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr}.all[data-astro-cid-sz7xmlte]{padding:0}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,a[data-astro-cid-3ef6ksr2],h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{text-decoration:none}h1[data-astro-cid-3ef6ksr2]{font-family:Charter,sans-serif;font-size:25px}.link[data-astro-cid-3ef6ksr2]{color:#000}.all[data-astro-cid-3ef6ksr2]{padding:0;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-family:Charter,sans-serif;font-weight:600;color:#000}.flex[data-astro-cid-3ef6ksr2]{display:flex;align-items:last baseline;gap:20px;margin-bottom:-7px}.littletitle[data-astro-cid-3ef6ksr2]{font-size:9px;font-family:SF Pro Display,sans-serif;height:0px;margin-top:auto;margin-bottom:7px;margin-left:-50px}h2[data-astro-cid-3ef6ksr2]{margin-top:0;margin-bottom:0;font-size:13px;font-family:Charter,sans-serif;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2],.link[data-astro-cid-3ef6ksr2]{color:#fff}}@media (prefers-color-scheme: light){h2[data-astro-cid-3ef6ksr2]{border-radius:5px solid black;border-radius:1px}h1[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2]{color:#000}}h2[data-astro-cid-3ef6ksr2]:hover{border-radius:1px}.rightbottom[data-astro-cid-sz7xmlte]{display:flex;gap:10%}.all[data-astro-cid-sz7xmlte]{display:flex;gap:20%}@media screen and (max-width: 950px){.all[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr;gap:0%}}.column[data-astro-cid-sz7xmlte]{width:200px}h2[data-astro-cid-sz7xmlte]{font-family:SF Pro Display,sans-serif;font-size:20px}html{font-family:SF Pro Display,sans-serif}h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-decoration:none;font-weight:400;font-size:15px;transition:all .3s ease 0s}@media (prefers-color-scheme: dark){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#fff}}@media (prefers-color-scheme: light){h3[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte],h2[data-astro-cid-sz7xmlte],h1[data-astro-cid-sz7xmlte]{color:#000}}.lefttop[data-astro-cid-sz7xmlte]{align-items:baseline;text-align:left}h5[data-astro-cid-sz7xmlte]{color:#5b5b5b;font-weight:500}h1[data-astro-cid-sz7xmlte]{height:20px;margin-top:5px;font-family:Charter,sans-serif}h3[data-astro-cid-sz7xmlte]:hover,a[data-astro-cid-sz7xmlte]:hover{color:#848484}.links-products[data-astro-cid-sz7xmlte]{display:flex;gap:50px}h4[data-astro-cid-sz7xmlte]{color:#434343;font-size:12px;margin:0}.all[data-astro-cid-sz7xmlte]{padding:60px}@media screen and (max-width: 950px){.rightbottom[data-astro-cid-sz7xmlte]{display:grid;grid-template-columns:1fr}.all[data-astro-cid-sz7xmlte]{padding:0}}\n"},{"type":"external","src":"/_astro/tos.L30ZTHRK.css"}],"routeData":{"route":"/tos","isIndex":false,"type":"page","pattern":"^\\/tos\\/?$","segments":[[{"content":"tos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tos.astro","pathname":"/tos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/nova/joinbeta.astro",{"propagation":"none","containsHead":true}],["/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/nova/nova.astro",{"propagation":"none","containsHead":true}],["/Users/hooklaptop11/Desktop/hookcorp-web-v.0/src/pages/tos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_N9jSJmn-.mjs","/src/pages/nova/joinbeta.astro":"chunks/pages/joinbeta__k-OUdwV.mjs","/src/pages/nova/nova.astro":"chunks/pages/nova_x-QD3gyQ.mjs","/src/pages/tos.astro":"chunks/pages/tos_8jLXbPDH.mjs","\u0000@astrojs-manifest":"manifest_BBhZ3wmS.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_TZknTvjp.mjs","\u0000@astro-page:src/pages/nova/joinbeta@_@astro":"chunks/joinbeta_yD_jUvwf.mjs","\u0000@astro-page:src/pages/nova/nova@_@astro":"chunks/nova_Hqygg3kt.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_PNLMeAz-.mjs","\u0000@astro-page:src/pages/tos@_@astro":"chunks/tos_RteLH1fm.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.7O0mNCM9.css","/_astro/tos.L30ZTHRK.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/mstile-70x70.png","/safari-pinned-tab.svg","/site.webmanifest"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };

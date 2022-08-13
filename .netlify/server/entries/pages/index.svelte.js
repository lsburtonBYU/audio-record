var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fd2352a1 = require("../../_app/immutable/chunks/index-fd2352a1.js");
const AudioRecorder_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".audioRecorder.svelte-i0vat6.svelte-i0vat6{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;padding:2rem;--recording:#f00}button.svelte-i0vat6.svelte-i0vat6{display:flex;align-items:center;justify-content:center;appearance:none;background-color:transparent;padding:8px;border:4px solid #0008}.round.svelte-i0vat6.svelte-i0vat6{border-radius:50%;height:48px;width:48px;background-color:var(--recording);transition:transform 0.2s ease, width 0.2s ease}.round.svelte-i0vat6.svelte-i0vat6:hover{transform:scale(1.1)}.round.svelte-i0vat6 .mic.svelte-i0vat6{fill:#fff}.round.svelte-i0vat6 .stop.svelte-i0vat6{display:none}.pill.svelte-i0vat6.svelte-i0vat6{border-radius:24px;border:2px solid #0008;height:48px;width:100px;background-color:var(--recording);transition:width 0.2s ease}.stop.svelte-i0vat6.svelte-i0vat6{display:flex;gap:0.4rem;align-items:center}.stop.svelte-i0vat6 svg.svelte-i0vat6{min-width:20px;fill:rgb(250, 250, 250)}.timer.svelte-i0vat6.svelte-i0vat6{color:rgb(250, 250, 250);font-size:1rem}.pill.svelte-i0vat6 .mic.svelte-i0vat6{display:none}",
  map: null
};
function pad(value) {
  return value.toString().padStart(2, "0");
}
const AudioRecorder = (0, import_index_fd2352a1.c)(($$result, $$props, $$bindings, slots) => {
  let audioSrc = null;
  let buttonClass = "round";
  let timer = 0;
  let interval;
  function displayTimer() {
    const minutes = pad(Math.floor(timer / 60));
    const seconds = pad(timer % 60);
    const time = `${minutes}:${seconds}`;
    return time;
  }
  (0, import_index_fd2352a1.o)(() => {
    clearInterval(interval);
  });
  $$result.css.add(css$1);
  return `<div class="${"audioRecorder svelte-i0vat6"}">${`<button class="${(0, import_index_fd2352a1.e)((0, import_index_fd2352a1.n)(buttonClass), true) + " svelte-i0vat6"}"><svg class="${"mic svelte-i0vat6"}" role="${"img"}" viewBox="${"0 0 16 16"}"><title>Record</title><path d="${"M8 11c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3S5 1.343 5 3v5c0 1.657 1.343 3 3 3z"}"></path><path d="${"M13 8V6h-1v1.844c0 1.92-1.282 3.688-3.164 4.071C6.266 12.438 4 10.479 4 8V6H3v2c0 2.414 1.721 4.434 4 4.899V15H5v1h6v-1H9v-2.101c2.279-.465 4-2.485 4-4.899z"}"></path></svg>
			<div class="${"stop svelte-i0vat6"}"><svg role="${"img"}" viewBox="${"0 0 16 16"}" class="${"svelte-i0vat6"}"><title>Stop</title><rect x="${"3"}" y="${"3"}" width="${"10"}" height="${"10"}"></rect></svg>
				<span class="${"timer svelte-i0vat6"}">${(0, import_index_fd2352a1.e)(displayTimer())}</span></div></button>
		<audio controls${(0, import_index_fd2352a1.a)("src", audioSrc, 0)} ${"disabled"}></audio>`}
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{color:hsl(0, 0%, 98%);background:hsl(240, 72%, 17%);font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,\n			Cantarell, 'Helvetica Neue', sans-serif}",
  map: null
};
const Routes = (0, import_index_fd2352a1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"audio recording is fun"}" data-svelte="svelte-155ngfe">`, ""}

<section>${(0, import_index_fd2352a1.v)(AudioRecorder, "AudioRecorder").$$render($$result, {}, {}, {})}
</section>`;
});

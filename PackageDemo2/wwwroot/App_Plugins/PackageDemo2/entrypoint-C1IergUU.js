import { UMB_AUTH_CONTEXT as c } from "@umbraco-cms/backoffice/auth";
import { c as t } from "./services.gen-DG6do2Ia.js";
const g = (e, s) => {
  console.log("Hello from my extension 2 🎉"), e.consumeContext(c, async (i) => {
    const o = i.getOpenApiConfiguration();
    t.setConfig({
      baseUrl: o.base,
      credentials: o.credentials
    }), t.interceptors.request.use(async (n, a) => {
      const r = await o.token();
      return n.headers.set("Authorization", `Bearer ${r}`), n;
    });
  });
}, f = (e, s) => {
  console.log("Goodbye from my extension 2 👋");
};
export {
  g as onInit,
  f as onUnload
};
//# sourceMappingURL=entrypoint-C1IergUU.js.map

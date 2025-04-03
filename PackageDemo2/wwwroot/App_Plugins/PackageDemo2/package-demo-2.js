const a = [
  {
    name: "Package Demo 2Entrypoint",
    alias: "PackageDemo2.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-C1IergUU.js")
  }
], t = [
  {
    name: "Package Demo 2Dashboard",
    alias: "PackageDemo2.Dashboard",
    type: "dashboard",
    js: () => import("./pack2dashboard.element-7RDhcqZQ.js"),
    meta: {
      label: "Pack 2",
      pathname: "pack-2-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], o = [
  ...a,
  ...t
];
export {
  o as manifests
};
//# sourceMappingURL=package-demo-2.js.map

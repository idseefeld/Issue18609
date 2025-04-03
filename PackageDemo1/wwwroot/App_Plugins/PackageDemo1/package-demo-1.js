const a = [
  {
    name: "Package Demo 1Entrypoint",
    alias: "PackageDemo1.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-BJ6uh-6g.js")
  }
], t = [
  {
    name: "Package Demo 1Dashboard",
    alias: "PackageDemo1.Dashboard",
    type: "dashboard",
    js: () => import("./pack1dashboard.element-CrkDNGUV.js"),
    meta: {
      label: "Pack 1",
      pathname: "pack-1-dashboard"
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
//# sourceMappingURL=package-demo-1.js.map

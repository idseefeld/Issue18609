const a = [
  {
    name: "Package Demo 1Entrypoint",
    alias: "PackageDemo1.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-BJ6uh-6g.js")
  }
], e = [
  {
    name: "Package Demo 1Dashboard",
    alias: "PackageDemo1.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-CqixEdDx.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
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
  ...e
];
export {
  o as manifests
};
//# sourceMappingURL=package-demo-1.js.map

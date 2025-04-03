const a = [
  {
    name: "Package Demo 2Entrypoint",
    alias: "PackageDemo2.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DktUUwaR.js")
  }
], e = [
  {
    name: "Package Demo 2Dashboard",
    alias: "PackageDemo2.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-7qIVyFa8.js"),
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
//# sourceMappingURL=package-demo-2.js.map

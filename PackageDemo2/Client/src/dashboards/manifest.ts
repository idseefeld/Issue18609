export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Package Demo 2Dashboard",
    alias: "PackageDemo2.Dashboard",
    type: 'dashboard',
    js: () => import("./pack2dashboard.element"),
    meta: {
      label: "Pack 2",
      pathname: "pack-2-dashboard"
    },
    conditions: [
      {
        alias: 'Umb.Condition.SectionAlias',
        match: 'Umb.Section.Content',
      }
    ],
  }
];

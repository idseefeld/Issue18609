export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Package Demo 1Dashboard",
    alias: "PackageDemo1.Dashboard",
    type: 'dashboard',
    js: () => import("./pack1dashboard.element"),
    meta: {
        label: "Pack 1",
      pathname: "pack-1-dashboard"
    },
    conditions: [
      {
        alias: 'Umb.Condition.SectionAlias',
        match: 'Umb.Section.Content',
      }
    ],
  }
];

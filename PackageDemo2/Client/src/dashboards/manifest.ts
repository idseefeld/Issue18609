export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Package Demo 2Dashboard",
    alias: "PackageDemo2.Dashboard",
    type: 'dashboard',
    js: () => import("./dashboard.element"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: 'Umb.Condition.SectionAlias',
        match: 'Umb.Section.Content',
      }
    ],
  }
];

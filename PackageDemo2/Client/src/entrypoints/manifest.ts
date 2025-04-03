export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Package Demo 2Entrypoint",
    alias: "PackageDemo2.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];

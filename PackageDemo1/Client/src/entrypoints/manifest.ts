export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Package Demo 1Entrypoint",
    alias: "PackageDemo1.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];

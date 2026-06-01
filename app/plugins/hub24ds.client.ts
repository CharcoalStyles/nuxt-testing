export default defineNuxtPlugin(async () => {
  await loadScript("https://hds.hub24.com.au/dist/shoelace.js", "module");
  console.log("loaded shoelace");
  const { setBasePath } =
    await import("https://hds.hub24.com.au/dist/utilities/base-path.js");
  setBasePath("https://hds.hub24.com.au/dist/");
  console.log("set base path");
});

function loadScript(src: string, type?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    if (type) {
      script.type = type;
    }
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

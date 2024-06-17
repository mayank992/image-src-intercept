export function setupSecureMedia() {
  const getImgSrc = (src: string): string =>
    src.replace("invalid-image.png", "valid-image.png");

  // ------------- Img Src Patch -------------- //

  console.log("Patching image src attribute...");

  function patchImgSrc() {
    const originalSrcDescriptor = Object.getOwnPropertyDescriptor(
      HTMLImageElement.prototype,
      "src"
    );

    Object.defineProperty(HTMLImageElement.prototype, "src", {
      set(value) {
        console.log("Intercepted image src:", value);
        originalSrcDescriptor!.set!.call(this, getImgSrc(value));
      },
      get() {
        return originalSrcDescriptor!.get!.call(this);
      },
      configurable: true,
      enumerable: true,
    });
  }

  patchImgSrc();

  console.log("Patched image src attribute");

  // ------------- Extra handling for SSR images -------------- //

  function replaceBrokenImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      console.log("Intercepted initial img src:", img.src);
      img.src = img.src; // patched src setter will intercept this
    });
  }

  // Initial check for server-side rendered images
  replaceBrokenImages();
}

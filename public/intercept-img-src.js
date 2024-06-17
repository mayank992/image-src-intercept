(function () {
  console.log("Patching image attributes...");

  const getImgSrc = (src) => (src === "/image1.png" ? "/image2.png" : src);

  const originalSrcDescriptor = Object.getOwnPropertyDescriptor(
    HTMLImageElement.prototype,
    "src"
  );

  Object.defineProperty(HTMLImageElement.prototype, "src", {
    set(value) {
      console.log("Intercepted image src:", value);
      originalSrcDescriptor.set.call(this, getImgSrc(value));
    },
    get: function () {
      return originalSrcDescriptor.get.call(this);
    },
    configurable: true,
    enumerable: true,
  });

  console.log("Patched image attributes");
})();

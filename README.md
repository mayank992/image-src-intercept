https://github.com/mayank992/image-src-intercept/assets/53047918/91bd0c6d-0143-4976-aed5-2b4af0d3bc7f

Initially, `src` attribute of `img` tag is set to `/invalid-image.png` which will result in `404`.

`setupSecureMedia`: This script patches original src setter of image with a custom setter which replaces invalid images urls with valid urls. To handle ssr images we are querying all the `img` elements present in the dom (will be part of initial html) and trigger a src set (img.src = img.src).

This works fine for dynamically added images but won't work for the img tags present in initial html generated by server side rendering.

## Getting Started

Note: In case of dev build effect will run twice.

```bash
yarn dev
```

OR

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

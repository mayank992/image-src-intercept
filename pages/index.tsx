// libs
import Head from "next/head";
import { useState, useLayoutEffect } from "react";

// scripts
import { setupSecureMedia } from "@/scripts/setupSecureMedia";

// fonts
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showDynamicImage, setShowDynamicImage] = useState(false);
  // load secure media identifiers here

  useLayoutEffect(() => {
    // pass secure media identifiers to this setup function
    setupSecureMedia();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <button onClick={() => setShowDynamicImage((state) => !state)}>
          Toggle Dynamic Image
        </button>
        <br />
        <br />
        <p>SSR Image</p>
        <img
          src="/invalid-image.png"
          alt="ssr-image"
          width={280}
          height={180}
          onLoadStart={() => console.log("Loading Image...")}
          onLoad={() => console.log("Image Loaded")}
        />
        <br />
        <br />
        {showDynamicImage ? (
          <>
            <p>Dynamic Image</p>
            <img
              src="/invalid-image.png"
              alt="dynamic-image"
              width={280}
              height={180}
              onLoadStart={() => console.log("Loading Dynamic Image...")}
              onLoad={() => console.log("Dynamic Image Loaded")}
            />
          </>
        ) : null}
      </main>
    </>
  );
}

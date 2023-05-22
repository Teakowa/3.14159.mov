import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>3.14159.mov - View a random Pi song video</title>
        <meta
          name="description"
          content="3.14159.mov is a website where you can view a random Pi song video. Enjoy entertaining and educational songs about the mathematical constant Pi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Pi, song video, circle, mathematics, entertainment" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="3.14159.mov - View a random Pi song video" />
        <meta
          property="og:description"
          content="3.14159.mov is a website where you can view a random Pi song video. Enjoy entertaining and educational songs about the mathematical constant Pi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://3.14159.mov" />
        <meta property="og:image" content="/pi.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3.14159.mov - View a random Pi song video" />
        <meta
          name="twitter:description"
          content="3.14159.mov is a website where you can view a random Pi song video. Enjoy entertaining and educational songs about the mathematical constant Pi."
        />
        <meta name="twitter:image" content="/pi.png" />

        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5420540802887052"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <main className={styles.main}>
        <Content />

        <div className="mt-2 flex gap-2">
          <a
            href="https://twitter.com/intent/tweet/?text=View%20a%20random%20Pi%20song%20video&url=https%3A%2F%2F3.14159.mov"
            target="_blank"
            className="text-[#1da1f2] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center hover:opacity-80"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
              ></path>
            </svg>
            Share on Twitter
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Mighty Morphin Power Rangers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex items-center justify-between flex-wrap bg-red-700 p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Link href="/">
            <a className="font-semibold text-xl tracking-tight">
              Mighty Morphin Hall of Fame
            </a>
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/rangers">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4">
                Rangers
              </a>
            </Link>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4">
              Episodes
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline">
              Morphs!
            </a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}

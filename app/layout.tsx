import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header, Sidebar } from './components'
import "./globals.css"
import { Providers } from './providers/providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ParoMaster",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  

  return (
    <html lang="uk">
      <body className={`${inter.className} primaryTextColor`}>
        <Providers>
          <Header />
            <div className='px-8 flex items-start'>
              <Sidebar/>
              <div className='w-full'>{children}</div>
        </div>
        </Providers>
      </body>
    </html>
  );
}

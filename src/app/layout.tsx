import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import Header from "@/components/layout/Header";
import Providers from "@/utils/providers";


export const metadata: Metadata = {
  title: "PSP EXPRESS",
  description: "Show User List.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

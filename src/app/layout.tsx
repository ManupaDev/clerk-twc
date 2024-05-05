import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Clerk Elements 💓 TWC Demo",
  description:
    "A demo of combining TWC with Clerk Elements to gain the shadcn experience. Created by `create-t3-app`",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} px-4 lg:px-64`}>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

import Header from "./components/layout/Header/Header";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ weight: ["200", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "NFT",
  description: "NFT exchange",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

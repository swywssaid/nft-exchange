"use client";

import Header from "./components/layout/Header/Header";
import { Urbanist } from "next/font/google";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import { hooks as metaMaskHooks, metaMask } from "./components/connectors/metaMask";

const urbanist = Urbanist({ weight: ["200", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "NFT",
  description: "NFT exchange",
};
const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Web3ReactProvider connectors={connectors}>
          <Header />
          {children}
        </Web3ReactProvider>
      </body>
    </html>
  );
}

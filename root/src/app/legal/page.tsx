import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import LegalPage from "./LegalPage";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Legal & Policies | Edenwoods Eduhub Foundation",
  description:
    "Registration certificates, privacy, terms, refund, donation, child safeguarding and other policies of Edenwoods Eduhub Foundation, Hazaribagh.",
};

const Page = () => <LegalPage fontClass={montserrat.variable} />;

export default Page;

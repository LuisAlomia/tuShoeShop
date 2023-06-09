import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import GoogleAnalytics from "@/googleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Prop = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Prop) {
  return (
    <html lang="en">
      {/* Añafir el ID de medicion de tu cuenta de google analytic en GA_MEASUREMENT_ID o crea un archivo .env y agrega el ID*/}
      <GoogleAnalytics
        GA_MEASUREMENT_ID={`${process.env.NEXT_GOOGLE_ANALYTICS}`}
      />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

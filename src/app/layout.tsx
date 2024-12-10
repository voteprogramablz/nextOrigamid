import type { Metadata } from "next";
import "./globals.css";
import "dotenv/config";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: process.env.NOME_EMPRESA || "Nome Empresa",
  description: process.env.DESCRICAO_EMPRESA || "Descrição Empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <Menu />
        {children}
      </body>
    </html>
  );
}

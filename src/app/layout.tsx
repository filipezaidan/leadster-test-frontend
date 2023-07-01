export const metadata = {
  title: "Leadstert - Landing Page",
  description: "Landing Page development by Filipe Zaidan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

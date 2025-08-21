import "../src/app/globals.css";

export const metadata = {
  title: '왓챠피디아',
  description: '영화, 드라마, 책을 평가하고 추천받는 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-background-dark text-text-light font-sans">{children}</body>
    </html>
  )
}

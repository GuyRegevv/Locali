'use client'
import "../styles/globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>Locali - Discover Local Experiences</title>
        <meta name="description" content="Connect with real locals who share authentic recommendations for food, culture, and hidden gems in cities around the world." />
      </head>
      <body>
        <AuthProvider>
          {isLandingPage ? (
            // Landing page layout - no header/footer, full screen
            <main className="min-h-screen">
              {children}
            </main>
          ) : (
            // All other pages - with header and footer, flexible layout
            <div className="flex flex-col min-h-screen">
              <Header className="w-full shrink-0" />
              
              <main className="flex-1">
                {children}
              </main>
              
              <Footer className="w-full shrink-0" />
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}

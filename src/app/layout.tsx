import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Michael | Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body>
          {children}
          
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: "6px",
              padding: "10px 14px",
              fontSize: "0.95rem",
              fontWeight: 500,
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              border: "1px solid rgba(0,0,0,0.1)",
            },
            success: {
              style: {
                background: "var(--toast-bg)",
                color: "var(--toast-text)",
              },
              iconTheme: {
                primary: "#FFD700",
                secondary: "var(--toast-bg)",
              },
            },
            error: {
              style: {
                background: "var(--toast-bg)",
                color: "var(--toast-text)",
              },
              iconTheme: {
                primary: "#ff4d4d",
                secondary: "var(--toast-bg)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
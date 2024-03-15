import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  // if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  //   import('../mocks');
  // }

  const [queryClient] = useState(() => new QueryClient());

  return (
    //ThemeProvider로 컴포넌트들을 감쌈으로 다크모드설정을 바꿀수 있게 한다.
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <div className={"min-h-screen"}>
          <Component {...pageProps} />
          {/* toast 컴포넌트 달아둠으로써 toast알림이 발생했을때 화면에 나타나게 한다. */ }
          <Toaster />
        </div>
        <ModeToggle className={"absolute top-6 right-6"} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
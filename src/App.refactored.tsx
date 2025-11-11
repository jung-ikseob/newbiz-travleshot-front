import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loading Component
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-[#2063d2] border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-[#191f28]">Loading...</p>
    </div>
  </div>
);

// Lazy loaded components - Code Splitting
const PcLanding = lazy(() => import("./pages/PcLanding"));
const Index = lazy(() => import("./pages/Index"));
const KidInfo = lazy(() => import("./pages/KidInfo"));
const My = lazy(() => import("./pages/My"));
const Intro = lazy(() => import("./pages/Intro"));
const Start = lazy(() => import("./pages/Start"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Info = lazy(() => import("./pages/Info"));
const Ocr = lazy(() => import("./pages/Ocr"));
const OcrComplete = lazy(() => import("./pages/OcrComplete"));
const Join = lazy(() => import("./pages/Join"));
const Loading = lazy(() => import("./pages/Loading"));
const Issuance = lazy(() => import("./pages/Issuance"));
const Login = lazy(() => import("./pages/Login"));
const CardChoice = lazy(() => import("./pages/CardChoice"));

// Olive pages - grouped for better code splitting
const OliveHome = lazy(() => import("./pages/OliveHome"));
const OliveLogin = lazy(() => import("./pages/OliveLogin.refactored"));
const OliveLoginKid = lazy(() => import("./pages/OliveLoginKid"));
const OliveLoginComplete = lazy(() => import("./pages/OliveLoginComplete"));
const OliveLoginCart = lazy(() => import("./pages/OliveLoginCart"));
const OlivePayComplete = lazy(() => import("./pages/OlivePayComplete"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Optimize query defaults
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* PC Layout with Left Landing + Right Service */}
            <Route path="/" element={<PcLanding />}>
              <Route index element={<Index />} />
              <Route path="intro" element={<Intro />} />
              <Route path="info" element={<Info />} />
              <Route path="ocr" element={<Ocr />} />
              <Route path="ocr_complete" element={<OcrComplete />} />
              <Route path="join" element={<Join />} />
              <Route path="login" element={<Login />} />
              <Route path="loading" element={<Loading />} />
              <Route path="issuance" element={<Issuance />} />
              <Route path="card_choice" element={<CardChoice />} />

              {/* Olive Pages */}
              <Route path="olive_home" element={<OliveHome />} />
              <Route path="olive_login" element={<OliveLogin />} />
              <Route path="olive_login_kid" element={<OliveLoginKid />} />
              <Route path="olive_login_complete" element={<OliveLoginComplete />} />
              <Route path="olive_login_cart" element={<OliveLoginCart />} />
              <Route path="olive_pay_complete" element={<OlivePayComplete />} />

              <Route path="start" element={<Start />} />
              <Route path="main" element={<Index />} />
              <Route path="kid_info" element={<KidInfo />} />
              <Route path="my" element={<My />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

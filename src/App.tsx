import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import KidInfo from "./pages/KidInfo";
import My from "./pages/My";
import Intro from "./pages/Intro";
import Start from "./pages/Start";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import Ocr from "./pages/Ocr";
import OcrComplete from "./pages/OcrComplete";
import Join from "./pages/Join";
import Loading from "./pages/Loading";
import Issuance from "./pages/Issuance";
import Login from "./pages/Login";
import CardChoice from "./pages/CardChoice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/info" element={<Info />} />
          <Route path="/ocr" element={<Ocr />} />
          <Route path="/ocr_complete" element={<OcrComplete />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/issuance" element={<Issuance />} />
          <Route path="/card_choice" element={<CardChoice />} />
          <Route path="/start" element={<Start />} />
          <Route path="/main" element={<Index />} />
          <Route path="/kid_info" element={<KidInfo />} />
          <Route path="/my" element={<My />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

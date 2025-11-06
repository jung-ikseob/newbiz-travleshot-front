import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-white">
      <div className="relative w-full min-h-screen max-w-[375px] mx-auto overflow-hidden bg-gray-100">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-4 text-xl text-gray-600">{t.notFound.title}</p>
            <p className="mb-4 text-sm text-gray-500">{t.notFound.description}</p>
            <a href="/" className="text-blue-500 underline hover:text-blue-700">
              {t.notFound.goHome}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

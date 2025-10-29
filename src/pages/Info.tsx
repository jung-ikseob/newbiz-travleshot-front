import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Info: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Go back"
      >
        <ChevronLeft className="w-6 h-6 text-gray-500" />
      </button>

      <div className="relative flex-1 flex flex-col">
        <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[600px] aspect-square">
            <div className="w-full h-full rounded-full bg-gradient-radial from-blue-600/25 via-blue-600/10 to-transparent"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-8">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[280/174]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[70%] sm:w-[280px] aspect-[280/174]">
                  <div className="absolute inset-0 rotate-90 rounded-xl shadow-[0_0_30px_rgba(32,99,210,0.3)]">
                    <div className="w-full h-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                      <div className="text-white/80 text-xs sm:text-sm font-medium">ZZ1000001</div>
                      <div className="text-white text-xl sm:text-2xl font-bold tracking-wide">GAIMU SAKURA</div>
                      <div className="absolute bottom-0 right-0 text-white/10 text-[60px] sm:text-[80px] font-bold leading-none pr-4 pb-2">
                        K-ID
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-8 sm:top-12">
                <div className="relative">
                  <svg className="absolute -left-10 sm:-left-12 top-3 w-10 sm:w-12 h-6" viewBox="0 0 50 24" fill="none">
                    <path d="M0 12 L40 2" stroke="#191F28" strokeWidth="1.5" />
                  </svg>
                  <div className="px-3 py-1.5 bg-gradient-to-r from-gray-900 to-gray-800 rounded text-white text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
                    Activity
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 bottom-16 sm:bottom-20">
                <div className="relative">
                  <svg className="absolute -right-10 sm:-right-12 top-3 w-10 sm:w-12 h-6" viewBox="0 0 50 24" fill="none">
                    <path d="M50 12 L10 22" stroke="#191F28" strokeWidth="1.5" />
                  </svg>
                  <div className="px-3 py-1.5 bg-gradient-to-r from-gray-900 to-gray-800 rounded text-white text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
                    Shopping
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-white/80 via-white/95 to-white pointer-events-none"></div>
        </div>

        <div className="relative z-20 flex-1 bg-white px-6 sm:px-8 pb-32">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-5">
              K-ID란
            </h1>
            
            <p className="text-base sm:text-lg font-semibold text-blue-600 text-center leading-relaxed mb-12">
              여권을 대신하여 사용할 수 있는<br />
              디지털 신분증으로 사용할 수 있습니다
            </p>

            <p className="text-base sm:text-lg text-gray-900 text-center leading-relaxed">
              K-ID를 활용하여, 한국의 다양한<br />
              디지털 서비스에 가입하고 활용해 보세요
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 sm:px-8 pt-4 pb-6 sm:pb-8 z-30">
          <div className="max-w-md mx-auto">
            <p className="text-center text-gray-500 text-base mb-4">
              여권을 준비해주세요
            </p>
            
            <button
              onClick={() => {
                // Request camera access and navigate to OCR
                navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
                  .then(() => {
                    navigate('/ocr');
                  })
                  .catch((err) => {
                    console.error('Camera access denied:', err);
                    alert('카메라 접근 권한이 필요합니다.');
                  });
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg py-4 rounded transition-colors"
            >
              다음
            </button>

            <div className="h-5 sm:h-6 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

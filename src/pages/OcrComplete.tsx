import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const OcrComplete: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-[#F1F3F5] overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(25,31,40,0.50)]">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-16 left-4 z-10 text-white hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 41 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.0303 81.9795L21.0303 65.9795" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M21.0303 81.9727L37.0303 65.9727" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-between h-full px-5 py-8">
          {/* Top Instruction */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 max-w-md w-full pt-20">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="28" height="34" viewBox="0 0 228 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_scan" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="101" y="14" width="27" height="20">
                    <rect x="101.146" y="14.3604" width="25.9385" height="19.3469" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_scan)">
                    <path d="M144.793 -25.0527L61.2832 58.455" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 -19.5742L61.2832 63.9335" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 -14.0967L61.2832 69.411" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 -8.61914L61.2832 74.8885" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 -3.14062L61.2832 80.3671" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 2.33789L61.2832 85.8456" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 7.81543L61.2832 91.3231" stroke="#2063D2" strokeLinecap="round"/>
                    <path d="M144.793 13.293L61.2832 96.8007" stroke="#2063D2" strokeLinecap="round"/>
                  </g>
                  <path d="M106.166 14.293H100.914V19.5451" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M121.833 33.708L127.085 33.708L127.085 28.4559" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M127.085 19.5451L127.085 14.293L121.833 14.293" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M100.914 28.4559L100.914 33.708L106.166 33.708" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p 
                className="text-white text-center text-base"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                여권을 화면 안에 맞춰 촬영해주세요.
              </p>
            </div>

            {/* Passport Frame */}
            <div className="relative w-full max-w-[335px]">
              {/* Outer frame with cutout */}
              <div className="relative w-full aspect-[335/240]">
                {/* Border overlay */}
                <div className="absolute inset-0 rounded-[10px] border-4 border-white pointer-events-none z-10"></div>
                
                {/* Passport example image */}
                <div className="absolute inset-0 rounded-[20px] border border-black bg-white overflow-hidden">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/44237fa184ba9b72b7064f5d92f567c8e01e2adb?width=620"
                    alt="Passport example"
                    className="w-full h-full object-cover p-3"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Instruction */}
            <div className="flex flex-col items-center gap-4 pb-8">
              <button
                onClick={() => navigate('/ocr_complete')}
                className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 256 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="128" cy="24" r="24" fill="white" fillOpacity="0.2"/>
                  <line x1="117.905" y1="32.8242" x2="139.249" y2="32.8242" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M116.521 13.9033L130.482 27.8635L139.365 18.9798" stroke="#2063D2" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M133.02 18.9795L139.365 18.9795L139.365 25.9596" stroke="#2063D2" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <p 
                className="text-white text-center text-base px-4"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                빛 반사나 그림자가 없도록 주의해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcrComplete;

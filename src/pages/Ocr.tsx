import { FC, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Local image assets
import ocr1 from '../assets/ocr/ocr_1.png';
import ocr2 from '../assets/ocr/ocr_2.svg';

const Ocr: FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();

    return () => {
      // Stop camera when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-white">
      <div className="relative w-full h-full max-w-[375px] mx-auto overflow-hidden bg-[#f1f3f5]">
        {/* Camera Feed */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtract Background Overlay - Creates the rectangular cutout effect */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Transparent rectangle cutout with dark overlay around it */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[335px] h-[239.654px] rounded-[10px]"
            style={{
              boxShadow: '0 0 0 9999px rgba(25, 31, 40, 0.8)'
            }}
          />
        </div>

        {/* OCR Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Close button - top-left */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-[62px] left-[17px] z-50 w-[24px] h-[24px] text-white hover:opacity-80 transition-opacity"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Top section - OCR_1 image (여권을 화면 안에 맞춰 촬영해주세요) */}
          <div className="absolute top-[133px] flex flex-col items-center gap-[10px] z-30">
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <img src={ocr1} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="font-['Pretendard-Regular',sans-serif] text-[16px] leading-[1.5] text-white text-center capitalize whitespace-nowrap">
              여권을 화면 안에 맞춰 촬영해주세요.
            </p>
          </div>

          {/* Center Focus Area - White border rectangle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[335px] h-[239.654px] border-4 border-solid border-white rounded-[10px] z-20" />

          {/* Bottom section - OCR_2 image (빛 반사나 그림자가 없도록 주의해주세요) */}
          <div className="absolute bottom-[98px] flex flex-col items-center gap-[10px] z-30">
            <button
              onClick={() => navigate('/ocr_complete')}
              className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Take photo"
            >
              <img src={ocr2} alt="" className="w-full h-full object-contain" />
            </button>
            <p className="font-['Pretendard-Regular',sans-serif] text-[16px] leading-[1.5] text-white text-center capitalize whitespace-nowrap">
              빛 반사나 그림자가 없도록 주의해주세요.
            </p>
          </div>
        </div>

        {/* Home indicator space */}
        <div className="absolute bottom-0 left-0 w-full h-[21px]" />
      </div>
    </div>
  );
};

export default Ocr;

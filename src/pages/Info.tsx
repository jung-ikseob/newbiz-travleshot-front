import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Local image assets
import chevron from '../assets/info/chevron.svg';

const Info: FC = () => {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (viewportWidth <= 375) {
        setScale(1);
      } else {
        const scaleByWidth = viewportWidth / 375;
        const scaleByHeight = viewportHeight / 812;
        setScale(Math.min(scaleByWidth, scaleByHeight));
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <div
        className="relative w-[375px] h-[812px] bg-white overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[62px] left-[14px] z-50 w-[24px] h-[24px]"
          aria-label="Go back"
        >
          <img src={chevron} alt="" className="w-full h-full" />
        </button>

        {/* Header Section */}
        <div className="absolute left-0 right-0 top-[124px] px-[54.5px]">
          <h1 className="font-['Pretendard-SemiBold',sans-serif] text-[30px] leading-[36px] text-[#191f28] text-center mb-[20px]">
            K-ID란
          </h1>
          <p className="font-['Pretendard-SemiBold',sans-serif] text-[16px] leading-[24px] text-[#2063d2] text-center">
            여권을 대신하여 사용할 수 있는<br />
            디지털 신분증으로 사용할 수 있습니다
          </p>
        </div>

        {/* Card Section */}
        <div className="absolute left-0 right-0 top-[240px] flex items-center justify-center">
          <div className="relative w-full h-[360px]">
            {/* Circular gradient background */}
            <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[509.899px] h-[509.899px] pointer-events-none">
              <div className="w-full h-full rounded-full bg-gradient-radial from-[rgba(32,99,210,0.15)] via-[rgba(32,99,210,0.08)] to-transparent" />
            </div>

            {/* Rotated Card Container */}
            <div className="absolute left-1/2 top-[90px] -translate-x-1/2">
              <div className="relative" style={{ transform: 'rotate(90deg)' }}>
                {/* K-ID Card */}
                <div className="w-[280px] h-[174px] relative rounded-[12px] shadow-[0px_0px_30px_rgba(32,99,210,0.3)] overflow-hidden">
                  {/* Card Background with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#001c4b] via-[#003284] to-[#2063d2]" />

                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full">
                      <svg className="w-full h-full" viewBox="0 0 280 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="240" cy="30" r="80" fill="url(#grad1)" opacity="0.3" />
                        <circle cx="200" cy="100" r="60" fill="url(#grad2)" opacity="0.25" />
                        <defs>
                          <radialGradient id="grad1">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient id="grad2">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Card Content - All rotated -90deg to appear upright when card is rotated */}
                  <div className="absolute inset-0 p-[16px]">
                    {/* Top left: Expiry date */}
                    <div className="absolute right-[14px] top-[12px]">
                      <div style={{ transform: 'rotate(-90deg)', transformOrigin: 'top right' }}>
                        <p className="font-['Gotham-Book',sans-serif] text-[7.5px] text-[rgba(209,226,255,0.6)] whitespace-nowrap">
                          ~ 2035.03.24
                        </p>
                      </div>
                    </div>

                    {/* Left side: Name and Passport Number */}
                    <div className="absolute left-[16px] top-[46px]">
                      <div style={{ transform: 'rotate(-90deg)', transformOrigin: 'top left' }}>
                        <p className="font-['Gotham-Book',sans-serif] text-[7.5px] text-[#d1e2ff] mb-[2px] whitespace-nowrap">
                          ZZ1000001
                        </p>
                        <p className="font-['Gotham-Bold',sans-serif] text-[13.8px] text-[#d1e2ff] whitespace-nowrap">
                          GAIMU SAKURA
                        </p>
                      </div>
                    </div>

                    {/* Bottom left: Country and Birth info */}
                    <div className="absolute left-[240px] bottom-[12px]">
                      <div style={{ transform: 'rotate(-90deg)', transformOrigin: 'bottom left' }}>
                        <p className="font-['Gotham-Book',sans-serif] text-[7.5px] text-[#d1e2ff] mb-[2px] whitespace-nowrap">
                          Japan
                        </p>
                        <p className="font-['Gotham-Medium',sans-serif] text-[8.8px] text-[#d1e2ff] whitespace-nowrap">
                          F / 20.09 SEP
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* White gradient overlay (fadeout effect) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-transparent via-transparent to-white/40" />
                  </div>
                </div>

                {/* Activity badge - positioned relative to rotated card */}
                <div className="absolute" style={{ left: '320px', top: '40px', transform: 'rotate(-90deg)', transformOrigin: 'left center' }}>
                  <div className="relative">
                    {/* Arrow line */}
                    <svg className="absolute right-[100%] top-[50%] -translate-y-1/2 mr-[-20px]" width="50" height="2" viewBox="0 0 50 2" fill="none">
                      <line x1="0" y1="1" x2="50" y2="1" stroke="#191F28" strokeWidth="1.5" />
                    </svg>
                    {/* Badge */}
                    <div className="px-[10px] py-[6px] rounded-[4px] bg-gradient-to-r from-[#191f28] to-[#2063d2] shadow-[0px_0px_10px_rgba(255,255,255,0.25)]">
                      <p className="font-['Pretendard-Medium',sans-serif] text-[14px] text-white whitespace-nowrap capitalize">
                        activity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shopping badge - positioned relative to rotated card */}
                <div className="absolute" style={{ left: '-90px', top: '90px', transform: 'rotate(-90deg)', transformOrigin: 'right center' }}>
                  <div className="relative">
                    {/* Arrow line */}
                    <svg className="absolute left-[100%] top-[50%] -translate-y-1/2 ml-[-20px]" width="50" height="2" viewBox="0 0 50 2" fill="none">
                      <line x1="0" y1="1" x2="50" y2="1" stroke="#191F28" strokeWidth="1.5" />
                    </svg>
                    {/* Badge */}
                    <div className="px-[10px] py-[6px] rounded-[4px] bg-gradient-to-r from-[#191f28] to-[#2063d2] shadow-[0px_0px_10px_rgba(255,255,255,0.25)]">
                      <p className="font-['Pretendard-Medium',sans-serif] text-[14px] text-white whitespace-nowrap capitalize">
                        Shopping
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* White gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />
          </div>
        </div>

        {/* Description Text */}
        <div className="absolute left-0 right-0 top-[540px] px-[20px]">
          <p className="font-['Pretendard-Regular',sans-serif] text-[16px] leading-[24px] text-[#191f28] text-center">
            K-ID를 활용하여, 한국의 다양한<br />
            디지털 서비스에 가입하고 활용해 보세요
          </p>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white">
          {/* Instruction text */}
          <div className="px-[20px] py-[6px]">
            <p className="font-['Pretendard-Medium',sans-serif] text-[16px] leading-[24px] text-[#6b7583] text-center">
              여권을 준비해주세요
            </p>
          </div>

          {/* Button */}
          <div className="px-[20px] pt-[10px] pb-[16px]">
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
              className="w-full h-[54px] bg-[#2063d2] rounded-[4px] flex items-center justify-center cursor-pointer hover:bg-[#1a52b8] transition-colors"
            >
              <p className="font-['Pretendard-SemiBold',sans-serif] text-[16px] text-white">
                다음
              </p>
            </button>
          </div>

          {/* Home indicator space */}
          <div className="h-[21px]" />
        </div>
      </div>
    </div>
  );
};

export default Info;

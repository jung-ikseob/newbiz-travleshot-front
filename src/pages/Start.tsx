import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Local image assets
import unionIcon from '../assets/start/union-icon.svg';
import chevronRight from '../assets/start/chevron-right.svg';
import travelShotLogo from '../assets/start/travel-shot-logo.svg';
import backgroundDecorative from '../assets/start/background-decorative.svg';

const Start: FC = () => {
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
    <div
      className="start w-full h-screen flex items-center justify-center overflow-hidden relative"
      style={{
        background: 'linear-gradient(180deg, #001c4b 0%, #003284 58.766%, #2063d2 100%)'
      }}
    >
      {/* Background decorative elements - SVG */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundDecorative}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="relative z-10"
        style={{
          width: '375px',
          height: '812px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Logo and Tagline */}
        <div
          className="absolute flex flex-col items-center gap-2.5"
          style={{
            top: '175px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <div className="w-[180px] h-[24.463px]">
            <img
              src={travelShotLogo}
              alt="Travel Shot"
              className="w-full h-full object-contain"
            />
          </div>
          <p
            className="text-white text-base text-center"
            style={{
              fontFamily: 'Gotham, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.32px',
              lineHeight: '1.5'
            }}
          >
            Travel, lighter and safer
          </p>
        </div>

        {/* Union decorative element */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: 'calc(50% - 48.685px)',
            width: '455.634px',
            height: '127.602px'
          }}
        >
          <img
            src={unionIcon}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Language Change Link */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-center underline cursor-pointer"
          style={{
            top: 'calc(50% + 45px)',
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '16px',
            lineHeight: '1.5',
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font'
          }}
        >
          언어 변경
        </p>

        {/* Bottom Actions */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col"
          style={{
            width: '375.53px'
          }}
        >
          {/* Already have K-ID */}
          <div className="flex flex-col items-center py-1.5 px-0">
            <button
              onClick={() => navigate('/login')}
              className="flex gap-0.5 items-center p-0 cursor-pointer bg-transparent border-0"
            >
              <p
                className="text-white text-base h-full whitespace-pre-wrap"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  width: '127px'
                }}
              >
                K-ID가 이미 있어요!
              </p>
              <div className="w-6 h-6">
                <img
                  src={chevronRight}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </button>
          </div>

          {/* Start Button */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2.5 px-5 py-4 w-full">
              <button
                onClick={() => navigate('/info')}
                className="bg-[#111111] flex flex-col h-[54px] items-center justify-center px-2.5 py-[14px] rounded-md w-full cursor-pointer border-0 hover:bg-[#222222] transition-colors"
              >
                <span
                  className="text-white text-base text-center"
                  style={{
                    fontFamily: 'Pretendard, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.5'
                  }}
                >
                  시작하기
                </span>
              </button>
            </div>

            {/* Home Indicator */}
            <div className="h-[21px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

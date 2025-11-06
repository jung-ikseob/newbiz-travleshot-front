import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSettings from './LanguageSettings';

// Local image assets
import unionIcon from '../assets/start/union-icon.svg';
import chevronRight from '../assets/start/chevron-right.svg';
import travelShotLogo from '../assets/start/travel-shot-logo.svg';
import backgroundDecorative from '../assets/start/background-decorative.svg';

const Start: FC = () => {
  const navigate = useNavigate();
  const [showLanguageSettings, setShowLanguageSettings] = useState(false);

  return (
    <div className="start w-full h-screen overflow-hidden relative bg-white">
      <div
        className="relative h-full w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '375px',
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

        <div className="relative z-10 flex flex-col h-full w-full">
        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center pt-[175px] pb-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center gap-2.5">
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
          className="relative left-1/2 -translate-x-1/2 mt-[90px]"
          style={{
            width: 'min(455.634px, 100%)',
            height: '127.602px',
            maxWidth: '100%'
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
            onClick={() => setShowLanguageSettings(true)}
            className="relative text-center underline cursor-pointer mt-[45px]"
            style={{
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
        </div>

        {/* Bottom Actions */}
        <div className="bg-transparent w-full">
          {/* Already have K-ID */}
          <div className="flex justify-center items-center py-1.5 gap-0.5">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center p-0 cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity"
            >
              <p
                className="text-white text-base leading-[150%]"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontWeight: 500
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
          <div className="px-5 py-4">
            <button
              onClick={() => navigate('/info')}
              className="w-full h-[54px] bg-[#111111] rounded flex items-center justify-center hover:bg-[#222222] transition-colors"
            >
              <span
                className="text-white text-base font-semibold leading-[150%]"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontWeight: 600
                }}
              >
                시작하기
              </span>
            </button>
          </div>
          
          {/* Home Indicator */}
          <div className="h-[21px]" />
        </div>
        </div>

        <LanguageSettings
          isOpen={showLanguageSettings}
          onClose={() => setShowLanguageSettings(false)}
        />
      </div>
    </div>
  );
};

export default Start;

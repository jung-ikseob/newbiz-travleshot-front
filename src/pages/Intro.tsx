import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Local image assets
import phone from '../assets/intro/phone.svg';
import travelShotLogo from '../assets/intro/travel-shot-logo.svg';
import unionIcon from '../assets/intro/union-icon.svg';
import backgroundDecorative from '../assets/intro/background-decorative.svg';

const Intro: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start');
  };

  useEffect(() => {
    // 3초 후 start 페이지로 이동
    const timer = setTimeout(() => navigate('/start'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro w-full h-screen overflow-hidden relative bg-white">
      <div
        className="relative h-full w-full max-w-[375px] mx-auto overflow-hidden cursor-pointer"
        style={{
          background: '#010d25'
        }}
        onClick={handleClick}
      >
        {/* Background decorative elements - SVG */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={backgroundDecorative}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full w-full">
        {/* Union decorative element */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: 'calc(50% - 49px)',
            width: '476px',
            height: '127.602px'
          }}
        >
          <img
            src={unionIcon}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

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
            className="text-[#2063d2] text-base text-center"
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

        {/* iPhone Mockup */}
        <div
          className="absolute"
          style={{
            bottom: '0px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '244px',
            height: '500px',
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          <img
            src={phone}
            alt="Phone Mockup"
            className="w-full h-auto"
            style={{ maxHeight: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

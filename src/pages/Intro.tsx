import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMobile from '../hooks/use-mobile';

const Intro: FC = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();

  useEffect(() => {
    // 3초 후 start 페이지로 이동
    const timer = setTimeout(() => navigate('/start'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro relative w-full h-screen bg-[#010d25] overflow-hidden">
      <div className={`relative mx-auto h-full ${isMobile ? 'w-full' : 'max-w-[375px]'}`}>
        {/* Background Rectangle */}
        <img 
          className="rectangle absolute top-0 left-0 w-full h-auto" 
          src="https://c.animaapp.com/UVegOpMX/img/rectangle-23803.svg" 
          alt=""
        />
        
        {/* Logo/Group Image */}
        <img 
          className="group absolute top-[161px] left-1/2 -translate-x-1/2 w-[260px]" 
          src="https://c.animaapp.com/UVegOpMX/img/group.png" 
          alt="Travel Shot Logo"
        />
        
        {/* System Status Bar */}
        <img 
          className="system-status-bar absolute top-0 left-0 w-full" 
          src="https://c.animaapp.com/UVegOpMX/img/-system-status-bar.svg" 
          alt=""
        />
        
        {/* iPhone Mockup with Union Overlay */}
        <div className="overlap-group absolute top-[377px] left-1/2 -translate-x-1/2 w-[289px] h-[316px]">
          <img 
            className="union absolute top-0 left-0 w-[289px] h-[316px]" 
            src="https://c.animaapp.com/UVegOpMX/img/union.svg" 
            alt=""
          />
          <img 
            className="black-titanium absolute top-[9px] left-[9px] w-[271px] h-[297px]" 
            src="https://c.animaapp.com/UVegOpMX/img/black-titanium.png" 
            alt=""
          />
        </div>
        
        {/* Title Frame */}
        <div className="frame absolute top-[300px] left-1/2 -translate-x-1/2 w-full px-4 text-center">
          <h1 className="text-wrapper text-white text-[32px] font-normal leading-[38.4px] mb-1">
            Travel Shot
          </h1>
          <p className="div text-[#317cc4] text-xl font-normal leading-6">
            Travel, lighter and safer
          </p>
        </div>
        
        {/* Home Indicator */}
        <div className="system-home absolute bottom-2 left-1/2 -translate-x-1/2">
          <div className="home w-[134px] h-[5px] bg-[#313b58] rounded-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
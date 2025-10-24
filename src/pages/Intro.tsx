import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMobile from '../hooks/use-mobile';

const Intro: FC = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();

  useEffect(() => {
    // 1초 후 메인(/main)으로 이동
    const t = setTimeout(() => navigate('/main'), 1000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="relative w-full h-screen bg-[#010d25] overflow-hidden">
      <div className={`relative mx-auto h-full ${isMobile ? 'w-full' : 'w-[calc(100vh*0.46)]'} min-w-[375px]`}>
        <img 
          className="w-full absolute top-0"
          src="https://c.animaapp.com/UVegOpMX/img/rectangle-23803.svg" 
          alt="Background pattern"
        />
        
        <img 
          className="absolute top-0 w-full"
          src="https://c.animaapp.com/UVegOpMX/img/-system-status-bar.svg" 
          alt="Status bar"
        />

        <div className="absolute w-full top-1/2 -translate-y-1/2">
          <div className="relative px-4">
            <img 
              className="w-full max-w-[280px] mx-auto mb-4"
              src="https://c.animaapp.com/UVegOpMX/img/group.png" 
              alt="Travel Shot Logo"
            />
            
            <div className="text-center">
              <h1 className="text-white text-2xl mb-2">Travel Shot</h1>
              <p className="text-[#317cc4] text-lg">Travel, lighter and safer</p>
            </div>
          </div>

          <div className="relative mt-8 px-4">
            <img 
              className="w-full max-w-[320px] mx-auto"
              src="https://c.animaapp.com/UVegOpMX/img/black-titanium.png" 
              alt="iPhone mockup"
            />
            <img 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[320px]"
              src="https://c.animaapp.com/UVegOpMX/img/union.svg" 
              alt="Overlay effect"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="w-[134px] h-1 bg-[#313b58] rounded-full mx-auto mb-2" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
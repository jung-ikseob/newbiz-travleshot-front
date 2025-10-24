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
    <div 
      className="intro relative overflow-hidden flex items-center justify-center"
      style={{
        width: isMobile ? '100%' : '375px',
        height: '812px',
        margin: '0 auto',
        background: 'linear-gradient(0deg, rgba(1, 13, 37, 1) 0%, rgba(1, 13, 37, 1) 100%), linear-gradient(180deg, rgba(16, 50, 113, 1) 0%, rgba(19, 65, 142, 1) 51%, rgba(102, 143, 207, 1) 100%)'
      }}
    >
      <div className="relative w-[375px] h-[812px]">
        {/* Background Rectangle */}
        <img 
          className="rectangle absolute top-0 left-0 w-[375px] h-[812px]" 
          src="https://c.animaapp.com/UVegOpMX/img/rectangle-23803.svg" 
          alt=""
        />
        
        {/* System Status Bar */}
        <img 
          className="system-status-bar absolute top-0 left-0 w-full h-[38px] object-cover" 
          src="https://c.animaapp.com/UVegOpMX/img/-system-status-bar.svg" 
          alt=""
        />
        
        {/* Title Frame */}
        <div 
          className="frame absolute flex flex-col items-center w-[249px]"
          style={{
            top: '160px',
            left: 'calc(50% - 124px)'
          }}
        >
          <h1 
            className="text-wrapper relative self-stretch text-center"
            style={{
              marginTop: '-1px',
              fontFamily: '"Gotham-Medium", Helvetica',
              fontWeight: 500,
              color: '#317cc4',
              fontSize: '46px',
              letterSpacing: '-0.92px',
              lineHeight: '55.2px'
            }}
          >
            Travel Shot
          </h1>
          <p 
            className="div relative self-stretch text-center"
            style={{
              fontFamily: '"Gotham-Book", Helvetica',
              fontWeight: 400,
              color: '#317cc4cc',
              fontSize: '22px',
              letterSpacing: '-0.44px',
              lineHeight: '33px'
            }}
          >
            Travel, lighter and safer
          </p>
        </div>

        {/* iPhone Mockup with Union Overlay */}
        <div 
          className="overlap-group absolute"
          style={{
            width: '375px',
            height: '518px',
            top: '294px',
            left: 0
          }}
        >
          <img 
            className="union absolute top-0 left-0 w-[375px] h-[128px]" 
            src="https://c.animaapp.com/UVegOpMX/img/union.svg" 
            alt=""
          />
          <img 
            className="black-titanium absolute"
            style={{
              width: '244px',
              height: '412px',
              top: '106px',
              left: '74px'
            }}
            src="https://c.animaapp.com/UVegOpMX/img/black-titanium.png" 
            alt=""
          />
        </div>
        
        {/* Home Indicator */}
        <div 
          className="system-home absolute left-0 bottom-0 w-[375px] h-[21px] flex items-end justify-center"
        >
          <div 
            className="home bg-[#313b58]"
            style={{
              marginBottom: '8px',
              width: '134px',
              height: '5px',
              marginLeft: '1px',
              borderRadius: '100px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

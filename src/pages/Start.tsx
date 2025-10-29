import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Start: FC = () => {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      if (viewportWidth <= 375) {
        // 375px 이하일 때는 스케일 1
        setScale(1);
      } else {
        // 375px 이상일 때는 비율에 맞춰 확대
        const scaleByWidth = viewportWidth / 375;
        const scaleByHeight = viewportHeight / 812;
        // 둘 중 작은 값을 사용하여 화면을 벗어나지 않도록
        setScale(Math.min(scaleByWidth, scaleByHeight));
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div 
      className="start w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(16, 50, 113, 1) 0%, rgba(19, 65, 142, 1) 51%, rgba(102, 143, 207, 1) 100%)'
      }}
    >
      <div 
        className="relative"
        style={{
          width: '375px',
          height: '812px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Background Rectangle */}
        <img
          className="rectangle absolute top-0 left-0 w-[375px] h-[812px]"
          src="https://c.animaapp.com/b3GmPxRF/img/rectangle-23803.svg"
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
              color: '#ffffff',
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
              color: '#ffffffcc',
              fontSize: '22px',
              letterSpacing: '-0.44px',
              lineHeight: '33px'
            }}
          >
            Travel, lighter and safer
          </p>
        </div>

        {/* Union overlay */}
        <img
          className="union absolute w-[375px] h-[128px] left-0"
          style={{ top: '294px' }}
          src="https://c.animaapp.com/b3GmPxRF/img/union.svg"
          alt=""
        />

        {/* Language Selector Frame */}
        <div 
          className="frame-7 absolute"
          style={{
            top: '451px',
            left: 'calc(50% - 60px)',
            width: '120px'
          }}
        >
          <div 
            className="text-wrapper-5 text-center underline cursor-pointer"
            style={{
              marginTop: '-1px',
              fontFamily: '"Pretendard-Regular", Helvetica',
              fontWeight: 400,
              color: '#ffffff99',
              fontSize: '16px',
              letterSpacing: 0,
              lineHeight: '24px'
            }}
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            언어 변경
          </div>
          {isLanguageOpen && (
            <div 
              className="frame-8 flex flex-col w-[120px] items-start p-[6px] bg-white rounded-xl absolute"
              style={{
                boxShadow: '0px 0px 20px #191f2833',
                top: '34px',
                left: '0'
              }}
            >
            <div 
              className="frame-9 flex items-center justify-center gap-[10px] px-3 py-[10px] self-stretch w-full rounded-lg cursor-pointer"
              style={{
                backgroundColor: '#317cc426'
              }}
              onClick={() => setIsLanguageOpen(false)}
            >
              <div 
                className="text-wrapper-6 flex-1"
                style={{
                  marginTop: '-1px',
                  fontFamily: '"Pretendard-SemiBold", Helvetica',
                  fontWeight: 600,
                  color: '#191f28',
                  fontSize: '16px',
                  letterSpacing: 0,
                  lineHeight: '24px'
                }}
              >
                한글
              </div>
            </div>
            <div 
              className="frame-10 flex items-center justify-center gap-[10px] px-3 py-[10px] self-stretch w-full rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => setIsLanguageOpen(false)}
            >
              <div 
                className="text-wrapper-7 flex-1"
                style={{
                  marginTop: '-1px',
                  fontFamily: '"Pretendard-Regular", Helvetica',
                  fontWeight: 400,
                  color: '#191f28',
                  fontSize: '16px',
                  letterSpacing: 0,
                  lineHeight: '24px'
                }}
              >
                일본어
              </div>
            </div>
            <div 
              className="frame-10 flex items-center justify-center gap-[10px] px-3 py-[10px] self-stretch w-full rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => setIsLanguageOpen(false)}
            >
              <div 
                className="text-wrapper-7 flex-1"
                style={{
                  marginTop: '-1px',
                  fontFamily: '"Pretendard-Regular", Helvetica',
                  fontWeight: 400,
                  color: '#191f28',
                  fontSize: '16px',
                  letterSpacing: 0,
                  lineHeight: '24px'
                }}
              >
                영어
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Action Buttons Frame */}
        <div 
          className="frame-2 absolute inline-flex flex-col items-start left-0"
          style={{ top: '649px' }}
        >
          <div className="frame-wrapper flex flex-col w-[375.53px] items-center py-[6px] px-0">
            <div className="frame-3 inline-flex items-start gap-[2px]">
              <div className="frame-4 inline-flex flex-col items-start">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/login')}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate('/login'); }}
                  className="text-wrapper-2 relative self-stretch cursor-pointer"
                  style={{
                    marginTop: '-1px',
                    fontFamily: '"Pretendard-Medium", Helvetica',
                    fontWeight: 500,
                    color: '#ffffff',
                    fontSize: '16px',
                    letterSpacing: 0,
                    lineHeight: '24px'
                  }}
                >
                  K-ID가 이미 있어요!
                </div>
                <p 
                  className="p relative self-stretch text-center"
                  style={{
                    opacity: 0.6,
                    fontFamily: '"Pretendard-Regular", Helvetica',
                    fontWeight: 400,
                    color: '#ffffff',
                    fontSize: '12px',
                    letterSpacing: 0,
                    lineHeight: '18px'
                  }}
                >
                  I already have a K-ID
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="p-0 ml-2"
                aria-label="Go to login"
              >
                <img
                  className="fi-chevron-right w-6 h-6"
                  src="https://c.animaapp.com/b3GmPxRF/img/fi-chevron-right.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          
          <div className="frame-5 flex flex-col w-[375.53px] items-start">
            <div className="div-wrapper flex flex-col items-start gap-[10px] px-5 py-4 self-stretch w-full">
              <button
                onClick={() => navigate('/info')}
                className="frame-6 flex h-14 items-center justify-center px-[10px] py-[14px] self-stretch w-full bg-white rounded-xl flex-col cursor-pointer border-0"
              >
                <div 
                  className="text-wrapper-3 w-fit"
                  style={{
                    marginTop: '-8px',
                    fontFamily: '"Pretendard-SemiBold", Helvetica',
                    fontWeight: 600,
                    color: '#191f28',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    fontSize: '16px',
                    letterSpacing: 0,
                    lineHeight: '24px'
                  }}
                >
                  시작하기
                </div>
                <div 
                  className="text-wrapper-4 w-fit"
                  style={{
                    marginBottom: '-6px',
                    opacity: 0.6,
                    fontFamily: '"Pretendard-Regular", Helvetica',
                    fontWeight: 400,
                    color: '#191f28',
                    fontSize: '12px',
                    textAlign: 'center',
                    letterSpacing: 0,
                    lineHeight: '18px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  START
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

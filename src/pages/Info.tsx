import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div 
      className="info w-full h-screen flex items-center justify-center overflow-hidden bg-white"
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
        {/* Background Image */}
        <img 
          className="rectangle absolute top-0 left-0 w-[375px] h-[812px]"
          src="https://c.animaapp.com/BtDmX8j4/img/rectangle-4060.png" 
          alt=""
        />

        {/* Back Button */}
        <img 
          className="chevron absolute w-6 h-6 cursor-pointer"
          style={{
            top: '56px',
            left: '20px'
          }}
          src="https://c.animaapp.com/BtDmX8j4/img/chevron.svg" 
          alt="back"
          onClick={() => navigate(-1)}
        />

        {/* Title Section */}
        <div 
          className="frame absolute inline-flex flex-col items-start gap-1 px-5"
          style={{
            top: '112px',
            left: '0',
            width: '375px'
          }}
        >
          <h1 
            className="text-wrapper"
            style={{
              fontFamily: '"Pretendard-SemiBold", Helvetica',
              fontWeight: 600,
              color: '#191f28',
              fontSize: '28px',
              letterSpacing: 0,
              lineHeight: '42px',
              whiteSpace: 'nowrap'
            }}
          >
            여권을 준비해주세요
          </h1>
          <p 
            className="text-wrapper-2"
            style={{
              fontFamily: '"Pretendard-Regular", Helvetica',
              fontWeight: 400,
              color: '#191f28',
              fontSize: '16px',
              letterSpacing: 0,
              lineHeight: '24px',
              whiteSpace: 'nowrap'
            }}
          >
            Please prepare your passport.
          </p>
        </div>

        {/* Next Button - Bottom */}
        <div 
          className="frame-2 absolute inline-flex flex-col items-start left-0"
          style={{ top: '649px' }}
        >
          <div className="frame-5 flex flex-col w-[375px] items-start">
            <div className="div-wrapper flex flex-col items-start gap-[10px] px-5 py-4 self-stretch w-full">
              <button
                onClick={() => navigate('/main')}
                className="frame-6 flex h-14 items-center justify-center px-[10px] py-[14px] self-stretch w-full bg-[#317cc4] rounded-xl flex-col cursor-pointer border-0"
              >
                <div 
                  className="text-wrapper-3 w-fit"
                  style={{
                    marginTop: '-8px',
                    fontFamily: '"Pretendard-SemiBold", Helvetica',
                    fontWeight: 600,
                    color: '#ffffff',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    fontSize: '16px',
                    letterSpacing: 0,
                    lineHeight: '24px'
                  }}
                >
                  다음
                </div>
                <div 
                  className="text-wrapper-4 w-fit"
                  style={{
                    marginBottom: '-6px',
                    opacity: 0.6,
                    fontFamily: '"Pretendard-Regular", Helvetica',
                    fontWeight: 400,
                    color: '#ffffff',
                    fontSize: '12px',
                    textAlign: 'center',
                    letterSpacing: 0,
                    lineHeight: '18px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  NEXT
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* K-ID Info Section */}
        <div 
          className="frame-4 absolute flex w-[335px] flex-col items-start gap-3 px-5 py-4 bg-white rounded-2xl"
          style={{
            top: '330px',
            left: '20px',
            boxShadow: '0px 0px 20px #191f2833'
          }}
        >
          <div 
            className="text-wrapper-5"
            style={{
              alignSelf: 'stretch',
              marginTop: '-1px',
              fontFamily: '"Pretendard-SemiBold", Helvetica',
              fontWeight: 600,
              color: '#191f28',
              fontSize: '18px',
              letterSpacing: 0,
              lineHeight: '27px'
            }}
          >
            K-ID란
          </div>
          <div className="frame-5 flex flex-col items-start gap-4 self-stretch w-full">
            <p 
              className="k-ID"
              style={{
                alignSelf: 'stretch',
                fontFamily: '"Pretendard-Medium", Helvetica',
                fontWeight: 500,
                color: '#191f28',
                fontSize: '14px',
                letterSpacing: 0,
                lineHeight: '21px'
              }}
            >
              여권을 대신하여 사용할 수 있는 <br />
              디지털 신분증으로 사용할 수 있습니다<br />
              k-id를 활용하여, 한국의 다양한 디지털 서비스에 <br />
              가입하고 활용해 보세요
            </p>
            <p 
              className="you-can-use-it-as-a"
              style={{
                alignSelf: 'stretch',
                fontFamily: '"Pretendard-Regular", Helvetica',
                fontWeight: 400,
                color: '#8e95a2',
                fontSize: '12px',
                letterSpacing: 0,
                lineHeight: '18px'
              }}
            >
              You Can Use It As A Digital Id <br />
              instead Of A Passport.<br />
              with K-id, You Can Sign Up For And Use Various Digital Services In Korea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

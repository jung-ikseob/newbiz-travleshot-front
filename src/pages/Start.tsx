import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import useMobile from '../hooks/use-mobile';

const Start: FC = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();

  // 컨테이너 너비: 모바일(<=375)일 때 100%, 그 외에는 높이에 비례한 너비로 확장
  const containerClass = 'relative mx-auto h-full';
  const containerStyle: React.CSSProperties = isMobile
    ? { width: '100%', minWidth: 375 }
    : { width: 'calc(100vh * 375 / 812)', minWidth: 375 };

  return (
    <div className="relative w-full h-screen bg-[#010d25] overflow-hidden flex items-center justify-center">
      <div className={containerClass} style={containerStyle}>
        {/* top background rectangle */}
        <img
          className="rectangle absolute top-0 left-0 w-full"
          src="https://c.animaapp.com/b3GmPxRF/img/rectangle-23803.svg"
          alt="Background pattern"
        />

        {/* system status bar */}
        <img
          className="system-status-bar absolute top-0 left-0 w-full"
          src="https://c.animaapp.com/b3GmPxRF/img/-system-status-bar.svg"
          alt="Status bar"
        />

        {/* title group */}
        <div className="frame absolute left-1/2 -translate-x-1/2" style={{ top: '120px', width: '100%' }}>
          <div className="text-center px-4">
            <img
              className="group mx-auto mb-4 max-w-[280px] w-full"
              src="https://c.animaapp.com/b3GmPxRF/img/group.png"
              alt="Travel Shot Logo"
            />
            <div className="text-wrapper text-white text-2xl">Travel Shot</div>
            <div className="div text-[#317cc4] text-lg">Travel, lighter and safer</div>
          </div>
        </div>

        {/* union overlay (e.g. phone mockup overlay) */}
        <img
          className="union absolute left-1/2 -translate-x-1/2"
          style={{ top: '230px', maxWidth: 320, width: '100%' }}
          src="https://c.animaapp.com/b3GmPxRF/img/union.svg"
          alt="Overlay"
        />

        {/* action area (buttons) */}
        <div className="frame-2 absolute left-0 right-0 px-4" style={{ bottom: '140px' }}>
          <div className="frame-wrapper max-w-[320px] mx-auto">
            <div className="frame-3">
              <div className="frame-4">
                <div className="text-wrapper-2 text-white text-base">K-ID가 이미 있어요!</div>
                <p className="p text-sm text-[#9fb6da]">I already have a K-ID</p>
              </div>
            </div>

            <div className="frame-5 mt-4">
              <div className="div-wrapper">
                <div className="frame-6">
                  <div className="text-wrapper-3">
                    <button
                      onClick={() => navigate('/login')}
                      className="w-full py-3 rounded-md bg-transparent border border-white text-white text-base"
                    >
                      K-ID가 이미 있어요!
                    </button>
                  </div>
                  <div className="text-wrapper-4 mt-3">
                    <button
                      onClick={() => navigate('/main')}
                      className="w-full py-3 rounded-md bg-white text-black text-base"
                    >
                      시작하기 / START
                    </button>
                  </div>
                </div>
              </div>
              <div className="system-home mt-4 flex justify-center">
                <div className="home w-[134px] h-1 bg-[#313b58] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* language selector area (bottom) */}
        <div className="frame-7 absolute left-0 right-0 px-4" style={{ bottom: '20px' }}>
          <div className="text-wrapper-5 text-center text-sm text-[#9fb6da]">언어 변경</div>
          <div className="frame-8 flex justify-center gap-2 mt-2">
            <div className="frame-9 px-3 py-1 bg-transparent border border-white rounded">한글</div>
            <div className="frame-10 px-3 py-1 bg-transparent border border-white rounded">日本語</div>
            <div className="frame-10 px-3 py-1 bg-transparent border border-white rounded">English</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

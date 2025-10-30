import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/issuance');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F1F3F5] px-5">
      <div className="flex flex-col items-center gap-12">
        <div className="relative w-[187px] h-[149px]">
          <div className="absolute inset-0 -m-1.5 bg-[#E1E3E6] rounded"></div>
          
          <div className="relative w-full h-full bg-[#EDF3F6] overflow-hidden">
            <div className="absolute top-0 left-0">
              <div className="w-14 h-14 rounded bg-white"></div>
            </div>
            
            <div className="absolute top-1 left-[68px]">
              <div className="w-[81px] h-[19px] rounded bg-white"></div>
            </div>
            
            <div className="absolute top-[34px] left-[68px]">
              <div className="w-[119px] h-[19px] rounded bg-white"></div>
            </div>
            
            <div className="absolute top-[69px] left-0">
              <div className="w-[185px] h-[19px] rounded bg-white"></div>
            </div>
            
            <div className="absolute top-[99px] left-0">
              <div className="w-[127px] h-[19px] rounded bg-white"></div>
            </div>
            
            <div className="absolute top-[130px] left-0">
              <div className="w-[38px] h-[19px] rounded bg-white"></div>
            </div>

            <div 
              className="absolute -left-[116px] -top-[15px] w-[100px] h-[168px] animate-shimmer"
              style={{
                background: 'linear-gradient(89deg, #E1E3E6 0.8%, #F1F3F5 50.09%, #E1E3E6 96.31%)'
              }}
            ></div>
          </div>
        </div>

        <div className="text-center">
          <p 
            className="text-xl leading-[150%]"
            style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
          >
            <span className="text-[#2063D2] font-bold">K-ID를 발행중에 있습니다</span>
            <br />
            <span className="text-[#191F28] font-normal">잠시만 기다려주세요!</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(303px);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;

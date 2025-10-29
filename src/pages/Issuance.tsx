import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Issuance: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-[#F1F3F5]">
      <div className="flex flex-col h-screen">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-16 left-3.5 z-10 hover:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4824 3.03516L7.51758 12L16.4824 20.9648" stroke="#6B7583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="px-5 pt-28 pb-4">
          <h1 
            className="text-xl font-semibold text-[#191F28] leading-[120%]"
            style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
          >
            K-ID 발급이 완료 되었습니다!
          </h1>
        </div>

        <div className="flex-1 flex items-start justify-center px-5 pt-12">
          <div 
            className="relative w-[300px] h-[468px] rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '25/39',
              boxShadow: '0 0 40px 0 rgba(31, 33, 34, 0.20)'
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #001C4B 0%, #003284 58.77%, #2063D2 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2008f63caec7cc06e8801efb10291eef9f1c1f3c?width=2482"
                  alt=""
                  className="absolute opacity-80"
                  style={{
                    width: '1241px',
                    height: '1055px',
                    transform: 'rotate(-127.662deg)',
                    left: '-543px',
                    top: '-270px'
                  }}
                />
                
                <svg 
                  className="absolute"
                  style={{ left: '-6px', top: '197px' }}
                  width="300" 
                  height="87" 
                  viewBox="0 0 300 87" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_n_444_1807)">
                    <path d="M103.164 86.3516H68.3281L48.3799 43.1758H83.2148L103.164 86.3516ZM203.255 86.3516H184.258V0H203.255V86.3516ZM256.048 0C262.791 0 268.96 1.11064 274.552 3.33105C280.226 5.46927 285.079 8.47071 289.108 12.3359C293.22 16.2012 296.387 20.766 298.607 26.0293C300.828 31.2102 301.937 36.8433 301.938 42.9287V43.1758C301.938 49.2614 300.828 54.9359 298.607 60.1992C296.387 65.4626 293.22 70.0273 289.108 73.8926C285.079 77.7577 280.226 80.8001 274.552 83.0205C268.96 85.2409 262.791 86.3516 256.048 86.3516H222.371V0H256.048ZM28.4316 85.9238H-6.4043L33.4941 0H68.3291L28.4316 85.9238ZM241.368 69.2051H256.048C259.913 69.2051 263.45 68.5881 266.657 67.3545C269.865 66.1209 272.578 64.3525 274.799 62.0498C277.102 59.7471 278.87 57.0333 280.104 53.9082C281.419 50.7832 282.077 47.288 282.077 43.4229V43.1758C282.077 39.3929 281.419 35.8977 280.104 32.6904C278.87 29.4831 277.102 26.7275 274.799 24.4248C272.578 22.1222 269.864 20.3547 266.657 19.1211C263.45 17.8053 259.913 17.1465 256.048 17.1465H241.368V69.2051ZM169.308 57.1162H131.312V39.1055H169.308V57.1162ZM118.053 43.1758H83.2168L103.166 0H138.001L118.053 43.1758Z" fill="url(#paint0_linear_444_1807)" fillOpacity="0.6"/>
                  </g>
                  <defs>
                    <filter id="filter0_n_444_1807" x="-6.4043" y="0" width="308.342" height="86.3516" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feTurbulence type="fractalNoise" baseFrequency="0.85416668653488159 0.85416668653488159" stitchTiles="stitch" numOctaves="3" result="noise" seed="3614" />
                      <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                      <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                        <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                      </feComponentTransfer>
                      <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                      <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                      <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                      <feMerge result="effect1_noise_444_1807">
                        <feMergeNode in="shape" />
                        <feMergeNode in="color1" />
                      </feMerge>
                    </filter>
                    <linearGradient id="paint0_linear_444_1807" x1="216.98" y1="-10.28" x2="216.98" y2="113.079" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2063D2"/>
                      <stop offset="1" stopColor="#023589"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div 
                className="absolute flex items-end gap-1.5"
                style={{
                  left: '20px',
                  top: '94px',
                  width: '60px',
                  height: '215px',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'left top'
                }}
              >
                <p 
                  className="text-sm text-[#D1E2FF] leading-[150%] whitespace-nowrap"
                  style={{ 
                    fontFamily: 'Gotham-Book, sans-serif',
                    transform: 'rotate(-90deg)'
                  }}
                >
                  ZZ1000001
                </p>
                <p 
                  className="text-[26px] font-bold text-[#D1E2FF] leading-[150%] whitespace-nowrap"
                  style={{ 
                    fontFamily: 'Gotham-Medium, sans-serif',
                    transform: 'rotate(-90deg)'
                  }}
                >
                  GAIMU SAKURA
                </p>
              </div>

              <div 
                className="absolute flex items-end gap-1.5"
                style={{
                  left: '20px',
                  top: '388px',
                  width: '50px',
                  height: '124px',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'left top'
                }}
              >
                <p 
                  className="text-sm text-[#D1E2FF] leading-[150%] whitespace-nowrap"
                  style={{ 
                    fontFamily: 'Gotham-Book, sans-serif',
                    transform: 'rotate(-90deg)'
                  }}
                >
                  Japan
                </p>
                <p 
                  className="text-base text-[#D1E2FF] leading-[150%] whitespace-nowrap"
                  style={{ 
                    fontFamily: 'Gotham-Book, sans-serif',
                    transform: 'rotate(-90deg)'
                  }}
                >
                  F / 20.02.2000
                </p>
              </div>

              <div 
                className="absolute text-sm text-[#D1E2FF] text-right leading-[150%]"
                style={{
                  fontFamily: 'Gotham-Book, sans-serif',
                  left: '191px',
                  top: '419px',
                  width: '89px'
                }}
              >
                ~ 24.03.2035
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="px-5 py-4">
            <div className="flex items-start gap-1.5">
              <button
                onClick={() => navigate('/main')}
                className="flex-1 h-[54px] bg-white border border-[rgba(17,17,17,0.3)] rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <span 
                  className="text-[#191F28] text-base font-semibold leading-[150%]"
                  style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
                >
                  서비스 보러가기
                </span>
              </button>
              <button
                onClick={() => navigate('/main')}
                className="flex-1 h-[54px] bg-[#111] rounded flex items-center justify-center hover:bg-black transition-colors"
              >
                <span 
                  className="text-white text-base font-semibold leading-[150%]"
                  style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
                >
                  출입국신고서 작성
                </span>
              </button>
            </div>
          </div>
          <div className="h-[21px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Issuance;

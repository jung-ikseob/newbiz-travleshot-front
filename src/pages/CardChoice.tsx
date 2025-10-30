import { FC, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';

const Card1Japanese: FC = () => (
  <div 
    className="relative w-[260px] h-[406px] rounded-[13.87px] overflow-hidden flex-shrink-0"
    style={{
      aspectRatio: '260/405.6',
      background: '#152837',
      boxShadow: '0 0 34.667px 0 rgba(31, 33, 34, 0.20)'
    }}
  >
    <div className="absolute inset-0">
      <svg className="absolute -left-14 top-[299px] w-[143px] h-[377px]" viewBox="0 0 260 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="132.948" cy="50.0803" r="40.7532" fill="#ECE153" filter="url(#glow)"/>
        <path d="M150.864 63.5034C138.649 69.8717 110.231 76.1074 97.5498 78.4293V117.734L321.571 119.724V71.9613C292.285 65.4933 284.351 47.0044 269.007 44.0998C258.494 42.1097 250.778 48.7091 237.969 47.8313C230.711 47.3337 219.697 37.1345 203.678 37.1345C192.915 36.3882 166.133 55.543 150.864 63.5034Z" fill="#6E5541" stroke="#F6DD79" strokeWidth="0.867"/>
        <path d="M150.864 82.4282C138.649 88.7965 110.231 95.0322 97.5498 97.3541V136.659L321.571 138.649V90.8861C292.285 84.4181 284.351 65.9292 269.007 63.0246C258.494 61.0345 250.778 67.6339 237.969 66.7561C230.711 66.2585 219.697 56.0593 203.678 56.0593C192.915 55.313 166.133 74.4678 150.864 82.4282Z" fill="#6E5541" stroke="#F6DD79" strokeWidth="0.867"/>
        <path d="M150.864 96.1127C138.649 102.481 110.231 108.717 97.5498 111.039V150.343L321.571 152.333V104.571C292.285 98.1027 284.351 79.6138 269.007 76.7092C258.494 74.7191 250.778 81.3185 237.969 80.4406C230.711 79.9431 219.697 69.7439 203.678 69.7439C192.915 68.9976 166.133 88.1524 150.864 96.1127Z" fill="#6E5541" stroke="#F6DD79" strokeWidth="0.867"/>
        <path d="M-21.9338 84.7013C-34.5087 87.1399 -49.6647 92.0677 -55.6709 94.2268V115.183H280.55C264.065 110.991 239.145 94.2268 226.877 89.6544C214.609 85.0821 199.657 94.2268 161.32 94.2268C122.982 94.2268 94.6125 68.3174 87.3284 64.8884C80.0443 61.4593 67.7763 68.6985 61.2589 68.3174C54.7415 67.9364 43.6236 62.9832 37.873 59.9351C32.1224 56.8869 22.9215 61.4591 16.0208 64.8883C9.11981 68.3175 -6.21522 81.6531 -21.9338 84.7013Z" fill="#314A3F" stroke="#F6DD79" strokeWidth="0.867"/>
        <path d="M-21.9338 97.9396C-34.5087 100.378 -49.6647 105.306 -55.6709 107.465V128.421H280.55C264.065 124.23 239.145 107.465 226.877 102.893C214.609 98.3204 199.657 107.465 161.32 107.465C122.982 107.465 94.6125 81.5557 87.3284 78.1266C80.0443 74.6976 67.7763 81.9367 61.2589 81.5557C54.7415 81.1747 43.6236 76.2215 37.873 73.1733C32.1224 70.1252 22.9215 74.6974 16.0208 78.1265C9.11981 81.5558 -6.21522 94.8914 -21.9338 97.9396Z" fill="#314A3F" stroke="#F6DD79" strokeWidth="0.867"/>
        <path d="M-21.9338 116.187C-34.5087 118.625 -49.6647 123.553 -55.6709 125.712V146.668H280.55C264.065 142.477 239.145 125.712 226.877 121.14C214.609 116.567 199.657 125.712 161.32 125.712C122.982 125.712 94.6125 99.8028 87.3284 96.3737C80.0443 92.9446 67.7763 100.184 61.2589 99.8028C54.7415 99.4218 43.6236 94.4686 37.873 91.4204C32.1224 88.3723 22.9215 92.9445 16.0208 96.3736C9.11981 99.8029 -6.21522 113.138 -21.9338 116.187Z" fill="#314A3F" stroke="#F6DD79" strokeWidth="0.867"/>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4.66368"/>
          </filter>
        </defs>
      </svg>
      
      <div className="absolute left-[25px] top-[304px] w-[58px] h-[54px]">
        <div className="absolute left-[23px] top-[1px] w-[5px] h-[16px] rounded-full bg-[#D9D9D9]" style={{ transform: 'rotate(-49.847deg)' }}></div>
        <div className="absolute left-[28px] top-[-1px] w-[5px] h-[16px] rounded-full bg-[#D9D9D9]" style={{ transform: 'rotate(-49.847deg)' }}></div>
      </div>
      
      <div className="absolute left-[123px] top-[105px] w-[30px] h-[30px]">
        <svg viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="7.5" r="7.5" fill="#F6DD79"/>
          <circle cx="7.5" cy="22.5" r="7.5" fill="#F6DD79"/>
          <circle cx="22.5" cy="22.5" r="7.5" fill="#F6DD79"/>
          <path d="M15 0 L30 15 L15 30 L0 15 Z" fill="#152837"/>
        </svg>
      </div>
      
      <div className="absolute -left-[81px] top-[149px] w-[140px] h-[348px] rotate-90">
        <div className="absolute left-[265px] top-[111px] w-[83px] h-[29px]">
          <div className="absolute left-[27px] top-0 w-[55px] h-[11px] rounded-full bg-[#D9D9D9]"></div>
          <div className="absolute left-0 top-[18px] w-[78px] h-[11px] rounded-full bg-[#D9D9D9]"></div>
        </div>
        <div className="absolute left-0 top-0 w-[176px] h-[48px]">
          <div className="absolute left-[89px] top-0 w-[67px] h-[11px] rounded-full bg-[#D9D9D9]"></div>
          <div className="absolute left-[30px] top-[18px] w-[126px] h-[11px] rounded-full bg-[#D9D9D9]"></div>
          <div className="absolute left-[57px] top-[37px] w-[118px] h-[11px] rounded-full bg-[#D9D9D9]"></div>
        </div>
      </div>

      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/cbb99835b688422cb68886cb23f0fea20e6489dc" 
        alt=""
        className="absolute -left-[95px] -top-[38px] w-[482px] h-[450px] rotate-90 opacity-20 mix-blend-soft-light"
      />

      <div className="absolute left-[17px] top-[17px] w-[192px] h-[256px]">
        <p className="absolute left-[33px] top-[44px] text-[#F6DD79] text-center text-[22.5px] leading-[150%] tracking-[0.45px]" style={{ fontFamily: 'Bodoni 72, serif' }}>
          GAIMU SAKURA
        </p>
        
        <div className="absolute left-[69px] top-[190px] flex flex-col items-center gap-[6.93px]">
          <p className="text-[#F6DD79] text-center text-[12.13px] leading-[150%]" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            Japan
          </p>
          <div className="flex flex-col items-center gap-[1.73px]">
            <p className="text-[#F6DD79] text-center text-[13.87px] leading-[150%]" style={{ fontFamily: 'Helvetica, sans-serif' }}>
              F / 20.02.2000
            </p>
            <p className="text-[#F6DD79]/60 text-center text-[12.13px] leading-[150%]" style={{ fontFamily: 'Helvetica, sans-serif' }}>
              ~ 24.03.2035
            </p>
          </div>
        </div>
        
        <p className="absolute left-0 top-0 text-[#F6DD79]/60 text-[12.13px] leading-[18.66px]" style={{ fontFamily: 'Helvetica, sans-serif' }}>
          ZZ1000001
        </p>
      </div>
    </div>
  </div>
);

const Card2Blue: FC = () => (
  <div 
    className="relative w-[260px] h-[406px] rounded-[13.87px] overflow-hidden flex-shrink-0"
    style={{
      aspectRatio: '260/405.6',
      boxShadow: '0 0 34.667px 0 rgba(31, 33, 34, 0.20)'
    }}
  >
    <div 
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(180deg, #001C4B 0%, #003284 58.77%, #2063D2 100%)'
      }}
    >
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/267dea9f23dd1b817ed183c2e7654afe97c4552f"
        alt=""
        className="absolute opacity-80"
        style={{
          width: '1076px',
          height: '914px',
          transform: 'rotate(-127.662deg)',
          left: '-471px',
          top: '-234px'
        }}
      />
      
      <svg 
        className="absolute -left-[6px] top-[171px]" 
        width="267" 
        height="75" 
        viewBox="0 0 260 75" 
        fill="none"
      >
        <path 
          d="M89.4092 74.8379H59.2178L41.9287 37.4189H72.1201L89.4092 74.8379ZM176.154 74.8379H159.689V0H176.154V74.8379ZM221.908 0C227.752 0 233.098 0.962427 237.944 2.88672C242.862 4.73985 247.068 7.34152 250.561 10.6914C254.124 14.0412 256.868 17.9972 258.792 22.5586C260.716 27.0488 261.679 31.9309 261.679 37.2051V37.4189C261.679 42.6932 260.716 47.6113 258.792 52.1729C256.868 56.7343 254.124 60.6902 250.561 64.04C247.068 67.3899 242.862 70.0268 237.944 71.9512C233.098 73.8755 227.753 74.8379 221.908 74.8379H192.721V0H221.908ZM24.6406 74.4678H-5.55078L29.0283 0H59.2188L24.6406 74.4678ZM209.186 59.9775H221.908C225.258 59.9775 228.323 59.4431 231.103 58.374C233.882 57.3049 236.234 55.772 238.158 53.7764C240.154 51.7807 241.687 49.4291 242.756 46.7207C243.896 44.0123 244.466 40.9827 244.466 37.6328V37.4189C244.466 34.1406 243.896 31.1116 242.756 28.332C241.687 25.5523 240.154 23.1646 238.158 21.1689C236.234 19.1733 233.882 17.6404 231.103 16.5713C228.323 15.4309 225.258 14.8614 221.908 14.8613H209.186V59.9775ZM146.732 49.501H113.804V33.8916H146.732V49.501ZM102.312 37.4189H72.1211L89.4102 0H119.602L102.312 37.4189Z" 
          fill="url(#paint0_linear)" 
          fillOpacity="0.6"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="188.049" y1="-8.90929" x2="188.049" y2="98.002" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2063D2"/>
            <stop offset="1" stopColor="#023589"/>
          </linearGradient>
        </defs>
      </svg>

      <p 
        className="absolute left-[166px] top-[363px] w-[77px] text-[#D1E2FF] text-right text-[12.13px] leading-[150%]"
        style={{ fontFamily: 'Gotham, sans-serif' }}
      >
        ~ 24.03.2035
      </p>

      <div 
        className="absolute left-[17px] top-[336px] flex items-end gap-[4.66px] rotate-90"
        style={{ width: '44px', height: '108px' }}
      >
        <p 
          className="-rotate-90 text-[#D1E2FF] text-[12.13px] leading-[150%] whitespace-nowrap"
          style={{ fontFamily: 'Gotham, sans-serif' }}
        >
          Japan
        </p>
        <p 
          className="-rotate-90 text-[#D1E2FF] text-[13.87px] leading-[150%] whitespace-nowrap"
          style={{ fontFamily: 'Gotham, sans-serif' }}
        >
          F / 20.02.2000
        </p>
      </div>

      <div 
        className="absolute left-[17px] top-[82px] flex items-end rotate-90"
        style={{ width: '52px', height: '187px' }}
      >
        <p 
          className="-rotate-90 text-[#D1E2FF] text-[12.13px] leading-[150%] whitespace-nowrap"
          style={{ fontFamily: 'Gotham, sans-serif' }}
        >
          ZZ1000001
        </p>
        <p 
          className="-rotate-90 text-[#D1E2FF] font-bold text-[22.53px] leading-[150%] whitespace-nowrap"
          style={{ fontFamily: 'Gotham, sans-serif' }}
        >
          GAIMU SAKURA
        </p>
      </div>
    </div>
  </div>
);

const Card3Geometric: FC = () => (
  <div 
    className="relative w-[260px] h-[406px] rounded-[13.87px] overflow-hidden flex-shrink-0 bg-[#F2EDE7]"
    style={{
      aspectRatio: '260/405.6',
      boxShadow: '0 0 34.667px 0 rgba(31, 33, 34, 0.20)'
    }}
  >
    <img 
      src="https://api.builder.io/api/v1/image/assets/TEMP/7c0f8798cf5a49bd67489969241e5d3e2041fd6b"
      alt=""
      className="absolute -left-[80px] -top-[1px] w-[421px] h-[421px]"
      style={{ aspectRatio: '420.7/420.7' }}
    />
    
    <div className="absolute left-[46px] top-[119px] w-[168px] h-[168px]">
      <div className="absolute left-[112px] top-[112px] w-[56px] h-[56px] rounded-t-[46.93px] border-[0.94px] border-[#886478] bg-[#BF4F49]"></div>
      <div className="absolute left-[112px] top-[56px] w-[56px] h-[56px] rounded-tl-[46.93px] border-[0.94px] border-[#886478] bg-[#466987]"></div>
      <div className="absolute left-[112px] top-0 w-[56px] h-[56px] -rotate-90 border-[0.94px] border-[#886478] bg-[#CE8469]" style={{ borderRadius: '46.93px 0' }}></div>
      <div className="absolute left-[56px] top-[112px] w-[56px] h-[56px] rounded-full border-[0.94px] border-[#886478] bg-[#D79683]"></div>
      <div className="absolute left-[56px] top-[56px] w-[56px] h-[56px] border-t-[0.94px] border-b-[0.94px] border-[#886478] bg-[#463349]"></div>
      <div className="absolute left-[56px] top-0 w-[56px] h-[56px] rounded-t-[46.93px] border-[0.94px] border-[#886478] bg-[#DCAC60]"></div>
      <div className="absolute left-0 top-[112px] w-[56px] h-[56px] rounded-tr-[46.93px] border-t-[0.94px] border-r-[0.94px] border-l-[0.94px] border-[#886478] bg-[#947587]"></div>
      <div className="absolute left-0 top-[56px] w-[56px] h-[56px] rounded-tr-[46.93px] border-t-[0.94px] border-r-[0.94px] border-b-[0.94px] border-[#886478] bg-[#463349]"></div>
      <div className="absolute left-0 top-0 w-[56px] h-[56px] rounded-full border-[0.94px] border-[#886478] bg-[#778FA9]"></div>
    </div>

    <div 
      className="absolute left-[85px] top-[313px] flex items-center gap-[5.2px] rotate-90"
      style={{ width: '64px', height: '90px' }}
    >
      <p 
        className="-rotate-90 text-[#3A323D] text-center text-[12.13px] leading-[150%] whitespace-nowrap"
        style={{ fontFamily: 'Helvetica, sans-serif' }}
      >
        Japan
      </p>
      <div className="flex items-center gap-[1.73px]">
        <p 
          className="-rotate-90 text-[#3A323D] text-center font-bold text-[13.87px] leading-[150%] whitespace-nowrap"
          style={{ fontFamily: 'Helvetica, sans-serif' }}
        >
          F / 20.02.2000
        </p>
        <p 
          className="-rotate-90 text-[#3A323D]/60 text-center text-[12.13px] leading-[150%] whitespace-nowrap"
          style={{ fontFamily: 'Helvetica, sans-serif' }}
        >
          ~ 24.03.2035
        </p>
      </div>
    </div>

    <div 
      className="absolute left-[47px] top-[39px] flex items-center gap-[3.47px] rotate-90"
      style={{ width: '53px', height: '165px' }}
    >
      <p 
        className="-rotate-90 text-[#3A323D]/60 text-center text-[12.13px] leading-[18.77px] whitespace-nowrap"
        style={{ fontFamily: 'Helvetica, sans-serif' }}
      >
        ZZ1000001
      </p>
      <p 
        className="-rotate-90 text-[#3A323D] text-center font-bold text-[20.8px] leading-[150%] whitespace-nowrap"
        style={{ fontFamily: 'Helvetica, sans-serif' }}
      >
        GAIMU SAKURA
      </p>
    </div>
  </div>
);

const CardChoice: FC = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useState(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  });

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
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            원하는 카드 디자인을 선택해주세요
          </h1>
        </div>

        <div className="flex-1 flex items-start justify-center pt-12 overflow-hidden">
          <div className="w-full max-w-[375px]" ref={emblaRef}>
            <div className="flex gap-0" style={{ marginLeft: '-50px', marginRight: '-50px' }}>
              <div className="flex-[0_0_100%] flex justify-center px-[50px]">
                <Card1Japanese />
              </div>
              <div className="flex-[0_0_100%] flex justify-center px-[50px]">
                <Card2Blue />
              </div>
              <div className="flex-[0_0_100%] flex justify-center px-[50px]">
                <Card3Geometric />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 py-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-[9px] h-[9px] rounded-full transition-colors"
              style={{
                backgroundColor: selectedIndex === index ? '#2063D2' : '#D9D9D9'
              }}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <div className="bg-white">
          <div className="px-5 py-4">
            <button
              onClick={() => navigate('/loading')}
              className="w-full h-[54px] bg-[#111] rounded flex items-center justify-center hover:bg-black transition-colors"
            >
              <span 
                className="text-white text-base font-semibold leading-[150%]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                다음
              </span>
            </button>
          </div>
          <div className="h-[21px]"></div>
        </div>
      </div>
    </div>
  );
};

export default CardChoice;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-service-bg font-pretendard">
      <div className="max-w-md mx-auto bg-service-bg relative pb-20">
        <header className="px-5 py-4 flex justify-between items-center bg-service-bg sticky top-0 z-10">
          <h1 className="text-[#191F28] text-[26px] font-semibold">Service</h1>
          <div className="flex items-center gap-1.5 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-[#191F28]">1 KRW</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7992 16.8022V7.1974C22.7992 5.8732 21.7258 4.7998 20.4022 4.7998H3.59622C2.27202 4.7998 1.19922 5.8732 1.19922 7.1974V16.8028C1.19922 18.127 2.27262 19.2004 3.59622 19.2004H20.4016C21.7258 19.2004 22.7986 18.127 22.7986 16.8028L22.7992 16.8022ZM15.064 13.9966C13.936 15.6508 11.6482 16.0978 9.95562 14.995C8.26302 13.8922 7.80582 11.6572 8.93442 10.003C8.92062 10.0222 8.90802 10.042 8.89542 10.0612C8.90802 10.0414 8.92122 10.0222 8.93442 10.003C10.0624 8.3488 12.3502 7.9018 14.0428 9.004C15.7354 10.1068 16.1926 12.3418 15.064 13.9966Z" fill="#E3E7EA"/>
                <path d="M16.0868 7.17383L17.0234 8.54663L16.5128 8.87963L15.5762 7.50623L16.0868 7.17383Z" fill="#191F28"/>
                <path d="M17.1922 8.79688L18.1288 10.1697L17.6182 10.5027L16.6816 9.12987L17.1922 8.79688Z" fill="#191F28"/>
                <path d="M16.8524 6.6748L18.8954 9.6706L18.3848 10.003L16.3418 7.0078L16.8524 6.6748Z" fill="#191F28"/>
                <path d="M17.62 6.17578L18.5566 7.54858L18.046 7.88098L17.1094 6.50878L17.62 6.17578Z" fill="#191F28"/>
                <path d="M18.7254 7.79785L19.6614 9.17065L19.1508 9.50365L18.2148 8.13085L18.7254 7.79785Z" fill="#191F28"/>
                <path d="M6.38169 13.498L8.42469 16.4938L7.91409 16.8262L5.87109 13.831L6.38169 13.498Z" fill="#191F28"/>
                <path d="M5.61412 13.9971L6.55012 15.3705L6.03952 15.7029L5.10352 14.3301L5.61412 13.9971Z" fill="#191F28"/>
                <path d="M6.72154 15.6191L7.65814 16.9919L7.14754 17.3249L6.21094 15.9521L6.72154 15.6191Z" fill="#191F28"/>
                <path d="M4.84849 14.4961L6.89149 17.4919L6.38089 17.8249L4.33789 14.8291L4.84849 14.4961Z" fill="#191F28"/>
                <path d="M5.87109 10.169L7.91409 7.17383L8.42469 7.50683L6.38169 10.502L5.87109 10.169Z" fill="#191F28"/>
                <path d="M5.10352 9.6706L7.14652 6.6748L7.65712 7.0078L5.61412 10.003L5.10352 9.6706Z" fill="#191F28"/>
                <path d="M4.33789 9.17098L6.38089 6.17578L6.89149 6.50878L4.84849 9.50398L4.33789 9.17098Z" fill="#191F28"/>
                <path d="M15.5762 16.4929L16.5128 15.1201L17.0234 15.4525L16.0868 16.8253L15.5762 16.4929Z" fill="#191F28"/>
                <path d="M16.6816 14.8714L17.6182 13.498L18.1288 13.831L17.1922 15.2038L16.6816 14.8714Z" fill="#191F28"/>
                <path d="M16.3418 16.9919L17.2784 15.6191L17.789 15.9521L16.8524 17.3249L16.3418 16.9919Z" fill="#191F28"/>
                <path d="M17.4492 15.3705L18.3858 13.9971L18.8964 14.3301L17.9604 15.7029L17.4492 15.3705Z" fill="#191F28"/>
                <path d="M17.1094 17.4919L18.046 16.1191L18.5566 16.4515L17.62 17.8249L17.1094 17.4919Z" fill="#191F28"/>
                <path d="M18.2148 15.8689L19.1508 14.4961L19.6614 14.8291L18.7254 16.2019L18.2148 15.8689Z" fill="#191F28"/>
                <path d="M14.0431 9.00435C12.3505 7.90155 10.0627 8.34855 8.93466 10.0033C8.37006 10.8301 8.59926 11.9479 9.44526 12.4993C10.2919 13.0507 11.4349 12.8269 11.9995 12.0001C12.5635 11.1733 13.7071 10.9495 14.5531 11.5009C15.3997 12.0523 15.6283 13.1695 15.0637 13.9969C16.1923 12.3421 15.7357 10.1077 14.0431 9.00435Z" fill="#C60038"/>
                <path d="M14.554 11.5005C13.7074 10.9491 12.5644 11.1723 12.0004 11.9997C11.4358 12.8265 10.2922 13.0503 9.44622 12.4989C8.59962 11.9475 8.37102 10.8297 8.93562 10.0029C7.80702 11.6571 8.26422 13.8921 9.95682 14.9949C11.6494 16.0977 13.9372 15.6507 15.0652 13.9965C15.6298 13.1691 15.4006 12.0519 14.554 11.5005Z" fill="#243679"/>
              </svg>
            </div>
            <span className="text-[#191F28]">=</span>
            <div className="flex items-center gap-1">
              <span className="text-[#191F28]">0.1061 JPY</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7992 16.8022V7.1974C22.7992 5.8732 21.7258 4.7998 20.4022 4.7998H3.59622C2.27202 4.7998 1.19922 5.8732 1.19922 7.1974V16.8028C1.19922 18.127 2.27262 19.2004 3.59622 19.2004H20.4016C21.7258 19.2004 22.7986 18.127 22.7986 16.8028L22.7992 16.8022Z" fill="#E3E7EA"/>
                <path d="M11.9993 7.67969C9.59874 7.67969 7.65234 9.61409 7.65234 11.9997C7.65234 14.3853 9.59814 16.3197 11.9993 16.3197C14.4005 16.3197 16.3457 14.3853 16.3457 11.9997C16.3457 9.61409 14.3999 7.67969 11.9993 7.67969Z" fill="#BD001A"/>
              </svg>
            </div>
          </div>
        </header>

        <main className="px-5 space-y-6">
          <div className="bg-service-weather rounded-[10px] p-5 flex items-center gap-12">
            <svg width="73" height="87" viewBox="0 0 73 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_444_10)">
                <path d="M57.4822 70.5192C57.4822 71.273 47.9494 71.8841 36.1901 71.8841C24.4308 71.8841 14.8979 71.273 14.8979 70.5192C14.8979 69.7654 24.4308 69.1543 36.1901 69.1543C47.9494 69.1543 57.4822 69.7654 57.4822 70.5192Z" fill="#BAC7CB"/>
              </g>
              <path d="M70.9494 15.8327C70.9494 24.5768 63.8609 31.6654 55.1168 31.6654C46.3727 31.6654 39.2842 24.5768 39.2842 15.8327C39.2842 7.08853 46.3727 0 55.1168 0C63.8609 0 70.9494 7.08853 70.9494 15.8327Z" fill="url(#paint0_linear_444_10)"/>
              <path d="M70.949 38.5633C70.949 45.0049 65.7175 50.227 59.2617 50.227H16.9708C8.38909 50.227 1.43115 43.2841 1.43115 34.7163C1.43115 26.1509 8.38909 19.2056 16.9708 19.2056C17.7405 19.2056 18.497 19.2646 19.2387 19.3719C22.7481 12.4159 29.9653 7.64258 38.3025 7.64258C48.3907 7.64258 56.842 14.6338 59.0623 24.0264C59.2838 24.9642 59.4438 25.9249 59.5357 26.9036V26.9061C65.8619 27.0502 70.949 32.2134 70.949 38.5633Z" fill="#BAC7CB" fillOpacity="0.4"/>
              <path d="M36.2562 53.3213C33.9326 54.6665 32.3682 57.1774 32.3682 60.0551C32.3682 60.1579 32.3696 60.2601 32.3738 60.3616C32.564 65.25 39.9483 65.25 40.1385 60.3616C40.1427 60.2601 40.1442 60.1579 40.1442 60.0551C40.1449 57.1774 38.5797 54.6665 36.2562 53.3213Z" fill="#2063D2"/>
              <path d="M21.3345 42.585C19.0109 43.9302 17.4458 46.441 17.4458 49.3187C17.4458 49.4216 17.4479 49.5238 17.4522 49.6259C17.6416 54.5136 25.0267 54.5136 25.2168 49.6259C25.2204 49.5238 25.2225 49.4216 25.2225 49.3187C25.2225 46.441 23.6581 43.9302 21.3345 42.585Z" fill="#2063D2"/>
              <path d="M53.2371 46.042C50.9135 47.3872 49.3491 49.8981 49.3491 52.7758C49.3491 52.8786 49.3512 52.9808 49.3548 53.083C49.5449 57.9707 56.9293 57.9707 57.1194 53.083C57.1237 52.9808 57.1251 52.8786 57.1251 52.7758C57.1258 49.8981 55.5614 47.3872 53.2371 46.042Z" fill="#2063D2"/>
              <defs>
                <filter id="filter0_f_444_10" x="-0.000207901" y="54.2561" width="72.3808" height="32.5258" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="7.44908" result="effect1_foregroundBlur_444_10"/>
                </filter>
                <linearGradient id="paint0_linear_444_10" x1="61.4946" y1="1.46583" x2="48.1555" y2="31.6619" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD88B"/>
                  <stop offset="1" stopColor="#FFA900"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/707306411bfae3af68177591087163c179823121?width=32" alt="Location" className="w-4 h-4" />
                <span className="text-[#191F28]/80 text-sm">South Korea</span>
              </div>
              <div className="text-[#191F28] text-[32px] font-semibold leading-none">24.0°</div>
              <a href="#" className="text-service-blue text-xs font-medium">See more</a>
            </div>
          </div>

          <div className="space-y-3.5">
            <div className="flex justify-between items-center">
              <h2 className="text-[#191F28] text-base font-medium">서비스</h2>
              <a href="#" className="text-service-blue text-xs font-medium">See more</a>
            </div>
            
            <div className="space-y-3.5">
              <div className="grid grid-cols-4 gap-6">
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/3033b9ee04f9e846ec3648efbc95692f245e2ffb?width=70"
                  label="지도"
                />
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/545235c7614023140ed9f038508e91247b35bc8a?width=72"
                  label="쇼핑"
                />
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/1c3957d753e57d32306540d4137da96165b018e2?width=70"
                  label="식당"
                />
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/df1ff687f79c50b5c5227c9e699266ddc506979d?width=70"
                  label="액티비티"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-6">
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/360848b2f13340fd3b38c505f813619e2bffa10e?width=70"
                  label="모빌리티"
                />
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/f72b0b9320b9e758c2ddd9376210a8c2337624e2?width=70"
                  label="선불카드"
                />
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/37856e1ed01b48885a0ffff096c617115175fddc?width=70"
                  label="카드"
                />
                <ServiceIcon 
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/6f8e8f5110d5e942b2b8cb3caa61cc4ccaf5303f?width=70"
                  label="번역"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3.5">
            <h2 className="text-[#191F28] text-base font-medium">간편한 결제를 위해 가입해보세요</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-[54px] bg-service-blue rounded text-white text-base font-medium hover:bg-blue-700 transition-colors"
            >
              서비스 가입
            </button>
          </div>

          <div className="space-y-3.5">
            <h2 className="text-[#191F28] text-base font-medium">K-ID로 간편��게 입력��보세요</h2>
            <div className="grid grid-cols-2 gap-4">
              <FormCard
                title="출입국 신고서 작성하기"
                subtitle="immigration form"
                bgColor="#FDEEEA"
                iconColor="#F66F47"
              />
              <FormCard
                title="모바일 세관신청서 작성하기"
                subtitle="mobile customs form"
                bgColor="#E4F3F4"
                iconColor="#4CA6A8"
                isMobile
              />
            </div>
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white rounded-t-[20px] border-t border-[#E5E8EB]">
          <div className="flex justify-center items-center gap-[76px] h-[60px]">
            <NavItem active label="Service" icon="home" onClick={() => navigate('/main')} />
            <NavItem label="K-ID" icon="card" onClick={() => navigate('/kid_info')} />
            <NavItem label="My" icon="person" onClick={() => navigate('/my')} />
          </div>
          <div className="h-[21px] bg-white"></div>
        </nav>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(25,31,40,0.5)]"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="w-full max-w-md flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full relative h-[307px]">
                <div className="absolute left-0 top-[35px] w-full h-[272px] bg-white rounded-t-[10px]" />

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f26121619c613b6b0d0c16a33f0ed0a2897b7a49?width=144"
                  alt="올리브영"
                  className="absolute left-5 top-0 w-[72px] h-[72px] rounded-full object-cover"
                />

                <div className="absolute left-5 top-[55px] w-[335px] h-[232px] flex flex-col items-end gap-[13px]">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-6 h-6 flex-shrink-0"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.0293 20.2295L4.0293 4.22949" stroke="#6B7583" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M4.0293 20.2227L20.0293 4.22266" stroke="#6B7583" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>

                  <div className="flex flex-col gap-5 self-stretch">
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex flex-col gap-1 self-stretch">
                        <h2 className="text-[#191F28] font-pretendard text-[20px] font-semibold leading-[150%]">
                          올리브영
                        </h2>
                        <p className="text-[rgba(107,117,131,0.6)] font-pretendard text-[14px] font-normal leading-[120%]">
                          Olive Young (K - Beauty)
                        </p>
                      </div>

                      <p className="text-[#191F28] font-pretendard text-[14px] font-normal leading-[150%] self-stretch">
                        올리브영 서비스에 대한 소개 안내 제공. 온라인 쇼핑을 통해
한국 현지 숙소로 당일 ���송 가능, 가입 후 특별한 가입 혜택
추가 제공 안내. 제휴사별 설명 노출
                      </p>
                    </div>

                    <svg width="335" height="1" viewBox="0 0 336 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="self-stretch">
                      <path d="M0.5 0.5H335.5" stroke="#6B7583" strokeOpacity="0.2" strokeLinecap="round"/>
                    </svg>

                    <div className="flex items-center gap-2.5">
                      <div className="w-[21px] h-[21px] rounded-full bg-[rgba(107,117,131,0.6)] flex items-center justify-center flex-shrink-0">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.949219 3.23335L4.49414 6.77881L10.0512 1.22168" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="text-[rgba(25,31,40,0.6)] font-pretendard text-[14px] font-normal">
                        (필수)개인정보 제공 동의
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white flex flex-col self-stretch">
                <div className="w-full px-5 py-4 flex flex-col gap-2.5 self-stretch">
                  <button
                    className="w-full h-[54px] px-2.5 py-3.5 bg-[#2063D2] rounded flex justify-center items-center hover:bg-blue-700 transition-colors self-stretch"
                  >
                    <span className="text-white text-center font-pretendard text-base font-semibold leading-[150%]">
                      서비스 가입하기
                    </span>
                  </button>
                </div>
                <div className="h-[21px] w-full self-stretch" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceIcon = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-[60px] h-[61px] rounded-xl bg-service-icon-bg flex items-center justify-center">
      <img src={icon} alt={label} className="w-[35px] h-[35px] rounded-xl" />
    </div>
    <span className="text-[#191F28] text-xs text-center leading-[18px]">{label}</span>
  </div>
);

const FormCard = ({ 
  title, 
  subtitle, 
  bgColor, 
  iconColor,
  isMobile = false 
}: { 
  title: string; 
  subtitle: string; 
  bgColor: string; 
  iconColor: string;
  isMobile?: boolean;
}) => (
  <div className="p-[22px_18px] bg-service-gray rounded-[10px]">
    <div className="flex flex-col gap-2.5">
      <div className="w-[35px] h-[35px] rounded-xl flex items-center justify-center" style={{ backgroundColor: bgColor }}>
        {isMobile ? (
          <div className="w-6 h-6 relative">
            <div 
              className="w-3 h-[18px] rounded-[2px] border-[1.5px] absolute left-1.5 top-[3px]" 
              style={{ borderColor: iconColor }}
            />
            <div 
              className="w-0.5 h-0.5 rounded-[2px] absolute left-[11px] top-4" 
              style={{ backgroundColor: iconColor }}
            />
          </div>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-[#191F28] text-sm font-semibold leading-[21px] whitespace-pre-line">{title}</h3>
        <p className="text-[#6B7583]/80 text-xs leading-[18px]">{subtitle}</p>
      </div>
    </div>
  </div>
);

const NavItem = ({
  label,
  icon,
  active = false,
  onClick
}: {
  label: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button onClick={onClick} className="flex flex-col items-center gap-0.5 hover:opacity-75 transition-opacity">
    {icon === 'home' && (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9951 1.85059C12.5326 1.85059 13.0549 2.03324 13.4746 2.36914L20.6729 8.12793C21.1986 8.54867 21.5194 9.17285 21.5576 9.8418L21.5615 9.97656V19.5996C21.5615 20.1487 21.3703 20.6784 21.0254 21.0996L20.8682 21.2734C20.4245 21.7171 19.8222 21.9678 19.1943 21.9678H14.3955C14.1307 21.9677 13.8774 21.8609 13.6914 21.6748C13.505 21.4881 13.4004 21.2343 13.4004 20.9707V13.7402H10.5918V20.9707C10.5918 21.2343 10.4874 21.488 10.3008 21.6748C10.1148 21.8609 9.86162 21.9678 9.59668 21.9678H4.79785C4.24854 21.9678 3.71892 21.7758 3.29785 21.4307L3.12402 21.2734C2.68032 20.8295 2.43164 20.2268 2.43164 19.5996V9.97559C2.43164 9.25783 2.75817 8.57702 3.31934 8.12793L10.5176 2.36914L10.5215 2.36523L10.5273 2.36035C10.9451 2.03008 11.4625 1.8507 11.9951 1.85059ZM11.9961 3.84082C11.933 3.84085 11.8703 3.85765 11.8145 3.88867L11.7617 3.92383L4.56348 9.68164C4.51935 9.71691 4.48338 9.76265 4.45898 9.81348C4.44692 9.83874 4.43784 9.8653 4.43164 9.89258L4.42188 9.97656V19.5996C4.42188 19.8069 4.59051 19.9756 4.79785 19.9756H8.60156V12.7441C8.60179 12.4808 8.70608 12.2277 8.89258 12.041L8.96582 11.9746C9.14291 11.8296 9.36579 11.7491 9.59668 11.749H14.3955C14.6596 11.749 14.9131 11.8546 15.0996 12.041L15.166 12.1143C15.2901 12.2659 15.3663 12.4509 15.3857 12.6455L15.3906 12.7441V19.9756H19.1943C19.2942 19.9756 19.3898 19.9362 19.46 19.8662L19.5068 19.8086C19.5477 19.7471 19.5703 19.6743 19.5703 19.5996V9.97559L19.5605 9.8916C19.5542 9.86407 19.5445 9.8369 19.5322 9.81152V9.81055C19.5073 9.75956 19.4721 9.71553 19.4297 9.68164L12.2305 3.92383C12.1632 3.87028 12.08 3.84082 11.9961 3.84082Z" fill={active ? "#191F28" : "#191F28"} fillOpacity={active ? "1" : "0.3"}/>
        {active && (
          <path d="M3.90625 8.8146L10.6953 3.30874L12.6724 2.98828L20.3155 9.66931V20.1986L14.7568 20.4658L14.2224 12.2348H9.25167L8.93098 20.1986H3.90625V8.8146Z" fill="#191F28"/>
        )}
      </svg>
    )}
    {icon === 'card' && (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="4" width="22" height="16" rx="2" stroke={active ? "#191F28" : "rgba(25, 31, 40, 0.30)"} strokeWidth="1.5" fill="none"/>
        <line x1="1" y1="9" x2="23" y2="9" stroke={active ? "#191F28" : "rgba(25, 31, 40, 0.30)"} strokeWidth="1.5"/>
        {active && (
          <>
            <rect x="1" y="4" width="22" height="16" rx="2" fill="#191F28"/>
            <rect x="3" y="11" width="18" height="7" fill="white"/>
          </>
        )}
      </svg>
    )}
    {icon === 'person' && (
      <svg width="24" height="24" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.2085 0C10.4714 5.12456e-05 11.7038 0.389054 12.7378 1.11426C13.7717 1.83952 14.5567 2.86623 14.9868 4.05371C15.4168 5.2411 15.4708 6.5319 15.1411 7.75098C14.8112 8.97018 14.1141 10.0584 13.144 10.8672C14.6569 11.5821 15.9475 12.6951 16.8765 14.0869C17.8052 15.4787 18.3376 17.0971 18.4175 18.7686C18.4281 18.9216 18.4077 19.0755 18.3579 19.2207C18.3083 19.3658 18.2305 19.4997 18.1284 19.6143C18.0265 19.7288 17.9025 19.8216 17.7642 19.8877C17.6256 19.9538 17.4751 19.992 17.3218 19.999C17.1684 20.0062 17.0147 19.9825 16.8706 19.9297C16.7269 19.8769 16.5951 19.7958 16.4829 19.6914C16.3706 19.5869 16.2803 19.4603 16.2173 19.3203C16.1543 19.1804 16.1196 19.0294 16.1157 18.876C16.0319 17.1005 15.268 15.425 13.9819 14.1982C12.696 12.9715 10.9867 12.2872 9.20947 12.2871C7.43208 12.2871 5.72213 12.9714 4.43604 14.1982C3.14997 15.425 2.38607 17.1005 2.30225 18.876C2.28156 19.1764 2.14413 19.4569 1.91943 19.6572C1.6946 19.8575 1.39988 19.9623 1.09912 19.9482C0.798201 19.9343 0.514351 19.8025 0.309082 19.582C0.103865 19.3617 -0.00691667 19.0697 0.000488281 18.7686C0.0801835 17.0972 0.612864 15.4788 1.5415 14.0869C2.47009 12.6953 3.75959 11.5823 5.27197 10.8672C4.30208 10.0584 3.60463 8.97007 3.2749 7.75098C2.94529 6.53199 2.99928 5.24101 3.4292 4.05371C3.85928 2.86618 4.6452 1.83952 5.6792 1.11426C6.71315 0.389097 7.9456 0 9.2085 0ZM9.20947 2.30371C8.19071 2.30371 7.21307 2.70833 6.49268 3.42871C5.77226 4.14914 5.36768 5.12667 5.36768 6.14551C5.36773 7.16418 5.77244 8.14097 6.49268 8.86133C7.21308 9.58177 8.19067 9.9873 9.20947 9.9873C10.2281 9.98718 11.205 9.58166 11.9253 8.86133C12.6455 8.14096 13.0502 7.16419 13.0503 6.14551C13.0503 5.12667 12.6457 4.14914 11.9253 3.42871C11.205 2.70846 10.2281 2.30383 9.20947 2.30371Z" fill={active ? "#191F28" : "#191F28"} fillOpacity={active ? "1" : "0.3"}/>
      </svg>
    )}
    <span 
      className={`text-xs text-center leading-[14.4px] ${
        active ? "text-[#191F28] font-medium" : "text-[#191F28]/60"
      }`}
    >
      {label}
    </span>
  </button>
);

export default Index;

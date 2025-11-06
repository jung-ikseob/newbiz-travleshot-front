import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

// Card images
import card1 from '../assets/cards/card1.svg';
import card2 from '../assets/cards/card2.svg';
import card3 from '../assets/cards/card3.svg';

const Issuance: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const cardId = searchParams.get('cardId') || '1';
  const { t } = useTranslation();

  const cardImages: Record<string, string> = {
    '1': card1,
    '2': card2,
    '3': card3,
  };

  const selectedCardImage = cardImages[cardId] || card1;

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-white">
      <div className="relative w-full min-h-screen max-w-[375px] mx-auto overflow-hidden bg-[#F1F3F5]">
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
              {t.issuance.title}
            </h1>
          </div>

          <div className="flex-1 flex items-start justify-center px-5 pt-12">
            <img
              src={selectedCardImage}
              alt="Selected K-ID Card"
              className="w-[300px] h-[468px] object-contain select-none"
              style={{
                boxShadow: '0 0 40px 0 rgba(31, 33, 34, 0.20)',
                borderRadius: '16px'
              }}
            />
          </div>

          <div className="bg-white">
            <div className="px-5 py-4">
              <div className="flex items-start gap-1.5">
                <button
                  onClick={() => navigate(`/main?cardId=${cardId}`)}
                  className="flex-1 h-[54px] bg-white border border-[rgba(17,17,17,0.3)] rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="text-[#191F28] text-base font-semibold leading-[150%]"
                    style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
                  >
                    {t.issuance.goToService}
                  </span>
                </button>
                <button
                  onClick={() => window.location.href = 'https://www.e-arrivalcard.go.kr/portal/main/index.do'}
                  className="flex-1 h-[54px] bg-[#111] rounded flex items-center justify-center hover:bg-black transition-colors"
                >
                  <span
                    className="text-white text-base font-semibold leading-[150%]"
                    style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
                  >
                    {t.issuance.immigrationForm}
                  </span>
                </button>
              </div>
            </div>
            <div className="h-[21px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issuance;

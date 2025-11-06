import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

// Local image assets
import chevron from '../assets/info/chevron.svg';
import infoGraphic from '../assets/info/info.svg';

const Info: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNext = () => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(() => {
        navigate('/ocr');
      })
      .catch((err) => {
        console.error('Camera access denied:', err);
        alert('카메라 접근 권한이 필요합니다.');
      });
  };

  return (
    <div className="w-full h-screen overflow-hidden relative bg-white">
      <div
        className="relative h-full w-full max-w-[375px] mx-auto overflow-hidden bg-white"
      >
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[62px] left-[14px] z-50 w-[24px] h-[24px] flex items-center justify-center"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4824 3.03516L7.51758 12L16.4824 20.9648" stroke="#6B7583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header Section */}
        <div className="absolute left-[54.5px] top-[124px] w-[266px] flex flex-col gap-[20px] items-start text-center">
          <h1 className="font-pretendard text-[30px] leading-[36px] font-bold text-[#191f28] text-center w-full">
            {t.info.title}
          </h1>
          <p className="font-pretendard text-[16px] leading-[24px] font-bold text-[#2063d2] text-center w-full">
            {t.info.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.info.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* K-ID Card Graphic - centered and properly sized */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[220px] w-[510px] h-[360px] flex items-center justify-center">
          <img
            src={infoGraphic}
            alt="K-ID Card"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description Text with gradient background - positioned above bottom section */}
        <div
          className="absolute left-0 bottom-[101px] flex items-start justify-center pt-[40px]"
          style={{
            width: '375px',
            height: '150px'
          }}
        >
          <p className="font-pretendard text-[16px] leading-[24px] font-normal text-[#191f28] text-center px-[50px]">
            {t.info.detailDescription.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.info.detailDescription.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
          {/* Instruction text */}
          <div className="w-full px-[20px] py-[6px]">
            <p className="font-pretendard text-[16px] leading-[24px] font-medium text-[#6b7583] text-center">
              {t.info.preparePassport}
            </p>
          </div>

          {/* Button Container */}
          <div className="w-full px-[20px] pt-[10px] pb-[16px]">
            <button
              onClick={handleNext}
              className="w-full h-[54px] bg-[#2063d2] rounded-[4px] flex items-center justify-center cursor-pointer hover:bg-[#1a52b8] transition-colors active:scale-[0.98]"
            >
              <span className="font-pretendard text-[16px] font-bold text-white">
                {t.info.next}
              </span>
            </button>
          </div>

          {/* Home indicator space */}
          <div className="h-[21px]" />
        </div>
      </div>
    </div>
  );
};

export default Info;

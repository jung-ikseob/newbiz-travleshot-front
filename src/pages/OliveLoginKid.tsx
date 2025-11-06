import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Local image assets
import qrCode from '../assets/olive-login-kid/qr-code.png';
import navHome from '../assets/olive-login-kid/nav-home.png';
import navMenu from '../assets/olive-login-kid/nav-menu.png';
import navEdit from '../assets/olive-login-kid/nav-edit.png';
import navFavorites from '../assets/olive-login-kid/nav-favorites.png';
import navProfile from '../assets/olive-login-kid/nav-profile.png';
import oliveYoungLogoSmall from '../assets/olive-login-kid/olive-young-logo-small.png';
import headerBack from '../assets/olive-login-kid/header-back.png';
import headerSearch from '../assets/olive-login-kid/header-search.png';
import headerCart from '../assets/olive-login-kid/header-cart.png';

const OliveLoginKid: FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log('Next button clicked');
    // Navigate to next page
  };

  return (
    <div className="w-full h-screen overflow-hidden relative bg-white">
      <div className="relative w-full h-full max-w-[375px] mx-auto overflow-hidden bg-white">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full pt-[38px] pb-0 h-[104px] z-10">
        <div className="relative w-full h-[66px] px-4">
          {/* Logo in center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src={oliveYoungLogoSmall}
              alt="OLIVE YOUNG"
              className="h-[15px] object-contain"
            />
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-[21px] w-6 h-6 flex items-center justify-center"
            aria-label="Go back"
          >
            <img src={headerBack} alt="Back" className="w-6 h-6" />
          </button>

          {/* Right icons */}
          <div className="absolute right-4 top-[21px] flex gap-[15px] items-center">
            <button className="w-6 h-6 flex items-center justify-center" aria-label="Search">
              <img src={headerSearch} alt="Search" className="w-6 h-6" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center" aria-label="Shopping cart">
              <img src={headerCart} alt="Cart" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute left-1/2 top-[154px] -translate-x-1/2 text-center">
        <p
          className="text-[#231815] text-base font-bold leading-[1.5] whitespace-nowrap mb-0"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          OLIVE YOUNG
        </p>
        <p
          className="text-[#231815] text-base font-bold leading-[1.5] whitespace-nowrap"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          へようこそ
        </p>
      </div>

      {/* QR Code Container */}
      <div className="absolute left-1/2 top-[253.58px] -translate-x-1/2 w-[343px] bg-[#eff0f1] rounded-[10px] pt-10 pb-4 flex flex-col gap-10 items-center">
        {/* QR Code */}
        <div className="bg-white p-3 rounded-[10px] w-[223px] flex items-center justify-center">
          <div className="w-[200px] h-[200px] relative">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Divider and Text */}
        <div className="flex flex-col gap-4 items-start w-full px-0">
          <div className="w-full h-px bg-[#c9cdd2]" />
          <p
            className="text-[#231815] text-base text-center w-full leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: 500 }}
          >
            K-IDを利用して簡単会員登録
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute left-1/2 top-[653px] -translate-x-1/2 w-[343px] bg-[#231815] rounded px-4 py-3 flex items-center justify-center hover:bg-[#3a3835] transition-colors"
      >
        <span
          className="text-white text-base font-bold leading-[1.5]"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          次へ
        </span>
      </button>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col bg-white">
        <div className="border-t border-[#f0f1f4] flex justify-between items-center px-6 pt-1.5 pb-5">
          <button className="w-6 h-6 flex items-center justify-center" aria-label="Home">
            <img src={navHome} alt="Home" className="w-6 h-6" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center" aria-label="Menu">
            <img src={navMenu} alt="Menu" className="w-6 h-6" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center" aria-label="Edit">
            <img src={navEdit} alt="Edit" className="w-6 h-6" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center" aria-label="Favorites">
            <img src={navFavorites} alt="Favorites" className="w-6 h-6" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center" aria-label="Profile">
            <img src={navProfile} alt="Profile" className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-white h-[21px] w-full" />
      </div>
      </div>
    </div>
  );
};

export default OliveLoginKid;

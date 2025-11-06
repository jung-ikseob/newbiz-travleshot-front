import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import bgMainbnr from '../assets/olive-login-complete/bg-mainbnr.png';
import oyMembersLogo from '../assets/olive-login-complete/oy-members-logo.png';

import navHome from '../assets/olive-common/nav-home.png';
import navMenu from '../assets/olive-common/nav-menu.png';
import navEdit from '../assets/olive-common/nav-edit.png';
import navFavorites from '../assets/olive-common/nav-favorites.png';
import navProfile from '../assets/olive-common/nav-profile.png';
import oliveYoungLogo from '../assets/olive-common/olive-young-logo.png';
import headerSearch from '../assets/olive-common/header-search.png';
import headerCart from '../assets/olive-common/header-cart.png';

const OliveLoginComplete: FC = () => {
  const navigate = useNavigate();

  const handleShopping = () => {
    console.log('Now shopping button clicked');
  };

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-white">
      <div className="w-full h-full max-w-[375px] flex flex-col bg-white relative">
        {/* Decorative dots */}
        <div className="absolute w-2 h-2 rounded-full bg-[#EE84A9] left-[29px] top-[183px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#C5AB4F] left-[42px] top-[390px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#EB6F9B] left-[137px] top-[599px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#4A4A4A] left-[202px] top-[430px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#18BD5A] left-[312px] top-[471px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#CEB86C] left-[345px] top-[286px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#D2D632] left-[141px] top-[263px] z-0" />
        <div className="absolute w-2 h-2 rounded-full bg-[#18BD5A] left-[324px] top-[139px] z-0" />

        {/* Header */}
        <div className="pt-[38px] pb-0 h-[104px] z-10 relative">
          <div className="relative w-full h-[66px] px-4">
            {/* Logo in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src={oliveYoungLogo}
                alt="OLIVE YOUNG"
                className="h-[15px] object-contain"
              />
            </div>

            {/* Menu button */}
            <button
              className="absolute left-4 top-[21px] w-6 h-6 flex items-center justify-center"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.56055 5.83789L19.3711 5.83789" stroke="#231815" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3.56055 12.3232L19.3711 12.3232" stroke="#231815" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3.56055 18.915L19.3711 18.915" stroke="#231815" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Right icons */}
            <div className="absolute right-4 top-[21px] flex gap-[15px] items-center">
              <button className="w-6 h-6 flex items-center justify-center" aria-label="Search">
                <img src={headerSearch} alt="Search" className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigate('/olive_login_cart')}
                className="w-6 h-6 flex items-center justify-center"
                aria-label="Shopping cart"
              >
                <img src={headerCart} alt="Cart" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center px-4 pt-[50px] relative z-10">
          <p
            className="text-[#231815] text-base font-bold leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            OLIVE YOUNG
            <br />
            へようこそ
          </p>
        </div>

        {/* Content Wrapper - Scrollable */}
        <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto px-4 py-8 relative z-10">
          {/* Background image */}
          <div className="w-[177px] h-[151px] mb-10">
            <img
              src={bgMainbnr}
              alt="Background decoration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* OY MEMBERS section */}
          <div className="w-full max-w-[236px] flex flex-col items-center gap-[10px]">
            <img
              src={oyMembersLogo}
              alt="OY MEMBERS"
              className="w-[150px] h-[30.928px] object-contain"
            />
            <p
              className="text-[#757D86] text-center text-sm leading-[1.5]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              あなたはこれからOY MEMBERSです！
              <br />
              ご利用いただいてとても嬉しいです！
            </p>
          </div>
        </div>

        {/* Shopping Button */}
        <div className="w-full flex justify-center px-4 py-4 relative z-10">
          <button
            onClick={handleShopping}
            className="w-full max-w-[343px] bg-[#231815] rounded px-4 py-3 flex items-center justify-center hover:bg-[#3a3835] transition-colors"
          >
            <span
              className="text-white text-base font-bold leading-[1.5]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              今ショッピング
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="w-full flex flex-col bg-white border-t border-[#f0f1f4] relative z-10">
          <div className="flex justify-between items-center px-6 pt-1.5 pb-5">
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

export default OliveLoginComplete;

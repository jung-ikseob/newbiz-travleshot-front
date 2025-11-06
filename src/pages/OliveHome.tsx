import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Local assets - Header & Navigation
import navHome from '../assets/olive-login/nav-home.png';
import navMenu from '../assets/olive-login/nav-menu.png';
import navEdit from '../assets/olive-login/nav-edit.png';
import navFavorites from '../assets/olive-login/nav-favorites.png';
import navProfile from '../assets/olive-login/nav-profile.png';
import headerBack from '../assets/olive-login/header-back.png';
import headerSearch from '../assets/olive-login/header-search.png';
import headerCart from '../assets/olive-login/header-cart.png';
import oliveYoungLogo from '../assets/common/olive-young-logo.png';

// Local assets - Content Images
import heroBanner from '../assets/olive-home/hero-banner.jpg';
import promoBanner from '../assets/olive-home/promotion-banner.png';
import rank1 from '../assets/olive-home/rank-1.jpg';
import rank2 from '../assets/olive-home/rank-2.jpg';
import rank3 from '../assets/olive-home/rank-3.jpg';
import unionIcon from '../assets/olive-home/union-icon.svg';
import playIcon from '../assets/olive-home/play-icon.svg';

const OliveHome: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/olive_login');
  };

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-white">
      <div
        onClick={handleClick}
        className="relative w-full min-h-screen max-w-[375px] mx-auto bg-white cursor-pointer"
        style={{ fontFamily: "Pretendard, sans-serif" }}
      >
      {/* Header */}
      <div className="absolute h-[66px] left-0 top-[38px] w-full overflow-hidden">
        <button onClick={() => navigate(-1)} className="absolute left-[16px] top-[20.9px] w-6 h-6" aria-label="Back">
          <img alt="" className="w-full h-full" src={headerBack} />
        </button>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img alt="OLIVE YOUNG" className="h-[15px]" src={oliveYoungLogo} />
        </div>
        <div className="absolute flex gap-[15px] items-center left-[296px] top-[21px]">
          <button className="w-6 h-6" aria-label="Search">
            <img alt="" className="w-full h-full" src={headerSearch} />
          </button>
          <button className="w-6 h-6" aria-label="Cart">
            <img alt="" className="w-full h-full" src={headerCart} />
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="absolute box-border flex gap-[18px] items-center left-[16px] pb-[20px] pt-[6px] px-0 text-[#757d86] text-[14px] text-center top-[104px] font-medium overflow-x-auto">
        <button className="whitespace-nowrap">ホーム</button>
        <button className="whitespace-nowrap">ランキング</button>
        <button className="whitespace-nowrap">セール</button>
        <button className="whitespace-nowrap">K-Pop</button>
        <button className="whitespace-nowrap">イベント</button>
        <button className="whitespace-nowrap">企画展</button>
      </div>

      {/* Hero Banner */}
      <div className="absolute left-0 top-[151px] w-full">
        <div className="relative w-full h-[260px] overflow-hidden">
          <img
            alt="MD's Pick"
            className="absolute inset-0 w-full h-full object-cover"
            src={heroBanner}
          />
          <div className="absolute flex flex-col gap-[6px] items-start left-[16px] top-[173px] w-[197px] text-[#231815]">
            <p className="font-bold text-[20px] tracking-[0.2px]">
              MD's Pick Promotion
            </p>
            <p className="text-[14px] tracking-[0.14px]">
              MDのピックプロモーション
            </p>
          </div>
          <div className="absolute flex gap-[8px] items-center left-[264.08px] top-[221.24px]">
            <div className="bg-[rgba(35,24,21,0.2)] flex gap-[4px] items-center px-[10px] py-[2px] rounded-[20px]">
              <p className="text-[12px] text-white tracking-[0.12px]">
                <span className="font-bold">12</span> / 14
              </p>
              <div className="w-[7.5px] h-[7.5px]">
                <img alt="" className="w-full h-full" src={unionIcon} />
              </div>
            </div>
            <button className="w-[18.76px] h-[18.76px]">
              <img alt="" className="w-full h-full" src={playIcon} />
            </button>
          </div>
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="absolute left-[16px] top-[427px] right-[16px] max-w-[343px]">
        <div className="relative w-full h-0 pb-[20.99%] rounded-[8px] overflow-hidden">
          <img
            alt="Promotion Banner"
            className="absolute inset-0 w-full h-full object-cover"
            src={promoBanner}
          />
        </div>
      </div>

      {/* Ranking Section */}
      <div className="absolute flex flex-col gap-[16px] items-start left-[16px] top-[539px] w-full pr-[16px]">
        <p className="font-bold text-[#231815] text-[18px] tracking-[0.18px]">
          日本ランキング商品
        </p>
        <div className="flex gap-[12px] items-center overflow-x-auto w-full">
          {/* Rank 1 */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[142.229px] h-[142.229px] rounded-lg overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={rank1}
              />
              <div className="absolute inset-0 border-[1.5px] border-[#7b1cc1] rounded-lg pointer-events-none" />
              <div className="absolute top-0 left-0 bg-[#231815] w-5 h-5 flex items-center justify-center">
                <p className="font-bold text-[12px] text-white tracking-[0.12px]">1</p>
              </div>
            </div>
          </div>

          {/* Rank 2 */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[142.229px] h-[142.229px] rounded-lg overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={rank2}
              />
              <div className="absolute top-0 left-0 bg-[#231815] w-5 h-5 flex items-center justify-center">
                <p className="font-bold text-[12px] text-white tracking-[0.12px]">2</p>
              </div>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[142.229px] h-[142.229px] rounded-lg overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={rank3}
              />
              <div className="absolute top-0 left-0 bg-[#231815] w-5 h-5 flex items-center justify-center">
                <p className="font-bold text-[12px] text-white tracking-[0.12px]">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-white border-t border-[#f0f1f4] flex justify-around items-center py-[20px] px-[25.5px]">
          <button className="w-6 h-6" aria-label="Home">
            <img alt="" className="w-full h-full" src={navHome} />
          </button>
          <button className="w-6 h-6" aria-label="Categories">
            <img alt="" className="w-full h-full" src={navMenu} />
          </button>
          <button className="w-6 h-6" aria-label="Special">
            <img alt="" className="w-full h-full" src={navEdit} />
          </button>
          <button className="w-6 h-6" aria-label="Favorites">
            <img alt="" className="w-full h-full" src={navFavorites} />
          </button>
          <button className="w-6 h-6" aria-label="Profile">
            <img alt="" className="w-full h-full" src={navProfile} />
          </button>
        </div>
        <div className="bg-white h-[21px] w-full" />
      </div>
      </div>
    </div>
  );
};

export default OliveHome;

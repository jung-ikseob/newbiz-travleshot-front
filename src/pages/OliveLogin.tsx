import { FC, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

// Local image assets
import kidLogo from '../assets/olive-login/kid-logo.png';
import lineIcon from '../assets/olive-login/line-icon.png';
import googleIcon from '../assets/olive-login/google-icon.png';
import appleIcon from '../assets/olive-login/apple-icon.png';
import navHome from '../assets/olive-login/nav-home.png';
import navMenu from '../assets/olive-login/nav-menu.png';
import navEdit from '../assets/olive-login/nav-edit.png';
import navFavorites from '../assets/olive-login/nav-favorites.png';
import navProfile from '../assets/olive-login/nav-profile.png';
import headerBack from '../assets/olive-login/header-back.png';
import headerSearch from '../assets/olive-login/header-search.png';
import headerCart from '../assets/olive-login/header-cart.png';
import oliveYoungLogo from '../assets/common/olive-young-logo.png';

const OliveLogin: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveId, setSaveId] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const handleLogin = () => {
    toast({
      title: "서비스 준비중입니다.",
      duration: 3000
    });
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "서비스 준비중입니다.",
      duration: 3000
    });
  };

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden" style={{ maxWidth: '375px', margin: '0 auto' }}>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full pt-[38px] pb-0 h-[104px] z-10">
        <div className="relative w-full h-[66px] px-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-[21px] w-6 h-6 flex items-center justify-center"
            aria-label="Go back"
          >
            <img src={headerBack} alt="Back" className="w-6 h-6" />
          </button>

          <h1
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#231815] text-[18px] font-bold text-center leading-normal"
            style={{ fontFamily: 'Pretendard, sans-serif', letterSpacing: '0.18px' }}
          >
            ログイン
          </h1>

          <div className="absolute right-4 top-[21px] flex gap-[15px] items-center">
            <button
              onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
              className="w-6 h-6 flex items-center justify-center"
              aria-label="Search"
            >
              <img src={headerSearch} alt="Search" className="w-6 h-6" />
            </button>
            <button
              onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
              className="w-6 h-6 flex items-center justify-center"
              aria-label="Shopping cart"
            >
              <img src={headerCart} alt="Cart" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 top-[144px] -translate-x-1/2">
        <img
          src={oliveYoungLogo}
          alt="OLIVE YOUNG"
          className="w-[130.028px] h-[14.663px] object-contain"
        />
      </div>

      {/* Form Content */}
      <div className="absolute left-4 right-4 top-[198px] flex flex-col gap-10">
        {/* Login Form */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2.5 w-full">
              {/* Email Input */}
              <div className="w-full">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="w-full px-4 py-[10px] text-sm text-[#231815] placeholder:text-[#99a1a8] bg-white border border-[#c9cdd2] rounded focus:outline-none focus:border-[#231815]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                />
              </div>

              {/* Password Input */}
              <div className="w-full">
                <input
                  type="password"
                  placeholder="パスワード"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  className="w-full px-4 py-[10px] text-sm text-[#231815] placeholder:text-[#99a1a8] bg-white border border-[#c9cdd2] rounded focus:outline-none focus:border-[#231815]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex gap-1.5 items-center">
                <input
                  type="checkbox"
                  id="saveId"
                  checked={saveId}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSaveId(e.target.checked)}
                  className="w-4 h-4 rounded-sm border-[#c9cdd2] text-[#231815] focus:ring-0 focus:ring-offset-0"
                />
                <label
                  htmlFor="saveId"
                  className="text-xs text-[#231815] cursor-pointer select-none"
                  style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5' }}
                >
                  IDを保存する
                </label>
              </div>

              <div className="flex gap-1.5 items-center">
                <input
                  type="checkbox"
                  id="keepLogin"
                  checked={keepLogin}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setKeepLogin(e.target.checked)}
                  className="w-4 h-4 rounded-sm border-[#c9cdd2] text-[#231815] focus:ring-0 focus:ring-offset-0"
                />
                <label
                  htmlFor="keepLogin"
                  className="text-xs text-[#231815] cursor-pointer select-none"
                  style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5' }}
                >
                  ログイン状態を保持するIDを保存する
                </label>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#231815] rounded px-4 py-3 flex items-center justify-center hover:bg-[#3a3835] transition-colors"
          >
            <span
              className="text-white text-base font-bold"
              style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5' }}
            >
              ログイン
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex gap-[9px] items-center w-full">
          <div className="flex-1 h-px bg-[#c9cdd2]" />
          <p
            className="text-sm text-[#757d86] text-center whitespace-nowrap"
            style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: 'normal' }}
          >
            または進む
          </p>
          <div className="flex-1 h-px bg-[#c9cdd2]" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-2.5 w-full pb-32">
          {/* K-ID Button */}
          <button
            onClick={() => handleSocialLogin('K-ID')}
            className="w-full bg-white border border-[#c9cdd2] rounded px-4 py-2.5 flex gap-2.5 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <img
              src={kidLogo}
              alt="K-ID"
              className="w-5 h-[18.333px] object-contain"
            />
            <span
              className="text-sm text-[#231815]"
              style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5', fontWeight: 500 }}
            >
              K-IDで続ける
            </span>
          </button>

          {/* LINE Button */}
          <button
            onClick={() => handleSocialLogin('LINE')}
            className="w-full bg-white border border-[#c9cdd2] rounded px-4 py-2.5 flex gap-2.5 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <img
              src={lineIcon}
              alt="LINE"
              className="w-5 h-5 object-cover"
            />
            <span
              className="text-sm text-[#231815]"
              style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5', fontWeight: 500 }}
            >
              LINEで続ける
            </span>
          </button>

          {/* Google Button */}
          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-full bg-white border border-[#c9cdd2] rounded px-4 py-2.5 flex gap-2.5 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <img
              src={googleIcon}
              alt="Google"
              className="w-5 h-5 object-contain"
            />
            <span
              className="text-sm text-[#231815]"
              style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5', fontWeight: 500 }}
            >
              Googleで続ける
            </span>
          </button>

          {/* Apple Button */}
          <button
            onClick={() => handleSocialLogin('Apple')}
            className="w-full bg-white border border-[#c9cdd2] rounded px-4 py-2.5 flex gap-2.5 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <img
              src={appleIcon}
              alt="Apple"
              className="w-5 h-5 object-contain"
            />
            <span
              className="text-sm text-[#231815]"
              style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5', fontWeight: 500 }}
            >
              Appleで続ける
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col bg-white">
        <div className="border-t border-[#f0f1f4] flex justify-between items-center px-6 pt-1.5 pb-5">
          <button
            onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Home"
          >
            <img src={navHome} alt="Home" className="w-6 h-6" />
          </button>
          <button
            onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Menu"
          >
            <img src={navMenu} alt="Menu" className="w-6 h-6" />
          </button>
          <button
            onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Edit"
          >
            <img src={navEdit} alt="Edit" className="w-6 h-6" />
          </button>
          <button
            onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Favorites"
          >
            <img src={navFavorites} alt="Favorites" className="w-6 h-6" />
          </button>
          <button
            onClick={() => toast({ title: "서비스 준비중입니다.", duration: 3000 })}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Profile"
          >
            <img src={navProfile} alt="Profile" className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-white h-[21px] w-full" />
      </div>
    </div>
  );
};

export default OliveLogin;

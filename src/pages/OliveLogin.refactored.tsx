import { FC, useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { MobileLayout, Header, BottomNavigation } from '@/components/layout';
import { Input, Checkbox, Button } from '@/components/common';

// Page-specific assets
import kidLogo from '../assets/olive-login/kid-logo.png';
import lineIcon from '../assets/olive-login/line-icon.png';
import googleIcon from '../assets/olive-login/google-icon.png';
import appleIcon from '../assets/olive-login/apple-icon.png';

// Common assets (Header & Navigation)
import navHome from '../assets/olive-common/nav-home.png';
import navMenu from '../assets/olive-common/nav-menu.png';
import navEdit from '../assets/olive-common/nav-edit.png';
import navFavorites from '../assets/olive-common/nav-favorites.png';
import navProfile from '../assets/olive-common/nav-profile.png';
import headerBack from '../assets/olive-common/header-back.png';
import headerSearch from '../assets/olive-common/header-search.png';
import headerCart from '../assets/olive-common/header-cart.png';
import oliveYoungLogo from '../assets/olive-common/olive-young-logo.png';

// Social Login Button Component
interface SocialLoginButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const SocialLoginButton: FC<SocialLoginButtonProps> = memo(({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-white border border-[#c9cdd2] rounded px-4 py-2.5 flex gap-2.5 items-center justify-center hover:bg-gray-50 transition-colors"
  >
    <img
      src={icon}
      alt={label}
      className="w-5 h-auto object-contain"
    />
    <span
      className="text-sm text-[#231815]"
      style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5', fontWeight: 500 }}
    >
      {label}
    </span>
  </button>
));

SocialLoginButton.displayName = 'SocialLoginButton';

const OliveLogin: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveId, setSaveId] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const handleLogin = useCallback(() => {
    toast({
      title: "서비스 준비중입니다.",
      duration: 3000
    });
  }, []);

  const handleSocialLogin = useCallback((provider: string) => {
    if (provider === 'K-ID') {
      navigate('/olive_login_kid');
    } else {
      toast({
        title: "서비스 준비중입니다.",
        duration: 3000
      });
    }
  }, [navigate]);

  const handleSearchClick = useCallback(() => {
    toast({ title: "서비스 준비중입니다.", duration: 3000 });
  }, []);

  const handleCartClick = useCallback(() => {
    toast({ title: "서비스 준비중입니다.", duration: 3000 });
  }, []);

  const navigationItems = [
    { icon: navHome, label: 'Home' },
    { icon: navMenu, label: 'Menu' },
    { icon: navEdit, label: 'Edit' },
    { icon: navFavorites, label: 'Favorites' },
    { icon: navProfile, label: 'Profile' },
  ];

  return (
    <MobileLayout>
      {/* Header */}
      <Header
        title="ログイン"
        showBack
        showSearch
        showCart
        onSearchClick={handleSearchClick}
        onCartClick={handleCartClick}
        headerBackIcon={headerBack}
        headerSearchIcon={headerSearch}
        headerCartIcon={headerCart}
      />

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
              <Input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2.5 w-full">
              <Checkbox
                id="saveId"
                checked={saveId}
                onChange={(e) => setSaveId(e.target.checked)}
                label="IDを保存する"
              />
              <Checkbox
                id="keepLogin"
                checked={keepLogin}
                onChange={(e) => setKeepLogin(e.target.checked)}
                label="ログイン状態を保持するIDを保存する"
              />
            </div>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            variant="primary"
            size="lg"
            fullWidth
          >
            ログイン
          </Button>
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
          <SocialLoginButton
            icon={kidLogo}
            label="K-IDで続ける"
            onClick={() => handleSocialLogin('K-ID')}
          />
          <SocialLoginButton
            icon={lineIcon}
            label="LINEで続ける"
            onClick={() => handleSocialLogin('LINE')}
          />
          <SocialLoginButton
            icon={googleIcon}
            label="Googleで続ける"
            onClick={() => handleSocialLogin('Google')}
          />
          <SocialLoginButton
            icon={appleIcon}
            label="Appleで続ける"
            onClick={() => handleSocialLogin('Apple')}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation items={navigationItems} />
    </MobileLayout>
  );
};

export default OliveLogin;

import { FC, ReactNode, memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showCart?: boolean;
  rightContent?: ReactNode;
  onBackClick?: () => void;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  className?: string;
  headerBackIcon?: string;
  headerSearchIcon?: string;
  headerCartIcon?: string;
}

export const Header: FC<HeaderProps> = memo(({
  title,
  showBack = false,
  showSearch = false,
  showCart = false,
  rightContent,
  onBackClick,
  onSearchClick,
  onCartClick,
  className = '',
  headerBackIcon,
  headerSearchIcon,
  headerCartIcon,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`absolute top-0 left-0 w-full pt-[38px] pb-0 h-[104px] z-10 ${className}`}>
      <div className="relative w-full h-[66px] px-4">
        {showBack && (
          <button
            onClick={handleBack}
            className="absolute left-4 top-[21px] w-6 h-6 flex items-center justify-center"
            aria-label="Go back"
          >
            {headerBackIcon ? (
              <img src={headerBackIcon} alt="Back" className="w-6 h-6" />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        )}

        {title && (
          <h1
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#231815] text-[18px] font-bold text-center leading-normal"
            style={{ fontFamily: 'Pretendard, sans-serif', letterSpacing: '0.18px' }}
          >
            {title}
          </h1>
        )}

        {(showSearch || showCart || rightContent) && (
          <div className="absolute right-4 top-[21px] flex gap-[15px] items-center">
            {showSearch && (
              <button
                onClick={onSearchClick}
                className="w-6 h-6 flex items-center justify-center"
                aria-label="Search"
              >
                {headerSearchIcon ? (
                  <img src={headerSearchIcon} alt="Search" className="w-6 h-6" />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            )}

            {showCart && (
              <button
                onClick={onCartClick}
                className="w-6 h-6 flex items-center justify-center"
                aria-label="Shopping cart"
              >
                {headerCartIcon ? (
                  <img src={headerCartIcon} alt="Cart" className="w-6 h-6" />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 2L7 5H20L18 2H9Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 5H4V20H20V5Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            )}

            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
});

Header.displayName = 'Header';

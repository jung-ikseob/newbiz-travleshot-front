import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import productImage from '../assets/olive-cart/product-image.png';

const OliveLoginCart: FC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handlePayment = () => {
    navigate('/olive_pay_complete');
  };

  const handleApplyPromo = () => {
    console.log('Apply promo code:', promoCode);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full min-h-screen max-w-[375px] flex flex-col bg-white">
        {/* Header */}
        <div className="pt-[38px] pb-0 h-[104px]">
          <div className="relative w-full h-[66px] px-4 flex items-center justify-center">
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

            {/* Title */}
            <h1
              className="text-[#231815] text-center text-lg font-bold tracking-[0.18px]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              カート(1)
            </h1>

            {/* Home button */}
            <button
              onClick={() => navigate('/olive_home')}
              className="absolute right-4 top-[21px] w-6 h-6 flex items-center justify-center"
              aria-label="Home"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9131 1.85059C12.4505 1.85059 12.9728 2.03324 13.3926 2.36914L20.5908 8.12793C21.1166 8.54867 21.4374 9.17285 21.4756 9.8418L21.4795 9.97656V19.5996C21.4795 20.1487 21.2883 20.6784 20.9434 21.0996L20.7861 21.2734C20.3424 21.7171 19.7401 21.9678 19.1123 21.9678H14.3135C14.0487 21.9677 13.7954 21.8609 13.6094 21.6748C13.4229 21.4881 13.3184 21.2343 13.3184 20.9707V13.7402H10.5098V20.9707C10.5098 21.2343 10.4054 21.488 10.2188 21.6748C10.0327 21.8609 9.77959 21.9678 9.51465 21.9678H4.71582C4.16651 21.9678 3.63689 21.7758 3.21582 21.4307L3.04199 21.2734C2.59829 20.8295 2.34961 20.2268 2.34961 19.5996V9.97559C2.34961 9.25783 2.67614 8.57702 3.2373 8.12793L10.4355 2.36914L10.4395 2.36523L10.4453 2.36035C10.863 2.03008 11.3804 1.8507 11.9131 1.85059ZM11.9141 3.84082C11.8509 3.84085 11.7883 3.85765 11.7324 3.88867L11.6797 3.92383L4.48145 9.68164C4.43732 9.71691 4.40135 9.76265 4.37695 9.81348C4.36489 9.83874 4.35581 9.8653 4.34961 9.89258L4.33984 9.97656V19.5996C4.33984 19.8069 4.50848 19.9756 4.71582 19.9756H8.51953V12.7441C8.51976 12.4808 8.62405 12.2277 8.81055 12.041L8.88379 11.9746C9.06088 11.8296 9.28376 11.7491 9.51465 11.749H14.3135C14.5776 11.749 14.8311 11.8546 15.0176 12.041L15.084 12.1143C15.208 12.2659 15.2843 12.4509 15.3037 12.6455L15.3086 12.7441V19.9756H19.1123C19.2122 19.9756 19.3078 19.9362 19.3779 19.8662L19.4248 19.8086C19.4657 19.7471 19.4883 19.6743 19.4883 19.5996V9.97559L19.4785 9.8916C19.4722 9.86407 19.4624 9.8369 19.4502 9.81152V9.81055C19.4252 9.75956 19.3901 9.71553 19.3477 9.68164L12.1484 3.92383C12.0812 3.87028 11.998 3.84082 11.9141 3.84082Z" fill="#231815"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {/* Free Shipping Banner */}
          <div className="flex flex-col gap-2 mb-2.5">
            <p
              className="text-[#231815] text-sm font-medium leading-[1.5]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              おめでとうございます！送料無料です！
            </p>
            <div className="h-1 rounded bg-[#5FBE00]" />
            <div className="flex justify-between items-center">
              <p
                className="text-[#231815] text-sm leading-[1.5]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                <span className="font-semibold">1</span>個
              </p>
              <button
                className="text-[#231815] text-sm leading-[1.5]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                すべて削除
              </button>
            </div>
          </div>

          {/* Product Item */}
          <div className="border border-[#D7DADD] rounded p-4 flex flex-col gap-2.5 mb-9">
            <div className="flex gap-4">
              <div className="relative w-[75px] h-[75px] flex-shrink-0">
                <img
                  src={productImage}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-[#7B1CC1] pointer-events-none" />
              </div>
              <div className="flex-1 relative">
                <svg className="absolute right-0 top-0 w-[13px] h-3 fill-[#D7DADD]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.09375 0C11.1948 0.000135859 12.8982 1.70367 12.8984 3.80469C12.8984 4.5364 12.6885 5.2195 12.3301 5.7998C11.7853 6.87473 11.2763 7.46586 10.0117 8.83496C8.71773 10.2356 6.7971 11.3816 6.66992 11.457C6.6343 11.4781 6.5958 11.4911 6.55762 11.501C6.55216 11.5025 6.54653 11.5036 6.54102 11.5049C6.52273 11.5088 6.50475 11.5122 6.48633 11.5137C6.47384 11.5149 6.46083 11.5146 6.44824 11.5146C6.43579 11.5145 6.42349 11.5149 6.41113 11.5137C6.39272 11.5122 6.37471 11.5088 6.35645 11.5049C6.35102 11.5036 6.34522 11.5024 6.33984 11.501C6.30198 11.4911 6.26385 11.478 6.22852 11.457C6.10313 11.3827 4.18041 10.2365 2.88574 8.83496C1.62107 7.46575 1.11127 6.87496 0.566406 5.7998C0.208285 5.21966 6.93613e-05 4.53608 0 3.80469C0.000202735 1.70371 1.70371 0.000202625 3.80469 0C4.83257 9.70601e-05 5.76421 0.409518 6.44824 1.07129C7.13244 0.408936 8.06528 0 9.09375 0Z" fill="#D7DADD"/>
                </svg>
                <div className="flex flex-col gap-1.5 pt-1.5">
                  <p
                    className="text-[#231815] text-sm font-bold leading-[1.5]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    ユハンキンバリー
                  </p>
                  <p
                    className="text-[#231815] text-sm font-medium leading-[1.2]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    グッドフィール スーパーソフト
                    <br />
                    （レギュラー/オーバーナイトシ...
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center border border-[#D7DADD] rounded">
                <button
                  onClick={handleDecrement}
                  className="w-[26px] h-7 flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.78906 14H17.2109" stroke="#D7DADD"/>
                  </svg>
                </button>
                <div className="w-[25px] px-2.5 py-1.5 border-x border-[#D7DADD]">
                  <p
                    className="text-[#231815] text-xs text-center leading-[1.5]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {quantity}
                  </p>
                </div>
                <button
                  onClick={handleIncrement}
                  className="w-[26px] h-7 flex items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.78906 13.9951H17.2109" stroke="#7C8287"/>
                    <path d="M13.0059 9.78906L13.0059 18.2109" stroke="#7C8287"/>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1.5 items-end">
                <div className="flex flex-col gap-0.5">
                  <p
                    className="text-[#99A1B0] text-xs text-right leading-[1.5] line-through"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    ￥10,512 (US＄72.00)
                  </p>
                  <p
                    className="text-[#231815] text-sm text-right leading-[1.5]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    <span className="font-bold">￥4,585</span> (US＄31.40)
                  </p>
                </div>
                <button
                  className="text-[#757D86] text-xs text-right leading-[1.5]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  削除
                </button>
              </div>
            </div>
          </div>

          {/* Promotion Section */}
          <div className="flex flex-col gap-3.5">
            <div className="h-2 bg-[#F6F7F9] -mx-4" />
            
            <div className="flex flex-col gap-6">
              <h2
                className="text-[#231815] text-base font-bold leading-[1.5]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                プロモーション＆割引
              </h2>

              <div className="flex flex-col gap-6">
                {/* Promo Code */}
                <div className="flex flex-col gap-1.5">
                  <p
                    className="text-[#231815] text-sm font-bold leading-[1.5]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    プロモーションコード
                  </p>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="プロモーションコード入力"
                      className="flex-1 px-4 py-2.5 border border-[#C9CDD2] rounded text-sm leading-[1.5]"
                      style={{ 
                        fontFamily: 'Pretendard, sans-serif',
                        color: '#231815'
                      }}
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="w-[78px] h-[41px] px-4 py-3 bg-[#231815] rounded flex items-center justify-center"
                    >
                      <span
                        className="text-white text-sm font-medium leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        適用する
                      </span>
                    </button>
                  </div>
                </div>

                <div className="w-full h-px bg-[#C9CDD2]" />

                {/* Coupon */}
                <div className="flex justify-between items-center">
                  <p
                    className="text-[#231815] text-sm font-bold leading-[1.5]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    クーポン
                  </p>
                  <button
                    className="text-[#82898E] text-sm text-right leading-[1.5] underline"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    サインインしてクーポン確認
                  </button>
                </div>

                <div className="w-full h-px bg-[#C9CDD2]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Payment Section */}
        <div className="border-t border-[#F0F1F4] bg-white">
          <div className="p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <p
                className="text-[#757D86] text-sm font-bold leading-[1.5]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                予想請求額
              </p>
              <p
                className="text-[#231815] text-sm text-right leading-[1.5]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                <span className="font-bold">￥4,585</span> (US＄31.40)
              </p>
            </div>
            <button
              onClick={handlePayment}
              className="w-full bg-[#231815] rounded px-4 py-3 flex items-center justify-center hover:bg-[#3a3835] transition-colors"
            >
              <span
                className="text-white text-base font-bold leading-[1.5]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                お支払い
              </span>
            </button>
          </div>
          <div className="bg-white h-[21px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default OliveLoginCart;

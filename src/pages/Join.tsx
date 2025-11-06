import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { userSchema } from '@/lib/validation';
import { toast } from '@/hooks/use-toast';

const Join: FC = () => {
  const navigate = useNavigate();
  // local visual toast removed in favor of global toast
  const [errors, setErrors] = useState({ email: false, passportNumber: false, name: false, birthDate: false });
  const [formData, setFormData] = useState({
    country: 'Japan',
    passportNumber: 'ZZ1000001',
    name: 'GAIMU SAKURA',
    gender: 'Female',
    birthDate: '2000-02-20',
    expiryDate: '2035-03-24',
    email: 'kidtest@test.com'
  });

  // using shared userSchema from src/lib/validation

  const handleNext = () => {
    // validate same fields as login
    const toValidate = {
      email: formData.email,
      passportNumber: formData.passportNumber,
      name: formData.name,
      birthDate: formData.birthDate,
    };

    const result = userSchema.safeParse(toValidate);
    if (!result.success) {
      const newErrors = { email: false, passportNumber: false, name: false, birthDate: false };
      result.error.errors.forEach((e) => {
        const key = e.path[0] as keyof typeof newErrors | undefined;
        if (key) newErrors[key] = true;
      });
      setErrors(newErrors);
      toast({ title: '정보를 입력해주세요', duration: 3000 });
      return;
    }

    // also ensure country selected (previous behavior)
    if (!formData.country) {
      toast({ title: '정보를 입력해주세요', duration: 3000 });
      return;
    }

    navigate('/card_choice');
  };

  return (
    <div className="w-full h-screen overflow-hidden relative bg-white">
      <div className="relative w-full h-full max-w-[375px] mx-auto overflow-hidden bg-white">
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

        <div className="flex-1 px-5 pt-28 pb-4 overflow-y-auto">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h1 
                className="text-xl font-semibold text-[#191F28] leading-[120%]"
                style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
              >
                여권정보를 확인해주세요
              </h1>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex flex-col">
                {formData.country && (
                  <label 
                    htmlFor="country"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    국가
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="country"
                    aria-label="국가"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder={!formData.country ? "국가" : ""}
                    className="border-0 border-b border-[rgba(107,117,131,0.2)] rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {formData.passportNumber && (
                  <label 
                    htmlFor="passportNumber"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    여권번호
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="passportNumber"
                    aria-label="여권번호"
                    value={formData.passportNumber}
                    onChange={(e) => { setFormData({ ...formData, passportNumber: e.target.value }); setErrors(prev => ({ ...prev, passportNumber: false })); }}
                    placeholder={!formData.passportNumber ? "여권번호" : ""}
                    className={`border-0 border-b ${errors.passportNumber ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {formData.name && (
                  <label 
                    htmlFor="name"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    이름
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="name"
                    aria-label="이름"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors(prev => ({ ...prev, name: false })); }}
                    placeholder={!formData.name ? "이름" : ""}
                    className={`border-0 border-b ${errors.name ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {formData.gender && (
                  <label 
                    htmlFor="gender"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    성별
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="gender"
                    aria-label="성별"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    placeholder={!formData.gender ? "성별" : ""}
                    className="border-0 border-b border-[rgba(107,117,131,0.2)] rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {formData.birthDate && (
                  <label 
                    htmlFor="birthDate"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    생년월일
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="birthDate"
                    type="date"
                    aria-label="생년월일"
                    value={formData.birthDate}
                    onChange={(e) => { setFormData({ ...formData, birthDate: e.target.value }); setErrors(prev => ({ ...prev, birthDate: false })); }}
                    placeholder={!formData.birthDate ? "생년월일" : ""}
                    className={`border-0 border-b ${errors.birthDate ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {formData.expiryDate && (
                  <label 
                    htmlFor="expiryDate"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    여권 만료일
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="expiryDate"
                    type="date"
                    aria-label="여권 만료일"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    placeholder={!formData.expiryDate ? "여권 만료일" : ""}
                    className="border-0 border-b border-[rgba(107,117,131,0.2)] rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {formData.email && (
                  <label 
                    htmlFor="email"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    이메일
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="email"
                    aria-label="이메일"
                    type="email"
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors(prev => ({ ...prev, email: false })); }}
                    placeholder={!formData.email ? "이메일" : ""}
                    className={`border-0 border-b ${errors.email ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="px-5 py-4">
            <button
              onClick={handleNext}
              className="w-full h-[54px] bg-[#2063D2] rounded flex items-center justify-center hover:bg-[#1a52b8] transition-colors"
            >
              <span 
                className="text-white text-base font-semibold leading-[150%]"
                style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
              >
                다음
              </span>
            </button>
          </div>
          <div className="h-[21px]"></div>
        </div>
        </div>
      </div>

      {/* using global toast via use-toast; local visual toast removed */}
    </div>
  );
};

export default Join;

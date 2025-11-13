import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { userSchema } from '@/lib/validation';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/useTranslation';
import loginBackground from '../assets/builder-images/login-background.png';

const Login: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [errors, setErrors] = useState({ email: false, passportNumber: false, name: false, birthDate: false });
  const [formData, setFormData] = useState({
    email: 'test@test.com',
    passportNumber: 'ZZ1000001',
    name: 'GAIMU SAKURA',
    birthDate: '2000-02-20'
  });

  // using shared userSchema from src/lib/validation

  const handleLogin = () => {
    const result = userSchema.safeParse(formData);
    if (!result.success) {
      // map zod errors to local error flags
      const newErrors = { email: false, passportNumber: false, name: false, birthDate: false };
      result.error.errors.forEach((e) => {
        const key = e.path[0] as keyof typeof newErrors | undefined;
        if (key) newErrors[key] = true;
      });
      setErrors(newErrors);
      toast({ title: t.login.checkInfo, duration: 3000 });
      return;
    }

    // passed validation
    navigate('/main');
  };

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-white">
      <div className="relative w-full min-h-screen max-w-[375px] mx-auto bg-white">
      <img
        src={loginBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative flex flex-col h-screen">
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
                className="text-xl font-semibold text-[#191F28] leading-[120%] mb-2"
                style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
              >
                {t.login.welcome}
              </h1>
              <p
                className="text-sm text-[rgba(107,117,131,0.6)] leading-[120%]"
                style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
              >
                {t.login.pleaseEnterInfo}
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex flex-col">
                {formData.email && (
                  <label
                    htmlFor="email"
                    className="text-xs text-[#6B7583] leading-[120%] mb-1"
                    style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                  >
                    {t.login.email}
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="email"
                    aria-label={t.login.email}
                    placeholder={!formData.email ? t.login.email : ""}
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors(prev => ({ ...prev, email: false })); }}
                    className={`border-0 border-b ${errors.email ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
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
                    {t.login.passportNumber}
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="passportNumber"
                    aria-label={t.login.passportNumber}
                    placeholder={!formData.passportNumber ? t.login.passportNumber : ""}
                    value={formData.passportNumber}
                    onChange={(e) => { setFormData({ ...formData, passportNumber: e.target.value }); setErrors(prev => ({ ...prev, passportNumber: false })); }}
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
                    {t.login.name}
                  </label>
                )}
                <div className="py-2.5">
                  <Input
                    id="name"
                    aria-label={t.login.name}
                    placeholder={!formData.name ? t.login.name : ""}
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors(prev => ({ ...prev, name: false })); }}
                    className={`border-0 border-b ${errors.name ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
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
                    {t.login.birthDate}
                  </label>
                )}
                <div className="py-2.5">
                    <span className="sr-only">{t.login.birthDate}</span>
                    <Input
                      id="birthDate"
                      type="date"
                      aria-label={t.login.birthDate}
                      placeholder={!formData.birthDate ? t.login.birthDate : ""}
                      value={formData.birthDate}
                      onChange={(e) => { setFormData({ ...formData, birthDate: e.target.value }); setErrors(prev => ({ ...prev, birthDate: false })); }}
                      className={`border-0 border-b ${errors.birthDate ? 'border-[#DD3A3A]' : 'border-[rgba(107,117,131,0.2)]'} rounded-none px-0 py-0 h-auto text-base text-[#191F28] focus-visible:ring-0 focus-visible:ring-offset-0`}
                      style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent">
          <div className="flex justify-center items-center py-1.5 gap-0.5">
            <button
              onClick={() => navigate('/info')}
              className="text-[#6B7583] text-base leading-[150%] hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}
            >
              {t.login.goToIssue}
            </button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#6B7583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="px-5 py-4">
            <button
              onClick={handleLogin}
              className="w-full h-[54px] bg-[#2063D2] rounded flex items-center justify-center hover:bg-[#1a52b8] transition-colors"
            >
              <span
                className="text-white text-base font-semibold leading-[150%]"
                style={{ fontFamily: 'Pretendard-SemiBold, sans-serif' }}
              >
                {t.login.loginButton}
              </span>
            </button>
          </div>
          <div className="h-[21px]"></div>
        </div>
      </div>

      {/* using global toast via use-toast; local visual toast removed */}
      </div>
    </div>
  );
};

export default Login;

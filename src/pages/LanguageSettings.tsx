import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface LanguageSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

type Language = 'korean' | 'japanese' | 'english';

const LanguageSettings = ({ isOpen, onClose }: LanguageSettingsProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('korean');

  if (!isOpen) return null;

  const languages = [
    { id: 'korean' as Language, label: '한국어' },
    { id: 'japanese' as Language, label: '日本語' },
    { id: 'english' as Language, label: 'English' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={onClose}>
      <div 
        className="w-full max-w-md mx-auto bg-white rounded-t-[10px] animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 flex flex-col gap-1">
          <div className="flex items-start justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-[#191F28] leading-[150%]">언어 변경</h2>
              <p className="text-sm text-[#6B7583]/60 leading-[150%]">원하는 언어로 변경해주세요</p>
            </div>
            <button 
              onClick={onClose}
              className="text-[#6B7583] hover:text-[#191F28] transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="pb-5 flex flex-col gap-[26px]">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className="flex items-center justify-between px-5 pr-[17px] hover:bg-[#F9F9F9] transition-colors"
            >
              <span 
                className={`text-base leading-[150%] ${
                  selectedLanguage === language.id 
                    ? 'text-[#2063D2] font-medium' 
                    : 'text-[#191F28] font-normal'
                }`}
              >
                {language.label}
              </span>
              {selectedLanguage === language.id && (
                <Check size={24} className="text-[#2063D2]" strokeWidth={1.5} />
              )}
            </button>
          ))}
        </div>

        <div className="h-[21px]" />
      </div>
    </div>
  );
};

export default LanguageSettings;

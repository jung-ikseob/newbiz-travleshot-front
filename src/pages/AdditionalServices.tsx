import { X } from 'lucide-react';

interface AdditionalServicesProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdditionalServices = ({ isOpen, onClose }: AdditionalServicesProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="w-full max-w-md mx-auto bg-white rounded-t-3xl p-6 animate-slide-up">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-semibold text-[#191F28]">부가서비스</h2>
          <button 
            onClick={onClose}
            className="text-[#6B7583] hover:text-[#191F28] transition-colors"
          >
            <X size={32} />
          </button>
        </div>
        
        <p className="text-[#999999] text-sm mb-8">K-ID활용하여 부가서비스로 이동해보세요</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#F5F6F8] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#E9EBED] transition-colors">
            <div className="mb-4 w-12 h-12 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6H36C37.0609 6 38.0783 6.42143 38.8284 7.17157C39.5786 7.92172 40 8.93913 40 10V38C40 39.0609 39.5786 40.0783 38.8284 40.8284C38.0783 41.5786 37.0609 42 36 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6Z" fill="#FF6B4A" fillOpacity="0.1"/>
                <path d="M14 12H34M14 20H34M14 28H34M14 36H28" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[#191F28] mb-2">출입국 신고서<br />작성하기</h3>
            <p className="text-xs text-[#999999]">immigration form</p>
          </div>

          <div className="bg-[#E8F8F5] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#D0F0E8] transition-colors">
            <div className="mb-4 w-12 h-12 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 4H16C14.9391 4 13.9217 4.42143 13.1716 5.17157C12.4214 5.92172 12 6.93913 12 8V40C12 41.0609 12.4214 42.0783 13.1716 42.8284C13.9217 43.5786 14.9391 44 16 44H32C33.0609 44 34.0783 43.5786 34.8284 42.8284C35.5786 42.0783 36 41.0609 36 40V8C36 6.93913 35.5786 5.92172 34.8284 5.17157C33.0783 4.42143 32.0609 4 32 4Z" fill="#17B26A" fillOpacity="0.1"/>
                <path d="M16 8H32M16 36H32M24 40C24.5523 40 25 39.5523 25 39C25 38.4477 24.5523 38 24 38C23.4477 38 23 38.4477 23 39C23 39.5523 23.4477 40 24 40Z" stroke="#17B26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[#191F28] mb-2">모바일 세관신청서<br />작성하기</h3>
            <p className="text-xs text-[#999999]">mobile customs form</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;

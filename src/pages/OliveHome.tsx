import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Asset URLs from Figma (Updated)
const imgImage205 = "https://www.figma.com/api/mcp/asset/c39fa1ee-2c1d-48e9-aeee-96209fdc93e1";
const imgEc6D3B84011145AfBf87F8Fd7F27Dbf51 = "https://www.figma.com/api/mcp/asset/c2eddf08-326f-482b-8c99-b6f17c8fef69";
const imgRectangle23844 = "https://www.figma.com/api/mcp/asset/4e8056a6-7a82-4309-9e99-6c88440cf394";
const imgRectangle23845 = "https://www.figma.com/api/mcp/asset/77ad8a46-a460-44c3-9f56-76c144594974";
const imgRectangle23846 = "https://www.figma.com/api/mcp/asset/c1c9ae59-864f-4ed0-a96a-8d3083121335";
const imgIcon = "https://www.figma.com/api/mcp/asset/f3cf01f3-b1c1-4404-b7c0-e1ba42abbcfc";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/90a16752-38b6-4313-be3d-7fce4ed0673a";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/4057f1b3-2567-42b2-8123-07e570cd74f4";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/b1d9672a-da67-447a-a8bc-fc3385f874cc";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/b2d0d4d2-6059-4e96-9461-f9790de831b1";
const imgGroup38286 = "https://www.figma.com/api/mcp/asset/1c03373e-0bde-4574-ad4a-477c110f9326";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/85129901-e712-4144-bacb-6e9b61912783";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/b21f5755-cb32-4149-961e-411684645759";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/5cab4441-c96a-431e-a204-1124111557b6";
const imgUnion = "https://www.figma.com/api/mcp/asset/2cf0759e-cecc-4715-8728-810b31925422";
const imgGroup38289 = "https://www.figma.com/api/mcp/asset/407039f1-fe09-4144-b572-d58f9f62b58c";

const OliveHome: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full min-h-screen flex flex-col" style={{ fontFamily: "Pretendard, sans-serif" }}>
      {/* Header */}
      <div className="relative h-[66px] mt-[38px] flex items-center justify-between px-4">
        <button onClick={() => navigate(-1)} className="w-6 h-6" aria-label="Menu">
          <img alt="" className="w-full h-full" src={imgIcon5} />
        </button>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img alt="OLIVE YOUNG" className="h-[15px]" src={imgGroup38286} />
        </div>
        <div className="flex gap-[15px] items-center">
          <button className="w-6 h-6" aria-label="Search">
            <img alt="" className="w-full h-full" src={imgIcon6} />
          </button>
          <button className="w-6 h-6" aria-label="Cart">
            <img alt="" className="w-full h-full" src={imgIcon7} />
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex gap-[18px] items-center px-4 pb-5 pt-1.5 text-[#757d86] text-sm text-center overflow-x-auto">
        <button className="font-medium whitespace-nowrap">ホーム</button>
        <button className="font-medium whitespace-nowrap">ランキング</button>
        <button className="font-medium whitespace-nowrap">セール</button>
        <button className="font-medium whitespace-nowrap">K-Pop</button>
        <button className="font-medium whitespace-nowrap">イベント</button>
        <button className="font-medium whitespace-nowrap">企画展</button>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full px-0">
        <div className="relative w-full h-[260px] overflow-hidden">
          <img
            alt="MD's Pick"
            className="w-full h-full object-cover"
            src={imgImage205}
          />
          <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
            <p className="font-bold text-[#231815] text-xl tracking-[0.2px]">
              MD's Pick Promotion
            </p>
            <p className="text-[#231815] text-sm tracking-[0.14px]">
              MDのピックプロモーション
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2 items-center">
            <div className="bg-[rgba(35,24,21,0.2)] flex gap-1 items-center px-2.5 py-0.5 rounded-[20px]">
              <p className="text-white text-xs tracking-[0.12px]">
                <span className="font-bold">12</span> / 14
              </p>
              <div className="w-[7.5px] h-[7.5px]">
                <img alt="" className="w-full h-full" src={imgUnion} />
              </div>
            </div>
            <button className="w-[18.76px] h-[18.76px]">
              <img alt="" className="w-full h-full" src={imgGroup38289} />
            </button>
          </div>
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="px-4 mt-6">
        <div className="relative bg-[#ebffdf] h-[72px] rounded-lg overflow-hidden flex items-center">
          <div className="absolute right-0 top-0 bottom-0 w-[40%]">
            <img
              alt=""
              className="h-full w-full object-contain object-right"
              src={imgEc6D3B84011145AfBf87F8Fd7F27Dbf51}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5 pl-5 text-[#231815] text-sm tracking-[0.14px]">
            <p className="font-bold">割引プロモーション</p>
            <p>すぐに購入してください !</p>
          </div>
        </div>
      </div>

      {/* Ranking Section */}
      <div className="flex flex-col gap-4 px-4 mt-10 mb-6">
        <p className="font-bold text-[#231815] text-lg tracking-[0.18px]">
          日本ランキング商品
        </p>
        <div className="flex gap-3 overflow-x-auto">
          {/* Rank 1 */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[142px] h-[142px] rounded-lg overflow-hidden border-[1.5px] border-[#7b1cc1]">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={imgRectangle23844}
              />
              <div className="absolute top-0 left-0 bg-[#231815] w-5 h-5 flex items-center justify-center">
                <p className="font-bold text-xs text-white tracking-[0.12px]">1</p>
              </div>
            </div>
          </div>

          {/* Rank 2 */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[142px] h-[142px] rounded-lg overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={imgRectangle23845}
              />
              <div className="absolute top-0 left-0 bg-[#231815] w-5 h-5 flex items-center justify-center">
                <p className="font-bold text-xs text-white tracking-[0.12px]">2</p>
              </div>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[142px] h-[142px] rounded-lg overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={imgRectangle23846}
              />
              <div className="absolute top-0 left-0 bg-[#231815] w-5 h-5 flex items-center justify-center">
                <p className="font-bold text-xs text-white tracking-[0.12px]">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push bottom nav down */}
      <div className="flex-1" />

      {/* Bottom Navigation */}
      <div className="mt-auto">
        <div className="bg-white border-t border-[#f0f1f4] flex justify-around items-center py-4 px-6">
          <button className="w-6 h-6" aria-label="Home">
            <img alt="" className="w-full h-full" src={imgIcon} />
          </button>
          <button className="w-6 h-6" aria-label="Categories">
            <img alt="" className="w-full h-full" src={imgIcon1} />
          </button>
          <button className="w-6 h-6" aria-label="Special">
            <img alt="" className="w-full h-full" src={imgIcon2} />
          </button>
          <button className="w-6 h-6" aria-label="Favorites">
            <img alt="" className="w-full h-full" src={imgIcon3} />
          </button>
          <button className="w-6 h-6" aria-label="Profile">
            <img alt="" className="w-full h-full" src={imgIcon4} />
          </button>
        </div>
        <div className="bg-white h-[21px] w-full" />
      </div>
    </div>
  );
};

export default OliveHome;

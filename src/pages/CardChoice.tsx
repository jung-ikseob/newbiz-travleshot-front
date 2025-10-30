import { FC, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Card2Blue from "@/components/cards/Card2Blue";
import Card1Japanese from "@/components/cards/Card1Japanese";
import Card3Geometric from "@/components/cards/Card3Geometric";

const CardChoice: FC = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    slidesToScroll: 1,
    loop: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useState(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  });

  return (
    <div className="relative w-full min-h-screen bg-[#F1F3F5]">
      <div className="flex flex-col h-screen">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-16 left-3.5 z-10 hover:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.4824 3.03516L7.51758 12L16.4824 20.9648"
              stroke="#6B7583"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="px-5 pt-28 pb-4">
          <h1
            className="text-xl font-semibold text-[#191F28] leading-[120%]"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            원하는 카드 디자인을 선택해주세요
          </h1>
        </div>

        <div className="flex-1 flex items-start justify-center pt-12 overflow-hidden">
          <div className="w-full" ref={emblaRef}>
            <div className="flex gap-4 pl-[57.5px] pr-[57.5px]">
              <div className="flex-[0_0_260px] min-w-0">
                <Card2Blue />
              </div>
              <div className="flex-[0_0_260px] min-w-0">
                <Card1Japanese />
              </div>
              <div className="flex-[0_0_260px] min-w-0">
                <Card3Geometric />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 py-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-[9px] h-[9px] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#2063D2] focus:ring-offset-2"
              style={{
                backgroundColor: selectedIndex === index ? "#2063D2" : "#D9D9D9",
              }}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <div className="bg-white">
          <div className="px-5 py-4">
            <button
              onClick={() => navigate("/loading")}
              className="w-full h-[54px] bg-[#111] rounded flex items-center justify-center hover:bg-black transition-colors"
            >
              <span
                className="text-white text-base font-semibold leading-[150%]"
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                다음
              </span>
            </button>
          </div>
          <div className="h-[21px]"></div>
        </div>
      </div>
    </div>
  );
};

export default CardChoice;

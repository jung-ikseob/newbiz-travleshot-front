import { FC, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

// Card images
import card1 from '../assets/cards/card1.svg';
import card2 from '../assets/cards/card2.svg';
import card3 from '../assets/cards/card3.svg';

const CardChoice: FC = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    loop: false,
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const cards = [
    { id: 1, image: card1, alt: "Blue K-ID Card" },
    { id: 2, image: card2, alt: "Japanese Style K-ID Card" },
    { id: 3, image: card3, alt: "Geometric K-ID Card" },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-white">
      <div className="relative w-full min-h-screen max-w-[375px] mx-auto overflow-hidden bg-[#F1F3F5]">
        <div className="flex flex-col h-screen">
          {/* Back Button */}
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

          {/* Header */}
          <div className="px-5 pt-28 pb-4">
            <h1
              className="text-xl font-semibold text-[#191F28] leading-[120%]"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              원하는 카드 디자인을 선택해주세요
            </h1>
          </div>

          {/* Card Carousel */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div className="w-full overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="flex-[0_0_auto] min-w-0 pl-[30px] first:pl-[57.5px] last:pr-[57.5px]"
                    style={{
                      transform: selectedIndex === index ? 'scale(1)' : 'scale(0.85)',
                      transition: 'transform 0.3s ease-in-out',
                      opacity: selectedIndex === index ? 1 : 0.6
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-[260px] h-auto max-h-[500px] object-contain select-none"
                      draggable="false"
                      style={{
                        boxShadow: '0 0 34.667px 0 rgba(31, 33, 34, 0.20)',
                        borderRadius: '13.87px'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 py-8">
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => emblaApi?.scrollTo(index)}
                className="w-[9px] h-[9px] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#2063D2] focus:ring-offset-2"
                style={{
                  backgroundColor: selectedIndex === index ? "#2063D2" : "#D9D9D9",
                }}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          {/* Bottom Button */}
          <div className="bg-white">
            <div className="px-5 py-4">
              <button
                onClick={() => navigate(`/loading?cardId=${selectedIndex + 1}`)}
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
    </div>
  );
};

export default CardChoice;

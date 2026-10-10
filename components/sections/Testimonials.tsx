"use client";

import { Star } from "lucide-react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/site";
import { container } from "@/lib/utils";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-ink py-24 md:py-32">
      <div className={container}>
        <SectionHeading index="07" eyebrow="Sample reviews" title="In their words">
          A preview of how client praise will sit on the page. Replace these with real feedback before the site represents a working salon.
        </SectionHeading>

        <Swiper
          className="tgc-swiper mt-14"
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          speed={800}
          autoplay={{ delay: 5200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <figure className="flex h-full flex-col border-t border-gold/50 pt-8">
                <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className={index < review.rating ? "fill-gold text-gold" : "text-white/20"}
                    />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.25] text-ivory">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-8 text-[12px] uppercase tracking-[0.2em] text-mist">
                  <span className="text-ivory">{review.name}</span>
                  <span className="mx-3 text-gold">/</span>
                  {review.detail}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import Image from "next/image";
import { InstagramIcon } from "@/components/icons";
import { salon, socialPosts } from "@/lib/site";
import { container } from "@/lib/utils";

export function SocialGallery() {
  return (
    <section id="social" className="bg-charcoal py-24 md:py-32">
      <div className={container}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">09 — The journal</p>
            <h2 className="mt-4 font-serif text-[clamp(2.7rem,6vw,5rem)] leading-[0.9] text-ivory">From the chair</h2>
          </div>
          <a
            href={salon.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-ivory transition hover:text-gold"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow {salon.instagramHandle}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {socialPosts.map((post) => (
            <a
              key={post.src}
              href={salon.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(min-width: 768px) 30vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 text-ivory opacity-0 transition duration-500 group-hover:bg-charcoal/45 group-hover:opacity-100">
                <InstagramIcon className="h-7 w-7" />
                <span className="sr-only">View on Instagram</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

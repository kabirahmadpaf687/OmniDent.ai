"use client";
import { useEffect, useRef } from "react";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const position = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        position.current -= 3;
      } else {
        position.current += 3;
      }

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${position.current}px)`;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black" id="integrations">
      <div className=" overflow-hidden">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              ref={marqueeRef}
              className="flex items-center space-x-8 transition-transform duration-200 ease-linear"
            >
              {brandsData.concat(brandsData).map((brand) => (
                <SingleBrand key={brand.id + Math.random()} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-[250px] items-center justify-center py-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-[100px] opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 150px, 250px"
        />
      </a>
    </div>
  );
};

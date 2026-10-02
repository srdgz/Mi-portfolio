interface FrameProps {
  image: string;
  alt: string;
}

export const BrowserFrame = ({
  image,
  url,
  alt,
}: FrameProps & { url: string }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card shadow-2xl shadow-shadow/50">
      <div className="flex h-8 items-center gap-1.5 border-b border-line px-3">
        <span className="size-2.5 shrink-0 rounded-full bg-line"></span>
        <span className="size-2.5 shrink-0 rounded-full bg-line"></span>
        <span className="size-2.5 shrink-0 rounded-full bg-line"></span>
        <span className="ml-2 truncate rounded-full bg-base px-3 py-0.5 font-mono text-[11px] text-muted">
          {url}
        </span>
      </div>
      <div className="relative aspect-986/554 overflow-hidden bg-white">
        <img
          className="absolute top-[-28.34%] left-[-4.56%] w-[109.53%] max-w-none"
          src={image}
          alt={alt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const PhoneFrame = ({ image, alt }: FrameProps) => {
  return (
    <div className="overflow-hidden rounded-[18%/8.5%] border-4 border-black bg-black shadow-2xl ring-1 shadow-shadow/60 ring-line">
      <div className="relative aspect-356/776 overflow-hidden rounded-[15%/7%] bg-white">
        <img
          className="absolute top-[-19.59%] left-[-101.69%] w-[303.37%] max-w-none"
          src={image}
          alt={alt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

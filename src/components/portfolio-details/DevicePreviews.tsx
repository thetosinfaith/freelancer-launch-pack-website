import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

type Device = "phone" | "tablet" | "laptop";

const devices: Array<{ id: Device; label: string; width: number; height: number }> = [
  { id: "phone", label: "Mobile", width: 390, height: 844 },
  { id: "tablet", label: "Tablet", width: 820, height: 1180 },
  { id: "laptop", label: "Desktop", width: 1440, height: 900 },
];

function DevicePreview({ url, device }: { url: string; device: (typeof devices)[number] }) {
  const [failed, setFailed] = useState(false);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const frameRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) => setFrameSize({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);
  const scale = Math.min(frameSize.width / device.width, frameSize.height / device.height);
  const isLaptop = device.id === "laptop";

  return (
    <article className="min-w-0">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-700">
        <span>{device.label}</span>
        <span className="text-xs font-normal text-slate-500">{failed ? "Preview unavailable" : "Live preview"}</span>
      </div>
      <div className={`mx-auto w-full ${isLaptop ? "max-w-[560px]" : device.id === "tablet" ? "max-w-[340px]" : "max-w-[220px]"}`}>
        <div className={`relative rounded-[2rem] bg-[#171719] p-[9px] shadow-[0_22px_50px_-24px_rgba(15,23,42,.65)] ${isLaptop ? "rounded-t-2xl rounded-b-md pb-3" : ""}`}>
          {!isLaptop && <div className="absolute left-1/2 top-[11px] z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/70" />}
          <div
            ref={frameRef}
            className={`relative mx-auto overflow-hidden bg-white ${isLaptop ? "aspect-[16/10] rounded-t-lg" : device.id === "phone" ? "aspect-[390/844] rounded-[1.45rem]" : "aspect-[820/1180] rounded-[1.45rem]"}`}
          >
            {url && !failed ? (
              <iframe
                title={`${device.label} preview`}
                src={url}
                loading="lazy"
                referrerPolicy="no-referrer"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                className="absolute left-0 top-0 origin-top-left border-0"
                style={{ width: device.width, height: device.height, transform: `scale(${scale || 0.01})` }}
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-5 text-center text-sm text-slate-600">
                <p>This website blocks an embedded preview. Open it in a new tab to explore.</p>
                {url && <a className="inline-flex items-center gap-2 font-semibold text-pink-700 underline" href={url} target="_blank" rel="noreferrer">Open website <ExternalLink size={14} /></a>}
              </div>
            )}
          </div>
        </div>
        {isLaptop && <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-md" />}
      </div>
    </article>
  );
}

export function DevicePreviews({ url }: { url: string }) {
  let normalizedUrl = "";
  try {
    const parsed = new URL(url);
    if (["http:", "https:"].includes(parsed.protocol)) normalizedUrl = parsed.href;
  } catch { /* Invalid or absent URLs are omitted. */ }
  if (!normalizedUrl) return null;

  return (
    <section className="my-16 rounded-3xl bg-white/70 px-4 py-10 sm:px-8" aria-label="Responsive website previews">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-pink-700">Explore the website</p>
        <h2 className="font-heading text-2xl font-semibold text-slate-900 sm:text-3xl">See it on every screen</h2>
        <p className="mt-2 text-sm text-slate-600">Each preview is an independent, scrollable live website when the site allows embedding.</p>
      </div>
      <div className="mx-auto grid max-w-6xl items-end gap-8 md:grid-cols-3">
        {devices.map((device) => <DevicePreview key={device.id} url={normalizedUrl} device={device} />)}
      </div>
    </section>
  );
}

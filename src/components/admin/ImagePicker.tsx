import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type ImageValue = { src: string; alt: string };

export function ImagePicker({ label, value, onChange }: { label: string; value: ImageValue; onChange: (value: ImageValue) => void }) {
  const [images, setImages] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    let active = true;
    const loadLibrary = async () => {
      const allImages: string[] = [];
      let offset = 0;
      while (active) {
        const { data, error } = await supabase.storage.from("site-media").list("images", { limit: 100, offset, sortBy: { column: "created_at", order: "desc" } });
        if (error) { if (active) setStatus(`Image library unavailable: ${error.message}`); return; }
        const files = (data ?? []).filter((item) => item.id && item.name);
        allImages.push(...files.map((item) => supabase.storage.from("site-media").getPublicUrl(`images/${item.name}`).data.publicUrl));
        if (files.length < 100) break;
        offset += 100;
      }
      if (active) setImages(allImages);
    };
    void loadLibrary();
    return () => { active = false; };
  }, []);

  const upload = async (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(extension)) {
      setStatus("Use JPG, PNG, WEBP, GIF, or SVG.");
      return;
    }
    setStatus("Uploading...");
    const path = `images/${crypto.randomUUID()}.${extension}`;
    const { error } = await supabase.storage.from("site-media").upload(path, file, { contentType: file.type || "image/*", upsert: false });
    if (error) {
      setStatus(error.message);
      return;
    }
    const url = supabase.storage.from("site-media").getPublicUrl(path).data.publicUrl;
    setImages((current) => [...current, url]);
    onChange({ ...value, src: url });
    setStatus("Uploaded.");
  };

  return (
    <div className="space-y-3">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="flex flex-wrap items-center gap-3">
        {value.src ? (
          <div className="relative h-20 w-24 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <img src={value.src} alt={value.alt} className="h-full w-full object-contain" />
            <button type="button" className="absolute right-1 top-1 rounded-full bg-white p-1 text-slate-600 shadow" onClick={() => onChange({ ...value, src: "" })} aria-label={`Remove ${label}`}><X size={13} /></button>
          </div>
        ) : <div className="flex h-20 w-24 items-center justify-center rounded-xl border border-dashed border-slate-300 text-slate-400"><ImagePlus size={22} /></div>}
        <label className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-pink-400">
          Upload
          <input type="file" accept="image/*" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) void upload(file); event.currentTarget.value = ""; }} />
        </label>
      </div>
      <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900" placeholder="Paste an image URL" value={value.src} onChange={(event) => onChange({ ...value, src: event.target.value })} />
      <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900" placeholder="Image alt text" value={value.alt} onChange={(event) => onChange({ ...value, alt: event.target.value })} />
      {images.length > 0 && <div className="grid grid-cols-4 gap-2">{images.map((src) => <button type="button" key={src} className="h-14 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 hover:border-pink-500" onClick={() => onChange({ ...value, src })}><img src={src} alt="" className="h-full w-full object-contain" /></button>)}</div>}
      {status && <p className="text-xs text-slate-500">{status}</p>}
    </div>
  );
}

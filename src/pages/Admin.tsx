import { Children, cloneElement, FormEvent, isValidElement, ReactElement, ReactNode, useEffect, useState } from "react";
import { ChevronDown, ExternalLink, Eye, ImagePlus, LogOut, Plus, Save, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { defaultSiteContent } from "@/hooks/use-site-content";
import { ImagePicker } from "@/components/admin/ImagePicker";

const ADMIN_EMAIL = "hellotosinfaith@gmail.com";

const DEFAULT_CONTENT = {
  homepage: {
    ...defaultSiteContent.homepage,
  },
  about: {
    title: "Hi! I’m Tosin.",
    paragraphs: [
      "I’m a website designer and developer, but I do things differently. I hate jargon, I hate complicated technical words, and I offer a range of services to cater for brands at all stages of their journey.",
      "I work with ambitious brands & businesses on their websites materials. But what makes me unique? That would be my strong visual aesthetic that I always lean in to, I have a good eye for design and I know how to make things look fun, stylish, and still help you get more customers.",
      "My website design and dev process is simple: we work together to figure out exactly what your business needs before I do the BTS magic to make it come to life. Everything I do is collaborative, supportive and creative.",
    ],
    button: "SEE WHAT I'VE CREATED",
    image: "",
  },
  services: {
    title: "Services",
    intro: "Choose the website experience that fits where your business is right now.",
    packages: [
      { title: "Just Get Me Online", description: "A simple, clean website for when you just need to be online — fast." },
      { title: "Website Glow-Up", description: "Give your existing site a fresh, strategic new look you’ll love." },
      { title: "One-Day Website", description: "A premium one-day build experience to get you live fast." },
      { title: "The Shop & Sell", description: "A complete online storefront for your products and digital goods." },
    ],
  },
  speaking: {
    cards: [
      { title: "designer", description: "freelance dev with a wealth" },
      { title: "content creator", description: "creating meaningful and unique content for social & beyond" },
      { title: "designer", description: "mentorship opportunities for young up & coming stylists" },
    ],
    button: "go to portfolio",
    statement: "I work with ... and creators to deliver unique and striking websites.",
  },
  booking: {
    title: "Let's work together",
    description: "Tell me a little about your project and I’ll be in touch.",
    submitButton: "Send enquiry",
  },
  theme: { ...defaultSiteContent.theme },
  linksPage: {
    title: "Tosin Faith",
    subtitle: "Website designer, frontend developer, and website obsessed human.",
    hero: { image: "", alt: "Tosin Faith", position: "center 20%" },
    colors: { background: "#ffffff", card: "#ffcce6", fade: "#ffcce6" },
    links: [
      { text: "GET A BUSINESS WEBSITE TODAY", url: "/booking" },
      { text: "WEBSITE TEMPLATES - ONLY $15", url: "#" },
      { text: "LEARN TO BUILD A WEBSITE", url: "#" },
      { text: "FREE RESOURCES FOR DEVS", url: "#" },
      { text: "LAND YOUR FIRST INTERNSHIP", url: "https://selar.com/m/thetosinfaith" },
      { text: "HAVE A QUICK CHAT WITH ME", url: "https://wa.me/2348123539192" },
      { text: "DFY WEBSITE SETUP", url: "#" },
    ],
    socials: { tiktok: "", instagram: "", linkedin: "", mail: "", facebook: "", x: "" },
    backToWebsiteText: "Back to website",
    backToWebsiteUrl: "/",
  },
  portfolio: {
    title: "Selected work",
    projects: [
      { title: "Olhms Media", categories: ["BRANDING", "SOCIAL MEDIA", "PRINT"], image: "", link: "/portfolio/olhmsmedia", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Fostacomms", categories: ["BRANDING", "WEBSITE", "SOCIAL"], image: "", link: "/portfolio/fostacomms", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Rekora", categories: ["BRANDING", "WEBSITE"], image: "", link: "/portfolio/rekora", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Chopchop", categories: ["BRANDING", "WEBSITE", "SOCIAL"], image: "", link: "/portfolio/chopchop", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Real Desmond", categories: ["BRANDING", "WEBSITE"], image: "", link: "/portfolio/realdesmond", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "KindRaise", categories: ["BRANDING", "WEBSITE"], image: "", link: "/portfolio/kindraise", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
    ],
  },
  shared: {
    ...defaultSiteContent.shared,
  },
  ugc: defaultSiteContent.ugc,
};

type Content = typeof DEFAULT_CONTENT;
type PageKey = "homepage" | "about" | "services" | "speaking" | "booking" | "linksPage" | "portfolio" | "shared" | "ugc";

const pageDetails: Record<PageKey, { label: string; path: string; description: string }> = {
  homepage: { label: "Home page", path: "/", description: "Your first impression and main call to action." },
  about: { label: "About page", path: "/about", description: "Your introduction, story, and about image." },
  services: { label: "Services page", path: "/services", description: "Your service packages and descriptions." },
  speaking: { label: "Speaking page", path: "/speaking", description: "Your speaking and creator profile." },
  booking: { label: "Booking page", path: "/booking", description: "The wording visitors see before contacting you." },
  linksPage: { label: "Links page", path: "/links", description: "Your mobile links page and social buttons." },
  portfolio: { label: "Portfolio", path: "/portfolio", description: "Your projects, images, categories, and project links." },
  shared: { label: "Site-wide settings", path: "/", description: "Details used across the navigation, footer, and contact buttons." },
  ugc: { label: "UGC portfolio", path: "/ugc", description: "Your creator portfolio, services, rates, gallery, testimonials, and contact details." },
};

function TextField({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean }) {
  const className = "w-full rounded-xl border border-[#ead9e1] bg-[#fffafd] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-pink-200 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100/80";
  return <label className="admin-field block space-y-2"><span className="text-sm font-semibold text-slate-700">{label}</span>{multiline ? <textarea className={`${className} min-h-28 resize-y`} value={value} onChange={(event) => onChange(event.target.value)} /> : <input className={className} value={value} onChange={(event) => onChange(event.target.value)} />}</label>;
}

function DestinationField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  const external = /^https?:\/\//i.test(value);
  const routes = [{ label: "Home", path: "/" }, { label: "About", path: "/about" }, { label: "Services", path: "/services" }, { label: "Speaking", path: "/speaking" }, { label: "Booking", path: "/booking" }, { label: "Portfolio", path: "/portfolio" }, { label: "Links", path: "/links" }];
  return <div className="space-y-3"><label className="block space-y-2"><span className="text-sm font-semibold text-slate-700">{label} type</span><select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900" value={external ? "external" : "internal"} onChange={(event) => onChange(event.target.value === "external" ? "https://" : "/")}><option value="internal">Internal website page</option><option value="external">External URL</option></select></label>{external ? <TextField label={label} value={value} onChange={onChange} /> : <label className="block space-y-2"><span className="text-sm font-semibold text-slate-700">Choose a page</span><select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900" value={routes.some((route) => route.path === value) ? value : "/"} onChange={(event) => onChange(event.target.value)}>{routes.map((route) => <option key={route.path} value={route.path}>{route.label}</option>)}</select></label>}</div>;
}

function ReorderButtons({ index, length, onMove, onRemove }: { index: number; length: number; onMove: (direction: -1 | 1) => void; onRemove: () => void }) {
  return <div className="flex items-center gap-1"><button type="button" disabled={index === 0} onClick={() => onMove(-1)} className="rounded-lg border px-2 py-1 text-sm disabled:opacity-30" aria-label="Move item up">↑</button><button type="button" disabled={index === length - 1} onClick={() => onMove(1)} className="rounded-lg border px-2 py-1 text-sm disabled:opacity-30" aria-label="Move item down">↓</button><button type="button" onClick={onRemove} className="rounded-lg p-2 text-red-600 hover:bg-red-50" aria-label="Delete item"><Trash2 size={17} /></button></div>;
}

function ToggleField({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return <label className="flex items-center gap-2 text-sm font-medium text-slate-700"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-4 w-4 accent-pink-600" />{label}</label>;
}

function moveItem<T>(items: T[], index: number, direction: -1 | 1) {
  const next = index + direction;
  if (next < 0 || next >= items.length) return items;
  const result = [...items];
  [result[index], result[next]] = [result[next], result[index]];
  return result;
}

const linkRoutes = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Speaking", path: "/speaking" },
  { label: "Booking", path: "/booking" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Links", path: "/links" },
];

function ProjectManager({
  projects,
  title,
  onTitleChange,
  onProjectsChange,
}: {
  projects: Content["portfolio"]["projects"];
  title: string;
  onTitleChange: (value: string) => void;
  onProjectsChange: (projects: Content["portfolio"]["projects"]) => void;
}) {
  const addProject = () => onProjectsChange([...projects, {
    title: "New project", categories: ["WEBSITE"], image: "", link: "/portfolio/new-project",
    detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" },
  }]);
  const updateProject = (index: number, update: (project: Content["portfolio"]["projects"][number]) => Content["portfolio"]["projects"][number]) =>
    onProjectsChange(projects.map((project, itemIndex) => itemIndex === index ? update(project) : project));

  return <div className="project-manager">
    <div className="project-toolbar">
      <div><p className="text-[11px] font-bold uppercase tracking-[.13em] text-slate-500">Portfolio CMS</p><h3 className="mt-0.5 text-lg font-bold text-slate-900">Projects <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">{projects.length}</span></h3></div>
      <button type="button" className="project-add-button" onClick={addProject}><Plus size={16} /> Add Project</button>
    </div>
    <div className="project-section-title"><TextField label="Portfolio section title" value={title} onChange={onTitleChange} /></div>
    <div className="project-list">
      {projects.map((project, index) => {
        const hasWebsite = /^https?:\/\//i.test(project.detail.heroTag);
        return <details className="project-card" key={`${project.link}-${index}`}>
          <div className="project-card-topline">
            <summary className="project-card-summary">
              <span className="project-thumb">{project.image ? <img src={project.image} alt="" /> : <span>{project.title.slice(0, 2).toUpperCase()}</span>}</span>
              <span className="project-card-copy"><span className="project-card-name">{project.title || "Untitled project"}</span><span className="project-card-meta">{project.categories.slice(0, 2).join(" · ") || "No categories"}</span></span>
              <span className={`project-status ${hasWebsite ? "is-live" : "is-draft"}`}><i />{hasWebsite ? "Live preview" : "Draft"}</span>
              <ChevronDown className="project-chevron" size={16} />
            </summary>
            <div className="project-quick-actions">
              {hasWebsite && <a href={project.detail.heroTag} target="_blank" rel="noreferrer" className="project-icon-action" aria-label={`Open ${project.title} website`} title="Open website"><ExternalLink size={15} /></a>}
              <button type="button" className="project-icon-action is-delete" onClick={() => onProjectsChange(projects.filter((_, itemIndex) => itemIndex !== index))} aria-label={`Delete ${project.title}`} title="Delete project"><Trash2 size={15} /></button>
            </div>
          </div>
          <div className="project-card-settings">
            <div className="project-settings-heading"><div><span className="text-[10px] font-bold uppercase tracking-[.13em] text-pink-700">Project details</span><p className="mt-0.5 text-xs text-slate-500">Changes appear on the portfolio after saving.</p></div></div>
            <div className="project-core-fields">
              <TextField label="Project name" value={project.title} onChange={(value) => updateProject(index, (item) => ({ ...item, title: value }))} />
              <TextField label="Project page path" value={project.link} onChange={(value) => updateProject(index, (item) => ({ ...item, link: value }))} />
              <TextField label="Website URL" value={project.detail.heroTag} onChange={(value) => updateProject(index, (item) => ({ ...item, detail: { ...item.detail, heroTag: value } }))} />
              <TextField label="Thumbnail image URL" value={project.image} onChange={(value) => updateProject(index, (item) => ({ ...item, image: value }))} />
              <TextField label="Services / categories" value={project.categories.join(", ")} onChange={(value) => updateProject(index, (item) => ({ ...item, categories: value.split(",").map((category) => category.trim()).filter(Boolean) }))} />
            </div>
            <div className="project-copy-fields">
              <TextField label="Hero title" value={project.detail.heroTitle} onChange={(value) => updateProject(index, (item) => ({ ...item, detail: { ...item.detail, heroTitle: value } }))} />
              <TextField label="Hero subheading" value={project.detail.heroSubHeading} onChange={(value) => updateProject(index, (item) => ({ ...item, detail: { ...item.detail, heroSubHeading: value } }))} />
              <TextField label="Project description" value={project.detail.heroDescription} onChange={(value) => updateProject(index, (item) => ({ ...item, detail: { ...item.detail, heroDescription: value } }))} multiline />
            </div>
          </div>
        </details>;
      })}
      {!projects.length && <div className="project-empty"><span className="text-2xl">✳</span><p className="mt-2 font-semibold text-slate-800">Your project list is ready for its first entry.</p><p className="mt-1 text-xs text-slate-500">Add a project to start building your portfolio.</p></div>}
    </div>
  </div>;
}

function GuidedSections({ children }: { children: ReactNode }) {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const items = Children.toArray(children);
  const sections = items.filter((item) => isValidElement(item) && item.type === "details");
  const intro = items.filter((item) => !(isValidElement(item) && item.type === "details"));

  if (selectedSection !== null) {
    const section = sections[selectedSection];
    if (!isValidElement(section)) return null;
    const summary = Children.toArray((section.props as { children?: ReactNode }).children).find(
      (child) => isValidElement(child) && child.type === "summary",
    );
    const title = isValidElement(summary) ? (summary.props as { children?: ReactNode }).children : "Edit this section";

    return <div className="guided-editor">
      <button type="button" className="guided-back" onClick={() => setSelectedSection(null)}>← All homepage sections</button>
      <div className="guided-current-title"><span>Editing section {selectedSection + 1} of {sections.length}</span><h3>{title}</h3></div>
      {cloneElement(section as ReactElement<{ open?: boolean; className?: string }>, { open: true, className: "guided-section" })}
    </div>;
  }

  return <div className="guided-picker">
    <div className="guided-picker-heading"><span>HOME PAGE</span><h3>What would you like to change?</h3><p>Choose one area to work on. You can come back here any time.</p></div>
    {intro}
    <div className="guided-section-list">{sections.map((section, index) => {
      if (!isValidElement(section)) return null;
      const summary = Children.toArray((section.props as { children?: ReactNode }).children).find(
        (child) => isValidElement(child) && child.type === "summary",
      );
      const title = isValidElement(summary) ? (summary.props as { children?: ReactNode }).children : `Section ${index + 1}`;
      return <button className="guided-section-choice" key={index} type="button" onClick={() => setSelectedSection(index)}>
        <span className="guided-choice-title">{title}</span><span className="guided-choice-action" aria-hidden="true">›</span>
      </button>;
    })}</div>
  </div>;
}

function LinkEditorCard({
  item,
  index,
  onChange,
  onRemove,
}: {
  item: { text: string; url: string; icon?: string | null; imageIcon?: string };
  index: number;
  onChange: (item: { text: string; url: string; icon?: string | null; imageIcon?: string }) => void;
  onRemove: () => void;
}) {
  const isExternal = item.url.startsWith("http");
  const update = (changes: Partial<typeof item>) => onChange({ ...item, ...changes });

  return (
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="font-bold text-slate-900">Button {index + 1}</p>
        <button className="rounded-lg p-2 text-red-500 hover:bg-red-50" onClick={onRemove} aria-label={`Remove button ${index + 1}`}>
          <Trash2 size={17} />
        </button>
      </div>

      <TextField label="What should the button say?" value={item.text} onChange={(text) => update({ text })} />

      <div className="rounded-xl border border-slate-200 p-4">
        <p className="mb-3 text-sm font-semibold text-slate-700">Button image icon</p>
        <ImagePicker label="Upload or choose an image for this link" value={{ src: item.imageIcon ?? "", alt: item.text + " icon" }} onChange={(image) => update({ imageIcon: image.src })} />
      </div>

      <div className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">Where should it go?</span>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className={`rounded-xl border-2 px-4 py-3 text-left font-semibold transition ${!isExternal ? "border-pink-500 bg-pink-50 text-pink-700" : "border-slate-200 text-slate-600"}`}
            onClick={() => update({ url: "/" })}
          >
            <span className="block">A page on my website</span>
            <span className="mt-1 block text-xs font-normal text-slate-500">Home, About, Booking, Portfolio...</span>
          </button>
          <button
            type="button"
            className={`rounded-xl border-2 px-4 py-3 text-left font-semibold transition ${isExternal ? "border-pink-500 bg-pink-50 text-pink-700" : "border-slate-200 text-slate-600"}`}
            onClick={() => update({ url: "https://" })}
          >
            <span className="block">Another website</span>
            <span className="mt-1 block text-xs font-normal text-slate-500">For example, Selar or WhatsApp</span>
          </button>
        </div>
      </div>

      {!isExternal ? (
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-slate-700">Choose a page</span>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
            value={linkRoutes.some((route) => route.path === item.url) ? item.url : "/"}
            onChange={(event) => update({ url: event.target.value })}
          >
            {linkRoutes.map((route) => <option key={route.path} value={route.path}>{route.label}</option>)}
          </select>
        </label>
      ) : (
        <TextField label="Paste the website address" value={item.url} onChange={(url) => update({ url })} />
      )}
    </div>
  );
}

export default function Admin() {
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [sessionUserId, setSessionUserId] = useState<string | null>(null);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<Content>(DEFAULT_CONTENT);
  const [page, setPage] = useState<PageKey>("homepage");
  const [status, setStatus] = useState("");

  const uploadFont = async (type: "headingFontUrl" | "bodyFontUrl", file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !["woff2", "woff", "ttf", "otf"].includes(extension)) {
      setStatus("Please upload a WOFF2, WOFF, TTF, or OTF font file.");
      return;
    }

    const path = `fonts/${type}-${Date.now()}.${extension}`;
    setStatus("Uploading font...");
    const { error } = await supabase.storage.from("site-media").upload(path, file, {
      contentType: file.type || "font/woff2",
      upsert: false,
    });
    if (error) {
      setStatus(error.message);
      return;
    }

    const { data } = supabase.storage.from("site-media").getPublicUrl(path);
    updateTheme(type, data.publicUrl);
    setStatus("Font uploaded. Save changes to apply it site-wide.");
  };

  const updateTheme = (key: keyof Content["theme"], value: string) => {
    setContent((current) => ({ ...current, theme: { ...current.theme, [key]: value } }));
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSessionEmail(data.session?.user.email ?? null);
      setSessionUserId(data.session?.user.id ?? null);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSessionEmail(nextSession?.user.email ?? null);
      setSessionUserId(nextSession?.user.id ?? null);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!sessionEmail) return;
    supabase.from("site_content").select("content").eq("key", "site").maybeSingle().then(({ data, error }) => {
      if (error) setStatus(error.message);
      if (data?.content) {
        const saved = data.content as Partial<Content>;
        setContent({
          ...DEFAULT_CONTENT,
          ...saved,
          homepage: {
            ...DEFAULT_CONTENT.homepage,
            ...(saved.homepage ?? {}),
            visibility: { ...DEFAULT_CONTENT.homepage.visibility, ...(saved.homepage?.visibility ?? {}) },
            hero: { ...DEFAULT_CONTENT.homepage.hero, ...(saved.homepage?.hero ?? {}), image: { ...DEFAULT_CONTENT.homepage.hero.image, ...(saved.homepage?.hero?.imageManaged ? saved.homepage.hero.image : saved.homepage?.hero?.image?.src ? saved.homepage.hero.image : {}) }, imageManaged: saved.homepage?.hero?.imageManaged ?? false, proudLogosManaged: saved.homepage?.hero?.proudLogosManaged ?? false, proudLogos: (saved.homepage?.hero?.proudLogosManaged ? saved.homepage.hero.proudLogos : saved.homepage?.hero?.proudLogos?.length ? saved.homepage.hero.proudLogos : DEFAULT_CONTENT.homepage.hero.proudLogos).map((image) => ({ ...DEFAULT_CONTENT.homepage.hero.image, ...image })) },
            showcase: { ...DEFAULT_CONTENT.homepage.showcase, ...(saved.homepage?.showcase ?? {}), image: { ...DEFAULT_CONTENT.homepage.showcase.image, ...(saved.homepage?.showcase?.imageManaged ? saved.homepage.showcase.image : saved.homepage?.showcase?.image?.src ? saved.homepage.showcase.image : {}) }, imageManaged: saved.homepage?.showcase?.imageManaged ?? false, testimonialImage: { ...DEFAULT_CONTENT.homepage.showcase.testimonialImage, ...(saved.homepage?.showcase?.testimonialImage ?? {}) } },
            clients: { ...DEFAULT_CONTENT.homepage.clients, ...(saved.homepage?.clients ?? {}), image: { ...DEFAULT_CONTENT.homepage.clients.image, ...(saved.homepage?.clients?.image ?? {}) }, cards: saved.homepage?.clients?.cards ?? DEFAULT_CONTENT.homepage.clients.cards },
            promise: { ...DEFAULT_CONTENT.homepage.promise, ...(saved.homepage?.promise ?? {}), cards: saved.homepage?.promise?.cards ?? DEFAULT_CONTENT.homepage.promise.cards },
            brands: { ...DEFAULT_CONTENT.homepage.brands, ...(saved.homepage?.brands ?? {}), managed: true, items: (saved.homepage?.brands?.managed === true ? saved.homepage.brands.items : saved.homepage?.brands?.items?.length ? saved.homepage.brands.items : DEFAULT_CONTENT.homepage.brands.items).map((item) => ({ ...item, image: { ...DEFAULT_CONTENT.homepage.brands.items[0]?.image, ...item.image } })) },
            testimonials: { ...DEFAULT_CONTENT.homepage.testimonials, ...(saved.homepage?.testimonials ?? {}), items: (saved.homepage?.testimonials?.items ?? DEFAULT_CONTENT.homepage.testimonials.items).map((item) => ({ ...item, image: { ...DEFAULT_CONTENT.homepage.testimonials.items[0]?.image, ...item.image } })) },
            projects: { ...DEFAULT_CONTENT.homepage.projects, ...(saved.homepage?.projects ?? {}), items: (saved.homepage?.projects?.items ?? DEFAULT_CONTENT.homepage.projects.items).map((item, index) => { const fallback = DEFAULT_CONTENT.homepage.projects.items[index] ?? DEFAULT_CONTENT.homepage.projects.items[0]; return { ...fallback, ...item, image: { ...fallback.image, ...(item.imageManaged || item.image?.src ? item.image : {}) } }; }) },
          },
          about: { ...DEFAULT_CONTENT.about, ...(saved.about ?? {}) },
          services: { ...DEFAULT_CONTENT.services, ...(saved.services ?? {}) },
          speaking: { ...DEFAULT_CONTENT.speaking, ...(saved.speaking ?? {}) },
          booking: { ...DEFAULT_CONTENT.booking, ...(saved.booking ?? {}) },
          theme: { ...DEFAULT_CONTENT.theme, ...(saved.theme ?? {}) },
          linksPage: { ...DEFAULT_CONTENT.linksPage, ...(saved.linksPage ?? {}) },
          portfolio: {
            ...DEFAULT_CONTENT.portfolio,
            ...(saved.portfolio ?? {}),
            projects: (saved.portfolio?.projects ?? DEFAULT_CONTENT.portfolio.projects).map((project, index) => ({
              ...DEFAULT_CONTENT.portfolio.projects[index],
              ...project,
              detail: {
                ...DEFAULT_CONTENT.portfolio.projects[index]?.detail,
                ...(project.detail ?? {}),
              },
            })),
          },
          shared: {
            ...DEFAULT_CONTENT.shared, ...(saved.shared ?? {}),
            header: { ...DEFAULT_CONTENT.shared.header, ...(saved.shared?.header ?? {}), logo: { ...DEFAULT_CONTENT.shared.header.logo, ...(saved.shared?.header?.logoManaged || saved.shared?.header?.logo?.src ? saved.shared.header.logo : {}) }, logoManaged: saved.shared?.header?.logoManaged ?? false, links: saved.shared?.header?.links ?? DEFAULT_CONTENT.shared.header.links },
            footer: { ...DEFAULT_CONTENT.shared.footer, ...(saved.shared?.footer ?? {}), logo: { ...DEFAULT_CONTENT.shared.footer.logo, ...(saved.shared?.footer?.logoManaged || saved.shared?.footer?.logo?.src ? saved.shared.footer.logo : {}) }, logoManaged: saved.shared?.footer?.logoManaged ?? false, columns: (saved.shared?.footer?.columns ?? DEFAULT_CONTENT.shared.footer.columns).map((column) => ({ ...column, links: column.links ?? [] })), socials: saved.shared?.footer?.socials ?? DEFAULT_CONTENT.shared.footer.socials },
          },
          ugc: { ...DEFAULT_CONTENT.ugc, ...(saved.ugc ?? {}) },
        });
      }
    });
  }, [sessionEmail]);

  const signIn = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("");
    if (email.toLowerCase() !== ADMIN_EMAIL) {
      setStatus("Please use the owner email for this editor.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setStatus(error.message);
  };

  const saveContent = async () => {
    setStatus("Saving your changes...");
    const { error } = await supabase.from("site_content").upsert({
      key: "site",
      content,
      updated_by: sessionUserId,
      updated_at: new Date().toISOString(),
    });
    const linksResult = await supabase.from("page_configs").upsert(
      {
        slug: "links-page",
        config: content.linksPage,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "slug" },
    );
    setStatus(error?.message ?? linksResult.error?.message ?? "All changes saved.");
  };

  if (!sessionEmail) {
    return <main className="min-h-screen bg-slate-100 px-5 py-16 text-slate-900"><form onSubmit={signIn} className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-xl"><div className="mb-8"><div className="mb-4 inline-flex rounded-2xl bg-pink-100 p-3 text-pink-600"><ImagePlus /></div><h1 className="text-3xl font-bold">Your website editor</h1><p className="mt-2 text-slate-500">Make changes to your website without touching code.</p></div><div className="space-y-4"><TextField label="Email address" value={email} onChange={setEmail} /><TextField label="Password" value={password} onChange={setPassword} /><button className="w-full rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700" type="submit">Log in</button>{status && <p className="text-sm text-red-600">{status}</p>}</div></form></main>;
  }

  const updatePage = (next: Partial<Content[PageKey]>) => setContent({ ...content, [page]: { ...content[page], ...next } } as Content);

  return <main className="admin-shell min-h-screen bg-[#f6f1f4] text-slate-900">
    <header className="border-b border-pink-100 bg-white"><div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">Tosin Faith <span className="ml-2 rounded-full bg-pink-50 px-2 py-1 tracking-normal text-pink-700">STUDIO</span></p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Website editor</h1></div><div className="flex items-center gap-3"><a className="hidden rounded-lg border border-pink-200 bg-pink-50/60 px-4 py-2 text-sm font-semibold text-pink-800 transition hover:bg-pink-100 sm:block" href="/" target="_blank" rel="noreferrer"><Eye className="mr-2 inline h-4 w-4" />View website</a><button className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50" onClick={() => supabase.auth.signOut()} aria-label="Log out"><LogOut size={18} /></button></div></div></header>
    <div className="mx-auto grid max-w-[1440px] gap-6 px-6 py-8 lg:grid-cols-[210px_minmax(0,1fr)] xl:grid-cols-[210px_minmax(0,1fr)_360px]">
      <aside className="h-fit rounded-xl border border-slate-200 bg-white p-2"><p className="px-3 pb-3 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Edit pages</p>{(Object.keys(pageDetails) as PageKey[]).map((key) => <button key={key} onClick={() => setPage(key)} className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left transition ${page === key ? "bg-pink-50 text-pink-700" : "text-slate-600 hover:bg-slate-50"}`}><span className="block text-sm font-medium">{pageDetails[key].label}</span><span className="mt-0.5 block text-xs text-slate-400">{pageDetails[key].path}</span></button>)}</aside>
      <section className="admin-center min-w-0">
        <div className="admin-center-heading mb-3 flex items-end justify-between gap-4 px-2 py-2 sm:px-3"><div className="min-w-0"><p className="admin-breadcrumb">Website <span>pages</span> <b>›</b> Edit</p><h2 className="mt-3 truncate text-3xl font-black italic tracking-[-.05em] text-slate-950 sm:text-4xl">{pageDetails[page].label}</h2><p className="mt-2 max-w-2xl text-base text-slate-600">{pageDetails[page].description}</p></div><a className="admin-preview-action shrink-0" href={pageDetails[page].path} target="_blank" rel="noreferrer"><Eye className="mr-1.5 inline h-3.5 w-3.5" />View this page</a></div>
        <div className="admin-editor">
          <div className="admin-editor-intro"><div><p className="font-bold text-slate-900">Make a change to this page</p><p className="mt-1 text-base text-slate-600">Open a section, update its words or pictures, then choose <strong>Save changes</strong>.</p><p className="mt-1 text-base text-slate-600">You can save when ready.</p></div></div>
          {page === "homepage" && <GuidedSections>
            <p className="rounded-xl bg-pink-50 p-4 text-sm text-slate-600">Choose the part of your home page you want to update. Your changes appear on the website after you save.</p>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">Hero and header intro</summary><div className="space-y-5 border-t p-5">
              <ToggleField label="Show hero" checked={content.homepage.visibility.hero} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, hero: value } })} />
              <TextField label="Main heading" value={content.homepage.heroTitle} onChange={(value) => updatePage({ heroTitle: value })} multiline /><TextField label="Short introduction" value={content.homepage.heroDescription} onChange={(value) => updatePage({ heroDescription: value })} multiline />
              <ImagePicker label="Hero image" value={content.homepage.hero.image} onChange={(image) => updatePage({ hero: { ...content.homepage.hero, image, imageManaged: true } })} />
              <div className="grid gap-4 md:grid-cols-2"><TextField label="Main button text" value={content.homepage.primaryButton} onChange={(value) => updatePage({ primaryButton: value })} /><DestinationField label="Main button destination" value={content.homepage.primaryHref} onChange={(value) => updatePage({ primaryHref: value })} /><TextField label="Portfolio button text" value={content.homepage.secondaryButton} onChange={(value) => updatePage({ secondaryButton: value })} /><DestinationField label="Portfolio button destination" value={content.homepage.secondaryHref} onChange={(value) => updatePage({ secondaryHref: value })} /></div>
              <ToggleField label="Show proudly worked with logos" checked={content.homepage.hero.showBrands} onChange={(value) => updatePage({ hero: { ...content.homepage.hero, showBrands: value } })} />
              <TextField label="Proudly worked with heading" value={content.homepage.hero.proudlyWorkedWith} onChange={(value) => updatePage({ hero: { ...content.homepage.hero, proudlyWorkedWith: value } })} />
              <ToggleField label="Show brand counter" checked={content.homepage.hero.showCounter} onChange={(value) => updatePage({ hero: { ...content.homepage.hero, showCounter: value } })} /><TextField label="Brand counter text" value={content.homepage.hero.proudCounter} onChange={(value) => updatePage({ hero: { ...content.homepage.hero, proudCounter: value } })} />
              <div className="space-y-4">{content.homepage.hero.proudLogos.map((logo, index) => <div key={`${logo.alt}-${index}`} className="rounded-xl border p-4"><div className="mb-3 flex justify-end"><ReorderButtons index={index} length={content.homepage.hero.proudLogos.length} onMove={(direction) => updatePage({ hero: { ...content.homepage.hero, proudLogosManaged: true, proudLogos: moveItem(content.homepage.hero.proudLogos, index, direction) } })} onRemove={() => updatePage({ hero: { ...content.homepage.hero, proudLogosManaged: true, proudLogos: content.homepage.hero.proudLogos.filter((_, i) => i !== index) } })} /></div><ImagePicker label={`Brand logo ${index + 1}`} value={logo} onChange={(image) => updatePage({ hero: { ...content.homepage.hero, proudLogosManaged: true, proudLogos: content.homepage.hero.proudLogos.map((item, i) => i === index ? image : item) } })} /></div>)}</div><button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ hero: { ...content.homepage.hero, proudLogosManaged: true, proudLogos: [...content.homepage.hero.proudLogos, { src: "", alt: "New brand" }] } })}>+ Add hero logo</button>
            </div></details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">Featured project</summary><div className="space-y-5 border-t p-5">
              <ToggleField label="Show featured project" checked={content.homepage.visibility.showcase} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, showcase: value } })} />
              <TextField label="Badge" value={content.homepage.showcase.badge} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, badge: value } })} /><TextField label="Project name" value={content.homepage.showcase.projectTitle} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, projectTitle: value } })} /><TextField label="Category" value={content.homepage.showcase.category} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, category: value } })} /><TextField label="Client or business" value={content.homepage.showcase.client} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, client: value } })} /><TextField label="Project description" value={content.homepage.showcase.projectDescription} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, projectDescription: value } })} multiline /><ImagePicker label="Featured project image" value={content.homepage.showcase.image} onChange={(image) => updatePage({ showcase: { ...content.homepage.showcase, image, imageManaged: true } })} />
              <TextField label="Testimonial" value={content.homepage.showcase.quote} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, quote: value } })} multiline /><div className="grid gap-4 md:grid-cols-2"><TextField label="Testimonial author" value={content.homepage.showcase.testimonialAuthor} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, testimonialAuthor: value } })} /><TextField label="Author role" value={content.homepage.showcase.testimonialRole} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, testimonialRole: value } })} /></div><ImagePicker label="Testimonial profile image" value={content.homepage.showcase.testimonialImage} onChange={(image) => updatePage({ showcase: { ...content.homepage.showcase, testimonialImage: image } })} />
              <TextField label="Button text" value={content.homepage.showcase.button} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, button: value } })} /><DestinationField label="Button destination" value={content.homepage.showcase.href} onChange={(value) => updatePage({ showcase: { ...content.homepage.showcase, href: value } })} /><label className="block space-y-2 text-sm font-semibold text-slate-700">Button colour<input type="color" value={content.homepage.showcase.buttonColor} onChange={(event) => updatePage({ showcase: { ...content.homepage.showcase, buttonColor: event.target.value } })} className="block h-12 w-20 rounded border" /></label>
            </div></details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">Who I work with</summary><div className="space-y-5 border-t p-5"><ToggleField label="Show audience section" checked={content.homepage.visibility.clients} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, clients: value } })} /><TextField label="Section eyebrow" value={content.homepage.clients.eyebrow} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, eyebrow: value } })} /><TextField label="Section heading" value={content.homepage.clients.title} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, title: value } })} /><ImagePicker label="Center image" value={content.homepage.clients.image} onChange={(image) => updatePage({ clients: { ...content.homepage.clients, image } })} />
              {content.homepage.clients.cards.map((item, index) => <div key={`${item.title}-${index}`} className="space-y-3 rounded-2xl border p-4"><div className="flex items-center justify-between"><b>Audience card {index + 1}</b><ReorderButtons index={index} length={content.homepage.clients.cards.length} onMove={(direction) => updatePage({ clients: { ...content.homepage.clients, cards: moveItem(content.homepage.clients.cards, index, direction) } })} onRemove={() => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.filter((_, i) => i !== index) } })} /></div><ToggleField label="Show this card" checked={item.visible} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.map((card, i) => i === index ? { ...card, visible: value } : card) } })} /><TextField label="Title" value={item.title} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.map((card, i) => i === index ? { ...card, title: value } : card) } })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.map((card, i) => i === index ? { ...card, description: value } : card) } })} multiline /><TextField label="Button text" value={item.button} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.map((card, i) => i === index ? { ...card, button: value } : card) } })} /><DestinationField label="Button destination" value={item.href} onChange={(value) => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.map((card, i) => i === index ? { ...card, href: value } : card) } })} /><label className="flex items-center gap-3 text-sm font-semibold">Card colour<input type="color" value={item.color} onChange={(event) => updatePage({ clients: { ...content.homepage.clients, cards: content.homepage.clients.cards.map((card, i) => i === index ? { ...card, color: event.target.value } : card) } })} /></label></div>)}<button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ clients: { ...content.homepage.clients, cards: [...content.homepage.clients.cards, { title: "New audience", description: "Describe who this is for.", button: "Learn more", href: "/services", color: "#fce7f3", visible: true }] } })}>+ Add audience card</button>
            </div></details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">My promise</summary><div className="space-y-5 border-t p-5"><ToggleField label="Show promise section" checked={content.homepage.visibility.promise} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, promise: value } })} /><TextField label="Section eyebrow" value={content.homepage.promise.eyebrow} onChange={(value) => updatePage({ promise: { ...content.homepage.promise, eyebrow: value } })} /><TextField label="Section heading" value={content.homepage.promise.title} onChange={(value) => updatePage({ promise: { ...content.homepage.promise, title: value } })} />
              {content.homepage.promise.cards.map((item, index) => <div key={`${item.title}-${index}`} className="space-y-3 rounded-2xl border p-4"><div className="flex items-center justify-between"><b>Promise card {index + 1}</b><ReorderButtons index={index} length={content.homepage.promise.cards.length} onMove={(direction) => updatePage({ promise: { ...content.homepage.promise, cards: moveItem(content.homepage.promise.cards, index, direction) } })} onRemove={() => updatePage({ promise: { ...content.homepage.promise, cards: content.homepage.promise.cards.filter((_, i) => i !== index) } })} /></div><ToggleField label="Show this card" checked={item.visible} onChange={(value) => updatePage({ promise: { ...content.homepage.promise, cards: content.homepage.promise.cards.map((card, i) => i === index ? { ...card, visible: value } : card) } })} /><TextField label="Title" value={item.title} onChange={(value) => updatePage({ promise: { ...content.homepage.promise, cards: content.homepage.promise.cards.map((card, i) => i === index ? { ...card, title: value } : card) } })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ promise: { ...content.homepage.promise, cards: content.homepage.promise.cards.map((card, i) => i === index ? { ...card, description: value } : card) } })} multiline /><label className="flex items-center gap-3 text-sm font-semibold">Card colour<input type="color" value={item.color} onChange={(event) => updatePage({ promise: { ...content.homepage.promise, cards: content.homepage.promise.cards.map((card, i) => i === index ? { ...card, color: event.target.value } : card) } })} /></label></div>)}<button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ promise: { ...content.homepage.promise, cards: [...content.homepage.promise.cards, { title: "New promise", description: "Describe what clients can expect.", color: "#fce7f3", visible: true }] } })}>+ Add promise card</button>
            </div></details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">Happy brands I’ve worked with</summary><div className="space-y-5 border-t p-5"><ToggleField label="Show brands section" checked={content.homepage.visibility.brands} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, brands: value } })} /><TextField label="Eyebrow" value={content.homepage.brands.eyebrow} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, eyebrow: value } })} /><TextField label="Heading" value={content.homepage.brands.title} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, title: value } })} /><TextField label="Description" value={content.homepage.brands.description} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, description: value } })} multiline /><ToggleField label="Show brand counter" checked={content.homepage.brands.showCounter} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, showCounter: value } })} /><TextField label="Counter text" value={content.homepage.brands.counterText} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, counterText: value } })} />
              {content.homepage.brands.items.map((item, index) => <div key={`${item.name}-${index}`} className="space-y-3 rounded-xl border p-4"><div className="flex justify-end"><ReorderButtons index={index} length={content.homepage.brands.items.length} onMove={(direction) => updatePage({ brands: { ...content.homepage.brands, items: moveItem(content.homepage.brands.items, index, direction) } })} onRemove={() => updatePage({ brands: { ...content.homepage.brands, items: content.homepage.brands.items.filter((_, i) => i !== index) } })} /></div><TextField label="Brand name" value={item.name} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, items: content.homepage.brands.items.map((brand, i) => i === index ? { ...brand, name: value } : brand) } })} /><ImagePicker label="Brand logo" value={item.image} onChange={(image) => updatePage({ brands: { ...content.homepage.brands, items: content.homepage.brands.items.map((brand, i) => i === index ? { ...brand, image } : brand) } })} /><DestinationField label="Brand link" value={item.href} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, items: content.homepage.brands.items.map((brand, i) => i === index ? { ...brand, href: value } : brand) } })} /><ToggleField label="Show this brand" checked={item.visible} onChange={(value) => updatePage({ brands: { ...content.homepage.brands, items: content.homepage.brands.map((brand, i) => i === index ? { ...brand, visible: value } : brand) } })} /></div>)}<button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ brands: { ...content.homepage.brands, items: [...content.homepage.brands.items, { name: "New brand", image: { src: "", alt: "New brand logo" }, href: "", visible: true }] } })}>+ Add brand</button>
            </div></details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">Testimonials</summary><div className="space-y-5 border-t p-5"><ToggleField label="Show testimonials section" checked={content.homepage.visibility.testimonials} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, testimonials: value } })} /><TextField label="Eyebrow" value={content.homepage.testimonials.eyebrow} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, eyebrow: value } })} /><TextField label="Heading" value={content.homepage.testimonials.title} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, title: value } })} />
              {content.homepage.testimonials.items.map((item, index) => <div key={`${item.name}-${index}`} className="space-y-3 rounded-xl border p-4"><div className="flex items-center justify-between"><b>Testimonial {index + 1}</b><ReorderButtons index={index} length={content.homepage.testimonials.items.length} onMove={(direction) => updatePage({ testimonials: { ...content.homepage.testimonials, items: moveItem(content.homepage.testimonials.items, index, direction) } })} onRemove={() => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.filter((_, i) => i !== index) } })} /></div><ToggleField label="Show this testimonial" checked={item.visible} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.map((testimonial, i) => i === index ? { ...testimonial, visible: value } : testimonial) } })} /><TextField label="Name" value={item.name} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.map((testimonial, i) => i === index ? { ...testimonial, name: value, image: { ...testimonial.image, alt: value } } : testimonial) } })} /><TextField label="Role or business" value={item.role} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.map((testimonial, i) => i === index ? { ...testimonial, role: value } : testimonial) } })} /><TextField label="Tag" value={item.tag} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.map((testimonial, i) => i === index ? { ...testimonial, tag: value } : testimonial) } })} /><TextField label="Testimonial" value={item.quote} onChange={(value) => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.map((testimonial, i) => i === index ? { ...testimonial, quote: value } : testimonial) } })} multiline /><ImagePicker label="Profile picture" value={item.image} onChange={(image) => updatePage({ testimonials: { ...content.homepage.testimonials, items: content.homepage.testimonials.items.map((testimonial, i) => i === index ? { ...testimonial, image } : testimonial) } })} /></div>)}<button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ testimonials: { ...content.homepage.testimonials, items: [...content.homepage.testimonials.items, { name: "New client", role: "", tag: "", quote: "", image: { src: "", alt: "New client" }, visible: true }] } })}>+ Add testimonial</button>
            </div></details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-xl font-bold">Scrolling project showcase</summary><div className="space-y-5 border-t p-5"><ToggleField label="Show scrolling projects" checked={content.homepage.visibility.projects && content.homepage.projects.showSection} onChange={(value) => updatePage({ visibility: { ...content.homepage.visibility, projects: value }, projects: { ...content.homepage.projects, showSection: value } })} /><label className="block space-y-2"><span className="text-sm font-semibold">Project info behaviour</span><select className="w-full rounded-xl border p-3" value={content.homepage.projects.displayMode} onChange={(event) => updatePage({ projects: { ...content.homepage.projects, displayMode: event.target.value as "hover" | "always" | "click" } })}><option value="hover">Show on hover</option><option value="always">Always visible</option><option value="click">Show when clicked</option></select></label>
              {content.homepage.projects.items.map((item, index) => <div key={`${item.title}-${index}`} className="space-y-3 rounded-xl border p-4"><div className="flex items-center justify-between"><b>Project {index + 1}</b><ReorderButtons index={index} length={content.homepage.projects.items.length} onMove={(direction) => updatePage({ projects: { ...content.homepage.projects, items: moveItem(content.homepage.projects.items, index, direction) } })} onRemove={() => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.filter((_, i) => i !== index) } })} /></div><ToggleField label="Show this project" checked={item.visible} onChange={(value) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, visible: value } : project) } })} /><TextField label="Project name" value={item.title} onChange={(value) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, title: value, image: { ...project.image, alt: value } } : project) } })} /><TextField label="Category" value={item.category} onChange={(value) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, category: value } : project) } })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, description: value } : project) } })} multiline /><ImagePicker label="Project image" value={item.image} onChange={(image) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, image, imageManaged: true } : project) } })} /><TextField label="Button text" value={item.buttonText} onChange={(value) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, buttonText: value } : project) } })} /><DestinationField label="Button destination" value={item.href} onChange={(value) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, href: value } : project) } })} /><div className="flex flex-wrap gap-6"><label className="flex items-center gap-3 text-sm font-semibold">Card colour<input type="color" value={item.cardColor} onChange={(event) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, cardColor: event.target.value } : project) } })} /></label><label className="flex items-center gap-3 text-sm font-semibold">Button colour<input type="color" value={item.buttonColor} onChange={(event) => updatePage({ projects: { ...content.homepage.projects, items: content.homepage.projects.items.map((project, i) => i === index ? { ...project, buttonColor: event.target.value } : project) } })} /></label></div></div>)}<button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ projects: { ...content.homepage.projects, items: [...content.homepage.projects.items, { title: "New project", description: "", category: "", image: { src: "", alt: "New project" }, imageManaged: true, cardColor: "#fce7f3", buttonText: "View project", buttonColor: "#ec4899", href: "/portfolio", visible: true }] } })}>+ Add project</button>
            </div></details>
          </GuidedSections>}
          {page === "about" && <><h3 className="text-xl font-bold">Your introduction</h3><TextField label="Heading" value={content.about.title} onChange={(value) => updatePage({ title: value })} />{content.about.paragraphs.map((paragraph, index) => <TextField key={index} label={`Paragraph ${index + 1}`} value={paragraph} onChange={(value) => updatePage({ paragraphs: content.about.paragraphs.map((item, itemIndex) => itemIndex === index ? value : item) })} multiline />)}<TextField label="Portfolio button text" value={content.about.button} onChange={(value) => updatePage({ button: value })} /><TextField label="About image URL" value={content.about.image} onChange={(value) => updatePage({ image: value })} /></>}
          {page === "services" && <><h3 className="text-xl font-bold">Services introduction</h3><TextField label="Page heading" value={content.services.title} onChange={(value) => updatePage({ title: value })} /><TextField label="Short introduction" value={content.services.intro} onChange={(value) => updatePage({ intro: value })} multiline /><div className="space-y-4">{content.services.packages.map((item, index) => <div className="rounded-2xl border border-slate-200 p-4" key={index}><div className="mb-3 flex items-center justify-between"><h4 className="font-bold">Service {index + 1}</h4>{content.services.packages.length > 1 && <button className="text-red-500" onClick={() => updatePage({ packages: content.services.packages.filter((_, itemIndex) => itemIndex !== index) })}><Trash2 size={17} /></button>}</div><div className="space-y-3"><TextField label="Service name" value={item.title} onChange={(value) => updatePage({ packages: content.services.packages.map((packageItem, itemIndex) => itemIndex === index ? { ...packageItem, title: value } : packageItem) })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ packages: content.services.packages.map((packageItem, itemIndex) => itemIndex === index ? { ...packageItem, description: value } : packageItem) })} multiline /></div></div>)}</div><button className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ packages: [...content.services.packages, { title: "New service", description: "Describe this service." }] })}>+ Add service</button></>}
          {page === "speaking" && <><h3 className="text-xl font-bold">Speaking page</h3>{content.speaking.cards.map((item, index) => <div className="grid gap-4 rounded-2xl border border-slate-200 p-4 md:grid-cols-2" key={index}><TextField label={`Card ${index + 1} title`} value={item.title} onChange={(value) => updatePage({ cards: content.speaking.cards.map((card, cardIndex) => cardIndex === index ? { ...card, title: value } : card) })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ cards: content.speaking.cards.map((card, cardIndex) => cardIndex === index ? { ...card, description: value } : card) })} /></div>)}<TextField label="Button text" value={content.speaking.button} onChange={(value) => updatePage({ button: value })} /><TextField label="Main statement" value={content.speaking.statement} onChange={(value) => updatePage({ statement: value })} multiline /></>}
          {page === "booking" && <><h3 className="text-xl font-bold">Booking page</h3><TextField label="Heading" value={content.booking.title} onChange={(value) => updatePage({ title: value })} /><TextField label="Introduction" value={content.booking.description} onChange={(value) => updatePage({ description: value })} multiline /><TextField label="Button text" value={content.booking.submitButton} onChange={(value) => updatePage({ submitButton: value })} /></>}
          {page === "linksPage" && (
            <>
              <h3 className="text-xl font-bold">Links page</h3>
              <p className="rounded-xl bg-pink-50 p-4 text-sm text-slate-600">
                Add buttons to your page. Choose whether each one opens a page on your website or another website.
              </p>
              <TextField label="Name" value={content.linksPage.title} onChange={(value) => updatePage({ title: value })} />
              <TextField label="Description" value={content.linksPage.subtitle} onChange={(value) => updatePage({ subtitle: value })} multiline />
              <ImagePicker label="Links page profile image" value={{ src: content.linksPage.hero.image, alt: content.linksPage.hero.alt }} onChange={(image) => updatePage({ hero: { ...content.linksPage.hero, image: image.src, alt: image.alt } })} />
              <div className="space-y-4">
                {content.linksPage.links.map((item, index) => (
                  <LinkEditorCard
                    key={index}
                    item={item}
                    index={index}
                    onChange={(nextItem) => updatePage({ links: content.linksPage.links.map((link, linkIndex) => linkIndex === index ? { ...link, ...nextItem } : link) })}
                    onRemove={() => updatePage({ links: content.linksPage.links.filter((_, linkIndex) => linkIndex !== index) })}
                  />
                ))}
              </div>
              <button className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600 hover:bg-pink-50" onClick={() => updatePage({ links: [...content.linksPage.links, { text: "New button", url: "/" }] })}>
                + Add button
              </button>
            </>
          )}
          {page === "portfolio" && <ProjectManager projects={content.portfolio.projects} title={content.portfolio.title} onTitleChange={(title) => updatePage({ title })} onProjectsChange={(projects) => updatePage({ projects })} />}
          {page === "ugc" && <><h3 className="text-xl font-bold">UGC portfolio</h3><p className="rounded-xl bg-pink-50 p-4 text-sm text-slate-600">Everything on the UGC page can be updated here. Use image URLs from Supabase Storage for your photos and videos.</p><div className="grid gap-5 md:grid-cols-2"><TextField label="Navigation name" value={content.ugc.navName} onChange={(value) => updatePage({ navName: value })} /><TextField label="Hero image URL" value={content.ugc.hero.image} onChange={(value) => updatePage({ hero: { ...content.ugc.hero, image: value } })} /></div><TextField label="Hero name" value={content.ugc.hero.name} onChange={(value) => updatePage({ hero: { ...content.ugc.hero, name: value } })} /><TextField label="Hero title" value={content.ugc.hero.title} onChange={(value) => updatePage({ hero: { ...content.ugc.hero, title: value } })} /><TextField label="Hero description" value={content.ugc.hero.description} onChange={(value) => updatePage({ hero: { ...content.ugc.hero, description: value } })} multiline /><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">About section</h4><div className="space-y-4"><TextField label="Heading" value={content.ugc.about.heading} onChange={(value) => updatePage({ about: { ...content.ugc.about, heading: value } })} /><TextField label="Text" value={content.ugc.about.body} onChange={(value) => updatePage({ about: { ...content.ugc.about, body: value } })} multiline /><TextField label="Image URL" value={content.ugc.about.image} onChange={(value) => updatePage({ about: { ...content.ugc.about, image: value } })} /></div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Analytics section</h4><div className="space-y-4"><TextField label="Heading" value={content.ugc.analytics.heading} onChange={(value) => updatePage({ analytics: { ...content.ugc.analytics, heading: value } })} /><TextField label="Text" value={content.ugc.analytics.paragraphs.join("\n\n")} onChange={(value) => updatePage({ analytics: { ...content.ugc.analytics, paragraphs: value.split("\n\n") } })} multiline /><TextField label="Image URL" value={content.ugc.analytics.image} onChange={(value) => updatePage({ analytics: { ...content.ugc.analytics, image: value } })} /></div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Content niches</h4><div className="grid gap-4 md:grid-cols-2">{content.ugc.niches.map((item, index) => <div className="space-y-3 rounded-xl bg-slate-50 p-4" key={index}><TextField label={`Niche ${index + 1}`} value={item.label} onChange={(value) => updatePage({ niches: content.ugc.niches.map((niche, nicheIndex) => nicheIndex === index ? { ...niche, label: value } : niche) })} /><TextField label="Image URL" value={item.image} onChange={(value) => updatePage({ niches: content.ugc.niches.map((niche, nicheIndex) => nicheIndex === index ? { ...niche, image: value } : niche) })} /></div>)}</div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Services</h4><div className="space-y-4">{content.ugc.services.map((item, index) => <div className="space-y-3 rounded-xl bg-slate-50 p-4" key={index}><TextField label={`Service ${index + 1} name`} value={item.title} onChange={(value) => updatePage({ services: content.ugc.services.map((service, serviceIndex) => serviceIndex === index ? { ...service, title: value } : service) })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ services: content.ugc.services.map((service, serviceIndex) => serviceIndex === index ? { ...service, description: value } : service) })} multiline /><TextField label="Image URL" value={item.image} onChange={(value) => updatePage({ services: content.ugc.services.map((service, serviceIndex) => serviceIndex === index ? { ...service, image: value } : service) })} /></div>)}</div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Photography gallery</h4><TextField label="Heading" value={content.ugc.photography.heading} onChange={(value) => updatePage({ photography: { ...content.ugc.photography, heading: value } })} /><TextField label="Description" value={content.ugc.photography.description} onChange={(value) => updatePage({ photography: { ...content.ugc.photography, description: value } })} multiline /><div className="mt-4 grid gap-4 md:grid-cols-2">{content.ugc.photography.images.map((item, index) => <div className="space-y-3 rounded-xl bg-slate-50 p-4" key={index}><TextField label={`Photo ${index + 1} brand name`} value={item.brand} onChange={(value) => updatePage({ photography: { ...content.ugc.photography, images: content.ugc.photography.images.map((photo, photoIndex) => photoIndex === index ? { ...photo, brand: value } : photo) } })} /><TextField label="Image URL" value={item.image} onChange={(value) => updatePage({ photography: { ...content.ugc.photography, images: content.ugc.photography.images.map((photo, photoIndex) => photoIndex === index ? { ...photo, image: value } : photo) } })} /></div>)}</div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Rate cards</h4><div className="space-y-4">{content.ugc.rates.map((item, index) => <div className="space-y-3 rounded-xl bg-slate-50 p-4" key={index}><TextField label={`Rate ${index + 1} name`} value={item.title} onChange={(value) => updatePage({ rates: content.ugc.rates.map((rate, rateIndex) => rateIndex === index ? { ...rate, title: value } : rate) })} /><TextField label="Description" value={item.description} onChange={(value) => updatePage({ rates: content.ugc.rates.map((rate, rateIndex) => rateIndex === index ? { ...rate, description: value } : rate) })} multiline /><TextField label="Price" value={item.price} onChange={(value) => updatePage({ rates: content.ugc.rates.map((rate, rateIndex) => rateIndex === index ? { ...rate, price: value } : rate) })} /><TextField label="Features (one per line)" value={item.bullets.join("\n")} onChange={(value) => updatePage({ rates: content.ugc.rates.map((rate, rateIndex) => rateIndex === index ? { ...rate, bullets: value.split("\n") } : rate) })} multiline /></div>)}</div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Testimonials</h4><div className="space-y-4">{content.ugc.testimonials.map((item, index) => <div className="space-y-3 rounded-xl bg-slate-50 p-4" key={index}><TextField label="Name" value={item.name} onChange={(value) => updatePage({ testimonials: content.ugc.testimonials.map((testimonial, testimonialIndex) => testimonialIndex === index ? { ...testimonial, name: value } : testimonial) })} /><TextField label="Quote" value={item.quote} onChange={(value) => updatePage({ testimonials: content.ugc.testimonials.map((testimonial, testimonialIndex) => testimonialIndex === index ? { ...testimonial, quote: value } : testimonial) })} multiline /><TextField label="Image URL" value={item.image} onChange={(value) => updatePage({ testimonials: content.ugc.testimonials.map((testimonial, testimonialIndex) => testimonialIndex === index ? { ...testimonial, image: value } : testimonial) })} /></div>)}</div></div><div className="rounded-2xl border border-slate-200 p-5"><h4 className="mb-4 font-bold">Contact section</h4><div className="space-y-4"><TextField label="Heading" value={content.ugc.contact.heading} onChange={(value) => updatePage({ contact: { ...content.ugc.contact, heading: value } })} /><TextField label="Image URL" value={content.ugc.contact.image} onChange={(value) => updatePage({ contact: { ...content.ugc.contact, image: value } })} /><div className="grid gap-4 md:grid-cols-2"><TextField label="Email" value={content.ugc.contact.email} onChange={(value) => updatePage({ contact: { ...content.ugc.contact, email: value } })} /><TextField label="Phone number" value={content.ugc.contact.number} onChange={(value) => updatePage({ contact: { ...content.ugc.contact, number: value } })} /></div></div></div></>}
          {page === "shared" && <>
            <h3 className="text-xl font-bold">Site-wide settings</h3>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-lg font-bold">General settings</summary><div className="space-y-5 border-t p-5">
            <TextField label="Your name or business name" value={content.shared.brandName} onChange={(value) => updatePage({ brandName: value })} />
            <TextField label="Footer copyright text" value={content.shared.footerText} onChange={(value) => updatePage({ footerText: value })} />
            <TextField label="WhatsApp number" value={content.shared.whatsappNumber} onChange={(value) => updatePage({ whatsappNumber: value })} />
            <ToggleField label="Show WhatsApp contact button" checked={content.shared.showWhatsApp} onChange={(value) => updatePage({ showWhatsApp: value })} />
            <ToggleField label="Show header logo" checked={content.shared.header.showLogo} onChange={(value) => updatePage({ header: { ...content.shared.header, showLogo: value } })} />
            <ImagePicker label="Header logo" value={content.shared.header.logo} onChange={(logo) => updatePage({ header: { ...content.shared.header, logo, logoManaged: true } })} />
            <ImagePicker label="Footer logo" value={content.shared.footer.logo} onChange={(logo) => updatePage({ footer: { ...content.shared.footer, logo, logoManaged: true } })} />
            </div></details>
            <details className="rounded-2xl border border-slate-200">
              <summary className="cursor-pointer p-5 text-lg font-bold">Header and navigation</summary>
              <div className="space-y-4 border-t border-slate-100 p-5">
                <ToggleField label="Show navigation links" checked={content.shared.header.showNavigation} onChange={(value) => updatePage({ header: { ...content.shared.header, showNavigation: value } })} />
                <ToggleField label="Show call-to-action button" checked={content.shared.header.showCta} onChange={(value) => updatePage({ header: { ...content.shared.header, showCta: value } })} />
                <TextField label="Mobile menu email" value={content.shared.header.mobileEmail} onChange={(value) => updatePage({ header: { ...content.shared.header, mobileEmail: value } })} />
                <TextField label="Mobile menu message" value={content.shared.header.mobileTagline} onChange={(value) => updatePage({ header: { ...content.shared.header, mobileTagline: value } })} multiline />
                <TextField label="CTA text" value={content.shared.header.ctaText} onChange={(value) => updatePage({ header: { ...content.shared.header, ctaText: value } })} />
                <DestinationField label="CTA destination" value={content.shared.header.ctaHref} onChange={(value) => updatePage({ header: { ...content.shared.header, ctaHref: value } })} />
                {content.shared.header.links.map((link, index) => (
                  <div key={`${link.label}-${index}`} className="space-y-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between"><b>Navigation item {index + 1}</b><ReorderButtons index={index} length={content.shared.header.links.length} onMove={(direction) => updatePage({ header: { ...content.shared.header, links: moveItem(content.shared.header.links, index, direction) } })} onRemove={() => updatePage({ header: { ...content.shared.header, links: content.shared.header.links.filter((_, i) => i !== index) } })} /></div>
                    <ToggleField label="Show link" checked={link.visible !== false} onChange={(value) => updatePage({ header: { ...content.shared.header, links: content.shared.header.links.map((item, i) => i === index ? { ...item, visible: value } : item) } })} />
                    <TextField label="Label" value={link.label} onChange={(value) => updatePage({ header: { ...content.shared.header, links: content.shared.header.links.map((item, itemIndex) => itemIndex === index ? { ...item, label: value } : item) } })} />
                    <DestinationField label="Destination" value={link.href} onChange={(value) => updatePage({ header: { ...content.shared.header, links: content.shared.header.links.map((item, itemIndex) => itemIndex === index ? { ...item, href: value } : item) } })} />
                  </div>
                ))}
                <button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ header: { ...content.shared.header, links: [...content.shared.header.links, { label: "New link", href: "/" }] } })}>+ Add navigation link</button>
              </div>
            </details>
            <details className="rounded-2xl border border-slate-200">
              <summary className="cursor-pointer p-5 text-lg font-bold">Footer</summary>
              <div className="space-y-5 border-t border-slate-100 p-5">
                <ToggleField label="Show footer contact information" checked={content.shared.footer.showContact} onChange={(value) => updatePage({ footer: { ...content.shared.footer, showContact: value } })} />
                <TextField label="Contact information" value={content.shared.footer.contact} onChange={(value) => updatePage({ footer: { ...content.shared.footer, contact: value } })} multiline />
                <TextField label="WhatsApp label" value={content.shared.footer.whatsappLabel} onChange={(value) => updatePage({ footer: { ...content.shared.footer, whatsappLabel: value } })} />
                {content.shared.footer.columns.map((column, columnIndex) => (
                  <div key={`${column.heading}-${columnIndex}`} className="space-y-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-end gap-3">
                      <div className="flex-1"><TextField label="Column heading" value={column.heading} onChange={(value) => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, heading: value } : item) } })} /></div>
                      <ReorderButtons index={columnIndex} length={content.shared.footer.columns.length} onMove={(direction) => updatePage({ footer: { ...content.shared.footer, columns: moveItem(content.shared.footer.columns, columnIndex, direction) } })} onRemove={() => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.filter((_, itemIndex) => itemIndex !== columnIndex) } })} />
                    </div>
                    {column.links.map((link, linkIndex) => (
                      <div key={`${link.label}-${linkIndex}`} className="space-y-3 rounded-lg border border-slate-200 p-3">
                        <div className="flex justify-end"><ReorderButtons index={linkIndex} length={column.links.length} onMove={(direction) => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, links: moveItem(item.links, linkIndex, direction) } : item) } })} onRemove={() => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, links: item.links.filter((_, entryIndex) => entryIndex !== linkIndex) } : item) } })} /></div>
                        <TextField label="Link label" value={link.label} onChange={(value) => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, links: item.links.map((entry, entryIndex) => entryIndex === linkIndex ? { ...entry, label: value } : entry) } : item) } })} />
                        <ToggleField label="Show link" checked={link.visible !== false} onChange={(value) => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, links: item.links.map((entry, entryIndex) => entryIndex === linkIndex ? { ...entry, visible: value } : entry) } : item) } })} />
                        <DestinationField label="Destination" value={link.href} onChange={(value) => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, links: item.links.map((entry, entryIndex) => entryIndex === linkIndex ? { ...entry, href: value } : entry) } : item) } })} />
                      </div>
                    ))}
                    <button type="button" className="rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm font-semibold text-slate-600" onClick={() => updatePage({ footer: { ...content.shared.footer, columns: content.shared.footer.columns.map((item, itemIndex) => itemIndex === columnIndex ? { ...item, links: [...item.links, { label: "New link", href: "/" }] } : item) } })}>+ Add footer link</button>
                  </div>
                ))}
                <button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ footer: { ...content.shared.footer, columns: [...content.shared.footer.columns, { heading: "New column", links: [] }] } })}>+ Add footer column</button>
                <div className="space-y-3">
                  <h4 className="font-bold">Social links</h4>
                  {content.shared.footer.socials.map((social, index) => <div key={`${social.label}-${index}`} className="space-y-3 rounded-xl bg-slate-50 p-4"><div className="flex items-center justify-between"><b>Social link {index + 1}</b><ReorderButtons index={index} length={content.shared.footer.socials.length} onMove={(direction) => updatePage({ footer: { ...content.shared.footer, socials: moveItem(content.shared.footer.socials, index, direction) } })} onRemove={() => updatePage({ footer: { ...content.shared.footer, socials: content.shared.footer.socials.filter((_, i) => i !== index) } })} /></div><ToggleField label="Show social link" checked={social.visible} onChange={(value) => updatePage({ footer: { ...content.shared.footer, socials: content.shared.footer.socials.map((item, i) => i === index ? { ...item, visible: value } : item) } })} /><TextField label="Name" value={social.label} onChange={(value) => updatePage({ footer: { ...content.shared.footer, socials: content.shared.footer.socials.map((item, itemIndex) => itemIndex === index ? { ...item, label: value } : item) } })} /><DestinationField label="URL" value={social.href} onChange={(value) => updatePage({ footer: { ...content.shared.footer, socials: content.shared.footer.socials.map((item, itemIndex) => itemIndex === index ? { ...item, href: value } : item) } })} /></div>)}
                  <button type="button" className="rounded-xl border border-dashed border-pink-300 px-4 py-3 font-semibold text-pink-600" onClick={() => updatePage({ footer: { ...content.shared.footer, socials: [...content.shared.footer.socials, { label: "New social", href: "https://", visible: true }] } })}>+ Add social link</button>
                </div>
              </div>
            </details>
            <details className="rounded-2xl border border-slate-200"><summary className="cursor-pointer p-5 text-lg font-bold">Colours and typography</summary><div className="space-y-5 border-t p-5">
              <div className="grid gap-5 sm:grid-cols-2"><label className="block space-y-2 text-sm font-semibold text-slate-700">Primary colour<input type="color" value={content.theme.primaryColor} onChange={(event) => updateTheme("primaryColor", event.target.value)} className="block h-12 w-20 rounded border" /></label><label className="block space-y-2 text-sm font-semibold text-slate-700">Accent colour<input type="color" value={content.theme.accentColor} onChange={(event) => updateTheme("accentColor", event.target.value)} className="block h-12 w-20 rounded border" /></label></div>
              <div>
                <h4 className="font-bold">Site-wide fonts</h4>
                <p className="mt-1 text-sm text-slate-500">Upload font files once and they will be used for headings and body text across the site.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {([
                  ["headingFontUrl", "Heading font"],
                  ["bodyFontUrl", "Paragraph/body font"],
                ] as const).map(([key, label]) => (
                  <label className="block space-y-2" key={key}>
                    <span className="text-sm font-semibold text-slate-700">{label}</span>
                    <input
                      type="file"
                      accept=".woff2,.woff,.ttf,.otf"
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) void uploadFont(key, file);
                      }}
                    />
                    {content.theme[key] && <p className="truncate text-xs text-emerald-600">Uploaded and ready to save</p>}
                  </label>
                ))}
              </div>
            </div></details>
          </>}
          <div className="sticky bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-pink-200 bg-gradient-to-r from-[#fff0f7] via-white to-[#fff4ec] p-4 shadow-[0_10px_35px_-24px_rgba(190,24,93,.7)]"><span className="text-sm font-medium text-slate-600">{status || "Your edits are ready when you are."}</span><button className="rounded-xl bg-gradient-to-r from-pink-600 to-[#d82382] px-5 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:shadow-pink-300" onClick={saveContent}><Save className="mr-2 inline h-4 w-4" />Save changes</button></div>
        </div>
      </section>
      <aside className="hidden xl:block">
        <div className="sticky top-6 overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_18px_55px_-40px_rgba(190,24,93,.55)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <div><p className="text-sm font-semibold">Preview</p><p className="text-xs text-slate-400">{pageDetails[page].path}</p></div>
            <Eye className="h-4 w-4 text-slate-400" />
          </div>
          <div className="bg-slate-100 p-3">
            <iframe title={`${pageDetails[page].label} preview`} src={pageDetails[page].path} className="h-[620px] w-full rounded-lg border border-slate-200 bg-white" />
          </div>
          <p className="px-4 py-3 text-xs leading-relaxed text-slate-400">Preview shows the last saved version. Save changes to update it.</p>
        </div>
      </aside>
    </div>
  </main>;
}

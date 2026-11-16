import { ArrowDownRight, ArrowUpLeft, Instagram } from 'lucide-react';

const brands = ['glossier', 'summer fridays', 'rhode', 'OUAI', 'LULULEMON', 'rare beauty'];

function LandscapeBubble({ className = '' }: { className?: string }) {
  return (
    <div className={`ugc-landscape-bubble ${className}`} aria-hidden="true">
      <span className="ugc-bubble-sky" />
      <span className="ugc-bubble-hill" />
      <span className="ugc-bubble-glint" />
    </div>
  );
}

function UGCNavigation() {
  return (
    <nav className="absolute left-1/2 top-7 z-10 flex -translate-x-1/2 items-center rounded bg-[#292929]/90 px-1 py-1 text-[10px] font-semibold uppercase tracking-[.08em] text-white shadow-sm sm:left-[max(2rem,calc((100%-80rem)/2))] sm:translate-x-0">
      <a className="rounded px-3 py-1.5 transition-colors hover:bg-white/15" href="#services">Services</a>
      <a className="rounded px-3 py-1.5 transition-colors hover:bg-white/15" href="#portfolio">Portfolio</a>
      <a className="rounded px-3 py-1.5 transition-colors hover:bg-white/15" href="#contact">Inquire</a>
    </nav>
  );
}

const videoWork = [
  ['photo-1534528741775-53994a69daeb', 'Beauty routine'],
  ['photo-1524504388940-b1c1722653e1', 'Get ready with me'],
  ['photo-1608248543803-ba4f8c70ae0b', 'Product review'],
  ['photo-1529139574466-a303027c1d8b', 'Summer essentials'],
  ['photo-1529139574466-a303027c1d8b', 'Outfit transition'],
  ['photo-1539109136881-3be0616acf4b', 'Style edit'],
  ['photo-1529139574466-a303027c1d8b', 'Everyday beauty'],
  ['photo-1534528741775-53994a69daeb', 'Skincare story'],
];

const photoWork = [
  ['photo-1490645935967-10de6ba17061', 'Morning ritual'],
  ['photo-1608571423902-eed4a5ad8108', 'Skincare launch'],
  ['photo-1608248543803-ba4f8c70ae0b', 'Beauty details'],
  ['photo-1523293182086-7651a899d37f', 'Coffee moment'],
  ['photo-1608248543803-ba4f8c70ae0b', 'Clean beauty'],
  ['photo-1529139574466-a303027c1d8b', 'Weekend edit'],
  ['photo-1608571423902-eed4a5ad8108', 'Product flatlay'],
  ['photo-1523293182086-7651a899d37f', 'Daily essentials'],
];

function ContentGallery({ kind, items }: { kind: 'video' | 'photo'; items: string[][] }) {
  const isVideo = kind === 'video';
  return (
    <section className={`ugc-work-section ${isVideo ? 'ugc-work-dark' : 'ugc-work-pink'}`}>
      <div className="mx-auto w-full max-w-5xl">
        <header className="ugc-work-heading">
          <h2><span>{isVideo ? 'VIDEO' : 'PHOTO'}</span> <em>content</em></h2>
          <div className="ugc-heading-rule"><span>PAID SOCIAL & ORGANIC<br />CONCEPTS FOR BRANDS</span></div>
        </header>
        <div className="ugc-gallery-grid">
          {items.map(([image, title], index) => (
            <article className="ugc-gallery-card" key={`${title}-${index}`}>
              <div className={`ugc-gallery-image ${isVideo ? 'ugc-video-image' : ''}`}>
                <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=85`} alt={title} loading="lazy" />
                {isVideo && <span className="ugc-play-icon" aria-hidden="true">▶</span>}
              </div>
              <h3>Client Name</h3>
              <p>{title} · {isVideo ? 'Short form video' : 'Lifestyle photography'}<br />Created for social media and brand storytelling.</p>
            </article>
          ))}
        </div>
        <div className="ugc-subheading-rule"><span>PERSONAL, LIFESTYLE AND<br />CAMPAIGN CREATIVE</span></div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section className="ugc-analytics">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 sm:grid-cols-[.8fr_1.2fr] sm:gap-12">
        <div className="text-center sm:text-left">
          <h2 className="font-serif text-4xl leading-[.88] tracking-[-.06em] sm:text-6xl">Analytics<br /><span className="font-sans text-[.54em] font-extrabold tracking-[-.04em]">Metrics</span></h2>
          <p className="mt-4 text-[10px] leading-relaxed text-white/75 sm:text-xs">I use insights to make thoughtful, data-driven decisions. From audience demographics to content performance, every campaign is shaped by what connects with viewers and helps brands grow.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="ugc-chart-card"><h3>Audience</h3><div className="ugc-pie-chart" /><div className="ugc-chart-legend"><span>Women 72%</span><span>Men 28%</span></div></div>
          <div className="ugc-chart-card"><h3>Engagement</h3><div className="ugc-bars"><i /><i /><i /><i /><i /></div><div className="ugc-axis-labels"><span>Jan</span><span>May</span><span>Sep</span></div></div>
          <div className="ugc-chart-card"><h3>Reach</h3><svg viewBox="0 0 120 100" className="ugc-line-chart" role="img" aria-label="Reach trend rising over time"><path d="M8 15H115M8 40H115M8 65H115M8 90H115"/><polyline points="9,18 30,35 49,28 68,58 84,67 103,84 114,87" /></svg><div className="ugc-axis-labels"><span>Jan</span><span>May</span><span>Sep</span></div></div>
        </div>
      </div>
    </section>
  );
}

export default function UGCPortfolio() {
  return (
    <main className="ugc-page text-[#212121]">
      <section className="ugc-intro relative min-h-[420px] overflow-hidden px-5 pb-10 pt-24 sm:min-h-[510px] sm:pt-28">
        <UGCNavigation />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center sm:items-start sm:text-left">
          <div className="w-full sm:max-w-[760px]">
            <p className="mb-1 text-xs font-medium uppercase tracking-[.32em] text-[#76646a]">UGC creator · lifestyle & beauty</p>
            <h1 className="font-serif text-[clamp(4.5rem,12vw,9.5rem)] leading-[.76] tracking-[-.075em] text-[#171315]">
              Victoria
              <span className="block pl-8 font-sans text-[.47em] font-extrabold uppercase leading-[1.12] tracking-[-.065em] text-[#f28e9e] sm:pl-14">Newson</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[330px] text-[13px] leading-[1.55] text-[#51494b] sm:mx-0 sm:mt-7 sm:max-w-[370px] sm:text-sm">
              UGC creator passionate about crafting engaging content and building brand communities. Let’s put your brand in the spotlight.
            </p>
            <a href="#contact" className="mt-5 inline-flex rounded-md bg-[#343032] px-6 py-2 text-xs font-medium text-white shadow-md transition-transform hover:-translate-y-0.5">Contact me</a>
          </div>
          <div className="pointer-events-none absolute -right-12 bottom-0 hidden h-[90%] w-[39%] rounded-t-[48%] bg-gradient-to-b from-white/45 to-[#f4c5d3]/20 blur-xl sm:block" />
        </div>
      </section>

      <section id="services" className="bg-gradient-to-r from-[#242426] via-[#373638] to-[#272729] px-5 py-6 text-white shadow-[inset_0_5px_12px_rgba(0,0,0,.15)] sm:py-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-4">
          {[
            ['75K', 'Instagram\nFollowers'], ['25K', 'TikTok\nFollowers'], ['150K', 'TikTok\nLikes'], ['85%', 'Earned\nSaves'],
          ].map(([value, label]) => <div key={value} className="text-center">
            <p className="font-serif text-4xl leading-none tracking-[-.06em] sm:text-5xl">{value}</p>
            <p className="mt-1 whitespace-pre-line text-[10px] leading-tight text-white/75 sm:text-xs">{label}</p>
          </div>)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf8] px-5 py-12 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:grid-cols-[1fr_1fr] sm:gap-12">
          <div className="relative mx-auto flex min-h-[310px] w-full max-w-[490px] items-center justify-center sm:min-h-[420px]">
            <LandscapeBubble className="absolute left-[4%] top-[4%] w-[19%]" />
            <LandscapeBubble className="absolute left-[36%] top-0 w-[22%]" />
            <LandscapeBubble className="absolute right-[3%] top-[12%] w-[19%]" />
            <LandscapeBubble className="absolute left-0 top-[39%] w-[19%]" />
            <LandscapeBubble className="absolute right-0 top-[45%] w-[20%]" />
            <LandscapeBubble className="absolute bottom-[3%] left-[5%] w-[19%]" />
            <LandscapeBubble className="absolute bottom-0 right-[7%] w-[19%]" />
            <div className="relative z-[1] w-[68%] pt-5 text-center">
              <h2 className="font-serif text-[clamp(2.2rem,7vw,4.8rem)] leading-[.78] tracking-[-.055em]">Partner to</h2>
              <p className="font-sans text-[clamp(1rem,3vw,1.7rem)] font-extrabold uppercase leading-tight tracking-[-.04em] text-[#f28e9e]">global brands</p>
              <div className="relative mx-auto mt-3 h-[148px] w-[150px] overflow-hidden rounded-t-[42%] bg-gradient-to-b from-[#f8a1bc] to-[#e76e91] sm:h-[220px] sm:w-[214px]">
                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=85" alt="Pink handbag" className="h-full w-full object-cover object-center mix-blend-multiply" />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[510px] text-center sm:text-left">
            <p className="text-sm leading-[1.75] text-[#454143] sm:text-base">I’ve worked with a range of global brands, including small start-ups all the way to household names. My goal is always to create authentic, high-quality content that feels like a natural extension of your brand.</p>
            <p className="mt-4 text-sm leading-[1.75] text-[#454143] sm:text-base">My experience spans multiple industries, including fashion, beauty, lifestyle, food, travel, and beyond.</p>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">
              {brands.map((brand) => <span key={brand} className="self-center font-serif text-lg font-semibold tracking-tight text-[#4b4546] sm:text-xl">{brand}</span>)}
            </div>
            <a href="#portfolio" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#ef7296]">See my case studies <ArrowDownRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-gradient-to-b from-[#303033] to-[#1e1e20] px-5 py-12 text-white sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:grid-cols-[.85fr_1.15fr] sm:gap-16">
          <div className="max-w-[420px] text-center sm:text-right">
            <h2 className="font-serif text-5xl leading-[.78] tracking-[-.06em] sm:text-7xl">Case<br /><span className="font-sans text-[.58em] font-extrabold uppercase tracking-[-.04em]">Study</span></h2>
            <h3 className="mt-5 text-sm font-semibold tracking-wide sm:text-base">Brand Name</h3>
            <p className="mt-2 text-xs leading-[1.65] text-white/70 sm:ml-auto sm:max-w-[340px]">I created an end-to-end integrated strategy campaign featuring engaging storytelling, clear messaging, and creative visuals to support brand growth across social and digital channels.</p>
            <ul className="mt-4 space-y-1 text-[10px] font-medium text-white/80 sm:text-xs">
              <li>+ 50K followers</li><li>+ 325K Reels views</li><li>+ 10K posts shared</li>
            </ul>
          </div>
          <div className="relative mx-auto grid w-full max-w-[650px] grid-cols-[.83fr_1fr] items-center gap-3 sm:gap-5">
            <div className="relative z-[1] aspect-[.57] overflow-hidden rounded-[22px] border-[3px] border-[#191a1d] bg-[#9fe4f0] shadow-[0_8px_24px_rgba(0,0,0,.4)] sm:rounded-[28px] sm:border-4">
              <div className="absolute inset-x-0 top-[9%] flex justify-center"><span className="h-10 w-20 rounded-full bg-white/90 blur-[1px] after:absolute after:ml-10 after:mt-2 after:h-8 after:w-14 after:rounded-full after:bg-white/90" /></div>
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-[#a6c53d] to-[#51721e]" />
              <div className="absolute inset-x-0 bottom-[24%] h-[28%] rounded-[50%] bg-[#8dac28]" />
            </div>
            <div className="grid gap-3 sm:gap-5">
              {[0, 1].map((item) => <div key={item} className="relative aspect-[1.18] overflow-hidden border-2 border-[#171719] bg-gradient-to-b from-[#9de3f2] via-[#d8f6f8] to-[#f7fbf3] shadow-[0_5px_18px_rgba(0,0,0,.25)]">
                <span className="absolute left-[48%] top-[12%] h-4 w-10 rounded-full bg-white/90 after:absolute after:-left-3 after:top-1 after:h-4 after:w-7 after:rounded-full after:bg-white/90" />
                <span className="absolute -bottom-[11%] left-[-8%] h-[46%] w-[120%] rounded-[50%] bg-[#9dbd31]" />
                <span className="absolute -bottom-[22%] left-[-8%] h-[48%] w-[120%] rounded-[50%] bg-[#587927]" />
              </div>)}
            </div>
            <ArrowUpLeft className="absolute -left-5 top-[25%] hidden -rotate-12 text-[#ff67ae] sm:block" size={42} strokeWidth={2.5} />
          </div>
        </div>
      </section>

      <ContentGallery kind="video" items={videoWork} />
      <ContentGallery kind="photo" items={photoWork} />
      <AnalyticsSection />

      <section id="contact" className="bg-[#f7e9ed] px-5 py-12 text-center sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-serif text-4xl tracking-tight sm:text-6xl">Let’s make something lovely.</p>
          <a href="mailto:hello@victorianewson.com" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#302c2e] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"><Instagram size={16} /> Inquire about a project</a>
        </div>
      </section>
    </main>
  );
}

import type { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Heart,
  Instagram,
  Menu,
  Plane,
  Play,
  Shirt,
  Sparkles,
} from "lucide-react";

const image = (id: string, width = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const work = [
  ["photo-1534528741775-53994a69daeb", "Beauty", "GRWM · skincare routine"],
  ["photo-1524504388940-b1c1722653e1", "Lifestyle", "A day in my life"],
  ["photo-1529139574466-a303027c1d8b", "Fashion", "Three ways to style it"],
  ["photo-1608248543803-ba4f8c70ae0b", "Beauty", "Honest product review"],
  ["photo-1515886657613-9f3515b0c78f", "Fashion", "Weekend uniform"],
  ["photo-1544005313-94ddf0286df2", "Lifestyle", "Little everyday rituals"],
];

const services = [
  [
    "UGC video",
    "Natural, creator-led videos that make your product part of a real routine.",
  ],
  [
    "Paid social",
    "Scroll-stopping ad creative with hooks, variations, and clear calls to action.",
  ],
  [
    "Product photography",
    "Warm, considered product images for your socials, site, and campaigns.",
  ],
];

const niches = [
  { label: "Beauty", Icon: Sparkles },
  { label: "Fashion", Icon: Shirt },
  { label: "Skincare", Icon: Heart },
  { label: "Wellness", Icon: Heart },
  { label: "Lifestyle", Icon: Camera },
  { label: "Travel", Icon: Plane },
];

function SectionTitle({
  eyebrow,
  children,
  light = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-8 text-center ${light ? "text-white" : "text-[#2c2729]"}`}
    >
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[.28em] text-[#ee69aa]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-none tracking-[-.055em] sm:text-6xl">
        {children}
      </h2>
    </div>
  );
}

export default function SerenithPortfolio() {
  return (
    <main className="serenith-page text-[#292426]">
      <section className="relative overflow-hidden bg-[#fff9ed] px-5 pb-8 pt-16 sm:min-h-[610px] sm:pt-24">
        <nav className="absolute left-0 right-0 top-0 z-20 border-b border-[#2a2525]/10 bg-[#fff9ed]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <a
              href="#home"
              className="text-[10px] font-extrabold uppercase tracking-[.12em]"
            >
              Serenith Valeria
            </a>
            <div className="hidden items-center gap-7 text-[10px] font-bold uppercase tracking-wide sm:flex">
              <a href="#work">My work</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#collaborate">Collaborate</a>
            </div>
            <a
              href="#collaborate"
              aria-label="Collaborate"
              className="sm:hidden"
            >
              <Menu size={20} />
            </a>
          </div>
        </nav>
        <div
          id="home"
          className="relative mx-auto grid min-h-[490px] max-w-7xl items-center gap-4 sm:grid-cols-[1.1fr_.9fr]"
        >
          <div className="relative z-10 py-8 text-center sm:text-left">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[.28em]">
              Creator · lifestyle · beauty
            </p>
            <h1 className="serenith-display text-[clamp(4.6rem,13vw,10rem)] leading-[.72] tracking-[-.075em] text-[#fa79b8]">
              SERENITH
            </h1>
            <p className="serenith-script -mt-1 ml-1 text-5xl leading-none text-[#32292c] sm:ml-16 sm:text-7xl">
              Valeria
            </p>
            <p className="mx-auto mt-4 max-w-[330px] text-xs leading-relaxed sm:mx-0 sm:text-sm">
              Helping brands create authentic content that connects, converts,
              and builds lasting trust.
            </p>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[.18em]">
              UGC creator · lifestyle · beauty
            </p>
            <div className="mt-5 flex justify-center gap-3 sm:justify-start">
              <a
                href="#work"
                aria-label="Instagram"
                className="rounded bg-[#32292c] p-1.5 text-white"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#work"
                aria-label="Watch videos"
                className="rounded bg-[#32292c] p-1.5 text-white"
              >
                <Play size={14} />
              </a>
              <a
                href="#work"
                aria-label="TikTok"
                className="rounded bg-[#32292c] p-1.5 text-white"
              >
                <span className="text-xs font-black">♪</span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-[320px] w-full max-w-[420px] self-end sm:h-[530px]">
            <div className="absolute inset-x-[-30%] bottom-0 h-[38%] rounded-[50%] bg-gradient-to-t from-[#fb8dc2] to-[#ffd3e6]" />
            <img
              src={image("photo-1534528741775-53994a69daeb", 900)}
              alt="Serenith Valeria, UGC creator"
              className="absolute inset-0 h-full w-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
            />
            <span className="absolute bottom-6 right-0 rounded-full bg-white/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider">
              Let’s create together
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#292729] px-5 py-10 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:grid-cols-[.8fr_1.2fr] sm:gap-14">
          <img
            src={image("photo-1524504388940-b1c1722653e1", 650)}
            alt="Serenith on set"
            className="mx-auto aspect-[.8] w-full max-w-[300px] rounded-md border-4 border-white/80 object-cover"
          />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#f67eb7]">
              A little about me
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-6xl">
              Hi, I’m Valeria
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              I’m a UGC creator specializing in lifestyle, beauty, wellness, and
              product storytelling. My passion is creating authentic, relatable
              content that helps brands connect with their audience naturally.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              Every piece of content is designed to feel genuine while
              supporting real marketing goals—from increasing engagement to
              driving conversions.
            </p>
            <div className="mt-7 grid max-w-lg grid-cols-3 gap-3">
              {[
                ["3+", "Years creating"],
                ["50+", "Brands worked with"],
                ["12M+", "Total views"],
              ].map(([n, label]) => (
                <div key={label}>
                  <strong className="font-serif text-3xl text-[#ff8ac2] sm:text-4xl">
                    {n}
                  </strong>
                  <p className="mt-1 text-[10px] text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f7a7d0] via-[#fff2e4] to-[#fff8ed] px-5 py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[.8fr_1.2fr] sm:items-center">
          <div>
            <SectionTitle eyebrow="The community">
              My Audience
              <br />
              at a Glance
            </SectionTitle>
            <div className="mx-auto max-w-sm divide-y divide-[#2c2729] border-y border-[#2c2729] text-xs font-semibold">
              {[
                ["78%", "Female"],
                ["18–34", "Age range"],
                ["55%", "United States"],
                ["5.4%", "Avg. engagement"],
              ].map(([n, label]) => (
                <div key={label} className="flex justify-between py-2">
                  <span>{n}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-[500px] grid-cols-2 items-center gap-5">
            <div className="serenith-pie" />
            <div className="space-y-3 text-[10px] font-semibold">
              {[
                ["#ee78b5", "United States", "55%"],
                ["#d9768a", "Canada", "15%"],
                ["#f2ac6c", "Australia", "5%"],
                ["#ffc1d9", "United Kingdom", "25%"],
              ].map(([color, name, pct]) => (
                <div key={name} className="flex items-center gap-2">
                  <i
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: color }}
                  />
                  <span>{name}</span>
                  <span className="ml-auto">{pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#292729] px-5 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-8 text-center">
            <h2 className="serenith-display text-[clamp(3.3rem,10vw,7.5rem)] leading-none tracking-[-.05em] text-[#fa79b8]">
              CONTENT NICHES
            </h2>
            <p className="serenith-script absolute right-[8%] top-[55%] rotate-[-8deg] text-4xl text-white sm:right-[20%] sm:text-6xl">
              Create
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {niches.map(({ label, Icon }) => (
              <a
                href="#services"
                key={label}
                className="flex items-center gap-3 rounded-sm border border-white/60 bg-[#f780ba] px-3 py-3 font-extrabold uppercase tracking-wide text-[#292729] shadow-[0_3px_0_#fff] transition-transform hover:-translate-y-1 sm:px-6 sm:py-4"
              >
                <Icon size={19} />
                <span className="text-xs sm:text-base">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#fff8ed] px-5 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="How I can help">Services</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {services.map(([title, text], i) => (
              <article
                key={title}
                className="grid grid-cols-[.7fr_1fr] items-center gap-3 border border-[#e8d8d7] bg-white p-3 shadow-sm"
              >
                <img
                  src={image(
                    [
                      "photo-1608248543803-ba4f8c70ae0b",
                      "photo-1529139574466-a303027c1d8b",
                      "photo-1490645935967-10de6ba17061",
                    ][i],
                    350,
                  )}
                  alt=""
                  className="aspect-square w-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-extrabold uppercase text-[#e75d9f]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-relaxed">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="bg-[#302d30] px-5 py-10 text-white sm:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="A few recent favorites" light>
            Featured{" "}
            <span className="serenith-script text-[#fa8ac0]">content</span>
          </SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {work.map(([src, title, desc]) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-lg border border-white/50"
              >
                <img
                  src={image(src, 550)}
                  alt={title}
                  loading="lazy"
                  className="aspect-[.77] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-3 pt-10">
                  <p className="text-[9px] uppercase tracking-wider text-[#ff8fc3]">
                    {title}
                  </p>
                  <h3 className="mt-1 text-xs font-semibold">{desc}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#fff8ed] px-5 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Kind words">Collaborations</SectionTitle>
          <div className="grid grid-cols-2 overflow-hidden border border-[#343034] sm:grid-cols-4">
            {[
              "GLOW RECIPE",
              "LANEIGE",
              "OUAI",
              "rhode",
              "Rare Beauty",
              "Summer Fridays",
              "e.l.f.",
              "OLAPLEX",
            ].map((brand) => (
              <div
                key={brand}
                className="border-b border-r border-[#343034]/30 bg-[#f9b4d6] px-3 py-4 text-center font-serif text-sm font-bold sm:py-7 sm:text-lg"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#302d30] px-5 py-10 text-white sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Made to perform" light>
            Content that{" "}
            <span className="serenith-script text-[#fa8ac0]">converts</span>
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div className="grid grid-cols-2 gap-3">
              {work.slice(0, 4).map(([src, title]) => (
                <img
                  key={title}
                  src={image(src, 380)}
                  alt={title}
                  loading="lazy"
                  className="aspect-square w-full rounded object-cover"
                />
              ))}
            </div>
            <div className="space-y-4">
              {[
                [
                  "Scroll-stopping hooks",
                  "Capture attention in the first seconds.",
                ],
                [
                  "Authentic storytelling",
                  "Build connection with creator-first narratives.",
                ],
                [
                  "Made for your goals",
                  "Creative designed to drive meaningful action.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="border-b border-white/30 pb-3">
                  <h3 className="font-serif text-xl text-[#ff8fc3]">{t}</h3>
                  <p className="mt-1 text-xs text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7a7d0] px-5 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Simple and flexible">
            Partnerships
          </SectionTitle>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["STARTER", "$350", "1 short-form video", "3 edited photos"],
              ["GROWTH", "$650", "2 short-form videos", "5 edited photos"],
              [
                "CAMPAIGN",
                "$1,200",
                "4 short-form videos",
                "Usage-ready variations",
              ],
            ].map(([name, price, a, b]) => (
              <article
                key={name}
                className="border border-[#342e31] bg-[#fff8ed] p-4 text-center shadow-[4px_4px_0_#302d30]"
              >
                <p className="text-[10px] font-extrabold tracking-[.2em]">
                  {name}
                </p>
                <p className="my-2 font-serif text-3xl">{price}</p>
                <div className="space-y-2 border-y border-[#342e31]/30 py-3 text-xs">
                  <p>{a}</p>
                  <p>{b}</p>
                  <p>Organic social usage</p>
                </div>
                <a
                  href="#collaborate"
                  className="mt-3 inline-block rounded-full bg-[#f47bb5] px-4 py-2 text-[10px] font-bold uppercase"
                >
                  Choose package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collaborate" className="bg-[#fff8ed] px-5 py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[#e6d9d2] bg-white shadow-md sm:grid-cols-2">
          <div className="bg-gradient-to-br from-[#fff1e8] via-[#ffe7f0] to-[#f78cbd] p-7 sm:p-12">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#de5e9d]">
              Have a good one in mind?
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-6xl">
              Let’s create
              <br />
              together
            </h2>
            <a
              href="mailto:hello@serenithvaleria.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#302d30] px-5 py-3 text-xs font-bold uppercase text-white"
            >
              Start a project <ArrowUpRight size={15} />
            </a>
          </div>
          <form
            className="space-y-3 p-6 sm:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-serif text-2xl">Tell me about your project</h3>
            <input
              aria-label="Your name"
              placeholder="Your name"
              className="w-full border-b border-[#bfb4b3] bg-transparent py-2 text-xs outline-none focus:border-[#e75d9f]"
            />
            <input
              aria-label="Email address"
              type="email"
              placeholder="Email address"
              className="w-full border-b border-[#bfb4b3] bg-transparent py-2 text-xs outline-none focus:border-[#e75d9f]"
            />
            <textarea
              aria-label="Project details"
              placeholder="A little about what you have in mind…"
              rows={3}
              className="w-full resize-none border-b border-[#bfb4b3] bg-transparent py-2 text-xs outline-none focus:border-[#e75d9f]"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-[#f47bb5] px-5 py-2.5 text-xs font-bold uppercase"
            >
              Send inquiry <ArrowDownRight size={14} />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#302d30] px-5 py-6 text-center text-white">
        <p className="serenith-script text-3xl text-[#ff8fc3]">
          Serenith Valeria
        </p>
        <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/60">
          Creating with intention · © 2025
        </p>
      </footer>
    </main>
  );
}

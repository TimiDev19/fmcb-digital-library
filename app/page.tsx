"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  CircleHelp,
  FileText,
  GalleryVerticalEnd,
  GraduationCap,
  HeartPulse,
  LibraryBig,
  LogOut,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { books, courses, journals, pictures, Resource } from "./helpers";

type Tab = "home" | "books" | "courses" | "journals" | "pictures";
const nav: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: "home", label: "Home", icon: LibraryBig },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "courses", label: "Course Materials", icon: GraduationCap },
  { id: "journals", label: "Journals", icon: FileText },
  { id: "pictures", label: "Pictures", icon: GalleryVerticalEnd },
];

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      href={resource.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-50 sm:h-72">
        <img
          src={resource.image}
          alt=""
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102e28]/35 to-transparent" />
        {/* <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#135245]">
          {resource.category}
        </span> */}
      </div>
      <div className="p-4">
        <p className="text-base font-bold leading-snug text-[#15342c]">
          {resource.title}
        </p>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {resource.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#167159]">
          <span>{resource.year ?? "Open gallery"}</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </motion.a>
  );
}

function FolderCard({
  title,
  description,
  category,
  count,
  image,
  index,
  onClick,
}: {
  title: string;
  description: string;
  category: string;
  count: string;
  image: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      onClick={onClick}
      className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-50 sm:h-72">
        <img
          src={image}
          alt=""
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102e28]/35 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#135245]">
          {category}
        </span>
      </div>
      <div className="p-4">
        <p className="text-base font-bold leading-snug text-[#15342c]">
          {title}
        </p>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#167159]">
          <span>{count}</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </motion.button>
  );
}

export default function Home() {
  const [active, setActive] = useState<Tab>("home");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [courseId, setCourseId] = useState<string | null>(null);
  const [weekId, setWeekId] = useState<string | null>(null);
  const all = useMemo(() => [...books, ...journals, ...pictures], []);
  const selected =
    active === "books"
      ? books
      : active === "courses"
      ? []
      : active === "journals"
      ? journals
      : active === "pictures"
      ? pictures
      : books.slice(0, 3);
  const shown = search
    ? all.filter((x) =>
        `${x.title} ${x.description} ${x.category}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : selected;
  const label =
    active === "home"
      ? "Featured resources"
      : active === "courses"
      ? "Course Materials"
      : active[0].toUpperCase() + active.slice(1);
  const choose = (tab: Tab) => {
    setActive(tab);
    setCourseId(null);
    setWeekId(null);
    setOpen(false);
    setSearch("");
  };
  return (
    <main className="min-h-[100dvh] bg-[#f5f7f4] lg:flex">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-[#06241e]/45 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[18rem] flex-col bg-white px-5 py-6 shadow-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-[100dvh] lg:translate-x-0 lg:shadow-none ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-2">
          <div className="grid size-11 place-items-center rounded-2xl bg-[#e1f4df] text-[#126149]">
            <HeartPulse size={23} />
          </div>
          <div>
            <p className="text-[10px] font-extrabold tracking-[.15em] text-[#4e7d6a]">
              FEDERAL MEDICAL CENTRE
            </p>
            <p className="text-lg font-extrabold tracking-tight text-[#12372e]">
              BIDA
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-slate-400 lg:hidden"
          >
            <X />
          </button>
        </div>
        <div className="mx-2 mt-9 rounded-[1.35rem] bg-[#eff8ef] p-4">
          <p className="text-xs font-bold text-[#397260]">
            Your learning space
          </p>
          <p className="mt-1 text-sm leading-snug text-[#173d33]">
            Knowledge for healthier communities.
          </p>
        </div>
        <nav className="mt-8 space-y-1">
          {nav.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => choose(id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${
                active === id
                  ? "bg-[#0f4a3e] text-white shadow-lg shadow-[#0f4a3e]/20"
                  : "text-[#557067] hover:bg-[#eff6f0] hover:text-[#125543]"
              }`}
            >
              <Icon size={18} strokeWidth={2.25} />
              {label}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <div className="rounded-[1.4rem] bg-[#113e35] p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#addbb9]">
                  Library collection
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {books.length +
                    journals.length +
                    pictures.length +
                    courses.reduce(
                      (total, course) =>
                        total +
                        course.weeks.reduce(
                          (weekTotal, week) => weekTotal + week.files.length,
                          0
                        ),
                      0
                    )}
                  <span className="ml-1 text-sm font-medium text-[#b5d5bd]">
                    resources
                  </span>
                </p>
              </div>
              <BookOpen className="text-[#b5da6a]" />
            </div>
            <button
              onClick={() => choose("courses")}
              className="mt-4 flex items-center gap-1 text-xs font-bold text-[#d8f3dc] hover:text-white"
            >
              Explore library <ChevronRight size={14} />
            </button>
          </div>
          <button className="mt-5 flex w-full items-center cursor-pointer gap-3 px-4 py-3 text-sm font-bold text-[#658178] hover:text-[#b23f39]">
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>
      <section className="main-surface grain min-h-screen flex-1 overflow-hidden">
        <header className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <button
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center rounded-xl bg-white/10 text-[#008C7A] ring-1 ring-white/20 lg:hidden"
          >
            <Menu />
          </button>
          <div className=" items-center gap-2 text-sm font-semibold text-[#006B3F] flex">
            <GraduationCap size={19} />
            Department of Community Health, Federal Medical Centre Bida.
          </div>
          {/* <button className="grid size-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
            <CircleHelp size={20} />
          </button> */}
        </header>
        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[.075] px-6 py-10 text-white shadow-2xl backdrop-blur-sm sm:px-10 sm:py-12"
          >
            <div className="absolute -right-16 -top-20 size-72 rounded-full border-[28px] border-[#b3dc77]/15" />
            <p className="relative text-xs font-bold uppercase tracking-[.22em] text-[#008C7A]">
              digital library
            </p>
            <h1 className="display-font relative mt-3 max-w-3xl text-black text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">
              Discover. Learn.
              <br />
              Advance{" "}
              <em className="font-normal text-[#008C7A]">Public Health.</em>{" "}
              {/* communities. */}
            </h1>
            <p className="relative mt-5 max-w-xl text-base leading-relaxed text-[#008C7A]">
              A comprehensive digital repository advancing public health through
              accessible data, peer-reviewed literature, and community wellness
              initiatives
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3 cursor-pointer">
              <button
                onClick={() => choose("books")}
                className="rounded-xl bg-[#008C7A] px-5 py-3 text-sm font-bold text-[#fff] hover:text-[#008C7A] duration-500 cursor-pointer transition hover:bg-[#008C7A]/50"
              >
                Browse books
              </button>
              <button
                onClick={() => choose("journals")}
                className="rounded-xl cursor-pointer border border-[#008C7A]/25 bg-[#008C7A]/10 px-5 py-3 text-sm font-bold text-[#008C7A] transition hover:bg-white/20"
              >
                Browse journals
              </button>
            </div>
          </motion.div>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#008C7A]">
                Resource centre
              </p>
              <h2 className="display-font mt-1 text-3xl text-black">
                {search ? "Search results" : label}
                {!search && active === "courses" && courseId && (
                  <span className="text-[#bce47a]">
                    {" "}
                    / {courses.find((course) => course.id === courseId)?.title}
                  </span>
                )}
                {!search && active === "courses" && weekId && (
                  <span className="text-[#bce47a]">
                    {" "}
                    /{" "}
                    {
                      courses
                        .find((course) => course.id === courseId)
                        ?.weeks.find((week) => week.id === weekId)?.title
                    }
                  </span>
                )}
              </h2>
            </div>
            <label className="flex w-full items-center gap-2 rounded-xl border border-[#008C7A]/25 bg-[#008C7A]/10 px-4 py-3 text-[#008C7A] backdrop-blur-sm md:w-80">
              <Search size={17} className="text-[#008C7A]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#008C7A]"
              />
            </label>
          </div>
          {active === "courses" && !search ? (
            <>
              {courseId && (
                <button
                  onClick={() => (weekId ? setWeekId(null) : setCourseId(null))}
                  className="mt-5 rounded-lg border border-[#008C7A] bg-[#008C7A] px-3 py-2 text-sm font-bold text-white transition hover:border-[#0f4a3e] hover:bg-[#0f4a3e]"
                >
                  ← Back {weekId ? "to weeks" : "to courses"}
                </button>
              )}
              {!courseId ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {courses.map((course, index) => (
                    <FolderCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      category="Course"
                      count={`${course.weeks.length} ${
                        course.weeks.length === 1 ? "week" : "weeks"
                      } · ${course.weeks.reduce(
                        (sum, week) => sum + week.files.length,
                        0
                      )} files`}
                      image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80"
                      index={index}
                      onClick={() => setCourseId(course.id)}
                    />
                  ))}
                </div>
              ) : !weekId ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {courses
                    .find((course) => course.id === courseId)
                    ?.weeks.map((week, index) => (
                      <FolderCard
                        key={week.id}
                        title={week.title}
                        description={`${week.files.length} ${
                          week.files.length === 1 ? "file" : "files"
                        } in this week.`}
                        category="Week"
                        count={`${week.files.length} ${
                          week.files.length === 1 ? "file" : "files"
                        }`}
                        image="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80"
                        index={index}
                        onClick={() => setWeekId(week.id)}
                      />
                    ))}
                </div>
              ) : (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {courses
                    .find((course) => course.id === courseId)
                    ?.weeks.find((week) => week.id === weekId)
                    ?.files.map((item, i) => (
                      <ResourceCard key={item.id} resource={item} index={i} />
                    ))}
                </div>
              )}
            </>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map((item, i) => (
                <ResourceCard key={item.id} resource={item} index={i} />
              ))}
            </div>
          )}
          {active === "courses" && !search && courses.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-dashed border-white/30 px-6 py-12 text-center text-[#d5e7d9]">
              Courses are ready to be added. Add each course, its weeks, and
              each week’s files in the courses data in{" "}
              <code>app/helpers.tsx</code>.
            </div>
          ) : (
            shown.length === 0 &&
            (search || active !== "courses") && (
              <div className="mt-5 rounded-2xl border border-dashed border-white/30 px-6 py-12 text-center text-[#d5e7d9]">
                No resources found. Try another keyword.
              </div>
            )
          )}
          {active === "home" && !search && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {(
                [
                  [
                    "Journals",
                    journals.length,
                    "Explore current evidence",
                    "journals",
                  ],
                  [
                    "Picture archive",
                    pictures.length,
                    "See our community in action",
                    "pictures",
                  ],
                  [
                    "Study support",
                    "24/7",
                    "A resource hub on your schedule",
                    "courses",
                  ],
                ] as const
              ).map(([title, count, desc, tab]) => (
                <button
                  key={title}
                  onClick={() => choose(tab)}
                  className="rounded-2xl border border-white/10 bg-[#0a2d27]/50 p-5 text-left text-white transition hover:border-[#008C7A] cursor-pointer"
                >
                  <p className="text-sm font-bold text-[#bce47a]">{count}</p>
                  <p className="mt-2 text-lg font-bold">{title}</p>
                  <p className="mt-1 text-sm text-[#c4d9cc]">{desc}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

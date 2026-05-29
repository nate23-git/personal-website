import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white px-6 py-20 max-w-5xl mx-auto">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold">
          Nathan Perez
        </h1>

        {/* Title badge */}
        <div className="mt-4 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-300/30 text-pink-300">
          Data Analyst
        </div>

        {/* short intro */}
        <p className="mt-6 text-zinc-300 max-w-xl">
          Hi, I’m Nathan — a recent Computer Science graduate passionate about data analysis and looking to utilize my skills.
        </p>
      </section>

      {/* IMAGE ROW */}
      <section className="mt-16 grid grid-cols-3 gap-4">
        <div className="h-64 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500">
          Future Photo
        </div>

        <div className="flex justify-center">
          <div className="relative h-72 w-56 overflow-hidden rounded-3xl">
            <Image
              src="/images/graduation.jpg"
              alt="Graduation Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Placeholder 3 */}
        <div className="h-64 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500">
          Future Photo
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-pink-300">
          About Me
        </h2>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          I am a recent UTRGV graduate with a Bachelor of Science in Computer Science. While I enjoy many
          areas of Computer Science, I've grown to become especially interested in data analysis and the process of working
          with information to identify patterns, solve problems, and better understand how things connect.
          I like to think of myself as a very organized and detail-oriented
          person, so working with data is something I believe that I would Excel (no pun intended) in.
        </p>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          As I begin my career, I'm hoping to grow into a data analyst role where I can continue
          building my technical skills, work with meaningful data, and contribute to projects that
          help people make more informed decisions
        </p>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Outside of tech, I enjoy trying new things, spending time with friends and family, and
          growing my plushie collection - especially my emoji pillows.
        </p>
      </section>

    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

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
      <section id="about" className="mt-16">
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="mt-32">

        <h2 className="text-3xl font-bold text-pink-300 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 1 - Phishing Detection */}
          <Link href="/projects/phishing-detection">
            <div className="rounded-3xl p-6 border border-zinc-800 bg-zinc-900/40
        transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
        hover:border-pink-300/40 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-pink-300">
                Phishing URL Detection Analysis utilizing Machine Learning Algorithms
              </h3>
              <p className="mt-3 text-zinc-400">
                Conducted a comparative analysis on the XGBoost and Random Forest machine learning algorithms to determine which was better suited for detect phishing URL's
              </p>
              <p className="mt-3 text-zinc-400">
                Python, Scikit-learn, Random Forest, XGBoost, pandas, Google Colab
              </p>
            </div>
          </Link>

          {/* 2 - Data Analysis */}
          <Link href="/projects/data-analysis">
            <div className="rounded-3xl p-6 border border-zinc-800 bg-zinc-900/40
        transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
        hover:border-pink-300/40 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-pink-300">
                Academic Performance Trend Analysis
              </h3>
              <p className="mt-3 text-zinc-400">
                Exploratory data analysis of structured datasets simulating academic environments with data visualizations to analyze trends
              </p>
              <p className="mt-3 text-zinc-400">
                SQL, MySQL, Tableau, Excel
              </p>
            </div>
          </Link>

          {/* 3 - Media Server */}
          <Link href="/projects/media-server">
            <div className="rounded-3xl p-6 border border-zinc-800 bg-zinc-900/40
        transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
        hover:border-pink-300/40 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-pink-300">
                Cloud-Based Media Server
              </h3>
              <p className="mt-3 text-zinc-400">
                Personal streaming server setup for media organization and access
              </p>
              <p className="mt-3 text-zinc-400">
                Azure, Cyberduck, Emby, Linux
              </p>
            </div>
          </Link>

          {/* 4 - Voyage (centered) */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-full md:w-1/3">

              <Link href="/projects/voyage">
                <div className="rounded-3xl p-6 border border-zinc-800 bg-zinc-900/40
            transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
            hover:border-pink-300/40 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-pink-300">
                    Voyage: Travel Itinerary Generator
                  </h3>
                  <p className="mt-3 text-zinc-400">
                    Full stack web application that generates personalized travel itineraries based on user inputs
                  </p>
                  <p className="mt-3 text-zinc-400">
                    Figma, HTML/CSS, Python, Flask, PostgreSQL, APIs, Github, Javascript, Heroku
                  </p>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </section>
      {/* CONTACT INFO */}
      <section id="contact" className="mt-32 pb-20">

        <h2 className="text-3xl font-bold text-pink-300 mb-10">
          Contact
        </h2>

        <div className="max-w-2xl">

          <p className="text-zinc-400 leading-relaxed">
            If you'd like to connect, collaborate, or talk about opportunities,
            feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col gap-4">

            {/* Email */}
            <a
              href="mailto:nnperez1018@gmail.com"
              className="text-zinc-200 hover:text-pink-300 transition"
            >
              📧 nnperez1018@gmail.com
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nateasf"
              target="_blank"
              className="text-zinc-200 hover:text-pink-300 transition"
            >
              💻 GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nathan-perez-85863a372/"
              target="_blank"
              className="text-zinc-200 hover:text-pink-300 transition"
            >
              🔗 LinkedIn
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}
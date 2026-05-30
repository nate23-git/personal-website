import Link from "next/link";

export default function AcademicPerformancePage() {
    return (
        <main className="text-zinc-800 dark:text-white px-6 py-20 max-w-5xl mx-auto">

            {/* Back button */}
            <Link
                href="/#projects"
                className="inline-flex items-center text-zinc-500 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-300 transition mb-8"
            >
                ← Back to Projects
            </Link>

            {/* HERO SECTION */}
            <section>
                <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8 md:p-12">

                    <div className="inline-flex rounded-full border border-pink-400/40 dark:border-pink-300/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-500 dark:text-pink-300">
                        {/* TODO: Category tags e.g. "Data Analysis • SQL • Tableau" */}
                        ...
                    </div>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        {/* TODO: Project title */}
                        ...
                    </h1>

                    <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-3xl">
                        {/* TODO: 1-2 sentence project summary */}
                        ...
                    </p>

                    {/* Tech badges — replace with your actual tech stack */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Tool 1",
                            "Tool 2",
                            "Tool 3",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-500 dark:text-pink-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="mt-16">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Project Overview
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            {/* TODO: Describe the overall goal of the project... */}
                            ...
                        </p>
                        <p>
                            {/* TODO: Describe the dataset and what environment it simulates... */}
                            ...
                        </p>
                        <p>
                            {/* TODO: Summarize the end-to-end workflow and what skills it demonstrates... */}
                            ...
                        </p>
                    </div>
                </div>
            </section>

            {/* DATASET & SCOPE */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Dataset & Scope
                    </h2>

                    <div className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                        <p>
                            {/* TODO: Describe the structure of the dataset — rows, columns, source... */}
                            ...
                        </p>

                        <div className="space-y-4">
                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    {/* TODO: Subset/table name */}
                                    ...
                                </h3>
                                <p className="mt-3">
                                    {/* TODO: Describe this portion of the dataset... */}
                                    ...
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    {/* TODO: Subset/table name */}
                                    ...
                                </h3>
                                <p className="mt-3">
                                    {/* TODO: Describe this portion of the dataset... */}
                                    ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL IMPLEMENTATION */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Technical Implementation
                    </h2>

                    <div className="mt-6 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed">

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Data Cleaning & Transformation
                            </h3>
                            <p className="mt-3">
                                {/* TODO: Describe the cleaning steps — nulls, formatting, duplicates, outliers... */}
                                ...
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                SQL Querying & Trend Analysis
                            </h3>
                            <p className="mt-3">
                                {/* TODO: Explain the queries written — JOINs, aggregations, filters, subqueries... */}
                                ...
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Identifying Key Patterns
                            </h3>
                            <p className="mt-3">
                                {/* TODO: Describe what trends/patterns emerged from the analysis... */}
                                ...
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Tableau Visualizations
                            </h3>
                            <p className="mt-3">
                                {/* TODO: Describe the dashboards/charts built and what they communicate... */}
                                ...
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
import Link from "next/link";
import Image from "next/image";

export default function VoyagePage() {
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
                        Full-Stack Web App • AI Integration
                    </div>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        Voyage – AI-Powered Travel Itinerary Generator
                    </h1>

                    <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-3xl">
                        A full-stack web application that transforms travel planning
                        into a simple and personalized experience. Voyage uses generative AI
                        and multiple external data sources to curate structured, budget-aware
                        itineraries tailored to each user's destination, dates, and preferences.
                    </p>

                    {/* Tech badges */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Python",
                            "Flask",
                            "JavaScript",
                            "PostgreSQL",
                            "SQLAlchemy",
                            "Google Gemini API",
                            "Google Maps API",
                            "Unsplash API",
                            "Open-Meteo API",
                            "Pydantic",
                            "Flask-Migrate",
                            "Heroku",
                            "Figma",
                            "HTML/CSS",
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
                            Voyage was born from the overwhelming experience of digital travel
                            planning. Dozens of open tabs, hundreds of options, and the decision
                            fatigue that comes with juggling budgets, schedules, and activity
                            hunting all at once. The project set out to close the gap between
                            abundant travel data and actionable planning.
                        </p>
                        <p>
                            Unlike platforms such as Expedia or TripAdvisor that primarily present
                            listings, Voyage generates a complete day-by-day itinerary based on
                            user-defined constraints. Users provide their destination, travel dates,
                            budget, group size, and activity interests. The system then assembles a
                            personalized plan suggesting where to stay, eat, and spend their time,
                            all within budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* CORE OBJECTIVES */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Core Objectives
                    </h2>

                    <div className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                        <p>
                            The system was designed to fulfill a specific set of functional
                            requirements:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Collect and validate structured user travel preferences through a guided multi-step questionnaire</li>
                            <li>Generate a complete, day-by-day itinerary organized by lodging, dining, and activities</li>
                            <li>Integrate real-time weather forecasts and location-based data to improve itinerary feasibility</li>
                            <li>Enforce budget constraints throughout itinerary generation to keep all recommendations within spending limits</li>
                            <li>Support itinerary persistence, allowing users to revisit or regenerate plans, backed by a relational PostgreSQL database</li>
                            <li>Cache external API assets to reduce redundant requests and improve performance</li>
                        </ul>
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

                        <p>
                            Voyage is built on the Flask framework and follows a modular
                            architecture using Blueprints to separate general site routes from
                            itinerary-specific logic.
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                AI-Powered Itinerary Generation
                            </h3>
                            <p className="mt-3">
                                The core of Voyage is the{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    build_itinerary_task
                                </code>{" "}
                                function, which retrieves validated user preferences, calls Google's
                                Gemini API with a structured prompt, and supplements the response with
                                destination images from Unsplash. The AI is instructed to return a
                                JSON itinerary matching a strict Pydantic schema, ensuring consistent
                                and type-safe data at every step.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Data Validation with Pydantic
                            </h3>
                            <p className="mt-3">
                                Itinerary data is modeled using Pydantic classes — including{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    Itinerary
                                </code>
                                ,{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    DayItinerary
                                </code>
                                ,{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    TimeBlocks
                                </code>
                                , and{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    Lodging
                                </code>
                                . This provides automatic field validation, type checking, and easy
                                JSON serialization for storage in PostgreSQL and rendering in the
                                frontend.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Weather Integration
                            </h3>
                            <p className="mt-3">
                                A dedicated weather module geocodes the user's destination and fetches
                                day-by-day forecasts from the Open-Meteo API. If live forecast data is
                                unavailable, the system falls back to historical weather data from the
                                previous year, ensuring itineraries always include realistic climate
                                context without disrupting the generation flow.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Frontend Architecture
                            </h3>
                            <p className="mt-3">
                                The frontend is written in JavaScript with a design influenced
                                by game development principles, using state-driven classes to manage
                                UI behavior. Two primary algorithms power the interface: a{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    FormValidation
                                </code>{" "}
                                class that tracks input states and dynamically surfaces error messages should user inputs stray from the parameters set, and
                                a{" "}
                                <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                    LinkedSliders
                                </code>{" "}
                                class that implements an itterative correction to
                                redistribute a total budget across spending categories in real-time.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SYSTEM ARCHITECTURE */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        System Architecture & Data Flow
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">

                        <p>
                            The application follows a clear separation between frontend,
                            backend, database, and external APIs.
                        </p>

                        <div className="space-y-4">

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Frontend
                                </h3>
                                <p className="mt-3">
                                    JavaScript, HTML, and CSS with asynchronous
                                    form handling and a polling mechanism (
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        pollItineraryStatus()
                                    </code>
                                    ) that continuously checks build progress without blocking the
                                    interface. The questionnaire was redesigned from a single
                                    scroll-heavy form into a multi-step flow based on usability feedback.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Backend
                                </h3>
                                <p className="mt-3">
                                    Flask with modular Blueprints (
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        main.py
                                    </code>{" "}
                                    and{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        itinerary.py
                                    </code>
                                    ). Utility modules are organized into{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        ai.py
                                    </code>
                                    ,{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        weather_api.py
                                    </code>
                                    ,{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        validators.py
                                    </code>
                                    , and{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">
                                        functions.py
                                    </code>
                                    . Gunicorn serves as the production WSGI server.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Database
                                </h3>
                                <p className="mt-3">
                                    PostgreSQL with SQLAlchemy ORM. User preferences and generated
                                    itineraries are stored in separate tables linked by foreign key
                                    relationships. Flask-Migrate manages schema versioning. Parameterized
                                    queries protect against SQL injection throughout.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    External APIs
                                </h3>
                                <p className="mt-3">
                                    Google Gemini for AI itinerary generation, Google Maps and Google
                                    Places for location data, Unsplash for destination imagery, and
                                    Open-Meteo for weather forecasts. API responses and images are cached
                                    to reduce redundant requests and limit token usage.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* DESIGN PROCESS */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Design Process
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">

                        <p>
                            The visual design of Voyage began with a hand-crafted moodboard and
                            custom vector logo, establishing the brand's travel-inspired
                            identity. Low-fidelity wireframes were sketched on paper before moving
                            into high-fidelity Figma mockups to map out user flows, itinerary
                            layouts, and responsive behavior. Iterative UI testing throughout
                            development refined the interface. For example, lightening the
                            background to reduce eyestrain and simplifying the questionnaire into
                            a step-based flow to reduce cognitive load.
                        </p>

                        <div className="space-y-4">
                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    My Role
                                </h3>
                                <p className="mt-3">
                                    As a backend developer on the team, I took charge of the AI integration layer for Voyage —
                                    designing the structured output pipeline that converts raw Gemini API responses
                                    into validated, schema-consistent itinerary data using strict Pydantic models. I defined
                                    the data models (including <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">Itinerary</code>,{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">DayItinerary</code>,{" "}
                                    <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-pink-500/10 px-1.5 py-0.5 rounded-md text-sm">TimeBlocks</code>, and related classes)
                                    that enforced type safety and ensured reliable JSON serialization across the backend.
                                    Beyond AI, I contributed to backend testing to validate data integrity and system
                                    reliability, and participated in frontend development. This led to working on both the itinerary
                                    display and questionnaire forms as well as refactoring them when feedback was given. On the project management side, I was actively
                                    involved in Figma, maintaining the Kanban board, communicating progress, flagging
                                    what was completed, and helping the team stay aligned on what still needed to be
                                    implemented.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Outcomes
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            Voyage successfully met its core objectives — generating structured,
                            budget-aware itineraries, integrating five external APIs, and deploying
                            a live, publicly accessible web application on Heroku. The system
                            handles concurrent itinerary generation, persists user data across
                            sessions, and delivers a responsive interface across mobile and desktop.
                        </p>

                        <p>
                            Future improvements could include a formal automated test suite,
                            expanded edge case coverage, and additional user research to quantify
                            usability gains from the multi-step questionnaire redesign.
                        </p>
                    </div>
                </div>
            </section>

            {/* RESOURCES */}
            <section className="mt-12 pb-20">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Project Resources
                    </h2>

                    <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                        Feel free to explore the live application, full report, and codebase below!
                    </p>

                    <div className="mt-8 flex flex-col md:flex-row gap-4">

                        {/* Live App */}
                        <a
                            href="https://voyageproject.app"
                            target="_blank"
                            className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                🌐 Live Application
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                Try Voyage live and generate a personalized travel itinerary for any destination.
                            </p>
                        </a>

                        {/* Report PDF */}
                        <a
                            href="/voyage.pdf"
                            target="_blank"
                            className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                📄 Full Research Report
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                View the complete academic paper covering architecture, implementation, and evaluation.
                            </p>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/lahg1103/SeniorProject"
                            target="_blank"
                            className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                💻 GitHub Repository
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                Browse the full codebase including Flask backend, frontend, and database models.
                            </p>
                        </a>

                    </div>
                </div>
            </section>

        </main>
    );
}
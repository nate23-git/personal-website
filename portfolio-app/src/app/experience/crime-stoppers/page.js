import Link from "next/link";

export default function CrimeStoppersPage() {
    return (
        <main className="text-zinc-800 dark:text-white px-6 py-20 max-w-5xl mx-auto">

            {/* Back button */}
            <Link
                href="/#experience"
                className="inline-flex items-center text-zinc-500 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-300 transition mb-8"
            >
                ← Back to Experience
            </Link>

            {/* HERO SECTION */}
            <section>
                <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8 md:p-12">

                    <div className="inline-flex rounded-full border border-pink-400/40 dark:border-pink-300/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-500 dark:text-pink-300">
                        Freelance • Web Development • WordPress • Site Migration
                    </div>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        McAllen Crime Stoppers — Freelance Web Redesign & Migration
                    </h1>

                    <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-3xl">
                        A freelance contract focused on migrating, rebuilding, and modernizing a nonprofit organization's
                        WordPress website. The project involved restoring administrative ownership,
                        repairing broken functionality, improving mobile responsiveness, and implementing stakeholder-driven
                        design improvements to deliver a fully functional and maintainable website.
                    </p>

                    {/* Tech badges */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "WordPress",
                            "Divi Theme Builder",
                            "SiteGround",
                            "All-in-One WP Migration",
                            "DNS Configuration",
                            "SSL",
                            "Nameservers",
                            "Mobile Optimization",
                            "Web Design",
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
                        Overview
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            McAllen Crime Stoppers, a local nonprofit organization, needed assistance
                            recovering ownership of their website and improving an unfinished online presence
                            that had become difficult to manage. The organization lacked full control over the site,
                            several features were not functioning correctly, and the overall user experience did not meet
                            their needs. I was contracted to migrate the website to a new hosting environment,
                            restore administrative control, and redesign the site in collaboration with organizational
                            stakeholders to create a more professional and maintainable platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        The Problem
                    </h2>

                    <div className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                        <p>
                            The site inherited at the start of this contract had several critical issues
                            that made it effectively unusable for the organization:
                        </p>


                        <div className="space-y-4">
                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Outdated Visual Design
                                </h3>
                                <p className="mt-3">
                                    Beyond the functional issues, the site's visual design was outdated and did not
                                    professionally represent the organization. Layout inconsistencies, poor typography,
                                    and an overall lack of visual polish made the site feel unfinished and untrustworthy
                                    to visitors.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    No Admin Access
                                </h3>
                                <p className="mt-3">
                                    The organization only had editor-level access to their own website.
                                    The original developer controlled the WordPress installation across
                                    multiple client sites and refused to grant admin credentials, citing
                                    security concerns. This meant core settings, plugins, and theme
                                    configurations were completely off-limits.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Broken Functionality
                                </h3>
                                <p className="mt-3">
                                    Multiple buttons and links throughout the site were non-functional.
                                    Interactive elements left by the previous developer either did nothing
                                    or routed incorrectly, leaving visitors with a broken experience.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Poor Mobile Experience
                                </h3>
                                <p className="mt-3">
                                    The site was not properly optimized for mobile devices. Layout
                                    elements broke on smaller screens and the overall mobile experience did not meet basic usability standards.
                                </p>
                            </div>
                        </div>

                        {/* Before Videos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30">
                                <video
                                    controls
                                    muted
                                    playsInline
                                    className="w-full"
                                >
                                    <source src="/videos/mobile-mcstoppers.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="p-4 text-center">
                                    <p className="text-sm font-medium text-pink-500 dark:text-pink-300">Mobile Version</p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Broken layout and non-functional elements on mobile</p>
                                </div>
                            </div>

                            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30">
                                <video
                                    controls
                                    muted
                                    playsInline
                                    className="w-full"
                                >
                                    <source src="/videos/desktop-mcstoppers.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="p-4 text-center">
                                    <p className="text-sm font-medium text-pink-500 dark:text-pink-300">Desktop Version</p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Broken buttons and links on the original desktop build</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* WHAT I DID */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        What I Did
                    </h2>

                    <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Site Migration to SiteGround
                            </h3>
                            <p className="mt-3">
                                Since full admin access was not available on the original host, the
                                only path to complete ownership was a full site migration. I set up a
                                new WordPress installation on SiteGround, installed the All-in-One WP
                                Migration plugin, and imported the migration file provided by the
                                original developer. This transferred all existing content, pages, and
                                media to the new environment where the organization would have complete
                                control.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                DNS & Nameserver Configuration
                            </h3>
                            <p className="mt-3">
                                After the migration, I updated the nameservers to point the organization's
                                domain to the new SiteGround hosting server. The domain had originally been
                                registered through Dotster, which upon researching, I had found that it has since been acquired by Network Solutions.
                                I accessed the organization's account through Network Solutions to locate the
                                domain settings and update the nameservers to point to SiteGround. I also
                                changed the primary domain on SiteGround to match the organization's domain,
                                ensuring the live site resolved correctly without any downtime or broken URLs.
                                SSL was also configured to ensure the site remained secure.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Website Improvements & Stakeholder Collaboration
                            </h3>
                            <p className="mt-3">
                                Working directly with a member of the organization's board, I gathered feedback
                                and requirements regarding the site's layout, content organization, and visual presentation.
                                Based on the discussions and visuals we went over, I updated existing pages, refined
                                the site's design, improved navigation and usability, and implemented requested
                                changes using Divi Theme Builder. Divi was used to maintain consistency as the site
                                was designed with Divi originally. Throughout the project, I translated stakeholder
                                feedback into technical and design solutions while maintaining coherence with
                                the organization's branding and goals.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Bug Fixes & Mobile Optimization
                            </h3>
                            <p className="mt-3">
                                All broken buttons and links from the previous build were identified
                                and repaired. The site was also optimized for mobile responsiveness which included
                                fixing layout breakpoints, scaling issues, and interactive elements
                                that were previously non-functional on smaller screens.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Resolving Caching Conflicts
                            </h3>
                            <p className="mt-3">
                                After completing the migration and redesign, changes made in the WordPress editor
                                were not reflecting on the live site. Everything looked correct in the editing
                                environment but the live version wasn't updating. Through trial and error
                                troubleshooting, the issue was traced to a caching conflict. Flushing the cache
                                and disabling SiteGround's NGINX Direct Delivery caching tool through the Site
                                Tools speed settings resolved the issue and the live site began reflecting all
                                changes correctly.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* TOOLS & TECHNOLOGIES */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Tools & Technologies
                    </h2>

                    <div className="mt-6 space-y-4">

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">WordPress</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                The CMS platform used for the original and rebuilt site. WordPress
                                served as the foundation for all content management, plugin installation,
                                and theme configuration throughout the project.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">Divi Theme Builder</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                A visual drag-and-drop WordPress page builder used to redesign and
                                rebuild the site's pages, layouts, and global css styles. Divi was used
                                to fix broken sections from the previous build and deliver a cohesive,
                                professional design.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">SiteGround</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                The new hosting provider selected for the migration. SiteGround provided
                                a clean environment for a fresh WordPress installation, full admin access,
                                SSL configuration, and domain management under the organization's control.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">All-in-One WP Migration</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                A WordPress plugin used to export and import the full site — including
                                all content, media, themes, and settings — from the original host to
                                the new SiteGround environment with no data loss.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* THE RESULT */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        The Result
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            The organization now has full admin ownership of their website on a
                            dedicated hosting environment. The site is fully functional, mobile
                            responsive, and properly represents McAllen Crime Stoppers as a
                            professional nonprofit organization. All previously broken elements
                            have been repaired and the redesign delivered a significantly improved
                            user experience compared to the original build.
                        </p>

                        <p>
                            Beyond the technical migration, the project provided experience working
                            directly with a non profit client, gathering requirements from stakeholders, incorporating
                            iterative feedback, and delivering a solution that balanced organizational goals with
                            technical restraints.
                        </p>

                        <div className="mt-8 flex flex-col md:flex-row gap-4">

                            {/* Live Site */}
                            <a
                                href="https://mcallencrimestoppers.org/"
                                target="_blank"
                                className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                            >
                                <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                    🌐 Live Site
                                </h3>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                    Visit the McAllen Crime Stoppers website to see the final product.
                                </p>
                            </a>

                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
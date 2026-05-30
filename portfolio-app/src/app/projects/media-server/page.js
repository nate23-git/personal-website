import Link from "next/link";

export default function NetworksNASPage() {
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
                        Computer Networks • Systems • Cloud Infrastructure
                    </div>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        Personal NAS & Media Streaming Server on Azure VM
                    </h1>

                    <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-3xl">
                        A cloud-hosted personal media server built on an Azure Virtual Machine,
                        using SFTP file transfers via Cyberduck and the Emby media server to
                        enable secure, self-hosted music streaming from anywhere.
                    </p>

                    {/* Tech badges */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Azure",
                            "Linux (Ubuntu)",
                            "Emby",
                            "Cyberduck",
                            "SFTP",
                            "SSH",
                            "Networking",
                            "NAS",
                            "Bash",
                            "Cloud Infrastructure",
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
                            This project transforms an Azure Virtual Machine into a personal
                            Network Attached Storage (NAS) device and self-hosted media server.
                            Audio files are securely transferred from a local computer to the VM
                            using Cyberduck's SFTP client, and the Emby media server is installed
                            on the VM to import and stream those files on demand.
                        </p>
                        <p>
                            The project demonstrates real-world applications of computer networking
                            concepts including server-client architecture, secure file transfer
                            protocols, port configuration, and media streaming over HTTP — all
                            interconnected through a cloud-hosted virtual machine.
                        </p>
                        <p>
                            While this implementation focuses on music, the same architecture
                            can be extended to support other media types such as movies or games.
                            Even without Emby, the VM-based NAS alone serves as a
                            private file storage solution accessible from any device, functioning
                            similarly to a personal Dropbox.
                        </p>
                    </div>
                </div>
            </section>

            {/* NETWORK TOPOLOGY */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Network Topology
                    </h2>

                    <div className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                        <p>
                            The network consists of two main components communicating over the internet:
                        </p>

                        <div className="space-y-4">
                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Local Machine → Azure VM (via SFTP)
                                </h3>
                                <p className="mt-3">
                                    Cyberduck runs on the local PC and establishes an SFTP connection
                                    to the Azure VM over port 22 (SSH). This allows audio files to be
                                    securely dragged and dropped directly into the VM's music directory.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Azure VM → End Devices (via HTTP)
                                </h3>
                                <p className="mt-3">
                                    The Emby media server runs on the VM and serves audio content
                                    over HTTP on port 8096. Any device connected to the internet can
                                    access and stream the hosted music library through a browser.
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
                                Azure VM Setup
                            </h3>
                            <p className="mt-3">
                                A virtual machine was provisioned on Microsoft Azure. An inbound
                                security rule was added to allow SSH access on port 22, enabling
                                remote terminal access and secure file transfers. A dedicated
                                music directory was created inside the VM using the <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">mkdir music</code> command to create a music directory.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Secure File Transfer with Cyberduck
                            </h3>
                            <p className="mt-3">
                                Cyberduck was configured with the VM's public IP address, port 22,
                                login credentials, and SSH private key. Using the SFTP protocol,
                                audio files were transferred directly from the local machine into
                                the VM's music directory by dragging and dropping through Cyberduck's
                                interface.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Emby Media Server Installation
                            </h3>
                            <p className="mt-3">
                                The latest version of the Emby server was downloaded directly onto
                                the VM using <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">wget</code> and installed with <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">dpkg</code>.
                                An additional inbound port rule was added in Azure for port 8096,
                                which is the default port Emby uses to serve its web interface over HTTP.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Linking the Music Directory to Emby
                            </h3>
                            <p className="mt-3">
                                To allow Emby to access the uploaded audio files, the music directory
                                ownership was updated using <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">chown</code> and <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">chmod</code> to grant
                                Emby the correct permissions. The directory was then bind-mounted to
                                Emby's expected library path at <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/var/lib/emby/music</code>, and the
                                Emby service was restarted to apply the changes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Streaming via Browser
                            </h3>
                            <p className="mt-3">
                                With Emby running and the library configured, the media server
                                became accessible at <code className="text-pink-500 dark:text-pink-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">http://{"<VM-IP>"}:8096</code> from any browser.
                                The music library was visible and fully streamable, with album
                                art and metadata customizable through Emby's interface.
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
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">Microsoft Azure</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                Used to provision and manage the Linux virtual machine in the cloud,
                                configure network security group rules, and expose the necessary ports
                                for SSH and Emby.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">Cyberduck</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                A free, open-source file transfer client that supports SFTP. Used to
                                establish a secure connection to the VM and transfer local audio files
                                into the VM's music directory without needing manual terminal commands.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">Emby Media Server</h3>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                An open-source personal media server that organizes and streams media
                                libraries. Installed directly on the VM to serve the music collection
                                over HTTP, accessible from any connected device.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY CONCEPTS */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Networking Concepts Applied
                    </h2>

                    <div className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                        <p>
                            This project put several core computer networking concepts into practice:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <span className="text-pink-500 dark:text-pink-200 font-medium">Server-Client Architecture</span> — the VM acts as a server
                                hosting files and media; local machines and browsers act as clients requesting them.
                            </li>
                            <li>
                                <span className="text-pink-500 dark:text-pink-200 font-medium">SFTP (SSH File Transfer Protocol)</span> — a secure method for
                                transferring files over an encrypted SSH connection on port 22.
                            </li>
                            <li>
                                <span className="text-pink-500 dark:text-pink-200 font-medium">Port Configuration </span> — inbound security
                                rules were configured on Azure to open the required ports (22 for SSH, 8096 for Emby).
                            </li>
                            <li>
                                <span className="text-pink-500 dark:text-pink-200 font-medium">HTTP Streaming</span> — Emby delivers media content over HTTP,
                                demonstrating how web-based streaming services communicate with clients.
                            </li>
                            <li>
                                <span className="text-pink-500 dark:text-pink-200 font-medium">Network Attached Storage (NAS)</span> — the VM functions as
                                a remotely accessible file system, mirroring real-world NAS device behavior.
                            </li>
                        </ul>
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
                        The full project report is listed below with further details to explore.
                    </p>

                    <div className="mt-8 flex flex-col md:flex-row gap-4">

                        {/* Report PDF */}
                        <a
                            href="/networks-report.pdf"
                            target="_blank"
                            className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                📄 Full Project Report
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                View the complete write-up with network topology, configuration steps, and demonstration screenshots.
                            </p>
                        </a>

                    </div>
                </div>
            </section>

        </main>
    );
}
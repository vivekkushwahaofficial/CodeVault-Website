import { Link } from "react-router-dom";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-[#170f2b] to-zinc-950 text-zinc-200">

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    <Link
                        to="/"
                        className="text-xl font-semibold tracking-tight text-white"
                    >
                        🚀 CodeVault
                    </Link>

                    <Link
                        to="/"
                        className="rounded-lg border border-purple-500/30 px-4 py-2 text-sm text-white transition hover:bg-purple-600"
                    >
                        ← Back to Home
                    </Link>

                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-6 py-16">

                <h1 className="mb-2 text-5xl font-bold text-white">
                    Privacy Policy
                </h1>

                <p className="mb-10 text-zinc-400">
                    Last Updated: August 2026
                </p>

                <section className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            1. What CodeVault Does
                        </h2>

                        <p>
                            CodeVault automatically detects accepted coding
                            submissions on supported coding platforms and allows
                            users to synchronize their solutions to their own
                            GitHub repositories after authenticating with
                            GitHub.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            2. Information We Collect
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                GitHub authentication information through
                                GitHub OAuth.
                            </li>

                            <li>
                                Selected GitHub repository and extension
                                preferences.
                            </li>

                            <li>
                                Accepted coding solutions and problem metadata
                                that the user chooses to synchronize.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            3. How We Use Your Information
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Authenticate your GitHub account.</li>

                            <li>
                                Upload coding solutions to repositories you
                                select.
                            </li>

                            <li>
                                Remember your extension settings and
                                preferences.
                            </li>

                            <li>
                                Provide the functionality of the extension.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            4. Data Storage
                        </h2>

                        <p>
                            Extension settings and authentication state are
                            stored locally in your browser. CodeVault does not
                            sell your personal information.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            5. Third-Party Services
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>GitHub</li>
                            <li>GitHub API</li>
                            <li>CodeVault Backend</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            6. Data Sharing
                        </h2>

                        <p>
                            CodeVault does not sell, rent, or trade your
                            personal information. Information is shared only
                            with services necessary to provide the extension's
                            functionality.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            7. Security
                        </h2>

                        <p>
                            GitHub authentication is handled securely using
                            GitHub OAuth. Access tokens are used only for
                            authorized GitHub operations.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            8. Changes to This Policy
                        </h2>

                        <p>
                            This Privacy Policy may be updated as CodeVault
                            evolves. Updates will always be published on this
                            page.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-3 text-2xl font-semibold text-white">
                            9. Contact
                        </h2>

                        <p>
                            Email:{" "}
                            <a
                                href="mailto:vivek39101@gmail.com"
                                className="text-purple-400 hover:underline"
                            >
                                vivek39101@gmail.com
                            </a>
                        </p>

                        <p className="mt-2">
                            Website:{" "}
                            <a
                                href="https://code-vault-website.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="text-purple-400 hover:underline"
                            >
                                https://code-vault-website.vercel.app
                            </a>
                        </p>
                    </div>

                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
                © 2026 CodeVault. All rights reserved.
            </footer>

        </div>
    );
}
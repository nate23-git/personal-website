import Link from "next/link";
import Image from "next/image";

export default function PhishingDetectionPage() {
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
                        Machine Learning • Cybersecurity • Comparative Analysis
                    </div>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        Phishing URL Detection using Random Forest & XGBoost
                    </h1>

                    <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-3xl">
                        A comparative machine learning analysis evaluating how effectively
                        Random Forest and XGBoost classify phishing URLs, generalize to
                        unseen datasets, resist noisy data, and perform under different
                        computational constraints.
                    </p>

                    {/* Tech badges */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Python",
                            "Scikit-learn",
                            "Random Forest",
                            "XGBoost",
                            "Pandas",
                            "NumPy",
                            "Matplotlib",
                            "Google Colab",
                            "TF-IDF",
                            "Machine Learning",
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
                            This project focused on building and evaluating a phishing URL
                            detection system using supervised machine learning models to
                            determine whether a website link was legitimate or malicious.
                            The primary objective was to compare the performance of two
                            ensemble learning algorithms, Random Forest and XGBoost,
                            and evaluate which model was better suited for phishing
                            classification tasks.
                        </p>
                        <p>
                            Rather than evaluating performance through accuracy alone,
                            the project examined how each model behaved across multiple
                            dimensions including classification performance, robustness to
                            noisy data, computational efficiency, and generalization to
                            unseen datasets.
                        </p>
                        <p>
                            To strengthen reliability, both models were trained and evaluated
                            using the same preprocessing pipeline, evaluation metrics,
                            datasets, and validation methods to maintain fairness throughout
                            experimentation and reduce inconsistencies in comparison.
                        </p>
                    </div>
                </div>
            </section>

            {/* RESEARCH OBJECTIVE */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Research Objective
                    </h2>

                    <div className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                        <p>
                            The primary research question explored throughout this project was:
                        </p>

                        <div className="rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/5 p-6">
                            <p className="text-lg text-pink-600 dark:text-pink-200 italic">
                                "Which machine learning model performs better for phishing
                                URL detection — Random Forest or XGBoost?"
                            </p>
                        </div>

                        <p>
                            To answer this question, both models were evaluated through:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Classification accuracy and predictive performance</li>
                            <li>Precision, recall, and F1-score evaluation</li>
                            <li>5-fold cross validation for stability testing</li>
                            <li>Robustness testing through Gaussian noise injection</li>
                            <li>Generalization across multiple phishing datasets</li>
                            <li>Computational efficiency including training and inference time</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* DATASETS */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Datasets
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            The project utilized two distinct phishing URL datasets in order
                            to evaluate model performance under both controlled and more
                            realistic conditions.
                        </p>

                        <div className="space-y-4">

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Dataset 1 — UCI PhiUSIIL Phishing URL Dataset
                                </h3>
                                <p className="mt-3">
                                    This dataset contains 235,795 total URL instances, with both
                                    legitimate and phishing examples. It was used as the primary
                                    training dataset due to its large scale and structured feature
                                    representation.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Dataset 2 — Kaggle Phishing URL Dataset
                                </h3>
                                <p className="mt-3">
                                    This dataset contains 11,430 URL instances with 87 extracted
                                    features. Unlike Dataset 1, it introduces more variability and
                                    serves as a generalization benchmark to test model robustness
                                    on unseen distributions.
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

                        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 max-w-2xl mx-auto">
                            <Image
                                src="/images/phishing-pipeline.png"
                                alt="System Design Flowchart"
                                width={200}
                                height={150}
                                className="w-full h-auto"
                            />
                            <div className="p-4 text-sm text-zinc-500 dark:text-zinc-400">
                                System design flowchart showing model training and evaluation pipeline
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Data Preprocessing
                            </h3>
                            <p className="mt-3">
                                The dataset underwent multiple preprocessing steps including
                                whitespace removal, handling of infinite values, NaN cleanup,
                                and standardization of labels to ensure consistency across both
                                datasets.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Feature Selection
                            </h3>
                            <p className="mt-3">
                                Feature selection was performed using SelectKBest with ANOVA
                                F-statistics to identify the top 20 most relevant features.
                                This reduced dimensionality and improved training efficiency
                                while preserving predictive power.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Feature Engineering
                            </h3>
                            <p className="mt-3">
                                Text-based URL features were transformed using TF-IDF vectorization,
                                allowing machine learning models to process raw URL text as numerical
                                feature vectors alongside structured numeric features.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* MODEL TRAINING */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Models
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">

                        <p>
                            Two ensemble learning models were trained under identical conditions
                            to ensure a fair comparison.
                        </p>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                Random Forest
                            </h3>
                            <p className="mt-3">
                                A bagging-based ensemble method using multiple decision trees
                                trained on random subsets of the dataset. This approach reduces
                                variance and improves generalization.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                            <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                XGBoost
                            </h3>
                            <p className="mt-3">
                                A gradient boosting algorithm that builds trees sequentially,
                                where each new tree attempts to correct errors made by previous
                                models, improving predictive accuracy.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="mt-12">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-8">

                    <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-300">
                        Results & Model Comparison
                    </h2>

                    <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">

                        <p>
                            Both models achieved high classification performance on Dataset 1,
                            with only minor differences in evaluation metrics.
                            Dataset 2 introduced more variability, providing a stronger test
                            of generalization ability. Gaussian noise was introduced at multiple intensity
                            levels for both models on both datasets to evaluate how each model performs under data perturbation.
                        </p>

                        <div className="space-y-4">

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    Random Forest Findings
                                </h3>
                                <p className="mt-3">
                                    Demonstrated strong stability and consistent performance across
                                    both datasets. It showed better robustness under noisy conditions
                                    and maintained stable decision boundaries.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/30 p-6">
                                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-200">
                                    XGBoost Findings
                                </h3>
                                <p className="mt-3">
                                    Achieved slightly higher accuracy in some cases and demonstrated
                                    strong computational efficiency. However, it showed higher sensitivity
                                    to noisy data and was less stable under perturbations.
                                </p>
                            </div>

                        </div>
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
                        The complete technical documentation and implementation are detailed below. Feel free to explore them to
                        see the results!
                    </p>

                    <div className="mt-8 flex flex-col md:flex-row gap-4">

                        {/* Report PDF */}
                        <a
                            href="/phishing-url.pdf"
                            target="_blank"
                            className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                📄 Full Research Report
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                View the complete academic paper with methodology, results, and analysis.
                            </p>
                        </a>

                        {/* Code (Colab) */}
                        <a
                            href="https://colab.research.google.com/drive/197h6vnaq13Q4IaAjlLtMloeAOYvGhBgX"
                            target="_blank"
                            className="flex-1 rounded-3xl border border-pink-400/30 dark:border-pink-300/20 bg-pink-500/10 p-6 hover:border-pink-400/60 dark:hover:border-pink-300/40 transition"
                        >
                            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-300">
                                💻 Google Colab Notebook
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
                                View the full machine learning implementation and experiments.
                            </p>
                        </a>

                    </div>
                </div>
            </section>

        </main>
    );
}
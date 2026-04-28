import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "🧠 AI / Machine Learning",
    skills: [
      "Supervised & Unsupervised Learning",
      "Deep Learning (CNNs, Transformers)",
      "Model Training, Evaluation & Optimization",
      "Feature Engineering & Data Preprocessing",
    ],
  },
  {
    title: "🤖 Generative AI & LLMs",
    skills: [
      "Prompt Engineering & Optimization",
      "RAG Pipelines (Retrieval-Augmented Generation)",
      "LLM Fine-tuning (LoRA basics)",
      "Structured Outputs & Hallucination Reduction",
    ],
  },
  {
    title: "🧩 AI Agents & Frameworks",
    skills: [
      "LangChain",
      "LangGraph",
      "Autogen",
      "CrewAI",
      "Tool Integration & Agent Workflows",
    ],
  },
  {
    title: "⚙️ ML Frameworks & Libraries",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Transformers",
    ],
  },
  {
    title: "🔍 NLP & Computer Vision",
    skills: [
      "Text Processing, Embeddings, Semantic Search",
      "Object Detection & Real-time Vision Systems",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    title: "🧠 RAG & Vector Systems",
    skills: [
      "Vector Databases (FAISS, MongoDB)",
      "Similarity Search & Retrieval Optimization",
      "Chunking & Re-ranking Techniques",
    ],
  },
  {
    title: "🌐 Backend & Full-Stack",
    skills: [
      "FastAPI (API Development)",
      "React",
      "JavaScript",
      "TypeScript",
      "Chrome Extension Development",
    ],
  },
  {
    title: "☁️ Cloud, IoT & Data",
    skills: [
      "Firebase",
      "Cloud Deployment (Render/Vercel)",
      "ESP32 & Real-time IoT Systems",
      "Pandas, NumPy, Data Pipelines",
    ],
  },
  {
    title: "⚡ Performance, Safety & Production",
    skills: [
      "Model Optimization & Inference Tuning",
      "Prompt Injection Protection & PII Handling",
      "Output Validation, Retry & Logging Systems",
    ],
  },
  {
    title: "🧠 Engineering Practices",
    skills: [
      "End-to-End AI System Design",
      "Research → Production Workflow",
      "Clean Code, Debugging & Scalability",
    ],
  },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 md:py-40" ref={sectionRef}>
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="label-text text-primary mb-4">Expertise</p>
          <h2 className="heading-section text-foreground">Skills & Technologies</h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const isPrimary = categoryIndex % 2 === 0;
            const accent = isPrimary ? 'primary' : 'secondary';
            return (
            <div
              key={category.title}
              className={`group/cat relative p-6 rounded-2xl border bg-card/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                isPrimary
                  ? 'border-border/40 hover:border-primary/50 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.4)]'
                  : 'border-border/40 hover:border-secondary/50 hover:shadow-[0_20px_50px_-15px_hsl(var(--secondary)/0.4)]'
              } ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/cat:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-2xl"
                style={{
                  background: isPrimary
                    ? 'radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.25), transparent 70%)'
                    : 'radial-gradient(circle at 50% 0%, hsl(var(--secondary) / 0.25), transparent 70%)',
                }}
              />

              {/* Category title */}
              <h3 className="font-display font-bold text-lg text-foreground mb-6 pb-3 border-b border-border transition-colors duration-300">
                <span className={`transition-colors duration-300 ${isPrimary ? 'group-hover/cat:text-primary' : 'group-hover/cat:text-secondary'}`}>
                  {category.title}
                </span>
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm font-display cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg ${
                      visible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                      background: isPrimary
                        ? 'hsl(var(--primary) / 0.1)' 
                        : 'hsl(var(--secondary) / 0.1)',
                      color: isPrimary
                        ? 'hsl(var(--primary))' 
                        : 'hsl(var(--secondary))',
                      border: `1px solid ${isPrimary
                        ? 'hsl(var(--primary) / 0.2)' 
                        : 'hsl(var(--secondary) / 0.2)'}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isPrimary
                        ? 'hsl(var(--primary) / 0.25)'
                        : 'hsl(var(--secondary) / 0.25)';
                      e.currentTarget.style.borderColor = isPrimary
                        ? 'hsl(var(--primary) / 0.6)'
                        : 'hsl(var(--secondary) / 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isPrimary
                        ? 'hsl(var(--primary) / 0.1)'
                        : 'hsl(var(--secondary) / 0.1)';
                      e.currentTarget.style.borderColor = isPrimary
                        ? 'hsl(var(--primary) / 0.2)'
                        : 'hsl(var(--secondary) / 0.2)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

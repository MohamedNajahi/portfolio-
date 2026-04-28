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
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category title */}
              <h3 className="font-display font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm font-display transition-all duration-500 ${
                      visible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                      background: categoryIndex === 0 || categoryIndex === 1 
                        ? 'hsl(var(--primary) / 0.1)' 
                        : 'hsl(var(--secondary) / 0.1)',
                      color: categoryIndex === 0 || categoryIndex === 1 
                        ? 'hsl(var(--primary))' 
                        : 'hsl(var(--secondary))',
                      border: `1px solid ${categoryIndex === 0 || categoryIndex === 1 
                        ? 'hsl(var(--primary) / 0.2)' 
                        : 'hsl(var(--secondary) / 0.2)'}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import BootcampCard from "./BootcampCard";
import '../styles/features.css';

const bootcamps = [
  {
    title: "Ciberseguridad",
    description: "Aprende sobre estrategias y herramientas de Red Team y Blue Team.",
    icon: "🛡️",
    mode: "Presencial / Remoto"
  },
  {
    title: "Data Science",
    description: "Aprenderás Python, análisis de datos y Machine Learning.",
    icon: "📊",
    mode: "Presencial / Remoto"
  },
  {
    title: "Desarrollo Web Full Stack",
    description: "Aprende HTML, JavaScript, Node.js y bases de datos.",
    icon: "💻",
    mode: "Presencial / Remoto"
  },
  {
    title: "Digital Marketing OPS",
    description: "Marketing digital con herramientas de planificación y automatización.",
    icon: "📢",
    mode: "Presencial / Remoto"
  },
  {
    title: "UX/UI Product Design",
    description: "Experiencia de usuario, arquitectura de la información y diseño visual.",
    icon: "🎨",
    mode: "Presencial / Remoto"
  }
];

const Features = () => {
  return (
    <section className="features-container">
      {bootcamps.map((bootcamp, index) => (
        <BootcampCard
          key={index}
          title={bootcamp.title}
          description={bootcamp.description}
          icon={bootcamp.icon}
          mode={bootcamp.mode}
        />
      ))}
    </section>
  );
};

export default Features;

  
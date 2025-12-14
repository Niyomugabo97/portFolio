export default function Skills() {
  const skills = [
    "Python",
    "Django",
    "React",
    "Node.js",
    "HTML",
    "JavaScript",
    "Java"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map(skill => (
          <span key={skill} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
}


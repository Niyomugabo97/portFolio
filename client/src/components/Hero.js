export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img 
          src="/images/profile.jpg" 
          alt="Claude - Computer Science Student" 
          className="profile-image"
        />
        <h1>Computer Science Student</h1>
        <p>I build web applications using modern technologies.</p>
        <a className="btn" href="#projects">View My Work</a>
      </div>
    </section>
  );
}

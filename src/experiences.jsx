import './experiences.css';

function ExperiencePage({ title }) {
  const experiences = [
    {
      category: "Professional Experience",
      items: [
        {
          role: "Undergraduate Teaching Fellow",
          org: "Hodge EXCEL Scholars Program",
          location: "Evanston, IL",
          date: "June 2024 – August 2024",
          details: [
            "Assisted in teaching calculus to 19 incoming engineering students from underrepresented backgrounds.",
            "Led community-building activities to support student transitions into university life."
          ]
        },
        {
          role: "Marketing Intern",
          org: "Morgan Stanley Jumpstart Scholars in Finance",
          location: "New York, NY",
          date: "Oct 2022 – Feb 2023",
          details: [
            "Selected for a 5-week program focused on leadership, finance, and financial literacy.",
            "Developed a digital currency education app for a real-world case study."
          ]
        },
        {
          role: "DEI Intern",
          org: "Colgate-Palmolive Company",
          location: "New York, NY",
          date: "July 2022 – August 2022",
          details: [
            "Worked with the VP of DEI on strategic partnerships and inclusive practices.",
            "Helped design inclusive products and attended cross-department DEI meetings."
          ]
        }
      ]
    },
    {
      category: "Leadership Experience",
      items: [
        {
          role: "Membership and Wellness Chair",
          org: "National Society of Black Engineers",
          location: "Evanston, IL",
          date: "Apr 2024 – Present",
          details: [
            "Boosted membership retention by 30% through recruitment and social programs.",
            "Built communication channels to support incoming freshmen."
          ]
        },
        {
          role: "Junior Executive Board - Membership",
          org: "National Society of Black Engineers",
          location: "Evanston, IL",
          date: "Jan 2024 – Apr 2024",
          details: [
            "Organized a Game Night for 50+ members and co-led a Valentine's Day fundraiser raising $300+."
          ]
        }
      ]
    }
  ];

  return (
    <div className="experience-page">
      <h1>{title}</h1>
      {experiences.map((section, index) => (
        <div key={index} className="experience-section">
          <h2>{section.category}</h2>
          <div className="experience-grid">
            {section.items.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-header">
                  <h3>{exp.role} @ {exp.org}</h3>
                  <p className="experience-date">{exp.date}</p>
                </div>
                <p className="experience-location">{exp.location}</p>
                <ul>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePage;

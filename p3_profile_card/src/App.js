
function App() {
  const skills = [
    {
      skill: 'HTML + CSS',
      level: 'advanced',
      color: '#2662EA'
    },
    {
      skill: 'JavaScript',
      level: 'advanced',
      color: '#EFD81D'
    },
    {
      skill: 'Git + Github',
      level: 'intermediate',
      color: '#E84F33'
    },
    {
      skill: 'React',
      level: 'basic',
      color: '#CEDCAF'
    },

  ]
  return (
    <div >
      <img src="https://cdn.pixabay.com/photo/2022/01/29/13/08/programming-6977450_1280.jpg"
        alt="dev" className="image" />

      <div>
        <h2>Ankit Kumar</h2>
        <p>Full-stack web developer and learner at udemy. When not coding or preparing
          a course, i like to watch shorts, timepass or to just enjoy to watch the
          movies and series
        </p>
        <br />

        {/* <div>

          <div style={{ color: 'red' }}>
            <span>HTML + css</span>
            <span>👍</span>
          </div>
          <div style={{ color: 'yellowgreen' }}>
            <span>React</span>
            <span>👌</span>
          </div>
          <div style={{ color: "turquoise" }}>
            <span>JavaScript</span>
            <span>✌️</span>
          </div>
          <div style={{ color: 'burlywood' }}>
            <span>Git + Github</span>
            <span>🤞</span>
          </div>
        </div> */}


        <div>
          {skills.map(skill => <div key={skill.skill} style={{ backgroundColor: skill.color }}>
            <span>{skill.skill}</span>
            <span>{skill.level}</span>
            <span>{skill.level === 'basic' && '👶'}</span>
            <span>{skill.level === 'intermediate' && '👍'}</span>
            <span>{skill.level === 'advanced' && '✌️'}</span>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;

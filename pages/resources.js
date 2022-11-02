export default function Resources () {
  const resources = [
    'Bible Lectionary',
    'Bible Reading Challenge',
    'Blog - Grace & Peace',
    'Letter From the Elders About Relocating to Moscow'
  ]
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <h2>(Draft to show resource items - styles will be added to final)</h2>
      <ul className="resources-list">
        {resources.map((resource, idx) => {
          return (
            <li key={idx} className="resources-list-item">{resource}</li>
          )
        })}
      </ul>
    </div>
  )
}
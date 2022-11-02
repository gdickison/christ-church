import Link from "next/link"

export default function Beliefs () {
  const beliefs = [
    'Our Mission',
    'Our Distinctives',
    'Our Constitution',
    'Our Book of Worship, Faith, & Practice',
    'Our Philosophy of Missions'
  ]

  return (
    <div className="beliefs-container">
      <h1 className="beliefs-headline">Doctrine & Beliefs</h1>
      <h2>(Draft to show included items - styles will be added to final)</h2>
      <div className="beliefs-content">
        <ul className="beliefs-list">
          {beliefs.map((belief, idx) => {
            return (
              <li key={idx} className="beliefs-list-item">
                <Link href="#">
                  {belief}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
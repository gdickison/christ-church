/* eslint-disable react/jsx-key */
import Link from "next/link"

export default function Ministries () {

  const ministries = [
    'Center For Biblical Counseling',
    'Collegiate Reformed Fellowship',
    'International Student Fellowship',
    'Ladies Outreach',
    'Mercy Ministry',
    <p>Bakw&eacute; Mission</p>,
    'Huguenot Heritage',
    'Grace Agenda',
    'Greyfriars Hall',
    'New Saint Andrews College'
  ]

  return (
    <div className="beliefs-container">
      <h1 className="beliefs-headline">Our Ministries</h1>
      <h2>(Draft to show ministry items - styles will be added to final)</h2>
      <div className="beliefs-content">
        <ul className="beliefs-list">
        {ministries.map((ministry, idx) => {
          return (
            <li key={idx} className="beliefs-list-item">
              <Link href="#">
                {ministry}
              </Link>
            </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}
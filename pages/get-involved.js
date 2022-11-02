export default function GetInvolved () {
  const stuff = [
    'Membership',
    'Parish Discipleship Groups',
    'Ministries',
    'Letter From the Elders About Relocating to Moscow',
    'Church Community Builder'
  ]
  return (
    <div className="get-involved-container">
      <h1>Get involved</h1>
      <h2>(Draft to show involvement opportunities - styles will be added to final)</h2>
      <ul className="get-involved-list">
        {stuff.map((thing, idx) => {
          return (
            <li key={idx} className="get-involved-list-item">{thing}</li>
          )
        })}
      </ul>
    </div>
  )
}
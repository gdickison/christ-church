import ccIcon from '../public/cc_icon.jpg'
import Image from 'next/image'

export default function Events () {
  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
      </div>
      <div className="events">
        <div className="event">
          <Image className='event-image' src={ccIcon} alt="christ church logo"/>
          <div className="event-text">
            <h1>Reformation Day Psalm Sing</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus, blanditiis, asperiores architecto quidem placeat in quo nihil odit inventore debitis id a! Dolore tenetur dicta voluptatum, impedit odio temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus, blanditiis, asperiores architecto quidem placeat in quo nihil odit inventore debitis id a! Dolore tenetur dicta voluptatum, impedit odio temporibus.</p>
          </div>
        </div>
        <div className="event">
          <Image className='event-image' src={ccIcon} alt="christ church logo"/>
          <div className="event-text">
            <h1>Ladies Fall Outreach</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus, blanditiis, asperiores architecto quidem placeat in quo nihil odit inventore debitis id a! Dolore tenetur dicta voluptatum, impedit odio temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus, blanditiis, asperiores architecto quidem placeat in quo nihil odit inventore debitis id a! Dolore tenetur dicta voluptatum, impedit odio temporibus.</p>
          </div>
        </div>
        <div className="event">
          <Image className='event-image' src={ccIcon} alt="christ church logo"/>
          <div className="event-text">
            <h1>Beer & Pslams</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus, blanditiis, asperiores architecto quidem placeat in quo nihil odit inventore debitis id a! Dolore tenetur dicta voluptatum, impedit odio temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus, blanditiis, asperiores architecto quidem placeat in quo nihil odit inventore debitis id a! Dolore tenetur dicta voluptatum, impedit odio temporibus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
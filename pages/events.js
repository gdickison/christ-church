import Image from "next/image"
import gaImage from '../public/GA_2022_Final.jpeg'

export default function Events () {
  return (
    <div className="events-page-container">
      <h1>Events</h1>
      <h2>(Draft)</h2>
      <div className="events-page-content">
        <div className="events-content-image">
          <Image src={gaImage} alt="grace agenda" width={700}/>
        </div>
        <div className="events-content-text">
          <p>Date & Time....</p>
          <p>Location....</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia eius adipisci a ad recusandae omnis labore quasi excepturi nam, harum et nesciunt ducimus delectus distinctio saepe qui iure corporis?</p>
          <button>Register</button>
        </div>
      </div>
      <h1>More Events....</h1>
    </div>
  )
}
import { useState } from "react"
import WorshipModal from "../components/WorshipModal"

export default function WorshipWithUs () {
  const [showWorshipModal, setShowWorshipModal] = useState(false)

  const openWorshipModal = () => {
    setShowWorshipModal(true)
  }

  const closeWorshipModal = () => {
    setShowWorshipModal(false)
  }

  return (
    <div className="worship-container">
      <div className="worship-header"></div>
      <div className="worship-headline">
        <h1>You are warmly welcome to join us for one of our Lord&apos;s Day worship services!</h1>
        <h2 className="worship-modal" onClick={openWorshipModal}>What to Expect</h2>
      </div>
      <div className="worship-content">
        <div className="worship-location-card">
          <div className="worship-location-title">
            <h1>Christ Church Uptown</h1>
          </div>
          <div className="worship-location-section">
            <div className="worship-location-map">
              <div class="mapouter">
                {/* <div class="gmap_canvas"> */}
                  <iframe height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=1221%20West%20A%20Street,%20Moscow,%20Idaho,%2083843&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                {/* </div> */}
              </div>
            </div>
            <div className="worship-location-details">
              <h2>Logos Field House</h2>
              <address className="worship-location-address">
                <p>1221 W. A Street</p>
                <p>Moscow, ID 83843</p>
              </address>
              <div className="worship-location-times">
                <p>First Service - 8:30am</p>
                <p>Second Service - 10:30am</p>
                <p className="bulletin-download">
                  <a href="/CC_Uptown_Bulletin_2022_10_31.pdf" download>
                    Click Here for the Weekly Liturgy
                  </a>
                </p>
              </div>
              <div className="worship-location-info">
                <p><span>Parking: </span>Limited parking is available in the field house lot. We have reserved spaces there for people who cannot walk distances. Parking is also available in the Logos School lots on Baker Street. Street parking is available on Baker Street and A Street - just be sure not to park in the bike lanes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="worship-location-card">
          <div className="worship-location-title">
            <h1>Christ Church Downtown</h1>
          </div>
          <div className="worship-location-section">
          <div className="worship-location-map">
              <div class="mapouter">
                {/* <div class="gmap_canvas"> */}
                  <iframe height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=417%20South%20Jackson%20Street,%20Moscow,%20Idaho,%2083843&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                {/* </div> */}
              </div>
            </div>
            <div className="worship-location-details">
              <h2>Chalmers Hall</h2>
              <address className="worship-location-address">
                <p>417 South Jackson Street</p>
                <p>Moscow, ID 83843</p>
              </address>
              <div className="worship-location-times">
                <p>First Service - 8:30am</p>
                <p>Second Service - 10:30am</p>
                <p className="bulletin-download">
                  <a href="/CC_Uptown_Bulletin_2022_10_31.pdf" download>
                    Click Here for the Weekly Liturgy
                  </a>
                </p>
              </div>
              <div className="worship-location-info">
                <p><span>Parking: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis aperiam ipsam cupiditate libero nam, architecto enim sed reprehenderit magnam sunt molestias esse consequatur labore. Voluptatum in nam consequatur libero!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="worship-location-card">
          <div className="worship-location-title">
            <h1>Christ Church Troy</h1>
          </div>
          <div className="worship-location-section">
          <div className="worship-location-map">
              <div class="mapouter">
                {/* <div class="gmap_canvas"> */}
                  <iframe height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=525%20South%20Main%20Street,%20Troy,%20Idaho,%2083871&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                {/* </div> */}
              </div>
            </div>
            <div className="worship-location-details">
              {/* <h2>Logos Field House</h2> */}
              <address className="worship-location-address">
                <p>525 South Main Street</p>
                <p>Troy, ID 83871</p>
              </address>
              <div className="worship-location-times">
                <p>Service - 9:00am</p>
                <p className="bulletin-download">
                  <a href="/CC_Uptown_Bulletin_2022_10_31.pdf" download>
                    Click Here for the Weekly Liturgy
                  </a>
                </p>
              </div>
              <div className="worship-location-info">
                <p><span>Parking: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis aperiam ipsam cupiditate libero nam, architecto enim sed reprehenderit magnam sunt molestias esse consequatur labore. Voluptatum in nam consequatur libero!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showWorshipModal &&
        <WorshipModal
          closeModal={closeWorshipModal}
        />
      }
    </div>
  )
}
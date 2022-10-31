import Image from "next/image"
import Link from "next/link"
import fb from "../public/fb_icon.png"
import insta from "../public/insta_icon.png"
import twitter from "../public/twitter_icon.png"

export default function Footer () {
  return (
    <div className="footer-container">
      <div className="footer-col footer-col1">
        <h1>Contact</h1>
        <h2>Email</h2>
        <Link className="footer-email" href="mailto:office@christkirk.com">office@christkirk.com</Link>
        <h2>Church Office</h2>
        <Link href="https://maps.google.com/?q=403 South Jackson Street, Moscow, Idaho, 83843" target="_blank">
          <address className="footer-address">
            <p>403 S. Jackson Street</p>
            <p>Moscow, ID 83843</p>
          </address>
            <span>(Parking is in the back)</span>
            <p>208-882-2034</p>
        </Link>
      </div>
      <div className="footer-col footer-col2">
        <h1>Worship Services</h1>
        <h2>Logos Fieldhouse</h2>
        <Link href="https://maps.google.com/?q=1221 West A Street, Moscow, Idaho, 83843" target="_blank">
          <address className="footer-address">
            <p>1221 W. A Street</p>
            <p>Moscow, ID 83843</p>
          </address>
        </Link>
        <p>8:30am & 10:30am</p>
        <h2>Chalmers Hall</h2>
        <Link href="https://maps.google.com/?q=417 South Jackson Street, Moscow, Idaho, 83843" target="_blank">
          <address className="footer-address">
            <p>417 S. Jackson Street</p>
            <p>Moscow, ID 83843</p>
          </address>
        </Link>
        <p>8:30am & 10:30am</p>
        <h2>Christ Church Troy</h2>
        <Link href="https://maps.google.com/?q=525 South Main Street, Troy, Idaho, 83871" target="_blank">
          <address className="footer-address">
            <p>525 S. Main Street</p>
            <p>Troy, ID 83871</p>
          </address>
        </Link>
        <p>9:00am</p>
      </div>
      <div className="footer-col footer-col3">
        <h1>Stay Connected</h1>
        <p>If you are attending Christ Church and would like to be on the church email list please contact the church office. We would love to have you connected to the church body.</p>
        <h1>Social Media</h1>
        <div className="footer-social">
          <p>
            <Link href="https://www.facebook.com/ChristKirk" target="_blank">
              <Image src={fb} alt="Facebook Logo" width={40}/>
            </Link>
          </p>
          <p>
            <Link href="https://www.instagram.com/christkirk/" target="_blank">
              <Image src={insta} alt="Instagram" width={40}/>
            </Link>
          </p>
          <p>
            <Link href="https://twitter.com/Christ_Kirk" target="_blank">
              <Image src={twitter} alt="Twitter" width={40}/>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
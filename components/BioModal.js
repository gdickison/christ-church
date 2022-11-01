import Image from 'next/image'
import Link from 'next/link'
import male from '../public/portrait_placeholder_male.jpg'

export default function BioModal ({closeModal, bioName}) {
  return (
    <div className="bio-modal-container">
      <button className="absolute top-4 right-4 w-14 h-14 pl-4 hover:cursor-pointer" onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000" className="flex-shrink-0 w-8 h-8">
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
        </svg>
      </button>
      <div className="bio-image">
        <Image src={male} alt="placeholder"/>
      </div>
      <div className="bio-text">
        <h1>{bioName}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda obcaecati optio debitis consequuntur aspernatur tenetur eveniet, dignissimos quasi maiores blanditiis facilis explicabo reiciendis adipisci dolores sint, commodi mollitia? Ab, obcaecati.
        </p>
        <Link href="#">Optional link to blog</Link>
      </div>
    </div>
  )
}
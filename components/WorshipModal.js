export default function WorshipModal ({closeModal}) {
  return (
    <div className="worship-modal-container">
      <button className="absolute top-4 right-4 w-14 h-14 pl-4 hover:cursor-pointer" onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000" className="flex-shrink-0 w-8 h-8">
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
        </svg>
      </button>
      <div className="worship-video">
        <iframe width="720" height="405" src="https://www.youtube.com/embed/PndihGv3akA" frameborder="0"></iframe>
      </div>
    </div>
  )
}
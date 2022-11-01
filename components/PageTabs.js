import SectionTabs from "./SectionTabs"
import { useState } from "react"

const PageTabs = () => {
  const [pageTabValue, setPageTabValue] = useState('first')

  const handlePageTabChange = e => {
    console.log(e.target.value)
    setPageTabValue(e.target.value)
  }

  return (
    <div className="page-tabs-container">
      <h1>About Christ Church</h1>
      <div className="page-tabs">
        <div className="page-tab">
          <input type="radio" id="page-tab-1" name="page-tabs" value='first' checked={pageTabValue === 'first'} onChange={handlePageTabChange}/>
          <label className="page-tab-label" htmlFor="page-tab-1">Leadership</label>
          <div className="page-tab-content">
            <SectionTabs/>
          </div>
        </div>
        <div className="page-tab">
          <input type="radio" id="page-tab-2" name="page-tabs" value='second' checked={pageTabValue === 'second'} onChange={handlePageTabChange}/>
          <label className="page-tab-label" htmlFor="page-tab-2">History</label>
          <div className="page-tab-content">
            <p>TWO - Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero iure quos molestias, autem hic odio tenetur. Possimus eveniet impedit placeat illum temporibus. Blanditiis cupiditate voluptates nesciunt neque tempore nisi.</p>
          </div>
        </div>
        <div className="page-tab">
          <input type="radio" id="page-tab-3" name="page-tabs" value='third' checked={pageTabValue === 'third'} onChange={handlePageTabChange}/>
          <label className="page-tab-label" htmlFor="page-tab-3">Doctrine</label>
          <div className="page-tab-content">
            <p>THREE - Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero iure quos molestias, autem hic odio tenetur. Possimus eveniet impedit placeat illum temporibus. Blanditiis cupiditate voluptates nesciunt neque tempore nisi.</p>
          </div>
        </div>
        <div className="page-tab">
          <input type="radio" id="page-tab-4" name="page-tabs" value='fourth' checked={pageTabValue === 'fourth'} onChange={handlePageTabChange}/>
          <label className="page-tab-label" htmlFor="page-tab-4">CREC</label>
          <div className="page-tab-content">
            <p>FOUR - Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero iure quos molestias, autem hic odio tenetur. Possimus eveniet impedit placeat illum temporibus. Blanditiis cupiditate voluptates nesciunt neque tempore nisi.</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTabs
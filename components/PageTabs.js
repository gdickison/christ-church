import { useState } from "react"
import SectionTabs from "./SectionTabs"

export default function PageTabs(){
  const [openPageTab, setOpenPageTab] = useState('leadership')


  return(
    <div className="page-tabs-container">
      <div className="page-tabs-content">
        <ul className="page-tabs-list">
          <li className="page-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenPageTab('leadership')}
              className={`page-tabs-list-item-link ${openPageTab === 'leadership' ? 'open-tab' : ''}`}>Leadership</a>
          </li>
          <li className="page-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenPageTab('history')}
              className={`page-tabs-list-item-link ${openPageTab === 'history' ? 'open-tab' : ''}`}>History</a>
          </li>
          <li className="page-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenPageTab('doctrine')}
              className={`page-tabs-list-item-link ${openPageTab === 'doctrine' ? 'open-tab' : ''}`}>Doctrine</a>
          </li>
          <li className="page-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenPageTab('crec')}
              className={`page-tabs-list-item-link ${openPageTab === 'crec' ? 'open-tab' : ''}`}>CREC</a>
          </li>
        </ul>
        <div className={`open-page-tab-container ${openPageTab === 'leadership' ? 'show' : 'hide'}`}>
          <div className="open-page-tab-content">
            <SectionTabs/>
          </div>
        </div>
        <div className={`open-page-tab-container ${openPageTab === 'history' ? 'show' : 'hide'}`}>
          <div className="open-page-tab-content">
            History Content
          </div>
        </div>
        <div className={`open-page-tab-container ${openPageTab === 'doctrine' ? 'show' : 'hide'}`}>
          <div className="open-page-tab-content">
            Doctrine Content
          </div>
        </div>
        <div className={`open-page-tab-container ${openPageTab === 'crec' ? 'show' : 'hide'}`}>
          <div className="open-page-tab-content">
            CREC Content
          </div>
        </div>
      </div>
    </div>
  )
}
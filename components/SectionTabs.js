import { useState } from "react";
import BioModal from "./BioModal";
import male from '../public/portrait_placeholder_male.jpg'
import Image from "next/image";

export default function SectionTabs(){
  const [openSectionTab, setOpenSectionTab] = useState('pastors')
  const [showBioModal, setShowBioModal] = useState(false)
  const [bioName, setBioName] = useState('')

  const openModal = (e) => {
    setBioName(e.target.alt)
    setShowBioModal(true)
  }

  const closeModal = () => {
    setShowBioModal(false)
  }

  const pastors = [
    {
      name: 'Douglas Wilson',
      title: 'Senior Minister'
    },
    {
      name: 'Ben Zornes',
      title: 'Executive Minister / Downtown Pastor'
    },
    {
      name: 'Dr. Mike Lawyer',
      title: 'Pastor of Discipleship / Counseling'
    },
    {
      name: 'Jared Longshore',
      title: 'Associate Pastor'
    },
    {
      name: 'Toby Sumpter',
      title: "King's Cross Pastor (pro tem)"
    },
    {
      name: 'Dr. Ben Merkle',
      title: 'Christ Church Downtown Pastor'
    },
    {
      name: 'Matt Gray',
      title: 'Collegiate Reformed Fellowship Pastor'
    }
  ]

  const elders = [
    {
      name: 'Nate Wilson',
      title: 'Teaching Elder (on sabbatical)'
    },
    {
      name: 'Dr. Tim Edwards',
      title: 'Teaching Elder (on sabbatical)'
    },
    {
      name: 'Csaba Leidenfrost',
      title: 'Parish Elder / Bakwe Mission'
    },
    {
      name: 'Andrew Crapuchettes',
      title: 'Parish Elder'
    },
    {
      name: 'Bill Church',
      title: 'Parish Elder'
    },
    {
      name: 'Carson Sensing',
      title: 'Parish Elder'
    },
    {
      name: 'Francis Foucachon',
      title: 'Parish Elder'
    },
    {
      name: 'Dr. Gordon Wilson',
      title: 'Parish Elder'
    },
    {
      name: 'Dr. John Grauke',
      title: 'Parish Elder'
    },
    {
      name: 'John Carnahan',
      title: 'Parish Elder'
    },
    {
      name: 'Luke Jankovic',
      title: 'Parish Elder'
    },
    {
      name: 'Matt Meyer',
      title: 'Parish Elder'
    },
    {
      name: 'Max Ryan',
      title: 'Parish Elder'
    },
    {
      name: 'Nick Holloway',
      title: 'Parish Elder'
    },
    {
      name: 'Tom Miller',
      title: 'Parish Elder'
    },
    {
      name: 'Tim Mortimore',
      title: 'Parish Elder'
    }
  ]

  const deacons = [
    {
      name: 'Isaac Grauke'
    },
    {
      name: 'Jim Crapuchettes'
    },
    {
      name: 'Rob Sentz'
    },
    {
      name: 'Mike Church'
    },
    {
      name: 'Dave Williams'
    },
    {
      name: 'Marc Rust'
    },
    {
      name: 'Greg Ditton'
    },
    {
      name: 'Curtis Spencer'
    },
  ]

  const staff = [
    {
      name: 'Christine LaMoreaux',
      title: 'Administrative Secretary'
    },
    {
      name: 'Lindsey Doolan',
      title: 'Administrative Secretary'
    },
    {
      name: 'Dr. Mark Reagan',
      title: 'Music Director'
    },
    {
      name: 'Shawn Paterson',
      title: 'Content Director / Pastoral Assistant'
    },
    {
      name: 'Aaron Ventura',
      title: 'Pastoral Assistant'
    },
    {
      name: 'Christine Stokes',
      title: 'Accountant'
    },
    {
      name: 'Mary Beth Bray',
      title: 'Events Coordinator'
    },
    {
      name: 'Zachary Wilke',
      title: 'Pastoral Assistant'
    },
  ]

  return (
    <div className="section-tabs-container">
      <div className="section-tabs-content">
        <ul className="section-tabs-list">
          <li className="section-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenSectionTab('pastors')}
              className={`section-tabs-list-item-link ${openSectionTab === 'pastors' ? 'open-tab' : ''}`}>Pastors</a>
          </li>
          <li className="section-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenSectionTab('elders')}
              className={`section-tabs-list-item-link ${openSectionTab === 'elders' ? 'open-tab' : ''}`}>Elders</a>
          </li>
          <li className="section-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenSectionTab('deacons')}
              className={`section-tabs-list-item-link ${openSectionTab === 'deacons' ? 'open-tab' : ''}`}>Deacons</a>
          </li>
          <li className="section-tabs-list-item">
            <a
              href="#"
              onClick={() => setOpenSectionTab('staff')}
              className={`section-tabs-list-item-link ${openSectionTab === 'staff' ? 'open-tab' : ''}`}>Staff</a>
          </li>
        </ul>
        <div className={`open-section-tab-container ${openSectionTab === 'pastors' ? 'show' : 'hide'}`}>
          <div className="open-section-tab-content">
            {pastors.map((person, idx) => {
              return (
                <div key={idx} className="bio">
                  <Image src={male} alt={person.name} width={250} onClick={openModal}/>
                  <p>{person.name}</p>
                  <p>{person.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className={`open-section-tab-container ${openSectionTab === 'elders' ? 'show' : 'hide'}`}>
          <div className="open-section-tab-content">
            {elders.map((person, idx) => {
              return (
                <div key={idx} className="bio">
                  <Image src={male} alt={person.name} width={250} onClick={openModal}/>
                  <p>{person.name}</p>
                  <p>{person.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className={`open-section-tab-container ${openSectionTab === 'deacons' ? 'show' : 'hide'}`}>
          <div className="open-section-tab-content">
            {deacons.map((person, idx) => {
              return (
                <div key={idx} className="bio">
                  <Image src={male} alt={person.name} width={250} onClick={openModal}/>
                  <p>{person.name}</p>
                  <p>{person.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className={`open-section-tab-container ${openSectionTab === 'staff' ? 'show' : 'hide'}`}>
          <div className="open-section-tab-content">
            {staff.map((person, idx) => {
              return (
                <div key={idx} className="bio">
                  <Image src={male} alt={person.name} width={250} onClick={openModal}/>
                  <p>{person.name}</p>
                  <p>{person.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {showBioModal &&
        <BioModal
          closeModal={closeModal}
          bioName={bioName}
        />
      }
    </div>
  )
}
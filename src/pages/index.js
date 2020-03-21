import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import overview from '../assets/images/overview.jpg'
import history from '../assets/images/history.jpg'
import culture from '../assets/images/culture.jpg'
import demographics from '../assets/images/demographics.jpg'
import languages from '../assets/images/languages.jpg'
import administration from '../assets/images/administration.jpg'
import festivals from '../assets/images/festivals.jpg'
import landscape from '../assets/images/landscape.jpg'
import sports from '../assets/images/sports.jpg'
import cuisine from '../assets/images/cuisine.jpg'
import water from '../assets/images/water.jpg'
import passes from '../assets/images/passes.jpg'
import buddhists from '../assets/images/buddhists.jpg'
import muslims from '../assets/images/muslims.jpg'
import church from '../assets/images/church.jpg'
import tribals from '../assets/images/tribals.jpg'
import fauna from '../assets/images/fauna.jpg'
import energy from '../assets/images/energy.jpg'
import climate from '../assets/images/climate.jpg'
import economy from '../assets/images/economy.jpg'
import transport from '../assets/images/transport.jpg'
import music from '../assets/images/music.jpg'
import socialStatus from '../assets/images/social-status.jpg'
import medicine from '../assets/images/medicine.jpg'
import university from '../assets/images/university.jpg'
import media from '../assets/images/media.jpg'
import jtn from '../assets/images/jtn.jpg'
import calendar from '../assets/images/calendar.jpg'
import hospital from '../assets/images/hospital.jpg'
import tourism from '../assets/images/tourism.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Jullay Ladakhi | Edson Frainlar Inghyasi"
          meta={[
            { name: 'description', content: '' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${overview})` }}>
              <header className="major">
                <h3>Overview</h3>
                <p>Introduction to Ladakh and it's socio-culture</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${history})` }}>
              <header className="major">
                <h3>History</h3>
                <p>Summary of the Ladakh and Ladakhi's History</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${culture})` }}>
              <header className="major">
                <h3>Culture & Heritage</h3>
                <p>
                  Know about the Culture and Heritage of Ladakh and its National
                  Monuments and Religious Places
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${demographics})` }}>
              <header className="major">
                <h3>Demographics</h3>
                <p>Divided by faiths but united as Ladakhis</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${languages})` }}>
              <header className="major">
                <h3>Languages</h3>
                <p>
                  The only Geo-thermal Territory of India with high
                  possibilities of Renewable Energy Industries.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${administration})` }}>
              <header className="major">
                <h3>Administration</h3>
                <p>
                  Administered as a union territory without a legislative
                  assembly by the Indian Union
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${festivals})` }}>
              <header className="major">
                <h3>Festivals</h3>
                <p>
                  Ladakh is a festive Territory throughout the year. Short
                  summary of the Ladakhi's Festivals.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${landscape})` }}>
              <header className="major">
                <h3>Landscape</h3>
                <p>
                  With ice walls and rocks dividing the Indus Valley, the region
                  provides breathtaking visuals of its magnificent landscapes
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${sports})` }}>
              <header className="major">
                <h3>Sports & Adventure</h3>
                <p>
                  Ladakh - A dreamland for Sports and Adventure Enthusiasts.
                  Know about the Sports and Adventure spots of Ladakh.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${cuisine})` }}>
              <header className="major">
                <h3>Cuisine</h3>
                <p>Explore the High Altitude Cuisine of Ladakh</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${water})` }}>
              <header className="major">
                <h3>Water Sources</h3>
                <p>
                  A Land of Trans Himalayan Desert but it is still Home to many
                  Rivers big and small
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${passes})` }}>
              <header className="major">
                <h3>Passes</h3>
                <p>
                  Ladakh is an exotic destination with plenty of high passes,
                  steep mountains and valleys abound.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${buddhists})` }}>
              <header className="major">
                <h3>Ladakhi Buddhists</h3>
                <p>
                  An Indian Culture deeply influenced by Tibetan Buddhism, which
                  follows the Mahayana and Vajrayana schools.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${muslims})` }}>
              <header className="major">
                <h3>Ladakhi Muslims</h3>
                <p>
                  A Tibetan Landscape with the blend of Shia, Sunni and
                  Noorbakshia Islam with Persian Influence
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${church})` }}>
              <header className="major">
                <h3>Ladakhi Religious Minorities</h3>
                <p>
                  Secular Indian Territory with Sikhs, Hindus, Christians and
                  Bon Religions
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${tribals})` }}>
              <header className="major">
                <h3>Tribal Groups</h3>
                <p>
                  A Tribal Territory with 92 Percentage of Ladakhis comes under
                  the Scheduled Tribes
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${fauna})` }}>
              <header className="major">
                <h3>Flora & Fauna</h3>
                <p>
                  Amazing Himalayan Wildlife with 225 species of birds and big
                  land animals such as Wild Yak etc.,
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${energy})` }}>
              <header className="major">
                <h3>Energy Resources</h3>
                <p>
                  The only Geo-thermal Territory of India with high
                  possibilities of Renewable Energy Industries.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${climate})` }}>
              <header className="major">
                <h3>Climate & Weather</h3>
                <p>
                  A challenging Climatic condition that ranges from pleasant to
                  extremely challenging as both Winters and Summers are severe
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${economy})` }}>
              <header className="major">
                <h3>Economy</h3>
                <p>
                  Well Silk route connected region in India with potential
                  economies in Tourism, Agriculture and Energy.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${transport})` }}>
              <header className="major">
                <h3>Transportation</h3>
                <p>
                  Laced with handsome snow clad mountains, lush greenery and
                  amazing trails that can easily make any biker dream come true
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${music})` }}>
              <header className="major">
                <h3>Music & Dance</h3>
                <p>
                  Land characterized by heritage inspirations, slow dance
                  movements depicting ancient legends, sparkling show of
                  majestic head dress, beautiful attires and melodious musical
                  compositions
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${socialStatus})` }}>
              <header className="major">
                <h3>Social Status</h3>
                <p>
                  Like rest of India, Ladakh too follow a strict patriarchal
                  beliefs but high status and relative emancipation enjoyed by
                  women compared to other rural parts of India
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${medicine})` }}>
              <header className="major">
                <h3>Amchi Medicine</h3>
                <p>
                  Follows a unique Medication ideology based upon Buddhist
                  literature (Abhidharma and Vajrayana tantras) and Ayurveda
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${university})` }}>
              <header className="major">
                <h3>Education</h3>
                <p>
                  Schools are well distributed but 75% of them provide only
                  primary education but absenteeism of both students and
                  teachers remains high
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${media})` }}>
              <header className="major">
                <h3>Media</h3>
                <p>
                  Emerging Indian Media Industry with difference in Language,
                  Culture and Landscape with very high opportunities
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${jtn})` }}>
              <header className="major">
                <h3>VIPs</h3>
                <p>List of VIPs you should know in Ladakh</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${calendar})` }}>
              <header className="major">
                <h3>Ladakhi Calendar</h3>
                <p>
                  Uses the Tibetan calendar for, among other things, determining
                  the dates of monastic festivals.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${tourism})` }}>
              <header className="major">
                <h3>Tourism</h3>
                <p>
                  Called the adventure capital of the country for a genuine
                  reason. The geographical location of the place makes it an
                  ultimate destination for anyone looking for an adrenaline
                  filled vacation.{' '}
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${hospital})` }}>
              <header className="major">
                <h3>Public Health</h3>
                <p>
                  Limited Public Health Facility centrally located at Leh, the Capital of Ladakh.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>

          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Post your Ladakh Articles here</h2>
              </header>
              <p>
                Want to publish your Articles in this Website? Please ping me at edsonfrainlari@gmail.com
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

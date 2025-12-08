import React from 'react';

const Home = ({ hideNav }) => {
  return (
    <section onClick={hideNav} id="content" className="landing">
      <h1 id="title" className="hidden">Peng Zuqiang</h1>

      <p><b>Exhibition Projects :</b></p>

      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://thecommonguild.org.uk/programme/peng-zuqiang-afternoon-hearsay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Afternoon Hearsay</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        The Common Guild, Glasgow, Oct 11 – Dec 7, 2025
      </p>
      <br />
      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://www.rockbundartmuseum.org/exhibition/peng-zuqiang-short-term-histories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Short-term Histories</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        Rockbund Art Museum, Shanghai, Nov 6, 2025 – Apr 26, 2026
      </p>
<br />
      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://www.emalin.co.uk/exhibitions/condo-london-2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Evidence</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
          , Emalin / Antenna Space, London, 2025
        </span>
      </p>

      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://fsrr.org/mostre-category/peng-zuqiang-vestiges/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Vestiges</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
          , Fondazione Sandretto Re Rebaudengo, Turin, 2023
        </span>
      </p>
<br />
      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://www.kevinspace.org/program/peng-zuqiang-vestiges"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Vestiges</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
          , Kevin Space, Vienna, 2023
        </span>
      </p>
<br />
      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://www.cellprojects.org/exhibitions/peng-zuqiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Sideways Looking</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
          , Cell Project Space, London, 2022
        </span>
      </p>
<br />
      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="http://antenna-space.com/en/antenna-tenna/pengzuqianghaiweimingmingdepianke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Hesitations</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
          , ANTENNA-TENNA, Shanghai, 2021
        </span>
      </p>

      <p><b>Recents:</b></p>

      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://carpenter.center/programs/an-evening-with-tulapop-andrew"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Herein, Out of Range</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        Carpenter Center for the Visual Arts, Harvard. Nov 20, 2025
      </p>
<br />
      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://beautravail.se/entry/mesopic-strophes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Mesopic strophes</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        Beau Travail, Nov 22 - Dec 20, 2025
      </p>
<br />
      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://wattis.org/calendar/wednesday-september-24-2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Film screening: Mary Helena Clark, Peng Zuqiang</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        The Wattis Institute, San Francisco. September 24, 2025
      </p>
    </section>
  );
};

export default Home;

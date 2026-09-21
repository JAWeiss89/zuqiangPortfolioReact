import React from 'react';

const Home = ({ hideNav }) => {
  return (
    <section onClick={hideNav} id="content" className="landing">
      <h1 id="title" className="hidden">Peng Zuqiang</h1>

      <p><b>Exhibition Projects :</b></p>

     <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://thecommonguild.org.uk/programme/peng-zuqiang-afternoon-hearsay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Afternoon Hearsay</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
             , The Common Guild, Glasgow, 2025
        </span>
      </p>
             <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://www.rockbundartmuseum.org/exhibition/peng-zuqiang-short-term-historiesy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Short-term Histories</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
             , Rockbund Art Museum, Shanghai, 2025
        </span>
      </p>
             <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="https://www.concordia.nl/en/agenda/chronical"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Chronical</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
             , Concordia, Enschede, 2026
        </span>
      </p>
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

      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap' }}>
        <a
          href="http://antenna-space.com/en/antenna-tenna/pengzuqianghaiweimingmingdepianke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Hesitations</em>
        </a>{' '}
        <span style={{ fontSize: '12px' }}>
             , Antenna-Tenna, Shanghai, 2021
        </span>
      </p>

      <p><b>Recents:</b></p>

      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://spareroomparis.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Alexandre Khondji, Peng Zuqiang</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
       Spare Room, Paris. Oct 8 - Nov 26, 2026
      </p>
<br />
      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://www.asymmetryart.org/public-programme/a-cut-became-an-opening"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>a cut became an opening</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        Asymmetry, London. Oct 13 - Dec 11, 2026
      </p>

          <br />
      <p style={{ margin: '0px', fontSize: '14px' }}>
        <a
          href="https://combatbreathing.net/read-my-desire"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Read My Desire, (part II)</em>
        </a>
      </p>
      <p style={{ margin: '0px', fontSize: '12px' }}>
        Combat Breathing * Anthology Film Archives, New York. Oct 8, 2026
      </p>
    </section>
  );
};

export default Home;

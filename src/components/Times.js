import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../assets/styles/timesStyle.css';

let HaloReachLegendary = {
  WinterContingency: '10:38',
  ONISwordBase: '11:06',
  Nightfall: '05:47',
  TipoftheSpear: '24:01',
  LongNightofSolace: '33:32',
  Exodus: '37:12',
  NewAlexandria: '31:21',
  ThePackage: '43:29',
  ThePillarofAutumn: '01:09:19',
};

let HaloCELegendary = {
  ThePillarofAutumn: '09:09',
  Halo: '27:46',
  TheTruthandReconciliation: '01:37:20',
  TheSilentCartographer: '55:29',
  AssaultontheControlRoom: '06:20',
  threeFourThreeGuiltySpark: '09:03',
  TheLibrary: '32:19',
  TwoBetrayals: '01:19:22',
  TheMaw: '13:15',
};

let Halo2Legendary = {
  CarioStation: '11:18',
  Outskirts: '04:36',
  Metropolis: '08:18',
  TheArbiter: '07:36',
  TheOracle: '16:46',
  DeltaHalo: '03:58',
  Regret: '17:44',
  SacredIcon: '12:04',
  QuarantineZone: '08:19',
  Gravemind: '29:52',
  Uprising: '01:59',
  HighCharity: '05:21',
  TheGreatJourney: '17:40',
};
let Halo3Legendary = {
  Sierra117: '31:49',
  CrowsNest: '19:09',
  TsavoHighway: '13:55',
  TheStorm: '28:33',
  Floodgate: '10:13',
  TheArk: '42:33',
  TheCovenant: '01:00:22',
  Cortana: '34:00',
  Halo: '17:06',
};

let Halo3ODSTLegendary = {
  TayariPlaza: '10:26',
  UpliftReserve: '07:23',
  KizingoBoulevard: '16:57',
  ONIAlphaSite: 'TBD',
  NMPDHQ: 'TBD',
  KikowaniStation: 'TBD',
  DataHive: 'TBD',
  CoastalHighway: 'TBD',
};

let Halo4Legendary = {
  Dawn: '19:45',
  Requiem: '30:06',
  Forerunner: 'TBD',
  Infinity: 'TBD',
  Reclaimer: 'TBD',
  Shutdown: 'TBD',
  Composer: 'TBD',
  Midnight: 'TBD',
};

function Times() {
  return (
    <Container>
      <div id="haloTitles">
        <Row id="haloReachTitle">
          <Col>
            <div className="titleText">Halo Reach Legendary: </div>
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
            <div className="level4"></div>
            <div className="level5"></div>
            <div className="level6"></div>
            <div className="level7"></div>
            <div className="level8"></div>
          </Col>
        </Row>
        <Row id="haloCETitle">
          <Col>
            <div className="titleText">Halo CE Legendary: </div>
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
            <div className="level4"></div>
            <div className="level5"></div>
            <div className="level6"></div>
            <div className="level7"></div>
            <div className="level8"></div>
          </Col>
        </Row>
        <Row id="halo2Title">
          <Col>
            <div className="titleText">Halo 2 Legendary: </div>
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
            <div className="level4"></div>
            <div className="level5"></div>
            <div className="level6"></div>
            <div className="level7"></div>
            <div className="level8"></div>
          </Col>
        </Row>
        <Row id="halo3Title">
          <Col>
            <div className="titleText">Halo 3 Legendary: </div>
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
            <div className="level4"></div>
            <div className="level5"></div>
            <div className="level6"></div>
            <div className="level7"></div>
            <div className="level8"></div>
          </Col>
        </Row>
        <Row id="halo3ODSTTitle">
          <Col>
            <div className="titleText">Halo 3 ODST Legendary: </div>
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
            <div className="level4"></div>
            <div className="level5"></div>
            <div className="level6"></div>
            <div className="level7"></div>
            <div className="level8"></div>
          </Col>
        </Row>
        <Row id="halo4Title">
          <Col>
            <div className="titleText">Halo 4 Legendary: </div>
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
            <div className="level4"></div>
            <div className="level5"></div>
            <div className="level6"></div>
            <div className="level7"></div>
            <div className="level8"></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Times;

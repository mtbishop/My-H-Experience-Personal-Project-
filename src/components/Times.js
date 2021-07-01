import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../assets/styles/timesStyle.css';

let HaloReachLegendary = {
  WinterContingency: {
    levelName: 'Winter Contingency',
    time: '10:38',
  },
  ONISwordBase: {
    levelName: 'ONI: Sword Base',
    time: '11:06',
  },
  Nightfall: {
    levelName: 'Nightfall',
    time: '05:47',
  },
  TipoftheSpear: {
    levelName: 'Tip of the Spear',
    time: '24:01',
  },
  LongNightofSolace: {
    levelName: 'Long Night of Solace',
    time: '33:32',
  },
  Exodus: {
    levelName: 'Exodus',
    time: '37:12',
  },
  NewAlexandria: {
    levelName: 'New Alexandria',
    time: '31:21',
  },
  ThePackage: {
    levelName: 'The Package',
    time: '43:29',
  },
  ThePillarofAutumn: {
    levelName: 'The Pillar of Autumn',
    time: '01:09:19',
  },
};

let HaloCELegendary = {
  ThePillarofAutumn: {
    levelName: '',
    time: '09:09',
  },
  Halo: {
    levelName: '',
    time: '27:46',
  },
  TheTruthandReconciliation: {
    levelName: '',
    time: '01:37:20',
  },
  TheSilentCartographer: {
    levelName: '',
    time: '55:29',
  },
  AssaultontheControlRoom: {
    levelName: '',
    time: '06:20',
  },
  threeFourThreeGuiltySpark: {
    levelName: '',
    time: '09:03',
  },
  TheLibrary: {
    levelName: '',
    time: '32:19',
  },
  TwoBetrayals: {
    levelName: '',
    time: '01:19:22',
  },
  TheMaw: {
    levelName: '',
    time: '13:15',
  },
};

let Halo2Legendary = {
  CarioStation: {
    levelName: '',
    time: '11:18',
  },
  Outskirts: {
    levelName: '',
    time: '04:36',
  },
  Metropolis: {
    levelName: '',
    time: '08:18',
  },
  TheArbiter: {
    levelName: '',
    time: '07:36',
  },
  TheOracle: {
    levelName: '',
    time: '16:46',
  },
  DeltaHalo: {
    levelName: '',
    time: '03:58',
  },
  Regret: {
    levelName: '',
    time: '17:44',
  },
  SacredIcon: {
    levelName: '',
    time: '12:04',
  },
  QuarantineZone: {
    levelName: '',
    time: '08:19',
  },
  Gravemind: {
    levelName: '',
    time: '29:52',
  },
  Uprising: {
    levelName: '',
    time: '01:59',
  },
  HighCharity: {
    levelName: '',
    time: '05:21',
  },
  TheGreatJourney: {
    levelName: '',
    time: '17:40',
  },
};
let Halo3Legendary = {
  Sierra117: {
    levelName: '',
    time: '31:49',
  },
  CrowsNest: {
    levelName: '',
    time: '19:09',
  },
  TsavoHighway: {
    levelName: '',
    time: '13:55',
  },
  TheStorm: {
    levelName: '',
    time: '28:33',
  },
  Floodgate: {
    levelName: '',
    time: '10:13',
  },
  TheArk: {
    levelName: '',
    time: '42:33',
  },
  TheCovenant: {
    levelName: '',
    time: '01:00:22',
  },
  Cortana: {
    levelName: '',
    time: '34:00',
  },
  Halo: {
    levelName: '',
    time: '17:06',
  },
};

let Halo3ODSTLegendary = {
  TayariPlaza: {
    levelName: '',
    time: '10:26',
  },
  UpliftReserve: {
    levelName: '',
    time: '07:23',
  },
  KizingoBoulevard: {
    levelName: '',
    time: '16:57',
  },
  ONIAlphaSite: {
    levelName: '',
    time: 'TBD',
  },
  NMPDHQ: {
    levelName: '',
    time: 'TBD',
  },
  KikowaniStation: {
    levelName: '',
    time: 'TBD',
  },
  DataHive: {
    levelName: '',
    time: 'TBD',
  },
  CoastalHighway: {
    levelName: '',
    time: 'TBD',
  },
};

let Halo4Legendary = {
  Dawn: {
    levelName: '',
    time: '19:45',
  },
  Requiem: {
    levelName: '',
    time: '30:06',
  },
  Forerunner: {
    levelName: '',
    time: 'TBD',
  },
  Infinity: {
    levelName: '',
    time: 'TBD',
  },
  Reclaimer: {
    levelName: '',
    time: 'TBD',
  },
  Shutdown: {
    levelName: '',
    time: 'TBD',
  },
  Composer: {
    levelName: '',
    time: 'TBD',
  },
  Midnight: {
    levelName: '',
    time: 'TBD',
  },
};

function Times() {
  return (
    <Container>
      <div id="haloTitles">
        <Row id="haloReachTitle">
          <Col>
            <div className="titleText">Halo Reach Legendary: </div>
            <div className="level1">
              {HaloReachLegendary.WinterContingency.levelName}:{' '}
              {HaloReachLegendary.WinterContingency.time}
            </div>
            <div className="level2">
              {' '}
              {HaloReachLegendary.ONISwordBase.levelName}:{' '}
              {HaloReachLegendary.ONISwordBase.time}
            </div>
            <div className="level3">
              {' '}
              {HaloReachLegendary.Nightfall.levelName}:{' '}
              {HaloReachLegendary.Nightfall.time}
            </div>
            <div className="level4">
              {' '}
              {HaloReachLegendary.TipoftheSpear.levelName}:{' '}
              {HaloReachLegendary.TipoftheSpear.time}
            </div>
            <div className="level5">
              {' '}
              {HaloReachLegendary.LongNightofSolace.levelName}:{' '}
              {HaloReachLegendary.LongNightofSolace.time}
            </div>
            <div className="level6">
              {' '}
              {HaloReachLegendary.Exodus.levelName}:{' '}
              {HaloReachLegendary.Exodus.time}
            </div>
            <div className="level7">
              {' '}
              {HaloReachLegendary.NewAlexandria.levelName}:{' '}
              {HaloReachLegendary.NewAlexandria.time}
            </div>
            <div className="level8">
              {' '}
              {HaloReachLegendary.ThePackage.levelName}:{' '}
              {HaloReachLegendary.ThePackage.time}
            </div>
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
        <Row id="haloInfiniteTitle">
          <Col>
            <div className="titleText">Halo Infinite Legendary: </div>
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

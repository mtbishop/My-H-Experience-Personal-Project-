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
    levelName: 'The Pillar of Autumn',
    time: '09:09',
  },
  Halo: {
    levelName: 'Halo',
    time: '27:46',
  },
  TheTruthandReconciliation: {
    levelName: 'The Truth and Reconciliation',
    time: '01:37:20',
  },
  TheSilentCartographer: {
    levelName: 'The Silent Cartographer',
    time: '55:29',
  },
  AssaultontheControlRoom: {
    levelName: 'Assault on the Control Room',
    time: '06:20',
  },
  threeFourThreeGuiltySpark: {
    levelName: '343 Guilty Spark',
    time: '09:03',
  },
  TheLibrary: {
    levelName: 'The Library',
    time: '32:19',
  },
  TwoBetrayals: {
    levelName: 'Two Betrayals',
    time: '01:19:22',
  },
  TheMaw: {
    levelName: 'The Maw',
    time: '13:15',
  },
};

let Halo2Legendary = {
  CarioStation: {
    levelName: 'Cario Station',
    time: '11:18',
  },
  Outskirts: {
    levelName: 'Outskirts',
    time: '04:36',
  },
  Metropolis: {
    levelName: 'Metropolis',
    time: '08:18',
  },
  TheArbiter: {
    levelName: 'The Arbiter',
    time: '07:36',
  },
  TheOracle: {
    levelName: 'The Oracle',
    time: '16:46',
  },
  DeltaHalo: {
    levelName: 'Delta Halo',
    time: '03:58',
  },
  Regret: {
    levelName: 'Regret',
    time: '17:44',
  },
  SacredIcon: {
    levelName: 'Sacred Icon',
    time: '12:04',
  },
  QuarantineZone: {
    levelName: 'Quarantine Zone',
    time: '08:19',
  },
  Gravemind: {
    levelName: 'Gravemind',
    time: '29:52',
  },
  Uprising: {
    levelName: 'Uprising',
    time: '01:59',
  },
  HighCharity: {
    levelName: 'High Charity',
    time: '05:21',
  },
  TheGreatJourney: {
    levelName: 'The Great Journey',
    time: '17:40',
  },
};
let Halo3Legendary = {
  Sierra117: {
    levelName: 'Sierra 117',
    time: '31:49',
  },
  CrowsNest: {
    levelName: 'Crows Nest',
    time: '19:09',
  },
  TsavoHighway: {
    levelName: 'Tsavo Highway',
    time: '13:55',
  },
  TheStorm: {
    levelName: 'The Storm',
    time: '28:33',
  },
  Floodgate: {
    levelName: 'Floodgate',
    time: '10:13',
  },
  TheArk: {
    levelName: 'The Ark',
    time: '42:33',
  },
  TheCovenant: {
    levelName: 'The Covenant',
    time: '01:00:22',
  },
  Cortana: {
    levelName: 'Cortana',
    time: '34:00',
  },
  Halo: {
    levelName: 'Halo',
    time: '17:06',
  },
};

let Halo3ODSTLegendary = {
  TayariPlaza: {
    levelName: 'Tayari Plaza',
    time: '10:26',
  },
  UpliftReserve: {
    levelName: 'Uplift Reserve',
    time: '07:23',
  },
  KizingoBoulevard: {
    levelName: 'Kizingo Boulevard',
    time: '16:57',
  },
  ONIAlphaSite: {
    levelName: 'ONI Alpha Site',
    time: 'TBD',
  },
  NMPDHQ: {
    levelName: 'NMPDHQ',
    time: 'TBD',
  },
  KikowaniStation: {
    levelName: 'Kikowani Station',
    time: 'TBD',
  },
  DataHive: {
    levelName: 'Data Hive',
    time: 'TBD',
  },
  CoastalHighway: {
    levelName: 'Coastal Highway',
    time: 'TBD',
  },
};

let Halo4Legendary = {
  Dawn: {
    levelName: 'Dawn',
    time: '19:45',
  },
  Requiem: {
    levelName: 'Requiem',
    time: '30:06',
  },
  Forerunner: {
    levelName: 'Forerunner',
    time: 'TBD',
  },
  Infinity: {
    levelName: 'Infinity',
    time: 'TBD',
  },
  Reclaimer: {
    levelName: 'Reclaimer',
    time: 'TBD',
  },
  Shutdown: {
    levelName: 'Shutdown',
    time: 'TBD',
  },
  Composer: {
    levelName: 'Composer',
    time: 'TBD',
  },
  Midnight: {
    levelName: 'Midnight',
    time: 'TBD',
  },
};

let HaloInfiniteLegendary = {
  firstLevel: {
    levelName: 'TBD',
    time: 'TBD',
  },
};

function Times() {
  return (
    <div>
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
            <div className="level1">
              {' '}
              {HaloCELegendary.ThePillarofAutumn.levelName}:{' '}
              {HaloCELegendary.ThePillarofAutumn.time}
            </div>
            <div className="level2">
              {' '}
              {HaloCELegendary.Halo.levelName}: {HaloCELegendary.Halo.time}
            </div>
            <div className="level3">
              {' '}
              {HaloCELegendary.TheTruthandReconciliation.levelName}:{' '}
              {HaloCELegendary.TheTruthandReconciliation.time}
            </div>
            <div className="level4">
              {' '}
              {HaloCELegendary.TheSilentCartographer.levelName}:{' '}
              {HaloCELegendary.TheSilentCartographer.time}
            </div>
            <div className="level5">
              {' '}
              {HaloCELegendary.AssaultontheControlRoom.levelName}:{' '}
              {HaloCELegendary.AssaultontheControlRoom.time}
            </div>
            <div className="level6">
              {' '}
              {HaloCELegendary.threeFourThreeGuiltySpark.levelName}:{' '}
              {HaloCELegendary.threeFourThreeGuiltySpark.time}
            </div>
            <div className="level7">
              {' '}
              {HaloCELegendary.TheLibrary.levelName}:{' '}
              {HaloCELegendary.TheLibrary.time}
            </div>
            <div className="level8">
              {' '}
              {HaloCELegendary.TwoBetrayals.levelName}:{' '}
              {HaloCELegendary.TwoBetrayals.time}
            </div>
            <div className="level9">
              {' '}
              {HaloCELegendary.TheMaw.levelName}: {HaloCELegendary.TheMaw.time}
            </div>
          </Col>
        </Row>
        <Row id="halo2Title">
          <Col>
            <div className="titleText">Halo 2 Legendary: </div>
            <div className="level1">
              {' '}
              {Halo2Legendary.CarioStation.levelName}:{' '}
              {Halo2Legendary.CarioStation.time}
            </div>
            <div className="level2">
              {' '}
              {Halo2Legendary.Outskirts.levelName}:{' '}
              {Halo2Legendary.Outskirts.time}
            </div>
            <div className="level3">
              {' '}
              {Halo2Legendary.Metropolis.levelName}:{' '}
              {Halo2Legendary.Metropolis.time}
            </div>
            <div className="level4">
              {' '}
              {Halo2Legendary.TheArbiter.levelName}:{' '}
              {Halo2Legendary.TheArbiter.time}
            </div>
            <div className="level5">
              {' '}
              {Halo2Legendary.TheOracle.levelName}:{' '}
              {Halo2Legendary.TheOracle.time}
            </div>
            <div className="level6">
              {' '}
              {Halo2Legendary.DeltaHalo.levelName}:{' '}
              {Halo2Legendary.DeltaHalo.time}
            </div>
            <div className="level7">
              {' '}
              {Halo2Legendary.Regret.levelName}: {Halo2Legendary.Regret.time}
            </div>
            <div className="level8">
              {' '}
              {Halo2Legendary.SacredIcon.levelName}:{' '}
              {Halo2Legendary.SacredIcon.time}
            </div>
            <div className="level9">
              {' '}
              {Halo2Legendary.QuarantineZone.levelName}:{' '}
              {Halo2Legendary.QuarantineZone.time}
            </div>
            <div className="level10">
              {' '}
              {Halo2Legendary.Gravemind.levelName}:{' '}
              {Halo2Legendary.Gravemind.time}
            </div>
            <div className="level11">
              {' '}
              {Halo2Legendary.Uprising.levelName}:{' '}
              {Halo2Legendary.Uprising.time}
            </div>
            <div className="level12">
              {' '}
              {Halo2Legendary.HighCharity.levelName}:{' '}
              {Halo2Legendary.HighCharity.time}
            </div>
            <div className="level13">
              {' '}
              {Halo2Legendary.TheGreatJourney.levelName}:{' '}
              {Halo2Legendary.TheGreatJourney.time}
            </div>
          </Col>
        </Row>
        <Row id="halo3Title">
          <Col>
            <div className="titleText">Halo 3 Legendary: </div>
            <div className="level1">
              {' '}
              {Halo3Legendary.Sierra117.levelName}:{' '}
              {Halo3Legendary.Sierra117.time}
            </div>
            <div className="level2">
              {' '}
              {Halo3Legendary.CrowsNest.levelName}:{' '}
              {Halo3Legendary.CrowsNest.time}
            </div>
            <div className="level3">
              {' '}
              {Halo3Legendary.TsavoHighway.levelName}:{' '}
              {Halo3Legendary.TsavoHighway.time}
            </div>
            <div className="level4">
              {' '}
              {Halo3Legendary.TheStorm.levelName}:{' '}
              {Halo3Legendary.TheStorm.time}
            </div>
            <div className="level5">
              {' '}
              {Halo3Legendary.Floodgate.levelName}:{' '}
              {Halo3Legendary.Floodgate.time}
            </div>
            <div className="level6">
              {' '}
              {Halo3Legendary.TheArk.levelName}: {Halo3Legendary.TheArk.time}
            </div>
            <div className="level7">
              {' '}
              {Halo3Legendary.TheCovenant.levelName}:{' '}
              {Halo3Legendary.TheCovenant.time}
            </div>
            <div className="level8">
              {' '}
              {Halo3Legendary.Cortana.levelName}: {Halo3Legendary.Cortana.time}
            </div>
            <div className="level9">
              {' '}
              {Halo3Legendary.Halo.levelName}: {Halo3Legendary.Halo.time}
            </div>
          </Col>
        </Row>
        <Row id="halo3ODSTTitle">
          <Col>
            <div className="titleText">Halo 3 ODST Legendary: </div>
            <div className="level1">
              {' '}
              {Halo3ODSTLegendary.TayariPlaza.levelName}:{' '}
              {Halo3ODSTLegendary.TayariPlaza.time}
            </div>
            <div className="level2">
              {' '}
              {Halo3ODSTLegendary.UpliftReserve.levelName}:{' '}
              {Halo3ODSTLegendary.UpliftReserve.time}
            </div>
            <div className="level3">
              {' '}
              {Halo3ODSTLegendary.KizingoBoulevard.levelName}:{' '}
              {Halo3ODSTLegendary.KizingoBoulevard.time}
            </div>
            <div className="level4">
              {' '}
              {Halo3ODSTLegendary.ONIAlphaSite.levelName}:{' '}
              {Halo3ODSTLegendary.ONIAlphaSite.time}
            </div>
            <div className="level5">
              {' '}
              {Halo3ODSTLegendary.NMPDHQ.levelName}:{' '}
              {Halo3ODSTLegendary.NMPDHQ.time}
            </div>
            <div className="level6">
              {' '}
              {Halo3ODSTLegendary.KikowaniStation.levelName}:{' '}
              {Halo3ODSTLegendary.KikowaniStation.time}
            </div>
            <div className="level7">
              {' '}
              {Halo3ODSTLegendary.DataHive.levelName}:{' '}
              {Halo3ODSTLegendary.DataHive.time}
            </div>
            <div className="level8">
              {' '}
              {Halo3ODSTLegendary.CoastalHighway.levelName}:{' '}
              {Halo3ODSTLegendary.CoastalHighway.time}
            </div>
          </Col>
        </Row>
        <Row id="halo4Title">
          <Col>
            <div className="titleText">Halo 4 Legendary: </div>
            <div className="level1">
              {' '}
              {Halo4Legendary.Dawn.levelName}: {Halo4Legendary.Dawn.time}
            </div>
            <div className="level2">
              {' '}
              {Halo4Legendary.Requiem.levelName}: {Halo4Legendary.Requiem.time}
            </div>
            <div className="level3">
              {' '}
              {Halo4Legendary.Forerunner.levelName}:{' '}
              {Halo4Legendary.Forerunner.time}
            </div>
            <div className="level4">
              {' '}
              {Halo4Legendary.Infinity.levelName}:{' '}
              {Halo4Legendary.Infinity.time}
            </div>
            <div className="level5">
              {' '}
              {Halo4Legendary.Reclaimer.levelName}:{' '}
              {Halo4Legendary.Reclaimer.time}
            </div>
            <div className="level6">
              {' '}
              {Halo4Legendary.Shutdown.levelName}:{' '}
              {Halo4Legendary.Shutdown.time}
            </div>
            <div className="level7">
              {' '}
              {Halo4Legendary.Composer.levelName}:{' '}
              {Halo4Legendary.Composer.time}
            </div>
            <div className="level8">
              {' '}
              {Halo4Legendary.Midnight.levelName}:{' '}
              {Halo4Legendary.Midnight.time}
            </div>
          </Col>
        </Row>
        <Row id="haloInfiniteTitle">
          <Col>
            <div className="titleText">Halo Infinite Legendary: </div>
            <div className="level1">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level2">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level3">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level4">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level5">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level6">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level7">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
            <div className="level8">
              {' '}
              {HaloInfiniteLegendary.firstLevel.levelName}:{' '}
              {HaloInfiniteLegendary.firstLevel.time}
            </div>
          </Col>
        </Row>
      </div>
      <div class="grid">
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "1",
      grid-row-end: "1",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "1",
      grid-row-end: "1",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "1",
      grid-row-end: "1",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "1",
      grid-row-end: "1",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "2",
      grid-row-end: "2",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "2",
      grid-row-end: "2",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "2",
      grid-row-end: "2",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "2",
      grid-row-end: "2",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "3",
      grid-row-end: "3",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "3",
      grid-row-end: "3",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "3",
      grid-row-end: "3",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "3",
      grid-row-end: "3",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "4",
      grid-row-end: "4",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "4",
      grid-row-end: "4",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "4",
      grid-row-end: "4",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "4",
      grid-row-end: "4",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "5",
      grid-row-end: "5",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "5",
      grid-row-end: "5",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "5",
      grid-row-end: "5",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "5",
      grid-row-end: "5",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "6",
      grid-row-end: "6",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "6",
      grid-row-end: "6",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "6",
      grid-row-end: "6",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "6",
      grid-row-end: "6",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "7",
      grid-row-end: "7",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "7",
      grid-row-end: "7",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "7",
      grid-row-end: "7",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "7",
      grid-row-end: "7",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "8",
      grid-row-end: "8",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "8",
      grid-row-end: "8",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "8",
      grid-row-end: "8",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "8",
      grid-row-end: "8",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "9",
      grid-row-end: "9",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "9",
      grid-row-end: "9",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "9",
      grid-row-end: "9",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: "9",
      grid-row-end: "9",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "1"
      grid-column-end: "1",
      grid-row-start: "10",
      grid-row-end: "10",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "2"
      grid-column-end: "2",
      grid-row-start: "10",
      grid-row-end: "10",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "3"
      grid-column-end: "3",
      grid-row-start: "10",
      grid-row-end: "10",
      border: 1px "dashed",
    }}
        ></div>
        <div
          style={{
      grid-column-start: "4"
      grid-column-end: "4",
      grid-row-start: 1"0",
      grid-row-end: 1"0",
      border: 1px "dashed",
    }}
        ></div>
      </div>
    </Container>
    </div>
  );
}

export default Times;

function WCGames() {
  const teams = {
    qat: { team: "Qatar", abbreviation: "QAT" },
    ecu: { team: "Ecuador", abbreviation: "ECU" },
    sen: { team: "Senegal", abbreviation: "SEN" },
    ned: { team: "Netherlands", abbreviation: "NED" },
    eng: { team: "England", abbreviation: "ENG" },
    irn: { team: "Iran", abbreviation: "IRN" },
    usa: { team: "USA", abbreviation: "USA" },
    wal: { team: "Wales", abbreviation: "WAL" },
    arg: { team: "Argentina", abbreviation: "ARG" },
    ksa: { team: "Saudi Arabia", abbreviation: "KSA" },
    mex: { team: "Mexico", abbreviation: "MEX" },
    pol: { team: "Poland", abbreviation: "POL" },
    fra: { team: "France", abbreviation: "FRA" },
    aus: { team: "Australia", abbreviation: "AUS" },
    den: { team: "Denmark", abbreviation: "DEN" },
    tun: { team: "Tunisia", abbreviation: "TUN" },
    esp: { team: "Spain", abbreviation: "ESP" },
    crc: { team: "Costa Rica", abbreviation: "CRC" },
    ger: { team: "Germany", abbreviation: "GER" },
    jpn: { team: "Japan", abbreviation: "JPN" },
    bel: { team: "Belgium", abbreviation: "BEL" },
    can: { team: "Canada", abbreviation: "CAN" },
    mar: { team: "Morocco", abbreviation: "MAR" },
    cro: { team: "Croatia", abbreviation: "CRO" },
    bra: { team: "Brazil", abbreviation: "BRA" },
    srb: { team: "Serbia", abbreviation: "SRB" },
    sui: { team: "Switzerland", abbreviation: "SUI" },
    cmr: { team: "Cameroon", abbreviation: "CMR" },
    por: { team: "Portugal", abbreviation: "POR" },
    gha: { team: "Ghana", abbreviation: "GHA" },
    uru: { team: "Uruguay", abbreviation: "URU" },
    kor: { team: "South Korea", abbreviation: "KOR" },
  };
  const games = [
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T00:10:00.000Z" },
      teams: {
        away: teams.mia,
        home: teams.was,
      },
      odds: {
        spread: {
          current: {
            away: "+6.0",
            home: "-6.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+195", homeOdds: "-230" } },
      total: {
        current: { total: "216.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T00:40:00.000Z" },
      teams: {
        away: teams.mil,
        home: teams.phi,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
      total: {
        current: { total: "212.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T00:40:00.000Z" },
      teams: {
        away: teams.cha,
        home: teams.cle,
      },
      odds: {
        spread: {
          current: {
            away: "+9.5",
            home: "-9.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+350", homeOdds: "-450" } },
      total: {
        current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T01:10:00.000Z" },
      teams: {
        away: teams.okc,
        home: teams.mem,
      },
      odds: {
        spread: {
          current: {
            away: "+6.0",
            home: "-6.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+190", homeOdds: "-230" } },
      total: {
        current: { total: "230.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T01:10:00.000Z" },
      teams: {
        away: teams.orl,
        home: teams.chi,
      },
      odds: {
        spread: {
          current: {
            away: "+8.5",
            home: "-8.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
      total: {
        current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T01:10:00.000Z" },
      teams: {
        away: teams.ind,
        home: teams.hou,
      },
      odds: {
        spread: {
          current: {
            away: "-5.0",
            home: "+5.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
      total: {
        current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T01:40:00.000Z" },
      teams: {
        away: teams.den,
        home: teams.dal,
      },
      odds: {
        spread: {
          current: {
            away: "+9.0",
            home: "-9.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
      total: {
        current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T01:40:00.000Z" },
      teams: {
        away: teams.bos,
        home: teams.nop,
      },
      odds: {
        spread: {
          current: {
            away: "-2.5",
            home: "+2.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
      total: {
        current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T02:10:00.000Z" },
      teams: {
        away: teams.phx,
        home: teams.uta,
      },
      odds: {
        spread: {
          current: {
            away: "-2.0",
            home: "+2.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-135", homeOdds: "+115" } },
      total: {
        current: { total: "228.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T03:10:00.000Z" },
      teams: {
        away: teams.nyk,
        home: teams.gsw,
      },
      odds: {
        spread: {
          current: {
            away: "+7.5",
            home: "-7.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+240", homeOdds: "-300" } },
      total: {
        current: { total: "234.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-19T03:40:00.000Z" },
      teams: {
        away: teams.det,
        home: teams.lal,
      },
      odds: {
        spread: {
          current: {
            away: "+7.0",
            home: "-7.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+230", homeOdds: "-295" } },
      total: {
        current: { total: "226.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { teams, games };
}

export default WCGames;

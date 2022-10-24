function NBAGames() {
  const teams = {
    atl: { team: "Atlanta Hawks", abbreviation: "ATL" },
    bos: { team: "Boston Celtics", abbreviation: "BOS" },
    bkn: { team: "Brooklyn Nets", abbreviation: "BKN" },
    cha: { team: "Charlotte Hornets", abbreviation: "CHA" },
    chi: { team: "Chicago Bulls", abbreviation: "CHI" },
    cle: { team: "Cleveland Cavaliers", abbreviation: "CLE" },
    dal: { team: "Dallas Mavericks", abbreviation: "DAL" },
    den: { team: "Denver Nuggets", abbreviation: "DEN" },
    det: { team: "Detroit Pistons", abbreviation: "DET" },
    gsw: { team: "Golden State Warriors", abbreviation: "GSW" },
    hou: { team: "Houston Rockets", abbreviation: "HOU" },
    ind: { team: "Indiana Pacers", abbreviation: "IND" },
    lac: { team: "Los Angeles Clippers", abbreviation: "LAC" },
    lal: { team: "Los Angeles Lakers", abbreviation: "LAL" },
    mem: { team: "Memphis Grizzlies", abbreviation: "MEM" },
    mia: { team: "Miami Heat", abbreviation: "MIA" },
    mil: { team: "Milwaukee Bucks", abbreviation: "MIL" },
    min: { team: "Minnesota Timberwolves", abbreviation: "MIN" },
    nop: { team: "New Orleans Pelicans", abbreviation: "NOP" },
    nyk: { team: "New York Knicks", abbreviation: "NYK" },
    okc: { team: "Oklahoma City Thunder", abbreviation: "OKC" },
    orl: { team: "Orlando Magic", abbreviation: "ORL" },
    phi: { team: "Philadelphia 76ers", abbreviation: "PHI" },
    phx: { team: "Phoenix Suns", abbreviation: "PHX" },
    por: { team: "Portland Trailblazers", abbreviation: "POR" },
    sac: { team: "Sacramento Kings", abbreviation: "SAC" },
    sas: { team: "San Antonio Spurs", abbreviation: "SAS" },
    tor: { team: "Toronto Raptors", abbreviation: "TOR" },
    uta: { team: "Utah Jazz", abbreviation: "UTA" },
    was: { team: "Washington Wizards", abbreviation: "WAS" },
  };
  const games = [
    {
      schedule: { start: "2022-10-22T23:10:00.000Z" },
      teams: {
        away: teams.ind,
        home: teams.phi,
      },
      odds: {
        spread: {
          current: {
            away: "+12.0",
            home: "-12.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+600", homeOdds: "-900" } },
      total: {
        current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T23:40:00.000Z" },
      teams: {
        away: teams.tor,
        home: teams.mia,
      },
      odds: {
        spread: {
          current: {
            away: "+4.0",
            home: "-4.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+138", homeOdds: "-165" } },
      total: {
        current: { total: "215.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T23:40:00.000Z" },
      teams: {
        away: teams.orl,
        home: teams.nyk,
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
      moneyline: { current: { awayOdds: "+240", homeOdds: "-295" } },
      total: {
        current: { total: "220.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.uta,
        home: teams.hou,
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
      moneyline: { current: { awayOdds: "-130", homeOdds: "+110" } },
      total: {
        current: { total: "233.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.sas,
        home: teams.min,
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
      moneyline: { current: { awayOdds: "+285", homeOdds: "-370" } },
      total: {
        current: { total: "234.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.bos,
        home: teams.chi,
      },
      odds: {
        spread: {
          current: {
            away: "-5.5",
            home: "+5.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-230", homeOdds: "+190" } },
      total: {
        current: { total: "225.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.bkn,
        home: teams.mem,
      },
      odds: {
        spread: {
          current: {
            away: "+1.0",
            home: "-1.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-105", homeOdds: "-115" } },
      total: {
        current: { total: "232.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T02:10:00.000Z" },
      teams: {
        away: teams.den,
        home: teams.por,
      },
      odds: {
        spread: {
          current: {
            away: "-4.5",
            home: "+4.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-190", homeOdds: "+158" } },
      total: {
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

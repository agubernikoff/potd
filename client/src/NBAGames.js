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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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
      details: { league: "NBA" },
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

export default NBAGames;

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
      schedule: { start: "2022-10-22T22:10:00.000Z" },
      teams: {
        away: teams.sas,
        home: teams.phi,
      },
      odds: {
        spread: {
          current: {
            away: "+13.0",
            home: "-13.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+640", homeOdds: "-950" } },
      total: {
        current: { total: "224.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T23:10:00.000Z" },
      teams: {
        away: teams.bos,
        home: teams.orl,
      },
      odds: {
        spread: {
          current: {
            away: "-9.0",
            home: "+9.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-390", homeOdds: "+310" } },
      total: {
        current: { total: "216.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T23:10:00.000Z" },
      teams: {
        away: teams.det,
        home: teams.ind,
      },
      odds: {
        spread: {
          current: {
            away: "-1.0",
            home: "+1.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-110", homeOdds: "-105" } },
      total: {
        current: { total: "229.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.cle,
        home: teams.chi,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-120", homeOdds: "+105" } },
      total: {
        current: { total: "219.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.hou,
        home: teams.mil,
      },
      odds: {
        spread: {
          current: {
            away: "+13.0",
            home: "-13.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+640", homeOdds: "-950" } },
      total: {
        current: { total: "229.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:10:00.000Z" },
      teams: {
        away: teams.tor,
        home: teams.mia,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "215.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T00:40:00.000Z" },
      teams: {
        away: teams.mem,
        home: teams.dal,
      },
      odds: {
        spread: {
          current: {
            away: "+5.5",
            home: "-5.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+190", homeOdds: "-225" } },
      total: {
        current: { total: "219.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T01:10:00.000Z" },
      teams: {
        away: teams.okc,
        home: teams.den,
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
      moneyline: { current: { awayOdds: "+300", homeOdds: "-375" } },
      total: {
        current: { total: "226.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T02:10:00.000Z" },
      teams: {
        away: teams.lac,
        home: teams.sac,
      },
      odds: {
        spread: {
          current: {
            away: "-3.0",
            home: "+3.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-145", homeOdds: "+120" } },
      total: {
        current: { total: "225.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

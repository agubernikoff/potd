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
      schedule: { start: "2022-10-29T22:10:00.000Z" },
      teams: {
        away: teams.mia,
        home: teams.sac,
      },
      odds: {
        spread: {
          current: {
            away: "-4.0",
            home: "+4.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-180", homeOdds: "+150" } },
      total: {
        current: { total: "228.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T23:10:00.000Z" },
      teams: {
        away: teams.gsw,
        home: teams.cha,
      },
      odds: {
        spread: {
          current: {
            away: "-10.0",
            home: "+10.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-500", homeOdds: "+385" } },
      total: {
        current: { total: "233.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T23:40:00.000Z" },
      teams: {
        away: teams.ind,
        home: teams.bkn,
      },
      odds: {
        spread: {
          current: {
            away: "+10.5",
            home: "-10.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+420", homeOdds: "-560" } },
      total: {
        current: { total: "237.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-30T00:10:00.000Z" },
      teams: {
        away: teams.phi,
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
      moneyline: { current: { awayOdds: "-125", homeOdds: "+110" } },
      total: {
        current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-30T00:10:00.000Z" },
      teams: {
        away: teams.atl,
        home: teams.mil,
      },
      odds: {
        spread: {
          current: {
            away: "+5.0",
            home: "-5.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+165", homeOdds: "-200" } },
      total: {
        current: { total: "228.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-30T01:10:00.000Z" },
      teams: {
        away: teams.okc,
        home: teams.dal,
      },
      odds: {
        spread: {
          current: {
            away: "+10.5",
            home: "-10.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+400", homeOdds: "-520" } },
      total: {
        current: { total: "218.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-30T01:10:00.000Z" },
      teams: {
        away: teams.mem,
        home: teams.uta,
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
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

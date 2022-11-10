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
      schedule: { start: "2022-11-09T22:30:00.000Z" },
      teams: {
        away: teams.dal,
        home: teams.orl,
      },
      odds: {
        spread: {
          current: {
            away: "-7.0",
            home: "+7.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-310", homeOdds: "+250" } },
      total: {
        current: { total: "214.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-11T00:10:00.000Z" },
      teams: {
        away: teams.dal,
        home: teams.was,
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
      moneyline: { current: { awayOdds: "-210", homeOdds: "+175" } },
      total: {
        current: { total: "209.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-11T00:40:00.000Z" },
      teams: {
        away: teams.phi,
        home: teams.atl,
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
      moneyline: { current: { awayOdds: "+100", homeOdds: "-120" } },
      total: {
        current: { total: "222.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-11T00:40:00.000Z" },
      teams: {
        away: teams.cha,
        home: teams.mia,
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
      moneyline: { current: { awayOdds: "+410", homeOdds: "-550" } },
      total: {
        current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-11T01:10:00.000Z" },
      teams: {
        away: teams.por,
        home: teams.nop,
      },
      odds: {
        spread: {
          current: {
            away: "+6.5",
            home: "-6.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+200", homeOdds: "-245" } },
      total: {
        current: { total: "225.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T00:40:00.000Z" },
      teams: {
        away: teams.nyk,
        home: teams.bkn,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-145" } },
      total: {
        current: { total: "222.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T00:40:00.000Z" },
      teams: {
        away: teams.hou,
        home: teams.tor,
      },
      odds: {
        spread: {
          current: {
            away: "+10.0",
            home: "-10.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+360", homeOdds: "-460" } },
      total: {
        current: { total: "224.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T01:10:00.000Z" },
      teams: {
        away: teams.nop,
        home: teams.chi,
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
      moneyline: { current: { awayOdds: "-130", homeOdds: "+110" } },
      total: {
        current: { total: "232.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T01:10:00.000Z" },
      teams: {
        away: teams.mem,
        home: teams.sas,
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
      moneyline: { current: { awayOdds: "-215", homeOdds: "+180" } },
      total: {
        current: { total: "234.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T01:10:00.000Z" },
      teams: {
        away: teams.mil,
        home: teams.okc,
      },
      odds: {
        spread: {
          current: {
            away: "-6.0",
            home: "+6.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-235", homeOdds: "+195" } },
      total: {
        current: { total: "218.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T01:10:00.000Z" },
      teams: {
        away: teams.phx,
        home: teams.min,
      },
      odds: {
        spread: {
          current: {
            away: "-1.0",
            home: "+1.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-115", homeOdds: "+100" } },
      total: {
        current: { total: "223.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T03:10:00.000Z" },
      teams: {
        away: teams.lal,
        home: teams.lac,
      },
      odds: {
        spread: {
          current: {
            away: "+3.5",
            home: "-3.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+140", homeOdds: "-180" } },
      total: {
        current: { total: "219.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-10T03:10:00.000Z" },
      teams: {
        away: teams.cle,
        home: teams.sac,
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
      moneyline: { current: { awayOdds: "-195", homeOdds: "+160" } },
      total: {
        current: { total: "227.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T03:15:00.000Z" },
      teams: {
        away: teams.lal,
        home: teams.uta,
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
      moneyline: { current: { awayOdds: "+170", homeOdds: "-205" } },
      total: {
        current: { total: "228.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T03:40:00.000Z" },
      teams: {
        away: teams.cle,
        home: teams.lac,
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
      moneyline: { current: { awayOdds: "-185", homeOdds: "+155" } },
      total: {
        current: { total: "213.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { teams, games };
}

export default NBAGames;

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
      schedule: { start: "2022-11-08T00:10:00.000Z" },
      teams: {
        away: teams.was,
        home: teams.cha,
      },
      odds: {
        spread: {
          current: {
            away: "+2.0",
            home: "-2.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+110", homeOdds: "-130" } },
      total: {
        current: { total: "215.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T00:15:00.000Z" },
      teams: {
        away: teams.hou,
        home: teams.orl,
      },
      odds: {
        spread: {
          current: {
            away: "+4.5",
            home: "-4.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+165", homeOdds: "-200" } },
      total: {
        current: { total: "225.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T00:40:00.000Z" },
      teams: {
        away: teams.okc,
        home: teams.det,
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
      moneyline: { current: { awayOdds: "-115", homeOdds: "-105" } },
      total: {
        current: { total: "224.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T00:45:00.000Z" },
      teams: {
        away: teams.nop,
        home: teams.ind,
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
      moneyline: { current: { awayOdds: "-215", homeOdds: "+180" } },
      total: {
        current: { total: "236.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T01:10:00.000Z" },
      teams: {
        away: teams.phx,
        home: teams.phi,
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
      moneyline: { current: { awayOdds: "-135", homeOdds: "+115" } },
      total: {
        current: { total: "214.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T01:15:00.000Z" },
      teams: {
        away: teams.mil,
        home: teams.atl,
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
      moneyline: { current: { awayOdds: "-155", homeOdds: "+130" } },
      total: {
        current: { total: "226.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T01:40:00.000Z" },
      teams: {
        away: teams.por,
        home: teams.mia,
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
      moneyline: { current: { awayOdds: "+235", homeOdds: "-290" } },
      total: {
        current: { total: "215.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T01:45:00.000Z" },
      teams: {
        away: teams.tor,
        home: teams.chi,
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
      moneyline: { current: { awayOdds: "+140", homeOdds: "-170" } },
      total: {
        current: { total: "221.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T02:10:00.000Z" },
      teams: {
        away: teams.bos,
        home: teams.mem,
      },
      odds: {
        spread: {
          current: {
            away: "-3.5",
            home: "+3.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-160", homeOdds: "+135" } },
      total: {
        current: { total: "231.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T02:15:00.000Z" },
      teams: {
        away: teams.nyk,
        home: teams.min,
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
      moneyline: { current: { awayOdds: "+135", homeOdds: "-160" } },
      total: {
        current: { total: "234.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T02:40:00.000Z" },
      teams: {
        away: teams.den,
        home: teams.sas,
      },
      odds: {
        spread: {
          current: {
            away: "-8.5",
            home: "+8.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-340", homeOdds: "+275" } },
      total: {
        current: { total: "234.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T02:45:00.000Z" },
      teams: {
        away: teams.bkn,
        home: teams.dal,
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
      moneyline: { current: { awayOdds: "+210", homeOdds: "-255" } },
      total: {
        current: { total: "217.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-11-08T03:10:00.000Z" },
      teams: {
        away: teams.sac,
        home: teams.gsw,
      },
      odds: {
        spread: {
          current: {
            away: "+8.0",
            home: "-8.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+265", homeOdds: "-330" } },
      total: {
        current: { total: "234.0", overOdds: "-110", underOdds: "-110" },
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

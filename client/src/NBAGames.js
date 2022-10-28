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
      schedule: { start: "2022-10-28T23:10:00.000Z" },
      teams: {
        away: teams.atl,
        home: teams.det,
      },
      odds: {
        spread: {
          current: {
            away: "-6.5",
            home: "+6.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-255", homeOdds: "+210" } },
      total: {
        current: { total: "229.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-28T23:10:00.000Z" },
      teams: {
        away: teams.cha,
        home: teams.orl,
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
      moneyline: { current: { awayOdds: "-125", homeOdds: "+105" } },
      total: {
        current: { total: "220.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-28T23:40:00.000Z" },
      teams: {
        away: teams.cle,
        home: teams.bos,
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
      moneyline: { current: { awayOdds: "+200", homeOdds: "-245" } },
      total: {
        current: { total: "218.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-28T23:40:00.000Z" },
      teams: {
        away: teams.ind,
        home: teams.was,
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
      moneyline: { current: { awayOdds: "+175", homeOdds: "-210" } },
      total: {
        current: { total: "229.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-28T23:40:00.000Z" },
      teams: {
        away: teams.phi,
        home: teams.tor,
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
        current: { total: "213.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T00:10:00.000Z" },
      teams: {
        away: teams.nyk,
        home: teams.mil,
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
      moneyline: { current: { awayOdds: "+200", homeOdds: "-240" } },
      total: {
        current: { total: "223.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T00:10:00.000Z" },
      teams: {
        away: teams.lal,
        home: teams.min,
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
      moneyline: { current: { awayOdds: "+240", homeOdds: "-295" } },
      total: {
        current: { total: "229.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T00:40:00.000Z" },
      teams: {
        away: teams.chi,
        home: teams.sas,
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
      moneyline: { current: { awayOdds: "-180", homeOdds: "+15" } },
      total: {
        current: { total: "229.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T01:10:00.000Z" },
      teams: {
        away: teams.uta,
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
      moneyline: { current: { awayOdds: "+275", homeOdds: "-340" } },
      total: {
        current: { total: "230.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T02:10:00.000Z" },
      teams: {
        away: teams.hou,
        home: teams.por,
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
      moneyline: { current: { awayOdds: "+155", homeOdds: "-185" } },
      total: {
        current: { total: "222.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NBA" },
      schedule: { start: "2022-10-29T02:10:00.000Z" },
      teams: {
        away: teams.nop,
        home: teams.phx,
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
      moneyline: { current: { awayOdds: "+225", homeOdds: "-275" } },
      total: {
        current: { total: "224.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

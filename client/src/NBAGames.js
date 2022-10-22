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
      schedule: { start: "2022-10-21T23:10:00.000Z" },
      teams: {
        away: teams.nop,
        home: teams.cha,
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
      moneyline: { current: { awayOdds: "-260", homeOdds: "+215" } },
      total: {
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:10:00.000Z" },
      teams: {
        away: teams.sas,
        home: teams.ind,
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
        current: { total: "232.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:10:00.000Z" },
      teams: {
        away: teams.chi,
        home: teams.was,
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
      moneyline: { current: { awayOdds: "+115", homeOdds: "-135" } },
      total: {
        current: { total: "222.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.orl,
        home: teams.atl,
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
      moneyline: { current: { awayOdds: "+310", homeOdds: "-390" } },
      total: {
        current: { total: "225.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.det,
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
      moneyline: { current: { awayOdds: "+225", homeOdds: "-275" } },
      total: {
        current: { total: "219.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.bos,
        home: teams.mia,
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
        current: { total: "218.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.tor,
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
      moneyline: { current: { awayOdds: "+125", homeOdds: "-150" } },
      total: {
        current: { total: "227.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T00:10:00.000Z" },
      teams: {
        away: teams.uta,
        home: teams.min,
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
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T00:10:00.000Z" },
      teams: {
        away: teams.mem,
        home: teams.hou,
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
      moneyline: { current: { awayOdds: "-260", homeOdds: "+215" } },
      total: {
        current: { total: "231.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T02:10:00.000Z" },
      teams: {
        away: teams.den,
        home: teams.gsw,
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
        current: { total: "229.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T02:10:00.000Z" },
      teams: {
        away: teams.phx,
        home: teams.por,
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
        current: { total: "224.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

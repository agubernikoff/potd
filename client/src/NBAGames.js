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
    // {
    //   schedule: { start: "2022-10-26T23:10:00.000Z" },
    //   teams: {
    //     away: teams.orl,
    //     home: teams.cle,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+325", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   schedule: { start: "2022-10-26T23:10:00.000Z" },
    //   teams: {
    //     away: teams.atl,
    //     home: teams.det,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-7.5",
    //         home: "+7.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-295", homeOdds: "+230" } },
    //   total: {
    //     current: { total: "230.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    {
      schedule: { start: "2022-10-27T23:40:00.000Z" },
      teams: {
        away: teams.dal,
        home: teams.bkn,
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
      moneyline: { current: { awayOdds: "-145", homeOdds: "+125" } },
      total: {
        current: { total: "225.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    // {
    //   schedule: { start: "2022-10-26T23:40:00.000Z" },
    //   teams: {
    //     away: teams.bkn,
    //     home: teams.mil,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+4.5",
    //         home: "-4.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+140", homeOdds: "-165" } },
    //   total: {
    //     current: { total: "233.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   schedule: { start: "2022-10-26T23:40:00.000Z" },
    //   teams: {
    //     away: teams.phi,
    //     home: teams.tor,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-1.0",
    //         home: "+1.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-115", homeOdds: "-105" } },
    //   total: {
    //     current: { total: "214.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    {
      schedule: { start: "2022-10-28T00:10:00.000Z" },
      teams: {
        away: teams.lac,
        home: teams.okc,
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
      moneyline: { current: { awayOdds: "-250", homeOdds: "+205" } },
      total: {
        current: { total: "217.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    // {
    //   schedule: { start: "2022-10-27T00:10:00.000Z" },
    //   teams: {
    //     away: teams.sas,
    //     home: teams.min,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+315", homeOdds: "-415" } },
    //   total: {
    //     current: { total: "232.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   schedule: { start: "2022-10-27T01:10:00.000Z" },
    //   teams: {
    //     away: teams.hou,
    //     home: teams.uta,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+7.0",
    //         home: "-7.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+225", homeOdds: "-280" } },
    //   total: {
    //     current: { total: "233.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    {
      schedule: { start: "2022-10-28T02:10:00.000Z" },
      teams: {
        away: teams.mem,
        home: teams.sac,
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
        current: { total: "236.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-28T02:10:00.000Z" },
      teams: {
        away: teams.mia,
        home: teams.gsw,
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
        current: { total: "227.0", overOdds: "-105", underOdds: "-115" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

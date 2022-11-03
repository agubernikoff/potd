function NFLGames() {
  const teams = {
    cardinals: { team: "Arizona Cardinals", abbreviation: "ARI" },
    falcons: { team: "Atlanta Falcons", abbreviation: "ATL" },
    bills: { team: "Buffalo Bills", abbreviation: "BUF" },
    ravens: { team: "Baltimore Ravens", abbreviation: "BAL" },
    panthers: { team: "Carolina Panthers", abbreviation: "CAR" },
    bengals: { team: "Cincinnati Bengals", abbreviation: "CIN" },
    browns: { team: "Cleveland Browns", abbreviation: "CLE" },
    bears: { team: "Chicago Bears", abbreviation: "CHI" },
    cowboys: { team: "Dallas Cowboys", abbreviation: "DAL" },
    broncos: { team: "Denver Broncos", abbreviation: "DEN" },
    lions: { team: "Detroit Lions", abbreviation: "DET" },
    packers: { team: "Green Bay Packers", abbreviation: "GB" },
    texans: { team: "Houston Texans", abbreviation: "HOU" },
    colts: { team: "Indianapolis Colts", abbreviation: "IND" },
    chiefs: { team: "Kansas City Chiefs", abbreviation: "KC" },
    chargers: { team: "Los Angeles Chargers", abbreviation: "LAC" },
    rams: { team: "Los Angeles Rams", abbreviation: "LAR" },
    jaguars: { team: "Jacksonville Jaguars", abbreviation: "JAX" },
    dolphins: { team: "Miami Dolphins", abbreviation: "MIA" },
    vikings: { team: "Minnesota Vikings", abbreviation: "MIN" },
    patriots: { team: "New England Patriots", abbreviation: "NE" },
    saints: { team: "New Orleans Saints", abbreviation: "NO" },
    giants: { team: "New York Giants", abbreviation: "NYG" },
    jets: { team: "New York Jets", abbreviation: "NYJ" },
    raiders: { team: "Las Vegas Raiders", abbreviation: "LV" },
    eagles: { team: "Philadelphia Eagles", abbreviation: "PHI" },
    niners: { team: "San Francisco 49ers", abbreviation: "SF" },
    seahawks: { team: "Seattle Seahawks", abbreviation: "SEA" },
    steelers: { team: "Pittsburgh Steelers", abbreviation: "PIT" },
    buccaneers: { team: "Tampa Bay Buccaneers", abbreviation: "TB" },
    titans: { team: "Tennessee Titans", abbreviation: "TEN" },
    commanders: { team: "Washington Commanders", abbreviation: "WAS" },
  };
  const games = [
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-04T00:15:00.000Z" },
      teams: {
        away: teams.eagles,
        home: teams.texans,
      },
      odds: {
        spread: {
          current: {
            away: "-14.0",
            home: "+14.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-820", homeOdds: "+570" } },
      total: {
        current: { total: "45.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.colts,
        home: teams.patriots,
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
      moneyline: { current: { awayOdds: "+190", homeOdds: "-225" } },
      total: {
        current: { total: "39.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.bills,
        home: teams.jets,
      },
      odds: {
        spread: {
          current: {
            away: "-12.5",
            home: "+12.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-620", homeOdds: "+460" } },
      total: {
        current: { total: "46.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.dolphins,
        home: teams.bears,
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
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.packers,
        home: teams.lions,
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
      moneyline: { current: { awayOdds: "-195", homeOdds: "+160" } },
      total: {
        current: { total: "49.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.vikings,
        home: teams.commanders,
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
      moneyline: { current: { awayOdds: "-170", homeOdds: "+145" } },
      total: {
        current: { total: "43.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.panthers,
        home: teams.bengals,
      },
      odds: {
        spread: {
          current: {
            away: "+7.5",
            home: "-7.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+265", homeOdds: "-330" } },
      total: {
        current: { total: "42.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.chargers,
        home: teams.falcons,
      },
      odds: {
        spread: {
          current: {
            away: "-3.0",
            home: "+3.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-165", homeOdds: "+140" } },
      total: {
        current: { total: "49.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T18:00:00.000Z" },
      teams: {
        away: teams.raiders,
        home: teams.jaguars,
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
      moneyline: { current: { awayOdds: "-125", homeOdds: "+105" } },
      total: {
        current: { total: "47.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T21:05:00.000Z" },
      teams: {
        away: teams.seahawks,
        home: teams.titans,
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
        current: { total: "49.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-06T21:25:00.000Z" },
      teams: {
        away: teams.rams,
        home: teams.buccaneers,
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
      moneyline: { current: { awayOdds: "+125", homeOdds: "-145" } },
      total: {
        current: { total: "42.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-07T01:20:00.000Z" },
      teams: {
        away: teams.titans,
        home: teams.chiefs,
      },
      odds: {
        spread: {
          current: {
            away: "+12.5",
            home: "-12.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+480", homeOdds: "-650" } },
      total: {
        current: { total: "46.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-08T01:15:00.000Z" },
      teams: {
        away: teams.ravens,
        home: teams.saints,
      },
      odds: {
        spread: {
          current: {
            away: "-2.5",
            home: "+2.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NFLGames;

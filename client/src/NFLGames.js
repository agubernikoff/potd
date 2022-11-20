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
      schedule: { start: "2022-11-18T01:15:00.000Z" },
      teams: {
        away: teams.titans,
        home: teams.packers,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+150", homeOdds: "-175" } },
      total: {
        current: { total: "41.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T14:30:00.000Z" },
      teams: {
        away: teams.panthers,
        home: teams.ravens,
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
      moneyline: { current: { awayOdds: "+490", homeOdds: "-670" } },
      total: {
        current: { total: "41.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.eagles,
        home: teams.colts,
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
      moneyline: { current: { awayOdds: "-295", homeOdds: "+240" } },
      total: {
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.jets,
        home: teams.patriots,
      },
      odds: {
        spread: {
          current: {
            away: "+3.5",
            home: "-3.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+155", homeOdds: "-185" } },
      total: {
        current: { total: "38.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.commanders,
        home: teams.texans,
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
      moneyline: { current: { awayOdds: "-170", homeOdds: "+140" } },
      total: {
        current: { total: "41.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.rams,
        home: teams.saints,
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
      moneyline: { current: { awayOdds: "+125", homeOdds: "-150" } },
      total: {
        current: { total: "39.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.lions,
        home: teams.giants,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+135", homeOdds: "-160" } },
      total: {
        current: { total: "44.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.bears,
        home: teams.falcons,
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
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T18:00:00.000Z" },
      teams: {
        away: teams.browns,
        home: teams.bills,
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
      moneyline: { current: { awayOdds: "+290", homeOdds: "-360" } },
      total: {
        current: { total: "49.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T21:05:00.000Z" },
      teams: {
        away: teams.raiders,
        home: teams.broncos,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-145" } },
      total: {
        current: { total: "41.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T21:25:00.000Z" },
      teams: {
        away: teams.cowboys,
        home: teams.vikings,
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
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-20T21:25:00.000Z" },
      teams: {
        away: teams.bengals,
        home: teams.steelers,
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
      moneyline: { current: { awayOdds: "-190", homeOdds: "+160" } },
      total: {
        current: { total: "39.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-21T01:20:00.000Z" },
      teams: {
        away: teams.chiefs,
        home: teams.chargers,
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
      moneyline: { current: { awayOdds: "-240", homeOdds: "+200" } },
      total: {
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NFL" },
      schedule: { start: "2022-11-22T01:15:00.000Z" },
      teams: {
        away: teams.niners,
        home: teams.cardinals,
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
      moneyline: { current: { awayOdds: "-360", homeOdds: "+290" } },
      total: {
        current: { total: "43.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NFLGames;

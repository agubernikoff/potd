function NFLGames() {
  const games = [
    {
      schedule: { start: "2022-09-15T17:00:00.000Z" },
      teams: {
        away: { team: "Los Angeles Chargers", abbreviation: "LAC" },
        home: { team: "Kansas City Chiefs", abbreviation: "KC" },
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
      moneyline: { current: { awayOdds: "+170", homeOdds: "-210" } },
      total: {
        current: { total: "54", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "Carolina Panthers", abbreviation: "CAR" },
        home: { team: "New York Giants", abbreviation: "NYG" },
      },
      odds: {
        spread: {
          current: {
            away: "2.0",
            home: "+2.0",
            awayOdds: "+110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+110", homeOdds: "-130" } },
      total: {
        current: { total: "43.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "Indianapolis Colts", abbreviation: "IND" },
        home: { team: "Jacksonville Jaguars", abbreviation: "JAX" },
      },
      odds: {
        spread: {
          current: {
            away: "-3.5",
            home: "+3.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-195", homeOdds: "+160" } },
      total: {
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "Miami Dolphins", abbreviation: "MIA" },
        home: { team: "Baltimore Ravens", abbreviation: "BAL" },
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
      moneyline: { current: { awayOdds: "+155", homeOdds: "-195" } },
      total: {
        current: { total: "44.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "New England Patriots", abbreviation: "NE" },
        home: { team: "Pittsburgh Steelers", abbreviation: "PIT" },
      },
      odds: {
        spread: {
          current: {
            away: "-2.0",
            home: "+2.0",
            awayOdds: "-130",
            homeOdds: "+105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-335", homeOdds: "+270" } },
      total: {
        current: { total: "40.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "New York Jets", abbreviation: "NYJ" },
        home: { team: "Cleveland Browns", abbreviation: "CLE" },
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
      moneyline: { current: { awayOdds: "+210", homeOdds: "-265" } },
      total: {
        current: { total: "40.0", overOdds: "-110", underOdds: "-100" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "Tampa Bay Buccaneers", abbreviation: "TB" },
        home: { team: "New Orleans Saints", abbreviation: "NO" },
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
      moneyline: { current: { awayOdds: "-150", homeOdds: "+120" } },
      total: {
        current: { total: "44.0", overOdds: "-115", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T17:00:00.000Z" },
      teams: {
        away: { team: "Washington Commanders", abbreviation: "WAS" },
        home: { team: "Detroit Lions", abbreviation: "DET" },
      },
      odds: {
        spread: {
          current: {
            away: "+2.0",
            home: "-2.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T20:05:00.000Z" },
      teams: {
        away: { team: "Atlanta Falcons", abbreviation: "ATL" },
        home: { team: "Los Angeles Rams", abbreviation: "LAR" },
      },
      odds: {
        spread: {
          current: {
            away: "+10.5",
            home: "-10.5",
            awayOdds: "-110",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+410", homeOdds: "-590" } },
      total: {
        current: { total: "46.5", overOdds: "-110", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-18T20:05:00.000Z" },
      teams: {
        away: { team: "Seattle Seahawks", abbreviation: "SEA" },
        home: { team: "San Francisco 49ers", abbreviation: "SF" },
      },
      odds: {
        spread: {
          current: {
            away: "+9.0",
            home: "-9.0",
            awayOdds: "-110",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+335", homeOdds: "-455" } },
      total: {
        current: { total: "41.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T20:25:00.000Z" },
      teams: {
        away: { team: "Arizona Cardinals", abbreviation: "ARI" },
        home: { team: "Las Vegas Raiders", abbreviation: "LV" },
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
      moneyline: { current: { awayOdds: "+180", homeOdds: "-225" } },
      total: {
        current: { total: "51.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T20:25:00.000Z" },
      teams: {
        away: { team: "Cincinnati Bengals", abbreviation: "CIN" },
        home: { team: "Dallas Cowboys", abbreviation: "DAL" },
      },
      odds: {
        spread: {
          current: {
            away: "-7.5",
            home: "+7.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-345", homeOdds: "+265" } },
      total: {
        current: { total: "42.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T20:25:00.000Z" },
      teams: {
        away: { team: "Houston Texans", abbreviation: "HOU" },
        home: { team: "Denver Broncos", abbreviation: "DEN" },
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
      moneyline: { current: { awayOdds: "+360", homeOdds: "-500" } },
      total: {
        current: { total: "45.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-18T20:25:00.000Z" },
      teams: {
        away: { team: "Chicago Bears", abbreviation: "CHI" },
        home: { team: "Green Bay Packers", abbreviation: "GB" },
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
      moneyline: { current: { awayOdds: "+335", homeOdds: "-455" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-20T00:20:00.000Z" },
      teams: {
        away: { team: "Tennessee Titans", abbreviation: "TEN" },
        home: { team: "Buffalo Bills", abbreviation: "BUF" },
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
      moneyline: { current: { awayOdds: "+350", homeOdds: "-480" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-20T00:15:00.000Z" },
      teams: {
        away: { team: "Minnesota Vikings", abbreviation: "MIN" },
        home: { team: "Philadelphia Eagles", abbreviation: "PHI" },
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
      moneyline: { current: { awayOdds: "+105", homeOdds: "-130" } },
      total: {
        current: { total: "51.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NFLGames;

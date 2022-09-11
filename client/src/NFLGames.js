function NFLGames() {
  const games = [
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "Baltimore Ravens", abbreviation: "BAL" },
        home: { team: "New York Jets", abbreviation: "NYJ" },
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
      moneyline: { current: { awayOdds: "-310", homeOdds: "+250" } },
      total: {
        current: { total: "44.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "Pittsburgh Steelers", abbreviation: "PIT" },
        home: { team: "Cincinnati Bengals", abbreviation: "CIN" },
      },
      odds: {
        spread: {
          current: {
            away: "+6.5",
            home: "-6.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+220", homeOdds: "-270" } },
      total: {
        current: { total: "44.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "Philadelphia Eagles", abbreviation: "PHI" },
        home: { team: "Detroit Lions", abbreviation: "DET" },
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
      moneyline: { current: { awayOdds: "-205", homeOdds: "+175" } },
      total: {
        current: { total: "48.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "Indianapolis Colts", abbreviation: "IND" },
        home: { team: "Houston Texans", abbreviation: "HOU" },
      },
      odds: {
        spread: {
          current: {
            away: "-7.5",
            home: "+7.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-335", homeOdds: "+270" } },
      total: {
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "New Orleans Saints", abbreviation: "NO" },
        home: { team: "Atlanta Falcons", abbreviation: "ATL" },
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
        current: { total: "42.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "New England Patriots", abbreviation: "NE" },
        home: { team: "Miami Dolphins", abbreviation: "MIA" },
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
      moneyline: { current: { awayOdds: "+145", homeOdds: "-175" } },
      total: {
        current: { total: "46.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "Cleveland Browns", abbreviation: "CLE" },
        home: { team: "Carolina Panthers", abbreviation: "CAR" },
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-110", homeOdds: "-105" } },
      total: {
        current: { total: "41.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "San Francisco 49ers", abbreviation: "SF" },
        home: { team: "Chicago Bears", abbreviation: "CHI" },
      },
      odds: {
        spread: {
          current: {
            away: "-6.5",
            home: "+6.5",
            awayOdds: "-120",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-310", homeOdds: "+250" } },
      total: {
        current: { total: "40.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-11T17:00:00.000Z" },
      teams: {
        away: { team: "Jacksonville Jaguars", abbreviation: "JAX" },
        home: { team: "Washington Commanders", abbreviation: "WAS" },
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
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "43.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-09-11T20:25:00.000Z" },
      teams: {
        away: { team: "Las Vegas Raiders", abbreviation: "LV" },
        home: { team: "Los Angeles Chargers", abbreviation: "LAC" },
      },
      odds: {
        spread: {
          current: {
            away: "+3.5",
            home: "-3.5",
            awayOdds: "-120",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+150", homeOdds: "-175" } },
      total: {
        current: { total: "52.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-11T20:25:00.000Z" },
      teams: {
        away: { team: "New York Giants", abbreviation: "NYG" },
        home: { team: "Tennessee Titans", abbreviation: "TEN" },
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
      moneyline: { current: { awayOdds: "+200", homeOdds: "-240" } },
      total: {
        current: { total: "43.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-09-11T20:25:00.000Z" },
      teams: {
        away: { team: "Kansas City Chiefs", abbreviation: "KC" },
        home: { team: "Arizona Cardinals", abbreviation: "ARI" },
      },
      odds: {
        spread: {
          current: {
            away: "-5.5",
            home: "+5.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-255", homeOdds: "+210" } },
      total: {
        current: { total: "53.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-11T20:25:00.000Z" },
      teams: {
        away: { team: "Green Bay Packers", abbreviation: "GB" },
        home: { team: "Minnesota Vikings", abbreviation: "MIN" },
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
      moneyline: { current: { awayOdds: "-115", homeOdds: "-100" } },
      total: {
        current: { total: "46.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-12T00:20:00.000Z" },
      teams: {
        away: { team: "Tampa Bay Buccaneers", abbreviation: "TB" },
        home: { team: "Dallas Cowboys", abbreviation: "DAL" },
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
        current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-13T00:15:00.000Z" },
      teams: {
        away: { team: "Denver Broncos", abbreviation: "DEN" },
        home: { team: "Seattle Seahawks", abbreviation: "SEA" },
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
      moneyline: { current: { awayOdds: "-270", homeOdds: "+220" } },
      total: {
        current: { total: "44.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NFLGames;

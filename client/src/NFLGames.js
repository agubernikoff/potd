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
      schedule: { start: "2022-10-21T00:15:00.000Z" },
      teams: {
        away: teams.saints,
        home: teams.cardinals,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-110",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-145" } },
      total: {
        current: { total: "44.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.colts,
        home: teams.titans,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+115", homeOdds: "-135" } },
      total: {
        current: { total: "42.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.giants,
        home: teams.jaguars,
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
      moneyline: { current: { awayOdds: "+135", homeOdds: "-155" } },
      total: {
        current: { total: "41.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.buccaneers,
        home: teams.panthers,
      },
      odds: {
        spread: {
          current: {
            away: "-10.5",
            home: "+10.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-500", homeOdds: "+380" } },
      total: {
        current: { total: "40.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.packers,
        home: teams.commanders,
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
      moneyline: { current: { awayOdds: "-220", homeOdds: "+190" } },
      total: {
        current: { total: "41.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.lions,
        home: teams.cowboys,
      },
      odds: {
        spread: {
          current: {
            away: "+7.0",
            home: "-7.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+260", homeOdds: "-320" } },
      total: {
        current: { total: "48.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.falcons,
        home: teams.bengals,
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
      moneyline: { current: { awayOdds: "+225", homeOdds: "-275" } },
      total: {
        current: { total: "47.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-23T17:00:00.000Z" },
      teams: {
        away: teams.browns,
        home: teams.ravens,
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
      moneyline: { current: { awayOdds: "+230", homeOdds: "-280" } },
      total: {
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T20:05:00.000Z" },
      teams: {
        away: teams.texans,
        home: teams.raiders,
      },
      odds: {
        spread: {
          current: {
            away: "+7.0",
            home: "-7.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+260", homeOdds: "-320" } },
      total: {
        current: { total: "45.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-23T20:05:00.000Z" },
      teams: {
        away: teams.jets,
        home: teams.broncos,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
      total: {
        current: { total: "38.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-23T20:25:00.000Z" },
      teams: {
        away: teams.seahawks,
        home: teams.chargers,
      },
      odds: {
        spread: {
          current: {
            away: "+5.5",
            home: "-5.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+200", homeOdds: "-240" } },
      total: {
        current: { total: "51.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-23T20:25:00.000Z" },
      teams: {
        away: teams.chiefs,
        home: teams.niners,
      },
      odds: {
        spread: {
          current: {
            away: "-3.0",
            home: "+3.0",
            awayOdds: "-110",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "n/a", homeOdds: "n/a" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-24T00:20:00.000Z" },
      teams: {
        away: teams.steelers,
        home: teams.dolphins,
      },
      odds: {
        spread: {
          current: {
            away: "+7.0",
            home: "-7.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+270", homeOdds: "-340" } },
      total: {
        current: { total: "44.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-25T00:15:00.000Z" },
      teams: {
        away: teams.bears,
        home: teams.patriots,
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
      moneyline: { current: { awayOdds: "+280", homeOdds: "-350" } },
      total: {
        current: { total: "40.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-10T00:20:00.000Z" },
      teams: {
        away: teams.bengals,
        home: teams.ravens,
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
        current: { total: "47.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-11T00:15:00.000Z" },
      teams: {
        away: teams.raiders,
        home: teams.chiefs,
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
        current: { total: "51.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NFLGames;

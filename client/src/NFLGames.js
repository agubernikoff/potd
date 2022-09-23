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
      schedule: { start: "2022-09-23T00:15:00.000Z" },
      teams: {
        away: teams.steelers,
        home: teams.browns,
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
      moneyline: { current: { awayOdds: "+180", homeOdds: "-220" } },
      total: {
        current: { total: "37.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.ravens,
        home: teams.patriots,
      },
      odds: {
        spread: {
          current: {
            away: "3.0",
            home: "+3.0",
            awayOdds: "-120",
            homeOdds: "-100",
          },
        },
      },
      moneyline: { current: { awayOdds: "-165", homeOdds: "+140" } },
      total: {
        current: { total: "43.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.bills,
        home: teams.dolphins,
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
      moneyline: { current: { awayOdds: "-225", homeOdds: "+185" } },
      total: {
        current: { total: "54.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.bengals,
        home: teams.jets,
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
      moneyline: { current: { awayOdds: "-225", homeOdds: "+185" } },
      total: {
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.lions,
        home: teams.vikings,
      },
      odds: {
        spread: {
          current: {
            away: "+6.0",
            home: "-6.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+200", homeOdds: "-240" } },
      total: {
        current: { total: "53.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.texans,
        home: teams.bears,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-100",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-145" } },
      total: {
        current: { total: "40.5", overOdds: "-110", underOdds: "-100" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.chiefs,
        home: teams.colts,
      },
      odds: {
        spread: {
          current: {
            away: "-7.0",
            home: "+7.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-285", homeOdds: "+235" } },
      total: {
        current: { total: "49.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.raiders,
        home: teams.titans,
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
        current: { total: "45.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.saints,
        home: teams.panthers,
      },
      odds: {
        spread: {
          current: {
            away: "-3.0",
            home: "+3.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-150", homeOdds: "+130" } },
      total: {
        current: { total: "40.0", overOdds: "-110", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-09-25T17:00:00.000Z" },
      teams: {
        away: teams.eagles,
        home: teams.commanders,
      },
      odds: {
        spread: {
          current: {
            away: "-7.0",
            home: "+7.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-290", homeOdds: "+240" } },
      total: {
        current: { total: "47.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T20:05:00.000Z" },
      teams: {
        away: teams.jaguars,
        home: teams.chargers,
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
      moneyline: { current: { awayOdds: "+225", homeOdds: "-310" } },
      total: {
        current: { total: "47.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T20:25:00.000Z" },
      teams: {
        away: teams.falcons,
        home: teams.seahawks,
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
        current: { total: "42.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T20:25:00.000Z" },
      teams: {
        away: teams.packers,
        home: teams.buccaneers,
      },
      odds: {
        spread: {
          current: {
            away: "+2.0",
            home: "-2.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+110", homeOdds: "-130" } },
      total: {
        current: { total: "41.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-25T20:25:00.000Z" },
      teams: {
        away: teams.rams,
        home: teams.cardinals,
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
      moneyline: { current: { awayOdds: "-185", homeOdds: "+160" } },
      total: {
        current: { total: "49.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-26T00:20:00.000Z" },
      teams: {
        away: teams.niners,
        home: teams.broncos,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-125", homeOdds: "+105" } },
      total: {
        current: { total: "45.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-09-27T00:20:00.000Z" },
      teams: {
        away: teams.cowboys,
        home: teams.giants,
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
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "39.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NFLGames;

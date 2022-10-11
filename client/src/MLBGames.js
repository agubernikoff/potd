function MLBGames() {
  const teams = {
    braves: { team: "Atlanta Braves", abbreviation: "ATL", starter: "" },
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "M. Clevinger",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "",
    },
    dodgers: {
      team: "Los Angeles Dodgers",
      abbreviation: "LAD",
      starter: "J. Urias",
    },
    guardians: {
      team: "Cleveland Guardians",
      abbreviation: "CLE",
      starter: "C. Quantrill",
    },
    mariners: {
      team: "Seattle Mariners",
      abbreviation: "SEA",
      starter: "L. Gilbert",
    },
    yankees: {
      team: "New York Yankees",
      abbreviation: "NYY",
      starter: "G. Cole",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "J. Verlander",
    },
  };
  const games = [
    {
      schedule: { start: "2022-10-10T23:07:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.braves,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-190",
            homeOdds: "+155",
          },
        },
      },
      moneyline: { current: { awayOdds: "+115", homeOdds: "-135" } },
      total: {
        current: { total: "6.5", overOdds: "-120", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-11T19:37:00.000Z" },
      teams: {
        away: teams.mariners,
        home: teams.astros,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+195", homeOdds: "-235" } },
      total: {
        current: { total: "6.5", overOdds: "-120", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-11T23:37:00.000Z" },
      teams: {
        away: teams.guardians,
        home: teams.yankees,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-130",
            homeOdds: "+105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+175", homeOdds: "-210" } },
      total: {
        current: { total: "7.0", overOdds: "-105", underOdds: "-120" },
      },
    },
    {
      schedule: { start: "2022-10-12T01:37:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.dodgers,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+200", homeOdds: "-245" } },
      total: {
        current: { total: "7.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

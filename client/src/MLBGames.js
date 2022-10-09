function MLBGames() {
  const teams = {
    cardinals: {
      team: "St. Louis Cardinals",
      abbreviation: "STL",
      starter: "M. Mikolas",
    },
    braves: { team: "Atlanta Braves", abbreviation: "ATL", starter: "" },
    mets: {
      team: "New York Mets",
      abbreviation: "NYM",
      starter: "C. Bassitt",
    },
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "J. Musgrove",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "A. Nola",
    },
    dodgers: { team: "Los Angeles Dodgers", abbreviation: "LAD", starter: "" },
    rays: {
      team: "Tampa Bay Rays",
      abbreviation: "TB",
      starter: "T. Glasnow",
    },
    guardians: {
      team: "Cleveland Guardians",
      abbreviation: "CLE",
      starter: "T. McKenzie",
    },
    mariners: {
      team: "Seattle Mariners",
      abbreviation: "SEA",
      starter: "R. Ray",
    },
    jays: {
      team: "Toronto Blue Jays",
      abbreviation: "TOR",
      starter: "K. Gausman",
    },
    yankees: { team: "New York Yankees", abbreviation: "NYY", starter: "" },
    astros: { team: "Houston Astros", abbreviation: "HOU", starter: "" },
  };
  const games = [
    {
      schedule: { start: "2022-10-08T16:08:00.000Z" },
      teams: {
        away: teams.rays,
        home: teams.guardians,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+175",
            homeOdds: "-215",
          },
        },
      },
      moneyline: { current: { awayOdds: "-105", homeOdds: "-110" } },
      total: {
        current: { total: "6.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-08T20:08:00.000Z" },
      teams: {
        away: teams.mariners,
        home: teams.jays,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-160",
            homeOdds: "+130",
          },
        },
      },
      moneyline: { current: { awayOdds: "+135", homeOdds: "-160" } },
      total: {
        current: { total: "7.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-09T19:37:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.mets,
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
      schedule: { start: "2022-10-09T00:38:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.cardinals,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+150",
            homeOdds: "-185",
          },
        },
      },
      moneyline: { current: { awayOdds: "-120", homeOdds: "+104" } },
      total: {
        current: { total: "6.5", overOdds: "-120", underOdds: "-105" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

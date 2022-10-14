function MLBGames() {
  const teams = {
    braves: {
      team: "Atlanta Braves",
      abbreviation: "ATL",
      starter: "TBD",
    },
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "B. Snell",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "A. Nola",
    },
    dodgers: {
      team: "Los Angeles Dodgers",
      abbreviation: "LAD",
      starter: "T. Gonsolin",
    },
    guardians: {
      team: "Cleveland Guardians",
      abbreviation: "CLE",
      starter: "S. Bieber",
    },
    mariners: {
      team: "Seattle Mariners",
      abbreviation: "SEA",
      starter: "G. Kirby",
    },
    yankees: {
      team: "New York Yankees",
      abbreviation: "NYY",
      starter: "N. Cortes",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "L. McCullers",
    },
  };
  const games = [
    {
      schedule: { start: "2022-10-14T17:08:00.000Z" },
      teams: {
        away: teams.guardians,
        home: teams.yankees,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-180",
            homeOdds: "+150",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-145" } },
      total: {
        current: { total: "6.5", overOdds: "-100", underOdds: "-120" },
      },
    },
    {
      schedule: { start: "2022-10-14T20:38:00.000Z" },
      teams: {
        away: teams.braves,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-195",
            homeOdds: "+160",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
      total: {
        current: { total: "7.0", overOdds: "-120", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-15T00:38:00.000Z" },
      teams: {
        away: teams.dodgers,
        home: teams.padres,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+135",
            homeOdds: "-160",
          },
        },
      },
      moneyline: { current: { awayOdds: "-120", homeOdds: "+105" } },
      total: {
        current: { total: "7.0", overOdds: "+105", underOdds: "-125" },
      },
    },
    {
      schedule: { start: "2022-10-15T20:08:00.000Z" },
      teams: {
        away: teams.astros,
        home: teams.mariners,
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
      moneyline: { current: { awayOdds: "-115", homeOdds: "-105" } },
      total: {
        current: { total: "7.0", overOdds: "-120", underOdds: "-105" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

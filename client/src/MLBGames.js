function MLBGames() {
  const teams = {
    braves: {
      team: "Atlanta Braves",
      abbreviation: "ATL",
      starter: "K. Wright",
    },
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "Y. Darvish",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "Z. Wheeler",
    },
    dodgers: {
      team: "Los Angeles Dodgers",
      abbreviation: "LAD",
      starter: "C. Kershaw",
    },
    guardians: {
      team: "Cleveland Guardians",
      abbreviation: "CLE",
      starter: "S. Bieber",
    },
    mariners: {
      team: "Seattle Mariners",
      abbreviation: "SEA",
      starter: "L. Castillo",
    },
    yankees: {
      team: "New York Yankees",
      abbreviation: "NYY",
      starter: "N. Cortes",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "F. Valdez",
    },
  };
  const games = [
    {
      schedule: { start: "2022-10-12T20:36:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.braves,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-185",
            homeOdds: "+150",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "7.5", overOdds: "-105", underOdds: "-120" },
      },
    },
    {
      schedule: { start: "2022-10-13T00:38:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.dodgers,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-135",
            homeOdds: "+110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+155", homeOdds: "-185" } },
      total: {
        current: { total: "7.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-13T19:38:00.000Z" },
      teams: {
        away: teams.mariners,
        home: teams.astros,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-165",
            homeOdds: "+140",
          },
        },
      },
      moneyline: { current: { awayOdds: "+135", homeOdds: "-160" } },
      total: {
        current: { total: "7.0", overOdds: "-105", underOdds: "-120" },
      },
    },
    {
      schedule: { start: "2022-10-13T23:38:00.000Z" },
      teams: {
        away: teams.guardians,
        home: teams.yankees,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-190",
            homeOdds: "+160",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-145" } },
      total: {
        current: { total: "6.0", overOdds: "-120", underOdds: "-105" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

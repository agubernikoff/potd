function MLBGames() {
  const teams = {
    cardinals: {
      team: "St. Louis Cardinals",
      abbreviation: "STL",
      starter: "A. Wainwright (R)",
    },
    braves: { team: "Atlanta Braves", abbreviation: "ATL", starter: "" },
    mets: {
      team: "New York Mets",
      abbreviation: "NYM",
      starter: "M. Scherzer (R)",
    },
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "Y. Darvish (R)",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "Z. Wheeler (R)",
    },
    dodgers: { team: "Los Angeles Dodgers", abbreviation: "LAD", starter: "" },
    rays: {
      team: "Tampa Bay Rays",
      abbreviation: "TB",
      starter: "S. McClanahan (L)",
    },
    guardians: {
      team: "Cleveland Guardians",
      abbreviation: "CLE",
      starter: "S. Bieber (R)",
    },
    mariners: {
      team: "Seattle Mariners",
      abbreviation: "SEA",
      starter: "L. Castillo (R)",
    },
    jays: {
      team: "Toronto Blue Jays",
      abbreviation: "TOR",
      starter: "A. Manoah (R)",
    },
    yankees: { team: "New York Yankees", abbreviation: "NYY", starter: "" },
    astros: { team: "Houston Astros", abbreviation: "HOU", starter: "" },
  };
  const games = [
    {
      schedule: { start: "2022-10-07T16:07:00.000Z" },
      teams: {
        away: teams.rays,
        home: teams.guardians,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-225",
            homeOdds: "+185",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
      total: {
        current: { total: "6.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-07T18:07:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.cardinals,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+158",
            homeOdds: "-190",
          },
        },
      },
      moneyline: { current: { awayOdds: "-110", homeOdds: "-110" } },
      total: {
        current: { total: "6.5", overOdds: "-125", underOdds: "+100" },
      },
    },
    {
      schedule: { start: "2022-10-07T20:08:00.000Z" },
      teams: {
        away: teams.mariners,
        home: teams.jays,
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
      moneyline: { current: { awayOdds: "+125", homeOdds: "-150" } },
      total: {
        current: { total: "7.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-08T00:07:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.mets,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-200",
            homeOdds: "+165",
          },
        },
      },
      moneyline: { current: { awayOdds: "+130", homeOdds: "-155" } },
      total: {
        current: { total: "6.0", overOdds: "-120", underOdds: "-105" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

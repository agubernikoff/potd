function MLBGames() {
  const teams = {
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "J. Musgrove",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "R. Suarez",
    },
    yankees: {
      team: "New York Yankees",
      abbreviation: "NYY",
      starter: "L. Severino",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "F. Valdez",
    },
  };
  const games = [
    {
      schedule: { start: "2022-10-21T23:38:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+140",
            homeOdds: "-170",
          },
        },
      },
      moneyline: { current: { awayOdds: "-120", homeOdds: "+100" } },
      total: {
        current: { total: "7.5", overOdds: "-105", underOdds: "-120" },
      },
    },
    {
      schedule: { start: "2022-10-20T23:37:00.000Z" },
      teams: {
        away: teams.yankees,
        home: teams.astros,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-175",
            homeOdds: "+150",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "7.0", overOdds: "-105", underOdds: "-115" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

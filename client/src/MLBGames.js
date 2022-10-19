function MLBGames() {
  const teams = {
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
    yankees: {
      team: "New York Yankees",
      abbreviation: "NYY",
      starter: "J. Taillon",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "J. Verlander",
    },
  };
  const games = [
    {
      schedule: { start: "2022-10-19T20:35:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.padres,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+170",
            homeOdds: "-200",
          },
        },
      },
      moneyline: { current: { awayOdds: "+100", homeOdds: "-120" } },
      total: {
        current: { total: "7.0", overOdds: "+100", underOdds: "-120" },
      },
    },
    {
      schedule: { start: "2022-10-19T23:37:00.000Z" },
      teams: {
        away: teams.yankees,
        home: teams.astros,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-140",
            homeOdds: "+120",
          },
        },
      },
      moneyline: { current: { awayOdds: "+160", homeOdds: "-190" } },
      total: {
        current: { total: "7.0", overOdds: "+100", underOdds: "-120" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

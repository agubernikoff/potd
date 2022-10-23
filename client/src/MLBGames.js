function MLBGames() {
  const teams = {
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
      schedule: { start: "2022-10-23T18:38:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-185",
            homeOdds: "+155",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "6.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-23T23:08:00.000Z" },
      teams: {
        away: teams.astros,
        home: teams.yankees,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+170",
            homeOdds: "-210",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-120" } },
      total: {
        current: { total: "6.5", overOdds: "-120", underOdds: "+100" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

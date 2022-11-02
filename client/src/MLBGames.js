function MLBGames() {
  const teams = {
    phillies: {
      team: "Philadelphia Phillies",
      abbreviation: "PHI",
      starter: "A. Nola",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "C. Javier",
    },
  };
  const games = [
    {
      details: { league: "MLB" },
      schedule: { start: "2022-11-03T00:04:00.000Z" },
      teams: {
        away: teams.astros,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+160",
            homeOdds: "-190",
          },
        },
      },
      moneyline: { current: { awayOdds: "-105", homeOdds: "-115" } },
      total: {
        current: { total: "7.5", overOdds: "+105", underOdds: "-125" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

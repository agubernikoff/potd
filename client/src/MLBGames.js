function MLBGames() {
  const teams = {
    phillies: {
      team: "Philadelphia Phillies",
      abbreviation: "PHI",
      starter: "Z. Wheeler",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "F. Valdez",
    },
  };
  const games = [
    {
      details: { league: "MLB" },
      schedule: { start: "2022-11-06T00:04:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.astros,
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
      moneyline: { current: { awayOdds: "+125", homeOdds: "-150" } },
      total: {
        current: { total: "7.0", overOdds: "-105", underOdds: "-115" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

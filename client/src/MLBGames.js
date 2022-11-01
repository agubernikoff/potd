function MLBGames() {
  const teams = {
    phillies: {
      team: "Philadelphia Phillies",
      abbreviation: "PHI",
      starter: "R. Suarez",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "L. McCullers",
    },
  };
  const games = [
    {
      details: { league: "MLB" },
      schedule: { start: "2022-11-02T00:04:00.000Z" },
      teams: {
        away: teams.astros,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+130",
            homeOdds: "-155",
          },
        },
      },
      moneyline: { current: { awayOdds: "-130", homeOdds: "+110" } },
      total: {
        current: { total: "8.0", overOdds: "-105", underOdds: "-115" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

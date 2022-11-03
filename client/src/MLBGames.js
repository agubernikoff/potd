function MLBGames() {
  const teams = {
    phillies: {
      team: "Philadelphia Phillies",
      abbreviation: "PHI",
      starter: "N. Syndergaard",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "J. Verlander",
    },
  };
  const games = [
    {
      details: { league: "MLB" },
      schedule: { start: "2022-11-04T00:04:00.000Z" },
      teams: {
        away: teams.astros,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+110",
            homeOdds: "-130",
          },
        },
      },
      moneyline: { current: { awayOdds: "-155", homeOdds: "-130" } },
      total: {
        current: { total: "7.5", overOdds: "-105", underOdds: "-115" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

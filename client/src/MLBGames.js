function MLBGames() {
  const teams = {
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "A. Nola",
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
      schedule: { start: "2022-10-29T00:04:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.astros,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-165",
            homeOdds: "+135",
          },
        },
      },
      moneyline: { current: { awayOdds: "+140", homeOdds: "-165" } },
      total: {
        current: { total: "6.5", overOdds: "-130", underOdds: "+105" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

function MLBGames() {
  const teams = {
    phillies: {
      team: "Philladelphia Phillies",
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
      schedule: { start: "2022-10-30T00:04:00.000Z" },
      teams: {
        away: teams.phillies,
        home: teams.astros,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-180",
            homeOdds: "+150",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "7.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

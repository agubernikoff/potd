function MLBGames() {
  const teams = {
    padres: {
      team: "San Diego Padres",
      abbreviation: "SD",
      starter: "M. Clevinger",
    },
    phillies: {
      team: "Philladelphia Phillies",
      abbreviation: "PHI",
      starter: "B. Falter",
    },
    yankees: {
      team: "New York Yankees",
      abbreviation: "NYY",
      starter: "G. Cole",
    },
    astros: {
      team: "Houston Astros",
      abbreviation: "HOU",
      starter: "C. Javier",
    },
  };
  const games = [
    {
      schedule: { start: "2022-10-22T21:07:00.000Z" },
      teams: {
        away: teams.astros,
        home: teams.yankees,
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
      moneyline: { current: { awayOdds: "+130", homeOdds: "-155" } },
      total: {
        current: { total: "6.5", overOdds: "-120", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-22T23:45:00.000Z" },
      teams: {
        away: teams.padres,
        home: teams.phillies,
      },
      odds: {
        spread: {
          current: {
            away: "-1.5",
            home: "+1.5",
            awayOdds: "+150",
            homeOdds: "-180",
          },
        },
      },
      moneyline: { current: { awayOdds: "-105", homeOdds: "-110" } },
      total: {
        current: { total: "8.0", overOdds: "-105", underOdds: "-115" },
      },
    },
  ];
  return { games };
}

export default MLBGames;

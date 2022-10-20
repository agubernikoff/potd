function NBAGames() {
  const teams = {
    atl: { team: "Atlanta Hawks" },
    bos: { team: "Boston Celtics" },
    bkn: { team: "Brooklyn Nets" },
    cha: { team: "Charlotte Hornets" },
    chi: { team: "Chicago Bulls" },
    cle: { team: "Cleveland Cavaliers" },
    dal: { team: "Dallas Mavericks" },
    den: { team: "Denver Nuggets" },
    det: { team: "Detroit Pistons" },
    gsw: { team: "Golden State Warriors" },
    hou: { team: "Houston Rockets" },
    ind: { team: "Indiana Pacers" },
    lac: { team: "Los Angeles Clippers" },
    lal: { team: "Los Angeles Lakers" },
    mem: { team: "Memphis Grizzlies" },
    mia: { team: "Miami Heat" },
    mil: { team: "Milwaukee Bucks" },
    min: { team: "Minnesota Timberwolves" },
    nop: { team: "New Orleans Pelicans" },
    nyk: { team: "New York Knicks" },
    okc: { team: "Oklahoma City Thunder" },
    orl: { team: "Orlando Magic" },
    phi: { team: "Philadelphia 76ers" },
    pho: { team: "Phoenix Suns" },
    por: { team: "Portland Trailblazers" },
    sac: { team: "Sacramento Kings" },
    sas: { team: "San Antonio Spurs" },
    tor: { team: "Toronto Raptors" },
    uta: { team: "Utah Jazz" },
    was: { team: "Washington Wizards" },
  };
  const games = [
    {
      schedule: { start: "2022-10-20T23:30:00.000Z" },
      teams: {
        away: teams.mil,
        home: teams.phi,
      },
      odds: {
        spread: {
          current: {
            away: "+4.0",
            home: "-4.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "-180", homeOdds: "+150" } },
      total: {
        current: { total: "223.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T02:00:00.000Z" },
      teams: {
        away: teams.lac,
        home: teams.lal,
      },
      odds: {
        spread: {
          current: {
            away: "-5.5",
            home: "+5.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-220", homeOdds: "+180" } },
      total: {
        current: { total: "225.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-19T23:40:00.000Z" },
      teams: {
        away: teams.nop,
        home: teams.bkn,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-150" } },
      total: {
        current: { total: "231.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-19T23:40:00.000Z" },
      teams: {
        away: teams.nyk,
        home: teams.mem,
      },
      odds: {
        spread: {
          current: {
            away: "+4.0",
            home: "-4.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+150", homeOdds: "-180" } },
      total: {
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-19T23:40:00.000Z" },
      teams: {
        away: teams.hou,
        home: teams.atl,
      },
      odds: {
        spread: {
          current: {
            away: "+10.0",
            home: "-10.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+385", homeOdds: "-500" } },
      total: {
        current: { total: "235.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-19T23:40:00.000Z" },
      teams: {
        away: teams.chi,
        home: teams.mia,
      },
      odds: {
        spread: {
          current: {
            away: "+7.5",
            home: "-7.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+250", homeOdds: "-310" } },
      total: {
        current: { total: "216.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-19T23:40:00.000Z" },
      teams: {
        away: teams.cle,
        home: teams.tor,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+115", homeOdds: "-135" } },
      total: {
        current: { total: "216.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-20T00:10:00.000Z" },
      teams: {
        away: teams.okc,
        home: teams.min,
      },
      odds: {
        spread: {
          current: {
            away: "+11.0",
            home: "-11.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+480", homeOdds: "-650" } },
      total: {
        current: { total: "225.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-20T00:10:00.000Z" },
      teams: {
        away: teams.cha,
        home: teams.sas,
      },
      odds: {
        spread: {
          current: {
            away: "-1.0",
            home: "+1.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-115", homeOdds: "+100" } },
      total: {
        current: { total: "221.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-20T01:10:00.000Z" },
      teams: {
        away: teams.den,
        home: teams.uta,
      },
      odds: {
        spread: {
          current: {
            away: "-6.5",
            home: "+6.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-270", homeOdds: "+220" } },
      total: {
        current: { total: "225.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-20T02:10:00.000Z" },
      teams: {
        away: teams.dal,
        home: teams.pho,
      },
      odds: {
        spread: {
          current: {
            away: "+4.0",
            home: "-4.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+140", homeOdds: "-175" } },
      total: {
        current: { total: "217.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-20T02:10:00.000Z" },
      teams: {
        away: teams.por,
        home: teams.sac,
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-145" } },
      total: {
        current: { total: "228.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

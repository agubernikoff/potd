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
    phx: { team: "Phoenix Suns" },
    por: { team: "Portland Trailblazers" },
    sac: { team: "Sacramento Kings" },
    sas: { team: "San Antonio Spurs" },
    tor: { team: "Toronto Raptors" },
    uta: { team: "Utah Jazz" },
    was: { team: "Washington Wizards" },
  };
  const games = [
    {
      schedule: { start: "2022-10-21T23:10:00.000Z" },
      teams: {
        away: teams.nop,
        home: teams.cha,
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
      moneyline: { current: { awayOdds: "-260", homeOdds: "+215" } },
      total: {
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:10:00.000Z" },
      teams: {
        away: teams.sas,
        home: teams.ind,
      },
      odds: {
        spread: {
          current: {
            away: "+1.0",
            home: "-1.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+100", homeOdds: "-120" } },
      total: {
        current: { total: "232.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:10:00.000Z" },
      teams: {
        away: teams.chi,
        home: teams.was,
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
      moneyline: { current: { awayOdds: "+115", homeOdds: "-135" } },
      total: {
        current: { total: "222.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.orl,
        home: teams.atl,
      },
      odds: {
        spread: {
          current: {
            away: "+9.0",
            home: "-9.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+310", homeOdds: "-390" } },
      total: {
        current: { total: "225.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.det,
        home: teams.nyk,
      },
      odds: {
        spread: {
          current: {
            away: "+7.0",
            home: "-7.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+225", homeOdds: "-275" } },
      total: {
        current: { total: "219.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.bos,
        home: teams.mia,
      },
      odds: {
        spread: {
          current: {
            away: "-2.5",
            home: "+2.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
      total: {
        current: { total: "218.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-21T23:40:00.000Z" },
      teams: {
        away: teams.tor,
        home: teams.bkn,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+125", homeOdds: "-150" } },
      total: {
        current: { total: "227.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T00:10:00.000Z" },
      teams: {
        away: teams.uta,
        home: teams.min,
      },
      odds: {
        spread: {
          current: {
            away: "+8.0",
            home: "-8.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+265", homeOdds: "-330" } },
      total: {
        current: { total: "226.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T00:10:00.000Z" },
      teams: {
        away: teams.mem,
        home: teams.hou,
      },
      odds: {
        spread: {
          current: {
            away: "-7.0",
            home: "+7.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-260", homeOdds: "+215" } },
      total: {
        current: { total: "231.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T02:10:00.000Z" },
      teams: {
        away: teams.den,
        home: teams.gsw,
      },
      odds: {
        spread: {
          current: {
            away: "+4.5",
            home: "-4.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+165", homeOdds: "-200" } },
      total: {
        current: { total: "229.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-22T02:10:00.000Z" },
      teams: {
        away: teams.phx,
        home: teams.por,
      },
      odds: {
        spread: {
          current: {
            away: "-5.0",
            home: "+5.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-215", homeOdds: "+180" } },
      total: {
        current: { total: "224.0", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NBAGames;

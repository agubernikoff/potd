function NCAAFGames() {
  const teams = {
    uga: { team: "Georgia Bulldogs", ranking: 1 },
    osu: { team: "Ohio State Buckeyes", ranking: 2 },
    bama: { team: "Alabama Crimson Tide", ranking: 3 },
    clemson: { team: "Clemson Tigers", ranking: 4 },
    mich: { team: "Michigan Wolverines", ranking: 5 },
    tenn: { team: "Tennessee Volunteers", ranking: 6 },
    usc: { team: "USC Trojans", ranking: 7 },
    okstate: { team: "Oklahoma State Cowboys", ranking: 8 },
    miss: { team: "Ole Miss Rebels", ranking: 9 },
    psu: { team: "Penn State Nittany Lions", ranking: 10 },
    ucla: { team: "UCLA Bruins", ranking: 11 },
    oregon: { team: "Oregon Ducks", ranking: 12 },
    tcu: { team: "TCU Horned Frogs", ranking: 13 },
    wf: { team: "Wake Forest Demon Deacons", ranking: 14 },
    ncst: { team: "NC State Wolfpack", ranking: 15 },
    msu: { team: "Mississippi State Bulldogs", ranking: 16 },
    ksu: { team: "Kansas State Wildcats", ranking: 17 },
    cuse: { team: "Syracuse Orange", ranking: 18 },
    ku: { team: "Kansas Jayhawks", ranking: 19 },
    uu: { team: "Utah Utes", ranking: 20 },
    cincy: { team: "Cincinnati Bearcats", ranking: 21 },
    texas: { team: "Texas Longhorns", ranking: 22 },
    uk: { team: "Kentucky Wildcats", ranking: 23 },
    wash: { team: "Illinois Fighting Illini", ranking: 24 },
    jmu: { team: "James Madison Dukes", ranking: 25 },
  };
  const games = [
    {
      schedule: { start: "2022-10-08T16:00:00.000Z" },
      teams: {
        away: teams.mich,
        home: { team: "Indiana Hoosiers" },
      },
      odds: {
        spread: {
          current: {
            away: "-22.5",
            home: "+22.5",
            awayOdds: "-120",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-1800", homeOdds: "+980" } },
      total: {
        current: { total: "59.5", overOdds: "-105", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-08T16:00:00.000Z" },
      teams: {
        away: teams.tenn,
        home: teams.lsu,
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
      moneyline: { current: { awayOdds: "-155", homeOdds: "+130" } },
      total: {
        current: { total: "64.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-08T16:00:00.000Z" },
      teams: {
        away: teams.tcu,
        home: teams.ku,
      },
      odds: {
        spread: {
          current: {
            away: "-7.0",
            home: "+7.0",
            awayOdds: "-265",
            homeOdds: "+215",
          },
        },
      },
      moneyline: { current: { awayOdds: "+190", homeOdds: "-230" } },
      total: {
        current: { total: "69.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-08T16:00:00.000Z" },
      teams: {
        away: { team: "Arkansas Razorbacks" },
        home: teams.msu,
      },
      odds: {
        spread: {
          current: {
            away: "+9.5",
            home: "-9.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+260", homeOdds: "-330" } },
      total: {
        current: { total: "57.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T18:30:00.000Z" },
      teams: {
        away: { team: "South Florida Bulls" },
        home: teams.cincy,
      },
      odds: {
        spread: {
          current: {
            away: "+27.5",
            home: "-27.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+1280", homeOdds: "-3500" } },
      total: {
        current: { total: "58.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-08T19:30:00.000Z" },
      teams: {
        away: { team: "Auburn Tigers" },
        home: teams.uga,
      },
      odds: {
        spread: {
          current: {
            away: "29.5",
            home: "29.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+2200", homeOdds: "-8000" } },
      total: {
        current: { total: "49.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-08T19:30:00.000Z" },
      teams: {
        away: { team: "Texas Tech Red Raiders" },
        home: teams.okstate,
      },
      odds: {
        spread: {
          current: {
            away: "+9.5",
            home: "-9.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+260", homeOdds: "-330" } },
      total: {
        current: { total: "69.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T19:30:00.000Z" },
      teams: {
        away: teams.uu,
        home: teams.ucla,
      },
      odds: {
        spread: {
          current: {
            away: "-3.5",
            home: "+3.5",
            awayOdds: "-105",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "-160", homeOdds: "+130" } },
      total: {
        current: { total: "64.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T20:00:00.000Z" },
      teams: {
        away: teams.osu,
        home: { team: "Michigan State Spartans" },
      },
      odds: {
        spread: {
          current: {
            away: "-26.5",
            home: "+26.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-4000", homeOdds: "+1400" } },
      total: {
        current: { total: "64.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-08T20:00:00.000Z" },
      teams: {
        away: teams.miss,
        home: { team: "Vanderbilt Commadores" },
      },
      odds: {
        spread: {
          current: {
            away: "-16.5",
            home: "+16.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-800", homeOdds: "+580" } },
      total: {
        current: { total: "61.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-08T20:00:00.000Z" },
      teams: {
        away: teams.wash,
        home: { team: "Arizona State Sun Devils" },
      },
      odds: {
        spread: {
          current: {
            away: "-13.5",
            home: "+13.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-530", homeOdds: "+390" } },
      total: {
        current: { total: "57.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-08T23:30:00.000Z" },
      teams: {
        away: teams.clemson,
        home: { team: "Boston College Eagles" },
      },
      odds: {
        spread: {
          current: {
            away: "-20.5",
            home: "+20.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-1400", homeOdds: "+800" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T23:30:00.000Z" },
      teams: {
        away: { team: "Washington State Cougars" },
        home: teams.usc,
      },
      odds: {
        spread: {
          current: {
            away: "+12.5",
            home: "-12.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+365", homeOdds: "-490" } },
      total: {
        current: { total: "65.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T23:30:00.000Z" },
      teams: {
        away: { team: "South Carolina Gamecocks" },
        home: teams.uk,
      },
      odds: {
        spread: {
          current: {
            away: "+6.0",
            home: "-6.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+195", homeOdds: "-240" } },
      total: {
        current: { total: "46.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T23:30:00.000Z" },
      teams: {
        away: { team: "Army Black Knights" },
        home: teams.wf,
      },
      odds: {
        spread: {
          current: {
            away: "+17.5",
            home: "-17.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+530", homeOdds: "-780" } },
      total: {
        current: { total: "65.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T23:30:00.000Z" },
      teams: {
        away: teams.byu,
        home: { team: "Notre Dame Fighting Irish" },
      },
      odds: {
        spread: {
          current: {
            away: "+3.5",
            home: "-3.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+145", homeOdds: "-175" } },
      total: {
        current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-08T23:30:00.000Z" },
      teams: {
        away: teams.ksu,
        home: { team: "Iowa State Cyclones" },
      },
      odds: {
        spread: {
          current: {
            away: "-2.0",
            home: "+2.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-140", homeOdds: "+105" } },
      total: {
        current: { total: "45.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-09T00:00:00.000Z" },
      teams: {
        away: { team: "Texas A&M Aggies" },
        home: teams.bama,
      },
      odds: {
        spread: {
          current: {
            away: "+24.5",
            home: "-24.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+1060", homeOdds: "-2300" } },
      total: {
        current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-09T00:00:00.000Z" },
      teams: {
        away: { team: "Florida State Seminoles" },
        home: teams.ncst,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+130", homeOdds: "-155" } },
      total: {
        current: { total: "50.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      schedule: { start: "2022-10-09T01:00:00.000Z" },
      teams: {
        away: teams.oregon,
        home: { team: "Arizona Wildcats" },
      },
      odds: {
        spread: {
          current: {
            away: "-13.5",
            home: "+13.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-530", homeOdds: "+390" } },
      total: {
        current: { total: "70.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NCAAFGames;

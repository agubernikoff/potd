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
    ill: { team: "Illinois Fighting Illini", ranking: 24 },
    jmu: { team: "James Madison Dukes", ranking: 25 },
  };
  const games = [
    {
      schedule: { start: "2022-10-15T16:00:00.000Z" },
      teams: {
        away: { team: "Minnesota Gophers" },
        home: teams.ill,
      },
      odds: {
        spread: {
          current: {
            away: "-6.5",
            home: "+6.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-255", homeOdds: "+205" } },
      total: {
        current: { total: "39.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-15T16:00:00.000Z" },
      teams: {
        away: teams.ku,
        home: { team: "Oklahoma Sooners" },
      },
      odds: {
        spread: {
          current: {
            away: "+8.5",
            home: "-8.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+250", homeOdds: "-315" } },
      total: {
        current: { total: "64.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-15T16:00:00.000Z" },
      teams: {
        away: teams.psu,
        home: teams.mich,
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
      moneyline: { current: { awayOdds: "+220", homeOdds: "-275" } },
      total: {
        current: { total: "49.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-15T16:00:00.000Z" },
      teams: {
        away: { team: "Iowa Hawkeyes" },
        home: teams.texas,
      },
      odds: {
        spread: {
          current: {
            away: "+15.5",
            home: "-15.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+500", homeOdds: "-720" } },
      total: {
        current: { total: "48.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-15T16:00:00.000Z" },
      teams: {
        away: { team: "Auburn Tigers" },
        home: teams.miss,
      },
      odds: {
        spread: {
          current: {
            away: "+14.5",
            home: "-14.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+490", homeOdds: "-710" } },
      total: {
        current: { total: "55.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-15T19:30:00.000Z" },
      teams: {
        away: { team: "Vanderbilt Commadores" },
        home: teams.uga,
      },
      odds: {
        spread: {
          current: {
            away: "+37.5",
            home: "-37.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "n/a", homeOdds: "n/a" } },
      total: {
        current: { total: "56.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-15T19:30:00.000Z" },
      teams: {
        away: teams.okstate,
        home: teams.tcu,
      },
      odds: {
        spread: {
          current: {
            away: "+3.5",
            home: "-3.5",
            awayOdds: "-105",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "+150", homeOdds: "-185" } },
      total: {
        current: { total: "68.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-15T19:30:00.000Z" },
      teams: {
        away: teams.bama,
        home: teams.tenn,
      },
      odds: {
        spread: {
          current: {
            away: "-8.5",
            home: "+8.5",
            awayOdds: "-105",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "-335", homeOdds: "+265" } },
      total: {
        current: { total: "66.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-15T19:30:00.000Z" },
      teams: {
        away: { team: "NCST Wolfpack" },
        home: teams.cuse,
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
      moneyline: { current: { awayOdds: "+130", homeOdds: "-155" } },
      total: {
        current: { total: "42.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-15T20:00:00.000Z" },
      teams: {
        away: teams.jmu,
        home: { team: "Georgia Southern Eagles" },
      },
      odds: {
        spread: {
          current: {
            away: "-12.5",
            home: "+12.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-465", homeOdds: "+350" } },
      total: {
        current: { total: "66.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-15T23:30:00.000Z" },
      teams: {
        away: teams.clemson,
        home: { team: "Florida State Seminoles" },
      },
      odds: {
        spread: {
          current: {
            away: "-4.5",
            home: "+4.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-205", homeOdds: "+170" } },
      total: {
        current: { total: "51.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      schedule: { start: "2022-10-15T23:30:00.000Z" },
      teams: {
        away: teams.msu,
        home: teams.uk,
      },
      odds: {
        spread: {
          current: {
            away: "-3.5",
            home: "+3.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-170", homeOdds: "+140" } },
      total: {
        current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      schedule: { start: "2022-10-16T00:00:00.000Z" },
      teams: {
        away: teams.usc,
        home: teams.uu,
      },
      odds: {
        spread: {
          current: {
            away: "+3.5",
            home: "-3.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+140", homeOdds: "-170" } },
      total: {
        current: { total: "64.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    // {
    //   schedule: { start: "2022-10-15T23:30:00.000Z" },
    //   teams: {
    //     away: { team: "South Carolina Gamecocks" },
    //     home: teams.uk,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+6.0",
    //         home: "-6.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+195", homeOdds: "-240" } },
    //   total: {
    //     current: { total: "46.5", overOdds: "-110", underOdds: "-110" },
    //   },
    //   },
    //   {
    //     schedule: { start: "2022-10-15T23:30:00.000Z" },
    //     teams: {
    //       away: { team: "Army Black Knights" },
    //       home: teams.wf,
    //     },
    //     odds: {
    //       spread: {
    //         current: {
    //           away: "+17.5",
    //           home: "-17.5",
    //           awayOdds: "-115",
    //           homeOdds: "-105",
    //         },
    //       },
    //     },
    //     moneyline: { current: { awayOdds: "+530", homeOdds: "-780" } },
    //     total: {
    //       current: { total: "65.5", overOdds: "-110", underOdds: "-110" },
    //     },
    //   },
    //   {
    //     schedule: { start: "2022-10-15T23:30:00.000Z" },
    //     teams: {
    //       away: teams.byu,
    //       home: { team: "Notre Dame Fighting Irish" },
    //     },
    //     odds: {
    //       spread: {
    //         current: {
    //           away: "+3.5",
    //           home: "-3.5",
    //           awayOdds: "-110",
    //           homeOdds: "-110",
    //         },
    //       },
    //     },
    //     moneyline: { current: { awayOdds: "+145", homeOdds: "-175" } },
    //     total: {
    //       current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
    //     },
    //   },
    //   {
    //     schedule: { start: "2022-10-15T23:30:00.000Z" },
    //     teams: {
    //       away: teams.ksu,
    //       home: { team: "Iowa State Cyclones" },
    //     },
    //     odds: {
    //       spread: {
    //         current: {
    //           away: "-2.0",
    //           home: "+2.0",
    //           awayOdds: "-110",
    //           homeOdds: "-110",
    //         },
    //       },
    //     },
    //     moneyline: { current: { awayOdds: "-140", homeOdds: "+105" } },
    //     total: {
    //       current: { total: "45.5", overOdds: "-105", underOdds: "-115" },
    //     },
    //   },
    //   {
    //     schedule: { start: "2022-10-09T00:00:00.000Z" },
    //     teams: {
    //       away: { team: "Texas A&M Aggies" },
    //       home: teams.bama,
    //     },
    //     odds: {
    //       spread: {
    //         current: {
    //           away: "+24.5",
    //           home: "-24.5",
    //           awayOdds: "-115",
    //           homeOdds: "-105",
    //         },
    //       },
    //     },
    //     moneyline: { current: { awayOdds: "+1060", homeOdds: "-2300" } },
    //     total: {
    //       current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
    //     },
    //   },
    //   {
    //     schedule: { start: "2022-10-09T00:00:00.000Z" },
    //     teams: {
    //       away: { team: "Florida State Seminoles" },
    //       home: teams.ncst,
    //     },
    //     odds: {
    //       spread: {
    //         current: {
    //           away: "+3.0",
    //           home: "-3.0",
    //           awayOdds: "-105",
    //           homeOdds: "-115",
    //         },
    //       },
    //     },
    //     moneyline: { current: { awayOdds: "+130", homeOdds: "-155" } },
    //     total: {
    //       current: { total: "50.5", overOdds: "-115", underOdds: "-105" },
    //     },
    //   },
    //   {
    //     schedule: { start: "2022-10-09T01:00:00.000Z" },
    //     teams: {
    //       away: teams.oregon,
    //       home: { team: "Arizona Wildcats" },
    //     },
    //     odds: {
    //       spread: {
    //         current: {
    //           away: "-13.5",
    //           home: "+13.5",
    //           awayOdds: "-110",
    //           homeOdds: "-110",
    //         },
    //       },
    //     },
    //     moneyline: { current: { awayOdds: "-530", homeOdds: "+390" } },
    //     total: {
    //       current: { total: "70.5", overOdds: "-110", underOdds: "-110" },
    //     },
    // },
  ];
  return { games };
}

export default NCAAFGames;

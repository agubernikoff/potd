function NCAAFGames() {
  const teams = {
    uga: { team: "Georgia Bulldogs", ranking: 1, abbreviation: "UGA" },
    osu: { team: "Ohio State Buckeyes", ranking: 2, abbreviation: "OSU" },
    tenn: { team: "Tennessee Volunteers", ranking: 3, abbreviation: "TENN" },
    mich: { team: "Michigan Wolverines", ranking: 4, abbreviation: "MICH" },
    clemson: { team: "Clemson Tigers", ranking: 5, abbreviation: "CLEM" },
    bama: { team: "Alabama Crimson Tide", ranking: 6, abbreviation: "BAMA" },
    tcu: { team: "TCU Horned Frogs", ranking: 7, abbreviation: "TCU" },
    oregon: { team: "Oregon Ducks", ranking: 8, abbreviation: "ORE" },
    okstate: {
      team: "Oklahoma State Cowboys",
      ranking: 9,
      abbreviation: "OKST",
    },
    usc: { team: "USC Trojans", ranking: 10, abbreviation: "USC" },
    wf: {
      team: "Wake Forest Demon Deacons",
      ranking: 11,
      abbreviation: "WAKE",
    },
    ucla: { team: "UCLA Bruins", ranking: 12, abbreviation: "UCLA" },
    psu: { team: "Penn State Nittany Lions", ranking: 13, abbreviation: "PSU" },
    uu: { team: "Utah Utes", ranking: 14, abbreviation: "UTAH" },
    ole: { team: "Ole Miss Rebels", ranking: 15, abbreviation: "MISS" },
    cuse: { team: "Syracuse Orange", ranking: 16, abbreviation: "CUSE" },
    ill: { team: "Illinois Fighting Illini", ranking: 17, abbreviation: "ILL" },
    lsu: { team: "Louisiana State Tigers", ranking: 18, abbreviation: "LSU" },
    uk: { team: "Kentucky Wildcats", ranking: 19, abbreviation: "UK" },
    cincy: { team: "Cincinnati Bearcats", ranking: 20, abbreviation: "CINCY" },
    unc: { team: "North Carolina Tar Heels", ranking: 21, abbreviation: "UNC" },
    ksu: { team: "Kansas State Wildcats", ranking: 22, abbreviation: "KSU" },
    tu: { team: "Tulane Green Wave", ranking: 23, abbreviation: "TU" },
    ncst: { team: "NC State Wolfpack", ranking: 24, abbreviation: "NCST" },
    sc: { team: "South Carolina Gamecocks", ranking: 25, abbreviation: "SC" },
  };
  const games = [
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T16:00:00.000Z" },
      teams: {
        away: teams.tcu,
        home: { team: "West Virginia Mountaineers" },
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
      moneyline: { current: { awayOdds: "-270", homeOdds: "+220" } },
      total: {
        current: { total: "69.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T16:00:00.000Z" },
      teams: {
        away: teams.osu,
        home: teams.psu,
      },
      odds: {
        spread: {
          current: {
            away: "-16.0",
            home: "+16.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-700", homeOdds: "+500" } },
      total: {
        current: { total: "60.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T16:00:00.000Z" },
      teams: {
        away: { team: "Notre Dame Fighting Irish" },
        home: teams.cuse,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+100", homeOdds: "-120" } },
      total: {
        current: { total: "48.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T19:30:00.000Z" },
      teams: {
        away: teams.ill,
        home: { team: "Nebraska Cornhuskers" },
      },
      odds: {
        spread: {
          current: {
            away: "-7.5",
            home: "+7.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-290", homeOdds: "+230" } },
      total: {
        current: { total: "50.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T19:30:00.000Z" },
      teams: {
        away: teams.cincy,
        home: { team: "University of Central Florida Knights" },
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "+105",
            homeOdds: "-125",
          },
        },
      },
      moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
      total: {
        current: { total: "55.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T19:30:00.000Z" },
      teams: {
        away: teams.oregon,
        home: { team: "California Golden Bears" },
      },
      odds: {
        spread: {
          current: {
            away: "-17.0",
            home: "+17.0",
            awayOdds: "-105",
            homeOdds: "-120",
          },
        },
      },
      moneyline: { current: { awayOdds: "-800", homeOdds: "+550" } },
      total: {
        current: { total: "56.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T19:30:00.000Z" },
      teams: {
        away: teams.wf,
        home: { team: "Louisville Cardinal" },
      },
      odds: {
        spread: {
          current: {
            away: "-3.0",
            home: "+3.0",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-155", homeOdds: "+135" } },
      total: {
        current: { total: "66.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T19:30:00.000Z" },
      teams: {
        away: teams.okstate,
        home: teams.ksu,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+100", homeOdds: "-120" } },
      total: {
        current: { total: "56.0", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T20:00:00.000Z" },
      teams: {
        away: { team: "Missouri Tigers" },
        home: teams.sc,
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
      moneyline: { current: { awayOdds: "+150", homeOdds: "-175" } },
      total: {
        current: { total: "45.0", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T23:00:00.000Z" },
      teams: {
        away: teams.usc,
        home: { team: "Arizona Wildcats" },
      },
      odds: {
        spread: {
          current: {
            away: "-14.5",
            home: "+14.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-600", homeOdds: "+450" } },
      total: {
        current: { total: "75.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T23:00:00.000Z" },
      teams: {
        away: teams.uk,
        home: teams.tenn,
      },
      odds: {
        spread: {
          current: {
            away: "+11.5",
            home: "-11.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+340", homeOdds: "-425" } },
      total: {
        current: { total: "62.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T23:30:00.000Z" },
      teams: {
        away: teams.ole,
        home: { team: "Texas A&M Aggies" },
      },
      odds: {
        spread: {
          current: {
            away: "-2.5",
            home: "+2.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-135", homeOdds: "+115" } },
      total: {
        current: { total: "55.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-29T23:30:00.000Z" },
      teams: {
        away: { team: "Michigan State Spartans" },
        home: teams.mich,
      },
      odds: {
        spread: {
          current: {
            away: "+23.0",
            home: "-23.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+1000", homeOdds: "-1800" } },
      total: {
        current: { total: "55.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-30T00:00:00.000Z" },
      teams: {
        away: { team: "Pittsburgh Panthers" },
        home: teams.unc,
      },
      odds: {
        spread: {
          current: {
            away: "+3.0",
            home: "-3.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-140" } },
      total: {
        current: { total: "65.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-10-30T02:30:00.000Z" },
      teams: {
        away: { team: "Stanford Cardinal" },
        home: teams.ucla,
      },
      odds: {
        spread: {
          current: {
            away: "+16.0",
            home: "-16.0",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+475", homeOdds: "-650" } },
      total: {
        current: { total: "65.0", overOdds: "-115", underOdds: "-105" },
      },
    },
    // {
    // details:{league:'NCAAF'},
    //   schedule: { start: "2022-10-29T23:30:00.000Z" },
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
    // details:{league:'NCAAF'},
    //     schedule: { start: "2022-10-29T23:30:00.000Z" },
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
    // details:{league:'NCAAF'},
    //     schedule: { start: "2022-10-29T23:30:00.000Z" },
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
    // details:{league:'NCAAF'},
    //     schedule: { start: "2022-10-29T23:30:00.000Z" },
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
    // details:{league:'NCAAF'},
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
    // details:{league:'NCAAF'},
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
    // details:{league:'NCAAF'},
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

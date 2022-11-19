function NCAAFGames() {
  const teams = {
    uga: { team: "Georgia Bulldogs", ranking: 1, abbreviation: "UGA" },
    osu: { team: "Ohio State Buckeyes", ranking: 2, abbreviation: "OSU" },
    mich: { team: "Michigan Wolverines", ranking: 3, abbreviation: "MICH" },
    tcu: { team: "TCU Horned Frogs", ranking: 4, abbreviation: "TCU" },
    tenn: { team: "Tennessee Volunteers", ranking: 5, abbreviation: "TENN" },
    lsu: { team: "Louisiana State Tigers", ranking: 6, abbreviation: "LSU" },
    usc: { team: "USC Trojans", ranking: 7, abbreviation: "USC" },
    bama: { team: "Alabama Crimson Tide", ranking: 8, abbreviation: "BAMA" },
    clemson: { team: "Clemson Tigers", ranking: 9, abbreviation: "CLEM" },
    uu: { team: "Utah Utes", ranking: 10, abbreviation: "UTAH" },
    psu: { team: "Penn State Nittany Lions", ranking: 11, abbreviation: "PSU" },
    oregon: { team: "Oregon Ducks", ranking: 12, abbreviation: "ORE" },
    unc: { team: "North Carolina Tar Heels", ranking: 13, abbreviation: "UNC" },
    ole: { team: "Ole Miss Rebels", ranking: 14, abbreviation: "MISS" },
    wash: { team: "Washington Huskies", ranking: 15, abbreviation: "WASH" },
    ucla: { team: "UCLA Bruins", ranking: 16, abbreviation: "UCLA" },
    ucf: { team: "UCF Knights", ranking: 17, abbreviation: "UCF" },
    nd: { team: "Notre Dame Fighting Irish", ranking: 18, abbreviation: "ND" },
    ksu: { team: "Kansas State Wildcats", ranking: 19, abbreviation: "KSU" },
    fsu: { team: "Florida State Seminoles", ranking: 20, abbreviation: "FSU" },
    tu: { team: "Tulane Green Wave", ranking: 21, abbreviation: "TU" },
    cincy: { team: "Cincinnati Bearcats", ranking: 22, abbreviation: "CINCY" },
    ccu: {
      team: "Coastal Carolina Chanticleers",
      ranking: 23,
      abbreviation: "CCU",
    },
    okst: { team: "Oklahoma State Cowboys", ranking: 24, abbreviation: "OKST" },
    orest: { team: "Oregon State Beavers", ranking: 25, abbreviation: "OREST" },
  };
  const games = [
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T17:00:00.000Z" },
      teams: {
        away: { team: "Florida Gators", abbreviation: "UF" },
        home: { team: "Vanderbilt Commadores", abbreviation: "VANDY" },
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
      moneyline: { current: { awayOdds: "-610", homeOdds: "+440" } },
      total: {
        current: { total: "58.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T17:00:00.000Z" },
      teams: {
        away: teams.tcu,
        home: { team: "Baylor Bears", abbreviation: "BU" },
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
      moneyline: { current: { awayOdds: "-140", homeOdds: "+115" } },
      total: {
        current: { total: "57.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T17:00:00.000Z" },
      teams: {
        away: { team: "Illinois Fighting Illini", abbreviation: "ILL" },
        home: teams.mich,
      },
      odds: {
        spread: {
          current: {
            away: "+17.5",
            home: "-17.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+680", homeOdds: "-1100" } },
      total: {
        current: { total: "41.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T19:00:00.000Z" },
      teams: {
        away: { team: "Houston Cougars", abbreviation: "HOU" },
        home: { team: "ECU Pirates", abbreviation: "ECU" },
      },
      odds: {
        spread: {
          current: {
            away: "+6.5",
            home: "-6.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+190", homeOdds: "-235" } },
      total: {
        current: { total: "66.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T19:30:00.000Z" },
      teams: {
        away: { team: "Boston College Eagles", abbreviation: "BC" },
        home: teams.nd,
      },
      odds: {
        spread: {
          current: {
            away: "+20.5",
            home: "-20.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+860", homeOdds: "-1600" } },
      total: {
        current: { total: "42.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T20:30:00.000Z" },
      teams: {
        away: teams.uga,
        home: { team: "Kentucky Wildcats", abbreviation: "UK" },
      },
      odds: {
        spread: {
          current: {
            away: "-22.5",
            home: "+22.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-2800", homeOdds: "+1160" } },
      total: {
        current: { total: "47.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T20:30:00.000Z" },
      teams: {
        away: teams.psu,
        home: { team: "Rutgers Scarlet Knights", abbreviation: "RU" },
      },
      odds: {
        spread: {
          current: {
            away: "-19.5",
            home: "+19.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-1300", homeOdds: "+760" } },
      total: {
        current: { total: "44.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T20:30:00.000Z" },
      teams: {
        away: teams.osu,
        home: { team: "Maryland Terrapins", abbreviation: "UMD" },
      },
      odds: {
        spread: {
          current: {
            away: "-26.5",
            home: "+26.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-4500", homeOdds: "+1600" } },
      total: {
        current: { total: "62.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-19T20:30:00.000Z" },
      teams: {
        away: { team: "Miami Hurricanes", abbreviation: "UM" },
        home: teams.clemson,
      },
      odds: {
        spread: {
          current: {
            away: "+18.5",
            home: "-18.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+720", homeOdds: "-1200" } },
      total: {
        current: { total: "47.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-20T00:00:00.000Z" },
      teams: {
        away: teams.tenn,
        home: { team: "South Carolina Gamecocks", abbreviation: "SC" },
      },
      odds: {
        spread: {
          current: {
            away: "-21.5",
            home: "+21.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-2100", homeOdds: "+1000" } },
      total: {
        current: { total: "66.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-20T00:30:00.000Z" },
      teams: {
        away: teams.okst,
        home: { team: "Oklahoma Sooners", abbreviation: "OU" },
      },
      odds: {
        spread: {
          current: {
            away: "+7.0",
            home: "-7.0",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+220", homeOdds: "-275" } },
      total: {
        current: { total: "66.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-20T01:00:00.000Z" },
      teams: {
        away: teams.usc,
        home: teams.ucla,
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
      moneyline: { current: { awayOdds: "-125", homeOdds: "+105" } },
      total: {
        current: { total: "76.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-20T02:00:00.000Z" },
      teams: {
        away: { team: "UAB Dragons", abbreviation: "UAB" },
        home: teams.lsu,
      },
      odds: {
        spread: {
          current: {
            away: "+14.5",
            home: "-14.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+490", homeOdds: "-710" } },
      total: {
        current: { total: "50.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-20T03:30:00.000Z" },
      teams: {
        away: teams.uu,
        home: teams.oregon,
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
      moneyline: { current: { awayOdds: "-130", homeOdds: "+110" } },
      total: {
        current: { total: "59.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    // {
    //   details: { league: "NCAAF" },
    //   schedule: { start: "2022-11-20T03:00:00.000Z" },
    //   teams: {
    //     away: { team: "Stanford Cardinal", abbreviation: "SU" },
    //     home: teams.uu,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+24.5",
    //         home: "-24.5",
    //         awayOdds: "-115",
    //         homeOdds: "-105",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+1100", homeOdds: "-2500" } },
    //   total: {
    //     current: { total: "43.5", overOdds: "-115", underOdds: "-105" },
    //   },
    // },
    // {
    //   details: { league: "NCAAF" },
    //   schedule: { start: "2022-11-20T03:30:00.000Z" },
    //   teams: {
    //     away: { team: "Arizona Wildcats", abbreviation: "ZONA" },
    //     home: teams.ucla,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+19.5",
    //         home: "-19.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+740", homeOdds: "-1250" } },
    //   total: {
    //     current: { total: "77.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
  ];
  return { games };
}

export default NCAAFGames;

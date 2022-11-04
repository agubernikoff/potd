function NCAAFGames() {
  const teams = {
    uga: { team: "Georgia Bulldogs", ranking: 1, abbreviation: "UGA" },
    tenn: { team: "Tennessee Volunteers", ranking: 2, abbreviation: "TENN" },
    osu: { team: "Ohio State Buckeyes", ranking: 3, abbreviation: "OSU" },
    mich: { team: "Michigan Wolverines", ranking: 4, abbreviation: "MICH" },
    clemson: { team: "Clemson Tigers", ranking: 5, abbreviation: "CLEM" },
    bama: { team: "Alabama Crimson Tide", ranking: 6, abbreviation: "BAMA" },
    tcu: { team: "TCU Horned Frogs", ranking: 7, abbreviation: "TCU" },
    oregon: { team: "Oregon Ducks", ranking: 8, abbreviation: "ORE" },
    usc: { team: "USC Trojans", ranking: 9, abbreviation: "USC" },
    ucla: { team: "UCLA Bruins", ranking: 10, abbreviation: "UCLA" },
    ole: { team: "Ole Miss Rebels", ranking: 11, abbreviation: "MISS" },
    uu: { team: "Utah Utes", ranking: 12, abbreviation: "UTAH" },
    ksu: { team: "Kansas State Wildcats", ranking: 13, abbreviation: "KSU" },
    ill: { team: "Illinois Fighting Illini", ranking: 14, abbreviation: "ILL" },
    lsu: { team: "Louisiana State Tigers", ranking: 15, abbreviation: "LSU" },
    psu: { team: "Penn State Nittany Lions", ranking: 16, abbreviation: "PSU" },
    unc: { team: "North Carolina Tar Heels", ranking: 17, abbreviation: "UNC" },
    okstate: {
      team: "Oklahoma State Cowboys",
      ranking: 18,
      abbreviation: "OKST",
    },
    tu: { team: "Tulane Green Wave", ranking: 19, abbreviation: "TU" },
    wf: {
      team: "Wake Forest Demon Deacons",
      ranking: 20,
      abbreviation: "WAKE",
    },
    ncst: { team: "NC State Wolfpack", ranking: 21, abbreviation: "NCST" },
    cuse: { team: "Syracuse Orange", ranking: 22, abbreviation: "CUSE" },
    lib: { team: "Liberty Flames", ranking: 23, abbreviation: "LIB" },
    orest: { team: "Oregon State Beavers", ranking: 24, abbreviation: "OSU" },
    ucf: { team: "UCF Knights", ranking: 25, abbreviation: "UCF" },
  };
  const games = [
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T02:30:00.000Z" },
      teams: {
        away: teams.orest,
        home: { team: "Washington Huskies", abbreviation: "WASH" },
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
      moneyline: { current: { awayOdds: "+160", homeOdds: "-195" } },
      total: {
        current: { total: "54.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T16:00:00.000Z" },
      teams: {
        away: teams.osu,
        home: { team: "Northwestern Wildcats", abbreviation: "NW" },
      },
      odds: {
        spread: {
          current: {
            away: "-38.5",
            home: "+38.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "n/a", homeOdds: "n/a" } },
      total: {
        current: { total: "55.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T16:00:00.000Z" },
      teams: {
        away: { team: "Texas Tech Red Raiders", abbreviation: "TTU" },
        home: teams.tcu,
      },
      odds: {
        spread: {
          current: {
            away: "+8.5",
            home: "-8.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+260", homeOdds: "-330" } },
      total: {
        current: { total: "69.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T16:00:00.000Z" },
      teams: {
        away: teams.unc,
        home: { team: "Virginia Cavaliers", abbreviation: "UVA" },
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
      moneyline: { current: { awayOdds: "-285", homeOdds: "+230" } },
      total: {
        current: { total: "60.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T19:30:00.000Z" },
      teams: {
        away: { team: "Michigan State Spartans", abbreviation: "MSU" },
        home: teams.ill,
      },
      odds: {
        spread: {
          current: {
            away: "+16.5",
            home: "-16.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+580", homeOdds: "-880" } },
      total: {
        current: { total: "40.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T19:30:00.000Z" },
      teams: {
        away: teams.psu,
        home: { team: "Indiana Hoosiers", abbreviation: "IU" },
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
      moneyline: { current: { awayOdds: "-600", homeOdds: "+430" } },
      total: {
        current: { total: "55.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T19:30:00.000Z" },
      teams: {
        away: teams.tenn,
        home: teams.uga,
      },
      odds: {
        spread: {
          current: {
            away: "+8.5",
            home: "-8.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "+245", homeOdds: "-310" } },
      total: {
        current: { total: "66.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T19:30:00.000Z" },
      teams: {
        away: teams.okstate,
        home: { team: "Kansas Jayhawks", abbreviation: "KU" },
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-120",
            homeOdds: "+100",
          },
        },
      },
      moneyline: { current: { awayOdds: "-110", homeOdds: "-110" } },
      total: {
        current: { total: "63.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T19:30:00.000Z" },
      teams: {
        away: teams.oregon,
        home: { team: "Colorado Buffaloes", abbreviation: "CU" },
      },
      odds: {
        spread: {
          current: {
            away: "-31.5",
            home: "+31.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "n/a", homeOdds: "+5000" } },
      total: {
        current: { total: "62.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T23:00:00.000Z" },
      teams: {
        away: { team: "Texas Longhorns", abbreviation: "UT" },
        home: teams.ksu,
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
      moneyline: { current: { awayOdds: "-145", homeOdds: "+120" } },
      total: {
        current: { total: "54.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T23:00:00.000Z" },
      teams: {
        away: teams.bama,
        home: teams.lsu,
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
        current: { total: "56.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T23:30:00.000Z" },
      teams: {
        away: teams.mich,
        home: { team: "Rutgers Scarlet Knights", abbreviation: "RU" },
      },
      odds: {
        spread: {
          current: {
            away: "-25.5",
            home: "+25.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-4500", homeOdds: "+1600" } },
      total: {
        current: { total: "44.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-05T23:30:00.000Z" },
      teams: {
        away: teams.clemson,
        home: { team: "Notre Dame Fighting Irish", abbreviation: "ND" },
      },
      odds: {
        spread: {
          current: {
            away: "-3.5",
            home: "+3.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-175", homeOdds: "+145" } },
      total: {
        current: { total: "44.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-06T00:00:00.000Z" },
      teams: {
        away: teams.wf,
        home: { team: "NCST Wolfpack", abbreviation: "NCST" },
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
      moneyline: { current: { awayOdds: "-185", homeOdds: "+150" } },
      total: {
        current: { total: "54.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-06T02:30:00.000Z" },
      teams: {
        away: { team: "California Golden Bears", abbreviation: "CAL" },
        home: teams.usc,
      },
      odds: {
        spread: {
          current: {
            away: "+21.5",
            home: "-21.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+860", homeOdds: "-1600" } },
      total: {
        current: { total: "60.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-06T02:30:00.000Z" },
      teams: {
        away: teams.ucla,
        home: { team: "Arizona State Sun Devils", abbreviation: "ASU" },
      },
      odds: {
        spread: {
          current: {
            away: "-10.5",
            home: "+10.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-400", homeOdds: "+310" } },
      total: {
        current: { total: "66.5", overOdds: "-110", underOdds: "-110" },
      },
    },
  ];
  return { games };
}

export default NCAAFGames;

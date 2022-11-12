function NCAAFGames() {
  const teams = {
    uga: { team: "Georgia Bulldogs", ranking: 1, abbreviation: "UGA" },
    osu: { team: "Ohio State Buckeyes", ranking: 2, abbreviation: "OSU" },
    mich: { team: "Michigan Wolverines", ranking: 3, abbreviation: "MICH" },
    tcu: { team: "TCU Horned Frogs", ranking: 4, abbreviation: "TCU" },
    tenn: { team: "Tennessee Volunteers", ranking: 5, abbreviation: "TENN" },
    oregon: { team: "Oregon Ducks", ranking: 6, abbreviation: "ORE" },
    lsu: { team: "Louisiana State Tigers", ranking: 7, abbreviation: "LSU" },
    usc: { team: "USC Trojans", ranking: 8, abbreviation: "USC" },
    bama: { team: "Alabama Crimson Tide", ranking: 9, abbreviation: "BAMA" },
    clemson: { team: "Clemson Tigers", ranking: 10, abbreviation: "CLEM" },
    ole: { team: "Ole Miss Rebels", ranking: 11, abbreviation: "MISS" },
    ucla: { team: "UCLA Bruins", ranking: 12, abbreviation: "UCLA" },
    uu: { team: "Utah Utes", ranking: 13, abbreviation: "UTAH" },
    psu: { team: "Penn State Nittany Lions", ranking: 14, abbreviation: "PSU" },
    unc: { team: "North Carolina Tar Heels", ranking: 15, abbreviation: "UNC" },
    ncst: { team: "NC State Wolfpack", ranking: 16, abbreviation: "NCST" },
    tu: { team: "Tulane Green Wave", ranking: 17, abbreviation: "TU" },
    ut: { team: "Texas Longhorns", ranking: 18, abbreviation: "UT" },
    ksu: { team: "Kansas State Wildcats", ranking: 19, abbreviation: "KSU" },
    nd: { team: "Notre Dame Fighting Irish", ranking: 20, abbreviation: "ND" },
    ill: { team: "Illinois Fighting Illini", ranking: 21, abbreviation: "ILL" },
    ucf: { team: "UCF Knights", ranking: 22, abbreviation: "UCF" },
    fsu: { team: "Florida State Seminoles", ranking: 23, abbreviation: "FSU" },
    uk: { team: "Kentucky Wildcats", ranking: 24, abbreviation: "UK" },
    wash: { team: "Washington Huskies", ranking: 25, abbreviation: "WASH" },
  };
  const games = [
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-12T20:30:00.000Z" },
      teams: {
        away: teams.bama,
        home: { team: "Ole Miss Rebles", abbreviation: "MISS" },
      },
      odds: {
        spread: {
          current: {
            away: "+11.5",
            home: "-11.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-450", homeOdds: "+340" } },
      total: {
        current: { total: "64.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-12T20:30:00.000Z" },
      teams: {
        away: { team: "Nebraska Cornhuskers", abbreviation: "NEB" },
        home: teams.mich,
      },
      odds: {
        spread: {
          current: {
            away: "+30.5",
            home: "-30.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+2400", homeOdds: "-10000" } },
      total: {
        current: { total: "49.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-12T20:30:00.000Z" },
      teams: {
        away: { team: "Maryland Terrapins", abbreviation: "UMD" },
        home: teams.psu,
      },
      odds: {
        spread: {
          current: {
            away: "+10.5",
            home: "-10.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+310", homeOdds: "-400" } },
      total: {
        current: { total: "56.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-12T20:30:00.000Z" },
      teams: {
        away: { team: "Louisville Cardinals", abbreviation: "LOU" },
        home: teams.clemson,
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
      moneyline: { current: { awayOdds: "+205", homeOdds: "-260" } },
      total: {
        current: { total: "51.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-12T20:30:00.000Z" },
      teams: {
        away: teams.ucf,
        home: teams.tu,
      },
      odds: {
        spread: {
          current: {
            away: "+1.5",
            home: "-1.5",
            awayOdds: "-115",
            homeOdds: "-105",
          },
        },
      },
      moneyline: { current: { awayOdds: "-110", homeOdds: "-110" } },
      total: {
        current: { total: "54.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-12T20:30:00.000Z" },
      teams: {
        away: { team: "Boston College Eagles", abbreviation: "BC" },
        home: teams.ncst,
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
      moneyline: { current: { awayOdds: "+890", homeOdds: "-1700" } },
      total: {
        current: { total: "40.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T00:00:00.000Z" },
      teams: {
        away: teams.uga,
        home: { team: "Mississippi State Bulldogs", abbreviation: "MSST" },
      },
      odds: {
        spread: {
          current: {
            away: "-16.5",
            home: "+16.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "-800", homeOdds: "+540" } },
      total: {
        current: { total: "52.5", overOdds: "-105", underOdds: "-115" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T00:00:00.000Z" },
      teams: {
        away: teams.wash,
        home: teams.oregon,
      },
      odds: {
        spread: {
          current: {
            away: "+12.5",
            home: "-12.5",
            awayOdds: "-120",
            homeOdds: "+100",
          },
        },
      },
      moneyline: { current: { awayOdds: "+385", homeOdds: "-520" } },
      total: {
        current: { total: "72.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T00:00:00.000Z" },
      teams: {
        away: teams.ksu,
        home: { team: "Baylor Bears", abbreviation: "BU" },
      },
      odds: {
        spread: {
          current: {
            away: "+2.5",
            home: "-2.5",
            awayOdds: "-105",
            homeOdds: "-115",
          },
        },
      },
      moneyline: { current: { awayOdds: "+120", homeOdds: "-150" } },
      total: {
        current: { total: "52.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T00:30:00.000Z" },
      teams: {
        away: teams.unc,
        home: { team: "Wake Forest Demon Deacon", abbreviation: "WF" },
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
      moneyline: { current: { awayOdds: "+150", homeOdds: "-185" } },
      total: {
        current: { total: "78.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T00:30:00.000Z" },
      teams: {
        away: teams.tcu,
        home: teams.ut,
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
      moneyline: { current: { awayOdds: "+240", homeOdds: "-300" } },
      total: {
        current: { total: "65.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T01:00:00.000Z" },
      teams: {
        away: teams.fsu,
        home: { team: "Syracuse Orange", abbreviation: "CUSE" },
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
      moneyline: { current: { awayOdds: "-320", homeOdds: "+255" } },
      total: {
        current: { total: "51.5", overOdds: "-110", underOdds: "-110" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T03:00:00.000Z" },
      teams: {
        away: { team: "Stanford Cardinal", abbreviation: "SU" },
        home: teams.uu,
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
      moneyline: { current: { awayOdds: "+1100", homeOdds: "-2500" } },
      total: {
        current: { total: "43.5", overOdds: "-115", underOdds: "-105" },
      },
    },
    {
      details: { league: "NCAAF" },
      schedule: { start: "2022-11-13T03:30:00.000Z" },
      teams: {
        away: { team: "Arizona Wildcats", abbreviation: "ZONA" },
        home: teams.ucla,
      },
      odds: {
        spread: {
          current: {
            away: "+19.5",
            home: "-19.5",
            awayOdds: "-110",
            homeOdds: "-110",
          },
        },
      },
      moneyline: { current: { awayOdds: "+740", homeOdds: "-1250" } },
      total: {
        current: { total: "77.5", overOdds: "-110", underOdds: "-110" },
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

function WCGames() {
  const teams = {
    qat: { team: "Qatar", abbreviation: "QAT" },
    ecu: { team: "Ecuador", abbreviation: "ECU" },
    sen: { team: "Senegal", abbreviation: "SEN" },
    ned: { team: "Netherlands", abbreviation: "NED" },
    eng: { team: "England", abbreviation: "ENG" },
    irn: { team: "Iran", abbreviation: "IRN" },
    usa: { team: "USA", abbreviation: "USA" },
    wal: { team: "Wales", abbreviation: "WAL" },
    arg: { team: "Argentina", abbreviation: "ARG" },
    ksa: { team: "Saudi Arabia", abbreviation: "KSA" },
    mex: { team: "Mexico", abbreviation: "MEX" },
    pol: { team: "Poland", abbreviation: "POL" },
    fra: { team: "France", abbreviation: "FRA" },
    aus: { team: "Australia", abbreviation: "AUS" },
    den: { team: "Denmark", abbreviation: "DEN" },
    tun: { team: "Tunisia", abbreviation: "TUN" },
    esp: { team: "Spain", abbreviation: "ESP" },
    crc: { team: "Costa Rica", abbreviation: "CRC" },
    ger: { team: "Germany", abbreviation: "GER" },
    jpn: { team: "Japan", abbreviation: "JPN" },
    bel: { team: "Belgium", abbreviation: "BEL" },
    can: { team: "Canada", abbreviation: "CAN" },
    mar: { team: "Morocco", abbreviation: "MAR" },
    cro: { team: "Croatia", abbreviation: "CRO" },
    bra: { team: "Brazil", abbreviation: "BRA" },
    srb: { team: "Serbia", abbreviation: "SRB" },
    sui: { team: "Switzerland", abbreviation: "SUI" },
    cmr: { team: "Cameroon", abbreviation: "CMR" },
    por: { team: "Portugal", abbreviation: "POR" },
    gha: { team: "Ghana", abbreviation: "GHA" },
    uru: { team: "Uruguay", abbreviation: "URU" },
    kor: { team: "South Korea", abbreviation: "KOR" },
  };
  const games = [
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-20T16:00:00.000Z" },
      teams: {
        away: teams.qat,
        home: teams.ecu,
      },
      odds: {
        spread: {
          current: {
            away: "+0.5",
            home: "-0.5",
            awayOdds: "-175",
            homeOdds: "+140",
          },
        },
      },
      moneyline: { current: { awayOdds: "+220", homeOdds: "+150" } },
      total: {
        current: { total: "1.5", overOdds: "-190", underOdds: "+155" },
      },
    },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-21T13:00:00.000Z" },
    //   teams: {
    //     away: teams.eng,
    //     home: teams.irn,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+1.5",
    //         home: "-1.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+105", homeOdds: "-125" } },
    //   total: {
    //     current: { total: "212.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-21T16:00:00.000Z" },
      teams: {
        away: teams.sen,
        home: teams.ned,
      },
      odds: {
        spread: {
          current: {
            away: "+0.5",
            home: "-0.5",
            awayOdds: "+125",
            homeOdds: "-155",
          },
        },
      },
      moneyline: { current: { awayOdds: "+550", homeOdds: "-180" } },
      total: {
        current: { total: "2.5", overOdds: "+135", underOdds: "-165" },
      },
    },
    {
      details: { league: "WORLD CUP" },
      schedule: { start: "2022-11-21T19:00:00.000Z" },
      teams: {
        away: teams.usa,
        home: teams.wal,
      },
      odds: {
        spread: {
          current: {
            away: "-0.5",
            home: "+0.5",
            awayOdds: "+135",
            homeOdds: "-165",
          },
        },
      },
      moneyline: { current: { awayOdds: "+140", homeOdds: "+230" } },
      total: {
        current: { total: "2.5", overOdds: "+145", underOdds: "-180" },
      },
    },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-22T10:00:00.000Z" },
    //   teams: {
    //     away: teams.arg,
    //     home: teams.ksa,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-22T13:00:00.000Z" },
    //   teams: {
    //     away: teams.den,
    //     home: teams.tun,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-22T16:00:00.000Z" },
    //   teams: {
    //     away: teams.mex,
    //     home: teams.pol,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-22T19:00:00.000Z" },
    //   teams: {
    //     away: teams.fra,
    //     home: teams.aus,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-23T10:00:00.000Z" },
    //   teams: {
    //     away: teams.mar,
    //     home: teams.cro,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-23T13:00:00.000Z" },
    //   teams: {
    //     away: teams.ger,
    //     home: teams.jpn,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-23T16:00:00.000Z" },
    //   teams: {
    //     away: teams.esp,
    //     home: teams.crc,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-23T19:00:00.000Z" },
    //   teams: {
    //     away: teams.bel,
    //     home: teams.can,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-24T10:00:00.000Z" },
    //   teams: {
    //     away: teams.sui,
    //     home: teams.cmr,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-24T13:00:00.000Z" },
    //   teams: {
    //     away: teams.uru,
    //     home: teams.kor,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-24T16:00:00.000Z" },
    //   teams: {
    //     away: teams.por,
    //     home: teams.gha,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-24T19:00:00.000Z" },
    //   teams: {
    //     away: teams.bra,
    //     home: teams.srb,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-25T10:00:00.000Z" },
    //   teams: {
    //     away: teams.wal,
    //     home: teams.irn,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-25T13:00:00.000Z" },
    //   teams: {
    //     away: teams.qat,
    //     home: teams.sen,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-25T16:00:00.000Z" },
    //   teams: {
    //     away: teams.ned,
    //     home: teams.ecu,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-25T19:00:00.000Z" },
    //   teams: {
    //     away: teams.eng,
    //     home: teams.usa,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-26T10:00:00.000Z" },
    //   teams: {
    //     away: teams.tun,
    //     home: teams.aus,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-26T13:00:00.000Z" },
    //   teams: {
    //     away: teams.pol,
    //     home: teams.ksa,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-26T16:00:00.000Z" },
    //   teams: {
    //     away: teams.fra,
    //     home: teams.den,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-26T19:00:00.000Z" },
    //   teams: {
    //     away: teams.arg,
    //     home: teams.mex,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-27T10:00:00.000Z" },
    //   teams: {
    //     away: teams.jpn,
    //     home: teams.crc,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-27T13:00:00.000Z" },
    //   teams: {
    //     away: teams.bel,
    //     home: teams.mar,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-27T16:00:00.000Z" },
    //   teams: {
    //     away: teams.cro,
    //     home: teams.can,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-27T19:00:00.000Z" },
    //   teams: {
    //     away: teams.esp,
    //     home: teams.ger,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-28T10:00:00.000Z" },
    //   teams: {
    //     away: teams.cmr,
    //     home: teams.srb,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+8.5",
    //         home: "-8.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+270", homeOdds: "-335" } },
    //   total: {
    //     current: { total: "221.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-28T13:00:00.000Z" },
    //   teams: {
    //     away: teams.kor,
    //     home: teams.gha,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-5.0",
    //         home: "+5.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-200", homeOdds: "+165" } },
    //   total: {
    //     current: { total: "236.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-28T16:00:00.000Z" },
    //   teams: {
    //     away: teams.bra,
    //     home: teams.sui,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-28T19:00:00.000Z" },
    //   teams: {
    //     away: teams.por,
    //     home: teams.uru,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-29T15:00:00.000Z" },
    //   teams: {
    //     away: teams.ned,
    //     home: teams.qat,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-29T15:00:00.000Z" },
    //   teams: {
    //     away: teams.ecu,
    //     home: teams.sen,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-29T19:00:00.000Z" },
    //   teams: {
    //     away: teams.wal,
    //     home: teams.eng,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-29T19:00:00.000Z" },
    //   teams: {
    //     away: teams.irn,
    //     home: teams.usa,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-30T15:00:00.000Z" },
    //   teams: {
    //     away: teams.tun,
    //     home: teams.fra,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-30T15:00:00.000Z" },
    //   teams: {
    //     away: teams.aus,
    //     home: teams.den,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-30T19:00:00.000Z" },
    //   teams: {
    //     away: teams.pol,
    //     home: teams.arg,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-11-30T19:00:00.000Z" },
    //   teams: {
    //     away: teams.ksa,
    //     home: teams.mex,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-01T15:00:00.000Z" },
    //   teams: {
    //     away: teams.can,
    //     home: teams.mar,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-01T15:00:00.000Z" },
    //   teams: {
    //     away: teams.cro,
    //     home: teams.bel,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-01T19:00:00.000Z" },
    //   teams: {
    //     away: teams.crc,
    //     home: teams.ger,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-01T19:00:00.000Z" },
    //   teams: {
    //     away: teams.jpn,
    //     home: teams.esp,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-02T15:00:00.000Z" },
    //   teams: {
    //     away: teams.kor,
    //     home: teams.por,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-02T15:00:00.000Z" },
    //   teams: {
    //     away: teams.gha,
    //     home: teams.uru,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "+9.0",
    //         home: "-9.0",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "+340", homeOdds: "-430" } },
    //   total: {
    //     current: { total: "214.5", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-02T19:00:00.000Z" },
    //   teams: {
    //     away: teams.srb,
    //     home: teams.sui,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
    // {
    //   details: { league: "WORLD CUP" },
    //   schedule: { start: "2022-12-02T19:00:00.000Z" },
    //   teams: {
    //     away: teams.cmr,
    //     home: teams.bra,
    //   },
    //   odds: {
    //     spread: {
    //       current: {
    //         away: "-2.5",
    //         home: "+2.5",
    //         awayOdds: "-110",
    //         homeOdds: "-110",
    //       },
    //     },
    //   },
    //   moneyline: { current: { awayOdds: "-140", homeOdds: "+120" } },
    //   total: {
    //     current: { total: "230.0", overOdds: "-110", underOdds: "-110" },
    //   },
    // },
  ];
  return { teams, games };
}

export default WCGames;

```
/****************************************************************************/
/*                                                                          */
/*   ASAP2 Meta Language for CCP CAN Calibration Protocol V2.1              */
/*   Assumes ASAP2 V1.2 or later                                            */
/*                                                                          */
/*   AML Version V2.6, 18.10.2002                                           */
/*                                                                          */
/*   Vector Informatik, Zaiser                                              */
/*   Hewlett Packard, Krueger                                               */
/*   ETAS, Maier                                                            */
/*   Vector Informatik, Schuermans                                          */
/*                                                                          */
/*   Datatypes:                                                             */
/*                                                                          */
/*   A2ML       ASAP2          Windows  Erlaeuuterung                       */
/*   ----------------------------------------------------------------       */
/*   uchar      UBYTE          BYTE     unsigned 8 Bit                      */
/*   char       SBYTE          char     signed 8 Bit                        */
/*   uint       UWORD          WORD     unsigned integer 16 Bit             */
/*   int        SWORD          int      signed integer 16 Bit               */
/*   ulong      ULONG          DWORD    unsigned integer 32 Bit             */
/*   long       SLONG          LONG     signed integer 32 Bit               */
/*   float      FLOAT32_IEEE            float 32 Bit                        */
/*                                                                          */
/****************************************************************************/
"ASAP1B_CCP" taggedstruct {
    /* Beschreibung der DAQ-Listen */
    (block "SOURCE" struct {
      struct {
        char [101];   /* Name of the DAQ-List (data acquisition list),
                         measurement source .        */
                      /* If the DAQ-Liste only supports one fixed ECU
                         sampling rate, it can be declared below
                         to achieve compatibility with the ASAP2 standard.
                         Otherwise description of the possible ECU
                         sampling rates in QP_BLOB      */
        int;          /* Period definition : Basic scaling unit in
                         CSE defined in ASAP1b (CSE=Code for Scaling Unit) */
        long;         /* Period definition : Rate in Scaling Units */
      };
      taggedstruct {
        "DISPLAY_IDENTIFIER" char[32];
        block "QP_BLOB" struct {
          uint;	               /* Number of the DAQ-List 0..n               */
          taggedstruct {
            "LENGTH" uint;     /* Length of the DAQ-Liste, maximum number of
                                  the useable ODTs                          */
            "CAN_ID_VARIABLE"; /* CAN-Message-ID is variable                */
            "CAN_ID_FIXED" ulong;
                               /* CAN-Message-ID of the DTOs is fixed,
                                  Default DTO
                                  Bit31 = 1: extended Identifier
                                  Bit31 = 0: standard Identifier            */
                               /* Not applied if the ECU uses the DTM-Id    */
            ("RASTER" uchar )*;
                               /* Supported CCP Event Channel Names
                                  of this DAQ List */
            ("EXCLUSIVE" int )*;
                               /* Exclusion of other DAQ-Lists              */
            "REDUCTION_ALLOWED";
                               /* Data reduction possible                   */
            "FIRST_PID" uchar; /* First Packet ID (PID) of the DAQ List     */
          };
        };
      };
    } )*; /* end of SOURCE */
    /* Description of the available ECU Sampling Rates (Event Channels)      */
    (block "RASTER" struct {
       char [101];   /* CCP Event Channel Name                               */
       char [9];     /* Short Display Name of the Event Channel Name         */
       uchar;        /* Event Channel No., used for CCP START_STOP)          */
       int;          /* Period definition :  basic scaling unit in CSE
                        as defined in ASAP1b                                 */
       long;         /* ECU sample rate of the event channel,
                        period definition based on the basic scaling unit    */
       taggedstruct {
         ("EXCLUSIVE" uchar )*;
                     /* Exclusion of other CCP Event Channels                */
       };
    })*; /* end of RASTER */
    /* Group several event channels to form one combined event */
    /* e.g. group all cylinder synchronous events to one combined element */
    (block "EVENT_GROUP" struct {
       char [101];   /* Event group name */
       char [9];     /* Short name for the event group */
       taggedstruct {
         ("RASTER" uchar )*;
       };
                     /* all event channels beloging to group
                        (CCP Event Channel Numbers for START_STOP)               */
    })*; /* end of EVENT_GROUP */
    /* Description of the authentification process */
    block "SEED_KEY" struct {
       char[256];    /* Name of the Seed&Key DLL for CAL Priviledge,
                        including file-Extension without path */
       char[256];    /* Name of the Seed&Key DLL for DAQ Priviledge,
                        including file-Extension without path */
       char[256];    /* Name of the Seed&Key DLL for PGM Priviledge,
                        including file-Extension without path */
    }; /* end of SEED_KEY */
    /* Description of the checksum calculation process */
    block "CHECKSUM" struct {
       char[256];    /* Name of the Checksum DLL representing the ECU Algorithm,
                        including file-Extension without path */
    }; /* end of CHECKSUM */
    block "TP_BLOB" struct {
       uint;	  /* CCP Version,       High Byte: Version
                                     Low Byte : subversion (dec.)            */
       uint;	  /* Blob-Version,      High Byte: Version
                                     Low Byte : subversion (dec.)            */
       ulong;	  /* CAN-Message ID for 'Transmitting to ECU (CRM)'
                                     Bit31 = 1: extended Identifier
                                     Bit31 = 0: standard Identifier          */
       ulong;	  /* CAN-Message ID for 'Receiving from ECU (DTM)'
                                     Bit31 = 1: extended Identifier
                                     Bit31 = 0: standard Identifier          */
       uint;	  /* Logical CCP-Address of the (station address)           */
       uint;	  /* Byte order of Multiple-byte-items
                                     1 = high Byte first, 2 = low byte first */
       taggedstruct {
         block "CAN_PARAM" struct {
           uint;                  /* Quartz freq. of the elec. control unit  */
           uchar;                 /* BTR0                                    */
           uchar;                 /* BTR1                                    */
         };
         "BAUDRATE" ulong;        /* Baud rate in Hz.                        */
         "SAMPLE_POINT" uchar;    /* sampling point of time in percent       */
         "SAMPLE_RATE" uchar;     /* number of samples per Bit (1 oder 3)    */
         "BTL_CYCLES" uchar;      /* number of BTL-cycles                    */
         "SJW" uchar;             /* SJW-parameter in BTL-cycles             */
         "SYNC_EDGE" enum {
            "SINGLE" = 0,         /* Synchronisation only on fallende edge   */
            "DUAL" = 1            /* Synchr. on falling and rising edge      */
         };
         "DAQ_MODE" enum {        /* mode of cylcic data acquisition         */
            "ALTERNATING" = 0,    /* ECU is sending one ODT per cycle        */
            "BURST" = 1           /* ECU is sending a complete DAQ           */
         };
         "BYTES_ONLY";            /* ECU supports max. elements of one Byte size */
                                  /* otherwise ECU supports different dataTypes  */
         "RESUME_SUPPORTED";      /* ECU supports the Resume function            */
         "STORE_SUPPORTED";       /* ECU supports the Store function             */
         "CONSISTENCY" enum {
            "DAQ" = 0,            /* consistency of a complete DAQ ist guaranteed */
            "ODT" = 1             /* consistency of a complete ODT ist guaranteed */
         };
         "ADDRESS_EXTENSION" enum {  /* address extension                      */
            "DAQ" = 0,               /* ECU supports only one Address extension
                                        within an DAQ                    */
            "ODT" = 1                /* ECU supports only one Address extension
                                        within an ODT                    */
         };
         block "CHECKSUM_PARAM" struct {
           uint;	           /* checksum calculation procedure
                                standard types not yet defined,
                                if greater of equal 1000 : manufacturer specific  */
           ulong;               /* Maximum block length used by an ASAP1a-CCP
                                   command, for checksum calculation procedure  */
           taggedstruct {
             "CHECKSUM_CALCULATION" enum {
                "ACTIVE_PAGE" = 0,
                "BIT_OR_WITH_OPT_PAGE" = 1
             };
           };
         }; /* end of CHECKSUM_PARAM */
         (block "DEFINED_PAGES" struct {
            struct {
               uint;            /* Logical No. of the memory page (1,2,..)   */
               char[101];       /* Name of the memory page                   */
               uint;            /* Adress-Extension of the memory page (only
                                   Low Byte significant)                     */
               ulong;           /* Base address of the memory page           */
               ulong;           /* Length of the memory page in Bytes        */
            };
            taggedstruct {
              "RAM";              /* memory page in RAM */
              "ROM";              /* memory page in ROM */
              "FLASH";            /* memory page in FLASH */
              "EEPROM";           /* memory page in EEPROM */
              "RAM_INIT_BY_ECU";  /* memory page is initialised by ECU start-up */
              "RAM_INIT_BY_TOOL"; /* RAM- memory page is initialised by the MCS */
              "AUTO_FLASH_BACK";  /* RAM memory page is automatically flashed back */
              "FLASH_BACK";       /* feature available to flash back the RAM memory page */
              "DEFAULT";          /* memory page is standard (fallback mode) */
            };
         } ) *; /* end of DEFINED_PAGES */
         ( "OPTIONAL_CMD"  uint )*; /* CCP-Code of the optional command available
                                       in the ECU. It is recommended to declare all
                                       non-standard ECU commands here */
       };
    }; /* end of TP_BLOB */

    /* for MEMORY_SEGMENT */
    ("ADDR_MAPPING" struct {
       ulong;   /* from   */
       ulong;   /* to     */
       ulong;   /* length */
    })*; /* end of ADDR_MAPPING */

    /* for CHARACTERISTIC and AXIS_PTS and MEMORY_LAYOUT */
    "DP_BLOB" struct {
       uint;	/* Address extension of the calibration data
                   (only Low Byte significant) */
       ulong;	/* Base address of the calibration data */
       ulong;	/* Number of Bytes belonging to the calibration data  */
    }; /* end of DP_BLOB */
    /* for MEASUREMENT */
    block "KP_BLOB" struct {
       uint;	/* Address extension of the online data
                    (only Low Byte significant) */
       ulong;	/* Base address of the online data   */
       ulong;	/* Number of Bytes belonging to the online data (1,2 or 4) */
       taggedstruct {
          ("RASTER" uchar)*;
                 /* Array of event channel initialization values */
       };
    }; /* end of KP_BLOB */
}; /* end of ASAP1B_CCP */
```
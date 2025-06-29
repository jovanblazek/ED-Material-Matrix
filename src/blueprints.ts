import type { Blueprint } from './types'

// @ts-expect-error TOO long for TS
export const BLUEPRINTS: Blueprint[] = [
  {
    Type: 'Plasma Accelerator',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '81dca970-1fbf-4017-af46-0c6285c3a728',
    id: 'b6b9d8f7-9a48-47d7-8456-26926a5d6130',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+39%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'cf07de84-b794-43fd-a8b6-57ee781e9247',
    id: 'acf785fc-6ff2-4273-a9b8-4f1c01b5a9fd',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+51%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '7cd60cfe-e406-4005-a912-a306a69067e0',
    id: '081accaa-1249-4c06-a50d-0dbea8383dfe',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+63%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'adae0f67-fd08-47d5-8870-f926cc63353f',
    id: '70628a8f-2da7-493f-9023-bb8e4cb03841',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+75%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ccf0cfd9-6da2-4975-95fa-ea7f0ccda991',
    id: '9715ea4a-16c1-447d-b12a-fdc15eb70833',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Lightweight',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '1db2a3cd-5d02-43e1-a927-e24b949012cc',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '798c5d94-bb76-4e9e-ae37-7da7d6c8c1b0',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'e61c13dd-f13d-4a9d-b589-82695f5fd3ce',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '0c98f5ac-5e58-45ac-bb17-58024d09755a',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '3d563c3a-d63b-4b23-953b-ab32518c07ab',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e1e1bd93-3a3f-4454-bfe3-0e2b6840b43a',
    id: '00aa57db-409e-4e81-bcd2-d8fecd20de8d',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'aaf29592-df21-4b4c-aeac-20252e75b8aa',
    id: 'ed4c25b6-de10-4d1d-a6fa-415db03f9f16',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '8876b27a-2c31-49f0-8a47-c11acd801c2b',
    id: '421a4522-9c2b-42b4-8aa4-a499bb859909',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'b7672f07-e10e-4371-989c-dd49e28c4b79',
    id: '3b4f0f5a-a084-4356-a021-14584574bc6a',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ec9b7ac2-7a99-4f96-8bf1-061df58dba79',
    id: '740395e3-0acc-47e5-a1e4-6cb36e6f7002',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Heavy Duty Hull Reinforcement',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e174a927-ab55-4691-be3e-832f6d68d679',
    id: '1954b50b-cb6e-43f4-904f-542d1af6861e',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Heavy Duty Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '2cd3f87c-5ea3-4bd5-ab6d-70458f29de7e',
    id: 'e0bc750a-813d-40f9-9ed6-b3cca8841565',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Heavy Duty Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+48%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
      {
        Effect: '+9%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+24%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '251e8773-d06a-4b0e-9e30-a5114a45a5c1',
    id: 'b6871da8-9455-45e0-a3e8-9720507be126',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Heavy Duty Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+32%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd6b14f0e-9a32-4838-b41f-986f4a5abd6d',
    id: 'e5612f3a-344a-4a42-9c01-caeb328cce76',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Heavy Duty Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+72%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '137a648d-394b-48ac-a4de-bfa145fa9cf0',
    id: '322b3b4c-9f5a-4cac-af1d-d2b715a1a90f',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '81dca970-1fbf-4017-af46-0c6285c3a728',
    id: '5e35367b-93c1-4a30-bd27-227eaf69c95e',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+39%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'cf07de84-b794-43fd-a8b6-57ee781e9247',
    id: '6f44b798-185e-4856-b1ae-af45d87f6255',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+51%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '7cd60cfe-e406-4005-a912-a306a69067e0',
    id: '532036b5-cfb2-41ed-bf25-c6b38806a4c3',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+63%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'adae0f67-fd08-47d5-8870-f926cc63353f',
    id: '158e0472-5669-46b5-96e7-f219a1016038',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+75%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ccf0cfd9-6da2-4975-95fa-ea7f0ccda991',
    id: 'f3466b84-2df9-42bc-8733-1ad2f72e6865',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drive Strengthening',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+5%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '21503395-f165-4340-91c7-07d062895eae',
    id: '22e1f02d-dc91-4c5e-932f-d86a5e7beb29',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drive Strengthening',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '452e2359-5804-4de1-94bf-d16c9d512cc4',
    id: '2957d9e1-6d4f-4a68-bd65-54ca641a58b5',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drive Strengthening',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+70%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'ae1a71bb-e025-4268-aa7f-fd4063945beb',
    id: '3a217ba7-eee6-47ad-aef3-2f9c7d621b81',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drive Strengthening',
    Engineers: ['Mel Brandon', 'Professor Palin', 'Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4bc0b925-dd64-41da-a653-f15acf108f23',
    id: 'a7fafd6a-872b-4ec1-9bea-128328d17e2b',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drive Strengthening',
    Engineers: ['Mel Brandon', 'Professor Palin', 'Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
      {
        Name: 'Imperial Shielding',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+110%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '88aef454-76f6-48a3-a66c-958e50c92e7c',
    id: '855e2374-8697-47f0-ac79-852c3219d4ba',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: '394bfdba-9d9c-46d2-9791-57522aa1e0d7',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '53d13e0e-1594-40a6-ab29-87fd4fe55545',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: '426c56c5-8fdf-4e44-a427-aaba929e88e8',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: '93c4b381-ce7d-4a0f-9263-ccef60e17ea4',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: 'e9064b87-e69d-4843-97e3-5de80906022a',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '948c8442-1559-4555-8d96-0638c0f15a66',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '74c0544a-4091-48c6-9a1b-3a1f8f5f8333',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'd46eac93-e687-440a-971a-5a9516ccde5f',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'd98aed0c-f5cc-4a73-9945-b9ed8df00a38',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '82cdf384-ae3d-4965-8fc9-843eb82b663a',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Armoured',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'Power Generation',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '14be2e0d-417b-4cde-834f-b7e8ca14bb85',
    id: 'daf7445c-8b88-44a9-a41e-5776ac0c14c4',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Armoured',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Generation',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '14ade730-2a1d-4f48-a619-46be865819ec',
    id: '45577eff-9305-4f1d-9c71-a069f98ab563',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Armoured',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Power Generation',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'aa9a05c9-f142-40db-b0bf-8f6ca29efba8',
    id: 'de77b478-5339-440c-9315-2cb9ecc4dda8',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Armoured',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Generation',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'bfb0ccc8-389e-4df0-9acd-4df91680c5a3',
    id: '12220331-ea64-465e-821b-910b72468552',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Armoured',
    Engineers: ['Etienne Dorn', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Generation',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5156badb-c1eb-49f4-923d-b9e6f862799f',
    id: '3c2a49c7-dd0d-4fce-9f57-141e0d14265a',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Reinforced',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'c952091e-30de-4b13-8e7e-c59aee4c1466',
    id: '53271327-7813-45b3-b43f-db09ce5faef5',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5f868185-7351-49ec-95b4-87dab4d08e02',
    id: 'f28b2c93-c55c-4e4b-ba17-d1654c948263',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '33e63006-29ae-4466-b240-7708ddd9804b',
    id: '24ba43dd-e552-4518-8d8e-3d281b952042',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '5d0cb508-a654-4dc8-8e04-6cafac0ea86d',
    id: 'b83fff0f-a0f6-4068-9395-ddc7c4d091f0',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '06a5631b-036b-47ac-9d41-4c1728a5d34e',
    id: '5eca4ecb-82aa-4039-9827-6f9e8dc90449',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: '482e3a96-d588-44f7-bdd4-3a9c0d9a1494',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: 'efffdcf1-06b4-4875-b9e3-922d32b6bd78',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '04ec5c38-5dbf-4ffa-9e09-bb3023123bea',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: 'b9451e13-3507-42ef-94ff-1410f4e825b8',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '75de241f-5bc4-4eeb-8aa1-e22f919a4799',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Long Range FSD Interdictor',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Colonel Bris Dekker',
      'Tiana Fortune',
    ],
    Ingredients: [
      {
        Name: 'Unusual Encrypted Files',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Facing Limit',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'ecec8b3e-891f-4b79-8c07-7836e62424f8',
    id: 'c04bf226-7c5c-4aba-98ad-0718f5a637cc',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Long Range FSD Interdictor',
    Engineers: ['Mel Brandon', 'Colonel Bris Dekker', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 1,
      },
      {
        Name: 'Tagged Encryption Codes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Facing Limit',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '08d02c88-e63f-4d29-86b9-eea6a20b17a1',
    id: '9dd591ae-7e88-4b43-92d2-e40f24ec1fc4',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Long Range FSD Interdictor',
    Engineers: ['Mel Brandon', 'Colonel Bris Dekker', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Anomalous Bulk Scan Data',
        Size: 1,
      },
      {
        Name: 'Anomalous FSD Telemetry',
        Size: 1,
      },
      {
        Name: 'Open Symmetric Keys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Facing Limit',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a2d4bed7-4326-4776-a17b-6ee746f4c9be',
    id: 'a0be0184-adbd-40e8-9cf4-f1878bdd468e',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Long Range FSD Interdictor',
    Engineers: ['Mel Brandon', 'Colonel Bris Dekker'],
    Ingredients: [
      {
        Name: 'Unidentified Scan Archives',
        Size: 1,
      },
      {
        Name: 'Strange Wake Solutions',
        Size: 1,
      },
      {
        Name: 'Atypical Encryption Archives',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+50%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Facing Limit',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'aaabe016-883e-4ec6-a0f0-dd519b4f0ca5',
    id: '53ef5f50-9078-46d8-bbc7-1643ee4ae723',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Long Range FSD Interdictor',
    Engineers: ['Mel Brandon'],
    Ingredients: [
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
      {
        Name: 'Eccentric Hyperspace Trajectories',
        Size: 1,
      },
      {
        Name: 'Adaptive Encryptors Capture',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Facing Limit',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd62e9816-5457-11eb-a2cb-6805caa43529',
    id: '041cda88-6676-4fef-a315-73fe0940999f',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '81dca970-1fbf-4017-af46-0c6285c3a728',
    id: '84c1a202-8f06-4f8b-8ead-8a4c707e705f',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+39%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'cf07de84-b794-43fd-a8b6-57ee781e9247',
    id: '82813d56-67cb-4a29-b39e-fa7ba5b8adfe',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+51%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '7cd60cfe-e406-4005-a912-a306a69067e0',
    id: 'cf001d76-c2ae-4828-b961-9af2f78ce16a',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+63%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'adae0f67-fd08-47d5-8870-f926cc63353f',
    id: 'd2d96105-ef0a-4630-8ee6-282669fe2173',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Short Range Blaster',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+75%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ccf0cfd9-6da2-4975-95fa-ea7f0ccda991',
    id: '4131331f-c372-4786-ad0e-0fc3375aed8c',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Reinforced Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+14%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Broken Regen Rate',
        IsGood: false,
      },
      {
        Effect: '+5%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '47ad77c0-e49b-44e5-9824-4074b63db369',
    id: '2e07fa8a-dad1-4336-9b55-43c4683973c0',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Reinforced Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Broken Regen Rate',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '823f8f82-745d-4051-8f35-4e38a561932e',
    id: 'd1681842-a02b-4634-9c4e-5e440b3ce7c9',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Reinforced Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Broken Regen Rate',
        IsGood: false,
      },
      {
        Effect: '+11%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a1a29713-f2e5-4e15-a913-e01dc065f99f',
    id: '8e3a36fc-72d5-4d0c-8332-715769266e2d',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Reinforced Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+32%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Broken Regen Rate',
        IsGood: false,
      },
      {
        Effect: '+14%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-7%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '87ac1315-7904-48f6-a5fe-f044be546490',
    id: 'd3e7a4df-1410-4391-9006-e2f2acef1ed7',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Reinforced Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Improvised Components',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+38%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Broken Regen Rate',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '1d9af376-c7c9-4b1a-9bc9-e77b4025e328',
    id: '1cdf9b8b-4c68-4f22-802f-7ca6ee2c1467',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Enhanced, Low Power Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '-18%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '598e0c47-ecd2-4cfa-93d1-08bbda4cd765',
    id: '7254ecb0-f909-472a-bf4e-118941485379',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Enhanced, Low Power Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '-26%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '605d6333-c544-425e-96c6-a76b6b839e2c',
    id: 'fb1d3c75-2e64-460a-9d40-653185776e84',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Enhanced, Low Power Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+9%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '-34%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'db5f0467-5bdc-433e-986d-031bbd48067b',
    id: '3579ac48-59d6-4a26-8da2-5ecd5954cab4',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Enhanced, Low Power Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Inconsistent Shield Soak Analysis',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-35%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '-42%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '88987ab7-b759-4cda-acbb-726bd0ad17c7',
    id: 'acf8df5c-4d60-4cbc-b5f5-c369a234adc1',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Enhanced, Low Power Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Military Grade Alloys',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'cf878a5a-542b-46e8-8b56-4d179eac3f46',
    id: '1e9f9880-cb7b-48de-8616-af92e5f0f7b7',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Reinforced',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'be6995c8-ffe3-41db-82c7-8a1d876254bd',
    id: 'bc8cb1a9-883a-455d-a1c6-7b4cc9f4c514',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b485f4a5-194e-44cd-8a68-d78d87b78749',
    id: '2ef41186-c3fe-4ebb-8fec-9d2dd05a91f8',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '007beb33-2cb2-48fc-b3d3-b5b82fc7c795',
    id: 'b2350af1-afb3-477b-bdce-435ffc7a7d26',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3fbaecf6-2bdf-4c53-b455-d37d0d78571c',
    id: '7650175c-4319-41d3-81b1-a34583a27880',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'e6c7a828-4c26-44e6-80ed-e39978850532',
    id: '1cc90073-ad1d-44a2-869f-9807120dd82e',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '84de52cc-9d50-48b9-94bc-262735f61a27',
    id: 'ee0d5f3b-4ab9-48c7-916b-9e302757757f',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Shielded',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '94b0ceb5-3f07-4206-aa02-1e69f1059476',
    id: '1a6a2004-7e4f-4641-8b80-4e123f0189e5',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'ad2d6c5e-f69d-44cd-94e5-0437a1b77e39',
    id: '82edf910-83c1-4002-815b-27ab7e04d9d5',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '718b1c81-ffc9-4097-8969-3805dfab4ce2',
    id: '8b0e190b-1ead-4040-b601-cc43b4a4e701',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4a89d7e7-fb6d-4d65-aca6-641b634d2cbb',
    id: '608fde6d-0531-4ed7-95b1-16ae6b3f22d4',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Thermal Resistant',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '9316e798-33cd-4ed2-8289-94eb82e41574',
    id: '43a25efb-ff23-4360-88f5-118937fa54a7',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Thermal Resistant',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '62eaf453-a4dd-42e6-b404-dfb7569afec6',
    id: '54810b14-3d4c-42e7-aeb9-89c7e88edca3',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Thermal Resistant',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '90cddf76-5636-46ae-8c41-b28c6831549b',
    id: 'e5876582-5c55-4f70-af50-9840ddf089a0',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Thermal Resistant',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+22%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a922d38-e010-4874-97c9-7459dda8c184',
    id: '5483bc5b-6145-4581-8016-9f659e394103',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Thermal Resistant',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 1,
      },
      {
        Name: 'Exquisite Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+27%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '562f0d31-cefe-4631-939e-53168a9df2ab',
    id: '6d081f1c-4cf6-4391-9571-6d69a3ab27a8',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '54cf058d-795d-423c-8923-fdd6971dec29',
    id: 'b3087e95-e0db-4778-a549-58692c77ff39',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '3d7eb835-8a30-458d-bbf3-cfd8de5f8cb4',
    id: 'ac732c29-1893-4da0-82e4-8d5ca1c0f500',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '200dfa7b-085d-43d8-ae61-f7080feed350',
    id: '9fee2bb3-d8dc-4e93-98f0-d046f9109c92',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4fdb0643-c9e0-43f6-8b6b-4613fec1de03',
    id: '02e92d41-c8f6-4743-a759-9208b3efa47f',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b5787172-ca08-43bd-8d57-b00a26c3d6c8',
    id: '25eb47dc-e2d5-4cc5-8498-707c7c50e33c',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '81dca970-1fbf-4017-af46-0c6285c3a728',
    id: '36cac600-0f14-43b1-b7ff-71d7fd281545',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+39%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'cf07de84-b794-43fd-a8b6-57ee781e9247',
    id: 'd1f39361-4db9-43e5-9d69-0308d160d397',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+51%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '7cd60cfe-e406-4005-a912-a306a69067e0',
    id: 'b691a903-57fb-44ec-a090-19186eec03a4',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+63%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'adae0f67-fd08-47d5-8870-f926cc63353f',
    id: '91ae42f2-460c-4d27-b2e6-266571fec148',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Short Range Blaster',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+75%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ccf0cfd9-6da2-4975-95fa-ea7f0ccda991',
    id: '03b70038-4faf-44d1-8954-4dedbdf20bb6',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Weapon Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Weapons Capacity',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '+16%',
        Property: 'Weapons Recharge',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '05883145-2407-46a1-9eea-5a56ac549cfd',
    id: '02ef0ecb-21ad-4755-bb2a-be8283594745',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Weapon Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Weapons Capacity',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '+23%',
        Property: 'Weapons Recharge',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5822ff0c-fa6c-4072-95be-e2534f37be00',
    id: 'bf59cebe-0252-49b3-8a00-a17ff8e8df91',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Weapon Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Anomalous Bulk Scan Data',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Weapons Capacity',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-9%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '-9%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Weapons Recharge',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'd5040eac-fa75-4613-828d-ea71aefd9051',
    id: 'c09f7f6e-ab61-4bed-80b6-a7d521fc9af8',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Weapon Focused',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Unidentified Scan Archives',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Cadmium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Weapons Capacity',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '+37%',
        Property: 'Weapons Recharge',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '32c94fd6-71c3-461b-80ed-bfe1543f9651',
    id: 'ee1199ae-e730-47ca-af36-fb9ede80839f',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Weapon Focused',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Tellurium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Weapons Capacity',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Weapons Recharge',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '1b073867-c10f-474b-88d7-5fb6c602b838',
    id: '79ffd602-7350-490a-afc6-0d5d3615c768',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '932500e8-e0a3-4abf-8539-d78cc1102d38',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'c0e0e73a-fa75-4472-8fb1-a003942a249a',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '0cc7165b-fac0-4914-9711-e124c6bcd440',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '614f57dd-22ad-4282-9bdd-61e57df0d89b',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '0c2bd5af-9d6d-4de9-9418-96faaadc4a97',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '1637c813-6afe-48f0-af65-99a6062a227b',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'e7db36a5-c9a6-4382-b598-0bb2ac862e55',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '18b32e1f-821e-41d8-a734-cbb903e7a18e',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'f79759ab-f96c-4abd-b2e0-c3aaca87a857',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: 'a64de3da-f7da-4666-8484-cb9aa2983c7f',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: 'a7e35fc9-0ea0-42e0-beab-6b98afdf9d89',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '85141894-d17c-4294-928a-a61bf3338b25',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '67456559-bfdc-4455-956e-a726713d2b6b',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '785c3bfd-aec5-4637-9d5f-047b44f50bd4',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: 'a93c9033-6f3c-4a2a-b0bb-a43e18c9297b',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Blast Resistant',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'c74fe800-a8c1-4ae9-95a1-47a8a9d1f10d',
    id: '977f92f7-14c8-4aed-87bc-afa60881995d',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Blast Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+19%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '78f76eb3-ac9e-47bd-be6f-a26b4fdf9c57',
    id: '04f1a5bf-3232-48b6-8243-c4b12799a8e9',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Blast Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+26%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '83ea4fd2-2eee-4cfb-baa6-d6c314f58b8d',
    id: '87c0b659-9320-444a-bfcb-d537a9eecc1a',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Blast Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+33%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '9656e75a-a8ac-454f-941a-9fe4b4f6a330',
    id: '6df9d4b4-9450-41cf-9069-3bb7ff8bff1f',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Blast Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '37e0788b-6f7d-43c8-89ca-decaff5f3653',
    id: '77616f85-f6cf-4bc8-9cdf-d1641b11e5ed',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '650fdb39-a2fa-4757-bac0-fcad6c7104f9',
    id: 'ff2caf4f-39d5-487f-9700-3954ebb7b8cc',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'ee33e0d9-d8b2-4ac5-9370-7dac2f252570',
    id: 'f631bb28-eaa8-4a5d-857e-91b654c7bc10',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '5c8c244e-2f93-4422-8fcb-ad4012020a8a',
    id: 'bfd84a81-93ca-4593-8728-c03c63e967b8',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '31532d5f-6e3c-45a6-95b2-13fb0218aa7a',
    id: 'f1b7fa5b-12ed-4054-ab0e-97b198d0b97c',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd98c0250-252f-4d48-9c98-e43b8c50b978',
    id: '15aec10d-f974-4ae5-bf6f-dc10f7c92d59',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '573d6e16-dc01-4093-a14d-420621279673',
    id: 'cb8d2439-7f51-46e8-9a8d-556fd49a3393',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '197d4759-f451-4b30-8051-08c5fde05421',
    id: '8970a78e-052d-431b-9ea8-8031ca7a3bc9',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '633cafa0-a2c3-436c-867f-aba0205e55b8',
    id: 'e1aceaba-6395-4474-82c8-ff384bb9d422',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6a396efb-3aa1-4022-b66d-dd299ff7e4d8',
    id: 'bcfca924-0b31-4fe7-b3d9-f77462699f97',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '85a8d27b-8f97-46fb-91b3-3f56553e1eef',
    id: '79af5b43-d71d-458c-8cf9-4f0463a43e43',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f622da45-ef05-4a9f-bdcb-879b5933b869',
    id: 'cf5a341f-9e85-4cee-8814-acbc7a7f54f5',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+52%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2cf2614-1a13-4b8d-81eb-d4eaf76257d0',
    id: '72cce5d3-2f38-430e-9ded-fd9870bb4556',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+68%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'e37a6dba-669e-4ce6-bb3d-e831bdd656c0',
    id: '91e4a068-7e73-49c0-9297-dfa494f7a3e4',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+84%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8800433a-2061-4776-9821-5dc04772b963',
    id: '50934083-af40-4dab-8516-0b050e62f783',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4b3f4f18-a517-4354-a02d-de46b3cd4efc',
    id: 'a1403752-d325-4803-a8e0-786e7bc57873',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f3684224-dfb1-4b30-81df-827246ccce14',
    id: 'ce897d95-c6a4-4292-9c5a-bbae77804e9f',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0fec52b1-3a81-4260-8168-7af698e9ebf3',
    id: 'fdcb4d96-ded0-45d6-970e-e15dad2f7655',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '6ca69c4f-07b6-43e4-97c9-e9134cb1eaf4',
    id: '43858448-8a47-4d8a-bb40-183274eec668',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'e6ebc222-ec93-4f0f-ac8a-e690ab50656d',
    id: '897deb38-bcfd-46e7-90bc-0f530b6a4850',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b307db6f-a54c-49e9-be82-5a4458661fe1',
    id: '81aa2b27-adc6-4284-9794-c0b0050fae1a',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '07974cb6-6c08-46da-afff-d88b44b34142',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'd85c329c-085d-4f58-b091-c3edd28f31b0',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '91e06d49-bd7d-453c-bef7-2d0bb8c9c850',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'be7e0b41-99e9-4758-a520-a50e29ea2aeb',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '0ca5d72c-16eb-429a-a881-05eb10a3ca99',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Kinetic Resistant',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '8252b4bb-3195-4f46-88e8-b79ed5b5ad43',
    id: '04e724e8-f32e-4267-a9b7-2387ff64ff51',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Kinetic Resistant',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5f099a0e-0c37-447b-b552-f2e3d8dc1d19',
    id: '74269f7f-36cb-47f8-8946-a5849a7577ee',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Kinetic Resistant',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+17%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'ab7f39b5-0b0e-45b2-a016-0916026e9633',
    id: '50de5aab-c17a-40bf-881d-8c8ac1d093e5',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Kinetic Resistant',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+22%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '59ddbb49-f4fc-466d-84b6-06f0529915a9',
    id: 'd8a7deb0-c80d-4bee-aea2-0dd01163b2f4',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Kinetic Resistant',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 1,
      },
      {
        Name: 'Exquisite Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'a224e524-7308-46a1-9a6b-a37a82bdc50b',
    id: '0306ce76-1534-48b3-9814-e2850985d926',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Focused Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+1%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'fc3e4f2e-04fb-4509-a31f-1121940e1bc6',
    id: 'da827a83-ac03-4d45-ac35-63f6629d406b',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Focused Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '437e00b1-a6fd-4d84-9242-075c3ce8adcb',
    id: '431f4259-dd83-46ac-832d-86d64ff9f970',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Focused Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'bfbadc34-e11a-4cc4-80cc-83dde5731e6f',
    id: 'a673d4c6-8db7-4339-84f7-0988a9314790',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Focused Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '7c41f9fc-90ec-435e-9d92-6024c32ac40d',
    id: '00c5df0b-dfa1-4c09-9daa-249585780eab',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Focused Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+5%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd9306721-43a4-45cd-b225-ac9174da4d13',
    id: 'dfc6f571-b7ab-40cb-8c9f-f30d4ed010a1',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Modified Heat Sink Launcher',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 8,
      },
      {
        Name: 'Niobium',
        Size: 6,
      },
      {
        Name: 'Vanadium',
        Size: 6,
      },
      {
        Name: 'Mechanical Components',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Capacity',
        IsGood: true,
      },
    ],
    id: 'ebfde359-38af-424f-b92c-13e09499ea43',
    type: 'Technology',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Reinforced',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '4b8ad4b4-4d42-4014-98ac-2175392ad0c8',
    id: '7b03c36e-24a2-45d4-ac80-e4e61131cc30',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '7a7166cf-d789-4cb8-9768-f31cc3159dc5',
    id: 'e63cacbf-a7c5-4034-b4c9-fd81f4bd4551',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '93d33903-1dc8-453a-8bd6-df3198c1eac5',
    id: '8df92e34-67c8-43a0-967d-456f94d6af45',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '9a174428-ac75-4bc8-80e0-c1327d0317b8',
    id: '6d003b29-7a8c-4096-b6b7-b1e09c3573a2',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '2b450008-60f9-4473-8e2d-563e1f0ded00',
    id: '91abeab4-d71d-4536-b544-f597a93554d2',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Thermal Resistant Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'ef5a3026-0777-4715-a1f4-5c65eff85b12',
    id: '8d5c3ceb-32fb-4cfa-a7d7-7d07b8352f47',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Thermal Resistant Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '54e6e07a-3281-41aa-afa0-bbf292131c0f',
    id: 'e86b0193-5046-495d-ab3e-f1c83de5dfff',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Thermal Resistant Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '307935bf-60d3-4887-b449-24d712518154',
    id: '1976c2a7-19a7-4b8c-a0bf-fc2c1f90145c',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Thermal Resistant Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Inconsistent Shield Soak Analysis',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-16%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'ef6a4d70-9996-4db8-ae22-7c61c3dcaf74',
    id: '7e45a2f7-585c-435e-9ec7-888b4b2661e0',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Thermal Resistant Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'f14e779f-d09a-47e4-8f4e-89c85b730f6b',
    id: '6aa98e05-8240-4a75-9130-484cb2665372',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'c500da24-7fe5-48f6-8661-593f4caee91a',
    id: '001a0135-89e5-443c-ac86-19d92ca7ffbd',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'eed60442-f13e-4662-8132-e50a23e2534a',
    id: 'ea2bf225-b95c-4838-97e6-0b51883f888c',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'df8baf0f-01a1-4fea-94e6-e169f71af1c6',
    id: 'ff2b88d0-b31a-491d-990c-0c40c662f9f2',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '107cbead-888f-4b4c-a57e-324ccfe37006',
    id: '61124705-8862-4723-9367-4b987a7bbd19',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '1c08bdca-000b-4e79-89cb-2cab3d5e3ce7',
    id: '104df57e-62f0-4917-ab06-1dd068799c18',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+1%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'fc3e4f2e-04fb-4509-a31f-1121940e1bc6',
    id: '8237ed45-7d3c-4f66-b74e-9d2d21dce575',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '437e00b1-a6fd-4d84-9242-075c3ce8adcb',
    id: '041516ab-4386-4ed1-a4c0-87a47e876af0',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'bfbadc34-e11a-4cc4-80cc-83dde5731e6f',
    id: '06678863-6c71-4b3c-b099-12051090a8b7',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '7c41f9fc-90ec-435e-9d92-6024c32ac40d',
    id: '4a735a14-cfff-4db2-a4a7-6b7467d58c0b',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+5%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd9306721-43a4-45cd-b225-ac9174da4d13',
    id: 'c9f76945-2c8d-4515-be12-de318db031f6',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+1%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'fc3e4f2e-04fb-4509-a31f-1121940e1bc6',
    id: '303b9360-3fd4-4c69-99c3-68bf51a628d4',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '437e00b1-a6fd-4d84-9242-075c3ce8adcb',
    id: 'c15c0639-7c65-46af-8859-30a10f6c17a3',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'bfbadc34-e11a-4cc4-80cc-83dde5731e6f',
    id: '1e1b01ef-6b2b-49c5-8384-4850c9a1bb9e',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '7c41f9fc-90ec-435e-9d92-6024c32ac40d',
    id: 'c9cffd92-a01a-437d-adad-2304356b6ff6',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Focused Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+5%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd9306721-43a4-45cd-b225-ac9174da4d13',
    id: 'fdc29635-4f13-4892-aeb1-6a52506c35fc',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: 'a6e0cdf7-7230-4bb7-ab63-cc798f86fa5e',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '08653420-a6d9-44ff-996b-283e289c961f',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '009904ef-1409-4a0d-b64b-6d985a73ccf2',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '1f5dae1b-feda-4029-af9d-346b3c29a6c6',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '2e20bbb1-fdcc-4791-92f1-e1bd35944520',
    type: 'Engineer',
  },
  {
    Type: 'Refinery',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '58578acb-b652-4a30-8ffe-e4e488325221',
    id: '96f4ad21-736d-4825-bd35-cfc28bc0327c',
    type: 'Engineer',
  },
  {
    Type: 'Refinery',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'e33c7809-d6cd-4549-8596-9400baabc3cd',
    id: 'b94cfc6e-7e7b-48ff-8285-7f5d76659275',
    type: 'Engineer',
  },
  {
    Type: 'Refinery',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cffa4897-fa7a-44dd-8fe1-1b3702e82f9e',
    id: 'dbd4cccb-c293-4329-8f97-1960c1135e9d',
    type: 'Engineer',
  },
  {
    Type: 'Refinery',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '48d62ffb-b0ff-47bf-9e4a-a8a4cfbd22bc',
    id: 'a056239c-2928-477d-bf36-999685943f69',
    type: 'Engineer',
  },
  {
    Type: 'Refinery',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks'],
    Ingredients: [
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'be6ba667-5458-11eb-a2cb-6805caa43529',
    id: '509c8572-4bfa-4f21-9ff0-e75ee9e18b3d',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '64af4aaa-eb08-444d-8aa7-01acb59f2bf1',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'c8166cf7-1f59-43df-a6f3-5f696cf7e074',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '96796578-32eb-466f-bf0c-f249766623e7',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '8cf0c578-9936-4d55-9c3e-2d3095bc759a',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '69390487-150a-4224-90e0-d36524d4e149',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: '36f3f2da-227e-433f-beb7-33c660e1e5ad',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '72bdc01b-af1d-4bfa-94ec-3c032cb84baf',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: '84199e78-d8c6-466a-8f6c-6a82eb03e259',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: '413c7506-2529-4cfe-9fb3-2898cb001875',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: '7f43b391-cb22-42f2-9d2e-7c775d9d943b',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Rapid Fire Modification',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: '7b651edd-2e36-4cff-ae2c-c413c8045adb',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Rapid Fire Modification',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: '4a48eaa4-43db-40d0-8f14-1773006c16b3',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Rapid Fire Modification',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: '954f0523-2650-4f26-9cb2-98161e0127c0',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Rapid Fire Modification',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: '7cf27df1-62dc-45ad-b428-4024daafb51e',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Rapid Fire Modification',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: '61f43ec5-442d-459a-813d-27fed3ee46a4',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: 'aff7a24f-a044-4b39-8b90-630fdf6f0d0e',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: '460059c8-0533-483a-bf9b-4510b3ff0a56',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: 'cab4e988-0a1c-42bf-99ba-5b685c954577',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: '6bd98a84-a851-4df1-b4ef-ba76987c11c8',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: '7ed6bc46-2f78-44ee-9a40-6c11e7e664a6',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Ammo Capacity',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Reload Time',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '+50%',
        Property: 'Ammo Maximum',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '93c43a5d-106c-4481-b50b-c46311607209',
    id: '7912868f-384f-4d9b-8eaa-f208c3e68438',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: 'ecda26f4-995a-4208-a7da-72ec415fdf8b',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: '99185167-6a1b-4326-b5b3-978b82456ad4',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: '04485158-6d9a-43a0-b272-3582d3cc38a8',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: '17cd193f-80c4-4acc-83a0-7c15577ae4a3',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: 'fae7da99-0f9b-4072-87c7-f3cf2a3c6529',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: '59e7525b-2218-42d5-86f0-55e1bcbc38ca',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: 'b50b56d1-aded-434f-9760-880cd8a23353',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: '67a27fc7-34d0-4e1f-b656-7c12d7be5e44',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: '821601cf-86e6-4f8a-9473-da92c78c7b33',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: '9c6196fa-4783-4b84-9a39-b15b1a944eed',
    type: 'Engineer',
  },
  {
    Type: 'Auto Field-Maintenance Unit',
    Name: 'Shielded',
    Engineers: ['Bill Turner', 'Lori Jameson', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'c879e8d2-290a-471e-833c-eaea947a20c1',
    id: 'cbde7606-2931-48e6-aa10-5b165ede8680',
    type: 'Engineer',
  },
  {
    Type: 'Auto Field-Maintenance Unit',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '90981fc0-8c0e-4b86-a656-9ef1a9a7fa00',
    id: '4c587f47-0d20-4ae4-a0a8-a04f611bd008',
    type: 'Engineer',
  },
  {
    Type: 'Auto Field-Maintenance Unit',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '30976550-2ff1-46e2-9687-ae3faa4f4701',
    id: '9e86f421-09f6-4570-87c8-fbbbfd156a84',
    type: 'Engineer',
  },
  {
    Type: 'Auto Field-Maintenance Unit',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '82195e56-cfe5-4996-a821-a820dcd9405d',
    id: '3d98a408-e0ad-41a9-88ed-f34c368715bd',
    type: 'Engineer',
  },
  {
    Type: 'Auto Field-Maintenance Unit',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '191479fe-5459-11eb-a2cb-6805caa43529',
    id: '87d512ba-208e-4c46-9f62-f73762640bb3',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: '453693a5-0536-4008-8460-75ab0be907c1',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: '8d0d4439-aac7-41ff-b972-b9f319e843d5',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: 'fc08256b-0cd4-4567-bc9a-8fea836ee7cd',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: '2b2024f3-901a-4f50-b757-f96d5d71c539',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: 'a356cbb7-66aa-40fe-8c3a-2b7c659a6e35',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '9d3c40c1-a35c-42a7-8756-68dba821bde1',
    id: '3511f852-e7a0-4032-93c0-e74206546850',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c09e8d1b-e78e-43b8-bc8c-8ebf7bd84dc5',
    id: '1a2c1b58-a6b1-4501-b656-e70f6d1f4bbe',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '51e5c01d-191c-446c-8ae1-d91e68da1013',
    id: '5db47239-5ad3-48b8-9de8-8b29b0915549',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '1a2e3498-d593-4420-ad66-01281648f8c7',
    id: '3387afdd-0478-4d9e-b45a-542dd25b3f31',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '9faf5a34-a93d-4bcb-873f-0d044b5bc1ba',
    id: 'b7cdc152-d134-4d92-970e-fe21c6765012',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Shielded',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '0dd69a33-0309-4ab6-bf88-e500db42448c',
    id: '3abeb7c7-ed23-4507-ae2a-c0989d0b5667',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '297bc1b2-7e2c-4556-b971-b2ff38cbff53',
    id: 'e853a139-8f7d-4c5b-8f84-560c018c1c41',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '385a3392-8580-4fa6-a52c-1205f1041b99',
    id: '45655858-4dc0-4789-a327-828aee4c3068',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'eb3e8641-031c-4318-9e97-43f27529fd86',
    id: '381a6b32-98b9-456d-a64e-037667fe627f',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '7d291eef-55fa-4ffd-8d5c-1b4e46669333',
    id: '2d7f5915-af46-4533-b807-07d70056a704',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '7bd9bd93-2300-4099-a6eb-d9ed6afc6606',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'c87b5799-223c-4c2c-a109-0d06d6471d26',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'df536cd5-c1f7-4e80-9731-d7baf7d3a8c3',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '6baacd39-61dc-48eb-9b4c-ecf06727bd1e',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '5a65d6dc-be05-4ffe-a182-6655ab86632d',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '03dbacae-de88-4287-8cf3-707cf644d76b',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'd265bd60-f846-4e54-bfe4-fe78e46f25cd',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '3eaec040-c6e3-4ffa-b24b-508986bcc7a4',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'fe778a8d-e492-4ecb-a0cc-9929f727199f',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '62f341cd-dbfe-4138-af00-0bc405510b0e',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Overcharged Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: '04df2bfc-9c62-4fc8-ac89-ed61fc6bcaba',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Overcharged Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: '71ef7c1f-5f2e-4099-abf0-fc62b148e9b2',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Overcharged Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: 'a9062e6b-2fd4-4f04-9859-779254f087c7',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Overcharged Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: '3cdffc8c-5b20-4dfe-aaae-a15cac047d4d',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Overcharged Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '00134c63-48a4-4876-a09b-36187a79fbdd',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Low Emissions',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Power Generation',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '92571059-8e76-4473-b3ee-1b50803c75ef',
    id: 'b9e505ef-3016-48d5-a059-4671ddbd4a92',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Low Emissions',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Power Generation',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5a20a4d0-2d5d-4380-b14d-6099928cd0a7',
    id: 'a1439891-c657-4268-83cc-687b68b544d6',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Low Emissions',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Power Generation',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a0283399-56cd-4013-8293-872ad44a1ffd',
    id: '530c6691-b00a-48d4-83fb-6e116e777fec',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Low Emissions',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Generation',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'e87a55a5-ddf0-42fe-b919-9a3ef13a7bba',
    id: 'cdb18ca9-5cf9-460e-b7fe-eb7cbf260be8',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Low Emissions',
    Engineers: ['Etienne Dorn', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Power Generation',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '83a93700-084e-4c4b-aed5-30dc99d1da0c',
    id: '83361b24-6b8c-463d-bc2e-a14d194f333c',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: 'd0bac1e2-dc74-4c58-b5c9-c361312bcdef',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '91d466e9-0405-4f25-a193-93b7f9df3f3f',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: 'c28e46ae-837e-4e03-ab7b-b106e9ed8848',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '7f2d5550-f56c-427e-8cd6-180fc5d0ab6a',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '362aa73c-9061-4a86-a2bf-ee7ffdc1c000',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: '95ab53fa-541e-42eb-b112-be2f04663f51',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: 'd5184ee7-d5a0-40f5-a6e2-9a395c8449af',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: 'a311b182-177f-43f7-80dc-e5165e5bd31e',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: 'd9314576-4182-4274-bec4-c4cd548add0e',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Rapid Fire Modification',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: '01f8530c-5386-4b57-8294-680923099ee9',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'System Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '+16%',
        Property: 'Systems Recharge',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Systems Capacity',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '8138ba35-155d-4b82-86ef-ad4600ab5e03',
    id: '6de41dce-d963-49be-9397-ec768ccd5eec',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'System Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '+23%',
        Property: 'Systems Recharge',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Systems Capacity',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '91c79b1b-b494-4dd9-98c4-10d58aa5509f',
    id: '8b0d59c9-60db-4524-bb65-59519a2f50b4',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'System Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Anomalous Bulk Scan Data',
        Size: 1,
      },
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-9%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Systems Recharge',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Systems Capacity',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '-9%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '13ab16c7-2456-4387-b536-b28fd2f57d2e',
    id: 'fa9b2d21-bfc8-4ea3-82f4-e248c5bef912',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'System Focused',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Unidentified Scan Archives',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '+37%',
        Property: 'Systems Recharge',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Systems Capacity',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '544e6d6b-be89-478d-9b1b-62fae7599d30',
    id: '8bc4f46f-5e50-420f-ba99-e5c8910ab650',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'System Focused',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Systems Recharge',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Systems Capacity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '892dcc86-a720-4fda-96cd-cb0245305764',
    id: '40e5da9c-266d-41d1-81c6-5666b7727ad8',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: 'cd7d0a59-1574-4f35-be28-a1812c24c762',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'dbeebb9a-366b-45be-a0e4-3d5cd6119f7a',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'd8988304-8f0f-42fa-8838-31e0a3c49494',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'cb41bf67-5c12-4bab-bf1e-b894a33ac31f',
    type: 'Engineer',
  },
  {
    Type: 'Prospector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '4766f354-3b7a-4690-a49f-5e597ae824ee',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Lightweight',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '581cbb7c-c5da-4231-af7c-6c01cfd04d44',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'a977a9c7-7ca9-4a98-81cb-2b5594193db7',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '852bc407-0ac4-4ebf-8b37-32e45ca40449',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '501c6e0b-8511-4273-b507-d09773be6b3e',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Military Grade Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '84ec50df-7506-42d4-8ba5-7a087106bc4c',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Overcharged',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+5%',
        Property: 'Heat Efficiency',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Power Generation',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '06282764-2821-4604-ad2c-d9b148d562d0',
    id: '8d5f4b4a-66c7-45d0-ab32-fd12e9ee463d',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Overcharged',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Heat Efficiency',
        IsGood: false,
      },
      {
        Effect: '+19%',
        Property: 'Power Generation',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'feb49620-2df8-4ec6-9a58-13f986aed81f',
    id: '53637cd2-70c3-49c8-a532-04b63a0c0a94',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Overcharged',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Heat Efficiency',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Power Generation',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9325c166-998d-4ea6-8dab-0aafcec76705',
    id: 'a482c1b7-0f47-419a-9880-5dab2c208878',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Overcharged',
    Engineers: ['Etienne Dorn', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Heat Efficiency',
        IsGood: false,
      },
      {
        Effect: '+33%',
        Property: 'Power Generation',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6dd84c8d-1d21-4bf5-a747-f582ffe49a99',
    id: 'e00dc492-21c6-474d-a417-800ffeb8c471',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Overcharged',
    Engineers: ['Etienne Dorn', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Chemical Manipulators',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Tellurium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Heat Efficiency',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Power Generation',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'f8cee63e-9cdf-43e5-9584-a945d4c57aee',
    id: '6006aaee-5a3a-47d9-847d-cdf90d901995',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Increased FSD Range',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'bb67b1a2-7a5b-47bc-8ed8-e949b5e3fb16',
    id: 'bb10a7ff-b635-461c-b8a3-044899a4f612',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Increased FSD Range',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 1,
      },
      {
        Name: 'Chemical Processors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '74045351-f348-45f5-8798-487211f19520',
    id: '811343f0-68c2-468b-8bf1-a95db51e00db',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Increased FSD Range',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Chemical Processors',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Strange Wake Solutions',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cf196bb9-55a1-457f-893b-84ff2afd4db9',
    id: '97d00d13-50b1-4832-97cf-b5bf639cf198',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Increased FSD Range',
    Engineers: ['Mel Brandon', 'Felicity Farseer', 'Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Chemical Distillery',
        Size: 1,
      },
      {
        Name: 'Eccentric Hyperspace Trajectories',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+45%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'ecf49fec-32fd-4930-949d-a341bf0fd00c',
    id: 'ebca8ccd-ce3d-4bba-9ffe-b9e38fb6cb64',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Increased FSD Range',
    Engineers: ['Mel Brandon', 'Felicity Farseer', 'Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Chemical Manipulators',
        Size: 1,
      },
      {
        Name: 'Datamined Wake Exceptions',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+55%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'dddd4fd3-bc9a-4c5b-8606-853c63d0f554',
    id: '1b856db6-738c-4366-8bbc-a7d1ddd7a658',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: '131b2ab3-a2a1-47b0-84a8-531c4775b6b3',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: 'a9620d75-d4fe-44ea-8359-3c6e5f4b06e6',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '7fef3e1b-55a5-482a-9f24-dcfb9fd86a01',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '728e106c-0cec-415a-bc7c-9c46505e76dd',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '08dc393d-c817-4603-97ed-79c9346f0d42',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '7a327e24-daa9-452d-9dab-b08aa2f5f483',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'd33f44f4-6c7e-40d5-a533-a6c52a979306',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '27947388-6347-415d-b324-c14fdb6da6b2',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '4193ea28-12cd-4d2d-bb5e-d4fdf59d7fa5',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '700bf3b1-80fb-4002-962a-2e150b7a378f',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: '2ba8cebe-b2c2-4e36-bdff-36c6012d3c37',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: 'd3eeac32-72e3-45c7-84d1-de1641ccd450',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: '589a27d0-1200-4c29-8ee2-edfb5ea5a24a',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: '0686e166-abfb-4be2-b2b9-21b0598538da',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: 'd2ad9d9d-c7b6-4396-af30-4341a6074381',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Rapid Fire Modification',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: 'a5e87768-f42a-4b68-a1e9-8d099e9a71ca',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Rapid Fire Modification',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: '56b9e05f-0d81-4971-8912-3d9ca993d6fc',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Rapid Fire Modification',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: 'c01ef6af-71c4-4f5c-b9ef-95ecebd8f468',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Rapid Fire Modification',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: '330af07e-a930-46a5-82a2-39423d69f943',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Rapid Fire Modification',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: '3374e28b-60fd-4be6-ab30-cfedbf0c1456',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Scoop',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '7b71b0d6-e035-4526-91cf-b16a15d32594',
    id: '6d904864-cea3-4ef0-b70d-8e14be2fb686',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Scoop',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '1c367826-7b57-4beb-9d99-c9a598d29cf9',
    id: 'ed5c1a81-15c7-4a9a-89a5-b7310a380ef2',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Scoop',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'b61946ff-9e65-447b-9757-4c37789fc350',
    id: 'b14bec93-a706-449f-8cd3-505e3388af4e',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Scoop',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '457e3d79-cdc8-44e6-b98c-c360821b0131',
    id: '048ec10b-361f-4c4a-95c4-68e0f6c2f1d5',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Scoop',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks'],
    Ingredients: [
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '91baeeeb-5459-11eb-a2cb-6805caa43529',
    id: '175199b8-ba7f-451f-a985-0b79b45f649a',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'High Capacity Magazine',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f622da45-ef05-4a9f-bdcb-879b5933b869',
    id: '6ac2de5c-b778-4f6d-b0dc-b42dc51ae758',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'High Capacity Magazine',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+52%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2cf2614-1a13-4b8d-81eb-d4eaf76257d0',
    id: '05d3c979-f074-45ff-84a5-047d66a848db',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'High Capacity Magazine',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+68%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'e37a6dba-669e-4ce6-bb3d-e831bdd656c0',
    id: '047ae71f-7815-4f54-b2b1-a25394b2cd04',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'High Capacity Magazine',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+84%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8800433a-2061-4776-9821-5dc04772b963',
    id: '77495e58-8bfa-4cd7-a8fb-03515a08f001',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'High Capacity Magazine',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4b3f4f18-a517-4354-a02d-de46b3cd4efc',
    id: '78805d47-670e-4fdc-9dac-25bfed40f37e',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Thermal Resistant Hull Reinforcement',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'cc3d62d5-9769-480d-9e37-620c61a276ab',
    id: 'adc679b9-5156-416f-93dc-292d91d634ae',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Thermal Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+19%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'e4aa2331-7dc5-479c-9959-d90f0e473da9',
    id: '524e6804-b1a8-4d01-a529-1098967a7e2d',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Thermal Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '29f49ae9-e241-4791-a9e3-bfdccd6cdfbb',
    id: '63919635-97bd-4ec9-85d6-d0bb8607e1f2',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Thermal Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+33%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '19e30f32-a789-4acf-8f69-f97677ace963',
    id: 'e0a43242-bbe0-4442-9568-2c9bf09e9dd9',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Thermal Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'e6151657-1317-4aec-9e49-2d7e7a093d74',
    id: '594ff489-42aa-421b-9075-f1ecc8047541',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Dirty Drive Tuning',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'bbdea125-dd2b-4031-8698-56c922df3b76',
    id: '1c272f22-7e39-4f9b-86b0-92e64ceb2541',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Dirty Drive Tuning',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+19%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'd3ccba04-e0f5-40c3-a6f8-a038d5e5b4bf',
    id: '6a8682d3-d030-4c5b-90c7-a998c2b2afc3',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Dirty Drive Tuning',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-9%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '60091d1f-38a9-4d62-bbc0-6332e03c7f3d',
    id: 'e28dc2c3-c1c3-4f1d-a863-21ecb3ec962c',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Dirty Drive Tuning',
    Engineers: ['Mel Brandon', 'Professor Palin', 'Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+33%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '7355e32e-b850-4428-8279-66f234f59c6a',
    id: 'caa6adff-5b6f-4e88-9c82-8428903c0c94',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Dirty Drive Tuning',
    Engineers: ['Mel Brandon', 'Professor Palin', 'Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Pharmaceutical Isolators',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-13%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '92514d80-4513-489e-b85f-1b7010b3ae0f',
    id: 'f6398c7a-e99d-47f6-91dd-924e7fef123f',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: '4d1ecf7f-e374-4863-a6c0-2ccebfe867be',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '9b6730f1-c5eb-46b5-9b58-5677882ec332',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '5e3323bb-f5df-4ba1-8bbe-38c454dcc9f8',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '97afe912-e2f8-4942-a85f-e5afad88dd4d',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '484ddb0c-5445-42a6-9bf9-949d48deb977',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '31a8fc8a-7562-4e1d-857d-f72f475f272e',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '24a3bf5a-49b8-481c-8e16-cb48b37f6095',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Lightweight Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'df03509d-984d-4cb6-9b42-7c8465678da4',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '3ceb6bd3-dc82-4990-8515-0e25637bb3d6',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Lightweight Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '18ef1284-9993-4a1c-ac97-29e2e589b375',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f622da45-ef05-4a9f-bdcb-879b5933b869',
    id: '367fb60c-28b1-4c64-847f-bab064710c42',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+52%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2cf2614-1a13-4b8d-81eb-d4eaf76257d0',
    id: '6e60bf70-b218-4f88-9d62-a3d5e4db5b9a',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+68%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'e37a6dba-669e-4ce6-bb3d-e831bdd656c0',
    id: 'b9012d4f-69b7-42c2-bb27-8855f4f963d2',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+84%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8800433a-2061-4776-9821-5dc04772b963',
    id: 'e6f25d90-89ab-400f-93c0-7a8be2af576b',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4b3f4f18-a517-4354-a02d-de46b3cd4efc',
    id: '69f3f838-cbc7-460c-bcb1-c05855b22c7e',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd0451acd-f57f-46a5-ac1a-c2a2f1919283',
    id: '20029c94-3378-4fab-853b-d8f3d04a78fc',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'ccbf3b26-6ded-4e86-b2dd-330280ca552f',
    id: '46b0f568-0206-48d8-a3b5-56f048993be2',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a841e48c-d34b-4dd2-b540-14910224398a',
    id: 'e5da9cba-7647-4527-afb5-047f16e0f0d4',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Tiana Fortune', 'Marsha Hicks', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'de78dde7-c159-4d37-91e2-b6562dd754e4',
    id: '27eeb2c5-5e4a-4788-aff5-6172a0d63bd3',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '2a175094-0490-41f1-ad85-1d199e69f768',
    id: '0ad67441-5f8f-46c1-944e-7433a1db5533',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Engine Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Engines Capacity',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '+16%',
        Property: 'Engines Recharge',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '69f1b8a3-c868-452f-bdbd-cfc95e117ab5',
    id: 'd0f0db04-2109-4243-92c2-f6d9a52e272b',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Engine Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Engines Capacity',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '+23%',
        Property: 'Engines Recharge',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5e91d652-7346-4a22-82c9-79853fdcdf91',
    id: '14476418-3568-4ce9-ba31-b456ffbe67b9',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Engine Focused',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Anomalous Bulk Scan Data',
        Size: 1,
      },
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-9%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '-9%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-9%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Engines Capacity',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Engines Recharge',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4185370a-c4e9-4f58-9b67-a7f46bb2d3c2',
    id: '9b91781f-5f0c-4fc3-ada6-70c80ab65d8d',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Engine Focused',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Unidentified Scan Archives',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '+50%',
        Property: 'Engines Capacity',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '+37%',
        Property: 'Engines Recharge',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6a6a497e-8261-4763-8a15-c78222a00443',
    id: 'f61f4cfd-89f7-40eb-bb7e-9bfbf93cce6f',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Engine Focused',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Engines Capacity',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Engines Recharge',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ac618c54-ecfc-489a-98cb-e3f5789ad69f',
    id: '1bf3da07-dce9-4e6c-aa11-040d963b49a4',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Kinetic Resistant',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '285736a7-9677-4875-b425-0704d2c05ee6',
    id: '12643eff-6cb2-4d7d-8e75-0109a923b237',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Kinetic Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+19%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '816adb1f-c089-49b6-b52d-a8ca189a4ef5',
    id: '7b18cda8-9fae-48c2-934a-83d10b81bca0',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Kinetic Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '54c5cc67-3112-4c77-87f9-c5d6a5f0ae3c',
    id: 'c66ee0e7-557d-429e-9550-ebd5e6d83f50',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Kinetic Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+33%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '80cdd75d-a574-4092-b45d-77187e52edf5',
    id: '017b0653-b2e8-4f55-ba98-eb8e1440390d',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Kinetic Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'f56d18cc-3eca-4bec-8238-4a0105947e4e',
    id: '0245894f-0133-4cc1-95e8-7e9f47e749e7',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Ammo Capacity',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Reload Time',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '+50%',
        Property: 'Ammo Maximum',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '84b2fe9b-5c82-4b3c-8181-7c15aeb9ecf9',
    id: '5e4c6547-9030-4377-97e6-946c26db991c',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: 'dd55a7eb-faf0-4fb2-9c2d-2006711f4576',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '7e399c02-08c8-4e83-bff2-6b0dd9c99bd2',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '8f174f5b-cccf-4ce9-8acb-89fc286c3740',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '1f63752e-04fa-42c7-8e24-a203911e8f20',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '20fbd422-47ab-4b00-acb7-1d8020dc237e',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f622da45-ef05-4a9f-bdcb-879b5933b869',
    id: 'bf60c020-d494-4082-9dae-eeae3b17c13c',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+52%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2cf2614-1a13-4b8d-81eb-d4eaf76257d0',
    id: '3a4a1893-d074-4391-a40f-77684cf78389',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+68%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'e37a6dba-669e-4ce6-bb3d-e831bdd656c0',
    id: '3d31df1c-e8fe-4931-beb2-fdc640350bfd',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+84%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8800433a-2061-4776-9821-5dc04772b963',
    id: '6c127d0d-f029-45ab-8dd7-dd3b804ea5f9',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'High Capacity Magazine',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4b3f4f18-a517-4354-a02d-de46b3cd4efc',
    id: '3fe6556c-432b-4ac8-9915-5b50926bb810',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '8a71178f-3d2a-4c53-94dc-606d9d43d43a',
    id: '93698f50-6288-4cad-8740-b51b1c20b4fd',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '72595b30-3bbf-47e3-82f7-db29654bef66',
    id: '121f5b23-9af8-48b6-b555-26fb6a125897',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '8cca72b3-f01a-49aa-a979-a72f3412bf6e',
    id: 'f3f61978-b9b4-47b4-b0e6-4517e3403184',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '89f9e00f-e621-4d34-bb15-4732f29a7f15',
    id: '10196649-1996-4cd9-8cd7-94b2ad91c6e4',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '8f0e13ab-c621-4c21-b7a1-f8acd4057007',
    id: '4d509453-2682-4697-ac7f-ed7d4848af69',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f4426054-f766-4be3-8b26-e9236ff61dd9',
    id: 'f0218fb8-9950-4342-b287-f7f3bbef14e6',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'fa7b4b7f-ed0a-401f-a372-1d03c09f9c55',
    id: 'c3fc7981-f0fd-49d2-b848-da2d91bc1a59',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '443fe7e9-e313-457b-8c0f-6eb22e6e91ef',
    id: '5c4161c1-12d6-4808-9f31-23449329953d',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'b1a0e15d-7164-44f9-85e5-9acc64e56b8b',
    id: '307711f7-bf58-4656-acd1-fb8ba151dc0a',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '499f1881-9448-4df5-a734-cc3876f23790',
    id: 'b2ef8e28-a85f-45e2-9471-2477e194ab9c',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: 'd9e49938-ec73-4d76-9309-630b4a5edfe1',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '1e96dcc0-27c1-4875-969b-c7b84ee7e5e5',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: 'b7847a5e-e9e0-4ea7-81f6-04f3b79f58aa',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '427ac95d-2b60-402f-a513-98fafd442ea5',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '679450ae-1aee-47da-a12c-477319ae57d3',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'High Capacity Magazine',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f622da45-ef05-4a9f-bdcb-879b5933b869',
    id: '2e922d57-db78-4415-91f7-9957e3aec8a5',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'High Capacity Magazine',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+52%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2cf2614-1a13-4b8d-81eb-d4eaf76257d0',
    id: '5bd6fff9-420c-426b-aaa6-21f18815632f',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'High Capacity Magazine',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+68%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'e37a6dba-669e-4ce6-bb3d-e831bdd656c0',
    id: 'c8534e93-2642-4dce-8317-0252b1d30c0a',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'High Capacity Magazine',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+84%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8800433a-2061-4776-9821-5dc04772b963',
    id: '3f57f2c3-4960-428f-b64d-efc042c968a1',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'High Capacity Magazine',
    Engineers: ['Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4b3f4f18-a517-4354-a02d-de46b3cd4efc',
    id: '549c08d3-e6da-4a07-a7cd-96dfb5552cc7',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: '079e1e92-fefa-40e5-abfe-14b1eeffc047',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: '92b2014b-8211-46a2-b437-600fcbaf0eef',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: '3c9f91de-0867-41dc-bd56-05a6db8461ea',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: 'a19f20b5-09a3-4e5b-be6d-5a2b9fbabf33',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '65cddf76-fed3-4e28-a1e6-029da3b1a5a3',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Kinetic Resistant Hull Reinforcement',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '9d5338ab-031c-40e5-bd13-d3eb057540ab',
    id: '84149fee-5a14-4615-95b7-5cafcaf12c27',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Kinetic Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+19%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '238db8e4-99e2-4e70-b4e3-f918294110c7',
    id: 'ec4c3716-c8d4-4c33-84d6-c5641231b43c',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Kinetic Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+9%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cb65ddfa-2fd9-4db5-9558-0770866ea8ee',
    id: '2a69b72e-51c0-4333-8381-783798e9c713',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Kinetic Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+33%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '944cb78e-4da0-43a0-acc8-95c7d67eaf92',
    id: 'fd090e37-e405-44fe-bcbd-0dd54164a2b0',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Kinetic Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'bd68edc4-6ed5-4704-9682-28b51a18591f',
    id: 'd5528f01-100c-4ebe-ab07-e4ad89d92362',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: '07869bc2-6ffc-4ca3-bd22-dd833825d917',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '5c7a6a08-a134-4aae-9f8c-36c4ee7ea699',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '417c434d-e896-4986-9d44-15fdc5c179c2',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '03e0efc0-87f4-4702-93f1-af51e4777a2c',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: 'ef904ee8-c4b1-43d4-aa10-5ad52f8fb6bf',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'High Charge Capacity',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Power Recharge',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Power Capacity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e1ae5651-f688-46e2-a94a-9c3bc6e8665b',
    id: '5c2670e3-6a5d-41c1-9a4a-6bc94dbdaf71',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'High Charge Capacity',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Power Recharge',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+18%',
        Property: 'Power Capacity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'd5ea6b7b-31eb-44f4-b1f3-8126dd6ea7b5',
    id: '2c047165-376f-4821-b8a9-91ba21ffcf59',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'High Charge Capacity',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Recharge',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+26%',
        Property: 'Power Capacity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'b959a87e-a231-46e7-a6a7-65fe6c0464bc',
    id: 'ba48633f-36ac-439a-8461-b00a21947f98',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'High Charge Capacity',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Power Recharge',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+34%',
        Property: 'Power Capacity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '5f468c03-ed6d-474f-9e82-601b11d728c8',
    id: '3ae74366-c71d-4d7a-a032-4d9f8b689504',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'High Charge Capacity',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-18%',
        Property: 'Power Recharge',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+42%',
        Property: 'Power Capacity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '50b4cbc5-9445-43e3-a9a8-b1320fc0b27e',
    id: 'dfae3a8c-9151-418c-aca2-34a7b0d9ae60',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'High Capacity Magazine',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+36%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+2%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f622da45-ef05-4a9f-bdcb-879b5933b869',
    id: 'e0b8d461-b192-40dd-8e20-1b11f2f61fe8',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'High Capacity Magazine',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+52%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+52%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2cf2614-1a13-4b8d-81eb-d4eaf76257d0',
    id: 'c28e26f5-52a7-47a3-a0c6-658e4e4f656a',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'High Capacity Magazine',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+68%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+68%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'e37a6dba-669e-4ce6-bb3d-e831bdd656c0',
    id: 'a582268f-52b5-433b-b57b-cb6799b1c9a9',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'High Capacity Magazine',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+84%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+84%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8800433a-2061-4776-9821-5dc04772b963',
    id: '92b1d9d6-f263-4000-8dbc-3810fc34bb7d',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'High Capacity Magazine',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Clip Size',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Ammo Capacity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4b3f4f18-a517-4354-a02d-de46b3cd4efc',
    id: 'a69afbff-dc57-4dbd-baac-5bc13bd30886',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Rapid Charge',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Duration',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Spin Up Time',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Boot Time',
        IsGood: false,
      },
      {
        Effect: '+5%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '8f315143-e256-41c2-8833-f35d12e47dce',
    id: '2cec001f-41e1-49c6-90a1-928a34e7088c',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Rapid Charge',
    Engineers: ['Mel Brandon', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Duration',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Spin Up Time',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Boot Time',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f983d8e1-9a38-425c-a5bb-3881c5e0f14d',
    id: '8c35019d-8a68-444f-8c13-eeb3ca49128b',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Rapid Charge',
    Engineers: ['Mel Brandon', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-18%',
        Property: 'Duration',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Spin Up Time',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Boot Time',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f1cc436c-d2f0-4b79-a832-5fafd62ab5d8',
    id: '37e26669-24d1-43fc-820e-e73b898f75e1',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Rapid Charge',
    Engineers: ['Mel Brandon'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-24%',
        Property: 'Duration',
        IsGood: false,
      },
      {
        Effect: '-40%',
        Property: 'Spin Up Time',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Boot Time',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'e4c9cc1f-106d-4bfe-838d-8ca76cdce8af',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: 'a6123197-7423-4ee1-b6c3-f0429c055429',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '249c259b-f3e7-4a5c-ba1e-28a6e1c1f81a',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: 'e19cb4fe-9fa9-4a4d-bb1d-28a98a7bce49',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: '6bea2d37-da2d-442b-9158-b0ee992215b4',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Efficient Weapon',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: 'be30ce1b-9c83-4c46-8e63-ac20798e966a',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Expanded FSD Interdictor Capture Arc',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Colonel Bris Dekker',
      'Tiana Fortune',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Facing Limit',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'da98fe81-8ac1-4c4a-ba1b-76b894dc9de8',
    id: 'e68b6ac6-bc4f-47be-bfdb-b83792dcc072',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Expanded FSD Interdictor Capture Arc',
    Engineers: ['Mel Brandon', 'Colonel Bris Dekker', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Unusual Encrypted Files',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Facing Limit',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '88bcd4df-3ae3-4e6b-80d8-27bf8815e4d2',
    id: '8c66a4cf-ac09-4cfb-a67a-e702a4877da2',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Expanded FSD Interdictor Capture Arc',
    Engineers: ['Mel Brandon', 'Colonel Bris Dekker', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Tagged Encryption Codes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Facing Limit',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '1036b38e-676f-4b42-8518-abed6f627fb7',
    id: 'e5c484a9-2927-426a-96f4-704b6e446f40',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Expanded FSD Interdictor Capture Arc',
    Engineers: ['Mel Brandon', 'Colonel Bris Dekker'],
    Ingredients: [
      {
        Name: 'Divergent Scan Data',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Strange Wake Solutions',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Facing Limit',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6c9f4098-99fa-4777-bd21-367937d1391f',
    id: 'a02801dc-228d-4df1-b703-338211eab1d7',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive Interdictor',
    Name: 'Expanded FSD Interdictor Capture Arc',
    Engineers: ['Mel Brandon'],
    Ingredients: [
      {
        Name: 'Classified Scan Fragment',
        Size: 1,
      },
      {
        Name: 'Eccentric Hyperspace Trajectories',
        Size: 1,
      },
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Facing Limit',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'dd804ba4-5186-44b5-a096-6490b5806165',
    id: '30428ea3-f032-4855-a22d-e3ce64f160db',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '82875baf-ac8a-4e81-9998-5d7991a5aac7',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '0932b44a-aba9-40a6-bc12-53465fbc56ef',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'f4ea1785-87b2-4275-98a7-156c57079e1f',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '6475bcf4-39c0-411c-9888-523d783587a7',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '0a4ab417-3942-4493-8867-d5ba16ae1ea3',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: '682b947d-ef0f-4c85-b22f-0c98aba116c9',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '81844756-2e50-4414-8c05-a13a5e7511a5',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: 'cb5082b4-faf1-414f-a53f-4843ee8fea13',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '31a013f1-0b67-4419-8d37-19f630c0e6c8',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Sturdy Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '4b18e3c1-cf59-48ce-b2a4-761c0ff9fd43',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'b40b11a1-5f0f-440f-b77d-9abf9833d546',
    id: '605c3db3-8554-4872-9aec-730174d44279',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '847b937b-ffa2-4418-9a48-0993a675d43f',
    id: 'a6b8b859-f23a-4eb3-916d-5a486bd006da',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '8303d5f6-da56-41d0-8af3-4620efcc561e',
    id: '67463df2-b58d-41d5-8227-8fca9c4baa5c',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6c37ca40-0ae6-48e0-a145-c3eea2bf7cce',
    id: '18c89c7c-a0b5-4510-bdef-a9c525c9f9a2',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd0ff95ad-123a-4fd0-ae88-c46209068e3a',
    id: 'c11d8c58-625f-4693-b87d-87de6cf4629d',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Heavy Duty',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Shield Boost',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '350e7873-893a-49d2-9057-c00e060178eb',
    id: '05e8bdc8-ce27-466d-b218-c570ffa26a10',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Heavy Duty',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+17%',
        Property: 'Shield Boost',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '636ccc8d-cc59-4366-9934-8b235becc2d7',
    id: '1e903c9f-a7ac-4efd-ad7f-74aa3c00eccd',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Heavy Duty',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+24%',
        Property: 'Shield Boost',
        IsGood: true,
      },
      {
        Effect: '+200%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '82a66c08-1205-4c1a-ab02-1889e8ebcdd8',
    id: 'a2943a9c-b33b-46c9-a3ed-b0758571c9ec',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Heavy Duty',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Inconsistent Shield Soak Analysis',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+31%',
        Property: 'Shield Boost',
        IsGood: true,
      },
      {
        Effect: '+250%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'c635934c-8d9d-4d1c-89e4-3a000a972bf2',
    id: '1bbfcdb7-aed8-43c5-8f03-610f293ffe54',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Heavy Duty',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Antimony',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+25%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+38%',
        Property: 'Shield Boost',
        IsGood: true,
      },
      {
        Effect: '+300%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '933e238e-56e0-44d6-b114-49eaab02f033',
    id: '73c72b48-24a1-4488-bd3a-3eb55e87905b',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '03db8391-50c8-49e7-9833-507f71621e81',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '44652132-f712-443a-ad3c-b8de4c90e298',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'ec33708e-a589-4724-b276-ca52550687be',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'e6171412-ed9d-4f8d-a8dc-bf3044c62c9b',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Lightweight Mount',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: 'd0aafd50-b64c-4c2d-8992-ca539a259001',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Clip Size',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: '9ac64118-2d3a-4a35-9c49-cea04d86ef95',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Clip Size',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: 'eddbfba3-5d3e-44be-9486-937be781478c',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-9%',
        Property: 'Clip Size',
        IsGood: false,
      },
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: '5c2ffe37-b130-47a2-915f-3d948d4e01e9',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Clip Size',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: '6393ae25-aff9-4eee-bf7b-d04440d3caca',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Clip Size',
        IsGood: false,
      },
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '56b4ad64-f420-426b-81e0-7fe6d0696245',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '6e384cd7-1ab5-4a03-849f-d1a6d5711012',
    id: '7532de2d-1dde-4c49-acac-17104b5a5766',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'be06b5e7-44c0-4bb4-b084-ca5578cd5b26',
    id: '4b67604d-8ac7-4c91-b537-fb9fc61e9745',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'd18a63f6-c96e-4e73-b4a1-70deeb27af9c',
    id: '81ac6ae1-f4f1-4ed0-bc06-5c34bbaa3aa8',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '99d03d5e-1fd6-49b1-a99d-71571c35dca5',
    id: '171ee6d9-1e81-44fa-9185-7828d91329ac',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'bedb2a94-2d59-4ed1-9e51-58ae2cfb4189',
    id: '7b0e32a1-1ec1-4e30-9d9a-c3c254137872',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Heavy Duty',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+1%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f9d519ab-b6f6-4d81-a93b-8f4fb45edd55',
    id: '82526fc7-45b4-4c69-b1c8-139fe3bbc0d0',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Heavy Duty',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+2%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+17%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'ab58e035-3128-4eec-8974-cbbff022d31e',
    id: 'abd13dba-de45-4c6e-b636-ed6694bcd52b',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Heavy Duty',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+22%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '20afd6a5-5a72-4825-813d-b660fe796cb3',
    id: 'f5589f05-0c4b-490f-ae4b-2bc828de095c',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Heavy Duty',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+27%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'e08d3ec0-79e1-4d9f-ae16-6bd0a7e5b5c4',
    id: 'e8d1e233-8a1e-47e8-ae22-896c7ec5d530',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Heavy Duty',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'All Resistances',
        IsGood: true,
      },
      {
        Effect: '+32%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '58b95d8a-1066-4e22-957f-0beb3927a2dd',
    id: 'dd4264a8-12f8-46b9-a935-0b20ce424a42',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: '4cb497d6-c62c-451d-91ad-15114b3a6384',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: 'f41a6672-020e-46fb-a430-a15685df32e0',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: '3ebccaba-efde-4b40-8c84-1e24935768b5',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: '402ed6b2-32b1-41d1-83b3-eee1962df754',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '50dc21a1-7637-4568-b7e3-b37a6d1efb6a',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: '75c65400-4849-4f8a-ab50-e1050d7faba3',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: '80073ecd-b82a-4d23-8f5f-f542a6defc93',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: '9ae1c227-6e8b-4712-b048-91f659d0b860',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: 'a815604d-f82d-470c-bf74-e1b38e545007',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: '2470a86e-6c90-4abe-a69a-9164e8f2905c',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'fcd12382-bbb3-431b-95c5-ae9539a02a54',
    id: '52110e41-9dda-428a-b530-4fb1a3cec41d',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '9a62eb66-8231-4fa9-9047-284798892e93',
    id: 'f93d2a15-8b6d-4498-bf1e-778d6347057d',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'c46b6c89-0a24-4586-865d-76ff5ae35209',
    id: '4b4135be-c586-4965-ac59-be4a3bc8995e',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '89f25da8-029a-4f3e-828d-393b36f0d7b3',
    id: '74ecd382-4b3f-4e60-853c-70f3ffe7689c',
    type: 'Engineer',
  },
  {
    Type: 'Life Support',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn'],
    Ingredients: [
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '2da376ce-b78d-480d-93a7-e9d8eda6a27e',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: '048a8df2-8f67-41ad-ba28-d720c5e32584',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: '21db6ec5-29b4-4a51-a731-3dc8cb25d8fd',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: '23fb4c93-9c42-41b6-8cf5-916d184be4f3',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: '963a8f84-9239-415a-9182-f11f86776d41',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: '6d5695c7-501d-4ee5-9c49-7c46f9ae960e',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '9b714883-e0e7-46b5-a2bb-5367f2cc9b3f',
    id: '7141d2df-7eac-470c-b991-b24cc55370ba',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '9de3e096-fbfa-4694-a2e4-919494d39ee1',
    id: '0725bca1-2a85-42b9-ab5c-5c4800d74b50',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4a5d7441-2543-4405-8587-9b969fffd3f2',
    id: '91fec844-d097-4885-909a-328bb12d3f0b',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'f4b41ce9-d3a8-4362-9821-0d45f2b975bc',
    id: 'f270fb84-508f-473d-8f35-1c09305b0b4f',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Reinforced',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd5d06450-a1cf-4dd2-b8f0-12d0142ad773',
    id: '6aa2dfa7-4e13-4061-9c99-46fa98c58552',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '81dca970-1fbf-4017-af46-0c6285c3a728',
    id: 'a4b2dfe0-4d6b-41cf-bf0d-f3fc03d1d07c',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+39%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'cf07de84-b794-43fd-a8b6-57ee781e9247',
    id: 'c5ad0b66-688c-4715-931f-e50c44e6195d',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+51%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '7cd60cfe-e406-4005-a912-a306a69067e0',
    id: '2b8b075f-fce7-4176-b9a1-d2c6038be7e7',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+63%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'adae0f67-fd08-47d5-8870-f926cc63353f',
    id: '6a949bdc-0d80-426b-9cd0-b7e180264063',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+75%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ccf0cfd9-6da2-4975-95fa-ea7f0ccda991',
    id: '1752acfc-c217-4725-8ff2-1db303e92d14',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: '65677001-119e-4145-945a-f10650b4b4b2',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: '0d0881c5-371e-421e-9d38-598135c147b0',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: '0daa3f7e-e3a8-483e-8e08-4f3e51cf5981',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: 'ac63fea0-a2ec-4f11-b006-e672f560ea9a',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Rapid Fire Modification',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: 'fe50d9b2-bc5a-4782-a378-a4e15cc918c1',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Shielded',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'b7bb4a4a-61ee-44b6-b477-e6abf7540240',
    id: 'e9ae777c-063c-423f-8b02-8afd81ed5f61',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '69ec3d60-591c-4c65-a6d4-2b2fe83e1819',
    id: 'c22232ae-ce12-49ad-abdf-eefbacfcc6f7',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'beb3c5c1-689c-497d-a1b0-92d7fda93878',
    id: '4c2d4010-6bbb-4676-bc23-586ba6a0df93',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '52f4a6d1-c291-4ac6-84f2-6d39bc54e675',
    id: '18d8e476-5788-4baa-9d2d-394fe5f25980',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'aa1707cb-c9e3-425f-91cf-98ab482317ca',
    id: '0eb1bc86-e1cb-41d3-96d5-0146d26ef1b5',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '736aca61-1fd6-4e95-931c-9354434b52ce',
    id: '11d0bc79-b23d-42b3-945b-a77ca86591f8',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '60b7eeba-eaeb-4799-a7ab-c989afc9e74a',
    id: 'ed3d5702-93f9-4f5d-ad1a-62dbeeaf0ea7',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '31f3e418-9020-4b01-94ec-cf9d62529f12',
    id: 'b3a11aa8-e739-4666-8f7e-1c09c3744500',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '65e897c7-0bb2-426f-bed2-3162767a80d2',
    id: '0a3bfa67-f8fe-4e9d-8d0f-f4c975c8d8e3',
    type: 'Engineer',
  },
  {
    Type: 'Fuel Transfer Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '800144e0-f708-4f40-b78a-6d1354712489',
    id: '52017ff0-7556-4278-80a5-2191c525c6a6',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Charge Enhanced',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Power Capacity',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Power Recharge',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e8ce47e1-c5d7-46bf-b31e-48dcfe9ab1a5',
    id: 'ff846309-864e-42c7-8219-ece4208ff25c',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Charge Enhanced',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Chemical Processors',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Power Capacity',
        IsGood: false,
      },
      {
        Effect: '+18%',
        Property: 'Power Recharge',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '528b87b2-157d-471e-9958-831a9962c595',
    id: 'e841ba74-7b25-41c9-8d5c-e31effa7c932',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Charge Enhanced',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Chemical Distillery',
        Size: 1,
      },
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Power Capacity',
        IsGood: false,
      },
      {
        Effect: '+27%',
        Property: 'Power Recharge',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '713b5e19-b7a5-447f-b450-248e771dcd72',
    id: '6f77359f-6d6e-4f88-a9a3-5b63f7f78203',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Charge Enhanced',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Chemical Manipulators',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Power Capacity',
        IsGood: false,
      },
      {
        Effect: '+36%',
        Property: 'Power Recharge',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '1bfd4836-c69d-4adf-94dd-e7c41da96416',
    id: '77c63c2a-e947-43e4-82bb-3396498463ce',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Charge Enhanced',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Chemical Manipulators',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Exquisite Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Power Capacity',
        IsGood: false,
      },
      {
        Effect: '+45%',
        Property: 'Power Recharge',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5adf6ae2-0e1b-4b3e-9513-9b981213cdfd',
    id: 'a2c6998d-8360-4ded-8397-04676b9ee3f7',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Ammo Capacity',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Reload Time',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '+50%',
        Property: 'Ammo Maximum',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'cc81fa92-d36d-4619-98f9-4202d475b2d8',
    id: '49b2f27c-a7dd-423a-987e-f733fd735d28',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Efficient Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: '968bf43d-4627-4ec3-9f42-c5e493ce1c8f',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Efficient Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '1ab103e7-58f3-4dfa-98f4-eb79ed221c55',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Efficient Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: 'b5c81978-edca-4053-8258-9a30cbd8925a',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Efficient Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: 'beaa7650-fe0a-4319-82a8-0367f76b536b',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Efficient Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: '83d7d807-9b18-493f-9319-bacb2b0c9bfc',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Lightweight',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '8c9c207c-91eb-422f-9afa-767854c0bda5',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'c23c56ef-4f28-48ef-b031-166bda852d99',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'b54fdd33-9a9c-45d9-9fa0-4f29f0899e9f',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '1fcdee32-093b-4182-a51c-95bc5c4d2848',
    type: 'Engineer',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '2be681bb-88c2-40b8-ae63-a6c6c547b630',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Blast Resistant Hull Reinforcement',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'ed72014b-4033-413c-8a71-5eac18e085ce',
    id: 'b96269c5-aa6c-417b-9d89-a18f610d62ed',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Blast Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+19%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '7be2929b-0c89-4059-90d9-4631d90c053b',
    id: '58459b73-b6ab-4e95-8e36-c2e4417ed4f8',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Blast Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+26%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '11742116-77d3-40ea-bd1f-71e0558a0ad1',
    id: 'b6a4ac6d-cfbe-47a8-9bdf-61bf98e9354e',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Blast Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+33%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '1f59b0aa-46ab-4eb5-bf07-fe4d8f968c1d',
    id: '9ea621bb-3301-4b5a-bab3-42c33225ec1e',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Blast Resistant Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '2251a73a-39da-4a50-b099-014c07378857',
    id: 'ccf3a819-3195-4bb2-bc5a-ada6fc7d40ed',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '016bb7b9-28b0-4e90-9953-73aa236f41ca',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '593f3e26-ebbe-4872-9b8b-48c9dd0fca5e',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'acf8f5f0-5114-4b0b-92e9-16f1ea199412',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '412871c3-6323-4667-b74a-12616364a628',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Lightweight Mount',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: 'd896ad87-8d06-4852-ad90-43f185628aad',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: 'ba99c08f-c8de-43fc-a998-253c94f4ff7d',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '088dd288-d2e3-49ce-95ae-69c15560227b',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '67eb2764-be58-4ed9-b7ab-c0b2d13fa8d3',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '38bf2d45-a3b5-4263-93cb-b1bac1422934',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Lightweight',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '6e89b93b-a6b7-4267-bab1-9400d66f3588',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'f75e88b4-7a5c-40da-9652-a7e91aa174e2',
    id: '750377d7-96e8-457c-8c09-3edb8c227191',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'd794c46b-13e7-4136-b435-bdb96c87c657',
    id: 'bbc02cf5-7a28-490f-b172-29a50a95c206',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '07acc4c6-724e-4c6b-be15-c9c49d4d95a6',
    id: '84be2283-a3c1-4b2d-9cc3-f64bd090c786',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fe76b519-7695-4618-b71f-4e27f53f9eb4',
    id: 'f03a2fb0-ebf6-424e-9015-7fd888ce52e7',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Reinforced',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'eb38c498-6805-4ac5-8806-c81cc32123af',
    id: '90e307c1-0cba-4e19-bc9f-57a13c51dc84',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Reinforced',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '6bcb5b84-5e90-4d3d-be7c-6ed6c1f048c4',
    id: 'e49849eb-5362-4bec-82b0-9d54fb437e61',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '8497a12f-becf-499b-8df8-6814cfa93e39',
    id: '54696e3a-3947-4e3b-89f8-b846f2b13ef6',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+90%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2fbadb73-1c89-4d25-9061-43735d4970b3',
    id: 'a0705a86-0c21-4365-9a32-fbc35dcb0b3a',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'a89859a9-1278-40d0-ac77-e3e6bf10de95',
    id: '7b96494d-45ed-4b4d-a49a-180adf9796f5',
    type: 'Engineer',
  },
  {
    Type: 'Electronic Countermeasure',
    Name: 'Reinforced',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '7ab56e9d-f02d-4562-b1e1-82168f482a3e',
    id: '9e9dfe8a-3ed5-4c1d-ab79-d229df5fbb74',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Double Shot',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+600%',
        Property: 'Burst Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '2',
        Property: 'Burst Size',
        IsGood: true,
      },
      {
        Effect: '4',
        Property: 'Clip Size',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '0dad25c2-bbf3-4020-9af5-25f902ec7732',
    id: 'fe31d211-8cc0-40ff-b8d1-eb0a8b901683',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Double Shot',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+800%',
        Property: 'Burst Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '2',
        Property: 'Burst Size',
        IsGood: true,
      },
      {
        Effect: '4',
        Property: 'Clip Size',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5cdaf06c-5ecd-40f0-bb8b-54ce8847b4e6',
    id: '8044a613-6e04-4515-863d-70a0506470b1',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Double Shot',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+1000%',
        Property: 'Burst Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '2',
        Property: 'Burst Size',
        IsGood: true,
      },
      {
        Effect: '4',
        Property: 'Clip Size',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'fca184ef-5346-4f9a-8964-1e158763ab03',
    id: '1ba6223b-a346-437f-8e00-bef25933ec29',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Double Shot',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+1200%',
        Property: 'Burst Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '2',
        Property: 'Burst Size',
        IsGood: true,
      },
      {
        Effect: '4',
        Property: 'Clip Size',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '93cc424a-f547-409e-8487-2f73c27d4e47',
    id: 'd30ce522-2ac1-4166-bba0-a72f525c6be9',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Double Shot',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+1400%',
        Property: 'Burst Rate of Fire',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '2',
        Property: 'Burst Size',
        IsGood: true,
      },
      {
        Effect: '6',
        Property: 'Clip Size',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d790580-fc41-4378-b8e9-4feceaebb618',
    id: '6a98a489-251f-4f06-bde8-fc66b97d1282',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '952d56cc-0c1c-4a62-a8c4-a4c668181654',
    id: '7034e88b-a125-4d43-bf81-38d0ddf053f5',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'accfd35c-3172-455a-94b6-27be6409970a',
    id: '31dc5b35-9b4e-42dd-8ae3-6e0b144332e3',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '0db2b6bd-df3f-48be-ac6b-a334b79757a1',
    id: 'f68e8160-d570-4f2d-acbf-b36c5857f3f0',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'a747942f-d354-4f0d-ad59-323e52823924',
    id: 'f5c7ab23-c182-479d-b401-b8e48829318c',
    type: 'Engineer',
  },
  {
    Type: 'Hatch Breaker Limpet Controller',
    Name: 'Shielded',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'acf4833c-1fe8-4aef-a396-33ca652793e2',
    id: '5657133c-c0b9-47eb-8e4d-dfcded27e3e5',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Rapid Fire Modification',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'a7ca2bf6-14be-41ed-8bfb-c7348fda7713',
    id: 'b6401cd3-c55e-4b56-b665-e86898351f0c',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Rapid Fire Modification',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0008257b-ea33-48ea-a18e-56cc6cf98a77',
    id: '680abf30-7769-466b-b7eb-db4d9c28ea22',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Rapid Fire Modification',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f3338d38-f944-4841-b350-09755e1b615d',
    id: '9d258d36-811d-4847-8f6f-615f94eed518',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Rapid Fire Modification',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+35%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'd2bdb568-725a-44bf-9328-ba72d2988acd',
    id: 'cc1e4e76-81bb-4a82-a489-64b4269a2b76',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Rapid Fire Modification',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Reload Time',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '0,5',
        Property: 'Jitter',
        IsGood: false,
      },
      {
        Effect: '+44%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'b1792824-0e96-42a3-9d3a-0b41d5ef83e0',
    id: '5a725b68-5b5b-44f9-8c06-ac73f8ddd8eb',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Lightweight',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '59d80ace-7d13-44b1-8e28-3c369bf6fa0d',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '5094d5d2-a091-4ed4-a803-498ae27dbbf9',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'a976e2f7-4f86-4465-aabd-09b232145439',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '4de62cd8-04ba-433a-8bf8-8aae588dfc2a',
    type: 'Engineer',
  },
  {
    Type: 'Point Defence',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '4e61730c-b451-4feb-8d9c-220ded5c70df',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Lightweight Hull Reinforcement',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '8405c035-bf65-47d1-bdbe-5253b5c0a98b',
    id: 'a12963df-8026-424f-a807-819a6284da76',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Lightweight Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a8dad054-0392-460a-934e-27d40f65e1fc',
    id: '80cee503-b3eb-42b5-a52a-a9c9d9f913d8',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Lightweight Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+16%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '-16%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'ee887ba1-c66f-4002-97cb-5169201324af',
    id: '65856d60-2895-41bd-9de7-50364d2ca15f',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Lightweight Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-16%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8912615d-e711-4e5d-a08f-739cbf372963',
    id: '382d95dc-a5e2-4409-8435-a6fabf6b8fea',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Lightweight Hull Reinforcement',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Military Grade Alloys',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+24%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '371f79dc-6387-40eb-9d98-be915ae4413d',
    id: '14e0762e-0167-483d-8504-06fa27f11675',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Resistance Augmented',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+5%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '54f9f0c6-b4e9-4861-86ab-730d800bea54',
    id: 'c59f3745-dadf-49bb-a7b0-4e045eb8e298',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Resistance Augmented',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f082652b-7778-4bce-a1f1-f2491b27eb1a',
    id: '6bb100dc-53d6-47de-af26-0aadd4921e92',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Resistance Augmented',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+11%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cfb01505-ea2b-4a33-aa6b-cbabeb60db7c',
    id: '99377d8e-fd56-44ab-b1c8-9a4b0275ac10',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Resistance Augmented',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '1d11b8c8-9c16-4bdb-ba33-e52e79fa5999',
    id: '55bc4969-ad8d-4930-a33f-a7f5367ab04d',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Resistance Augmented',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Imperial Shielding',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+25%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'All Resistances',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '00a2aefc-0698-4c16-a1f1-6a84907e42bc',
    id: 'a04579e8-ddd9-4792-87c9-d2d0c7fd3778',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: 'c1cfa2c6-4aec-4c99-907b-5063228c6cbd',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: 'f64e4662-e51e-464e-bed6-9742856a722d',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: '67076a38-3cdb-421c-a599-526defaaf714',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: 'dc9e558f-a5c6-4dec-87f5-f380086f6c07',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Long Range Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: '93be27db-9798-4fb3-9933-7cfe7cd93da5',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: '51ee448d-9438-4a51-906c-f233f32aecb8',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '9663f9e4-3f26-401d-b71f-c2e95108d276',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: 'eabda26c-c7da-445b-bee5-2da69563374c',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: 'e8af48dc-9c91-4327-95d9-c650779d115c',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Sturdy Mount',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: 'c50cd7de-245f-4f4c-8228-0bda930c6e13',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Specialised',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3aa962e3-48f8-4305-829a-717dbead2830',
    id: '37284c2a-c871-4b26-8cbd-e2c4a6a0b380',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Specialised',
    Engineers: ['Mel Brandon', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-16%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53d40533-967f-4792-b938-421f7a938540',
    id: '37db64f4-6b38-42c1-a768-be7cae256238',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Specialised',
    Engineers: ['Mel Brandon', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-24%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '-18%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '0648b687-cf76-4953-a531-7eca944ec325',
    id: '98d485cc-f8fa-490c-a0e5-6d619cd22bae',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Specialised',
    Engineers: ['Mel Brandon'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Yttrium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+25%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-32%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'd8d5c034-c10c-4de6-912d-dbc2937ee740',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: '04f9dfce-1e04-4f41-aa12-cf6e6d4bb3df',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: '4b5ae93d-5c6e-4e57-8778-fe469626e607',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: '194c7121-3472-46be-bed1-0d5ed638c47a',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: 'bffe7114-9ba9-4255-be63-cfbd13dc4578',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Long Range Weapon',
    Engineers: ['Etienne Dorn', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Shot Speed',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: '03103a77-1fca-4577-9ef3-54ff9b59b99d',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '30b0ad93-a13b-4c89-b852-3374d9ccb5eb',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: 'fcc69493-8772-42ef-9467-8760f02535c4',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: '11dad0e7-c29e-43d4-aed9-1cd42d6a6d29',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: 'd3e99596-b57c-42b1-a65f-488ecb2f07d4',
    type: 'Engineer',
  },
  {
    Type: 'Collector Limpet Controller',
    Name: 'Lightweight',
    Engineers: ['Marsha Hicks', 'Tiana Fortune', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: 'd640ede9-a89c-43da-b6d3-6fcdc742c5ce',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: '2e3bab71-3b3c-4716-b03f-e845f10793f2',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: 'ea9cf921-4c6c-435d-b6b4-ccc344d8f0f6',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: '51f943cd-7083-443b-8046-9dd4c0264b55',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: '3169e061-99ca-4e90-981a-0587d7c52cbb',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '9e8644a9-47e5-4e21-b270-bce7e6ed2c91',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '05883145-2407-46a1-9eea-5a56ac549cfd',
    id: 'ffa85955-7498-4524-8f2a-e6624d61b0fe',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+6%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5822ff0c-fa6c-4072-95be-e2534f37be00',
    id: '28a4faee-a68c-4e9e-9052-cfadc7a25e0b',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+9%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'd5040eac-fa75-4613-828d-ea71aefd9051',
    id: 'a4abe2b5-b27c-4c74-8031-71978cb71dd8',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+160%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '32c94fd6-71c3-461b-80ed-bfe1543f9651',
    id: '2dd1bdbb-df98-4500-b218-f1d286138c5a',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Shielded',
    Engineers: ['Etienne Dorn', 'The Dweller'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '1b073867-c10f-474b-88d7-5fb6c602b838',
    id: '44994569-1461-41c8-909f-534a6030dc6b',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Faster FSD Boot Sequence',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '23f08173-4d05-49d2-b126-d9e5ea5ee8b5',
    id: '8d989d1e-d5e1-473d-9ef0-4346b3a5e4a1',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Faster FSD Boot Sequence',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '56875992-02ae-4364-934c-88dbfda0cc57',
    id: 'be8fec1f-e8df-4652-8785-55be709b31ae',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Faster FSD Boot Sequence',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 1,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '80c84723-9c37-434b-890e-8723504e5e48',
    id: 'eb24ae81-78c9-455c-bca9-679b320c4e59',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Faster FSD Boot Sequence',
    Engineers: ['Mel Brandon', 'Felicity Farseer', 'Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3747180c-d798-4bc4-bb42-daecf44729cc',
    id: 'a1e5d016-c9c7-4b9d-8ec8-334ab4d64c13',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Faster FSD Boot Sequence',
    Engineers: ['Mel Brandon', 'Felicity Farseer', 'Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Tellurium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-80%',
        Property: 'Boot Time',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '1f542f8e-9c17-418d-af88-6f219596465e',
    id: 'df40fa7d-b7c5-4717-ab38-029ec99a0722',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: '8bdfe72b-f66d-49cc-97e6-879d8f9e7cb6',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: '160c50e2-834e-4bf8-be27-bee9c24770c2',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: '6a833ee7-9391-4f79-9eec-4335fa1316ca',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: 'd93e7bc6-4745-441b-91ae-0a3d49cb5e0f',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Overcharged Weapon',
    Engineers: ['Marsha Hicks', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '97d58785-794b-446e-be8b-7cb343e56229',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Shielded',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'ac3908c2-c5aa-44a1-a847-a9d27c34a326',
    id: '767dfa79-f5a6-467e-80cf-b4865ddd8551',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'ee1ad091-7a25-44ac-b3e4-9ee5e4228483',
    id: 'ddcfdaf9-954e-4ab9-a0bb-9c996d602470',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+180%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'eddd7f16-035d-4e9e-96fc-bf82e9ce7397',
    id: '0a6a9076-f14a-4487-96b6-e9db5521ec78',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+240%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '1fef7b64-bf77-4024-a9b4-24146d5cefe3',
    id: '05199392-65ac-489b-80c7-d6eb11378cf7',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Shielded',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'Core Dynamics Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'f6df4a5b-58f4-4854-843c-a99b2f106154',
    id: '03767362-81e8-4b27-8007-659d445949be',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: '10345ae1-bdda-4925-b53b-706df93cc4ad',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '89feb137-644a-48bc-88e2-21f6fc6637ed',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: '9a005d9c-c78e-4b4c-aca7-69aaf1fee075',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: 'e74ad25e-ff6c-4f37-b21c-a94062aabd36',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: '470f68d4-8099-49ac-bd3c-e976b69a74e6',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Shielded FSD',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+4%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '0bf46ac9-dfcd-49c3-bcef-db93ba04ed97',
    id: '8a677a21-3ae9-41c5-914d-ac45c50ef69a',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Shielded FSD',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '2858e680-b675-4ee9-9c24-04e8dd2bfe85',
    id: '179a0bb9-fab5-43b2-ad87-5c8c459519fe',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Shielded FSD',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Colonel Bris Dekker',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Shielding Sensors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '+75%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+12%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'f836e994-c19f-4ed0-926d-fbcc75f136c0',
    id: '650b4351-e28e-4858-a90d-472d741c3153',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Shielded FSD',
    Engineers: ['Mel Brandon', 'Felicity Farseer', 'Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+16%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fe30a1a0-3644-4411-af1f-59bae0a565b9',
    id: '40d29eba-95cb-4379-82a8-543165d02d88',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Shielded FSD',
    Engineers: ['Mel Brandon', 'Felicity Farseer', 'Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Imperial Shielding',
        Size: 1,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
      {
        Effect: '+125%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'eba5e423-bba4-40c1-aafb-e954881f9f2c',
    id: '0ee45a8c-e53b-4b51-8a07-eaac6ac119a0',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: 'dbd8652b-99a5-4029-a9fb-9e7d161bfcac',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: '1afcf30f-9770-4b2f-88d5-27727ece8f22',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '832c0e42-be1d-432d-b5cd-1e595d755595',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '20617aba-9278-40e8-af57-83a5a2e0c602',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Sturdy Mount',
    Engineers: ['Etienne Dorn', 'Tod McQuinn'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: '7f24a3d2-a28a-45cc-873b-f8d241ff0896',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+3%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '356d1457-e52f-4302-8af5-745e103b85e8',
    id: '95f80846-73ce-446a-b132-2e8fb12405ae',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+6%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '965e7108-73d5-4f26-95ab-2d261716a80c',
    id: '52051efa-008f-4604-9f50-47dfd121a24d',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+9%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '9d56f79f-9077-4391-8719-67e96c9613dd',
    id: '8c5ec1fc-3918-4ef8-9528-1cd62e015374',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'fbd49a72-d117-4e01-8485-d69b2267c803',
    id: '3f5d5b8a-1833-4b5e-bd3b-16be4b56a51b',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Long Range Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Maximum Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Damage Falloff Start',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0d08a432-cfcd-40a7-8000-74a0dee56812',
    id: 'b9088029-2a2b-4319-ba49-954b57d08e22',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Clean Drive Tuning',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+8%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '5b32dae1-7c4a-4760-8c48-0d9a9fa2758d',
    id: 'a1ecb009-9868-4a91-a093-f4664297d4a3',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Clean Drive Tuning',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+13%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '5382eecb-c840-4613-99c1-9bcbdb8d7760',
    id: 'b150a09e-f663-420e-9f05-f7913afc49a4',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Clean Drive Tuning',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Specialised Legacy Firmware',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-6%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+18%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '0c58a5c8-0bf9-4a2c-baf0-b14228f236df',
    id: 'e06fad73-a73d-49de-8cf2-7b0bad2f87c6',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Clean Drive Tuning',
    Engineers: ['Mel Brandon', 'Professor Palin', 'Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+23%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'afb2b22e-ab30-4195-8bfe-ae81ea6067f3',
    id: '914e800f-b731-40e6-80f6-3cb849b550c7',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Clean Drive Tuning',
    Engineers: ['Mel Brandon', 'Professor Palin', 'Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Abnormal Compact Emission Data',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-16%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Optimal Mass',
        IsGood: false,
      },
      {
        Effect: '+28%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '74e6e223-c709-4c91-88d5-c55f9dfdf722',
    id: '5f6db529-588e-4f16-8e5c-20e2866a665b',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: '5d714aef-8d94-4979-8f43-51c0d7292518',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '4d669220-3e42-49f8-9107-b911c7f02fe6',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: '7be36b1c-c246-4945-8b22-0dad62587018',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: 'd570e80e-fd02-4cc8-b188-854e26d4214a',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: 'cdff351f-fb8d-4d2e-9ca0-fba06e18b8de',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Kinetic Resistant Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'df87f0c1-bd60-4e18-8a03-76063d635235',
    id: 'c5f43909-b610-4214-88dc-9c2a649c1d52',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Kinetic Resistant Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b67f86a0-866c-4233-9cd3-f5ea87a572eb',
    id: 'ad740f15-ee90-4bdb-b5f2-03e7e0305ea2',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Kinetic Resistant Shields',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-9%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '93979fd6-d135-4221-9a60-c9354e02619f',
    id: '8f6c35b1-d668-428b-83c9-45a08cb772cc',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Kinetic Resistant Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Inconsistent Shield Soak Analysis',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '0e14c801-fd35-4bca-b97b-24da20d8c716',
    id: '95c2f104-5495-4d0d-940c-60a572905de7',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Kinetic Resistant Shields',
    Engineers: ['Mel Brandon', 'Lei Cheung'],
    Ingredients: [
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'dfdb4767-78e1-4e5f-ae1a-aeb6ae2748c9',
    id: 'f81ed721-e68f-4e77-beca-37629b3f5db2',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Blast Resistant',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'b6dd19e6-60e4-4307-a34f-c7e0e6182d44',
    id: '633b4c41-c8ce-41a6-a9ff-94f2b6b526e9',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Blast Resistant',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '3dd5f8fb-8399-4c4c-96d7-87c3840cfdeb',
    id: 'ad3c03e6-ff8a-44c1-ba5e-1269b2b3f6af',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Blast Resistant',
    Engineers: ['Mel Brandon', 'Lei Cheung', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-2%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+17%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '640409d8-6cb5-4624-b2b6-f435c9d8453b',
    id: '6eb45990-4ec3-447f-a9ee-802756640152',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Blast Resistant',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+22%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8a311709-54f6-4a5f-a1cc-94c109d947df',
    id: '84a68705-938d-41e2-a331-fec6323939de',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Blast Resistant',
    Engineers: ['Mel Brandon', 'Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 1,
      },
      {
        Name: 'Exquisite Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '+27%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4f120562-e421-4ed8-b0ed-0be8e27548bb',
    id: 'c3cece48-88a0-490d-9fda-d28a10d522df',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: '9241e715-2357-4f65-b423-b28bdadec376',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '57cdaf91-799c-487e-b9db-d2b817296769',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'bf5e159d-0e54-487c-9eb7-15874d95898f',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '805ca5d5-acd8-47f2-9d23-29b8f8f51558',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Lightweight Mount',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-90%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: '7d4bb67c-a73f-4293-986c-6941964e14fc',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Thermal Resistant',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '73c3a3c1-da09-4792-a1e9-d0161da6c0f2',
    id: '1e175a97-a66f-497a-8a04-201c26ea42fb',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Thermal Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-6%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+19%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-6%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f3096b56-d6d2-4aa5-a77c-98ce2adc79dc',
    id: 'c7feee75-67f9-4de1-9010-128fd16aaf80',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Thermal Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+26%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-8%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '1aa48c57-d187-4e82-aa88-8b4a7a4bc856',
    id: '2ffd9b2a-aaf1-4fce-9bc5-fe296e3078d0',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Thermal Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+33%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'afc78426-8570-4ad4-923a-794821c2506f',
    id: '17c6b292-762d-4ac4-8af1-f1f27f6c5b6e',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Thermal Resistant',
    Engineers: ['Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-12%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '12abc854-37c9-4f20-874d-dca8755e76fc',
    id: '4303a887-bc06-4cf3-a7b1-8e4429436f67',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3ac55eb7-0a45-440b-8c59-6ead43c7ef49',
    id: 'fd586a3a-b990-44a9-b003-f459c65a3375',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '53c131ab-cd66-4919-b49b-c1435362c8ff',
    id: 'e8c35274-194d-40e9-a154-6b6c238aaaf3',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Sturdy Mount',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Shield Emitters',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '2d1873d4-6d38-4d39-b4c5-ea199be2bd6a',
    id: '1439d2ec-6c5d-4a62-8897-85025a4b59c4',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+250%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f',
    id: '5f47bd94-913e-442f-aa44-9885705ad474',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Sturdy Mount',
    Engineers: ['Petra Olmanova', 'Liz Ryder'],
    Ingredients: [
      {
        Name: 'High Density Composites',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+300%',
        Property: 'Integrity',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Armour Piercing',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '53ab027e-1c5f-404b-82e3-0bc4c55c71af',
    id: 'd8a224eb-dfaf-49cb-8f06-74772693ddbd',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Lightweight',
    Engineers: ['Ram Tah', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-45%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'd5a539c5-120a-450f-bb68-e10abbeca8a9',
    id: 'b5a40547-6038-479a-9fc6-0eb90dd50192',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-56%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'b6a80556-c22a-466e-931c-239c208c9890',
    id: '591675a1-fb93-4061-b89b-07f1aaeea3d6',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'cbec8003-80e4-455a-84fe-257d2018386e',
    id: 'a820d524-461a-4a32-a981-264176115380',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-75%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '3a57effa-ccac-448d-8d1c-3e0966042e24',
    id: '36102d6d-c08e-4b89-9e2a-d99d54c0a21a',
    type: 'Engineer',
  },
  {
    Type: 'Chaff Launcher',
    Name: 'Lightweight',
    Engineers: ['Petra Olmanova', 'Ram Tah'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-85%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '89f5d8e2-4f4c-4ef0-9e74-9f0691244b22',
    id: 'b9dc1363-fb08-4ee3-9e69-0e7ec0742550',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+27%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Maximum Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '81dca970-1fbf-4017-af46-0c6285c3a728',
    id: '746657f5-57af-4d7b-9c14-a002140de48f',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+39%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'cf07de84-b794-43fd-a8b6-57ee781e9247',
    id: '2167abcc-03b2-4c5b-b490-8cadf4af05b5',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+51%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '7cd60cfe-e406-4005-a912-a306a69067e0',
    id: 'e2911ef0-14b0-4b74-b642-826a048e15c1',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+63%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'adae0f67-fd08-47d5-8870-f926cc63353f',
    id: '7606df58-60fe-4979-88b2-16bb3dee98af',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Short Range Blaster',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Biotech Conductors',
        Size: 1,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
      {
        Name: 'Cracked Industrial Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+75%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Maximum Range',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ccf0cfd9-6da2-4975-95fa-ea7f0ccda991',
    id: '642e203b-3d83-439c-acfa-a3aa0b82028e',
    type: 'Engineer',
  },
  {
    Type: 'Guardian Plasma Charger Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 3,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 2,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 3,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 4,
      },
    ],
    Grade: 1,
    id: 'b44fb5ce-bae2-46a2-bf22-636017dc376a',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Plasma Charger Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 4,
      },
      {
        Name: 'Heat Exchangers',
        Size: 2,
      },
      {
        Name: 'Phase Alloys',
        Size: 2,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 2,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 2,
      },
    ],
    Grade: 2,
    id: 'edfb219b-823b-431c-b563-bc68697cb85c',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Plasma Charger Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 6,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
      {
        Name: 'Heat Exchangers',
        Size: 4,
      },
      {
        Name: 'Phase Alloys',
        Size: 2,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 2,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 3,
      },
    ],
    Grade: 3,
    id: '974c8ead-26d1-4ff5-9d53-c8a540b89046',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Gauss Cannon Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 3,
      },
      {
        Name: 'Focus Crystals',
        Size: 2,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 3,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 4,
      },
    ],
    Grade: 1,
    id: '33050efe-2822-41df-baea-809fdc244999',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Gauss Cannon Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 4,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 3,
      },
    ],
    Grade: 2,
    id: '7ae583f8-999a-444c-8167-68be05a93b56',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Gauss Cannon Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 8,
      },
      {
        Name: 'Filament Composites',
        Size: 6,
      },
      {
        Name: 'Focus Crystals',
        Size: 10,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 6,
      },
    ],
    Grade: 3,
    id: '33458fca-ddcb-4582-ace8-aade014d1d72',
    type: 'Synthesis',
  },
  {
    Type: 'AX Small Calibre Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 2,
      },
      {
        Name: 'Weapon Parts',
        Size: 2,
      },
    ],
    Grade: 1,
    id: '81b4a938-c3ae-4a57-a2b8-40e302441334',
    type: 'Synthesis',
  },
  {
    Type: 'AX Small Calibre Munitions',
    Name: '+5% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Phosphorus',
        Size: 2,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
      {
        Name: 'Sensor Fragment',
        Size: 3,
      },
      {
        Name: 'Weapon Parts',
        Size: 4,
      },
    ],
    Grade: 2,
    id: '0e1b4a95-532c-4030-b47b-3a62e6551e4f',
    type: 'Synthesis',
  },
  {
    Type: 'AX Small Calibre Munitions',
    Name: '+10% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 3,
      },
      {
        Name: 'Phosphorus',
        Size: 2,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
      {
        Name: 'Sensor Fragment',
        Size: 4,
      },
      {
        Name: 'Thargoid Carapace',
        Size: 2,
      },
      {
        Name: 'Weapon Parts',
        Size: 6,
      },
    ],
    Grade: 3,
    id: 'b9592b2a-4051-4c2d-8dc9-84e6f322a4c0',
    type: 'Synthesis',
  },
  {
    Type: 'AX Remote Flak Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 4,
      },
      {
        Name: 'Carbon',
        Size: 3,
      },
      {
        Name: 'Sulphur',
        Size: 2,
      },
    ],
    Grade: 1,
    id: '828ef02a-5d11-4308-a55d-31fc2b2ee574',
    type: 'Synthesis',
  },
  {
    Type: 'AX Remote Flak Munitions',
    Name: '+5% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tin',
        Size: 2,
      },
      {
        Name: 'Zinc',
        Size: 3,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Thargoid Technological Components',
        Size: 3,
      },
      {
        Name: 'Wreckage Components',
        Size: 2,
      },
    ],
    Grade: 2,
    id: '8ff7eadc-6168-46f8-a496-0f6f6b3fe72b',
    type: 'Synthesis',
  },
  {
    Type: 'AX Remote Flak Munitions',
    Name: '+10% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Zinc',
        Size: 8,
      },
      {
        Name: 'Tungsten',
        Size: 2,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Sensor Fragment',
        Size: 3,
      },
      {
        Name: 'Thargoid Technological Components',
        Size: 4,
      },
      {
        Name: 'Wreckage Components',
        Size: 1,
      },
    ],
    Grade: 3,
    id: 'b5fb08fa-0363-41f6-bd5a-671266536040',
    type: 'Synthesis',
  },
  {
    Type: 'Enzyme Missile Launcher Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 3,
      },
      {
        Name: 'Sulphur',
        Size: 3,
      },
      {
        Name: 'Bio-Mechanical Conduits',
        Size: 4,
      },
      {
        Name: 'Propulsion Elements',
        Size: 3,
      },
      {
        Name: 'Weapon Parts',
        Size: 3,
      },
      {
        Name: 'Lead',
        Size: 2,
      },
    ],
    Grade: 1,
    id: 'bf6e57fa-5ab2-4e27-82b7-22a68ba5003b',
    type: 'Synthesis',
  },
  {
    Type: 'Enzyme Missile Launcher Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 6,
      },
      {
        Name: 'Tungsten',
        Size: 4,
      },
      {
        Name: 'Bio-Mechanical Conduits',
        Size: 5,
      },
      {
        Name: 'Propulsion Elements',
        Size: 6,
      },
      {
        Name: 'Weapon Parts',
        Size: 4,
      },
      {
        Name: 'Lead',
        Size: 4,
      },
    ],
    Grade: 2,
    id: 'd1b96c82-97ad-43f6-ad1a-9f9ef058147c',
    type: 'Synthesis',
  },
  {
    Type: 'Enzyme Missile Launcher Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Tungsten',
        Size: 4,
      },
      {
        Name: 'Bio-Mechanical Conduits',
        Size: 6,
      },
      {
        Name: 'Propulsion Elements',
        Size: 6,
      },
      {
        Name: 'Weapon Parts',
        Size: 5,
      },
      {
        Name: 'Lead',
        Size: 6,
      },
    ],
    Grade: 3,
    id: '6bc88bc8-20bf-4b1b-a37a-78deed0b3671',
    type: 'Synthesis',
  },
  {
    Type: 'Flechette Launcher Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 3,
      },
      {
        Name: 'Mechanical Components',
        Size: 2,
      },
      {
        Name: 'Boron',
        Size: 2,
      },
    ],
    Grade: 1,
    id: 'b26d867c-6367-4bf4-b984-e2f8d1551dea',
    type: 'Synthesis',
  },
  {
    Type: 'Flechette Launcher Munitions',
    Name: '+5% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 4,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 6,
      },
      {
        Name: 'Mechanical Components',
        Size: 4,
      },
      {
        Name: 'Boron',
        Size: 4,
      },
    ],
    Grade: 2,
    id: '4a6f7dad-bd66-4af2-8c5e-1458a64ec651',
    type: 'Synthesis',
  },
  {
    Type: 'Flechette Launcher Munitions',
    Name: '+10% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 6,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 9,
      },
      {
        Name: 'Mechanical Components',
        Size: 5,
      },
      {
        Name: 'Boron',
        Size: 6,
      },
    ],
    Grade: 3,
    id: 'd60b612d-ac88-42ee-8ec0-07fdda96efdd',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Shard Cannon Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 3,
      },
      {
        Name: 'Vanadium',
        Size: 2,
      },
      {
        Name: 'Crystal Shards',
        Size: 3,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 3,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 5,
      },
    ],
    Grade: 1,
    id: '6f027dbb-29cf-40a5-8ca8-45e0465b1bf8',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Shard Cannon Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Crystal Shards',
        Size: 4,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 2,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 2,
      },
    ],
    Grade: 2,
    id: 'bb78fe96-d1bb-4b3b-a1a3-e7e537d32329',
    type: 'Synthesis',
  },
  {
    Type: 'Guardian Shard Cannon Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 8,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 6,
      },
      {
        Name: 'Vanadium',
        Size: 4,
      },
      {
        Name: 'Crystal Shards',
        Size: 8,
      },
    ],
    Grade: 3,
    id: '20bea912-3833-41dd-aa0c-aa35ef18a844',
    type: 'Synthesis',
  },
  {
    Type: 'AX Explosive Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 4,
      },
      {
        Name: 'Iron',
        Size: 3,
      },
      {
        Name: 'Nickel',
        Size: 3,
      },
      {
        Name: 'Propulsion Elements',
        Size: 3,
      },
    ],
    Grade: 1,
    id: '0b96686e-f030-49d5-a4f3-7236a582de9d',
    type: 'Synthesis',
  },
  {
    Type: 'AX Explosive Munitions',
    Name: '+5% Damage',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 6,
      },
      {
        Name: 'Phosphorus',
        Size: 6,
      },
      {
        Name: 'Mercury',
        Size: 2,
      },
      {
        Name: 'Propulsion Elements',
        Size: 4,
      },
      {
        Name: 'Thargoid Organic Circuitry',
        Size: 4,
      },
    ],
    Grade: 2,
    id: 'c1765c9b-999c-49bf-a996-d25cdc037e44',
    type: 'Synthesis',
  },
  {
    Type: 'AX Explosive Munitions',
    Name: '+10% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 5,
      },
      {
        Name: 'Mercury',
        Size: 4,
      },
      {
        Name: 'Bio-Mechanical Conduits',
        Size: 5,
      },
      {
        Name: 'Polonium',
        Size: 2,
      },
      {
        Name: 'Propulsion Elements',
        Size: 5,
      },
      {
        Name: 'Ship Flight Data',
        Size: 6,
      },
    ],
    Grade: 3,
    id: '36892ddf-0d14-467a-8983-1cfdf95eef33',
    type: 'Synthesis',
  },
  {
    Type: 'Life Support',
    Name: '100% Refill',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '454a9595-5c5b-466f-ae7b-3ef6eac7198f',
    type: 'Synthesis',
  },
  {
    Type: 'Limpets',
    Name: '4 Limpets, Cargo Hold Required',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 10,
      },
      {
        Name: 'Nickel',
        Size: 10,
      },
    ],
    Grade: 1,
    id: 'e9725794-ebea-4dd7-be69-6d93393407f8',
    type: 'Synthesis',
  },
  {
    Type: 'Chaff Launcher',
    Name: '50% Refill',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 1,
      },
      {
        Name: 'Filament Composites',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '6dc030b8-c472-4898-b288-c57f19ca134d',
    type: 'Synthesis',
  },
  {
    Type: 'Chaff Launcher',
    Name: '100% Refill',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 1,
      },
      {
        Name: 'Filament Composites',
        Size: 2,
      },
      {
        Name: 'Thermic Alloys',
        Size: 1,
      },
    ],
    Grade: 2,
    id: 'b6b6339d-f088-4822-8061-1fdad067c5f7',
    type: 'Synthesis',
  },
  {
    Type: 'Chaff Launcher',
    Name: '100% Refill, +2 Seconds Duration',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 1,
      },
      {
        Name: 'Filament Composites',
        Size: 2,
      },
      {
        Name: 'Thermic Alloys',
        Size: 2,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Grade: 3,
    id: '9a4c54af-c194-4804-a5c4-8106ba001b87',
    type: 'Synthesis',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: '100% Refill',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Basic Conductors',
        Size: 2,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 2,
      },
    ],
    Grade: 1,
    id: '0b670436-0ca8-41bc-9e91-52edde6e5c88',
    type: 'Synthesis',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: '100% Refill, +15% Heat Dissipation',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Basic Conductors',
        Size: 2,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 2,
      },
      {
        Name: 'Heat Exchangers',
        Size: 2,
      },
    ],
    Grade: 2,
    id: '0d5fbead-e82e-4ec3-9daf-2280dc70cf92',
    type: 'Synthesis',
  },
  {
    Type: 'Heat Sink Launcher',
    Name: '100% Refill, +30% Heat Dissipation',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Basic Conductors',
        Size: 2,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 2,
      },
      {
        Name: 'Heat Exchangers',
        Size: 2,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
    ],
    Grade: 3,
    id: '62083c62-b77b-4514-b967-ed61bd70dacc',
    type: 'Synthesis',
  },
  {
    Type: 'FSD Injection',
    Name: '+25% Jump Range',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '936bd0d2-bac6-4a44-90a0-6a238a52ce1f',
    type: 'Synthesis',
  },
  {
    Type: 'FSD Injection',
    Name: '+50% Jump Range',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
    ],
    Grade: 2,
    id: 'f6c2ab94-be72-4d93-ad6a-8b457c79c965',
    type: 'Synthesis',
  },
  {
    Type: 'FSD Injection',
    Name: '+100% Jump Range',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Yttrium',
        Size: 1,
      },
      {
        Name: 'Polonium',
        Size: 1,
      },
    ],
    Grade: 3,
    id: 'd1cb8603-e980-4dbd-a319-4d664edeb29a',
    type: 'Synthesis',
  },
  {
    Type: 'Plasma Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 3,
      },
      {
        Name: 'Phosphorus',
        Size: 4,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '03f7b87c-9efc-4a70-b370-822229aff4dd',
    type: 'Synthesis',
  },
  {
    Type: 'Plasma Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Manganese',
        Size: 3,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 4,
      },
    ],
    Grade: 2,
    id: 'd449adf1-e614-4beb-b42c-6d39274b79c7',
    type: 'Synthesis',
  },
  {
    Type: 'Plasma Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Selenium',
        Size: 5,
      },
      {
        Name: 'Cadmium',
        Size: 4,
      },
      {
        Name: 'Molybdenum',
        Size: 4,
      },
      {
        Name: 'Technetium',
        Size: 2,
      },
    ],
    Grade: 3,
    id: '17d7726e-d346-45c5-98b6-a87879300150',
    type: 'Synthesis',
  },
  {
    Type: 'Explosive Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 3,
      },
      {
        Name: 'Nickel',
        Size: 3,
      },
      {
        Name: 'Carbon',
        Size: 4,
      },
      {
        Name: 'Sulphur',
        Size: 4,
      },
    ],
    Grade: 1,
    id: '1a149b6b-150f-4e1b-ac5a-b9e3a6ac8883',
    type: 'Synthesis',
  },
  {
    Type: 'Explosive Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 6,
      },
      {
        Name: 'Phosphorus',
        Size: 6,
      },
      {
        Name: 'Arsenic',
        Size: 4,
      },
      {
        Name: 'Mercury',
        Size: 2,
      },
    ],
    Grade: 2,
    id: '94a1a5ac-b51c-4ae7-a01a-8a7d2770c895',
    type: 'Synthesis',
  },
  {
    Type: 'Explosive Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Arsenic',
        Size: 4,
      },
      {
        Name: 'Niobium',
        Size: 5,
      },
      {
        Name: 'Mercury',
        Size: 5,
      },
      {
        Name: 'Polonium',
        Size: 5,
      },
    ],
    Grade: 3,
    id: '6f54f982-6e0d-41f9-adae-02cd17d8119e',
    type: 'Synthesis',
  },
  {
    Type: 'Small Calibre Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 2,
      },
    ],
    Grade: 1,
    id: '00cd0e8f-728e-4b70-87a3-e81d6e5d72df',
    type: 'Synthesis',
  },
  {
    Type: 'Small Calibre Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Zinc',
        Size: 2,
      },
      {
        Name: 'Phosphorus',
        Size: 2,
      },
      {
        Name: 'Selenium',
        Size: 2,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
    ],
    Grade: 2,
    id: '4dff1d2b-09c8-435b-9b5a-6641e06d0623',
    type: 'Synthesis',
  },
  {
    Type: 'Small Calibre Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 2,
      },
      {
        Name: 'Phosphorus',
        Size: 2,
      },
      {
        Name: 'Tungsten',
        Size: 2,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
      {
        Name: 'Mercury',
        Size: 2,
      },
      {
        Name: 'Antimony',
        Size: 1,
      },
    ],
    Grade: 3,
    id: '7960f6b6-b5b2-4a60-99b2-99d6e396b493',
    type: 'Synthesis',
  },
  {
    Type: 'High Velocity Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Vanadium',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '7dd4b943-dd4b-40e6-8a1e-51709c0990a4',
    type: 'Synthesis',
  },
  {
    Type: 'High Velocity Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 4,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 2,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
    ],
    Grade: 2,
    id: 'a17c175b-d20a-4c66-8983-923e21e3e4f9',
    type: 'Synthesis',
  },
  {
    Type: 'High Velocity Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 4,
      },
      {
        Name: 'Tungsten',
        Size: 4,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
      {
        Name: 'Yttrium',
        Size: 2,
      },
    ],
    Grade: 3,
    id: '122ff74d-e86c-4f67-8e1f-0a693769dd72',
    type: 'Synthesis',
  },
  {
    Type: 'Large Calibre Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 4,
      },
      {
        Name: 'Carbon',
        Size: 3,
      },
      {
        Name: 'Sulphur',
        Size: 2,
      },
    ],
    Grade: 1,
    id: '6c63a580-dee3-42f3-bd37-9dfe639cddb2',
    type: 'Synthesis',
  },
  {
    Type: 'Large Calibre Munitions',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tin',
        Size: 2,
      },
      {
        Name: 'Phosphorus',
        Size: 3,
      },
      {
        Name: 'Zinc',
        Size: 3,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
    ],
    Grade: 2,
    id: '83222def-f478-412b-b5ab-395e154d9ade',
    type: 'Synthesis',
  },
  {
    Type: 'Large Calibre Munitions',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Zinc',
        Size: 8,
      },
      {
        Name: 'Tungsten',
        Size: 2,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
      {
        Name: 'Antimony',
        Size: 2,
      },
    ],
    Grade: 3,
    id: 'af4de309-c5f3-4e9c-8b46-5bbdac279147',
    type: 'Synthesis',
  },
  {
    Type: 'Shock Cannon Munitions',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 3,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 2,
      },
      {
        Name: 'Focus Crystals',
        Size: 2,
      },
      {
        Name: 'Phase Alloys',
        Size: 2,
      },
      {
        Name: 'Lead',
        Size: 2,
      },
    ],
    Grade: 1,
    id: '6ac77218-66a8-497a-8b01-40834bfbc4d8',
    type: 'Synthesis',
  },
  {
    Type: 'Shock Cannon Munitions',
    Name: '+5% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 3,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Phase Alloys',
        Size: 5,
      },
      {
        Name: 'Lead',
        Size: 3,
      },
    ],
    Grade: 2,
    id: 'e3e3b159-51a8-49f3-a216-4a74ed3e52df',
    type: 'Synthesis',
  },
  {
    Type: 'Shock Cannon Munitions',
    Name: '+10% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 7,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 4,
      },
      {
        Name: 'Focus Crystals',
        Size: 6,
      },
      {
        Name: 'Phase Alloys',
        Size: 8,
      },
      {
        Name: 'Lead',
        Size: 5,
      },
    ],
    Grade: 3,
    id: '59311c07-0d67-4d16-8228-8b0da73926bf',
    type: 'Synthesis',
  },
  {
    Type: 'AFM Refill',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 2,
      },
      {
        Name: 'Zinc',
        Size: 2,
      },
      {
        Name: 'Chromium',
        Size: 2,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Grade: 1,
    id: 'bf7c6524-28dc-4e9e-b692-de13ffc6377d',
    type: 'Synthesis',
  },
  {
    Type: 'AFM Refill',
    Name: '+50% Repair Speed',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 2,
      },
      {
        Name: 'Vanadium',
        Size: 6,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Grade: 2,
    id: 'c6f7d463-b648-4ca3-b0ee-5f133119a09d',
    type: 'Synthesis',
  },
  {
    Type: 'AFM Refill',
    Name: '+100% Repair Speed',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Zinc',
        Size: 2,
      },
      {
        Name: 'Chromium',
        Size: 4,
      },
      {
        Name: 'Vanadium',
        Size: 6,
      },
      {
        Name: 'Zirconium',
        Size: 2,
      },
      {
        Name: 'Tellurium',
        Size: 1,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Grade: 3,
    id: 'b48727b8-bc8a-4365-958e-9f7d424c3bb6',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Ammo Restock',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 2,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Grade: 1,
    id: 'cc31000e-f3ff-4cd2-aec5-58b71c2e68fe',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Ammo Restock',
    Name: '+15% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
    ],
    Grade: 2,
    id: '9fa5805f-9e28-4ffc-9877-3a7958edd28a',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Ammo Restock',
    Name: '+30% Damage Boost',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 2,
      },
      {
        Name: 'Selenium',
        Size: 2,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Grade: 3,
    id: '23cc033f-9629-4536-acac-236f5b6cdc4f',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Repair',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 2,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '95926c93-0612-4b25-9b8e-02e50c42f5de',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Repair',
    Name: '+50% Hull Strength',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 3,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Vanadium',
        Size: 2,
      },
      {
        Name: 'Molybdenum',
        Size: 1,
      },
    ],
    Grade: 2,
    id: 'aa0875d6-b8a9-43f3-ae0c-e645ae76646e',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Repair',
    Name: '+100% Hull Strength',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Zinc',
        Size: 1,
      },
      {
        Name: 'Chromium',
        Size: 2,
      },
      {
        Name: 'Vanadium',
        Size: 2,
      },
      {
        Name: 'Tungsten',
        Size: 1,
      },
      {
        Name: 'Tellurium',
        Size: 1,
      },
    ],
    Grade: 3,
    id: '3575aaee-20f1-424c-9998-076cd6252556',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Refuel',
    Name: 'None',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Grade: 1,
    id: '59e78fb4-b7c3-40ca-81f5-288336ce47ca',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Refuel',
    Name: '+100% Fuel Efficiency',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
    ],
    Grade: 2,
    id: '09985dd8-c390-4e8e-876a-1c1d69d4d142',
    type: 'Synthesis',
  },
  {
    Type: 'SRV Refuel',
    Name: '+200% Fuel Efficiency',
    Engineers: ['@Synthesis'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Mercury',
        Size: 1,
      },
      {
        Name: 'Technetium',
        Size: 1,
      },
    ],
    Grade: 3,
    id: 'cc4a1a4e-7f29-4e94-8a2a-677b9f8e43c0',
    type: 'Synthesis',
  },
  {
    Type: 'Beam Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-38%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '3fbcc9dc-169a-4cd3-b945-cedc55882cd3',
    id: '6e62a664-a5ef-48b7-9659-7697a4911f5a',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 1,
      },
      {
        Name: 'Sulphur',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+12%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-12%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-15%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-43%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a35a0c80-784d-4125-b858-fdee45750269',
    id: '2d339b34-6dc2-488c-b4d3-181e8f2e1548',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Chromium',
        Size: 1,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 1,
      },
      {
        Name: 'Heat Exchangers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+16%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-24%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-25%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'a429328b-11f4-402d-9909-2c6190505966',
    id: '1626b057-8fcb-44ab-842d-278688f04368',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 1,
      },
      {
        Name: 'Selenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-36%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-35%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-53%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '8c364495-468c-4ab1-9baf-079917a6cf9a',
    id: 'b56e7196-22f5-4542-ac14-6c87550d9583',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Efficient Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Cadmium',
        Size: 1,
      },
      {
        Name: 'Proto Heat Radiators',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+24%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '-48%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-45%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-60%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '5ac92753-1c19-4ae8-8b12-c6f130bda4a5',
    id: '33f528d2-3479-461e-b45d-24d5e41691f8',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'e917ebe3-d5f1-4016-b8a9-2c759e16a7d4',
    id: 'fab6da47-22de-4bff-94e2-3f5552336795',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84',
    id: 'bb913313-6287-4d2e-bef5-ab373136b55c',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Nickel',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+9%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4389883f-c2b3-4487-9b1a-b668a761057a',
    id: 'c915dce1-a002-4e34-88eb-fe0f3ff75eb1',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+60%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+12%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '25ec26dd-63b8-4e83-9a6e-86e5b80c4771',
    id: '8af064ae-616c-45b2-a8e4-28898e5e2670',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Overcharged Weapon',
    Engineers: ['Mel Brandon', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+70%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '+35%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '4dcf6bdc-bcff-448a-92a0-7612de548db7',
    id: '632acbe9-d093-409d-92db-1abd67ecdcdb',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Long Range Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Tiana Fortune',
      'Hera Tani',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+15%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '92c755ae-690b-442c-bacd-606575987f22',
    id: '92419beb-dd59-466c-901a-c96d21e27123',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Long Range Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Tiana Fortune',
      'Hera Tani',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+30%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '40167259-2960-4072-a135-cba93c87709d',
    id: '06844c90-534d-4d17-aeeb-329a039000c1',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Long Range Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Hera Tani',
      'Lei Cheung',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+45%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '6d422ca1-ebdd-4c87-b2b2-056e36c0cbfb',
    id: '820f9657-e5c2-47fa-abe8-c340d38d461d',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Long Range Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6b09d91f-919f-4a3a-9900-850b026ab01c',
    id: '1362c820-c1f9-46ae-8f52-7010261f5310',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Long Range Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Abnormal Compact Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+75%',
        Property: 'Range',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'c055cafb-3e8a-4415-8e9b-cfa8be809b75',
    id: 'ee0e885c-5eba-42d5-b8f3-6e678e0d69cc',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Wide Angle Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Tiana Fortune',
      'Hera Tani',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-4%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '996dc047-9f07-47a6-8b05-3283ce666fa7',
    id: 'cc08e573-1af9-431a-b678-f5169338c791',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Wide Angle Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Tiana Fortune',
      'Hera Tani',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-8%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '0855a023-3a25-44c1-84fa-c6e4e8ac3384',
    id: '2a5d37b3-9ad7-41a6-ac2e-bbf4a733d438',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Wide Angle Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Hera Tani',
      'Lei Cheung',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-12%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '06908f4d-30e8-448f-9652-5051a79713f3',
    id: 'b8b31c83-7e48-424c-a1e3-85fbb13da1ac',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Wide Angle Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Divergent Scan Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+160%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-16%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'af874bae-07c3-457a-b525-baeb771b3d72',
    id: '2a0dd782-85f1-499c-bbce-85f77bc979cb',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Wide Angle Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Classified Scan Fragment',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Range',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '1368129e-942e-452e-8228-8a3622dc72a1',
    id: '29e3431a-27c0-4ee9-889e-199f8ff6f564',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Light Weight Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Tiana Fortune',
      'Hera Tani',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '239cd942-3298-4be0-b032-143961c801a1',
    id: '65b50888-2932-4eae-a52f-30a20a42212c',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Light Weight Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Tiana Fortune',
      'Hera Tani',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '8dd41f78-c4f0-4107-a1fe-d1eee78bbd23',
    id: 'a3dc8d05-7a61-4169-88c3-b6ed0805d9b8',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Light Weight Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Hera Tani',
      'Lei Cheung',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 1,
      },
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'd51697d0-c837-4c0d-a6af-f192ace27e9a',
    id: '88813c28-ee5f-4980-a69c-da07cf51e5b1',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Light Weight Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Bill Turner',
      'Juri Ishmaak',
      'Tiana Fortune',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '01ccf913-c1cb-47a6-9515-1d2ee3e3b2ae',
    id: 'b323323b-752b-4fc7-8fe6-c3d12b0afa94',
    type: 'Engineer',
  },
  {
    Type: 'Sensors',
    Name: 'Light Weight Scanner',
    Engineers: [
      'Etienne Dorn',
      'Lori Jameson',
      'Juri Ishmaak',
      'Bill Turner',
      'Tiana Fortune',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Conductive Ceramics',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-80%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '93c0ae86-d3ac-40c5-9ef3-b65c14d53cf6',
    id: '0f9ec3d8-17ba-4a6d-b4a4-726cbfecd1e7',
    type: 'Engineer',
  },
  {
    Type: 'Surface Scanner',
    Name: 'Expanded Probe Scanning Radius',
    Engineers: [
      'Etienne Dorn',
      'Bill Turner',
      'Juri Ishmaak',
      'Lei Cheung',
      'Lori Jameson',
      'Tiana Fortune',
      'Felicity Farseer',
      'Hera Tani',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Probe Radius',
        IsGood: true,
      },
    ],
    Grade: 1,
    id: 'db9e8eb1-ee1f-4c53-b64e-2348b36ace57',
    type: 'Engineer',
  },
  {
    Type: 'Surface Scanner',
    Name: 'Expanded Probe Scanning Radius',
    Engineers: [
      'Etienne Dorn',
      'Bill Turner',
      'Juri Ishmaak',
      'Hera Tani',
      'Lei Cheung',
      'Lori Jameson',
      'Tiana Fortune',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Probe Radius',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'c1cf2b72-b0a0-48e1-8216-85ad6fbdaf23',
    type: 'Engineer',
  },
  {
    Type: 'Surface Scanner',
    Name: 'Expanded Probe Scanning Radius',
    Engineers: [
      'Etienne Dorn',
      'Bill Turner',
      'Juri Ishmaak',
      'Lori Jameson',
      'Tiana Fortune',
      'Hera Tani',
      'Lei Cheung',
      'Felicity Farseer',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Probe Radius',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '7a62fa5b-1840-4fac-b1fa-9d0222bff783',
    type: 'Engineer',
  },
  {
    Type: 'Surface Scanner',
    Name: 'Expanded Probe Scanning Radius',
    Engineers: [
      'Etienne Dorn',
      'Bill Turner',
      'Juri Ishmaak',
      'Lori Jameson',
      'Hera Tani',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Probe Radius',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '40f5fc36-882d-44e0-87a1-4b981cb5d291',
    type: 'Engineer',
  },
  {
    Type: 'Surface Scanner',
    Name: 'Expanded Probe Scanning Radius',
    Engineers: [
      'Etienne Dorn',
      'Bill Turner',
      'Juri Ishmaak',
      'Lori Jameson',
      'Hera Tani',
      'Lei Cheung',
    ],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Proto Radiolic Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Probe Radius',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '38931fc0-2f17-43e1-85ed-0de04495a29a',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+24%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '1b566f8d-56ef-4b11-bb06-1fd9c603ab1c',
    id: '6d2c7c06-489e-4196-91dd-b94467dcb8fc',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+48%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '9371ee9f-12a1-4859-9b97-e3c3c87ee0a0',
    id: '26d305b8-ba01-4a79-a0eb-aa875092fcba',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+72%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '317bbfd2-7b05-4f7a-b6ca-55e0a7d3f147',
    id: 'cc2a7615-777c-4ca4-9915-f35db0b02e11',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+96%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '5e3ac270-69ef-4301-9e86-8c9cbc5ada89',
    id: 'd68e3afd-5178-4c7a-b804-c0f67a9649bf',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Abnormal Compact Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '993b050e-b308-4010-8ba6-58e08483793d',
    id: '06e80796-cf17-4232-8add-21e5ee933f75',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'c034e952-985f-4b04-9d9e-bec4ddc50171',
    id: '06021fdb-3483-4247-99de-58921a8ed190',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2dee450-a617-4740-9af9-57cf2ea7de4f',
    id: '5ff41f89-7c91-4491-9752-49cf87ed6946',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '181cd2e3-ef3c-4939-b5b9-f6b21090d920',
    id: 'e985d846-d810-41c8-9201-07fac12ff6a9',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Divergent Scan Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+160%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'a93247e8-cbce-4026-9640-6137934614c9',
    id: 'e577df29-e7e2-4c6e-afca-ff514053d315',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Classified Scan Fragment',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '9f6b1226-d7b9-4bcd-b60d-9e8227be79f2',
    id: '414ec218-4a33-4412-934b-fe0f3597c6bd',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '8e2046eb-06bf-44e4-8fad-981f24d68340',
    id: 'be70fcea-d49d-4cc5-8333-ff6b9fb1bc94',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '953bcfbf-a46d-45e2-90c7-f727e641edc3',
    id: '0756feea-a681-4bab-ad9f-af844bcc9713',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Open Symmetric Keys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'bed8bdc6-ef45-450e-aa7f-802cea642b2d',
    id: '77970b5e-4a66-40a2-862c-eafbcf2c2dc0',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Atypical Encryption Archives',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '610ba60e-d0e3-42c2-9269-c67bafb25546',
    id: '6ad93663-e9ad-424c-9403-0a8faecf9ca9',
    type: 'Engineer',
  },
  {
    Type: 'Manifest Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Adaptive Encryptors Capture',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-80%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: '64b8d29d-de5c-4b50-bd77-ae7cb3c78ed6',
    id: '0e8292a0-a39d-483f-acf3-318371e1e7e8',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+24%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '2689c846-02d7-4694-97f1-85cd5437b42f',
    id: 'c3aa9b4d-0147-4736-86f8-5dde0cbe69db',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+48%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'c2160767-b03f-491e-9a45-31976fb78899',
    id: '61bbe795-fbac-40e9-9f9c-6ca50ae90ec1',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+72%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '4d9ccdb6-89cc-4f27-a8c8-584de68dae4b',
    id: 'add3dada-601f-4183-ae4a-2435c43720b2',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+96%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '0ecb3bee-4033-4937-a5ed-161f50cb6024',
    id: '6dcaa543-7c59-40cb-8a3a-a99f365099bb',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Abnormal Compact Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '8ec2cbd4-b944-448b-b230-d9de87aea5b8',
    id: '4a050b8e-c6de-4107-9327-16d8473340b5',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '69ee982f-f925-4e0a-a7a8-cc52ff9bc295',
    id: '2769f416-8551-407d-ad46-fbd3feabdf09',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '3f0b3cbd-3acf-4a49-a176-6ceb02b958f9',
    id: 'fdaff99d-f71f-4f13-8af6-115c50c53d88',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '5c378d56-97f7-4a75-b113-7e6bc846d53f',
    id: '77f779ef-cedc-4177-a8fa-7f60ab73003c',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Divergent Scan Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+160%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '887d9bb6-422f-42ce-8a21-22d1f43a7f64',
    id: '49aa8fe7-5b69-4396-90b0-b8f82b794b0f',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Classified Scan Fragment',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '0f0f8c7e-e9d4-4264-88a6-668372ad9d47',
    id: '94ddf62e-cf6a-4f98-807a-0ff0a002a0e3',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: '37c2d07b-fa12-4ad2-a1cb-a1c9c5cdb348',
    id: 'ae0f8df5-986e-4bea-98b1-cc5d5367a22b',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: 'a375ac53-e245-4364-8d8a-389e247bc74d',
    id: 'f4f0a3ae-a3e7-4986-9259-46d55e38750f',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Open Symmetric Keys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '472ebde0-72d0-4ec1-beda-11cbcbad13f9',
    id: '036feaae-bbe6-444d-9874-b42f601bcce6',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Atypical Encryption Archives',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '6d8d3ba8-46b3-4482-a65d-b1c6663c543b',
    id: 'bccc8c9f-7636-4710-8932-6b213aef6402',
    type: 'Engineer',
  },
  {
    Type: 'Kill Warrant Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Adaptive Encryptors Capture',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-80%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'fb2433bb-5493-43d8-a1ec-e57e43951751',
    id: '1c1d9097-00fd-4052-b9ec-f7f0fb8fcdd3',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+24%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '11521a5e-0b00-4efe-9433-b0d4b5168c11',
    id: '3e21033e-4a0d-4fce-b2e9-7fa252515e04',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-15%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+48%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '16235231-561b-4efb-a9bc-dcacb18b5651',
    id: '25ab7da4-f55b-447f-90e9-8ab253cf2249',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 1,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 1,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+72%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: '8dcbfbd5-748e-46ee-b179-4e2d213e518c',
    id: 'f9d228f4-9e20-4fb6-8d0e-fad2d526db20',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 1,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-25%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+96%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: '44a348b1-979f-498e-bf61-22b38cb6f53b',
    id: '74db8f50-a10d-4cf1-8a8b-d72eaef60928',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Long Range Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
      {
        Name: 'Abnormal Compact Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Scan Angle',
        IsGood: false,
      },
      {
        Effect: '+120%',
        Property: 'Scan Range',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Power Draw',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'ee756b0e-c36f-4ea5-a46b-13291522feea',
    id: 'dc395859-ff06-4aa4-8c7b-9ef5b9b63117',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+40%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+20%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 1,
    CoriolisGuid: '1b76dc7a-d52c-4cdd-93c6-6857f509519b',
    id: '4ec18d49-3108-449d-b4a2-b96d47dfd55f',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+80%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+20%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+40%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 2,
    CoriolisGuid: '9e143db0-83e9-49ff-ba53-04927287190b',
    id: '4300294d-660c-4052-9398-e06b7f6bcc33',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 1,
      },
      {
        Name: 'Germanium',
        Size: 1,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+120%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+30%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+60%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 3,
    CoriolisGuid: 'd2b0776c-9e74-4fe9-be1c-e49e104dcad6',
    id: '540b772b-7ced-4632-aafa-442360a3b712',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 1,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
      {
        Name: 'Divergent Scan Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+160%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+40%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+80%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 4,
    CoriolisGuid: 'a00e7425-0828-41ea-9e11-e44bc391dd6f',
    id: '0ef18ce7-7520-402b-a294-e05b268f9928',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Wide Angle Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 1,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
      {
        Name: 'Classified Scan Fragment',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+200%',
        Property: 'Scan Angle',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Scan Time',
        IsGood: false,
      },
      {
        Effect: '+100%',
        Property: 'Mass',
        IsGood: false,
      },
    ],
    Grade: 5,
    CoriolisGuid: '7835c40b-1612-49ac-9a41-230cfff63daa',
    id: 'af594806-e2cc-4525-b76a-f74fda3155e8',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-5%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 1,
    CoriolisGuid: 'c7abe4af-26f0-460c-8df7-71412f12d5f8',
    id: 'fc2311e1-2594-4181-bd31-89c0dbe4f058',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-35%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 2,
    CoriolisGuid: '940b832d-2dac-4671-9ada-4bede831342e',
    id: 'fe4d664e-5ad6-4afa-8ce5-0e118c183565',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune', 'Bill Turner', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 1,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Open Symmetric Keys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-30%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-15%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 3,
    CoriolisGuid: '223a0854-036f-495d-afa1-69253f2b87c3',
    id: 'e32a1c57-268d-42d2-a860-0f5e95d0cad0',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Manganese',
        Size: 1,
      },
      {
        Name: 'Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Atypical Encryption Archives',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-40%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-65%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 4,
    CoriolisGuid: '992ffcbe-26c5-4f41-bc2d-81bb6565ac27',
    id: 'a633ad13-01a0-4b98-8c7f-92a4382d4245',
    type: 'Engineer',
  },
  {
    Type: 'Wake Scanner',
    Name: 'Fast Scanner',
    Engineers: ['Etienne Dorn', 'Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Arsenic',
        Size: 1,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 1,
      },
      {
        Name: 'Adaptive Encryptors Capture',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-50%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '-25%',
        Property: 'Scan Range',
        IsGood: false,
      },
      {
        Effect: '-80%',
        Property: 'Scan Time',
        IsGood: true,
      },
    ],
    Grade: 5,
    CoriolisGuid: 'd2af32a6-ffdb-4c28-89ee-88f331e678d3',
    id: '6a9d0252-1f58-4eef-bb27-79dc1e33a656',
    type: 'Engineer',
  },
  {
    Type: 'Unlock',
    Name: 'The Sarge',
    Engineers: ['The Sarge'],
    Ingredients: [
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 50,
      },
    ],
    id: '2961b9b2-5998-4204-b2f3-bb1f033a25fa',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Bill Turner',
    Engineers: ['Bill Turner'],
    Ingredients: [
      {
        Name: 'Bromellite',
        Size: 50,
      },
    ],
    id: '3a6cba17-b828-43aa-8e4b-26889e925ba0',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Ram Tah',
    Engineers: ['Ram Tah'],
    Ingredients: [
      {
        Name: 'Classified Scan Databanks',
        Size: 50,
      },
    ],
    id: 'aeaafdd6-9eb2-4a44-8dcc-85cf38a7b05a',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Tiana Fortune',
    Engineers: ['Tiana Fortune'],
    Ingredients: [
      {
        Name: 'Decoded Emission Data',
        Size: 50,
      },
    ],
    id: '86660bf5-6e34-4184-979d-d750806c1f41',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Marco Qwent',
    Engineers: ['Marco Qwent'],
    Ingredients: [
      {
        Name: 'Modular Terminals',
        Size: 25,
      },
    ],
    id: '21846539-75bb-456a-8a9f-e6ff87d23d7e',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Felicity Farseer',
    Engineers: ['Felicity Farseer'],
    Ingredients: [
      {
        Name: 'Meta-alloys',
        Size: 1,
      },
    ],
    id: 'ea93581d-b9f6-4f64-9be9-c58fb0bf2a4f',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Elvira Martuuk',
    Engineers: ['Elvira Martuuk'],
    Ingredients: [
      {
        Name: 'Soontill Relics',
        Size: 3,
      },
    ],
    id: '177d4cfd-4efe-41d2-9042-0cd47805026c',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Liz Ryder',
    Engineers: ['Liz Ryder'],
    Ingredients: [
      {
        Name: 'Landmines',
        Size: 200,
      },
    ],
    id: 'b15f6d95-c23a-4cc1-954d-ab46c5ad3296',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Lei Cheung',
    Engineers: ['Lei Cheung'],
    Ingredients: [
      {
        Name: 'Gold',
        Size: 200,
      },
    ],
    id: '687815fd-8325-4a6f-8eb5-f31b92e465df',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Selene Jean',
    Engineers: ['Selene Jean'],
    Ingredients: [
      {
        Name: 'Painite',
        Size: 10,
      },
    ],
    id: '38bd3449-5441-4deb-921b-41e66005608d',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Hera Tani',
    Engineers: ['Hera Tani'],
    Ingredients: [
      {
        Name: 'Kamitra Cigars',
        Size: 50,
      },
    ],
    id: '9b893c03-8fb0-4218-860d-608d929992df',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Broo Tarquin',
    Engineers: ['Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Fujin Tea',
        Size: 50,
      },
    ],
    id: 'd8dab2c9-a54d-4a7a-9d88-2cd9f84e1506',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Zacariah Nemo',
    Engineers: ['Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Xihe Companions',
        Size: 25,
      },
    ],
    id: '18a67d70-35bc-442c-8c58-da45ee92ddf4',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Didi Vatermann',
    Engineers: ['Didi Vatermann'],
    Ingredients: [
      {
        Name: 'Lavian Brandy',
        Size: 50,
      },
    ],
    id: '322f9880-4350-43a7-b66d-fe8897712087',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Lori Jameson',
    Engineers: ['Lori Jameson'],
    Ingredients: [
      {
        Name: 'Kongga Ale',
        Size: 25,
      },
    ],
    id: '3530440d-f16e-43d7-90b6-db27ef6d8d1b',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Professor Palin',
    Engineers: ['Professor Palin'],
    Ingredients: [
      {
        Name: 'Sensor Fragment',
        Size: 25,
      },
    ],
    id: 'fdaca9f5-2dee-43ce-91d6-9172b52ed554',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Marsha Hicks',
    Engineers: ['Marsha Hicks'],
    Ingredients: [
      {
        Name: 'Osmium',
        Size: 10,
      },
    ],
    id: '666389f4-e389-4dc2-87a6-84d91eb8d8f8',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Petra Olmanova',
    Engineers: ['Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Progenitor Cells',
        Size: 200,
      },
    ],
    id: 'bf52cdf7-3a48-4177-957e-e5e815e130f8',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Etienne Dorn',
    Engineers: ['Etienne Dorn'],
    Ingredients: [
      {
        Name: 'Occupied Escape Pod',
        Size: 25,
      },
    ],
    id: '89a79268-3582-4b9c-824e-c47a6a041928',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Chloe Sedesi',
    Engineers: ['Chloe Sedesi'],
    Ingredients: [
      {
        Name: 'Sensor Fragment',
        Size: 25,
      },
    ],
    id: '0cbe3290-ccdd-4b23-8df4-fc9f7250a3dd',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Kit Fowler',
    Engineers: ['Domino Green', '@Bartender'],
    Ingredients: [
      {
        Name: 'Push',
        Size: 5,
      },
      {
        Name: 'Opinion Polls',
        Size: 40,
      },
    ],
    id: 'f26b0685-3109-4e80-b8ea-a5c1e97f62b8',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Yarden Bond',
    Engineers: ['Kit Fowler', '@Bartender'],
    Ingredients: [
      {
        Name: 'Surveillance Equipment',
        Size: 5,
      },
      {
        Name: 'Smear Campaign Plans',
        Size: 8,
      },
    ],
    id: '0c6f2780-0761-4bf3-b3fd-936125c26c8d',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Wellington Beck',
    Engineers: ['Hero Ferrari', '@Bartender'],
    Ingredients: [
      {
        Name: 'Settlement Defence Plans',
        Size: 15,
      },
      {
        Name: 'Classic Entertainment',
        Size: 25,
      },
      {
        Name: 'Multimedia Entertainment',
        Size: 25,
      },
      {
        Name: 'Cat Media',
        Size: 25,
      },
    ],
    id: '5b9092e0-0ab2-43c3-ac8f-531a881c0e5c',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Uma Laszlo',
    Engineers: ['Wellington Beck'],
    Ingredients: [
      {
        Name: 'Insight Entertainment Suite',
        Size: 5,
      },
    ],
    id: 'cb540abe-4535-430d-bb6a-546afad149ff',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Terra Velasquez',
    Engineers: ['Jude Navarro'],
    Ingredients: [
      {
        Name: 'Genetic Repair Meds',
        Size: 5,
      },
    ],
    id: '0be1a12d-7cd0-4ee8-b420-b2befed98c7a',
    type: 'Unlock',
  },
  {
    Type: 'Unlock',
    Name: 'Oden Geiger',
    Engineers: ['Terra Velasquez', '@Bartender'],
    Ingredients: [
      {
        Name: 'Financial Projections',
        Size: 15,
      },
      {
        Name: 'Biological Sample',
        Size: 20,
      },
      {
        Name: 'Employee Genetic Data',
        Size: 20,
      },
      {
        Name: 'Genetic Research',
        Size: 20,
      },
    ],
    id: '10ac58c5-0851-4bab-8399-8e0737304c50',
    type: 'Unlock',
  },
  {
    Type: 'Human',
    Name: 'Corrosion Resistant Cargo Rack (2D and 4D)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Meta-alloys',
        Size: 16,
      },
      {
        Name: 'Iron',
        Size: 26,
      },
      {
        Name: 'Chemical Manipulators',
        Size: 18,
      },
      {
        Name: 'Neofabric Insulation',
        Size: 12,
      },
      {
        Name: 'Radiation Baffle',
        Size: 22,
      },
    ],
    id: '73370990-ee28-4de9-a497-da27267562cf',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Enzyme Missile Rack',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 15,
      },
      {
        Name: 'Thargoid Energy Cell',
        Size: 16,
      },
      {
        Name: 'Thargoid Organic Circuitry',
        Size: 18,
      },
      {
        Name: 'Molybdenum',
        Size: 16,
      },
      {
        Name: 'Radiation Baffle',
        Size: 6,
      },
    ],
    id: '4ad0a391-092a-4fa4-8682-53af2bc1a206',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Sirius Modified Heat Sink Launcher',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 5,
      },
      {
        Name: 'Mechanical Scrap',
        Size: 8,
      },
      {
        Name: 'Niobium',
        Size: 6,
      },
      {
        Name: 'Vanadium',
        Size: 6,
      },
    ],
    id: '30340a8f-f04a-42ea-8e26-bf2972e27cc5',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Sirius Modified AX Missile Rack (Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 9,
      },
      {
        Name: 'High Density Composites',
        Size: 10,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 20,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 10,
      },
      {
        Name: 'Technetium',
        Size: 3,
      },
      {
        Name: 'Vanadium',
        Size: 13,
      },
    ],
    id: '574c6758-574f-4a01-9482-f0764e47568e',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Sirius Modified AX Missile Rack (Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 6,
      },
      {
        Name: 'High Density Composites',
        Size: 5,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 12,
      },
      {
        Name: 'Military Supercapacitors',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 8,
      },
    ],
    id: '4511fcef-d41c-494a-b602-6f3719f5da2d',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Gauss Cannon (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 18,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 20,
      },
      {
        Name: 'Manganese',
        Size: 15,
      },
      {
        Name: 'Magnetic Emitter Coil',
        Size: 6,
      },
    ],
    id: 'c7779601-5ff7-41ea-8544-315f69cc179e',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Gauss Cannon (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 12,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 12,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 15,
      },
    ],
    id: '6274398d-8f54-4d10-9e58-71fe97de4d67',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Hull Reinforcement',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Module Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 21,
      },
      {
        Name: 'Pattern Beta Obelisk Data',
        Size: 16,
      },
      {
        Name: 'Pattern Gamma Obelisk Data',
        Size: 16,
      },
      {
        Name: 'Reinforced Mounting Plate',
        Size: 12,
      },
    ],
    id: '23b4a714-7627-440f-a2e0-e1fbf52f9da8',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Module Reinforcement',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Module Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 18,
      },
      {
        Name: 'Pattern Epsilon Obelisk Data',
        Size: 15,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 20,
      },
      {
        Name: 'Reinforced Mounting Plate',
        Size: 9,
      },
    ],
    id: '4e053229-5b7d-4895-b1d0-a598f6efa028',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Plasma Charger (Fixed, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 28,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 20,
      },
      {
        Name: 'Chromium',
        Size: 28,
      },
      {
        Name: 'Micro-Weave Cooling Hoses',
        Size: 10,
      },
    ],
    id: 'd1e3e61c-b9cf-4016-b713-94ec81671028',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Plasma Charger (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 19,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 16,
      },
      {
        Name: 'Chromium',
        Size: 14,
      },
      {
        Name: 'Micro-Weave Cooling Hoses',
        Size: 8,
      },
    ],
    id: 'c038d6d1-7192-49a0-8367-ad51f6e39b7c',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Plasma Charger (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 12,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 12,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 15,
      },
    ],
    id: '786172ad-2e35-4071-bb0e-f0903ba56486',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Plasma Charger (Turreted, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 2,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 26,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 24,
      },
      {
        Name: 'Chromium',
        Size: 26,
      },
      {
        Name: 'Articulation Motors',
        Size: 10,
      },
    ],
    id: 'c2a4b00f-b009-4ad1-a0b7-40c74b3f1223',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Plasma Charger (Turreted, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 2,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 21,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 20,
      },
      {
        Name: 'Chromium',
        Size: 16,
      },
      {
        Name: 'Articulation Motors',
        Size: 8,
      },
    ],
    id: '17981e2b-98d7-4296-852e-7427e5bbc716',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Plasma Charger (Turreted, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 12,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 12,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 15,
      },
    ],
    id: '8975a173-81b7-46a8-92e9-5ec6490650e7',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Hybrid Power Plant',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Module Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 18,
      },
      {
        Name: 'Pattern Epsilon Obelisk Data',
        Size: 21,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 15,
      },
      {
        Name: 'Energy Grid Assembly',
        Size: 10,
      },
    ],
    id: '54bc655d-1403-4d3b-af09-165379cfd02f',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian FSD Booster',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Module Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 21,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 21,
      },
      {
        Name: 'Focus Crystals',
        Size: 24,
      },
      {
        Name: 'HN Shock Mount',
        Size: 8,
      },
    ],
    id: '7587c757-0172-488c-870e-72a4b5cc4bad',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Power Distributor',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Module Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Pattern Alpha Obelisk Data',
        Size: 20,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 24,
      },
      {
        Name: 'Phase Alloys',
        Size: 18,
      },
      {
        Name: 'Heatsink Interlink',
        Size: 6,
      },
    ],
    id: 'f0b76d21-d751-4045-94ad-0dd511bd4d68',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shard Cannon (Fixed, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Technology Component',
        Size: 28,
      },
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 20,
      },
      {
        Name: 'Carbon',
        Size: 20,
      },
      {
        Name: 'Micro Controllers',
        Size: 18,
      },
    ],
    id: '1e2a62f5-1798-4456-9e58-e251b5cd2e33',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shard Cannon (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Technology Component',
        Size: 18,
      },
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 20,
      },
      {
        Name: 'Carbon',
        Size: 14,
      },
      {
        Name: 'Power Transfer Bus',
        Size: 12,
      },
    ],
    id: '5986fde3-7e2c-488d-a7b8-96964f1116bf',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shard Cannon (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 12,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 12,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 15,
      },
    ],
    id: '8720e4e9-fc10-48e0-980d-e14e24a20cf7',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shard Cannon (Turreted, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 2,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 20,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 26,
      },
      {
        Name: 'Carbon',
        Size: 28,
      },
      {
        Name: 'Micro Controllers',
        Size: 12,
      },
    ],
    id: '74dbc26e-fb86-4f49-b199-cddd0f3090a8',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shard Cannon (Turreted, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 2,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 16,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 20,
      },
      {
        Name: 'Carbon',
        Size: 15,
      },
      {
        Name: 'Micro Controllers',
        Size: 12,
      },
    ],
    id: '42cb0228-ea39-4f83-a658-98d8b5a59278',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shard Cannon (Turreted, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 12,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 12,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 15,
      },
    ],
    id: '144378ca-5b54-488e-bf22-a89706c529ce',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Guardian Shield Reinforcement',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Module Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 17,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 20,
      },
      {
        Name: 'Pattern Delta Obelisk Data',
        Size: 24,
      },
      {
        Name: 'Hardware Diagnostic Sensor',
        Size: 8,
      },
    ],
    id: '268ab096-0992-4807-9121-db0d3275af8f',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Modified Gauss Cannon (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 5,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 5,
      },
      {
        Name: 'Niobium',
        Size: 4,
      },
      {
        Name: 'Thermal Cooling Units',
        Size: 2,
      },
    ],
    id: 'db9ca3cc-457c-4a7e-97ea-ea49f5d5c685',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Modified Gauss Cannon (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 3,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 3,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 4,
      },
      {
        Name: 'Niobium',
        Size: 2,
      },
    ],
    id: 'f9381656-1c25-4bcb-ad43-eb456e23f5b4',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Modified Shard Cannon (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Technology Component',
        Size: 5,
      },
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 5,
      },
      {
        Name: 'Germanium',
        Size: 4,
      },
      {
        Name: 'Power Converter',
        Size: 2,
      },
    ],
    id: '5b546877-e370-412f-a9e8-3306cef939e0',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Modified Shard Cannon (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Conduit',
        Size: 3,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 3,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 4,
      },
      {
        Name: 'Germanium',
        Size: 2,
      },
    ],
    id: '83995605-76bf-4304-adad-d6c6f369aaf4',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Modified Plasma Charger (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Power Conduit',
        Size: 5,
      },
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 5,
      },
      {
        Name: 'Arsenic',
        Size: 4,
      },
      {
        Name: 'Power Transfer Bus',
        Size: 2,
      },
    ],
    id: '2cfe8b5a-9689-4686-8f3a-00ca542ca2a7',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Modified Plasma Charger (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Weapon Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Guardian Power Cell',
        Size: 3,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 4,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 3,
      },
      {
        Name: 'Arsenic',
        Size: 2,
      },
    ],
    id: '1abaf46a-fd38-44e4-bfd6-51050486e32e',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Javelin (Fighter)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Power Cell',
        Size: 25,
      },
      {
        Name: 'Guardian Wreckage Components',
        Size: 18,
      },
      {
        Name: 'Guardian Vessel Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Pattern Epsilon Obelisk Data',
        Size: 26,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 25,
      },
    ],
    id: 'b98bbf12-3204-435f-98ff-bf642057ec42',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Lance (Fighter)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Power Cell',
        Size: 25,
      },
      {
        Name: 'Guardian Sentinel Weapon Parts',
        Size: 18,
      },
      {
        Name: 'Guardian Vessel Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Pattern Epsilon Obelisk Data',
        Size: 26,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 25,
      },
    ],
    id: 'e8bff8f4-15de-4e67-a8fc-0d6dc21e445e',
    type: 'Technology',
  },
  {
    Type: 'Guardian',
    Name: 'Trident (Fighter)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Guardian Power Cell',
        Size: 25,
      },
      {
        Name: 'Guardian Vessel Blueprint Segment',
        Size: 1,
      },
      {
        Name: 'Pattern Epsilon Obelisk Data',
        Size: 26,
      },
      {
        Name: 'Pattern Beta Obelisk Data',
        Size: 18,
      },
      {
        Name: 'Guardian Technology Component',
        Size: 25,
      },
    ],
    id: 'e664fc5c-56b9-4639-97c0-af41f16a5023',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Meta Alloy Hull Reinforcement',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Meta-alloys',
        Size: 16,
      },
      {
        Name: 'Focus Crystals',
        Size: 25,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 22,
      },
      {
        Name: 'Configurable Components',
        Size: 20,
      },
      {
        Name: 'Reinforced Mounting Plate',
        Size: 12,
      },
    ],
    id: 'dac05e76-1f6b-4e08-893b-b82f0ebec258',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Remote Release Flechette Launcher (Fixed)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Rhenium',
        Size: 22,
      },
      {
        Name: 'Iron',
        Size: 30,
      },
      {
        Name: 'Molybdenum',
        Size: 24,
      },
      {
        Name: 'Germanium',
        Size: 26,
      },
      {
        Name: 'CMM Composite',
        Size: 8,
      },
    ],
    id: '354f4900-4273-446a-89e4-fa52df765507',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Remote Release Flechette Launcher (Turreted)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Rhenium',
        Size: 20,
      },
      {
        Name: 'Iron',
        Size: 28,
      },
      {
        Name: 'Molybdenum',
        Size: 28,
      },
      {
        Name: 'Germanium',
        Size: 24,
      },
      {
        Name: 'Articulation Motors',
        Size: 10,
      },
    ],
    id: 'b7e7a5f1-8be6-4138-a8ca-b90e6daee4c1',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Fixed, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 28,
      },
      {
        Name: 'Tungsten',
        Size: 26,
      },
      {
        Name: 'Rhenium',
        Size: 24,
      },
      {
        Name: 'Technetium',
        Size: 26,
      },
      {
        Name: 'Power Converter',
        Size: 8,
      },
    ],
    id: 'a35ec0cb-3f1a-420a-b7ae-ee4b07abad5a',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Fixed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 24,
      },
      {
        Name: 'Tungsten',
        Size: 26,
      },
      {
        Name: 'Rhenium',
        Size: 20,
      },
      {
        Name: 'Technetium',
        Size: 28,
      },
      {
        Name: 'Ion Distributor',
        Size: 6,
      },
    ],
    id: '99cfd57a-e934-40b2-88ea-f1d78ad679ba',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Fixed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 8,
      },
      {
        Name: 'Tungsten',
        Size: 10,
      },
      {
        Name: 'Rhenium',
        Size: 8,
      },
      {
        Name: 'Technetium',
        Size: 12,
      },
      {
        Name: 'Power Converter',
        Size: 4,
      },
    ],
    id: 'd53115a0-6c55-4ad6-a23b-3f2821060e72',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Gimballed, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 24,
      },
      {
        Name: 'Rhenium',
        Size: 24,
      },
      {
        Name: 'Technetium',
        Size: 22,
      },
      {
        Name: 'Vanadium',
        Size: 28,
      },
      {
        Name: 'Power Transfer Bus',
        Size: 12,
      },
    ],
    id: '4ba0e892-9b68-4db2-a7ad-cf47c7693d76',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Gimballed, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Tungsten',
        Size: 22,
      },
      {
        Name: 'Rhenium',
        Size: 20,
      },
      {
        Name: 'Technetium',
        Size: 28,
      },
      {
        Name: 'Vanadium',
        Size: 24,
      },
      {
        Name: 'Power Converter',
        Size: 10,
      },
    ],
    id: '6300b7a9-75ee-4095-ba4e-809879a288d3',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Gimballed, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 10,
      },
      {
        Name: 'Tungsten',
        Size: 11,
      },
      {
        Name: 'Rhenium',
        Size: 8,
      },
      {
        Name: 'Technetium',
        Size: 10,
      },
      {
        Name: 'Power Transfer Bus',
        Size: 4,
      },
    ],
    id: 'dacf81cc-bb93-49e0-ab5c-7869e0516f17',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Turreted, Large)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 26,
      },
      {
        Name: 'Tungsten',
        Size: 28,
      },
      {
        Name: 'Rhenium',
        Size: 22,
      },
      {
        Name: 'Technetium',
        Size: 24,
      },
      {
        Name: 'Ion Distributor',
        Size: 10,
      },
    ],
    id: '6f8d1fba-f339-4acf-ba81-2449c27f3c38',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Turreted, Medium)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 24,
      },
      {
        Name: 'Tungsten',
        Size: 22,
      },
      {
        Name: 'Rhenium',
        Size: 20,
      },
      {
        Name: 'Technetium',
        Size: 28,
      },
      {
        Name: 'Power Transfer Bus',
        Size: 8,
      },
    ],
    id: '48e0c62e-1290-4995-8785-00918244965b',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Shock Cannon (Turreted, Small)',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Vanadium',
        Size: 8,
      },
      {
        Name: 'Tungsten',
        Size: 12,
      },
      {
        Name: 'Rhenium',
        Size: 10,
      },
      {
        Name: 'Technetium',
        Size: 10,
      },
      {
        Name: 'Ion Distributor',
        Size: 4,
      },
    ],
    id: 'fce07cc8-908f-4b80-a612-cecec2f36d5b',
    type: 'Technology',
  },
  {
    Type: 'Beam Laser',
    Name: 'Concordant Sequence',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 3,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Wing shield regeneration increased',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'b556c19a-e756-45b1-846f-9ddc61af18a9',
    id: '010338dd-946a-49d1-8fc2-fc2945a08640',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Regeneration Sequence',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Refined Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Shielding Sensors',
        Size: 4,
      },
      {
        Name: 'Peculiar Shield Frequency Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target wing shields regenerated',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    CoriolisGuid: '3bece1bb-7c31-4735-8c18-54dc4a0057bc',
    id: '5fd3b9ca-1c66-44ef-83ed-a5d94e3d80d1',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Thermal Conduit',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 5,
      },
      {
        Name: 'Sulphur',
        Size: 5,
      },
      {
        Name: 'Tempered Alloys',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage increases with heat level',
        IsGood: true,
      },
    ],
    CoriolisGuid: '4e4e1f59-6762-47ff-b1fa-40ca43304698',
    id: 'bf749b3a-62af-434d-a647-d8539e0e943e',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Thermal Shock',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Flawed Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Conductive Components',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target heat increased',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'fe8b4daa-e65d-464c-811d-400d3632a3d6',
    id: 'f728758d-8dcf-4230-814e-358f1fbdeb63',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Thermal Vent',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Flawed Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Conductive Polymers',
        Size: 3,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Heat reduced when striking a target',
        IsGood: true,
      },
    ],
    CoriolisGuid: '70f11414-7904-405c-92db-806178ee9df4',
    id: '926644c7-3c31-4707-9d6c-2b7abc49f01c',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Oversized',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'ceb5c729-4565-4869-ade8-5ee897e8b410',
    id: '350a26fa-2e57-4f17-bf88-de4948c1a99d',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Stripped Down',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'dfc22aad-48b8-4f8d-af16-ec3b978fc8b6',
    id: 'd2200838-4930-49f6-a535-0dac49d78754',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Double Braced',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    CoriolisGuid: '32cb80c0-bb11-49ea-ae21-4c94eb5f9195',
    id: 'df69b3be-a03b-47ec-a544-d9cc4a033018',
    type: 'Engineer',
  },
  {
    Type: 'Beam Laser',
    Name: 'Flow Control',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    CoriolisGuid: '441e1d85-5174-4172-85ea-caee8d3c632d',
    id: '224fd3c7-9d7f-4ebe-9941-5517d5915a57',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Concordant Sequence',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 3,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Wing shield regeneration increased',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    id: '90799440-9e27-4950-8026-dd043673bf68',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Inertial Impact',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Flawed Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 5,
      },
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage partially kinetic',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Damage',
        IsGood: true,
      },
      {
        Effect: '3',
        Property: 'Jitter',
        IsGood: false,
      },
    ],
    CoriolisGuid: '6eda22d3-8049-4bab-a125-762b12fa576a',
    id: 'dee896fb-c00e-495a-b789-f91617bde997',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Phasing Sequence',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 3,
      },
      {
        Name: 'Niobium',
        Size: 3,
      },
      {
        Name: 'Configurable Components',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Part of damage through shields',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    CoriolisGuid: '47254ea9-c88f-43e0-9166-d1796649917b',
    id: 'd6297c2d-fa84-4caf-a7c7-52c57e1bcddd',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Scramble Spectrum',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Crystal Shards',
        Size: 5,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 3,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target modules malfunctions',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Rate of Fire',
        IsGood: false,
      },
    ],
    CoriolisGuid: '4f42cb92-4440-4295-ada9-fcca788a65b8',
    id: 'ca9df5d5-99ae-4208-bd6a-cd4ff8b4a70f',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Thermal Shock',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Flawed Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Conductive Components',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target heat increased',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    id: '3682ab62-ae07-4da5-a87f-b1fdc6d6cd05',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Oversized',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '03cddd24-aab3-4688-a9fb-f235f721c178',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Stripped Down',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: 'faefbe09-b080-484d-bb67-d66601c90d06',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Double Braced',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '265db522-8a27-4792-829e-e9cf7ff1cfba',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Flow Control',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '08be5375-aceb-4431-98ed-f8ef314a9815',
    type: 'Engineer',
  },
  {
    Type: 'Burst Laser',
    Name: 'Multi-Servos',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'fd62292f-f5ed-4728-bc8a-3ae215ced386',
    id: 'a0dd5c7a-3b13-49d8-9712-46eaec8fed71',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Concordant Sequence',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 3,
      },
      {
        Name: 'Zirconium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Wing shield regeneration increased',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    id: '86e8ab5e-1c13-4834-9083-f7d1bb299f58',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Emissive Munitions',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 4,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 3,
      },
      {
        Name: 'Heat Exchangers',
        Size: 3,
      },
      {
        Name: 'Manganese',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target signature increased',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    CoriolisGuid: '16c9ed0f-63c0-4ff2-b2e0-59bbb294632d',
    id: 'd9f80dcf-becb-4df1-87e7-bd5c576b022b',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Phasing Sequence',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 3,
      },
      {
        Name: 'Niobium',
        Size: 3,
      },
      {
        Name: 'Configurable Components',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Part of damage through shields',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    id: '42148e81-d7db-4ee4-bee8-4982250f5984',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Scramble Spectrum',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Crystal Shards',
        Size: 5,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 3,
      },
      {
        Name: 'Exceptional Scrambled Emission Data',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target modules malfunctions',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Rate of Fire',
        IsGood: false,
      },
    ],
    id: '457b9c72-6a5d-42cf-9454-2c46a730ac63',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Thermal Shock',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Flawed Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Conductive Components',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target heat increased',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    id: 'f6d2b220-e52e-49b9-8a2e-2a4e82f375fa',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Oversized',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '59104974-3da8-4ded-b75c-b33184048b9e',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Stripped Down',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '9085f97d-b07c-4217-9ae8-55e18f0c11ca',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Flow Control',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: 'f6e7ed24-2739-4316-8b59-0decdf475d27',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Double Braced',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '4406fa0f-4473-46db-be7e-842a69fe0530',
    type: 'Engineer',
  },
  {
    Type: 'Pulse Laser',
    Name: 'Multi-Servos',
    Engineers: ['Mel Brandon', 'The Dweller', 'Broo Tarquin'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: 'ffca83b5-aed5-4671-9fb9-16ed8860f773',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Auto Loader',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 4,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Auto reload while firing',
        IsGood: true,
      },
    ],
    CoriolisGuid: '640d6dde-f497-42cd-8bc9-73ab3fa1b43a',
    id: '412432ef-61cd-4810-a71a-33704b183d75',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Corrosive Shell',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 4,
      },
      {
        Name: 'Arsenic',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target armor hardness reduced',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Ammo Capacity',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'a6faa870-ff89-4e48-b607-424e065cbd43',
    id: '39b47f5e-af29-4990-815c-7ee714d91dcf',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Emissive Munitions',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 4,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 3,
      },
      {
        Name: 'Heat Exchangers',
        Size: 3,
      },
      {
        Name: 'Manganese',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target signature increased',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    id: '889414cb-e2e4-4863-8d9d-b2aef2ea0a33',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Thermal Shock',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Flawed Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Conductive Components',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target heat increased',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    id: 'e6fda433-d5ec-462f-91ab-fa4256300ab3',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Incendiary Rounds',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Sulphur',
        Size: 5,
      },
      {
        Name: 'Phase Alloys',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage partially thermal',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Rate of Fire',
        IsGood: false,
      },
      {
        Effect: '+200%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    CoriolisGuid: '3526773e-a814-4bec-afbf-30db79a3e239',
    id: '535cd713-8c7d-43af-abf3-1143ebd5bd3c',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Smart Rounds',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 3,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 3,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'No damage to untargeted ships',
        IsGood: true,
      },
    ],
    CoriolisGuid: '2a3d8519-27af-44f2-a50b-33095964d1cc',
    id: '0d1b037a-a776-49c1-98dc-d49079e9f3fb',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Flow Control',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: 'f626efd1-c437-445e-bd00-9136d6e7df97',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Double Braced',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: 'b600fc0f-a9e1-4990-a486-de183cb024f6',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Stripped Down',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '1967fcad-b08f-4eaf-9c50-d99a967de986',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Oversized',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: 'e5f560dc-9202-4a0f-af0e-3a665e589b7d',
    type: 'Engineer',
  },
  {
    Type: 'Multi-cannon',
    Name: 'Multi-Servos',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: '62715cb3-8308-45fe-b1b9-293bb3b3d759',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Auto Loader',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 4,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Auto reload while firing',
        IsGood: true,
      },
    ],
    id: 'b7e89691-af45-441d-947e-ce7350303cb3',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Dispersal Field',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 5,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 5,
      },
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target gimbal/turret tracking reduced',
        IsGood: true,
      },
    ],
    CoriolisGuid: '0e2dbd63-335d-4dca-8050-c7ca8ddc56b0',
    id: 'b927aa60-b60f-4a72-b3cc-ce6ea5aa2790',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Force Shell',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Zinc',
        Size: 5,
      },
      {
        Name: 'Phase Alloys',
        Size: 3,
      },
      {
        Name: 'Heat Conduction Wiring',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target pushed off course',
        IsGood: true,
      },
      {
        Effect: '-17%',
        Property: 'Shot Speed',
        IsGood: false,
      },
    ],
    CoriolisGuid: '62056851-d2f2-474d-ba77-66c030c900e9',
    id: 'da7dff12-c4ee-4843-86ca-e22f1fd873dd',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'High Yield Shell',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 3,
      },
      {
        Name: 'Chemical Manipulators',
        Size: 3,
      },
      {
        Name: 'Nickel',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage partially explosive',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Rate of Fire',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'a950b42c-204f-4775-a0c5-21bfcec1fd14',
    id: '7bc8881d-e426-4731-a223-5eec6e4cdbde',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Smart Rounds',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 3,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 3,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'No damage to untargeted ships',
        IsGood: true,
      },
    ],
    id: 'def86c80-e034-4aaf-ab57-4311aecdf826',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Thermal Cascade',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 4,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
      {
        Name: 'Phosphorus',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Shielded target heat increased',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'e5c8cab4-7a2f-450d-a937-2d0d8b9e3714',
    id: 'fe5ebdad-b831-4d84-9d0c-3f52cccd428e',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Oversized',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '4259810b-4a71-42e9-898b-3e06cc3c37eb',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Stripped Down',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '81595d1c-0e09-4b8f-a28f-c9c2c47fcdbe',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Flow Control',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: 'ca139ece-f79f-4901-ab6f-b523cceeab81',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Double Braced',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '5d0e8e1a-7226-434e-898b-658347343372',
    type: 'Engineer',
  },
  {
    Type: 'Cannon',
    Name: 'Multi-Servos',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: 'a8c6d32d-85cf-4185-ba02-c68756ee8673',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Corrosive Shell',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Precipitated Alloys',
        Size: 4,
      },
      {
        Name: 'Arsenic',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target armor hardness reduced',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Ammo Capacity',
        IsGood: false,
      },
    ],
    id: 'deceed6e-22f6-466f-8d64-5fa52ed78cd9',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Dazzle Shell',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Manganese',
        Size: 4,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target sensor acuity reduced',
        IsGood: true,
      },
    ],
    CoriolisGuid: '0a1e29ee-2fc7-4cbd-bbda-e8803c3e03ac',
    id: '209e9034-48e3-4968-b8bd-4b5c8773aad8',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Drag Munition',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Molybdenum',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target speed reduced',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'ca4cd540-660a-4fba-b38d-179f72125819',
    id: 'e1343f45-a84e-4c87-b7d9-9fef1f0ec901',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Incendiary Rounds',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Sulphur',
        Size: 5,
      },
      {
        Name: 'Phase Alloys',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage partially thermal',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Rate of Fire',
        IsGood: false,
      },
      {
        Effect: '+200%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    id: '97de956c-e44d-4c63-8bdf-d9c24c40295b',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Screening Shell',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 5,
      },
      {
        Name: 'Modified Consumer Firmware',
        Size: 5,
      },
      {
        Name: 'Niobium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Effectiveness increase against munitions',
        IsGood: true,
      },
      {
        Effect: '-50%',
        Property: 'Reload Time',
        IsGood: true,
      },
    ],
    CoriolisGuid: '9cf533fc-ccb1-4c92-8b6b-dd700af2988a',
    id: 'c9335a63-73f6-49b1-a22d-876ce813cbe7',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Oversized',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '5f1901aa-bc30-4010-bc53-f57416edc85a',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Stripped Down',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '54a40840-6615-4e06-b675-973b353760cd',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Double Braced',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: 'd15ae0af-a093-44f3-93e0-5c9de4fe3688',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Flow Control',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '1bbf60cb-bce1-4a67-8937-480d6834d567',
    type: 'Engineer',
  },
  {
    Type: 'Fragment Cannon',
    Name: 'Multi-Servos',
    Engineers: ['Marsha Hicks', 'Tod McQuinn', 'Zacariah Nemo'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: 'eeb9c8aa-e07b-4a26-9b00-ef8818e63043',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Drag Munition (Seeker only)',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Molybdenum',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target speed reduced',
        IsGood: true,
      },
    ],
    id: 'c888be86-a307-4427-858c-40a68e68cb79',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Emissive Munitions',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 4,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 3,
      },
      {
        Name: 'Heat Exchangers',
        Size: 3,
      },
      {
        Name: 'Manganese',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target signature increased',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    id: '160728e4-e541-4258-9a32-1906e8c8761c',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Overload Munitions',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Filament Composites',
        Size: 5,
      },
      {
        Name: 'Tagged Encryption Codes',
        Size: 4,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 2,
      },
      {
        Name: 'Germanium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage partially thermal',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'c157bbd1-a14d-4aa2-9081-94cbfbdee558',
    id: '64e5926d-30a6-4c7f-9e92-ecc66626675d',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Thermal Cascade',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 4,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
      {
        Name: 'Phosphorus',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Shielded target heat increased',
        IsGood: true,
      },
    ],
    id: 'b78f1349-dc6e-4ca6-b07e-9e23bf9604cd',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Penetrator Munitions (Dumbfire only)',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Galvanising Alloys',
        Size: 5,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 3,
      },
      {
        Name: 'Zirconium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target module damage',
        IsGood: true,
      },
    ],
    CoriolisGuid: '35578402-1bc7-4d19-828b-af31ebd79866',
    id: 'f3dbceb9-646e-4673-ae70-e083d5d179e0',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'FSD Interrupt (Dumbfire only)',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Strange Wake Solutions',
        Size: 3,
      },
      {
        Name: 'Anomalous FSD Telemetry',
        Size: 5,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 5,
      },
      {
        Name: 'Configurable Components',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target FSD reboots',
        IsGood: true,
      },
      {
        Effect: '-30%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-50%',
        Property: 'Rate of Fire',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'c1400054-1c2b-487c-8854-7a22d96d4cd2',
    id: 'c12164b8-60da-4bb8-81c9-67fd1d36467d',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Oversized',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '087796d1-4731-41a9-ad8d-e0d303a563e3',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Stripped Down',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '8a939f8f-0d96-4c9b-a69e-bff3f64053e4',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Flow Control',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '45a0ac2e-a562-4007-a1eb-3e28c5fdcc96',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Double Braced',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: 'a50b71f4-b767-4cd9-a501-13be942d4062',
    type: 'Engineer',
  },
  {
    Type: 'Missile Rack',
    Name: 'Multi-Servos',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: '6d5e4396-4d30-4c46-846b-15feccb2ef87',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Mass Lock Munition',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 5,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target FSD inhibited',
        IsGood: true,
      },
    ],
    CoriolisGuid: '9e8635af-4077-4d7a-98dd-5220c8722688',
    id: 'ca9aa3ad-37da-40c2-895b-e3efea2079f2',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Penetrator Payload',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 3,
      },
      {
        Name: 'Anomalous Bulk Scan Data',
        Size: 5,
      },
      {
        Name: 'Selenium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target module damage',
        IsGood: true,
      },
    ],
    CoriolisGuid: '5d25c5bc-4b45-4119-bd87-71bfd0f85957',
    id: 'f4b5c95f-8310-4534-b3bb-c824c487cd8b',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Reverberating Cascade',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 2,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 3,
      },
      {
        Name: 'Filament Composites',
        Size: 4,
      },
      {
        Name: 'Chromium',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target shield generator damaged',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'c03e2f4f-9520-44bb-9a1f-7a917e8e3a48',
    id: 'f4babc76-5d72-417d-a36a-a86f8d49f575',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Flow Control',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '6d3e1f6b-a0ec-48aa-8e78-c3460053d81e',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Oversized',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '4a507dc4-18cd-4310-bee7-5c26c4359e23',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Stripped Down',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: 'dd905a76-69b9-40b2-a3c9-6020f76a8828',
    type: 'Engineer',
  },
  {
    Type: 'Torpedo Pylon',
    Name: 'Double Braced',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '343793a9-d37d-4de2-a08b-9859197c5d44',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Ion Disruptor',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Sulphur',
        Size: 5,
      },
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Chemical Distillery',
        Size: 3,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target thrusters reboot',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'd84e40ca-afc1-4b01-9940-034152d288e7',
    id: '44867be6-6c45-429f-9c61-b31ae08a9561',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Overload Munitions',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Filament Composites',
        Size: 5,
      },
      {
        Name: 'Tagged Encryption Codes',
        Size: 4,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 2,
      },
      {
        Name: 'Germanium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage partially thermal',
        IsGood: true,
      },
    ],
    id: 'd319ac39-1ea6-4b49-970b-e4dbc6bf18d9',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Radiant Canister',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Polonium',
        Size: 1,
      },
      {
        Name: 'Phase Alloys',
        Size: 3,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Area heat increased, sensors disrupted',
        IsGood: true,
      },
    ],
    CoriolisGuid: '51f84837-e9a5-432c-a125-d4322099266c',
    id: '2760c75c-fb57-440d-9813-cfcf72ed5620',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Reverberating Cascade',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Configurable Components',
        Size: 2,
      },
      {
        Name: 'Classified Scan Databanks',
        Size: 3,
      },
      {
        Name: 'Filament Composites',
        Size: 4,
      },
      {
        Name: 'Chromium',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target shield generator damaged',
        IsGood: true,
      },
    ],
    id: 'c17f42a4-4106-474e-b796-84c4573371cf',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Shift-Lock Canister',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Tempered Alloys',
        Size: 5,
      },
      {
        Name: 'Strange Wake Solutions',
        Size: 3,
      },
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Area FSDs reboot',
        IsGood: true,
      },
    ],
    CoriolisGuid: '1f7b0deb-e023-43e5-96f6-ebf60d683e8b',
    id: 'b478dac5-0247-4297-9bf9-0a07b3906f2a',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Emissive Munitions',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Equipment',
        Size: 4,
      },
      {
        Name: 'Unexpected Emission Data',
        Size: 3,
      },
      {
        Name: 'Heat Exchangers',
        Size: 3,
      },
      {
        Name: 'Manganese',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target signature increased',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    id: '9f7a293d-a96d-4c89-bdf1-efba85e6c252',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Flow Control',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: 'b7b000af-3c0c-4554-9e71-ac3104f72ed4',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Oversized',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: 'bd7a8bbe-a08d-4cc8-a45d-d8ab3c92c94d',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Stripped Down',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: 'da6d369b-12cb-49c2-84de-cc7ea242d363',
    type: 'Engineer',
  },
  {
    Type: 'Mine Launcher',
    Name: 'Double Braced',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Juri Ishmaak'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: 'e2e19f9c-1005-4ef4-ac83-4a95e2790c07',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Dazzle Shell',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Manganese',
        Size: 4,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target sensor acuity reduced',
        IsGood: true,
      },
    ],
    id: 'f6ac6bfa-de88-4ff9-a827-dd9d9087e6b0',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Dispersal Field',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Conductive Components',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 5,
      },
      {
        Name: 'Irregular Emission Data',
        Size: 5,
      },
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target gimbal/turret tracking reduced',
        IsGood: true,
      },
    ],
    id: '22f02ea2-5762-41a4-86c6-9a7277b020ec',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Target Lock Breaker',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Selenium',
        Size: 5,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 3,
      },
      {
        Name: 'Adaptive Encryptors Capture',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target loses target lock',
        IsGood: true,
      },
    ],
    CoriolisGuid: '4cf42ed8-574f-4bb8-a1f2-ee154475b463',
    id: '1a79fae7-b4d6-4caf-81b3-eefdf45b60d8',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Thermal Conduit',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Heat Dispersion Plate',
        Size: 5,
      },
      {
        Name: 'Sulphur',
        Size: 5,
      },
      {
        Name: 'Tempered Alloys',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Damage increases with heat level',
        IsGood: true,
      },
    ],
    id: '24259818-01b4-48bb-9442-1386c047b775',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Phasing Sequence',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Focus Crystals',
        Size: 5,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 3,
      },
      {
        Name: 'Niobium',
        Size: 3,
      },
      {
        Name: 'Configurable Components',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Part of damage through shields',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
    ],
    id: '119c7380-0d75-4923-a70b-0cbbdaf50689',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Plasma Slug',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 2,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 2,
      },
      {
        Name: 'Mercury',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Reload from ship fuel',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-100%',
        Property: 'Ammo Capacity',
        IsGood: false,
      },
    ],
    CoriolisGuid: '58a7b1b6-57b9-40f2-9a5a-712a5388a5eb',
    id: 'fee1f9fe-9932-4a24-a690-20eeab46cd94',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Oversized',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: '1bc7dce2-0fe2-4ba6-ba72-364b8baaa76f',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Flow Control',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '8b5e8560-1edf-4cdc-b7af-4fa5563c66c4',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Stripped Down',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '4848989d-072b-4699-af9d-4de70798bd6c',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Double Braced',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '432d5f72-0bc5-4101-9dbf-86fa42da9f5b',
    type: 'Engineer',
  },
  {
    Type: 'Plasma Accelerator',
    Name: 'Multi-Servos',
    Engineers: ['Etienne Dorn', 'Zacariah Nemo', 'Bill Turner'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: 'e4bf9646-03a9-4646-8013-562b91c07d6e',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Feedback Cascade',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Open Symmetric Keys',
        Size: 5,
      },
      {
        Name: 'Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Filament Composites',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target shield cell disrupted',
        IsGood: true,
      },
      {
        Effect: '-20%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-40%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    CoriolisGuid: '3c153755-3d2c-4832-bb73-d6b3d0e99a71',
    id: 'f9ba91e1-fe65-4dd0-adf6-bffd439ed798',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Plasma Slug',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Heat Exchangers',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 2,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 2,
      },
      {
        Name: 'Mercury',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Reload from ship fuel',
        IsGood: true,
      },
      {
        Effect: '-10%',
        Property: 'Damage',
        IsGood: false,
      },
      {
        Effect: '-40%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '-100%',
        Property: 'Ammo Capacity',
        IsGood: false,
      },
    ],
    id: '0816d6ee-cea9-4736-81c0-37445158de02',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Super Penetrator',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Proto Light Alloys',
        Size: 3,
      },
      {
        Name: 'Refined Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Zirconium',
        Size: 3,
      },
      {
        Name: 'Untypical Shield Scans',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '✓',
        Property: 'Target module damage',
        IsGood: true,
      },
      {
        Effect: '-40%',
        Property: 'Thermal Load',
        IsGood: true,
      },
      {
        Effect: '+50%',
        Property: 'Reload Time',
        IsGood: false,
      },
    ],
    CoriolisGuid: '4bb4ec50-40fb-473d-abaf-4fc386aa889c',
    id: 'eef3077f-4e7a-423e-8d37-147f9cb6b166',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Oversized',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Mechanical Components',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Damage',
        IsGood: true,
      },
    ],
    id: 'e2eafbfc-c73c-439c-9d9c-297123b27172',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Flow Control',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Modified Embedded Firmware',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '469ded91-79b6-4b9e-9d4b-7ed2832abd0a',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Stripped Down',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Salvaged Alloys',
        Size: 5,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'Tin',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '422c10b9-6fed-41a3-9f53-6301456a8be2',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Double Braced',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '9ef3e367-016b-4207-b7f5-ab681e5fa47f',
    type: 'Engineer',
  },
  {
    Type: 'Rail Gun',
    Name: 'Multi-Servos',
    Engineers: ['Etienne Dorn', 'Tod McQuinn', 'The Sarge'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 5,
      },
      {
        Name: 'Focus Crystals',
        Size: 4,
      },
      {
        Name: 'Conductive Polymers',
        Size: 2,
      },
      {
        Name: 'Configurable Components',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Rate of Fire',
        IsGood: true,
      },
    ],
    id: '21c15dec-614d-4bde-8421-f45e3c943d2d',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Thermal Spread',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Heat Efficiency',
        IsGood: true,
      },
    ],
    CoriolisGuid: '6cda2960-a05b-4dd1-978c-202d746e47bc',
    id: 'f56d8787-6eb7-45db-a595-576319e09a21',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Stripped Down',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '565266d2-ad6c-4a65-be71-1db0520630de',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Monstered',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '+5%',
        Property: 'Power Generation',
        IsGood: true,
      },
    ],
    CoriolisGuid: '12a57a09-0e05-41a9-9824-14a3618e7a0f',
    id: 'cb6661eb-eda9-43d4-b491-c5d29c9e5f5f',
    type: 'Engineer',
  },
  {
    Type: 'Power Plant',
    Name: 'Double Braced',
    Engineers: ['Etienne Dorn', 'Felicity Farseer', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Grid Resistors',
        Size: 5,
      },
      {
        Name: 'Vanadium',
        Size: 3,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: 'c625e21b-a7f4-4ac5-a86e-2365c30153a2',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Angled Plating',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
      {
        Name: 'Zirconium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'e8631809-2915-4373-905c-8dcf3bda6921',
    id: '020fbf58-bdec-470e-bd59-7f47349c5fc7',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Layered Plating',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
      {
        Name: 'Niobium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'cdd19fcc-74b4-463a-a8f1-2e9909da664f',
    id: '78f087dd-c92b-45a3-a17b-59251db18da2',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Reflective Plating',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 3,
      },
      {
        Name: 'Thermic Alloys',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Hull Boost',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: '6c88aa33-01db-4eda-928e-6ca8b9b1bc3d',
    id: '4ecd277e-4988-489f-bba7-09f451d50937',
    type: 'Engineer',
  },
  {
    Type: 'Armour',
    Name: 'Deep Plating',
    Engineers: ['Liz Ryder', 'Selene Jean', 'Petra Olmanova'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Mechanical Equipment',
        Size: 3,
      },
      {
        Name: 'Molybdenum',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Hull Boost',
        IsGood: true,
      },
      {
        Effect: '-3%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-3%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'b51706cc-d412-4559-8654-f812d2eb44b9',
    id: '25a4e857-6900-4daa-a88f-84c93278e119',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Angled Plating',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Tempered Alloys',
        Size: 5,
      },
      {
        Name: 'Zirconium',
        Size: 3,
      },
      {
        Name: 'Carbon',
        Size: 5,
      },
      {
        Name: 'High Density Composites',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+2%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    id: '22032e07-ca51-49bd-b51e-fd5cd8794dcb',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Layered Plating',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'Shielding Sensors',
        Size: 3,
      },
      {
        Name: 'Tungsten',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+2%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    id: 'd9324b53-f7df-4a8b-ba87-e43a25b55d3f',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Reflective Plating',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Heat Conduction Wiring',
        Size: 5,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
      {
        Name: 'Zinc',
        Size: 4,
      },
    ],
    Effects: [
      {
        Effect: '-5%',
        Property: 'Hull Reinforcement',
        IsGood: false,
      },
      {
        Effect: '+2%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    id: 'dc15c384-889c-4c0b-8d53-153953832033',
    type: 'Engineer',
  },
  {
    Type: 'Hull Reinforcement Package',
    Name: 'Deep Plating',
    Engineers: ['Liz Ryder', 'Petra Olmanova', 'Selene Jean'],
    Ingredients: [
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Molybdenum',
        Size: 3,
      },
      {
        Name: 'Ruthenium',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Hull Reinforcement',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    id: 'b1542ebc-17e3-4043-8f86-28a5f4471899',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Double Braced',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Chromium',
        Size: 3,
      },
      {
        Name: 'Yttrium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '193235a2-c34f-490b-9a8a-3e0f8c5209a9',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Flow Control',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Chromium',
        Size: 3,
      },
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: 'e5dd3e1d-7180-4f75-863c-30bfdc1ce76f',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Stripped Down',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Chromium',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: 'f28d7953-7a84-44e2-80b1-0a3c2cbce98a',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Boss Cells',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Chromium',
        Size: 3,
      },
      {
        Name: 'Polymer Capacitors',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+20%',
        Property: 'Spin Up Time',
        IsGood: false,
      },
      {
        Effect: '+5%',
        Property: 'Shield Reinforcement',
        IsGood: true,
      },
    ],
    CoriolisGuid: '87ed0cec-9624-4ecb-8ffb-cc941464e8d2',
    id: 'a0877c3f-95b5-491d-9e7c-eb7ba81bb1b5',
    type: 'Engineer',
  },
  {
    Type: 'Shield Cell Bank',
    Name: 'Recycling Cells',
    Engineers: ['Mel Brandon', 'Elvira Martuuk', 'Lori Jameson'],
    Ingredients: [
      {
        Name: 'Chemical Storage Units',
        Size: 5,
      },
      {
        Name: 'Chromium',
        Size: 3,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Duration',
        IsGood: true,
      },
      {
        Effect: '-5%',
        Property: 'Shield Reinforcement',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'c8aa2134-3153-47b8-a367-9c5dbb9c557d',
    id: '370e888a-31f0-46a2-89d8-0613a2407184',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Force Block',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Unidentified Scan Archives',
        Size: 5,
      },
      {
        Name: 'Shielding Sensors',
        Size: 3,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Optimal Strength',
        IsGood: false,
      },
      {
        Effect: '+2%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'cb95d9b4-a945-491d-95ad-e230c0454cd9',
    id: '1c6d002f-c417-4020-ab67-28fe4eb03d47',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Thermo Block',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Anomalous Bulk Scan Data',
        Size: 5,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 3,
      },
      {
        Name: 'Heat Vanes',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Optimal Strength',
        IsGood: false,
      },
      {
        Effect: '+2%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'c3340df8-c6da-49c9-b236-8f1cc4209088',
    id: '058eac60-5177-4b0a-9c03-8752dc3e0bff',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Blast Block',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Inconsistent Shield Soak Analysis',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Heat Dispersion Plate',
        Size: 3,
      },
      {
        Name: 'Selenium',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '-1%',
        Property: 'Optimal Strength',
        IsGood: false,
      },
      {
        Effect: '+2%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'eb1c4a92-03ef-4263-8051-9ac91b2d43b2',
    id: '7a422674-baf4-40d3-9079-28adaccaedcb',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Flow Control',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Inconsistent Shield Soak Analysis',
        Size: 5,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 3,
      },
      {
        Name: 'Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Niobium',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: 'eaa96c3f-5012-478a-a95b-a423f4510d55',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Double Braced',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Distorted Shield Cycle Recordings',
        Size: 5,
      },
      {
        Name: 'Galvanising Alloys',
        Size: 3,
      },
      {
        Name: 'Shield Emitters',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '7aa06317-d852-42cc-842d-5184f75e7365',
    type: 'Engineer',
  },
  {
    Type: 'Shield Booster',
    Name: 'Super Capacitor',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Untypical Shield Scans',
        Size: 3,
      },
      {
        Name: 'Compact Composites',
        Size: 5,
      },
      {
        Name: 'Cadmium',
        Size: 2,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Optimal Strength',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-2%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    CoriolisGuid: '4197c308-a3df-442a-91c2-db856b4f57cf',
    id: 'd37eaf2e-04aa-4b51-a04d-3c5ba5e70d9e',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Hi-cap',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+6%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
    ],
    CoriolisGuid: '603c1ba6-45e6-4401-af56-639c3e7c9b79',
    id: '517c4b33-11ad-4e25-beaf-731dd69d4f5b',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Multi-weave',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Aberrant Shield Pattern Analysis',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+25%',
        Property: 'Distributor Draw',
        IsGood: false,
      },
      {
        Effect: '+3%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
      {
        Effect: '+3%',
        Property: 'Explosive Resistance',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'dd46c8be-730c-4671-87fe-f98b181b66cf',
    id: '9552b4f7-ece2-44c5-ae45-5e47a826b839',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Thermo Block',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Optimal Multiplier',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Thermal Resistance',
        IsGood: true,
      },
    ],
    id: '3c904177-803d-4136-9604-3f4fd7462ebf',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Fast Charge',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Compound Shielding',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Regen Rate',
        IsGood: true,
      },
      {
        Effect: '+15%',
        Property: 'Broken Regen Rate',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    CoriolisGuid: '42c5e92d-ccab-435a-b2c6-fd268d39d6f5',
    id: 'c57c2aee-342a-46cc-950f-4119c15f1569',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Double Braced',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '916e8d03-7f58-4eca-ae64-7991611bef4c',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Stripped Down',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '96e3f40a-fce6-4b1f-852c-c9c22566d8e1',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Force Block',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Decoded Emission Data',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-3%',
        Property: 'Optimal Multiplier',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Kinetic Resistance',
        IsGood: true,
      },
    ],
    id: '1732618c-3596-4d63-bbbc-17e58cb32194',
    type: 'Engineer',
  },
  {
    Type: 'Shield Generator',
    Name: 'Lo-draw',
    Engineers: [
      'Mel Brandon',
      'Elvira Martuuk',
      'Lei Cheung',
      'Didi Vatermann',
    ],
    Ingredients: [
      {
        Name: 'Worn Shield Emitters',
        Size: 5,
      },
      {
        Name: 'Flawed Focus Crystals',
        Size: 3,
      },
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-20%',
        Property: 'Power Draw',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Optimal Multiplier',
        IsGood: false,
      },
      {
        Effect: '-20%',
        Property: 'Distributor Draw',
        IsGood: true,
      },
      {
        Effect: '-1%',
        Property: 'Kinetic Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Thermal Resistance',
        IsGood: false,
      },
      {
        Effect: '-1%',
        Property: 'Explosive Resistance',
        IsGood: false,
      },
    ],
    CoriolisGuid: '66a39288-59d7-4cfb-914d-354a200c0210',
    id: '09765bac-e455-43cf-bdb3-585c74d153d8',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Deep Charge',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Chloe Sedesi',
      'Professor Palin',
      'Colonel Bris Dekker',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 5,
      },
      {
        Name: 'Galvanising Alloys',
        Size: 3,
      },
      {
        Name: 'Eccentric Hyperspace Trajectories',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Power Draw',
        IsGood: false,
      },
      {
        Effect: '+10%',
        Property: 'Maximum Fuel Per Jump',
        IsGood: true,
      },
    ],
    CoriolisGuid: '56f1e58d-2044-4a31-8b54-ad0f99dfd64e',
    id: 'f6d2433c-0944-4c24-983b-52aff89c813c',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Double Braced',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Chloe Sedesi',
      'Professor Palin',
      'Colonel Bris Dekker',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 5,
      },
      {
        Name: 'Galvanising Alloys',
        Size: 3,
      },
      {
        Name: 'Configurable Components',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+25%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '7288e740-315e-45f1-813e-84bda495ae98',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Stripped Down',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Chloe Sedesi',
      'Professor Palin',
      'Colonel Bris Dekker',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 5,
      },
      {
        Name: 'Galvanising Alloys',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: 'c2bf3a86-1108-40e0-90c9-3788e41c9e54',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Mass Manager',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Chloe Sedesi',
      'Professor Palin',
      'Colonel Bris Dekker',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 5,
      },
      {
        Name: 'Galvanising Alloys',
        Size: 3,
      },
      {
        Name: 'Eccentric Hyperspace Trajectories',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-8%',
        Property: 'Integrity',
        IsGood: false,
      },
      {
        Effect: '+4%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
    ],
    CoriolisGuid: '4d7d30c3-970b-4c6e-a507-89ac7e6441bd',
    id: '9e9fbd29-5fe2-4d14-815f-2defd57a2b16',
    type: 'Engineer',
  },
  {
    Type: 'Frame Shift Drive',
    Name: 'Thermal Spread',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Chloe Sedesi',
      'Professor Palin',
      'Colonel Bris Dekker',
    ],
    Ingredients: [
      {
        Name: 'Atypical Disrupted Wake Echoes',
        Size: 5,
      },
      {
        Name: 'Galvanising Alloys',
        Size: 3,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
      {
        Name: 'Grid Resistors',
        Size: 3,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    id: '5da60f81-3669-4ab3-8330-2c26183be2b2',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Stripped Down',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '7d702f63-c735-4081-8d77-74166305416a',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Double Braced',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: '3df251d9-6d50-4839-8a69-e90c05288437',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drive Distributors',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Optimal Mass',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'bd3c1991-370e-4b9d-b8cd-d5dec3260647',
    id: 'a34b842b-cd8d-4b8f-965b-23d62f829c41',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Drag Drives',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+4%',
        Property: 'Optimal Multiplier',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Thermal Load',
        IsGood: false,
      },
    ],
    CoriolisGuid: '68998b16-7b65-4f58-8bc0-6e0f2686c367',
    id: 'f69a2fa4-81e6-4d1d-bd02-7d03c57e209a',
    type: 'Engineer',
  },
  {
    Type: 'Thrusters',
    Name: 'Thermal Spread',
    Engineers: [
      'Mel Brandon',
      'Felicity Farseer',
      'Elvira Martuuk',
      'Professor Palin',
      'Chloe Sedesi',
    ],
    Ingredients: [
      {
        Name: 'Iron',
        Size: 5,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 3,
      },
      {
        Name: 'Heat Vanes',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+5%',
        Property: 'Mass',
        IsGood: false,
      },
      {
        Effect: '-10%',
        Property: 'Thermal Load',
        IsGood: true,
      },
    ],
    id: 'ac407bb3-0948-44ad-9baf-bbbcd9021287',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Flow Control',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Conductive Polymers',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Power Draw',
        IsGood: true,
      },
    ],
    id: '7d3b3b48-e6c2-4730-8b77-5cfdeb4a7dd8',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Super Conduits',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Security Firmware Patch',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-4%',
        Property: 'Weapons Capacity',
        IsGood: false,
      },
      {
        Effect: '+4%',
        Property: 'Weapons Recharge',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Engines Capacity',
        IsGood: false,
      },
      {
        Effect: '+4%',
        Property: 'Engines Recharge',
        IsGood: true,
      },
      {
        Effect: '-4%',
        Property: 'Systems Capacity',
        IsGood: false,
      },
      {
        Effect: '+4%',
        Property: 'Systems Recharge',
        IsGood: true,
      },
    ],
    CoriolisGuid: 'b5bb35a1-e851-4d37-8f26-8fe828f84c95',
    id: '71d12ac0-74a6-4a4f-934a-e93e61159f48',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Cluster Capacitor',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Cadmium',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+8%',
        Property: 'Weapons Capacity',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Weapons Recharge',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Engines Capacity',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Engines Recharge',
        IsGood: false,
      },
      {
        Effect: '+8%',
        Property: 'Systems Capacity',
        IsGood: true,
      },
      {
        Effect: '-2%',
        Property: 'Systems Recharge',
        IsGood: false,
      },
    ],
    CoriolisGuid: 'c4231886-f988-4a31-a749-2a58550f9e44',
    id: 'f2bf3884-1615-4286-b05b-be83e33b75f7',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Stripped Down',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Proto Light Alloys',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '-10%',
        Property: 'Mass',
        IsGood: true,
      },
    ],
    id: '9c754701-caef-4c3e-a8a2-706942801b31',
    type: 'Engineer',
  },
  {
    Type: 'Power Distributor',
    Name: 'Double Braced',
    Engineers: ['Etienne Dorn', 'The Dweller', 'Marco Qwent', 'Hera Tani'],
    Ingredients: [
      {
        Name: 'Phosphorus',
        Size: 5,
      },
      {
        Name: 'Heat Resistant Ceramics',
        Size: 3,
      },
      {
        Name: 'Proprietary Composites',
        Size: 1,
      },
    ],
    Effects: [
      {
        Effect: '+15%',
        Property: 'Integrity',
        IsGood: true,
      },
    ],
    id: 'ea38dbde-c0d9-4bb5-a37a-901d101e744c',
    type: 'Engineer',
  },
  {
    Type: 'Human',
    Name: 'Engineered Detailed Surface Scanner V1',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Mechanical Scrap',
        Size: 26,
      },
      {
        Name: 'Germanium',
        Size: 22,
      },
      {
        Name: 'Mechanical Components',
        Size: 28,
      },
      {
        Name: 'Niobium',
        Size: 24,
      },
    ],
    id: 'a161731f-cde0-4fd9-aa49-91d92ad35d4e',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Engineered FSD V1',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Tellurium',
        Size: 26,
      },
      {
        Name: 'Electrochemical Arrays',
        Size: 26,
      },
      {
        Name: 'Chemical Processors',
        Size: 28,
      },
      {
        Name: 'Datamined Wake Exceptions',
        Size: 18,
      },
    ],
    id: 'd992dea7-0933-4700-9567-074dbe90cbc5',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Engineered Missile Rack V1',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Proto Radiolic Alloys',
        Size: 16,
      },
      {
        Name: 'Phosphorus',
        Size: 28,
      },
      {
        Name: 'Osmium',
        Size: 10,
      },
      {
        Name: 'Conductive Ceramics',
        Size: 24,
      },
      {
        Name: 'Hybrid Capacitors',
        Size: 26,
      },
    ],
    id: 'd2891cd6-e9e0-410b-91e2-9b3082dbd2ac',
    type: 'Technology',
  },
  {
    Type: 'Human',
    Name: 'Modified Mining Laser',
    Engineers: ['@Technology'],
    Ingredients: [
      {
        Name: 'Arsenic',
        Size: 20,
      },
      {
        Name: 'Osmium',
        Size: 16,
      },
      {
        Name: 'Phosphorus',
        Size: 28,
      },
      {
        Name: 'Rhenium',
        Size: 24,
      },
    ],
    id: '9efec621-535f-4bdf-b477-3e205b639b74',
    type: 'Technology',
  },
  {
    Type: 'Suit',
    Name: 'Enhanced tracking',
    Engineers: ['Domino Green', 'Oden Geiger'],
    Ingredients: [
      {
        Name: 'Topographical Surveys',
        Size: 10,
      },
      {
        Name: 'Stellar Activity Logs',
        Size: 10,
      },
      {
        Name: 'Spectral Analysis Data',
        Size: 10,
      },
      {
        Name: 'Transmitter',
        Size: 5,
      },
      {
        Name: 'Circuit Board',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Analysis time',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Analysis range',
        IsGood: true,
      },
    ],
    id: 'e85e2c14-43d3-458e-85f2-c7562a1d2396',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Extra backpack capacity',
    Engineers: ['Domino Green', 'Wellington Beck'],
    Ingredients: [
      {
        Name: 'Weapon Inventory',
        Size: 10,
      },
      {
        Name: 'Chemical Inventory',
        Size: 10,
      },
      {
        Name: 'Digital Designs',
        Size: 10,
      },
      {
        Name: 'Epoxy Adhesive',
        Size: 10,
      },
      {
        Name: 'Memory Chip',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Backpack data capacity',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Backpack component capacity',
        IsGood: true,
      },
      {
        Effect: '+100%',
        Property: 'Backpack item capacity',
        IsGood: true,
      },
    ],
    id: 'c3440063-2a6a-48c1-9b8d-cdc02119fa8e',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Greater range (Manticore plasma)',
    Engineers: ['Domino Green', 'Wellington Beck'],
    Ingredients: [
      {
        Name: 'Chemical Formulae',
        Size: 10,
      },
      {
        Name: 'Mineral Survey',
        Size: 15,
      },
      {
        Name: 'Motor',
        Size: 5,
      },
      {
        Name: 'Electromagnet',
        Size: 10,
      },
      {
        Name: 'Electrical Fuse',
        Size: 5,
      },
    ],
    Effects: [],
    id: '3e25cea6-1a89-40d8-a3fd-40244bda151b',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Greater range (Kinematic kinetic)',
    Engineers: ['Domino Green', 'Wellington Beck'],
    Ingredients: [
      {
        Name: 'Ballistic Data',
        Size: 10,
      },
      {
        Name: 'Topographical Surveys',
        Size: 10,
      },
      {
        Name: 'Metal Coil',
        Size: 10,
      },
      {
        Name: 'RDX',
        Size: 10,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [],
    id: 'dc0620be-f7ea-4bc8-94b6-2da1645e543f',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Greater range (Takada laser)',
    Engineers: ['Domino Green', 'Wellington Beck'],
    Ingredients: [
      {
        Name: 'Stellar Activity Logs',
        Size: 10,
      },
      {
        Name: 'Risk Assessments',
        Size: 15,
      },
      {
        Name: 'Micro Transformer',
        Size: 15,
      },
      {
        Name: 'Optical Lens',
        Size: 5,
      },
      {
        Name: 'Circuit Board',
        Size: 5,
      },
    ],
    Effects: [],
    id: 'f84db4d7-e8aa-4210-a657-15259e80aa10',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Reduced tool battery consumption',
    Engineers: ['Domino Green', 'Wellington Beck'],
    Ingredients: [
      {
        Name: 'Reactor Output Review',
        Size: 10,
      },
      {
        Name: 'Electrical Fuse',
        Size: 5,
      },
      {
        Name: 'Micro Transformer',
        Size: 10,
      },
      {
        Name: 'Electrical Wiring',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '+100%',
        Property: 'Tool energy drain multiplier',
        IsGood: true,
      },
    ],
    id: '0c1182e3-9b3f-4604-b685-af9079eae329',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Stability',
    Engineers: ['Domino Green', 'Oden Geiger'],
    Ingredients: [
      {
        Name: 'Mining Analytics',
        Size: 10,
      },
      {
        Name: 'Risk Assessments',
        Size: 15,
      },
      {
        Name: 'Viscoelastic Polymer',
        Size: 10,
      },
      {
        Name: 'Micro Hydraulics',
        Size: 10,
      },
    ],
    Effects: [
      {
        Effect: '+30%',
        Property: 'Stability',
        IsGood: true,
      },
    ],
    id: '2e53c112-d64d-471f-988b-f3e614536daa',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Added melee damage',
    Engineers: ['Kit Fowler', 'Jude Navarro'],
    Ingredients: [
      {
        Name: 'Combat Training Material',
        Size: 10,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Epinephrine',
        Size: 10,
      },
      {
        Name: 'Micro Thrusters',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '+150%',
        Property: 'Weapon melee damage multiplier',
        IsGood: true,
      },
      {
        Effect: '+150%',
        Property: 'Fists melee damage multiplier',
        IsGood: true,
      },
    ],
    id: '27228f59-9b23-48da-879e-02ed8bcf39ea',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Extra ammo capacity',
    Engineers: ['Kit Fowler', 'Jude Navarro'],
    Ingredients: [
      {
        Name: 'Recycling Logs',
        Size: 15,
      },
      {
        Name: 'Weapon Test Data',
        Size: 10,
      },
      {
        Name: 'Production Reports',
        Size: 10,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '+50%',
        Property: 'Ammo capacity multiplier',
        IsGood: true,
      },
    ],
    id: 'bcad9ccb-9e51-44dc-84a1-2a6d07db6f60',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Faster shield regen',
    Engineers: ['Kit Fowler', 'Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Reactor Output Review',
        Size: 10,
      },
      {
        Name: 'Ion Battery',
        Size: 5,
      },
      {
        Name: 'Micro Transformer',
        Size: 15,
      },
      {
        Name: 'Electrical Wiring',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '+33%',
        Property: 'Shield health',
        IsGood: true,
      },
    ],
    id: '4c6536a9-b1bc-4854-901c-5664f820659f',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Magazine size',
    Engineers: ['Kit Fowler', 'Jude Navarro'],
    Ingredients: [
      {
        Name: 'Weapon Test Data',
        Size: 10,
      },
      {
        Name: 'Security Expenses',
        Size: 5,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 5,
      },
      {
        Name: 'Metal Coil',
        Size: 10,
      },
    ],
    Effects: [],
    id: 'ca5c7e56-9393-4f4a-bce9-6bc0815817b5',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Stowed reloading',
    Engineers: ['Kit Fowler', 'Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Digital Designs',
        Size: 10,
      },
      {
        Name: 'Operational Manual',
        Size: 10,
      },
      {
        Name: 'Production Schedule',
        Size: 10,
      },
      {
        Name: 'Circuit Board',
        Size: 5,
      },
      {
        Name: 'Encrypted Memory Chip',
        Size: 15,
      },
    ],
    Effects: [],
    id: '19738e29-cd8b-4918-b795-3b756553c72e',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Damage resistance',
    Engineers: ['Jude Navarro', 'Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Weapon Inventory',
        Size: 10,
      },
      {
        Name: 'Ballistic Data',
        Size: 10,
      },
      {
        Name: 'Titanium Plating',
        Size: 5,
      },
      {
        Name: 'Carbon Fibre Plating',
        Size: 5,
      },
      {
        Name: 'Epoxy Adhesive',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '+10%',
        Property: 'Explosive damage multiplier',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Plasma damage multiplier',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Thermic damage multiplier',
        IsGood: true,
      },
      {
        Effect: '+10%',
        Property: 'Kinetic damage multiplier',
        IsGood: true,
      },
    ],
    id: 'fed12ec6-401a-4cec-94bb-745250ae2239',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Reload speed',
    Engineers: ['Jude Navarro', 'Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Operational Manual',
        Size: 10,
      },
      {
        Name: 'Production Reports',
        Size: 10,
      },
      {
        Name: 'Combat Training Material',
        Size: 10,
      },
      {
        Name: 'Micro Hydraulics',
        Size: 10,
      },
      {
        Name: 'Electromagnet',
        Size: 10,
      },
    ],
    Effects: [],
    id: '784e2093-6f60-4d22-be18-9b7ec5869ecf',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Faster handling',
    Engineers: ['Hero Ferrari', 'Yarden Bond'],
    Ingredients: [
      {
        Name: 'Operational Manual',
        Size: 10,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Combat Training Material',
        Size: 10,
      },
      {
        Name: 'Viscoelastic Polymer',
        Size: 5,
      },
    ],
    Effects: [],
    id: '46ec108e-b928-4063-9bd3-58ce141a2806',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Improved Hip Fire Accuracy (Manticore plasma)',
    Engineers: ['Terra Velasquez', 'Yarden Bond'],
    Ingredients: [
      {
        Name: 'Chemical Patents',
        Size: 5,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Chemical Catalyst',
        Size: 10,
      },
      {
        Name: 'Electromagnet',
        Size: 10,
      },
      {
        Name: 'Metal Coil',
        Size: 10,
      },
    ],
    Effects: [],
    id: '3af20d56-bc38-465d-aafa-0287abb2f87e',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Improved Hip Fire Accuracy (Kinematic kinetic)',
    Engineers: ['Terra Velasquez', 'Yarden Bond'],
    Ingredients: [
      {
        Name: 'Extraction Yield Data',
        Size: 10,
      },
      {
        Name: 'Biometric Data',
        Size: 5,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Viscoelastic Polymer',
        Size: 10,
      },
      {
        Name: 'RDX',
        Size: 10,
      },
    ],
    Effects: [],
    id: 'af0f1976-5800-4a42-bc94-8677de82bc2d',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Improved Hip Fire Accuracy (Takada laser)',
    Engineers: ['Terra Velasquez', 'Yarden Bond'],
    Ingredients: [
      {
        Name: 'Radioactivity Data',
        Size: 5,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Metal Coil',
        Size: 10,
      },
      {
        Name: 'Optical Lens',
        Size: 5,
      },
      {
        Name: 'Electrical Wiring',
        Size: 15,
      },
    ],
    Effects: [],
    id: '01283ddc-9817-4f16-9edf-a5c95bc70293',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Improved jump assist',
    Engineers: ['Hero Ferrari', 'Yarden Bond'],
    Ingredients: [
      {
        Name: 'G-Meds',
        Size: 10,
      },
      {
        Name: 'Topographical Surveys',
        Size: 10,
      },
      {
        Name: 'Micro Thrusters',
        Size: 5,
      },
      {
        Name: 'Motor',
        Size: 10,
      },
    ],
    Effects: [],
    id: '53ade77c-cc03-4469-af28-f0427435b4c7',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Increased air reserves',
    Engineers: ['Hero Ferrari', 'Terra Velasquez'],
    Ingredients: [
      {
        Name: 'Pharmaceutical Patents',
        Size: 5,
      },
      {
        Name: 'Air Quality Reports',
        Size: 15,
      },
      {
        Name: 'Oxygenic Bacteria',
        Size: 10,
      },
      {
        Name: 'pH Neutraliser',
        Size: 15,
      },
    ],
    Effects: [],
    id: 'ca655be7-b8d8-459a-937d-b2a085b7f510',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Increased sprint duration',
    Engineers: ['Hero Ferrari', 'Terra Velasquez'],
    Ingredients: [
      {
        Name: 'Troop Deployment Records',
        Size: 5,
      },
      {
        Name: 'Gene Sequencing Data',
        Size: 5,
      },
      {
        Name: 'Clinical Trial Records',
        Size: 5,
      },
      {
        Name: 'Oxygenic Bacteria',
        Size: 10,
      },
      {
        Name: 'Chemical Catalyst',
        Size: 15,
      },
    ],
    Effects: [],
    id: '41decba6-2435-4a89-bd7e-6943797a0dbb',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Noise suppressor',
    Engineers: ['Hero Ferrari', 'Terra Velasquez'],
    Ingredients: [
      {
        Name: 'Atmospheric Data',
        Size: 10,
      },
      {
        Name: 'Mining Analytics',
        Size: 10,
      },
      {
        Name: 'Viscoelastic Polymer',
        Size: 15,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [],
    id: 'd64b3926-9fc4-4def-bdbb-f9ba0eb804de',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Improved battery capacity',
    Engineers: ['Wellington Beck', 'Oden Geiger'],
    Ingredients: [
      {
        Name: 'Reactor Output Review',
        Size: 10,
      },
      {
        Name: 'Maintenance Logs',
        Size: 15,
      },
      {
        Name: 'Ion Battery',
        Size: 5,
      },
      {
        Name: 'Micro Supercapacitor',
        Size: 10,
      },
      {
        Name: 'Electrical Wiring',
        Size: 10,
      },
    ],
    Effects: [],
    id: 'bf2fbbf7-bdaa-4667-97e7-c9f8f2d88874',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Scope',
    Engineers: ['Wellington Beck', 'Oden Geiger'],
    Ingredients: [
      {
        Name: 'Spectral Analysis Data',
        Size: 10,
      },
      {
        Name: 'Biometric Data',
        Size: 5,
      },
      {
        Name: 'Optical Lens',
        Size: 10,
      },
      {
        Name: 'Optical Fibre',
        Size: 5,
      },
    ],
    Effects: [],
    id: '2873f157-6c93-48c2-a05c-255f68c61bd7',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Headshot damage (Manticore plasma)',
    Engineers: ['Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Chemical Experiment Data',
        Size: 10,
      },
      {
        Name: 'Blood Test Results',
        Size: 5,
      },
      {
        Name: 'Ion Battery',
        Size: 10,
      },
      {
        Name: 'Electromagnet',
        Size: 10,
      },
      {
        Name: 'Micro Supercapacitor',
        Size: 15,
      },
    ],
    Effects: [],
    id: '703cfdbe-678c-4443-8c03-8c7911fdff62',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Headshot damage (Kinematic kinetic)',
    Engineers: ['Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Weapon Test Data',
        Size: 10,
      },
      {
        Name: 'Medical Records',
        Size: 5,
      },
      {
        Name: 'Chemical Catalyst',
        Size: 10,
      },
      {
        Name: 'RDX',
        Size: 15,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [],
    id: '7e4f223c-e595-41d2-b21d-bf0a37b78e4d',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Headshot damage (Takada laser)',
    Engineers: ['Uma Laszlo'],
    Ingredients: [
      {
        Name: 'Spectral Analysis Data',
        Size: 10,
      },
      {
        Name: 'Biometric Data',
        Size: 5,
      },
      {
        Name: 'Ion Battery',
        Size: 10,
      },
      {
        Name: 'Optical Lens',
        Size: 5,
      },
      {
        Name: 'Scrambler',
        Size: 10,
      },
    ],
    Effects: [],
    id: '861b719a-b361-4c90-9df9-112911b6f38a',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Night vision',
    Engineers: ['Oden Geiger'],
    Ingredients: [
      {
        Name: 'Surveillance Equipment',
        Size: 10,
      },
      {
        Name: 'Surveillance Logs',
        Size: 5,
      },
      {
        Name: 'Radioactivity Data',
        Size: 5,
      },
      {
        Name: 'NOC Data',
        Size: 5,
      },
      {
        Name: 'Circuit Switch',
        Size: 10,
      },
    ],
    Effects: [],
    id: '325579c2-2783-4b56-9efa-e58eb8409ad2',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Quieter footsteps',
    Engineers: ['Yarden Bond'],
    Ingredients: [
      {
        Name: 'Settlement Assault Plans',
        Size: 5,
      },
      {
        Name: 'Tactical Plans',
        Size: 10,
      },
      {
        Name: 'Patrol Routes',
        Size: 10,
      },
      {
        Name: 'Micro Hydraulics',
        Size: 5,
      },
      {
        Name: 'Viscoelastic Polymer',
        Size: 15,
      },
    ],
    Effects: [],
    id: '1bc8e6e1-4e55-4f1c-a35e-7340f43a2b8b',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Audio Masking',
    Engineers: ['Yarden Bond'],
    Ingredients: [
      {
        Name: 'Audio Logs',
        Size: 5,
      },
      {
        Name: 'Patrol Routes',
        Size: 10,
      },
      {
        Name: 'Scrambler',
        Size: 10,
      },
      {
        Name: 'Transmitter',
        Size: 15,
      },
      {
        Name: 'Circuit Board',
        Size: 5,
      },
    ],
    Effects: [],
    id: '0756b375-4edc-474e-94c0-f532c63eab04',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Higher Accuracy (Kinetic Weapons)',
    Engineers: ['Yarden Bond'],
    Ingredients: [
      {
        Name: 'Extraction Yield Data',
        Size: 10,
      },
      {
        Name: 'Biometric Data',
        Size: 5,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Viscoelastic Polymer',
        Size: 10,
      },
      {
        Name: 'RDX',
        Size: 10,
      },
    ],
    Effects: [],
    id: 'd4bdeb1e-aa52-4e61-ba9b-b4d8f8e7ee4b',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Higher Accuracy (Thermal Weapons)',
    Engineers: ['Yarden Bond'],
    Ingredients: [
      {
        Name: 'Radioactivity Data',
        Size: 5,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Metal Coil',
        Size: 10,
      },
      {
        Name: 'Optical Lens',
        Size: 5,
      },
      {
        Name: 'Electrical Wiring',
        Size: 15,
      },
    ],
    Effects: [],
    id: '22700151-2ef2-43b1-889c-b9e13d22c268',
    type: 'Engineer',
  },
  {
    Type: 'Weapon',
    Name: 'Higher Accuracy (Plasma Weapons)',
    Engineers: ['Yarden Bond'],
    Ingredients: [
      {
        Name: 'Chemical Patents',
        Size: 5,
      },
      {
        Name: 'Combatant Performance',
        Size: 10,
      },
      {
        Name: 'Chemical Catalyst',
        Size: 10,
      },
      {
        Name: 'Electromagnet',
        Size: 10,
      },
      {
        Name: 'Metal Coil',
        Size: 10,
      },
    ],
    Effects: [],
    id: 'eed5fa6f-0b4d-40e7-850f-ef94744f8301',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Combat Movement Speed',
    Engineers: ['Terra Velasquez', 'Yarden Bond'],
    Ingredients: [
      {
        Name: 'Evacuation Protocols',
        Size: 10,
      },
      {
        Name: 'Genetic Research',
        Size: 5,
      },
      {
        Name: 'Epinephrine',
        Size: 10,
      },
      {
        Name: 'pH Neutraliser',
        Size: 15,
      },
    ],
    Effects: [],
    id: '6ceccede-2448-407f-bd37-420330527a18',
    type: 'Engineer',
  },
  {
    Type: 'Suit',
    Name: 'Artemis',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 1,
      },
      {
        Name: 'Health Monitor',
        Size: 1,
      },
      {
        Name: 'Power Regulator',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Aerogel',
        Size: 5,
      },
      {
        Name: 'Graphene',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '22%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '22%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '-42%',
        Property: 'Kinetic damage resistance',
        IsGood: false,
      },
      {
        Effect: '0%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '16%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'd6e5444f-e0ef-4d5b-bef1-ba0fbf2e48d3',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Artemis',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 5,
      },
      {
        Name: 'Health Monitor',
        Size: 5,
      },
      {
        Name: 'Power Regulator',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Aerogel',
        Size: 15,
      },
      {
        Name: 'Graphene',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '-21%',
        Property: 'Kinetic damage resistance',
        IsGood: false,
      },
      {
        Effect: '14%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '57%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '29%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: 'c2f4f85e-0ddd-4d76-a15f-f9b1640af8d4',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Artemis',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 10,
      },
      {
        Name: 'Health Monitor',
        Size: 10,
      },
      {
        Name: 'Power Regulator',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Aerogel',
        Size: 25,
      },
      {
        Name: 'Graphene',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '85%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '85%',
        Property: 'Shield health',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'a241216c-3e3f-4f41-963f-bf1950f30605',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Artemis',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 15,
      },
      {
        Name: 'Health Monitor',
        Size: 15,
      },
      {
        Name: 'Power Regulator',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Aerogel',
        Size: 35,
      },
      {
        Name: 'Graphene',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '125%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '125%',
        Property: 'Shield health',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '2a9a77ef-4273-47fb-bbac-7c3defc8828f',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Dominator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 1,
      },
      {
        Name: 'Health Monitor',
        Size: 1,
      },
      {
        Name: 'Power Regulator',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Titanium Plating',
        Size: 5,
      },
      {
        Name: 'Graphene',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '22%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '22%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '-34%',
        Property: 'Kinetic damage resistance',
        IsGood: false,
      },
      {
        Effect: '7%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '58%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '16%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'a13896bb-cd42-4204-a87f-3479934a6e0e',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Dominator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 5,
      },
      {
        Name: 'Health Monitor',
        Size: 5,
      },
      {
        Name: 'Power Regulator',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Titanium Plating',
        Size: 15,
      },
      {
        Name: 'Graphene',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '-7%',
        Property: 'Kinetic damage resistance',
        IsGood: false,
      },
      {
        Effect: '29%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '72%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '29%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '0e4c4226-0eb2-4a6d-a1c8-dc7c19769798',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Dominator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 10,
      },
      {
        Name: 'Health Monitor',
        Size: 10,
      },
      {
        Name: 'Power Regulator',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Titanium Plating',
        Size: 25,
      },
      {
        Name: 'Graphene',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '85%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '85%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '19%',
        Property: 'Kinetic damage resistance',
        IsGood: true,
      },
      {
        Effect: '46%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '78%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '46%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '349288af-d183-4b9d-a6aa-c74ffeff49a3',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Dominator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 15,
      },
      {
        Name: 'Health Monitor',
        Size: 15,
      },
      {
        Name: 'Power Regulator',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Titanium Plating',
        Size: 35,
      },
      {
        Name: 'Graphene',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '125%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '125%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '25%',
        Property: 'Kinetic damage resistance',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '80%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '32c6d621-de7b-4991-8bc6-a68926956c9e',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Maverick',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 1,
      },
      {
        Name: 'Health Monitor',
        Size: 1,
      },
      {
        Name: 'Power Regulator',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Carbon Fibre Plating',
        Size: 5,
      },
      {
        Name: 'Graphene',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '22%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '22%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '-34%',
        Property: 'Kinetic damage resistance',
        IsGood: false,
      },
      {
        Effect: '7%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '58%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '16%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: '451284e5-a38e-4af9-9a1d-804a556ad605',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Maverick',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 5,
      },
      {
        Name: 'Health Monitor',
        Size: 5,
      },
      {
        Name: 'Power Regulator',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Carbon Fibre Plating',
        Size: 15,
      },
      {
        Name: 'Graphene',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '50%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '-13%',
        Property: 'Kinetic damage resistance',
        IsGood: false,
      },
      {
        Effect: '22%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '64%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '29%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '8f424bd9-8491-42f5-8fc0-8ebd55c558c9',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Maverick',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 10,
      },
      {
        Name: 'Health Monitor',
        Size: 10,
      },
      {
        Name: 'Power Regulator',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Carbon Fibre Plating',
        Size: 25,
      },
      {
        Name: 'Graphene',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '85%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '85%',
        Property: 'Shield health',
        IsGood: true,
      },
      {
        Effect: '6%',
        Property: 'Kinetic damage resistance',
        IsGood: true,
      },
      {
        Effect: '35%',
        Property: 'Plasma damage resistance',
        IsGood: true,
      },
      {
        Effect: '70%',
        Property: 'Thermic damage resistance',
        IsGood: true,
      },
      {
        Effect: '41%',
        Property: 'Explosive damage resistance',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '1bbc9c26-c80b-4392-90fb-f1aff8be33c2',
    type: 'Merchant',
  },
  {
    Type: 'Suit',
    Name: 'Maverick',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Suit Schematic',
        Size: 15,
      },
      {
        Name: 'Health Monitor',
        Size: 15,
      },
      {
        Name: 'Power Regulator',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Carbon Fibre Plating',
        Size: 35,
      },
      {
        Name: 'Graphene',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
      {
        Effect: '125%',
        Property: 'Shield regeneration rate',
        IsGood: true,
      },
      {
        Effect: '125%',
        Property: 'Shield health',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '88f2f94d-a2b8-44b6-a0bc-fad02958347a',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma P-15',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 5,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'f7aae29a-a276-419a-b952-3f60baf8eae3',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma P-15',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 15,
      },
      {
        Name: 'Weapon Component',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '5fe62b17-7c55-4f2d-908d-b30f33124cb3',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma P-15',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 25,
      },
      {
        Name: 'Weapon Component',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'ef7036f6-39ef-4e4d-8f1f-00c85869ec79',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma P-15',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 35,
      },
      {
        Name: 'Weapon Component',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '026b86f6-0248-48a0-a062-12368cf8fe12',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Tormentor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Chemical Superbase',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: '7a6d8a06-1ca5-4aab-a388-9b6ee34e9f28',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Tormentor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Chemical Superbase',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '738dc6d9-5c0d-414e-97b9-1208ea533687',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Tormentor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Chemical Superbase',
        Size: 25,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '4764e094-e3c9-4fed-bafd-f50956ee680e',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Tormentor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Chemical Superbase',
        Size: 35,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: 'd21c4551-ab94-433a-80c7-25c96fb64251',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Zenith',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
      {
        Name: 'Optical Fibre',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'ae6b0753-4418-4497-92a5-605963fa5fb6',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Zenith',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
      {
        Name: 'Optical Fibre',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: 'd7b98765-dd71-4845-9d27-f07f3c2667f5',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Zenith',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
      {
        Name: 'Optical Fibre',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'd6d4c424-79b1-47f6-bb8d-78b510d8fbb3',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Zenith',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
      {
        Name: 'Optical Fibre',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '1e450ef8-3ce0-4f3a-9ac8-a605301df868',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma AR-50',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 5,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'e115d662-f308-42c6-bcaa-312b85e8347e',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma AR-50',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 15,
      },
      {
        Name: 'Weapon Component',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '48a7d776-5fd9-4e9c-bd65-c3b792ace97f',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma AR-50',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 25,
      },
      {
        Name: 'Weapon Component',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '9bf07e59-6f12-48ad-a886-e362d3880674',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma AR-50',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 35,
      },
      {
        Name: 'Weapon Component',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '7f2bb879-36cd-4bd4-b117-add942c4de20',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma C-44',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 5,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'd9637a64-610b-48e5-b3d4-557f9cbfc997',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma C-44',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 15,
      },
      {
        Name: 'Weapon Component',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '7dcb12c4-f8ec-478a-b731-c213b3ee3086',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma C-44',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 25,
      },
      {
        Name: 'Weapon Component',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '4799394a-f81a-4782-ab70-3f01ee9cb1f5',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma C-44',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 35,
      },
      {
        Name: 'Weapon Component',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '93588969-c1e8-4ce9-beba-780a565db5d0',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma L-6',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 5,
      },
      {
        Name: 'Weapon Component',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: '9f33504f-07fb-4567-8c28-2a91b5750699',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma L-6',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 15,
      },
      {
        Name: 'Weapon Component',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: 'd769fd42-d7da-4cd9-8fec-b244285444b6',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma L-6',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 25,
      },
      {
        Name: 'Weapon Component',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'c4509c0b-cd94-4881-9be2-d1d9f82e2131',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Karma L-6',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Compression-Liquefied Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Tungsten Carbide',
        Size: 35,
      },
      {
        Name: 'Weapon Component',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '5566d0c1-7f12-4b01-be94-8b2d2f8270e8',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Executioner',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Chemical Superbase',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: '82494513-2934-412e-bfda-ab3d0df7d3b9',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Executioner',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Chemical Superbase',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '61012b22-6c84-4e05-abd4-2faeafda4977',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Executioner',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Chemical Superbase',
        Size: 25,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'dab9405c-ab99-48d2-b254-4bc609c71ed9',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Executioner',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Chemical Superbase',
        Size: 35,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '9e652d39-0cdd-4618-977c-b6b073e7d238',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Intimidator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Chemical Superbase',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: '77e142f0-e949-412f-8b60-37f6977a29f6',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Intimidator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Chemical Superbase',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: 'dd5fc7b7-90cd-4345-8376-007468020bc0',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Intimidator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Chemical Superbase',
        Size: 25,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'c903b59b-ba19-49e9-9ce2-785173bf3f96',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Intimidator',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Chemical Superbase',
        Size: 35,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '0a216ce6-9dc0-4a51-93dd-aac8f305ba64',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Oppressor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Chemical Superbase',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'b8526d80-3835-480f-b7fe-ab3623478942',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Opressor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Chemical Superbase',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: 'e10f0c91-de97-4192-828b-8a9e61de3f81',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Opressor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Chemical Superbase',
        Size: 25,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '95c5d24e-1d1a-43e1-8f47-38057165a478',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'Manticore Opressor',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Chemical Superbase',
        Size: 35,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '1945d46f-0905-4d71-90c7-b29501c6521e',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Aphelion',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
      {
        Name: 'Optical Fibre',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: '930976d5-38ea-4810-8806-bca11fb904e5',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Aphelion',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
      {
        Name: 'Optical Fibre',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '55ed9840-04bb-4ffc-9489-e61b87afc18d',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Aphelion',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
      {
        Name: 'Optical Fibre',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: '2dd6757c-7309-4ff2-b008-3205a6da87d9',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Aphelion',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
      {
        Name: 'Optical Fibre',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '8edc159f-8e99-44e7-85eb-613e0e896df1',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Eclipse',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 1,
      },
      {
        Name: 'Ionised Gas',
        Size: 1,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 1,
      },
      {
        Name: 'Microelectrode',
        Size: 5,
      },
      {
        Name: 'Optical Fibre',
        Size: 5,
      },
    ],
    Effects: [
      {
        Effect: '1',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 2,
    id: 'fe5af613-a52d-4f25-b449-223e0f466a19',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Eclipse',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 5,
      },
      {
        Name: 'Ionised Gas',
        Size: 5,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 5,
      },
      {
        Name: 'Microelectrode',
        Size: 15,
      },
      {
        Name: 'Optical Fibre',
        Size: 15,
      },
    ],
    Effects: [
      {
        Effect: '2',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 3,
    id: '67a3f6b9-e33c-459f-9c21-59ad13b7535c',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Eclipse',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 10,
      },
      {
        Name: 'Ionised Gas',
        Size: 10,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 10,
      },
      {
        Name: 'Microelectrode',
        Size: 25,
      },
      {
        Name: 'Optical Fibre',
        Size: 25,
      },
    ],
    Effects: [
      {
        Effect: '3',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 4,
    id: 'ecb77ec5-0314-4a43-aa31-2d17adbdd1af',
    type: 'Merchant',
  },
  {
    Type: 'Weapon',
    Name: 'TK Eclipse',
    Engineers: ['@Merchant'],
    Ingredients: [
      {
        Name: 'Weapon Schematic',
        Size: 15,
      },
      {
        Name: 'Ionised Gas',
        Size: 15,
      },
      {
        Name: 'Manufacturing Instructions',
        Size: 15,
      },
      {
        Name: 'Microelectrode',
        Size: 35,
      },
      {
        Name: 'Optical Fibre',
        Size: 35,
      },
    ],
    Effects: [
      {
        Effect: '4',
        Property: 'Engineer modification slots',
        IsGood: true,
      },
    ],
    Grade: 5,
    id: '28c79147-0ee8-4e10-828a-131767dfa2c0',
    type: 'Merchant',
  },
]

// const determineBlueprintType = (blueprint: Blueprint): BlueprintType => {
//   if (blueprint.Engineers.includes('@Merchant')) {
//     return 'Merchant'
//   }
//   if (blueprint.Engineers.includes('@Technology')) {
//     return 'Technology'
//   }
//   if (blueprint.Engineers.includes('@Synthesis')) {
//     return 'Synthesis'
//   }
//   if (blueprint.Type === 'Unlock') {
//     return 'Unlock'
//   }
//   return 'Engineer'
// }

// const blueprintsWithIds = BLUEPRINTS.map((blueprint) => ({
//   ...blueprint,
//   id: self.crypto.randomUUID(),
//   type: determineBlueprintType(blueprint),
// }))

// console.log(blueprintsWithIds)

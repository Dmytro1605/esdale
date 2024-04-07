export default [
    {
        name: "TEXTS",
        details: [
            {
                type: "Matte",
                weights: [
                    { value: 100, pricePerUnit: 0.562 },
                    { value: 80, pricePerUnit: 0.437 },
                    { value: 70, pricePerUnit: 0.395 },
                    //{ value: 60, pricePerUnit: 0.502 },
                ],
            },
            {
                type: "Gloss",
                weights: [
                    { value: 100, pricePerUnit: 0.500 },
                    { value: 80, pricePerUnit: 0.375 },
                    { value: 70, pricePerUnit: 0.343 },
                    { value: 60, pricePerUnit: 0.281 },
                ],
            },
        ],
    },
    {
        name: "OFFSET",
        details: [
            {
                type: "standard",
                weights: [
                    { value: 100, pricePerUnit: 0.812 },
                    { value: 80, pricePerUnit: 0.625 },
                    { value: 70, pricePerUnit: 0.562 },
                    { value: 60, pricePerUnit: 0.450},
                    { value: 50, pricePerUnit: 0.413 },
                ],
            },
            /*{
              type: "Gloss",
              weights: [
                { value: 100, pricePerUnit: 0.500 },
                { value: 80, pricePerUnit: 0.375 },
                { value: 70, pricePerUnit: 0.343 },
                { value: 60, pricePerUnit: 0.312 },
              ],
            },*/
        ],
    },
    {
        name: "COVERS",
        details: [
            {
                type: "Matte",
                weights: [
                    { value: 100, pricePerUnit: 1.125 },
                    { value: 80, pricePerUnit: 0.937 },
                    /* { value: 70, pricePerUnit: 0.406 },
                     { value: 60, pricePerUnit: 0.502 },*/
                ],
            },
            {
                type: "Gloss",
                weights: [
                    { value: 100, pricePerUnit: 1.000 },
                    { value: 80, pricePerUnit: 0.812 },
                    /*{ value: 70, pricePerUnit: 0.343 },
                    { value: 60, pricePerUnit: 0.312 },*/
                ],
            },
        ],
    },
    {
        name: "COUGAR/LYNX",
        details: [
            {
                type: "Cover",
                weights: [
                    { value: 100, pricePerUnit: 1.437 },
                    { value: 80, pricePerUnit: 1.125 },
                    /* { value: 70, pricePerUnit: 0.406 },
                     { value: 60, pricePerUnit: 0.502 },*/
                ],
            },
            /*{
              type: "Gloss",
              weights: [
                { value: 100, pricePerUnit: 1.000 },
                { value: 80, pricePerUnit: 0.812 },
                { value: 70, pricePerUnit: 0.343 },
                { value: 60, pricePerUnit: 0.312 },
              ],
            },*/
        ],
    },
    {
        name: "BONDS",
        details: [
            {
                type: "standard",
                weights: [
                    { value: 24, pricePerUnit: 0.500 },
                    { value: 20, pricePerUnit: 0.437 },
                    /*{ value: 70, pricePerUnit: 0.562 },
                    { value: 60, pricePerUnit: 0.500 },
                    { value: 50, pricePerUnit: 0.413 },*/
                ],
            },
            /* {
               type: "Gloss",
               weights: [
                 { value: 100, pricePerUnit: 0.500 },
                 { value: 80, pricePerUnit: 0.375 },
                 { value: 70, pricePerUnit: 0.343 },
                 { value: 60, pricePerUnit: 0.312 },
               ],
             },*/
        ],
    },
    {
        name: "CAROLINA",
        details: [
            {
                type: "C1S",
                weights: [
                    { value: 18, pricePerUnit: 1.850 },
                    { value: 15, pricePerUnit: 1.450 },
                    { value: 12, pricePerUnit: 1.250 },
                    { value: 10, pricePerUnit: 0.937 },
                    { value: 8, pricePerUnit: 0.875 },
                ],
            },
            {
                type: "C2S",
                weights: [
                    { value: 14, pricePerUnit: 1.468 },
                    { value: 10, pricePerUnit: 1.000 },
                ],
            },
        ],
    },
    {
        name: "REPLY CARD",
        details: [
            {
                type: "standard",
                weights: [
                    { value: 7, pricePerUnit: 0.750 },
                    /* { value: 20, pricePerUnit: 0.437 },
                     { value: 70, pricePerUnit: 0.562 },
                     { value: 60, pricePerUnit: 0.500 },
                     { value: 50, pricePerUnit: 0.413 },
                   ],
                 },
                 {
                   type: "Gloss",
                   weights: [
                     { value: 100, pricePerUnit: 0.500 },
                     { value: 80, pricePerUnit: 0.375 },
                     { value: 70, pricePerUnit: 0.343 },
                     { value: 60, pricePerUnit: 0.312 },*/
                ],
            },
        ],
    },
    // Додай інші типи паперу та їх характеристики тут
];

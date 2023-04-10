const qs = {
    bossQs: [
        {
            type: 'input',
            message: 'TELL ME WHO DAS BOSS IS YA?',
            name: 'bossName'
        },
        {
            type: 'input',
            message: 'VAT IST BOSS ID #?',
            name: 'bossId'
        },
        {
            type: 'input',
            message: 'VAT IST BOSS ELECTRONIC MAILING ADDRESS?',
            name: 'bossEmail'
        },
        {
            type: 'input',
            message: 'VAT IST BOSS OFFICE PHONE NUMBA?',
            name: 'telly'
        }
    ],

    engineerQs: [
        {
            type: 'input',
            message: 'tell me the name of your engineer...',
            name: 'eName'
        },
    {
            type: 'input',
            message: 'vas is engineer id #?',
            name: 'eId'
        },
        {
            type: 'input',
            message: 'vat ist engineer email yah?',
            name: 'eEmail'
        },
        {
            type: 'input',
            message: 'vat ist das GitHub of das engineer?',
            name: 'github'
        }
    ],

    internQs: [
        {
            type: 'input',
            message: 'tell me the name of your intern...',
            name: 'iName'
        },
        {
            type: 'input',
            message: 'vas is intern id #?',
            name: 'iId'
        },
        {
            type: 'input',
            message: 'vat ist intern email yah?',
            name: 'iEmail'
        },
        {
            type: 'input',
            message: 'Where did your intern attend school @?',
            name: 'school'
        }
    ],

    nextSteps: [
            {
            type: 'list',
            message: 'Whatcha wanna do next?',
            choices: ['ADD AN ENGINEER!', 'ADD AN INTERN!', 'FINISH BUILDING MY TEAM'],
            name: 'options'
        }
    ]
};

module.exports = qs;
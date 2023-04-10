const fs = require('fs');
function generateHtml(boss, engineer, intern) {
    const topOfHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <Link rel="stylesheet" href="./public/style.css">
        <title>Employee ID Cards!</title>
    </head>
    <body>
        <div class = "card-container">`;
    const bottomOfHtml = `
        </div>
    </body>
    </html>`;
    let bossCard = `
                <div class = "card">
            <div class = "card-header"><h3>${boss[0].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Manager</h4></div>
                <p>ID: ${boss[0].id}</p>
                <p>Email: ${boss[0].email}</p>
                <p>Phone: ${boss[0].phone}</p>
            </div> 
        </div>`;
    let engineerCard = ``;
    let internCard = ``;
    for(let i = 0; i < engineer.length; i++) {
        // console.log(`
        // Name: ${engineer[i].name}
        // ID: ${engineer[i].id}
        // Email: ${engineer[i].email}
        // Github: ${engineer[i].github}
        // `);
        ehotel = `
                <div class = "card">
            <div class = "card-header"><h3>${engineer[i].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Engineer</h4></div>
                <p>ID: ${engineer[i].id}</p>
                <p>Email: ${engineer[i].email}</p>
                <p>Github: ${engineer[i].github}</p>
            </div> 
        </div>`
        engineerCard = engineerCard.concat(ehotel);

    }
    for(let i = 0; i < intern.length; i++) {
        // console.log(`
        // Name: ${intern[i].name}
        // ID: ${intern[i].id}
        // Email: ${intern[i].email}
        // School: ${intern[i].school}
        // `);
        ihotel = `
                <div class = "card">
            <div class = "card-header"><h3>${intern[i].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Intern</h4></div>
                <p>ID: ${intern[i].id}</p>
                <p>Email: ${intern[i].email}</p>
                <p>School: ${intern[i].school}</p>
            </div> 
        </div>`
        internCard = internCard.concat(ihotel);
    }
    let finalForm = ``.concat(topOfHtml, bossCard, engineerCard, internCard, bottomOfHtml);
    // console.log(topOfHtml);
    // console.log(bossCard);
    // console.log(engineerCard);
    // console.log(internCard);
    // console.log(bottomOfHtml);
    fs.writeFile(`index.html`, finalForm, (err)=>
    err ? console.error(err) : console.log('Success'));
    // console.log(finalForm);
}

module.exports = generateHtml;
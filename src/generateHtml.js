const managerHtml = function (manager) {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Employee Management</title>
    </head>
    <body>
        <header class="custom-header">
            <h1>My Team</h1>
        </header>

        <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title" id="user-name">Card title</h5>
                <p class="card-text" id="title">${userName}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item">Email:${email}</li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>
    </body>
</html>
    `;
};

const engineerHtml = function (engineer) {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Employee Management</title>
    </head>
    <body>
        <header class="custom-header">
            <h1>My Team</h1>
        </header>

        <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title" id="user-name">Card title</h5>
                <p class="card-text" id="title">${userName}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item">Email:${email}</li>
                <li class="list-group-item">GitHub: ${github}</li>
            </ul>
        </div>
    </body>
</html>
    `;
};

const internHtml = function (intern) {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Employee Management</title>
    </head>
    <body>
        <header class="custom-header">
            <h1>My Team</h1>
        </header>

        <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title" id="user-name">Card title</h5>
                <p class="card-text" id="title">${userName}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>
    </body>
</html>
    `;
};

// iterate through myTeam

// Write HTML file

module.exports = {
    managerHtml,
    engineerHtml,
    internHtml,
};

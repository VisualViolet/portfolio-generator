function generateImgLink(animal){
    if (animal == "Hamster")
    {
        return `http://www.fillster.com/images/pictures/20i.jpg`
    }
    else if (animal == "Cat")
    {
        return `http://www.fillster.com/images/pictures/173v.jpg`
    }
    else if (animal == "Dog")
    {
        return `http://www.fillster.com/images/pictures/195p.jpg`
    }
    else if (animal == "Opossum")
    {
        return `http://www.fillster.com/images/pictures/24r.jpg`
    }
    else
    {
        return `http://www.fillster.com/images/pictures/123m.jpg`
    }
}

function generateHTML(answers){
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${answers.name} Portfolio Page</title>
    <!--Google Font-->
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/style/style.css" />
    </head>
    <body>
    <header>
        <h1>Hello, my name is ${answers.name}.</h1>
    </header>
    <main id="bio">
        <p>${answers.bio}</p>
        <img src="${generateImgLink(answers.photo)}" alt="portfolio page picture">
    </main>
    <footer>
        <h2>Contact Me!</h2>
        <br>
        <p>Github: <a href="https://github.com/${answers.username}" target="_blank">${answers.username}</a></p>
        <br>
        <p>Email: <a href="mailto: ${answers.email}">${answers.email}</a></p>
    </footer>
    </body>
</html>
`
}

module.exports = generateHTML;
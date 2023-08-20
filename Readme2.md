*{
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
}
/* Header section start here. */
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: black;
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
}
.header__logo{
    justify-self: flex-start;
    padding: 0.5rem;
}

.nevi__element{
    display: flex;
    align-items: center;
    justify-items: flex-end;
    flex-direction: row;

    gap: 3rem;
    padding-right: 1rem;
    color: white;
}

.element{
    transition: all;
    transition-timing-function: linear;
}
.element:hover{
    transition-duration: 0.2s;
    background-color: blue;
}
/* Header section end here. */

/* Banner section start here. */
.banner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 100vh;
    
}
.descption{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 2%;
}
.desc__titel{
    background-color: black;
    color: white;
    max-width: 35%;
    font-size: 1.2rem;
}
.desc__body{
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    max-width: 70%;
}

.banner__photo{
    display: flex;
    justify-content: flex-end;
    width: 40%;
    height: 60vh;
    margin-right: 2%;
    
}
.photo--restu{
    border: 10px solid black;
}
/* Banner section end here. */




/* About me section start here */
.aboutme{
    width: 100%;
    height: 92vh;
    background-color: #2c2c2c;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.aboutme__title{
    position: relative;
    top: -100px;
    font-size: 4rem;
    font-family: 'Times New Roman', Times, serif;
    color: white;
}
.aboutme__card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

}
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 30%;
    color: black;
    padding: 1rem;
    background-color: grey;
    border-radius: 1rem;
}

.card__title{
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
}
.card__btn{
    
    background-color: orange;
    position: relative;
    top: 5px;
    border-radius: 5%;
    direction: none;
}
/* About me section end here */

/* .emon{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) ;
    background-color: black;
    padding: 1rem;

}

.emon__edit{
    min-width: 20%;
    margin: 1rem;
    text-align: center;
    background-color: goldenrod;
} */





<!-- html -->
<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Potfolio Pratice</title>
    <link rel="stylesheet" href="EK_Pot.css">
</head>
<body>
    Header section start here
    <header class="header">
        <div class="header__logo">
             <img class="logo" src="Ligo.png" alt="image">
        </div>
        <div class="nevi__element">
                <h2 class="element">Home</h2>
                <h2 class="element">About</h2>
                <h2 class="element">Archives</h2>
                <h2 class="element">Blog Posts</h2>
                <h2 class="element">Contact</h2>
        </div>
    </header>
    Header section end here


    Banner section start here
    <section>
        <div class="banner">
            <div class="descption">
                <div class="desc__titel"><h1>Web devolopment</h1></div>
                <div class="desc__body"><p>Lorem ipsum dolor sit amet 
                    consectetur, adipisicing elit. Recusandae assumenda
                     in quis unde quae quibusdam, illum quidem eaque. Tempora
                      ab magnam blanditiis qui optio ex maxime dolore earum
                       architecto velit.</p></div>
            </div>
            <div class="banner__photo">
                <img class="photo--restu" src="Resturant.jpg" alt="">
            </div>
        </div>
    </section>
    Banner section end here



    About me section start here
    <div class="aboutme">
        <div class="aboutme__title">About Me</div>
        <div class="aboutme__card">
            <div class="card">
                <div><p class="card__title">Education</p></div>
                <div class="card__body">Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laboriosam
                    unde aliquid placeat omnis minima dolorum. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita a placeat ad ex natus qui.</div>
                <div class=""><button class="card__btn">READ MORE</button></div>
            </div>
            <div class="card">
                <div><p class="card__title">Education</p></div>
                <div class="card__body">Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laboriosam
                    unde aliquid placeat omnis minima dolorum. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita a placeat ad ex natus qui.</div>
                <div ><button class="card__btn">READ MORE</button></div>
            </div>
            <div class="card">
                <div><p class="card__title">Education</p></div>
                <div class="card__body">Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laboriosam
                    unde aliquid placeat omnis minima dolorum. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita a placeat ad ex natus qui.</div>
                <div class=""><button class="card__btn">READ MORE</button></div>
            </div>
        </div>     
    </div>

    About me section end here
    <script src="EK_Pot.js"></script>
</body>
</html> -->




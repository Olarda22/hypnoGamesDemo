// import background from "./background.svg";
import background from "./banner.svg";
import person from "./person.svg";
import logo from "./logo.svg";
import screen from "./screens/screen.png";
import character from "./character.svg";
export const card = {
    name: "oopsMine",
    gameName: 'Oops Mine',
    background,
    previewBg: background,
    character,
    gameInfo: [
        {
            isList: false,
            title: 'THE SECRET RECIPE TO BIG WINS!',
            description: 'To expand our range of game mechanics, we also develop classic slots. For example, Coyote uses a standard 3x3 grid\nbut is enhanced with a unique risk-game bonus mechanic',
        },
        {
            isList: true,
            title: 'Intuitive gameplay',
            description: [' Use of familiar social gaming patterns', 'All symbols are equal', ' Transparent payout system (integer coefficients only)', 'No complex hierarchies or complicated rules']
        },
        {
            isList: true,
            title: 'Gradual engagement',
            description: ['Sequential filling of the playing field', 'Anticipation effect']
        },
    ],
    gameScreens: [screen, screen, screen, screen, screen, screen],
    person,
    personWidth: "463px",
    personHeight: "570px",
    personLeft: '555px',
    personTop: '-50px',
    logo,
    logoWidth: "277px",
    logoHeight: "306px",
    logoLeft: '977px',
    logoTop: '137px',
    title: 'A Bad Digger,\nA Great Find',
    mobile_title: 'A Bad Digger, A Great Find',
    description: 'The game is inspired by the popular hit Chicken Road, which has proven its appeal to a wide audience. We\'ve adapted the game\'s successful mechanics, reimagining them in our\nstudio\'s unique style.',
};
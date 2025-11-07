// import background from "./background.svg";
import background from "./banner.svg";
import person from "./person.svg";
import logo from "./logo.svg";
import screen from "./screens/screen.png";
import character from "./character.svg";

export const card = {
    name: 'royalGoodies',
    gameName: 'Royal Goodies',
    gameUrl: 'https://fake-casino.hypno-game.com/play-demo?game=royal-goodies',
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
    personWidth: "495px",
    personHeight: "570px",
    personLeft: '598px',
    personTop: '-32px',
    logo,
    logoWidth: "287px",
    logoHeight: "225px",
    logoLeft: '964px',
    logoTop: '185px',
    title: 'THE SWEET\nLIFE STARTS\nWITH THE SPIN!',
    mobile_title: 'THE SWEET LIFE STARTS WITH THE SPIN!',
    description: 'We have developed a series of games with a single concept, united by a common setting. This game also features A\nunique mathematical model, Original game mechanics,\nComplex rules, Increased volatility',
};
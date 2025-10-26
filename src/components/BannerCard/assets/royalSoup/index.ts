// import background from "./background.svg";
import background from "./banner.svg";
import person from "./person.svg";
import logo from "./logo.svg";
import screen from "./screens/screen.png";
import character from "./character.svg";

export const card = {
    name: "royalSoup",
    gameName: 'Royal soup',
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
    personWidth: "540px",
    personHeight: "576px",
    personLeft: '573px',
    personTop: '-63px',
    logo,
    logoWidth: "262px",
    logoHeight: "256px",
    logoLeft: '987px',
    logoTop: '137px',
    title: 'THE SECRET\nRECIPE TO\nBIG WINS!',
    mobile_title: 'THE SECRET RECIPE TO BIG WINS!',
    description: 'We have developed a fundamentally new mechanic for the gambling industry, based on the adaptation of the popular casual game "256"',
};
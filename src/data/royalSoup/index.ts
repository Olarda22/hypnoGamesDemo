// import background from "./background.svg";
import background from "assets/royalSoup/banner.svg";
import person from "assets/royalSoup/person.svg";
import logo from "assets/royalSoup/logo.svg";
import screen_1 from "assets/royalSoup/screens/screen_1.svg";
import screen_2 from "assets/royalSoup/screens/screen_2.svg"
import screen_3 from "assets/royalSoup/screens/screen_3.svg";
import screen_4 from "assets/royalSoup/screens/screen_4.svg";
import screen_5 from "assets/royalSoup/screens/screen_5.svg";
import screen_6 from "assets/royalSoup/screens/screen_6.svg";
import character from "assets/royalSoup/character.svg";

export const card = {
    name: "royalSoup",
    gameName: 'Royal soup',
    gameUrl: 'https://fake-casino.hypno-game.com/play-demo?game=royal-soup',
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
    gameScreens: [screen_1, screen_2, screen_3, screen_4, screen_5, screen_6],
    gameScreensFull: [screen_1, screen_2, screen_3, screen_4, screen_5, screen_6],
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
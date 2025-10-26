// import background from "./background.svg";
import background from "./banner.svg";
import person from "./person.png";
import logo from "./logo.png";
import screen from "./screens/screen.png";
import character from "./character.svg";

export const card = {
    name: 'coyote',
    gameName: 'Coyote',
    gameScreens: [screen, screen, screen, screen, screen, screen, screen, screen, screen],
    background,
    previewBg: background,
    person,
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
    personWidth: "599px",
    personHeight: "580px",
    personLeft: '532px',
    personTop: '-39px',
    logo,
    logoWidth: "319px",
    logoHeight: "216px",
    logoLeft: '930px',
    logoTop: '172px',
    title: 'Dance with\nthe Senorita\nWin Pesos!',
    mobile_title: 'Dance with the Senorita Win Pesos!',
    description: 'To expand our range of game mechanics, we also develop classic slots. For example, Coyote uses a standard 3x3 grid\nbut is enhanced with a unique risk-game bonus mechanic.',
};
// import background from "./background.svg";
import background from "./banner.svg";
import person from "./person.svg";
import logo from "./logo.svg";
import screen from "./screens/screen.png";
import character from "./character.svg";

export const card = {
    name: 'dreamDrop',
    gameName: 'Dream drop',
    gameUrl: 'https://fake-casino.hypno-game.com/play-demo?game=dream-drop-clinko',
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
    personWidth: "720px",
    personHeight: "583px",
    personLeft: '526px',
    personTop: '-64px',
    logo,
    logoWidth: "326px",
    logoHeight: "237px",
    logoLeft: '964px',
    logoTop: '161px',
    title: 'THE BETTER\nYOU SLEEP THE\nMORE GOLD',
    mobile_title: 'THE BETTER YOU SLEEP THE MORE GOLD',
    description: 'Our portfolio includes various classic mechanics that we\'ve adapted and modernized to fit the casualization concept.\nWe\'ve also coined a new term, Clinko.',
};
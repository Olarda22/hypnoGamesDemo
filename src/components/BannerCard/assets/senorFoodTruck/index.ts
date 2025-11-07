// import background from "./background.svg";
import background from "./banner.svg";
import person from "./person.svg";
import logo from "./logo.svg";
import screen from "./screens/screen.png";
import character from "./character.svg";

export const card = {
    name: "senorFoodTruck",
    gameName: 'Senor FoodTruck',
    gameUrl: 'https://fake-casino.hypno-game.com/play-demo?game=food-truck',
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
    personWidth: "518px",
    personHeight: "567px",
    personLeft: '550px',
    personTop: '-48px',
    logo,
    logoWidth: "257px",
    logoHeight: "309px",
    logoLeft: '966px',
    logoTop: '98px',
    title: 'ROLL ON\nTHE WHOLE\nCUTLET!',
    mobile_title: 'ROLL ON THE WHOLE CUTLET',
    description: 'The Food Truck game features Cascading Reels mechanics: when a winning combination is formed, symbols disappear,\nand the empty cells are filled with new elements from\nabove.',
};
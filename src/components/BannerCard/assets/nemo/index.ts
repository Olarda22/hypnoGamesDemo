// import background from "./background.svg";
import background from "./banner.png";
import person from "./person.png";
import logo from "./logo.png";
import screen from "./screens/screen.png";
import character from "./character.svg";

export const card = {
    name: "nemo",
    gameName: 'Nemo',
    background,
    previewBg: background,
    gameScreens: [screen, screen, screen, screen, screen, screen, screen],
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
    personWidth: "632px",
    personHeight: "578px",
    personLeft: '496px',
    personTop: '-63px',
    logo,
    logoWidth: "308px",
    logoHeight: "168px",
    logoLeft: '955px',
    logoTop: '179px',
    title: 'Depth\'s\nWhisper,\nCoin\'s Clink',
    mobile_title: 'Depth\'s Whisper, Coin\'s Clink',
    description: 'The Nemo game features:\n• Classic format with traditional reels\n• Standard free spins with high volatility\n• Designed for fans of traditional slots',
};
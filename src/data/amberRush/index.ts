import background from "assets/amberRush/banner.svg"; 
import person from "assets/amberRush/person.svg";
import logo from "assets/amberRush/logo.svg";
import screen from "assets/amberRush/screens/screen.png";
import character from "assets/amberRush/character.svg";

export const card = {
    name: 'amberRush',
    gameName: 'Amber Rush',
    gameUrl: 'https://fake-casino.hypno-game.com/play-demo?game=url',
    gameScreens: [screen, screen, screen,screen, screen, screen,screen, screen, screen],
    gameScreensFull: [screen, screen, screen,screen, screen, screen,screen, screen, screen],
    background,
    previewBg: background,
    character,
     gameInfo: [
        {
            isList: false,
            title: 'THE SECRET RECIPE TO BIG WINS!',
            description: 'Weve developed a fundamentally new mechanic for the gambling industry, based on an adaptation of the popular casual game "256." The "Fusion Flow" concept implements a dynamic process of merging identical elements, where each new combination opens up opportunities for subsequent combinations, creating a chain reaction of winnings.',
        },
        {
            isList: true,
            title: 'Intuitive gameplay',
            description: [' Use of familiar social gaming patterns', 'All symbols are equal', ' Transparent payout system (integer coefficients only)', 'No complex hierarchies or complicated rules']
        },
        {
            isList: true,
            title: 'Gradual engagement',
            description: ['Sequential filling of the playing field', 'Anticipation effect',  'Obviousness of potential combinations', ' Obviousness of potential combinations']
        },
    ],
    person,
    personWidth: "850px",
    personHeight: "578px",
    personLeft: '481px',
    personTop: '-58px',
    logo,
    logoWidth: "360px",
    logoHeight: "192px",
    logoLeft: '852px',
    logoTop: '180px',
    title: 'RISK!\nMINING!\nSURVIVE?',
    mobile_title: 'RISK! MINING! SURVIVE?',
    description: 'A classic crash game with engaging clicker\nmechanics and a unique setting. It\'s a fast, exciting,\nand fun experience that captivates players from the\nvery first second and keeps them hooked.',
};
import { AboutSection, AboutWrapper, Description, Text, Image, ImageWrapper, TextWrapper, PageTitle, Info, InfoBlock, InfoImage, InfoTitle, InfoValue, Block, ButtonWrapper, Title, Details } from "./AboutGame.styles";
import rtp from '../../assets/rtp.svg';
import volatility from '../../assets/volatility.svg';
import type { Game, gameInfoType } from "../BannerCard/assets";
import { Button } from "../Button/Button";
interface Props {
  game: Game
}
export const AboutGame = ({ game }: Props) => {
  const renderList = (item: gameInfoType) => {
    if (!Array.isArray(item.description)) return <></>
    return (
      <ul>
        {item.description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
  const renderGameInfo = () => {
    console.log(game.gameInfo, 'gameInfo')
    const info: gameInfoType[] = game.gameInfo;

    return (
      <>
        {info.map((item) => {
          return (
            <div key={item.title}>
            <Text>
              <Title>{item.title}</Title>
              {item.isList ? (
                renderList(item)
              ) : (
                <Description>{item.description}</Description>
              )}
            </Text>
            </div>
          )
        })}

      </>)
  }
  return (
    <AboutSection>
      <AboutWrapper>

        <TextWrapper>
          <PageTitle style={{ marginBottom: '22px' }}>{game.gameName}</PageTitle>
          <Details>
            {renderGameInfo()}
          </Details>

          <Info>
            <InfoBlock>
              <InfoImage src={rtp} alt="image" height="75px" />
              <Block >
                <InfoTitle>RTP</InfoTitle>
                <InfoValue>98,6%</InfoValue>
              </Block>
            </InfoBlock>

            <InfoBlock margin="132px" >
              <InfoImage src={volatility} alt="image" height="61px" />
              <Block >
                <InfoTitle>Volatility</InfoTitle>
                <InfoValue>2/5</InfoValue>
              </Block>
            </InfoBlock>

          </Info>

          <ButtonWrapper>
            <Button label="Play now" onClick={() => console.log('Play now')}>Play now</Button>
          </ButtonWrapper>
          
        </TextWrapper>
        <ImageWrapper>
          <Image src={game.character} alt="image" />
        </ImageWrapper>
      </AboutWrapper>
    </AboutSection>
  );
}
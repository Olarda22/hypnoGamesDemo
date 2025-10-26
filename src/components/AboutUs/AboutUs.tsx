import { AboutSection, AboutWrapper, Description, Image, TextWrapper, Title } from "./AboutUs.styles";
import image from '../../assets/image1.svg';
export default function AboutUs() {
  return (
    <AboutSection>
      <AboutWrapper>
        <Image src={image} alt="image" />
        <TextWrapper>
          <Title>about Us</Title>
          <Description>
            We are a professional development studio with deep expertise in creating hybrid gaming solutions at the intersection of gambling and casual game design. Our team includes specialists with experience
            at successful industry studios (Peter & Sons, RMG, Intellectual Solutions, Peppers Studio, Arcadium Inc, Plarium, SgsUniversal).
            <br></br>
            <br></br>
            Product Concept:
            Development of innovative gambling mechanics. Transformation of popular mechanics into more accessible gambling formats.
            Casualization of the gambling industry through the creation of products with a low entry barrier and high engagement.            </Description>
        </TextWrapper>
      </AboutWrapper>
    </AboutSection>
  );
}
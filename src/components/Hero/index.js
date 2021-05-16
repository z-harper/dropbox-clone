import { HeroContainer, HeroContent, TextSection, TextHeader, TextList, Item, ImgSection, Img } from './Hero.styled';
import HeavyBox from '../../images/heavy-box.svg';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextSection>
          <TextHeader>Decentralized Storage Made Easy</TextHeader>
          <TextList>
            <Item>Store documents anonymously</Item>
            <Item>Save space on your local machine</Item>
            <Item>Share links with friends</Item>
            <Item>No sign up required</Item>
          </TextList>
          {/* <button>how it works</button> */}
        </TextSection>
        <ImgSection>
          <Img src={HeavyBox} alt='heavy box' />
        </ImgSection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

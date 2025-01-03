import { Headline1, StandardParagraph } from "@/sharedStyledComponents";
import styled from "styled-components";


const MainSection = styled.section`
background-color: black;
`;

export default function HomePage() {
  return (
    <MainSection>
      <Headline1>The C</Headline1>
      <StandardParagraph>
        Everything is about life. Everything is about Death. She defines how we live. At first sight She can only destroy. <br/>
        Yes, She can not create life or can She? In nature, every death is another beginning. Some mushrooms only grow from charred tree trunks,
        worms will feed on my cold dead body some (hopefully still very distant) day. <br />
        Creating art is a way to respect death while defying Her.
        Actually it might one of the very few ways to do that, and the only way which is under your personal control.<br/>
        After thousands of years people still read Homer, people making movies - right now, the oddysey is in the making directed bei Christopher Nolan. 
        Homer&apos;s impact may be not as huge as it used to be ... but hey, if millions are invested in a movie about a story
        that&apos;s more than 2500 years old -  it is still very big.
        The C will never rival the great poets, but The C creates musical art to persist in the memories of people listing to the music - at least that ist the goal.
        If only a few or hundreds or thousands will listen and remember does not matter that much ... better to leave a piece that a few hold dear than something forgettable known by the masses for a short time. <br />
        So The C craves a glimpse of eternity like so many other human beings do.


      </StandardParagraph>
      <Headline1>About the music</Headline1>
      <StandardParagraph>
        After all the pseudo philosophical gibberish in the paragraph above, here is some more down to earth information about the project&apos;s style. <br />
        There are guitars, they are overdriven, distorted or fuzzy, seldom clean, there is bass, sometimes clean, there are drums, sometimes other instruments. <br />
        There&apos;s a voice, it is mostly emotional and some would call the style authentic but that&apos;s a difficult word for me.
        The voice talks about dark themes like braking relationships, everyday frustration,
        death and the corruption of mankind but &quot;As long as there&apos;s life there is hope &quot; (Tolkien),
        so there are some slightly optimistic bits as well. <br />
        So the C works influences Hard Rock, Psychedelic, Noise, Punk and Pop into
        an original mix that is tending to linger on the dark side.
        The C is a musical child of the 90s return to rock (called grunge at the time), but attempts to create a kind of present and timeless musical style .<br />
        
    
      </StandardParagraph>
    </MainSection>
  );
}

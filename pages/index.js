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
        Yes, she can not create life or can she? In nature Every Death is another beginning. Some mushrooms only grow from chared tree trunks, worms will feed on my cold dead body some (hopefully still very distant) day <br />
        Creating art is a way to respect death while defying Her.
        Actually it might one of the very few ways to do that, and the only way which is under your personal control.
        After thousands of years people still read Homer, people making movies - right now, the oddysey is under way. Homer&apos;s impact may be not as big as it used to be ...
        but hey, if millions are  it is still very big. 
        The C will never rival the great poets, but The C creates musical art. At least he tries. So The C craves a glimpse of eternity like so many otherhumen beings do.


      </StandardParagraph>
      <Headline1>About the music</Headline1>
      <StandardParagraph>
        After all the pseudo philosophical gibberish in the paragraph above, here is some more down to earth information about the projects style. <br />
        There are guitars, they will be overdriven, distorted or fuzzy, seldom clean, there is bass, sometimes clean, there are drums, sometimes other instruments.
        Theres a voice, it is emotional and some would call teh style authentic but thats a difficult word for me.
        So the C works influences Hard Rock, Psychedelic, Noise, Punk and Pop into an original mix. The C is a child of the 90s, but attempts to create a kind of presnt and timeless music.<br />earlo
        
        Kyuss would not have mead ewithout Balck Sabbath ...
        Dark themes but &quot;As long as there&apos;s life there is hope &quot;
      </StandardParagraph>
    </MainSection>
  );
}

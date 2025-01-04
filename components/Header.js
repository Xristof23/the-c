import {
  ButtonContainer,
  FlexRowWrapper,
  StandardButton,
} from "@/sharedStyledComponents";

export default function Header() {
  return (
    <FlexRowWrapper>
      <ButtonContainer>
        <StandardButton onClick={() => console.log("Play music pressed")}>
          play music{" "}
        </StandardButton>{" "}
        <StandardButton onClick={() => console.log("sound fx")}>
          sound fx{" "}
        </StandardButton>
      </ButtonContainer>
      <figure>
        <figcaption>Listen to The C</figcaption>
        <FlexRowWrapper>
          <audio controls src="/public/tracks/SimpleSongPart.mp3"></audio>
          {/* <a href="/sounds/t-rex-roar.mp3"> Download audio </a> */}
        </FlexRowWrapper>
      </figure>
    </FlexRowWrapper>
  );
}

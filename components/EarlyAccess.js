import { Headline1, StyledInput, StandardButton, StandardParagraph, StandardLabel } from "@/sharedStyledComponents";

export default function EarlyAccess() {
    return (
        <><Headline1>Early access</Headline1>
            <StandardParagraph>Please put in your codephrase</StandardParagraph>
            <StandardLabel htmlfor >
                <StyledInput></StyledInput>
            </StandardLabel>
            <StandardButton type="submit" onClick={() => console.log("pressed submit")}>
         submit
        </StandardButton>
            <StandardParagraph>Content Example</StandardParagraph>
            </>
    )
}
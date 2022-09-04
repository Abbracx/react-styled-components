import { Link } from 'react-router-dom'
import { Container } from '../../globalSyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper } from './InfoSection.elements'

const InfoSection = ({ lightBg, imgStart  }) => {
    
  return (
    <>
        <InfoSec lightBg={ lightBg }>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to="/sign-up">
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection
import { RegularText, TitleText } from '../../components/Typography'
import { MemeDetailsContainer, UploadContainer } from './styles'
import { InfoWithIcon } from '../../components/InfoWithIcon/index'
import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { UploadSection } from '../CompleteOrder/components/UploadForm'

export function UploadPage() {
    const { colors } = useTheme()

    return (
        <UploadContainer className="container">
            <div>
                <TitleText size="l">Uploadez vos memes</TitleText>
            </div>
            <section>
                <UploadSection />
            </section>
            <section>
                <MemeDetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        iconColor={colors['brand-purple']}
                        text={
                            <RegularText>
                                enregistrez vous
                                <strong>
                                    aaa
                                </strong>
                                <br />
                                aaaa
                            </RegularText>
                        }
                    />
                </MemeDetailsContainer>
            </section>
        </UploadContainer>

    )
}


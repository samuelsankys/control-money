import logoImg from '../../assets/logo.png'
import { Container, Content } from './styled'

export function Header(){
    return (
        <Container>
            <Content>
                <img src ={logoImg} alt='Control' />
                <button type='button'>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}
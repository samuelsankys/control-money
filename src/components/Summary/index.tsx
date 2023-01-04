import { Container } from "./styles";
import incomeImg from '../../assets/income.png'
import outcomeImg from '../../assets/outcome.png'
import totalImg from '../../assets/logo.png'

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt='Entradas'/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt='Saídas'/>
                </header>
                <strong>-R$5000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt='Entradas'/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    )
}
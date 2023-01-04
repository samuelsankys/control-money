import { useEffect } from "react";
import { api } from "../../services/app";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimetno</td>
                        <td>20/12/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">R$ 12.000</td>
                        <td>Desenvolvimetno</td>
                        <td>20/12/2022</td>
                    </tr>
                        <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$ 12.000</td>
                        <td>Desenvolvimetno</td>
                        <td>20/12/2022</td>
                    </tr>
                </tbody>
               
            </table>
        </Container>
    )
}
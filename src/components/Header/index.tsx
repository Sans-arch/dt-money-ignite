import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

/*
 Definir as propriedades que o componente Header irá receber, ou seja, as props.
 props receberá uma propriedade chamada `onOpenNewTransactionModal` que será uma função que não retorna nada.
*/
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
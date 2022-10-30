import { Container, ListaContainer } from './styles';
import BellIcon from '../../assets/bell.svg';
import CalendarIcon from '../../assets/calendar.svg';
import UsersIcon from '../../assets/users.svg';
import HomeIcon from '../../assets/home.svg';

export function SideBarComponent() {
  return (
    <Container>
    <img className="NHUB-Logo" src="white-logo-nhub.svg" alt="NHUB logo" />
    <ListaContainer>
      <li className="lista">
        <img className="Icons" src="home.svg" alt="Casa" />
        Home</li>
      <li>
        <img className="Icons" src="calendar.svg" alt="Calendario" />
        Reservas</li>
      <li>
        <img className="Icons" src="Bell.svg" alt="Sino" />
        Notificações</li>
      <li>
        <img className="Icons" src="users.svg" alt="usuarios" />
        Moradores</li>
    </ListaContainer>
    </Container>
  )
}

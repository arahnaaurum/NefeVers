import { Outlet, useParams } from 'react-router-dom';
import { Container, Footer, Header, Popup, Wrapper } from "./styled"
import { useEffect, useRef, useState } from 'react';

const headerText = "Какой Нефе вы сегодня?";
const footerLinks = [
  {title: "Boosty", path: "https://boosty.to/natlalihuitl", icon: "/footer/boosty.svg"},
  {title: "AComics", path: "https://acomics.ru/~natlalihuitl", icon: "/footer/ac.png"},
  {title: "Author.Today", path: "https://author.today/u/natlalihuitl", icon: "/footer/at.png"}
]

const Layout = () => {
  const { questionId } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [questionId]);

  const popupRef = useRef<HTMLDivElement>(null);
  const [showEasterEgg, setShowEasterEgg] = useState<boolean>(false);
  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
  }

  useEffect(() => {
    const handler: EventListener = (event) => {
      const { current: target } = popupRef;
      if (target && !target.contains(event.target as HTMLElement)) {
        if(showEasterEgg) setShowEasterEgg(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [popupRef, showEasterEgg]);

  return (
    <Wrapper>
      <div>
        <Header onClick={toggleEasterEgg} ref={popupRef}>
          <h1>{headerText}</h1>
          {showEasterEgg &&
            <Popup>
              <img src='/crab.gif' height={100}/>
          </Popup>
          }
        </Header>
        <Container ref={ref}>
            <Outlet />
        </Container>
      </div>
      <Footer >
        <ul className='links'> {footerLinks.map(({title, path, icon}, i) => (
          <li key={i} className='link'>
            <a href={path} target='_blank'><img className="link__icon" src={icon} alt={title} height={30} width={30}/></a>
          </li>
        ))}
        </ul>
        <span>natlalihuitl, 2024</span>
      </Footer>
    </Wrapper>
  )
}

export default Layout;
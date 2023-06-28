import { CardInterface } from "../../interfaces/CardInterface";
import { Card } from "../Card/Card";

interface Props {
    cards: CardInterface[],
    setCards: Function,
}


export function CardList ({cards, setCards}:Props) {
    
    return (
        <ul>
            {cards.map((card) => (
                <li key={card.id} >
                    <Card id={card.id} imgURL={card.imgURL} cards={cards }setCards={setCards}/>
                </li>
            ))}
            
        </ul>

    );
};
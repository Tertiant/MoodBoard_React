import { CardInterface } from "../../interfaces/CardInterface";

interface Props extends CardInterface {
    cards: CardInterface[],
    setCards: Function,
}

export function Card ({ id, imgURL, cards, setCards }:Props) {



    return (
        <div className="cardContainer">
            <img src={imgURL}/>
    
    
        </div>
    );
}
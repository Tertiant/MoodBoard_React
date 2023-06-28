import { CardInterface } from "../../interfaces/CardInterface";

interface Props {
    cards: CardInterface[],
    setCards: Function,
}

export function SeedButton ({cards, setCards}:Props) {
 
    const generateCard = (idx:number) => {
        const newCard = {
            id: idx,
            imgURL: `https://picsum.photos/300/300?sig=${idx}`
        };
        return newCard;
    };

    const seedCards = () => {
        setCards([]);
        let seededCards = [];
        for (let i = 0; i < 10; i++) {
            seededCards.push(generateCard(i));
        };
        console.log("seededCards: ", seededCards);
        setCards(seededCards);
    };

    return (
        <button onClick={seedCards}>Seed Images</button>
    )

};
import { CardInterface } from "../../interfaces/CardInterface";

interface Props extends CardInterface {
    cards: CardInterface[],
    setCards: Function,
    id: number,
}

export function Card ({id, imgURL, cards, setCards }:Props) {

    const shiftCardItem = (arr: CardInterface[], fromIndex: number, toIndex: number) => {
        if (toIndex == -1 || toIndex == cards.length) {
          return;
        };

        let newCardArray = arr.slice();

        let element = newCardArray[fromIndex];
        newCardArray.splice(fromIndex, 1);
        newCardArray.splice(toIndex, 0, element);
        setCards(newCardArray, console.log(cards));
      };
      
      const moveCard = (direction: string, cardToEdit: number) => {
        const cardIndex = cards.findIndex(card => card.id == cardToEdit);
        if (direction === "left") {
          shiftCardItem(cards, cardIndex, cardIndex - 1);
        } else {
          shiftCardItem(cards, cardIndex, cardIndex + 1);
        }
      };

      const handleClick = (e:any) => {
        const direction: string = e.target.className;
        const cardToEdit = id;


        console.log("card: ", cardToEdit)
        console.log("clicked ", direction)

        if (direction === "left") {
            moveCard("left", cardToEdit);
        } else {
            moveCard("right", cardToEdit);
        };
    };

    return (
        <div className="cardContainer">
            <img src={imgURL}/>
            <button 
                onClick={handleClick}
                className="left">
                left
            </button>
            <button
                onClick={handleClick}
                className="right">
                right
            </button>
        </div>
    );
}
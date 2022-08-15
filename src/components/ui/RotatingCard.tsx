import React, {useState} from 'react';
import { text } from 'stream/consumers';
import './RotatingCard.scss';

type RotatingCardProps = {
    keepFlipped : boolean,
    frontText : string,
    backText : string
}
const RotatingCard : React.FC<RotatingCardProps> = (props) => {
    const [keepFlipped, setKeepFlipped] = useState(true);

    const  onFlipHandler = () => 
    {
        setKeepFlipped((prevState)=>{return !prevState});
    }
    return (
        <React.Fragment>
            <div className="rotating-card">
                <div className={`rotating-card__side  rotating-card__side--gray rotating-card__side--front${props.keepFlipped ? '--flipped' : ''}`}>
                    <span>
                        {props.keepFlipped === false && props.frontText }
                    </span>
                </div>
                <div  className={`rotating-card__side rotating-card__side--green rotating-card__side--back${props.keepFlipped ? '--flipped' : ''}`}>
                    <span>
                        { props.keepFlipped === true && props.backText}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default RotatingCard;
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];//Dado que data puede devolver null se utiliza 
    //la deganción para transformalo en un bool y que se puede ejecutar la evaluación !(true) !!(false)

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :   
                    (
                        <blockquote className="blockquote text-end">
                            <p>{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente frase
            </button>
            
        </div>
    )
}

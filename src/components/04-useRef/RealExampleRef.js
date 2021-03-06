import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import { useState } from 'react';

import '../02-useEffect/effect.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}

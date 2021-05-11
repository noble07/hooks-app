import React from 'react';

//Memoriza el componente para que solo cuando cambie el prop lo vuelve a renderizar
//sin importar si el componente padre se renderiza nuevamente
export const Small = React.memo(({value}) => {

    console.log('Me volvi a llamar :(');

    return (
        <small>
            { value }
        </small>
    )
})

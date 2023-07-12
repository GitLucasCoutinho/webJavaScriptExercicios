import React, {Fragment} from "react";


//export default props => <h1>Bom dia {props.nome}!</h1>
/*

//uma forma
export default props =>
<div>
    <h1>Bom dia {props.nome}</h1>
    <h2>{props.nome}</h2>
</div>

//outra forma 
export default props => [
    <h1 key='h1'>Bom dia {props.nome}</h1>,
    <h2 key='h2'>{props.nome}</h2>
]

*/

export default props =>
<Fragment>
    <h1>Bom dia {props.nome}</h1>
    <h2>Ate breve!</h2>
</Fragment>
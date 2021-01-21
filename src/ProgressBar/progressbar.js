import React from 'react'
import './progressbar.css'
function Progressbar(props) {
    return (
             <div className={props.flag?"divmenu":'hide-progress-bar'}>
                 <ul class="ullist">
                     <li className={props.id===1?'active':''}>Elenco Garanzia</li>
                     <li className={props.id===2?'active':''}>Datti Anagrafici</li>
                     <li className={props.id===3?'active':''}>Questionario</li>
                     <li className={props.id===4?'active':''}>Ditti Contratto</li>
                     <li className={props.id===5?'active':''}>Attestato Di Rishio</li>
                     <li className={props.id===6?'active':''}>Prodotto Autovetture</li>
                     <li className={props.id===7?'active':''}>Eleno Proelotti</li>
                     <li className={props.id===8?'active':''}>Prodotto Autovetture Dati Integrative</li>
                     <li className={props.id===9?'active':''}>Riepilogo</li>
                      <li className={props.id===10?'active':''}>Stamp Polliza</li>
                     </ul>
                 </div>
    )
}

export default Progressbar

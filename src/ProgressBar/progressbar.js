import React from 'react'
import './progressbar.css'
function Progressbar(props) {
    return (
             <div className={props.currentProgressValue===0||props.currentProgressValue===1?'hide-progress-bar':"divmenu"}>
                 <ul class="ullist">
                     <li className={props.currentProgressValue===2?'active':''}>Elenco Garanzia</li>
                     <li className={props.currentProgressValue===3?'active':''}>Datti Anagrafici</li>
                     <li className={props.currentProgressValue===4?'active':''}>Questionario</li>
                     <li className={props.currentProgressValue===5?'active':''}>Ditti Contratto</li>
                     <li className={props.currentProgressValue===6?'active':''}>Attestato Di Rishio</li>
                     <li className={props.currentProgressValue===7?'active':''}>Prodotto Autovetture</li>
                     <li className={props.currentProgressValue===8?'active':''}>Riepilogo Garanzie</li>
                     <li className={props.currentProgressValue===9?'active':''}>Prodotto Autovetture Dati Integrative</li>
                     <li className={props.currentProgressValue===10?'active':''}>Riepilogo</li>
                      <li className={props.currentProgressValue===11?'active':''}>Stamp Polliza</li>
                     </ul>
                 </div>
    )
}

export default Progressbar

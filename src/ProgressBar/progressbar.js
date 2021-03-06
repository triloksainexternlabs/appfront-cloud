import React from 'react'
import './progressbar.css'
function Progressbar(props) {
    let innerWidth = window.innerWidth;
    return (
        <div className={props.currentProgressValue === 0 || props.currentProgressValue === 1 || innerWidth < 500 ? 'hide-progress-bar' : "divmenu"}>
            <ul className="ullist">
                <li onClick={()=>props.handleScroll(2)} className={props.currentProgressValue === 2 ? 'active' : ''}>Elenco Garanzia</li>
                <li onClick={()=>props.handleScroll(3)} className={props.currentProgressValue === 3 ? 'active' : ''}>Datti Anagrafici</li>
                <li onClick={()=>props.handleScroll(4)} className={props.currentProgressValue === 4 ? 'active' : ''}>Questionario</li>
                <li onClick={()=>props.handleScroll(5)} className={props.currentProgressValue === 5 ? 'active' : ''}>Ditti Contratto</li>
                <li onClick={()=>props.handleScroll(6)} className={props.currentProgressValue === 6 ? 'active' : ''}>Attestato Di Rishio</li>
                <li onClick={()=>props.handleScroll(7)} className={props.currentProgressValue === 7 ? 'active' : ''}>Prodotto Autovetture</li>
                <li onClick={()=>props.handleScroll(8)} className={props.currentProgressValue === 8 ? 'active' : ''}>Riepilogo Garanzie</li>
                <li onClick={()=>props.handleScroll(9)} className={props.currentProgressValue === 9 ? 'active' : ''}>Prodotto Autovetture Dati Integrative</li>
                <li onClick={()=>props.handleScroll(10)} className={props.currentProgressValue === 10 ? 'active' : ''}>Riepilogo</li>
                <li onClick={()=>props.handleScroll(11)} className={props.currentProgressValue === 11 ? 'active' :"" }>Stamp Polliza</li>
            </ul>
        </div>
    )
}

export default Progressbar

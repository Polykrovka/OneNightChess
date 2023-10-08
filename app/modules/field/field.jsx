'use client'; 
import styles from './field.module.scss'
import './field.module.scss'
import './field.module.css'
import { data } from '../data'
import { useState } from 'react';
import handleBlackPawn from '../figures/blackPawn';
import handleWhitePawn from '../figures/whitePawn';

export default function Field() {
  
  const [activeElement, setActiveElement] = useState();
  const cellKeys = Object.keys(data);

  function removeCanGo() {
    for (let i of cellKeys) {
      data[i].canGo = false;
    }
  }

  
  function handleClick(e) {
    const id = e.target.id || e.target.parentElement.id;

    if (data[id] && data[id].canGo) {
      data[id].figure = activeElement.figure
      data[id].figureColor = activeElement.figureColor
      activeElement.figure = null;
      activeElement.figureColor = null;
      setActiveElement(null);
    }
    removeCanGo()

    if (activeElement) {
      activeElement.isActive = false;
    }

    if (e.target.className.includes('figure_blackPawn')) {
      handleBlackPawn(e)
      setActiveElement(data[id]);
    } else if (e.target.className.includes('figure_whitePawn')) {
      handleWhitePawn(e)
      setActiveElement(data[id]);
    }
    
  }

  return (
    <div className={styles.field} onClick={handleClick}>
      {cellKeys.map((key) => <div key={key} id={key} className={` ${styles.cell} ${styles[data[key].color]} ${data[key].isActive ? styles.activeFigure : ''} ${data[key].canGo ? styles.canGo : '' }`}>
        {data[key].figure && <div className={`${styles[`figure_${data[key].figure}`]} ${styles.figure}`}> </div> }
      </div>)}
    </div>
  )
}

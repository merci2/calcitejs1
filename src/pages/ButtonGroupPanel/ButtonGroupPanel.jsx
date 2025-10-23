import { 
  CalcitePanel,
  CalciteInput,
  CalciteButton,
  CalciteAccordion,
  CalciteAccordionItem
} from '@esri/calcite-components-react'
import { useState } from 'react'
import styles from './ButtonGroupPanel.module.css'

function ButtonGroupPanel({ onClose }) {
  const [activeButton, setActiveButton] = useState('type')

  return (
    <CalcitePanel 
      heading="Button Group Panel"
      closable
      onCalcitePanelClose={onClose}
    >
      <div className={styles.panelContent}>
        {/* Searchbar */}
        <CalciteInput
          placeholder="Search"
          icon="search"
          clearable
        />

        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <CalciteButton 
            iconStart="apps"
            width="full"
            appearance={activeButton === 'type' ? 'solid' : 'outline'}
            onClick={() => setActiveButton('type')}
          >
            Type
          </CalciteButton>
          <CalciteButton 
            iconStart="user"
            width="full"
            appearance={activeButton === 'client' ? 'solid' : 'outline'}
            onClick={() => setActiveButton('client')}
          >
            Client
          </CalciteButton>
          <CalciteButton 
            iconStart="layer"
            width="full"
            appearance={activeButton === 'all' ? 'solid' : 'outline'}
            onClick={() => setActiveButton('all')}
          >
            All
          </CalciteButton>
        </div>

        {/* Accordion */}
        <CalciteAccordion>
          <CalciteAccordionItem heading="Auswahl 1">
            <p>Inhalt von Auswahl 1</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 2">
            <p>Inhalt von Auswahl 2</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 3">
            <p>Inhalt von Auswahl 3</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 4">
            <p>Inhalt von Auswahl 4</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 5">
            <p>Inhalt von Auswahl 5</p>
          </CalciteAccordionItem>
        </CalciteAccordion>
      </div>
    </CalcitePanel>
  )
}

export default ButtonGroupPanel
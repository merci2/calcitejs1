import { 
  CalcitePanel,
  CalciteInput,
  CalciteButton,
  CalciteAccordion,
  CalciteAccordionItem
} from '@esri/calcite-components-react'
import { useState } from 'react'
import styles from './ColorsPanel.module.css'

function ColorsPanel({ onClose }) {
  const [activeButton, setActiveButton] = useState('background')

  return (
    <CalcitePanel 
      heading="Color Categories"
      closable
      onCalcitePanelClose={onClose}
      className={styles.colorPanel}
    >
      <div className={styles.panelContent}>
        {/* Searchbar */}
        <CalciteInput
          placeholder="Search colors"
          icon="search"
          clearable
        />

        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <CalciteButton 
            iconStart="palette"
            width="full"
            appearance={activeButton === 'background' ? 'solid' : 'outline'}
            onClick={() => setActiveButton('background')}
          >
            Background
          </CalciteButton>
          <CalciteButton 
            iconStart="まbrand"
            width="full"
            appearance={activeButton === 'brand' ? 'solid' : 'outline'}
            onClick={() => setActiveButton('brand')}
          >
            Brand
          </CalciteButton>
          <CalciteButton 
            iconStart="information"
            width="full"
            appearance={activeButton === 'status' ? 'solid' : 'outline'}
            onClick={() => setActiveButton('status')}
          >
            Status
          </CalciteButton>
        </div>

        {/* Accordion */}
        <CalciteAccordion>
          <CalciteAccordionItem heading="Background Colors">
            <p>Base background and foreground colors</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Brand Colors">
            <p>Primary brand colors and interactions</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Status Colors">
            <p>Info, success, warning, and danger states</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Border Colors">
            <p>Borders and dividers</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Text Colors">
            <p>Text and typography colors</p>
          </CalciteAccordionItem>
        </CalciteAccordion>
      </div>
    </CalcitePanel>
  )
}

export default ColorsPanel
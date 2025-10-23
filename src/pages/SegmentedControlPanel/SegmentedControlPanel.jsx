import { 
  CalcitePanel,
  CalciteInput,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteAccordion,
  CalciteAccordionItem
} from '@esri/calcite-components-react'
import { useState } from 'react'
import styles from './SegmentedControlPanel.module.css'

function SegmentedControlPanel({ onClose }) {
  const [activeFilter, setActiveFilter] = useState('type')

  return (
    <CalcitePanel 
      heading="Segmented Control Panel"
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

        {/* Segmented Control */}
        <CalciteSegmentedControl 
          width="full"
          onCalciteSegmentedControlChange={(e) => setActiveFilter(e.target.value)}
        >
          <CalciteSegmentedControlItem 
            value="type"
            iconStart="apps"
            checked={activeFilter === 'type'}
          >
            Type
          </CalciteSegmentedControlItem>
          <CalciteSegmentedControlItem 
            value="client"
            iconStart="user"
            checked={activeFilter === 'client'}
          >
            Client
          </CalciteSegmentedControlItem>
          <CalciteSegmentedControlItem 
            value="all"
            iconStart="layer"
            checked={activeFilter === 'all'}
          >
            All
          </CalciteSegmentedControlItem>
        </CalciteSegmentedControl>

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

export default SegmentedControlPanel
import { 
  CalcitePanel,
  CalciteInput,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteAccordion,
  CalciteAccordionItem
} from '@esri/calcite-components-react'
import { useState } from 'react'
import styles from './InheritedSgmtCntrlPanel.module.css'

function InheritedSgmtCntrlPanel({ onClose }) {
  const [activeFilter, setActiveFilter] = useState('type')

  return (
    <CalcitePanel 
      heading="CalciteSegmentedControl incl. inherited styles"
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
            <p>Alle Styles sind explizit definiert</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 2">
            <p>Sie können jeden Wert anpassen</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 3">
            <p>Calcite Design Tokens verwenden</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 4">
            <p>Oder eigene Werte setzen</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Auswahl 5">
            <p>Volle Kontrolle über das Styling</p>
          </CalciteAccordionItem>
        </CalciteAccordion>
      </div>
    </CalcitePanel>
  )
}

export default InheritedSgmtCntrlPanel
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
          <CalciteAccordionItem heading="Option 1">
            <p>Site Title</p>
            <p>Short Description</p>
            <p>Grouped by Type: Option 1</p>
            <p>Updated</p>
            <p>Grouped by Client: Client 1</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Option 2">
            <p>Site Title</p>
            <p>Short Description</p>
            <p>Grouped by Type: Option 1</p>
            <p>Updated</p>
            <p>Grouped by Client: Client 1</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Option 3">
            <p>Site Title</p>
            <p>Short Description</p>
            <p>Grouped by Type: Option 1</p>
            <p>Updated</p>
            <p>Grouped by Client: Client 1</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Option 4">
            <p>Site Title</p>
            <p>Short Description</p>
            <p>Grouped by Type: Option 1</p>
            <p>Updated</p>
            <p>Grouped by Client: Client 1</p>
          </CalciteAccordionItem>
          <CalciteAccordionItem heading="Option 5">
            <p>Site Title</p>
            <p>Short Description</p>
            <p>Grouped by Type: Option 1</p>
            <p>Updated</p>
            <p>Grouped by Client: Client 1</p>
          </CalciteAccordionItem>
        </CalciteAccordion>
      </div>
    </CalcitePanel>
  )
}

export default InheritedSgmtCntrlPanel
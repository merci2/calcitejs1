import { 
  CalcitePanel,
  CalciteInput,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteAccordion,
  CalciteAccordionItem
} from '@esri/calcite-components-react'
import { useState, useMemo } from 'react'
import { searchProjects } from '../../data/projectsData'
import styles from './InheritedSgmtCntrlPanel.module.css'

function InheritedSgmtCntrlPanel({ onClose }) {
  const [activeFilter, setActiveFilter] = useState('type')
  const [searchTerm, setSearchTerm] = useState('')

  // Group data based on active filter
  const groupedData = useMemo(() => {
    // Apply search filter using utility function
    let filtered = searchProjects(searchTerm)

    // Group by selected filter
    switch (activeFilter) {
      case 'type':
        return filtered.reduce((groups, item) => {
          const key = item.type
          if (!groups[key]) {
            groups[key] = []
          }
          groups[key].push(item)
          return groups
        }, {})
      
      case 'client':
        return filtered.reduce((groups, item) => {
          const key = item.client
          if (!groups[key]) {
            groups[key] = []
          }
          groups[key].push(item)
          return groups
        }, {})
      
      case 'all':
      default:
        return { 'All Items': filtered }
    }
  }, [activeFilter, searchTerm])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <CalcitePanel 
      heading="CalciteSegmentedControl incl. inherited styles"
      closable
      onCalcitePanelClose={onClose}
    >
      <div className={styles.panelContent}>
        {/* Search */}
        <CalciteInput
          placeholder="Search"
          icon="search"
          clearable
          value={searchTerm}
          onCalciteInputInput={(e) => setSearchTerm(e.target.value)}
        />

        {/* Segmented Control */}
        <CalciteSegmentedControl 
          width="full"
          onCalciteSegmentedControlChange={(e) => setActiveFilter(e.target.value)}
        >
          <CalciteSegmentedControlItem 
            value="type"
            checked={activeFilter === 'type'}
          >
            Type
          </CalciteSegmentedControlItem>
          <CalciteSegmentedControlItem 
            value="client"
            checked={activeFilter === 'client'}
          >
            Client
          </CalciteSegmentedControlItem>
          <CalciteSegmentedControlItem 
            value="all"
            checked={activeFilter === 'all'}
          >
            All
          </CalciteSegmentedControlItem>
        </CalciteSegmentedControl>

        {/* Accordion */}
        <CalciteAccordion>
          {Object.entries(groupedData).map(([groupName, items]) => (
            <CalciteAccordionItem 
              key={groupName}
              heading={groupName}
            >
              <div className={styles.groupContent}>
                {items.map((item) => (
                  <div key={item.id} className={styles.projectItem}>
                    <h4 className={styles.siteTitle}>{item.siteTitle}</h4>
                    <p className={styles.shortDescription}>{item.shortDescription}</p>
                    <p className={styles.groupedByType}>Grouped by Type: {item.type}</p>
                    <p className={styles.updated}>Updated: {formatDate(item.updated)}</p>
                    <p className={styles.groupedByClient}>Grouped by Client: {item.client}</p>
                  </div>
                ))}
              </div>
            </CalciteAccordionItem>
          ))}
        </CalciteAccordion>
      </div>
    </CalcitePanel>
  )
}

export default InheritedSgmtCntrlPanel
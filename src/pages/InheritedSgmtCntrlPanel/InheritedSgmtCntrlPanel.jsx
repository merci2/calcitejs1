import { 
  CalcitePanel,
  CalciteInput,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteAccordion,
  CalciteAccordionItem,
  CalciteCard
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
        return { 'All Projects': filtered }
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

  const getSubtitle = (groupName, itemCount) => {
    if (activeFilter === 'all') {
      return `Total: ${itemCount} project${itemCount !== 1 ? 's' : ''}`
    }
    return `${itemCount} project${itemCount !== 1 ? 's' : ''}`
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

        {/* Accordion with Data Cards */}
        <div className={styles.accordionContainer}>
          <CalciteAccordion>
            {Object.entries(groupedData).map(([groupName, items]) => (
              <CalciteAccordionItem 
                key={groupName}
                heading={groupName}
                description={getSubtitle(groupName, items.length)}
                open={activeFilter === 'all'}
              >
                <div className={styles.cardsContainer}>
                  {items.map((item) => (
                    <CalciteCard key={item.id} className={styles.projectCard}>
                      <div className={styles.cardContent}>
                        <div className={styles.cardHeader}>
                          <h3 className={styles.cardTitle}>{item.siteTitle}</h3>
                        </div>
                        
                        <div className={styles.cardBody}>
                          <p className={styles.cardDescription}>
                            {item.shortDescription}
                          </p>
                        </div>
                        
                        <div className={styles.cardFooter}>
                          <div className={styles.metadataGrid}>
                            <div className={styles.metadataItem}>
                              <span className={styles.metadataLabel}>Type:</span>
                              <span className={styles.metadataValue}>{item.type}</span>
                            </div>
                            <div className={styles.metadataItem}>
                              <span className={styles.metadataLabel}>Client:</span>
                              <span className={styles.metadataValue}>{item.client}</span>
                            </div>
                            <div className={styles.metadataItem}>
                              <span className={styles.metadataLabel}>Updated:</span>
                              <span className={styles.metadataValue}>{formatDate(item.updated)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CalciteCard>
                  ))}
                </div>
              </CalciteAccordionItem>
            ))}
          </CalciteAccordion>
        </div>

        {/* Empty State */}
        {Object.keys(groupedData).length === 0 && (
          <div className={styles.emptyState}>
            <p className={styles.emptyMessage}>No projects found matching your search.</p>
          </div>
        )}
      </div>
    </CalcitePanel>
  )
}

export default InheritedSgmtCntrlPanel
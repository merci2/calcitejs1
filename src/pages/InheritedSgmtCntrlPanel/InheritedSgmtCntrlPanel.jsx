import { 
  CalcitePanel,
  CalciteInput,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteAccordion,
  CalciteAccordionItem,
  CalciteChip,
  CalciteCard
} from '@esri/calcite-components-react'
import { useState, useMemo } from 'react'
import styles from './InheritedSgmtCntrlPanel.module.css'

// Test data with the requested distribution and simplified structure
const testData = [
  // Type 1: 2 items
  {
    id: 1,
    siteTitle: "Environmental Monitoring Portal",
    shortDescription: "Real-time environmental data collection and analysis",
    type: "Type 1",
    client: "Client 1",
    updated: "2024-10-15"
  },
  {
    id: 2,
    siteTitle: "Carbon Footprint Calculator",
    shortDescription: "Tool for calculating organizational carbon emissions",
    type: "Type 1",
    client: "Client 2",
    updated: "2024-10-20"
  },
  // Type 2: 3 items
  {
    id: 3,
    siteTitle: "Supply Chain Analytics",
    shortDescription: "Comprehensive supply chain visibility and optimization",
    type: "Type 2",
    client: "Client 1",
    updated: "2024-10-12"
  },
  {
    id: 4,
    siteTitle: "Inventory Management System",
    shortDescription: "Real-time inventory tracking and management",
    type: "Type 2",
    client: "Client 3",
    updated: "2024-10-18"
  },
  {
    id: 5,
    siteTitle: "Warehouse Optimization Tool",
    shortDescription: "AI-powered warehouse layout and process optimization",
    type: "Type 2",
    client: "Client 1",
    updated: "2024-10-22"
  },
  // Type 3: 3 items
  {
    id: 6,
    siteTitle: "Patient Management Portal",
    shortDescription: "Comprehensive patient data management and scheduling",
    type: "Type 3",
    client: "Client 4",
    updated: "2024-10-08"
  },
  {
    id: 7,
    siteTitle: "Telemedicine Dashboard",
    shortDescription: "Virtual consultation and remote monitoring platform",
    type: "Type 3",
    client: "Client 5",
    updated: "2024-10-25"
  },
  {
    id: 8,
    siteTitle: "Medical Records System",
    shortDescription: "Secure electronic health records management",
    type: "Type 3",
    client: "Client 4",
    updated: "2024-10-14"
  },
  // Type 4: 2 items
  {
    id: 9,
    siteTitle: "Student Information System",
    shortDescription: "Comprehensive student data and academic management",
    type: "Type 4",
    client: "Client 6",
    updated: "2024-10-10"
  },
  {
    id: 10,
    siteTitle: "Online Learning Portal",
    shortDescription: "Interactive online education and assessment platform",
    type: "Type 4",
    client: "Client 7",
    updated: "2024-10-23"
  },
  // Type 5: 3 items
  {
    id: 11,
    siteTitle: "Financial Analytics Dashboard",
    shortDescription: "Real-time financial data analysis and reporting",
    type: "Type 5",
    client: "Client 8",
    updated: "2024-10-17"
  },
  {
    id: 12,
    siteTitle: "Risk Assessment Tool",
    shortDescription: "Automated financial risk evaluation and monitoring",
    type: "Type 5",
    client: "Client 9",
    updated: "2024-10-19"
  },
  {
    id: 13,
    siteTitle: "Investment Portfolio Manager",
    shortDescription: "Portfolio tracking and investment analysis platform",
    type: "Type 5",
    client: "Client 8",
    updated: "2024-10-21"
  }
]

function InheritedSgmtCntrlPanel({ onClose }) {
  const [activeFilter, setActiveFilter] = useState('type')
  const [searchTerm, setSearchTerm] = useState('')

  // Group data based on active filter
  const groupedData = useMemo(() => {
    let filtered = testData

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.siteTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.client.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

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
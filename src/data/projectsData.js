/**
 * Project Test Data
 * 
 * This file contains all test data for the InheritedSgmtCntrlPanel component.
 * Data is structured to support filtering by type and client.
 * 
 * Distribution:
 * - Type 1: 2 projects
 * - Type 2: 3 projects  
 * - Type 3: 3 projects
 * - Type 4: 2 projects
 * - Type 5: 3 projects
 * Total: 13 projects
 */

export const projectsData = [
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

/**
 * Get all unique types from the data
 * @returns {string[]} Array of unique type values
 */
export const getUniqueTypes = () => {
  return [...new Set(projectsData.map(project => project.type))].sort()
}

/**
 * Get all unique clients from the data
 * @returns {string[]} Array of unique client values
 */
export const getUniqueClients = () => {
  return [...new Set(projectsData.map(project => project.client))].sort()
}

/**
 * Get projects by type
 * @param {string} type - The type to filter by
 * @returns {Object[]} Array of projects matching the type
 */
export const getProjectsByType = (type) => {
  return projectsData.filter(project => project.type === type)
}

/**
 * Get projects by client
 * @param {string} client - The client to filter by
 * @returns {Object[]} Array of projects matching the client
 */
export const getProjectsByClient = (client) => {
  return projectsData.filter(project => project.client === client)
}

/**
 * Search projects by term
 * @param {string} searchTerm - Term to search for
 * @returns {Object[]} Array of projects matching the search term
 */
export const searchProjects = (searchTerm) => {
  if (!searchTerm) return projectsData
  
  const term = searchTerm.toLowerCase()
  return projectsData.filter(project => 
    project.siteTitle.toLowerCase().includes(term) ||
    project.shortDescription.toLowerCase().includes(term) ||
    project.type.toLowerCase().includes(term) ||
    project.client.toLowerCase().includes(term)
  )
}

/**
 * Get project statistics
 * @returns {Object} Object containing data statistics
 */
export const getProjectStats = () => {
  const typeStats = {}
  const clientStats = {}
  
  projectsData.forEach(project => {
    typeStats[project.type] = (typeStats[project.type] || 0) + 1
    clientStats[project.client] = (clientStats[project.client] || 0) + 1
  })
  
  return {
    total: projectsData.length,
    byType: typeStats,
    byClient: clientStats,
    uniqueTypes: getUniqueTypes().length,
    uniqueClients: getUniqueClients().length
  }
}
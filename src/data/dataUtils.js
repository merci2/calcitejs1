/**
 * Data Utilities for Project Management
 * 
 * This file contains utility functions for data manipulation and analysis
 */

import { projectsData } from './projectsData'

/**
 * Group projects by any field
 * @param {string} field - Field name to group by ('type', 'client', etc.)
 * @param {Object[]} data - Data array to group (optional, defaults to projectsData)
 * @returns {Object} Object with grouped data
 */
export const groupProjectsBy = (field, data = projectsData) => {
  return data.reduce((groups, item) => {
    const key = item[field]
    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(item)
    return groups
  }, {})
}

/**
 * Filter projects by multiple criteria
 * @param {Object} filters - Object containing filter criteria
 * @param {Object[]} data - Data array to filter (optional, defaults to projectsData)
 * @returns {Object[]} Filtered array of projects
 */
export const filterProjects = (filters, data = projectsData) => {
  return data.filter(project => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true // Skip empty filters
      return project[key]?.toLowerCase().includes(value.toLowerCase())
    })
  })
}

/**
 * Sort projects by field
 * @param {string} field - Field to sort by
 * @param {string} direction - 'asc' or 'desc'
 * @param {Object[]} data - Data array to sort (optional, defaults to projectsData)
 * @returns {Object[]} Sorted array of projects
 */
export const sortProjects = (field, direction = 'asc', data = projectsData) => {
  return [...data].sort((a, b) => {
    const aVal = a[field]
    const bVal = b[field]
    
    if (direction === 'asc') {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })
}

/**
 * Get projects updated within a date range
 * @param {string} startDate - Start date (YYYY-MM-DD)
 * @param {string} endDate - End date (YYYY-MM-DD)
 * @param {Object[]} data - Data array to filter (optional, defaults to projectsData)
 * @returns {Object[]} Projects within date range
 */
export const getProjectsByDateRange = (startDate, endDate, data = projectsData) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  return data.filter(project => {
    const projectDate = new Date(project.updated)
    return projectDate >= start && projectDate <= end
  })
}

/**
 * Get most recently updated projects
 * @param {number} count - Number of projects to return
 * @param {Object[]} data - Data array to filter (optional, defaults to projectsData)
 * @returns {Object[]} Most recently updated projects
 */
export const getRecentProjects = (count = 5, data = projectsData) => {
  return sortProjects('updated', 'desc', data).slice(0, count)
}

/**
 * Format project data for export
 * @param {Object[]} data - Data array to format (optional, defaults to projectsData)
 * @returns {Object[]} Formatted data for export
 */
export const formatProjectsForExport = (data = projectsData) => {
  return data.map(project => ({
    'Site Title': project.siteTitle,
    'Description': project.shortDescription,
    'Type': project.type,
    'Client': project.client,
    'Last Updated': project.updated
  }))
}
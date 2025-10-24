import { 
  CalciteBlock,
  CalciteLabel,
  CalciteLink
} from '@esri/calcite-components-react'
import styles from './ColorsContent.module.css'

function ColorsContent() {
  // Calcite Design System Color Tokens
  const colorGroups = [
    {
      title: 'Background Colors',
      colors: [
        { name: '--calcite-color-background', label: 'Background' },
        { name: '--calcite-color-foreground-1', label: 'Foreground 1' },
        { name: '--calcite-color-foreground-2', label: 'Foreground 2' },
        { name: '--calcite-color-foreground-3', label: 'Foreground 3' },
      ]
    },
    {
      title: 'Brand Colors',
      colors: [
        { name: '--calcite-color-brand', label: 'Brand' },
        { name: '--calcite-color-brand-hover', label: 'Brand Hover' },
        { name: '--calcite-color-brand-press', label: 'Brand Press' },
      ]
    },
    {
      title: 'Status Colors',
      colors: [
        { name: '--calcite-color-status-info', label: 'Info' },
        { name: '--calcite-color-status-success', label: 'Success' },
        { name: '--calcite-color-status-warning', label: 'Warning' },
        { name: '--calcite-color-status-danger', label: 'Danger' },
      ]
    },
    {
      title: 'Border Colors',
      colors: [
        { name: '--calcite-color-border-1', label: 'Border 1' },
        { name: '--calcite-color-border-2', label: 'Border 2' },
        { name: '--calcite-color-border-3', label: 'Border 3' },
      ]
    },
    {
      title: 'Text Colors',
      colors: [
        { name: '--calcite-color-text-1', label: 'Text 1' },
        { name: '--calcite-color-text-2', label: 'Text 2' },
        { name: '--calcite-color-text-3', label: 'Text 3' },
        { name: '--calcite-color-text-inverse', label: 'Text Inverse' },
      ]
    }
  ]

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>Calcite Design System Colors</h1>
            <p className={styles.pageDescription}>
              Reference for all color tokens available in the Calcite Design System
            </p>
          </div>
          <div className={styles.linkSection}>
            <CalciteLink 
              href="https://developers.arcgis.com/calcite-design-system/foundations/colors/" 
              target="_blank"
              iconEnd="launch"
            >
              Calcite Colors Documentation
            </CalciteLink>
            <CalciteLink 
              href="https://developers.arcgis.com/calcite-design-system/foundations/colors/#semantic-color-tokens" 
              target="_blank"
              iconEnd="launch"
            >
              Semantic Color Tokens
            </CalciteLink>
            <CalciteLink 
              href="https://developers.arcgis.com/calcite-design-system/components/" 
              target="_blank"
              iconEnd="launch"
            >
              All Components
            </CalciteLink>
          </div>
        </div>

        {colorGroups.map((group, groupIndex) => (
          <CalciteBlock 
            key={groupIndex}
            heading={group.title}
            open
            collapsible
            className={styles.colorBlock}
          >
            <div className={styles.colorGrid}>
              {group.colors.map((color, colorIndex) => (
                <div key={colorIndex} className={styles.colorItem}>
                  <div 
                    className={styles.colorSwatch}
                    style={{ backgroundColor: `var(${color.name})` }}
                  />
                  <CalciteLabel>
                    <div className={styles.colorLabel}>
                      <div className={styles.colorName}>{color.label}</div>
                      <div className={styles.colorVariable}>{color.name}</div>
                    </div>
                  </CalciteLabel>
                </div>
              ))}
            </div>
          </CalciteBlock>
        ))}
      </div>
    </div>
  )
}

export default ColorsContent
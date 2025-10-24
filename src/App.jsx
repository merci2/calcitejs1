import { 
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction
} from '@esri/calcite-components-react'
import { useState } from 'react'
import ButtonGroupPanel from './pages/ButtonGroupPanel/ButtonGroupPanel'
import SegmentedControlPanel from './pages/SegmentedControlPanel/SegmentedControlPanel'
import ColorsPanel from './pages/ColorsPanel/ColorsPanel'
import ColorsContent from './pages/ColorsPanel/ColorsContent'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState(null)
  const [expanded, setExpanded] = useState(false)

  const handleClose = () => {
    setActivePage(null)
  }

  return (
    <CalciteShell>
      {/* Left Navigation with Icons */}
      <CalciteActionBar 
        slot="panel-start"
        expanded={expanded}
        onCalciteActionBarToggle={(e) => setExpanded(e.target.expanded)}
      >
        <CalciteAction
          text="Button Group"
          icon="button"
          active={activePage === 'buttongroup'}
          onClick={() => setActivePage(activePage === 'buttongroup' ? null : 'buttongroup')}
        />
        <CalciteAction
          text="Segmented Control"
          icon="toggle"
          active={activePage === 'segmented'}
          onClick={() => setActivePage(activePage === 'segmented' ? null : 'segmented')}
        />
        <CalciteAction
          text="Colors"
          icon="palette"
          active={activePage === 'colors'}
          onClick={() => setActivePage(activePage === 'colors' ? null : 'colors')}
        />
      </CalciteActionBar>

      {/* Content Panel that appears/disappears based on active page */}
      {activePage && (
        <CalciteShellPanel 
          slot="panel-start" 
          position="start" 
          displayMode="float"
          widthScale="l"
        >
          {activePage === 'buttongroup' && <ButtonGroupPanel onClose={handleClose} />}
          {activePage === 'segmented' && <SegmentedControlPanel onClose={handleClose} />}
          {activePage === 'colors' && <ColorsPanel onClose={handleClose} />}
        </CalciteShellPanel>
      )}

      {/* Main Content Area */}
      <div className="main-content">
        {/* Dieser Bereich bleibt leer und wächst mit */}
        {activePage === 'colors' && <ColorsContent />}
      </div>
    </CalciteShell>
  )
}

export default App
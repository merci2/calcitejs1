import { 
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction
} from '@esri/calcite-components-react'
import { useState } from 'react'
import ButtonGroupPanel from './pages/ButtonGroupPanel/ButtonGroupPanel'
import SegmentedControlPanel from './pages/SegmentedControlPanel/SegmentedControlPanel'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState(null)

  const handleClose = () => {
    setActivePage(null)
  }

  return (
    <CalciteShell>
      {/* Left Navigation with Icons */}
      <CalciteActionBar slot="panel-start">
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
        </CalciteShellPanel>
      )}

      {/* Main Content Area */}
      <div className="main-content">
        {/* Dieser Bereich bleibt leer und wächst mit */}
      </div>
    </CalciteShell>
  )
}

export default App
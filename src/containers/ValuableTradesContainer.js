import React, { useEffect, useState } from 'react'
import '../css/ValuableTradesContainer.css'
import PriceJumpsIndex from './PriceJumpsIndex'
import Tab from '../components/Tab'
import API from '../adapters/API'

const ValuableTradesContainer = () => {
  const [valuableTrades, setValuableTrades] = useState([])
  const [unValuableTrades, setUnValuableTrades] = useState([])
  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    API.getPriceJumps().then(trades => {
      setValuableTrades(trades[0])
      setUnValuableTrades(trades[1])
    })
  }, [])

  const tabColor = { color: 'rgb(23, 64, 139)', backgroundColor: 'white' }

  return (
    <div className='valuable-trades-container'>
      <div className='tab-area'>
        {activeTab === 1 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(1)}>
            Rises
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(1)}>Rises</Tab>
        )}
        {activeTab === 2 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(2)}>
            Drops
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(2)}>Drops</Tab>
        )}
        {/* {activeTab === 3 ? (
          <Tab style={tabColor} onClick={() => setActiveTab(3)}>
            Most Bought
          </Tab>
        ) : (
          <Tab onClick={() => setActiveTab(3)}>Most Bought</Tab>
        )} */}
      </div>
      {activeTab === 1 && (
        <PriceJumpsIndex
          activeTab={activeTab}
          valuableTrades={valuableTrades}
        />
      )}
      {activeTab === 2 && (
        <PriceJumpsIndex
          activeTab={activeTab}
          valuableTrades={unValuableTrades}
        />
      )}
    </div>
  )
}

export default ValuableTradesContainer

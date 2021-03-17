import React from 'react'
import InfoCard from '../InfoCard'
import cardItems from './cardItemsData'

const InfoCards = () => (
    <div className="info-card">
        {
            cardItems.map(({ cardTitle, cardItems, customStyle }) => (
                <InfoCard cardTitle={cardTitle} cardItems={cardItems} customStyle={customStyle} />
            ))
        }
        <div className="margin-bottom"></div>
    </div>
)

export default InfoCards
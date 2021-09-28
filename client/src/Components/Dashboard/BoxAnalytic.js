import React from 'react'

function BoxAnalytic(props) {
    const {title, number, dir, annual, changeNumber} = props;
    return (
        <div className="box-analytic">
            <h2 className="box-title">{title}</h2>
            <h3 className="box-number">{number}</h3>
            <p className="box-time">
                <span className={`${dir === 'asc' ? 'asc' : 'desc'}`}>{`${dir ==='asc' ? '+' : '-'} ${changeNumber}%`}</span>Since last week
            </p>
            <div className="box-absolute flex flex-ai-c flex-jc-c">
                <span>{annual}</span>
            </div>
        </div>
    )
}

export default BoxAnalytic

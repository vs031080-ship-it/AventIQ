import { useState } from 'react';

export default function FeatureTabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs-container">
            <div className="tab-nav">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`tab-btn${index === activeTab ? ' active' : ''}`}
                        onClick={() => setActiveTab(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="tab-icon">
                            {tab.icon}
                        </div>
                        <div className="tab-text">
                            <h4>{tab.title}</h4>
                            <p>{tab.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tab-contents">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`tab-content${index === activeTab ? ' active' : ''}`}
                    >
                        <div className="tab-content-inner">
                            <h3>{tab.title}</h3>
                            <p>{tab.description}</p>
                            <div className="feature-list">
                                {tab.features.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            {tab.image && (
                                <div className="tab-image">
                                    <img src={tab.image} alt={tab.title} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

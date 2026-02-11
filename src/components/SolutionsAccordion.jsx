import { useState } from 'react';

export default function SolutionsAccordion({ items, defaultImage }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const currentImage = items[activeIndex]?.image || defaultImage;

    return (
        <div className="solutions-accordion">
            <div className="accordion-nav">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`accordion-item${index === activeIndex ? ' active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="accordion-visual">
                <img
                    src={currentImage}
                    alt="Solution visual"
                    id="accordionImage"
                    style={{ transition: 'opacity 0.3s ease' }}
                />
            </div>
        </div>
    );
}

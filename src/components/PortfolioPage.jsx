import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';


const artworks = [
    {
        id: 1,
        title: 'Ethereal Bloom',
        description: 'A surreal portrayal of elegance where floral bloom meets feminine mystique. This piece captures the delicate balance of beauty and imagination.',
        image: '/assets/arts/beauty.png',
        breadcrumb: 'Portfolio > Ethereal Bloom',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 180
    },
    {
        id: 2,
        title: 'Serenity Unfolded',
        description: 'Minimalism at its finest. A portrait that radiates calm and grace through closed eyes and gentle features.',
        image: '/assets/arts/calmface.png',
        breadcrumb: 'Portfolio > Serenity Unfolded',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 150
    },
    {
        id: 3,
        title: 'Château Chic',
        description: 'A fashion-forward sketch capturing timeless class. From the beret to the fierce gaze, this portrait channels European vintage with a modern attitude.',
        image: '/assets/arts/jennie.png',
        breadcrumb: 'Portfolio > Château Chic',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 220
    },
    {
        id: 4,
        title: 'Velvet Gaze',
        description: 'A compelling study in contrast and expression. Soft features are juxtaposed with a bold pose, inviting the viewer into a story of mystery.',
        image: '/assets/arts/jennie2.png',
        breadcrumb: 'Portfolio > Velvet Gaze',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 200
    },
    {
        id: 5,
        title: 'Twilight Muse',
        description: 'Embodying elegance and confidence, this portrait dances between realism and dreamscape with rich detailing.',
        image: '/assets/arts/jisoo.png',
        breadcrumb: 'Portfolio > Twilight Muse',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 250
    },
    {
        id: 6,
        title: 'Crimson Whisper',
        description: 'An edgy expression captured mid-thought. The styling echoes bold modern femininity through precise shading and attitude.',
        image: '/assets/arts/lisa.png',
        breadcrumb: 'Portfolio > Crimson Whisper',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 230
    },
    {
        id: 7,
        title: 'Illusion Grip',
        description: 'An imaginative, slightly eerie concept playing with mirrors and dimensions, hinting at the duality of identity and perception.',
        image: '/assets/arts/mirrorpeice.png',
        breadcrumb: 'Portfolio > Illusion Grip',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 260
    },
    {
        id: 8,
        title: 'Whispering Silhouette',
        description: 'A soft yet striking profile sketch—elegant, graceful, and quietly confident.',
        image: '/assets/arts/random girl.png',
        breadcrumb: 'Portfolio > Whispering Silhouette',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 180
    },
    {
        id: 9,
        title: 'Glass Stare',
        description: 'This expressive portrait captures a frozen moment of introspection through layered textures and shadows.',
        image: '/assets/arts/ryujin.png',
        breadcrumb: 'Portfolio > Glass Stare',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 240
    },
    {
        id: 10,
        title: 'Crown of Dust',
        description: 'A hauntingly beautiful composition of a crowned skull surrounded by roses, symbolizing life and elegant decay.',
        image: '/assets/arts/skeletonface.png',
        breadcrumb: 'Portfolio > Crown of Dust',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 300
    },
    {
        id: 11,
        title: 'Golden Note',
        description: 'A fan-favorite tribute with incredible likeness and refined execution. The soft pencil work captures warmth and charisma—truly a piece for collectors.',
        image: '/assets/arts/taylorswift.png',
        breadcrumb: 'Portfolio > Golden Note',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 270
    },
    {
        id: 12,
        title: 'Grin of the Abyss',
        description: 'A twisted, sinister reinterpretation of a cultural symbol—bold, dark, and captivating.',
        image: '/assets/arts/trollface.png',
        breadcrumb: 'Portfolio > Grin of the Abyss',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 220
    },
    {
        id: 13,
        title: 'Lunar Howl',
        description: 'A high-detail werewolf sketch channeling primal energy and fury—wild, raw, and intense.',
        image: '/assets/arts/warewolf.png',
        breadcrumb: 'Portfolio > Lunar Howl',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 280
    }
];


const PortfolioPage = () => {
    const [selectedArt, setSelectedArt] = useState(null);
    const tiltRefs = useRef([]);

    useEffect(() => {
        tiltRefs.current.forEach((ref) => {
            if (ref) {
                VanillaTilt.init(ref, {
                    max: 6,             // very subtle tilt angle
                    speed: 2000,        // slower movement = smoother luxury feel
                    glare: true,
                    "max-glare": 0.2,   // soft, elegant shine
                    scale: 1.03,        // slight zoom-in for richness
                    perspective: 1000,  // smooth depth perception
                    gyroscope: false    // disables mobile tilt (optional, luxury feel on hover only)
                });
            }
        });
    }, []);

    return (
        <div className="portfolioPage pagesContainer">
            <h2 className="section-title">The Gallery <span>{artworks.length} PEICES</span></h2>

            <div className="art-grid">
                {artworks.map((art, i) => (
                    <div
                        key={art.id}
                        className="art-card"
                        ref={(el) => (tiltRefs.current[i] = el)}
                        onClick={() => setSelectedArt(art)}
                    >
                        <img src={art.image} alt={art.title} className="art-thumb" />
                        <h3>{art.title}</h3>
                        <span className="viewOpt"><i class="fa-solid fa-eye"></i></span>
                    </div>
                ))}
            </div>

            {selectedArt && (
                <div className="overlay">
                    <div className="popup">
                        <button className="close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                        <div className="popup-content">
                            <img src={selectedArt.image} alt={selectedArt.title} className="popup-img" />
                            <div className="popup-details">
                                <div className="popup-breadcrumb">{selectedArt.breadcrumb}</div>
                                <h2>{selectedArt.title}</h2>
                                <p id='desc'>{selectedArt.description}</p>
                                <p id='medium'>| <b>Medium:</b> {selectedArt.medium}</p>
                                <p id='dimension'>| <b>Dimension:</b> {selectedArt.dimensions}</p>
                                <p id='price'><b>Price:</b> {selectedArt.price}$ USD</p>
                                <Link to="https://www.gumroad.com" className="overlay-bottom-btn">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioPage;

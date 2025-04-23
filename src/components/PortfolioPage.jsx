import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';


const artworks = [
    {
        id: 1,
        title: 'Ethereal Bloom',
        description: 'An opulent fusion of feminine mystique and botanical elegance. This surreal portrait invites the collector into a realm where grace and imagination intertwine — a masterpiece that speaks softly yet powerfully.',
        image: '/assets/arts/beauty.webp',
        breadcrumb: 'Portfolio > Ethereal Bloom',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 2000
    },
    {
        id: 2,
        title: 'Serenity Unfolded',
        description: 'A study in tranquility. With closed eyes and a serene face, this refined minimalist sketch evokes silent elegance — a true celebration of stillness for the modern collector.',
        image: '/assets/arts/calmface.webp',
        breadcrumb: 'Portfolio > Serenity Unfolded',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 1500
    },
    {
        id: 3,
        title: 'Château Chic',
        description: 'Old-world sophistication meets runway flair. From the poised beret to the commanding stare, this fashion portrait captures the golden age of European luxury with unapologetic charm.',
        image: '/assets/arts/jennie.webp',
        breadcrumb: 'Portfolio > Château Chic',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 2800
    },
    {
        id: 4,
        title: 'Velvet Gaze',
        description: 'Dripping with allure, this dramatic composition contrasts tender softness with fierce poise. A singular piece, perfect for collectors of emotional depth and exquisite technique.',
        image: '/assets/arts/jennie2.webp',
        breadcrumb: 'Portfolio > Velvet Gaze',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 3500
    },
    {
        id: 5,
        title: 'Twilight Muse',
        description: 'Where dreamscape meets realism. Delicately sketched and richly imagined, this portrait captures the ethereal beauty of dusk — a true gem in graphite.',
        image: '/assets/arts/jisoo.webp',
        breadcrumb: 'Portfolio > Twilight Muse',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 3800
    },
    {
        id: 6,
        title: 'Crimson Whisper',
        description: 'Bold, confident, and effortlessly magnetic. This piece tells the story of a modern muse unafraid to be seen, capturing every nuance in sharp strokes and smoky tones.',
        image: '/assets/arts/lisa.webp',
        breadcrumb: 'Portfolio > Crimson Whisper',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 3000
    },
    {
        id: 7,
        title: 'Illusion Grip',
        description: 'Mystique redefined. This eerie yet elegant portrait bends perception with its mirror motif, exploring the duality of identity in a way that’s haunting and timeless.',
        image: '/assets/arts/mirrorpeice.webp',
        breadcrumb: 'Portfolio > Illusion Grip',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 2800
    },
    {
        id: 8,
        title: 'Whispering Silhouette',
        description: 'Refined simplicity, whispered power. A minimalist sketch of poise and poetics — delicately drawn for the collector who appreciates understated luxury.',
        image: '/assets/arts/random girl.webp',
        breadcrumb: 'Portfolio > Whispering Silhouette',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 3000
    },
    {
        id: 9,
        title: 'Glass Stare',
        description: 'A masterful exploration of emotion through texture. This intimate portrait captures a frozen moment in time, where shadows echo thoughts unspoken.',
        image: '/assets/arts/ryujin.webp',
        breadcrumb: 'Portfolio > Glass Stare',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 3000
    },
    {
        id: 10,
        title: 'Crown of Dust',
        description: 'A poetic paradox. This skull crowned in roses reflects the grace of mortality — haunting, luxurious, and perfect for lovers of gothic symbolism.',
        image: '/assets/arts/skeletonface.webp',
        breadcrumb: 'Portfolio > Crown of Dust',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 2000
    },
    {
        id: 11,
        title: 'Golden Note',
        description: 'A heartfelt tribute with timeless charm. With soft details and precise likeness, this portrait radiates warmth, charisma, and collector-grade elegance.',
        image: '/assets/arts/taylorswift.webp',
        breadcrumb: 'Portfolio > Golden Note',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 3000
    },
    {
        id: 12,
        title: 'Grin of the Abyss',
        description: 'Dark, daring, and unforgettable. This warped iconography twists nostalgia into something menacing — a bold statement piece for the daring collector.',
        image: '/assets/arts/trollface.webp',
        breadcrumb: 'Portfolio > Grin of the Abyss',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 1500
    },
    {
        id: 13,
        title: 'Lunar Howl',
        description: 'Raw power in pure form. This werewolf sketch bursts with primal energy and intense detail — a fierce addition to any curated art wall.',
        image: '/assets/arts/warewolf.webp',
        breadcrumb: 'Portfolio > Lunar Howl',
        medium: 'Graphite on Paper',
        dimensions: 'A4 Paper (210 x 297 mm)',
        price: 2000
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
                                <p id='price'><b>Price:</b> {selectedArt.price}/- PKR</p>
                                <Link to="https://www.gumroad.com" className="overlay-bottom-btn">Own the original</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioPage;

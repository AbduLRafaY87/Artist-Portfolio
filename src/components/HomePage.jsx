import React, { useEffect, useRef, useState } from 'react';
// import './ArtisticTransition'
// import ArtisticTransition from './ArtisticTransition'
const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    // Image paths - replace these with your actual image paths
    const images = [
        '/assets/carousel1.jpg',
        '/assets/carousel2.jpg',
        '/assets/carousel3.jpg'
    ];

    // Auto-slide every 5 seconds
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // cleanup on unmount
    }, []);

    const startAutoSlide = () => {
        slideInterval.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
    };

    const stopAutoSlide = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    const goToSlide = (index) => {
        stopAutoSlide();
        setCurrentIndex(index);
        startAutoSlide(); // restart after manual click
    };

    return (
        
        <div className="homePage">
            <div className="carousel">
                <div
                    className="carousel-wrapper"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((imgSrc, index) => (
                        <div className="carousel-slide" key={index}>
                            <img src={imgSrc} alt={`Slide ${index + 1}`} />
                            <div className="carousel-text">
                                {/* <p>Slide {index + 1}</p> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-pagination">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(i)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className="info-sections">
                {/* FAQs Section */}
                <div className="faqs-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faqs-container">
                        {[
                            { q: "How long does it take to complete a sketch?", a: "It usually takes 2–7 days depending on the size, detail, and type of sketch (portrait, fantasy, abstract, etc.)." },
                            { q: "Can I request a custom artwork?", a: "Yes, custom commissions are always welcome! You can share your reference image, idea, or theme, and I’ll bring it to life." },
                            { q: "Do you offer revisions?", a: "Absolutely. I offer up to 2 free revisions during the sketching phase to ensure you're happy with the final result." },
                            { q: "How are the artworks delivered?", a: "All artworks are scanned and delivered digitally in high-resolution format (JPG or PNG). For physical delivery, shipping charges may apply." },
                            { q: "What type of paper and pencils do you use?", a: "I use high-quality sketch paper and professional-grade graphite pencils (ranging from 2H to 8B) for depth and shading." },
                            { q: "Do you provide framed options?", a: "Framing is available on request for local deliveries. Please mention it while placing your order." },
                            { q: "Can I get a print of an existing artwork?", a: "Yes, selected pieces are available as high-quality prints. You can choose the size and finish." },
                            { q: "How do I place an order?", a: "You can place an order through the contact form or message me on social media. I’ll get back to you within 24 hours." },
                            { q: "What are your prices based on?", a: "Prices vary based on the artwork’s size, detail level, and if it’s a custom piece. Each listing includes a price suggestion." },
                            { q: "Do you work internationally?", a: "Yes! I accept commissions from around the world. Digital delivery is standard, but physical shipping can be arranged." }
                        ].map((item, i) => (
                            <details className="faq-item" key={i}>
                                <summary><strong>{item.q}</strong></summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>

                </div>

                {/* Testimonials Section */}
                <div className="testimonials-section">
                    <h2>Testimonials</h2>
                    <div className="testimonials-container">
                        <div className="testimonial">
                            <p>"Adeena is amazing to work with! Super talented and understood exactly what I was looking for. The design was delivered before the deadline and exceeded my expectations."</p>
                            <p className="testimonial-author">– Sarah J., Marketing Director</p>
                        </div>
                        <div className="testimonial">
                            <p>"Delivered exactly what I wanted and on time. Great communication throughout the entire process. This was my third project with them and I'll definitely be back!"</p>
                            <p className="testimonial-author">– Michael T., Small Business Owner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
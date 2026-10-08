// Comprehensive Mock Data for Aurelia & Stone Haute Architecture & Interior Design Studio

export const STUDIO_INFO = {
  name: "AURELIA & STONE",
  tagline: "Haute Architecture & Interior Design Atelier",
  established: "2014",
  headquarters: "Bandra Kurla Complex, Mumbai",
  studios: [
    { city: "Mumbai", address: "One BKC, G Block, Bandra Kurla Complex, Mumbai 400051", phone: "+91 22 6890 4100", email: "mumbai@aureliastone.com" },
    { city: "New Delhi", address: "The Claridges Atelier, 12 APJ Abdul Kalam Road, New Delhi 110011", phone: "+91 11 4982 7200", email: "delhi@aureliastone.com" },
    { city: "Bengaluru", address: "UB City Concorde Towers, Vittal Mallya Road, Bengaluru 560001", phone: "+91 80 4390 1800", email: "bengaluru@aureliastone.com" },
    { city: "Dubai", address: "DIFC Gate Precinct 4, Level 5, Dubai, UAE", phone: "+971 4 392 8100", email: "dubai@aureliastone.com" }
  ],
  whatsapp: "+919820199482",
  socials: {
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
    linkedin: "https://linkedin.com",
    architecturalDigest: "https://architecturaldigest.com"
  },
  stats: [
    { value: 165, suffix: "+", label: "Luxury Residencies Crafted" },
    { value: 42, suffix: "+", label: "Commercial & Boutique Spaces" },
    { value: 12, suffix: "", label: "International Design Accolades" },
    { value: 98, suffix: "%", label: "Turnkey On-Schedule Delivery" }
  ]
};

export const COLOR_PALETTES = [
  {
    id: "ivory-champagne",
    name: "Imperial Champagne & Ivory",
    category: "Classic Luxury",
    colors: ["#F8F6F2", "#E8E0D5", "#C5A47E", "#594536", "#222222"],
    description: "Serene warm ivory complemented by brushed champagne gold accents and rich walnut undertones."
  },
  {
    id: "noir-marble",
    name: "Calacatta & Walnut Noir",
    category: "Modern Minimalist",
    colors: ["#FFFFFF", "#EFEFEF", "#A88B6A", "#332F2C", "#141414"],
    description: "Monochromatic clarity balanced with smoked walnut millwork and bronze architectural trims."
  },
  {
    id: "mediterranean-terracotta",
    name: "Tuscan Terracotta & Travertine",
    category: "Mediterranean Warmth",
    colors: ["#F7F3EC", "#E5D9C5", "#C27D56", "#735338", "#2B221B"],
    description: "Earthy raw travertine stone warmed by natural baked clay and distressed brass details."
  },
  {
    id: "nordic-sage",
    name: "Japandi Sage & White Ash",
    category: "Japandi & Organic",
    colors: ["#F9F9F7", "#DDE2D5", "#9EA895", "#8C7D70", "#2F332E"],
    description: "Organic tranquil greens paired with bleached ash wood and textured lime-wash plaster."
  }
];

export const DESIGN_STYLES = [
  {
    id: "modern-luxury",
    name: "Modern Luxury",
    tagline: "Understated opulence with pristine lines and tactile materials",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    description: "A seamless synthesis of Italian book-matched marble, architectural cove illumination, concealed storage, and bespoke custom furniture.",
    keyMaterials: ["Calacatta Marble", "Brushed Champagne Brass", "Smoked Walnut", "Bouclé Textiles"],
    idealFor: "Penthouses, Grand Duplexes, High-End Corporate Suites"
  },
  {
    id: "contemporary-minimalist",
    name: "Contemporary Minimalist",
    tagline: "Spatial serenity, sculptural silhouettes, and abundant natural daylight",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    description: "Focusing on pure geometric harmony, decluttered horizons, and monolithic architectural volumes that celebrate negative space.",
    keyMaterials: ["Micro-cement Flooring", "Natural Linen", "Matte Black Steel", "Light Oak"],
    idealFor: "Urban Apartments, Modern Studios, Gallery Residences"
  },
  {
    id: "japandi-organic",
    name: "Japandi & Wabi-Sabi",
    tagline: "The organic fusion of Scandinavian warmth and Japanese mindful restraint",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    description: "Celebrating raw imperfection, handcrafted ceramics, low-profile furniture, and textured plaster walls that soothe the senses.",
    keyMaterials: ["Hinoki & Ash Wood", "Textured Lime-wash", "Handwoven Jute", "Paper Lantern Lighting"],
    idealFor: "Wellness Sanctuaries, Master Suites, Villa Retreats"
  },
  {
    id: "scandinavian-chic",
    name: "Warm Scandinavian",
    tagline: "Airy luminosity, cozy hygge textures, and effortless functional elegance",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    description: "Sunlit open plans, soft curving silhouettes, layered natural textures, and light wooden floors that radiate welcome.",
    keyMaterials: ["Blonde Birch Wood", "Wool Throws", "Ceramic Accents", "Cashmere Fabrics"],
    idealFor: "Family Residencies, Modern Apartments, Suburban Villas"
  },
  {
    id: "neoclassical-heritage",
    name: "Neo-Classical Elegance",
    tagline: "Time-honored architectural mouldings reimagined for 21st-century royalty",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80",
    description: "Ornate boiserie panelling, herringbone parquet, crystal chandeliers, and rich velvets grounded by contemporary art curation.",
    keyMaterials: ["French White Oak Parquet", "Polished Carrara Marble", "Gilded Bronze", "Silk Damask"],
    idealFor: "Heritage Mansions, Sea-Facing Penthouses, Private Estates"
  },
  {
    id: "biophilic-modernism",
    name: "Biophilic Modernism",
    tagline: "Seamless harmony between indoor luxury and living organic botanical architecture",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80",
    description: "Indoor courtyards, living moss walls, floor-to-ceiling glass pavilions, and natural water soundscapes intertwined with high design.",
    keyMaterials: ["Living Plant Walls", "Raw Sandstone", "Teak Wood", "Reflective Water Features"],
    idealFor: "Eco-Luxury Villas, Hillside Retreats, Wellness Spas"
  }
];

export const PROJECTS = [
  {
    id: "altamount-sky-penthouse",
    title: "The Altamount Sky Sanctuary",
    category: "Residential",
    subCategory: "Penthouses",
    location: "Altamount Road, South Mumbai",
    area: "7,800 sq.ft",
    year: "2024",
    client: "Bespoke Family Residence",
    style: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Perched 55 storeys above South Mumbai, this duplex penthouse commands uninterrupted Arabian Sea panoramas. The design pairs Italian Calacatta Oro marble with rich smoked walnut panelling and custom sculptural chandeliers crafted in Murano.",
    challenge: "Converting an echoey 7,800 sq.ft open shell into intimate yet monumental living zones while ensuring floor-to-ceiling glass maximized sunset reflections without thermal discomfort.",
    solution: "We integrated concealed motorized acoustic sheer drapes, zoned floating false ceilings with perimeter cove illumination, and created a sculptural floating travertine staircase connecting the two tiers.",
    materials: ["Italian Calacatta Oro", "Smoked Belgian Walnut", "Brushed Champagne Brass", "Custom Mohair Upholstery", "Hand-Tufted Silk Carpets"],
    featured: true
  },
  {
    id: "alibaug-villa-solarium",
    title: "Villa Solarium & Pavilions",
    category: "Luxury Villas",
    subCategory: "Villas",
    location: "Awas Coast, Alibaug",
    area: "12,500 sq.ft",
    year: "2024",
    client: "Private Coastal Retreat",
    style: "Biophilic Modernism",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "An expansive coastal estate blending indoor salons with private plunge pools, monolithic basalt courtyards, and open-air dining pavilions surrounded by tropical flora.",
    challenge: "High saline air required resilient outdoor-indoor materials that didn't sacrifice artisanal luxury.",
    solution: "Custom marine-grade bronze alloys, thermally modified sustainably sourced teak, and locally quarried Dhrangadhra stone were selected to age gracefully with the sea breeze.",
    materials: ["Dhrangadhra Sandstone", "Reclaimed Teak", "Oxidized Bronze Fixtures", "Loom-Woven Linen"],
    featured: true
  },
  {
    id: "worli-duplex-kitchen",
    title: "The Cullinan Culinary Suite",
    category: "Modular Kitchens",
    subCategory: "Kitchens",
    location: "Worli Sea Face, Mumbai",
    area: "850 sq.ft",
    year: "2023",
    client: "Gourmet Chef Residence",
    style: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "An ultra-precision modular island kitchen boasting integrated Gaggenau appliances, book-matched Nero Marquina quartz surfaces, and concealed motorized spice galleys.",
    challenge: "Integrating both heavy wet cooking workflows and a showstopper social bar without food aromas permeating the adjacent formal dining hall.",
    solution: "A dual-zone kitchen layout separated by acoustic reeded glass sliding partitions with built-in perimeter negative pressure extraction.",
    materials: ["Nero Marquina Quartz", "Fluted Oak Veneer", "Anodized Champagne Aluminum", "German Blum Servo-Drive"],
    featured: true
  },
  {
    id: "lutyens-presidential-master",
    title: "The Sovereign Master Suite",
    category: "Bedrooms",
    subCategory: "Bedrooms",
    location: "Lutyens Bungalow Zone, New Delhi",
    area: "1,450 sq.ft",
    year: "2024",
    client: "Diplomatic Residence",
    style: "Neo-Classical Elegance",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "A master sanctuary wrapped in acoustic suede panelling, private reading bay with garden vista, illuminated walk-in dressing salon, and en-suite freestanding marble tub.",
    challenge: "Creating an acoustic cocoon that isolated city bustle while preserving historic colonial ceiling heights.",
    solution: "Tiered coffered ceiling with embedded acoustic microfiber insulation, custom velvet wall cladding, and triple-glazed soundproof sash windows.",
    materials: ["Italian Statuario Marble", "Plush Alpaca Carpeting", "Brushed Rose Gold Trims", "Suede Wall Panelling"],
    featured: true
  },
  {
    id: "bkc-family-office",
    title: "Apex Private Equity Headquarters",
    category: "Commercial Spaces",
    subCategory: "Offices",
    location: "Bandra Kurla Complex, Mumbai",
    area: "14,000 sq.ft",
    year: "2023",
    client: "Global Asset Management Firm",
    style: "Contemporary Minimalist",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "An understated boardroom sanctuary combining acoustically optimized timber slatted walls, hidden video conference tech, ergonomic Vitra executive seating, and an art-collector gallery corridor.",
    challenge: "High confidentiality requirements between deal teams without resulting in claustrophobic closed corridors.",
    solution: "Smart switchable electrochromic privacy glass paired with continuous travertine monolith floors and circadian rhythm architectural lighting.",
    materials: ["Travertine Navona", "Acoustic Slatted American Walnut", "Switchable Glass", "Bespoke Bronze Furniture"],
    featured: true
  },
  {
    id: "juhu-beach-villa-living",
    title: "The Azure Horizon Salon",
    category: "Living Rooms",
    subCategory: "Living Rooms",
    location: "Juhu Tara Road, Mumbai",
    area: "2,200 sq.ft",
    year: "2024",
    client: "Art Collector Family",
    style: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "Double-height living space focused around a 18-foot suspended bio-ethanol fireplace, custom curved Minotti conversation pit, and museum-grade art illumination track systems.",
    challenge: "Harmonizing grand scale with comfortable intimacy for intimate evening conversations.",
    solution: "Bespoke circular area rug anchoring curved seating elements, complemented by layered warm 2700K ambient lighting rings.",
    materials: ["Custom Bouclé Upholstery", "Nero Antico Marble", "Matte Gunmetal Steel", "Hand-scraped Oak"],
    featured: false
  },
  {
    id: "difc-boutique-restaurant",
    title: "L'Ambre Fine Dining & Bar",
    category: "Hospitality",
    subCategory: "Restaurants",
    location: "DIFC, Dubai",
    area: "6,500 sq.ft",
    year: "2024",
    client: "Michelin-Caliber Dining Group",
    style: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description: "An evocative dining spectacle with warm amber backlit onyx bars, plush cognac leather booths, and undulating brass ceiling fins mimicking desert dunes.",
    challenge: "Balancing dramatic mood lighting with culinary clarity at table level.",
    solution: "Custom pinpoint fiber-optic table spotlights hidden within sculptured ceiling ribbons.",
    materials: ["Backlit Honey Onyx", "Cognac Saddle Leather", "Sculpted Champagne Brass", "Terrazzo Flooring"],
    featured: false
  },
  {
    id: "golf-links-bungalow",
    title: "The Pavilion at Golf Links",
    category: "Luxury Villas",
    subCategory: "Villas",
    location: "Golf Links, New Delhi",
    area: "9,200 sq.ft",
    year: "2023",
    client: "Industrialist Family",
    style: "Contemporary Minimalist",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A serene residence facing the greens, crafted with monolithic grey quartzite, teak brise-soleil sunshades, and zen reflective water mirrors.",
    challenge: "Integrating high security parameters while retaining an open, light-filled atmosphere.",
    solution: "Submerged security perimeter and layered glass courtyards that flood subterranean art galleries with zenithal daylight.",
    materials: ["Grey Quartzite", "Burmese Teak", "Low-Iron Thermal Glazing", "Custom Cast Bronze"],
    featured: false
  },
  {
    id: "bandra-duplex-apartment",
    title: "Pali Hill Modernist Duplex",
    category: "Apartments",
    subCategory: "Apartments",
    location: "Pali Hill, Bandra West, Mumbai",
    area: "4,600 sq.ft",
    year: "2024",
    client: "Creative Director & Producer",
    style: "Japandi & Wabi-Sabi",
    heroImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    description: "A tranquil sanctuary characterized by lime-plaster surfaces, bleached white oak millwork, Noguchi washi paper luminaires, and a private bonsai terrace garden.",
    challenge: "Creating sensory stillness amidst the vibrant energy of Bandra.",
    solution: "Double-walled acoustic drywall systems and acoustic damping wood ceilings with muted natural pigments.",
    materials: ["Venetian Lime Plaster", "Bleached White Oak", "Loom Jute", "Handmade Wabi-Sabi Ceramics"],
    featured: false
  },
  {
    id: "lavelle-road-penthouse",
    title: "The Kensington Penthouse",
    category: "Apartments",
    subCategory: "Penthouses",
    location: "Lavelle Road, Bengaluru",
    area: "5,400 sq.ft",
    year: "2024",
    client: "Tech Entrepreneur Residence",
    style: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    description: "Smart architectural luxury integrated with Crestron automation, customized wine tasting cellar, acoustic home theatre, and an infinity spa overlooking Cubbon Park greens.",
    challenge: "Flawless integration of smart home controls without visible clutter of touchscreens and sensors.",
    solution: "Flush magnetic wall panels, touch-sensitive tactile brass keypads, and automated HVAC slots integrated into architectural reveal shadowlines.",
    materials: ["Armani Grey Marble", "Thermo-treated Walnut", "Brushed Matte Titanium", "Italian Saddle Leather"],
    featured: false
  },
  {
    id: "soho-boutique-clinic",
    title: "Aura Haute Aesthetic Clinic",
    category: "Commercial Spaces",
    subCategory: "Wellness & Spas",
    location: "Kala Ghoda, Mumbai",
    area: "3,800 sq.ft",
    year: "2024",
    client: "Celebrity Dermatologist Group",
    style: "Contemporary Minimalist",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    description: "Subverting traditional clinical stereotypes into a serene, five-star wellness experience with sculptural curving micro-cement pods and indirect halo illumination.",
    challenge: "Strict medical sanitation standards combined with ultra-soothing emotional luxury.",
    solution: "Seamless non-porous antimicrobial Krion surfaces blended with warm organic curves and sound-absorbing acoustic ceiling baffles.",
    materials: ["Seamless Micro-cement", "Solid Surface Krion", "Curved Acoustic Fabric", "Brushed Brass Accents"],
    featured: false
  },
  {
    id: "cybercity-fintech-hq",
    title: "Quantum Executive Headquarters",
    category: "Commercial Spaces",
    subCategory: "Offices",
    location: "Cyber City, Gurugram",
    area: "18,500 sq.ft",
    year: "2023",
    client: "Global Fintech Leader",
    style: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    description: "An avant-garde corporate hub incorporating agile town halls, executive whiskey lounges, phone booths with 42dB acoustic isolation, and biophilic vertical gardens.",
    challenge: "Catering to both high-energy tech teams and conservative board members.",
    solution: "A dual-wing architectural zoning layout linked by a dramatic sculptural brass spiral staircase.",
    materials: ["Polished Basalt Stone", "Perforated Metal Ceiling", "Acoustic Felt", "Curved Glass Enclosures"],
    featured: false
  }
];

export const SERVICES = [
  {
    id: "residential",
    slug: "residential",
    title: "Residential Interior Design",
    shortDesc: "Bespoke sanctuaries for penthouses, grand duplexes, and private urban homes.",
    fullDesc: "Our residential atelier approaches every home as a bespoke portrait of the patron's aspirations. From structural space planning to millwork joinery and art curation, we deliver turnkey residences marked by timeless proportion and sensory richness.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Spatial Master Planning & Flow Optimization",
      "Custom Architectural Millwork & Joinery",
      "Imported Marble & Stone Curation",
      "Smart Home & Circadian Lighting Engineering",
      "Bespoke Furniture Design & Global Sourcing",
      "Art & Artifact Procurement"
    ],
    subCategories: ["Apartment Interior Design", "Luxury Villa Interiors", "Living Room Design", "Bedroom Design", "Modular Kitchen Design", "Dining Room Interiors", "Kids' Room Design", "Wardrobe & Storage Design"]
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial & Corporate Interiors",
    shortDesc: "High-impact headquarters, executive suites, and luxury retail destinations.",
    fullDesc: "We design commercial spaces that command authority, foster collaborative genius, and manifest brand prestige. With acoustic perfection, ergonomic excellence, and seamless tech integration, our corporate interiors redefine the modern workplace.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Executive Boardrooms & C-Suite Enclaves",
      "Acoustic Engineering & Private Booths",
      "Brand Experience Foyers & Reception Zones",
      "Bespoke Lighting & Circadian System Architecture",
      "Agile Workstations & Wellness Pods",
      "LEED & WELL Certification Compliant Designs"
    ],
    subCategories: ["Corporate Office Interiors", "Restaurant & Café Interiors", "Retail Store Interiors", "Hotel & Hospitality Interiors", "Clinic & Healthcare Interiors", "Salon & Spa Interiors", "Showroom Interiors"]
  },
  {
    id: "modular-kitchen",
    slug: "modular-kitchen",
    title: "Gourmet Modular Kitchens",
    shortDesc: "Precision German hardware meets timeless Italian marble and quartz mastery.",
    fullDesc: "The culinary heart of the luxury home deserves surgical precision and haute couture aesthetics. We craft bespoke kitchen suites featuring motorized Blum Servo-Drive cabinetry, anti-fingerprint FENIX surfaces, integrated Gaggenau & Sub-Zero appliances, and hidden wet pantries.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Dual Kitchen Zoning (Show Kitchen & Wet Preparation)",
      "Motorized Touch-to-Open Hardware Systems",
      "Quartz, Porcelain & Granite Seamless Countertops",
      "Integrated Appliance Coordination & Ventilation",
      "Wine Temperature Preservation Cellars",
      "Custom Cutlery, Spice & Pantry Organizers"
    ],
    subCategories: ["Island Kitchens", "Parallel Gourmet Suites", "L-Shaped Social Kitchens", "Butler's Pantries", "Integrated Breakfast Bars"]
  },
  {
    id: "living-room",
    slug: "living-room",
    title: "Living Room & Salon Design",
    shortDesc: "Grand entertaining spaces crafted for conversation, warmth, and visual awe.",
    fullDesc: "Creating grand living spaces that effortlessly transition from intimate family evenings to diplomatic soirees. Sculptural seating arrangements, suspended fireplaces, double-height drapery, and curated accent lighting unite to form breathtaking focal points.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Double-Height Wall Panelling & Stone Cladding",
      "Custom Conversation Pits & Curved Upholstery",
      "Bio-ethanol & Holographic Fireplace Architecture",
      "Architectural Lighting Scenes (Welcome, Lounge, Soiree)",
      "Concealed Audiophile Sound Systems",
      "Curated Artifact Niches & Backlit Vitrines"
    ],
    subCategories: ["Grand Salons", "Family Lounges", "Entertainment Suites", "Double-Height Atriums"]
  },
  {
    id: "bedroom",
    slug: "bedroom",
    title: "Master Suite & Bedroom Sanctum",
    shortDesc: "Acoustically isolated retreats with walk-in dressing suites and spa baths.",
    fullDesc: "We craft bedrooms as peaceful sanctuaries from the world. Every element—from ambient cove illumination and acoustic suede walls to bespoke headboards and climate-controlled walk-in wardrobes—is tuned to promote restorative rest and everyday indulgence.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Acoustic Wall Cladding & Noise Insulation",
      "Custom Floating & Platform Headboards",
      "Glass-Fronted Walk-in Dressing Wardrobes with Lighting",
      "Integrated Morning Beverage Bars & Vanity Consoles",
      "Motorized Blackout & Sheer Drapery Systems",
      "En-suite Spa Bathroom Cohesion"
    ],
    subCategories: ["Master Bed Suites", "Junior Suites", "Walk-In Wardrobes", "Guest Enclaves"]
  },
  {
    id: "office",
    slug: "office",
    title: "Executive Office & Private Library",
    shortDesc: "Commanding study enclaves and corporate sanctuaries engineered for deep work.",
    fullDesc: "Whether designing a corner office in a premier commercial tower or a private library in a sprawling estate, our workspaces balance quiet gravitas, ergonomic luxury, and integrated multimedia infrastructure.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Custom Executive Desks with Concealed Cable Trays",
      "Acoustic Slatted Timber Panelling",
      "Integrated Bookcases with LED Grazing Light",
      "Switchable Smart Glass for Instant Privacy",
      "Hidden Safe & Document Storage Millwork",
      "Ergonomic Seating by Herman Miller & Poltrona Frau"
    ],
    subCategories: ["Private Home Studies", "Corporate Boardrooms", "Executive C-Suites", "Creative Studios"]
  },
  {
    id: "luxury-villa",
    slug: "luxury-villa",
    title: "Luxury Villa & Estate Interiors",
    shortDesc: "Monumental architecture, sprawling pavilions, and seamless indoor-outdoor luxury.",
    fullDesc: "Villas require a grand architectural vision that respects landscape, light, and monumental proportions. We orchestrate transitions from soaring double-height foyers to intimate private balconies, infinity deck lounges, and subterranean wine cellars.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Grand Foyer & Sculptural Staircase Design",
      "Indoor-Outdoor Loggia & Verandah Integration",
      "Double-Height Chandelier Engineering",
      "Private Spa, Sauna & Wellness Suites",
      "Climate-Controlled Wine Cellars & Cigar Lounges",
      "Landscape & Reflection Pool Architectural Integration"
    ],
    subCategories: ["Coastal Villas", "Hillside Retreats", "Farmhouse Estates", "Urban Mansions"]
  }
];

export const DESIGN_PACKAGES = [
  {
    id: "essential",
    name: "The Atelier Foundation",
    tier: "Essential Design",
    priceRange: "₹3,500 – ₹4,800 per sq.ft",
    tagline: "Thoughtful spatial choreography and cohesive aesthetics for high-end apartments.",
    deliverables: [
      "Comprehensive Space Planning & Furniture Layouts",
      "Detailed 2D Architectural CAD Drawings & Sections",
      "Curated Moodboards & Material Swatch Palettes",
      "Lighting & Electrical Fixture Schematic Plans",
      "Sanitary & Hardware Selection Guide",
      "Bi-Weekly Site Supervision by Project Architect"
    ],
    highlights: ["Ideal for: 1,500 - 3,000 sq.ft residences", "Duration: 8 - 12 Weeks Design Phase", "3 Iterations per Room"],
    recommended: false
  },
  {
    id: "premium",
    name: "The Haute Couture Suite",
    tier: "Premium Design",
    priceRange: "₹5,200 – ₹7,500 per sq.ft",
    tagline: "Photorealistic 3D visualization, custom millwork engineering, and turnkey coordination.",
    deliverables: [
      "Everything in The Atelier Foundation",
      "Hyper-Realistic 3D Photorealistic CGI Renders (All Rooms)",
      "Custom Furniture & Millwork Detail Joinery Drawings",
      "Imported Marble Selection & Book-Match Layouts",
      "Acoustic & Cove Ceiling Detailed Engineering",
      "Turnkey Contractor Bidding & Bill of Quantities (BOQ)",
      "Weekly On-Site Supervision & Milestone Quality Audits"
    ],
    highlights: ["Ideal for: 3,000 - 6,500 sq.ft penthouses & duplexes", "Duration: 12 - 16 Weeks Design Phase", "Unlimited Iterations on CGI Renders"],
    recommended: true
  },
  {
    id: "luxury",
    name: "The Sovereign Turnkey",
    tier: "Luxury Turnkey Experience",
    priceRange: "₹8,500 – ₹14,000+ per sq.ft",
    tagline: "White-glove turnkey mastery from bare-shell to custom cutlery and museum-grade art curation.",
    deliverables: [
      "End-to-End White-Glove Project Execution & Handover",
      "Dedicated Senior Partner Architect & Site Director",
      "Direct Procurement of Italian/European Designer Furniture",
      "Smart Home Automation Architecture (Crestron/Lutron)",
      "Bespoke Chandelier & Lighting Sculptures Commissioning",
      "Art Consultation & Gallery Sourcing Assistance",
      "Full 3-Year Post-Handover Maintenance Warranty"
    ],
    highlights: ["Ideal for: 6,000+ sq.ft estates, villas & signature penthouses", "Fully Managed Turnkey Construction", "Dedicated Concierge Service"],
    recommended: false
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    client: "Vikramaditya & Sanjana Singhania",
    designation: "Managing Director, Global Capital Partners",
    project: "The Altamount Sky Penthouse, Mumbai",
    quote: "Aurelia & Stone transformed our 7,800 sq.ft bare shell into an ethereal sanctuary. Their mastery over Italian marble matching and lighting warmth turned our home into an architectural masterpiece that feels profoundly cozy.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    category: "Residential Penthouse"
  },
  {
    id: "test-2",
    client: "Dr. Ananya Roy & Kabir Mehra",
    designation: "Founder, Zenith BioTech",
    project: "Villa Solarium, Alibaug",
    quote: "Building a coastal estate requires deep material intelligence. Aurelia & Stone handled monsoon humidity, saline winds, and monumental stone detailing with absolute poise. The project was delivered on the exact promised date.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    category: "Luxury Villa"
  },
  {
    id: "test-3",
    client: "Rohan Vashisht",
    designation: "Managing Partner, Apex Private Equity",
    project: "Apex BKC Corporate Headquarters",
    quote: "Our international investors are routinely astounded by our boardroom suite. The acoustic dampening, custom walnut joinery, and circadian lighting create an environment of quiet power and intellectual focus.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    category: "Commercial Office"
  },
  {
    id: "test-4",
    client: "Natasha & Cyrus Poonawalla",
    designation: "Art Curators & Collectors",
    project: "Pali Hill Modernist Duplex, Bandra",
    quote: "They understand the subtle art of restraint. Rather than loud ostentation, they delivered textured wabi-sabi plaster walls, quiet corners, and gallery-level lighting that highlights our private art collection impeccably.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    category: "Modern Duplex"
  }
];

export const BLOG_POSTS = [
  {
    id: "architectural-lighting-guide",
    title: "The Alchemy of Warmth: Circadian Architectural Lighting in Luxury Residencies",
    category: "Lighting Design",
    date: "October 2024",
    readTime: "6 min read",
    author: "Ar. Shreya Mehta (Lead Architect)",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Why 2700K Kelvin illumination and concealed linear grazers define the emotional soul of modern luxury penthouses.",
    content: `True architectural luxury is never about blinding brilliance; it is about deliberate shadow, gentle grazing, and circadian rhythm alignment. When we enter a space crafted with indirect cove lighting, the human nervous system naturally decompresses.

By pairing warm dimming technologies (which shift from 3000K daylight down to 1800K candle warmth as evening approaches) with concealed architectural shadow gaps, walls appear to float and textures come alive without a single glare point entering the eye line.`
  },
  {
    id: "calacatta-marble-selection",
    title: "Curating Calacatta vs. Statuario: The Discerning Homeowner's Guide to Carrara Quarries",
    category: "Materials & Finishes",
    date: "September 2024",
    readTime: "8 min read",
    author: "Armaan C. (Master Stonemason Partner)",
    image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Inside our private trips to the Apuan Alps of Italy to personally select book-matched marble slabs with golden veins.",
    content: `No two blocks quarried from the mountains of Carrara are ever identical. Calacatta Oro features dramatic taupe and gold veins drifting across an ivory field, while Statuario offers crisp crystalline whites with dramatic slate-grey lightning veining.

When curating stone for an 18-foot double-height foyer, book-matching must be mapped down to the millimeter in 3D CAD before cutting to ensure the mirror symmetry forms an organic artwork.`
  },
  {
    id: "biophilic-interiors-future",
    title: "Biophilic Architecture: Integrating Living Botanical Micro-Climates Indoors",
    category: "Architecture & Nature",
    date: "August 2024",
    readTime: "5 min read",
    author: "Devangini Sen (Landscape & Sustainable Design Head)",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80",
    excerpt: "How subterranean courtyards, living moss installations, and natural water echoes elevate modern cognitive wellbeing.",
    content: `Biophilic design transcends placing potted plants in a corner. It is the deliberate choreography of natural cross-ventilation, zenithal daylight tubes, tactile unpolished basalt stone, and living vertical gardens with self-sustaining hydroponic irrigation.`
  }
];

export const VIRTUAL_STUDIO_SCENES = [
  {
    id: "living-room-scene",
    title: "The Grand Reception Salon",
    roomType: "Living Room",
    theme: "Modern Italian Luxury",
    dayImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    nightImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80",
    hotspots: [
      {
        id: "h1",
        x: 48,
        y: 65,
        title: "Bespoke Curved Bouclé Lounge",
        category: "Furniture",
        desc: "Custom 4-meter conversation sofa upholstered in Dedar Milano bouclé with champagne bronze plinth.",
        specs: "Length: 420cm | Fabric: High-density wool bouclé | Finish: Brushed bronze"
      },
      {
        id: "h2",
        x: 75,
        y: 40,
        title: "Book-Matched Calacatta Cladding",
        category: "Wall Finish",
        desc: "Precision dry-hung 20mm Italian Calacatta Oro with integrated 10mm bronze shadow-gap reveal.",
        specs: "Origin: Carrara, Italy | Vein: Gold-taupe continuous | Treatment: Honed matte"
      },
      {
        id: "h3",
        x: 25,
        y: 20,
        title: "Perimeter Architectural Cove",
        category: "Lighting",
        desc: "2400K–2700K Warm-dim continuous LED grazing channel casting diffuse glow across Venetian plaster ceiling.",
        specs: "CRI: 98+ | Dimming: 0.1% DALI protocol | Wattage: 14W/m"
      },
      {
        id: "h4",
        x: 52,
        y: 82,
        title: "Smoked Oak Parquet Flooring",
        category: "Flooring",
        desc: "Engineered French oak laid in oversized herringbone pattern with brushed matte polyurethane wax seal.",
        specs: "Plank: 180x900mm | Grade: Prime select | Wear layer: 6mm European Oak"
      }
    ]
  },
  {
    id: "kitchen-scene",
    title: "The Chef's Monolith Kitchen",
    roomType: "Modular Kitchen",
    theme: "Dark Walnut & Nero Quartz",
    dayImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
    nightImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
    hotspots: [
      {
        id: "k1",
        x: 50,
        y: 68,
        title: "Monolithic Quartz Island",
        category: "Countertop",
        desc: "Cantilevered 3.6-meter breakfast bar with waterfall mitered edge and recessed warm LED toe-kick.",
        specs: "Material: Nero Marquina Silestone | Thickness: 40mm | Heat Resistance: 300°C"
      },
      {
        id: "k2",
        x: 28,
        y: 45,
        title: "Motorized Fluted Walnut Cabinetry",
        category: "Millwork",
        desc: "German Blum Servo-Drive automated touch-to-open doors with acoustic damping buffers.",
        specs: "Mechanism: Blum Legrabox | Finish: Fluted Smoked Walnut | Guarantee: 10 Years"
      },
      {
        id: "k3",
        x: 72,
        y: 35,
        title: "Concealed Induction Cooktop",
        category: "Appliances",
        desc: "Invisible induction surface integrated seamlessly under the continuous stone worktop.",
        specs: "Power: 7.4 kW | Zones: 4 FlexInduction | Touchpad: Etched LED indicator"
      }
    ]
  },
  {
    id: "bedroom-scene",
    title: "The Serene Master Sanctuary",
    roomType: "Master Suite",
    theme: "Organic Japandi Sanctuary",
    dayImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
    nightImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80",
    hotspots: [
      {
        id: "b1",
        x: 52,
        y: 55,
        title: "Floating Platform Bed & Suede Headboard",
        category: "Furniture",
        desc: "Low-profile walnut frame with extended acoustic micro-suede paneling and integrated touch controls.",
        specs: "Dimensions: 220x240cm | Fabric: Alcantara suede | Lighting: Built-in 2W goose-neck lamps"
      },
      {
        id: "b2",
        x: 20,
        y: 40,
        title: "Motorized Soundproof Blackout Sheers",
        category: "Window Dressing",
        desc: "Concealed dual-track Somfy motorization offering 100% room blackout and 40% daytime thermal reflection.",
        specs: "Motor: Somfy Glydea Ultra | Fabric: Belgian linen front + blackout backing"
      },
      {
        id: "b3",
        x: 82,
        y: 50,
        title: "Fluted Glass Dressing Suite Entry",
        category: "Partition",
        desc: "Floor-to-ceiling pivot door with reeded bronze acoustic glass separating the bed chamber from the walk-in closet.",
        specs: "Glass: 12mm Toughened Moru Fluted | Hardware: Dormakaba concealed pivot"
      }
    ]
  }
];

export const AI_CURATED_CONCEPTS = {
  "modern-luxury": {
    styleName: "Metropolitan Haute Luxury",
    tagline: "Sleek architectural volumes, book-matched stone, and golden bronze accents",
    conceptImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    palette: ["#F8F6F2", "#E8E0D5", "#C5A47E", "#594536", "#1A1A1A"],
    materials: ["Italian Calacatta Oro", "Smoked Walnut", "Brushed Champagne Brass", "Italian Bouclé"],
    lighting: "Concealed 2700K perimeter cove grazing, magnetic low-voltage track spotlights, and hand-blown Murano glass pendants.",
    furniture: "Curved Minotti-style conversation sofas, floating cantilevered media consoles, and marble-topped sculptural coffee tables.",
    estimatedRange: "₹4,800 – ₹7,200 per sq.ft",
    narrative: "This design concept maximizes spatial grandeur through continuous vertical lines and reflective metallic finishes. Dark walnut millwork balances bright ivory ceilings, creating a grounded, stately environment designed for distinguished hosting."
  },
  "japandi": {
    styleName: "Mindful Japandi Sanctuary",
    tagline: "Organic minimalism, wabi-sabi textures, and natural timber tranquility",
    conceptImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    palette: ["#F9F9F7", "#E4E0D7", "#B5A898", "#7D7063", "#282B28"],
    materials: ["Bleached Hinoki Ash", "Venetian Lime-wash Plaster", "Handwoven Jute", "Matte Ceramic Clay"],
    lighting: "Low-glare paper washi lanterns by Isamu Noguchi, hidden floor-level wash lights, and indirect niche illumination.",
    furniture: "Low-slung solid oak seating, tatami-inspired platform daybeds, and hand-chiseled wooden accent stools.",
    estimatedRange: "₹3,900 – ₹5,800 per sq.ft",
    narrative: "Rooted in simplicity and natural rhythm, this concept strips away visual noise in favor of rich, tactile surfaces. Textured lime plaster softens harsh shadows while raw ash wood brings quiet, restorative warmth to daily life."
  },
  "contemporary-minimalist": {
    styleName: "Architectural Pure Minimalist",
    tagline: "Monolithic purity, sculptural geometry, and boundless daylight",
    conceptImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    palette: ["#FFFFFF", "#F2ECE4", "#9E9E9E", "#424242", "#111111"],
    materials: ["Micro-cement Seamless Flooring", "Matte Powder-Coated Steel", "Natural Belgian Linen", "Raw Travertine"],
    lighting: "Recessed trimless architectural downlights with black reflectors, museum-grade spotlighting, and seamless linear slots.",
    furniture: "Sculptural monolith armchairs, floating glass consoles, and bespoke modular bench seating.",
    estimatedRange: "₹4,200 – ₹6,400 per sq.ft",
    narrative: "A masterclass in restraint. Every piece of hardware is either flush or concealed. The seamless micro-cement floor unites adjacent rooms into an expansive, airy landscape where natural daylight becomes the primary artwork."
  },
  "mediterranean": {
    styleName: "Tuscan Coastal Villa",
    tagline: "Earthy terracotta, hand-carved stone arches, and sun-drenched verandas",
    conceptImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    palette: ["#FAF7F2", "#E8D8C3", "#C57B57", "#6E472D", "#1F1A17"],
    materials: ["Dhrangadhra Travertine", "Reclaimed Teak Beams", "Aged Brass Hardware", "Natural Raw Clay"],
    lighting: "Wrought iron chandelier pendants, alabaster wall sconces, and soft outdoor uplighting grazing olive trees.",
    furniture: "Slipcovered linen lounges, rustic carved refectory tables, and woven rush accent armchairs.",
    estimatedRange: "₹4,500 – ₹6,900 per sq.ft",
    narrative: "Warm, convivial, and timeless. Inspired by European coastal estates, this aesthetic embraces organic arches, warm terracotta tones, and tactile unpolished surfaces that improve with age."
  }
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What type of space are you envisioning?",
    subtitle: "Select the primary canvas for your transformation",
    options: [
      { id: "penthouse", label: "Penthouse / Luxury Duplex", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80", styleScore: "modern-luxury" },
      { id: "villa", label: "Private Coastal or Country Villa", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", styleScore: "mediterranean" },
      { id: "apartment", label: "Urban High-Rise Apartment", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80", styleScore: "japandi" },
      { id: "commercial", label: "Corporate HQ or Boutique Atelier", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80", styleScore: "contemporary-minimalist" }
    ]
  },
  {
    id: 2,
    question: "Which visual atmosphere resonates most with your lifestyle?",
    subtitle: "Your emotional connection to architecture and textures",
    options: [
      { id: "opulent", label: "Timeless Opulence & Polished Elegance", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80", styleScore: "modern-luxury" },
      { id: "zen", label: "Mindful Stillness & Organic Wabi-Sabi", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80", styleScore: "japandi" },
      { id: "minimal", label: "Sculptural Geometry & Open Horizons", image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80", styleScore: "contemporary-minimalist" },
      { id: "warm", label: "Sunlit Terracotta & Coastal Ease", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", styleScore: "mediterranean" }
    ]
  },
  {
    id: 3,
    question: "What primary color mood reflects your personality?",
    subtitle: "The foundational palette for walls, ceilings, and stones",
    options: [
      { id: "champagne", label: "Champagne, Ivory & Rich Smoked Walnut", colors: ["#F8F6F2", "#C5A47E", "#594536"], styleScore: "modern-luxury" },
      { id: "monochrome", label: "Architectural White, Concrete Grey & Matte Black", colors: ["#FFFFFF", "#9E9E9E", "#111111"], styleScore: "contemporary-minimalist" },
      { id: "natural", label: "Sage Greens, Bleached Oak & Raw Linen", colors: ["#F9F9F7", "#9EA895", "#8C7D70"], styleScore: "japandi" },
      { id: "earthy", label: "Warm Terracotta, Sandstone & Antique Brass", colors: ["#FAF7F2", "#C57B57", "#6E472D"], styleScore: "mediterranean" }
    ]
  },
  {
    id: 4,
    question: "Which signature architectural materials do you prioritize?",
    subtitle: "Tactile elements that greet your everyday touch",
    options: [
      { id: "marble-brass", label: "Book-Matched Italian Marble & Polished Brass", styleScore: "modern-luxury" },
      { id: "plaster-wood", label: "Textured Lime-Plaster & Solid Hinoki Ash Wood", styleScore: "japandi" },
      { id: "concrete-glass", label: "Seamless Micro-Cement & Fluted Architectural Glass", styleScore: "contemporary-minimalist" },
      { id: "travertine-terracotta", label: "Natural Travertine & Reclaimed Teak Timbers", styleScore: "mediterranean" }
    ]
  },
  {
    id: 5,
    question: "What is your anticipated project investment tier?",
    subtitle: "Calculated for high-performance architectural execution",
    options: [
      { id: "essential", label: "₹35 Lakhs – ₹75 Lakhs (Refined Atelier)", styleScore: "japandi" },
      { id: "premium", label: "₹75 Lakhs – ₹1.75 Crores (Haute Architecture)", styleScore: "contemporary-minimalist" },
      { id: "luxury", label: "₹1.75 Crores – ₹4 Crores+ (Sovereign Bespoke)", styleScore: "modern-luxury" },
      { id: "estate", label: "₹4 Crores+ (Monolithic Estate Masterwork)", styleScore: "mediterranean" }
    ]
  }
];

export const GALLERY_ITEMS = [
  { id: "g1", title: "Sculptural Living Room", category: "Living Room", style: "Modern Luxury", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80" },
  { id: "g2", title: "Double-Height Travertine Foyer", category: "Villas", style: "Modern Luxury", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80" },
  { id: "g3", title: "Gourmet Kitchen Island Suite", category: "Kitchen", style: "Modern Luxury", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80" },
  { id: "g4", title: "Japandi Master Bedroom", category: "Bedroom", style: "Japandi", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80" },
  { id: "g5", title: "Executive Study & Library", category: "Office", style: "Contemporary", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80" },
  { id: "g6", title: "Coastal Dining Pavilion", category: "Dining", style: "Mediterranean", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80" },
  { id: "g7", title: "Minimalist Lounge Pit", category: "Living Room", style: "Contemporary", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80" },
  { id: "g8", title: "Acoustic Master Suite", category: "Bedroom", style: "Modern Luxury", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80" },
  { id: "g9", title: "Fine Dining Restaurant Bar", category: "Commercial", style: "Modern Luxury", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80" },
  { id: "g10", title: "Nordic Minimalist Alcove", category: "Living Room", style: "Scandinavian", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" },
  { id: "g11", title: "Boutique Wellness Suite", category: "Commercial", style: "Contemporary", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" },
  { id: "g12", title: "Open Plan Glass Pavilion", category: "Villas", style: "Modern Luxury", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" }
];

export const FLOOR_PLAN_DATA = {
  property: "The Sky Villa 4BHK Residence (5,800 sq.ft)",
  zones: [
    {
      id: "foyer",
      name: "Grand Foyer & Gallery",
      area: "380 sq.ft",
      dimensions: "19' x 20'",
      keyFeatures: ["Bookmatched Calacatta feature wall", "Sculptural bronze console", "Recessed cove perimeter"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "living",
      name: "Grand Living Salon",
      area: "1,200 sq.ft",
      dimensions: "30' x 40'",
      keyFeatures: ["Double-height sea-facing glazing", "Curved bouclé conversation pit", "Bio-ethanol linear fireplace"],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "dining",
      name: "Formal Dining & Wine Enclave",
      area: "540 sq.ft",
      dimensions: "18' x 30'",
      keyFeatures: ["12-seater monolith marble table", "Temperature-controlled glass wine cellar", "Murano glass chandelier"],
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kitchen",
      name: "Gourmet Show Kitchen & Pantry",
      area: "620 sq.ft",
      dimensions: "20' x 31'",
      keyFeatures: ["Waterfall quartz island", "Gaggenau integrated appliances", "Concealed heavy cooking prep galley"],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "master",
      name: "Master Bedroom Sanctum",
      area: "1,150 sq.ft",
      dimensions: "25' x 46'",
      keyFeatures: ["Acoustic suede walls", "Illuminated walk-in dressing suite", "Freestanding soaking tub overlooking sunset"],
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "terrace",
      name: "Sky Deck & Plunge Pool",
      area: "850 sq.ft",
      dimensions: "17' x 50'",
      keyFeatures: ["Weatherproof teak decking", "Vanishing edge infinity jacuzzi", "Outdoor fire lounge"],
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export const MOODBOARD_ASSETS = {
  images: [
    { id: "m-img-1", name: "Modern Curved Lounge", url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80" },
    { id: "m-img-2", name: "Italian Calacatta Wall", url: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=400&q=80" },
    { id: "m-img-3", name: "Gourmet Quartz Island", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" },
    { id: "m-img-4", name: "Acoustic Master Suite", url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80" },
    { id: "m-img-5", name: "Minimalist Lounge Chair", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80" },
    { id: "m-img-6", name: "Zen Wabi-Sabi Niche", url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80" }
  ],
  swatches: [
    { id: "sw-1", name: "Ivory Silk", hex: "#F8F6F2" },
    { id: "sw-2", name: "Champagne Gold", hex: "#C5A47E" },
    { id: "sw-3", name: "Smoked Walnut", hex: "#594536" },
    { id: "sw-4", name: "Deep Charcoal", hex: "#1A1A1A" },
    { id: "sw-5", name: "Travertine Beige", hex: "#E8E0D5" },
    { id: "sw-6", name: "Terracotta Clay", hex: "#C27D56" }
  ],
  materials: [
    { id: "mat-1", name: "Book-matched Calacatta Marble", texture: "Smooth Polished" },
    { id: "mat-2", name: "Fluted American Walnut", texture: "Natural Timber Grain" },
    { id: "mat-3", name: "Brushed Champagne Brass", texture: "Satin Metallic" },
    { id: "mat-4", name: "Italian Wool Bouclé", texture: "Tactile Woven" },
    { id: "mat-5", name: "Venetian Lime Plaster", texture: "Soft Matte Textured" },
    { id: "mat-6", name: "Smoked Bronze Glass", texture: "Translucent Reflective" }
  ],
  fixtures: [
    { id: "fx-1", name: "Murano Glass Chandelier", type: "Lighting" },
    { id: "fx-2", name: "Concealed 2700K Architectural Grazers", type: "Lighting" },
    { id: "fx-3", name: "Gaggenau Flush Induction Hub", type: "Hardware" },
    { id: "fx-4", name: "Sculptural Bio-Ethanol Fireplace", type: "Feature" }
  ]
};

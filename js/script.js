// Catalog Data
const catalogData = [
    {
        id: 1,
        name: "Lapis Legit",
        category: ["tradisional", "basah"],
        description: "Kue lapis legit dengan 18 lapisan, lembut dan legit dengan aroma butter yang menggoda.",
        price: "Rp 85.000",
        emoji: "🍰"
    },
    {
        id: 2,
        name: "Kue Nastar",
        category: ["tradisional", "kering"],
        description: "Kue nastar dengan isian nanas manis, kulit yang renyah dan buttery.",
        price: "Rp 65.000",
        emoji: "🍪"
    },
    {
        id: 3,
        name: "Brownies Premium",
        category: ["modern", "basah"],
        description: "Brownies cokelat premium dengan tekstur fudgy dan topping kacang almond.",
        price: "Rp 75.000",
        emoji: "🍫"
    },
    {
        id: 4,
        name: "Kue Putu Ayu",
        category: ["tradisional", "basah"],
        description: "Kue putu ayu hijau dengan taburan kelapa parut, lembut dan wangi pandan.",
        price: "Rp 45.000",
        emoji: "🥥"
    },
    {
        id: 5,
        name: "Red Velvet Cake",
        category: ["modern", "basah"],
        description: "Red velvet cake dengan cream cheese frosting yang creamy dan lezat.",
        price: "Rp 120.000",
        emoji: "🎂"
    },
    {
        id: 6,
        name: "Kue Klepon",
        category: ["tradisional", "basah"],
        description: "Klepon tradisional dengan isian gula merah dan taburan kelapa parut.",
        price: "Rp 35.000",
        emoji: "🟢"
    },
    {
        id: 7,
        name: "Macaron Assorted",
        category: ["modern", "kering"],
        description: "Macaron dengan berbagai varian rasa: vanilla, cokelat, stroberi, dan matcha.",
        price: "Rp 95.000",
        emoji: "🍬"
    },
    {
        id: 8,
        name: "Kue Lumpur",
        category: ["tradisional", "basah"],
        description: "Kue lumpur lembut dengan topping kismis, manis dan legit.",
        price: "Rp 40.000",
        emoji: "🌋"
    },
    {
        id: 9,
        name: "Tiramisu",
        category: ["modern", "basah"],
        description: "Tiramisu dengan kopi espresso, mascarpone yang creamy, dan cocoa powder.",
        price: "Rp 110.000",
        emoji: "☕"
    },
    {
        id: 10,
        name: "Kue Kacang",
        category: ["tradisional", "kering"],
        description: "Kue kacang renyah dengan kacang tanah berkualitas, gurih dan renyah.",
        price: "Rp 55.000",
        emoji: "🥜"
    },
    {
        id: 11,
        name: "Cheesecake",
        category: ["modern", "basah"],
        description: "New York style cheesecake dengan tekstur creamy dan smooth.",
        price: "Rp 130.000",
        emoji: "🧀"
    },
    {
        id: 12,
        name: "Kue Serabi",
        category: ["tradisional", "basah"],
        description: "Serabi dengan kuah santan manis, lembut dan gurih khas Bandung.",
        price: "Rp 50.000",
        emoji: "🥞"
    }
];

// Render Catalog Items
function renderCatalog(items = catalogData) {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'catalog-item';
        itemCard.setAttribute('data-category', item.category.join(' '));

        const categoryText = item.category.includes('tradisional') ? 'Tradisional' : 'Modern';
        const typeText = item.category.includes('basah') ? 'Kue Basah' : 'Kue Kering';

        itemCard.innerHTML = `
            <div class="item-image">${item.emoji}</div>
            <div class="item-info">
                <h3>${item.name}</h3>
                <span class="item-category">${categoryText} • ${typeText}</span>
                <p class="item-description">${item.description}</p>
                <div class="item-price">${item.price}</div>
            </div>
        `;

        catalogGrid.appendChild(itemCard);
    });
}

// Filter Functionality
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogItems = document.querySelectorAll('.catalog-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            catalogItems.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                } else {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// Update Active Nav Link on Scroll
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    initFilters();
    initSmoothScroll();
    initScrollSpy();
});



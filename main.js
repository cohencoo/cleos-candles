const gallery = document.querySelector("#gallery")
const menu = document.querySelector(".menu-icon")
AOS.init()

const previewArea = document.querySelector(".preview")
const overlay = document.createElement("div")

document.getElementById("copyright").innerText = new Date().getFullYear()

const rerender = (type, id, text) => (document.getElementById(id)[type] = text)
let active = null

menu.onclick = () => {
    document.querySelector(".overlay").style.display = "flex"
    setTimeout(() => (document.querySelector(".overlay").style.transform = "translateY(0)"), 20)
}
function closeMenu() {
    document.querySelector(".overlay").style.transform = "translateY(100%)"
    setTimeout(() => (document.querySelector(".overlay").style.display = "none"), 500)
}

let slideIndex = 0
showSlides()

function showSlides() {
    let i
    let slides = document.getElementsByClassName("slide")
    let dots = document.getElementsByClassName("dot")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
    setTimeout(showSlides, 2000)
}

// "https://picsum.photos/800/800" + "?nocache=" + Math.random()
const candles = [
    {
        name: "Chanel Type No. 5",
        description: "The classic floral scent similar to the luxurious No.5.",
        image: "candle.png",
        gradient: "#fef9e7, #fddac5",
        standardPostage: "https://buy.stripe.com/fZe4jI4xt8rc8CYdQS",
        expressPostage: "https://buy.stripe.com/3cs03s6FBfTE9H228q",
        notes: [
            "Top Notes: Ylang Ylang, Bergamot, Iris",
            "Middle Notes: Roses, Jasmine",
            "Base Notes: Patchouli, Cedarwood",
        ],
    },
    {
        name: "Champagne and Strawberries",
        description:
            "A romantic fragrance with a hint of fresh strawberries and raspberries, combined with champagne and rose scent.",
        image: "candle.png",
        gradient: "#d5adc8, #ff8489",
        standardPostage: "https://buy.stripe.com/bIYdUiaVR0YKcTe147",
        expressPostage: "https://buy.stripe.com/14k03s5BxcHs8CYeVd",
        notes: [
            "Top Notes: Raspberry, Peach Nectar, Citrus Zest",
            "Middle Notes: Strawberry, Champagne, Roses",
            "Base Notes: Musk, Jasmine",
        ],
    },
    {
        name: "Black Raspberry",
        description: "Freshly picked sweet, juicy, sun-ripened dark raspberries and blackberries.",
        image: "candle.png",
        gradient: "#861657, #ffa69e",
        standardPostage: "https://buy.stripe.com/7sI2bA3tpbDog5qeUY",
        expressPostage: "https://buy.stripe.com/7sIdUi4xtdLw7yU4gA",
        notes: [
            "Top Notes: Raspberries, Icing Sugar",
            "Middle Notes: Florals, Blackberry",
            "Base Notes: Musk, Vanilla",
        ],
    },
    {
        name: "Salted Caramel",
        description: "Rich, buttery caramel with a touch of sea salt.",
        image: "candle.png",
        gradient: "#f39f86, #f9d976",
        standardPostage: "https://buy.stripe.com/dR68zYe835f0aL6eUZ",
        expressPostage: "https://buy.stripe.com/4gwcQe6FB4aW06s7sN",
        notes: [
            "Top Notes: Sea Salt, Hazelnuts",
            "Middle Notes: Caramel, Pecan",
            "Base Notes: Vanilla, Buttermilk",
        ],
    },
    {
        name: "Summer Mango",
        description: "Creamy mango and passionfruit with a hint of peach and musk.",
        image: "candle.png",
        gradient: "#f8f9d2, #e8dbfc",
        standardPostage: "https://buy.stripe.com/eVa3fEd3Zazkg5qfZ4",
        expressPostage: "https://buy.stripe.com/eVa9E2fc7bDo8CYcN8",
        notes: ["", "", ""],
    },
    {
        name: "Summer Watermelon",
        description: "A refreshing traditional note of watermelon, musk and cucumber water.",
        image: "candle.png",
        gradient: "#fee2f8, #dcf8ef",
        standardPostage: "https://buy.stripe.com/5kAdUibZV7n88CY9AH",
        expressPostage: "https://buy.stripe.com/cN27vUfc7azkg5qcN9",
        notes: ["", "", ""],
    },
    {
        name: "Brown Sugar and Fig",
        description:
            "A rich, warm and subtly sweet fragrance. Caramelized sugar combined with the fruity smell of fig and complete with white musk and dark amber for an enticing aroma that fills up a space.",
        image: "candle.png",
        gradient: "#cfc7f8, #ebbba7",
        standardPostage: "https://buy.stripe.com/5kA6rQ4xt22O5qM14c",
        expressPostage: "https://buy.stripe.com/bIY3fE2pl5f0g5qaF2",
        notes: [
            "Top Notes: Ripen fig, Caramelized sugar",
            "Middle Notes: Jasmine, White lilies",
            "Base Notes: Dark Amber, White Musk",
        ],
    },
    {
        name: "French Pear",
        description:
            "A sophisticated, sweet, soft smelling fragrance of juicy pear, combined with creamy rich vanilla and a hint of musk.",
        image: "candle.png",
        gradient: "#f9ea8f, #aff1da",
        standardPostage: "https://buy.stripe.com/8wMcQe8NJ7n88CY8wF",
        expressPostage: "https://buy.stripe.com/28o7vUaVR6j46uQ7sR",
        notes: [
            "Top Notes: Citrus, Cinnamon",
            "Middle Notes:  Pear, Cloves",
            "Base Notes: Vanilla, Musk",
        ],
    },
    {
        name: "Coconut and Lime",
        description:
            "Our coconut and lime fragrance is an all time classic. An irresistible fusion of fresh coconut, lime and invigorating verbena soothed by luscious vanilla.",
        image: "candle.png",
        gradient: "#bdd4e7, #8693ab",
        standardPostage: "https://buy.stripe.com/cN2bMad3Z8rc8CY7sC",
        expressPostage: "https://buy.stripe.com/eVa8zYd3ZcHs7yU7sS",
        notes: [
            "Top Notes: Lime, Lemon Zest ",
            "Middle Notes: Coconut, Verbena",
            "Base Notes: Coconut Cream, Vanilla",
            "Contains Vanillin.",
        ],
    },
    {
        name: "Starfruit Lemonade",
        description:
            "Dreaming of summer? Try Starfruit Lemonade, a member of our Sustainable eco friendly Collection. With apple and peach notes fuse into a starfruit mélange, this tropical blend then enhanced with a splash of pineapple, mango and passionfruit for an over the top juicy finish.",
        image: "candle.png",
        gradient: "#fad0c4, #f1a7f1",
        standardPostage: "https://buy.stripe.com/8wM2bAggb8rcbPa5kv",
        expressPostage: "https://buy.stripe.com/eVaaI60hd8rc9H23cD",
        notes: [
            "Top Notes: Sliced Apple, Juicy Peach, Cassis, Orange Zest, Starfruit",
            "Middle Notes: Pineapple Splash, Mango, Juicy Passionfruit, Gardenia",
            "Base Notes: Coconut Leaf, Sugarcane, Fruity Musks",
            "This fragrance oil is infused with Orange essential oil.",
        ],
    },
    {
        name: "Modern Rose",
        description: "Our Modern Rose fragrance is a classic sweet smelling rose scent.",
        image: "candle.png",
        gradient: "#f9c1b1, #fb8085",
        standardPostage: "https://buy.stripe.com/cN22bA0hdgXI4mI4gx",
        expressPostage: "https://buy.stripe.com/bIY8zY4xtdLwdXi3cJ",
        notes: [
            "Top Notes: Pink Roses, Greenery",
            "Middle Notes: English Rose, Jasmine",
            "Base Notes: Light White Musk, Gardenia",
        ],
    },
    {
        name: "Citrus Sea Salt",
        description:
            "Love unique fragrances? Citrus and sea salt is a playful twist, combining citrus notes of lemon and grapefruit with a salty sea salt mist. Citrus and sea salt is the perfect scent to reminisce endless childhood summer days at the beach shack. <br><br> Citrus & Sea Salt fragrance is a seasonal limited edition scent and will not be around forever!",
        image: "candle.png",
        gradient: "#5de6de, #b58ecc",
        standardPostage: "https://buy.stripe.com/fZe8zY0hddLwcTefZa",
        expressPostage: "https://buy.stripe.com/3cs5nM6FB22O9H2aF6",
        notes: ["", "", ""],
    },
    {
        name: "1 Million Type",
        description:
            "Masculine, spiced, dark and delicious, our 1 Million Type fragrance is irresistible and similar to the perfume of the same name.",
        image: "candle.png",
        gradient: "#bbf0f3, #f6d285",
        standardPostage: "https://buy.stripe.com/bIY9E23tpbDo8CY7sF",
        expressPostage: "https://buy.stripe.com/cN24jIfc78rcaL6cNf",
        notes: [
            "Top Notes: Mandarin, peppermint",
            "Middle Notes: Rose, Cinnamon",
            "Base Notes: Amber, Leather",
        ],
    },
    {
        name: "Mysterious Amber",
        description:
            "Uplift your senses with this MASCULINE woody, smokey fragrance. The unmistakable combination of soothing amber and sandalwood, well balanced by top notes of jasmine, lavender, orange, and a hint of brandy. This is just the fragrance for a man with a mysterious aura! <br><br> Mysterious Amber is a seasonal limited edition scent and will not be around forever!",
        image: "candle.png",
        gradient: "#ffcfdf, #b0f3f1",
        standardPostage: "https://buy.stripe.com/14kg2q9RN5f06uQ5kz",
        expressPostage: "https://buy.stripe.com/14k03saVR22O1awaF9",
        notes: ["", "", ""],
    },
    {
        name: "Ocean Fragrance",
        description:
            "A relaxing blend of apple, bergamot with violet and a base note of light musk for a refreshing ocean fragrance.",
        image: "candle.png",
        gradient: "#aee1f9, #f6ebe6",
        standardPostage: "https://buy.stripe.com/bIY17waVRbDo5qM00g",
        expressPostage: "https://buy.stripe.com/3cs8zYaVR5f02eA6oU",
        notes: [
            "Top Notes: Sea Salt, Citrus ",
            "Middle Notes: Apple, Violet",
            "Base Notes: White Musk, Jasmine, Rosewood",
        ],
    },
    {
        name: "Brandy Coffee",
        description:
            "Blended notes of freshly roasted coffee beans and a touch of citrus and sweet cherries accentuated by a hint of brandy. <br><br> Brandy Coffee is a seasonal limited edition scent and will not be around forever!",
        image: "candle.png",
        noStock: true,
        gradient: "#d5adc8, #ff8489",
        standardPostage: "https://buy.stripe.com/aEU3fE3tpfTEg5qdR4",
        expressPostage: "https://buy.stripe.com/aEU4jI6FB4aW6uQfZs",
        notes: ["", "", ""],
    },
]

function setPreview(candle) {
    active = candle
    window.innerWidth <= 1024
        ? (document.querySelector(".preview").style.transform = "translateY(100%)")
        : (document.querySelector(".preview").style.opacity = 0.5)
    overlay.remove()
    previewArea.style.height = "100vh"
    previewArea.style.overflow = "auto"

    setTimeout(
        () => {
            document.getElementById("preview").style.backgroundImage = `url(${candle.image})`
            rerender("innerHTML", "preview-name", candle.name)
            rerender("innerHTML", "preview-description", candle.description)
            rerender(
                "innerHTML",
                "preview",
                `<div style="background: url(labels/${candle.name.replaceAll(
                    " ",
                    "%20"
                )}.png);" class="inject-label"></div>`
            )

            const notes = document.getElementById("preview-notes")
            notes.innerHTML = ""
            candle.notes.forEach((note) => {
                if (!note) return
                const li = document.createElement("li")
                li.style.margin = "8px"
                li.innerText = note
                notes.appendChild(li)
            })
            window.innerWidth <= 1024
                ? (document.querySelector(".preview").style.transform = "translateY(0)")
                : (document.querySelector(".preview").style.opacity = 1)
        },
        window.innerWidth <= 1024 ? 50 : 400
    )
}

function checkout() {
    const overlayId = Date.now()
    previewArea.style.height = "60vh"
    previewArea.style.overflow = "hidden"
    previewArea.scrollTop = 0

    overlay.classList.add("checkout-overlay")
    overlay.innerHTML = `
    <div class="checkout-page" style="display: flex; justify-content: space-between;">
        <p style="margin: 0; font-size: 1.2rem">Confirm your order</p>
        <span class="close" id="overlay-${overlayId}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Exit Checkout
        </span>
    </div>
    
    <hr>

    <h2 style="margin: 8px 0 -10px 0; font-size: 1.8rem">${active.name}</h2>
    <span style="color: black" class="price">$25.00</span>
    <br />
    <p>${active.description}</p>

    <br />
    <br />

    <label for="postage-type">Postage Method</label>
    <select name="postage" id="postage-type">
        <option value="standard">Parcel post ($9.70)</option>
        <option value="express">Express post ($12.70)</option>
    </select>

    <br />

    <a id="stripe-${overlayId}" href="${active.standardPostage}" target="_blank">
        <button class="confirm-order" style="width: 100%; display: block; text-align: center; border-radius: 100rem;">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 1rem; height: 1rem; vertical-align: middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            Confirm Order
        </button>
    </a>
    `
    previewArea.appendChild(overlay)
    document.getElementById("postage-type").addEventListener("change", (e) => {
        document.getElementById(`stripe-${overlayId}`).href =
            e.target.value === "standard" ? active.standardPostage : active.expressPostage
    })

    document.getElementById(`overlay-${overlayId}`).addEventListener("click", () => {
        overlay.remove()
        previewArea.style.height = "100vh"
        previewArea.style.overflow = "auto"
    })
}

document.querySelector(".mobileClose").onclick = () => {
    document.querySelector(".preview").style.transform = "translateY(100%)"

    setTimeout(() => {
        document.querySelector(".preview").classList.remove("mobileMode")
    }, 400)
}

candles.forEach((candle, index) => {
    const div = document.createElement("div")
    div.setAttribute("data-aos-delay", index)
    div.setAttribute("data-aos", "fade-up")

    div.classList.add("item")
    div.style.background = `linear-gradient(45deg, ${candle.gradient})`
    div.onclick = () => {
        if (candle.noStock) return
        if (window.innerWidth <= 1024) {
            document.querySelector(".preview").classList.add("mobileMode")
        }
        setPreview(candle)
    }
    div.innerHTML = `
    <div style="background: url(labels/${candle.name.replaceAll(" ", "%20")}.png); opacity: ${
        candle.noStock ? "0.2" : 1
    };" class="inject-label">
    </div>
    <div class="image" style="opacity: ${candle.noStock ? "0.4" : 1}; background-image: url(${
        candle.image
    })"></div>
    <div class="desc">
        ${
            candle.noStock
                ? `<center style="padding: 10px 0; color: #ddd;"><span>Out Of Stock</span></center>`
                : `        <b>${candle.name}</b>
            <p>${candle.description.slice(0, 60)}...</p>`
        }
    </div>
    `
    gallery.appendChild(div)
    if (candle.name === "Champagne and Strawberries") setPreview(candle)
})

const testimonials = [
    {
        name: "Emma",
        text:
            "I recently bought the Chanel Type No. 5 candle from Cleo's Candles. It smells exactly like the real thing! I always put my candle on before bed to help me wind down after a long day at work.",
    },
    {
        name: "Stacy",
        text:
            "Cleo's Candles have the most gorgeous scent. I recently hosted a dinner for some neighbours and had my Summer Mango candle lit in the back part of the house. As soon as they came through the front door they commented on the amazing smell coming from the house. So divine and long lasting! My neighbours were so impressed that a child had made it!",
    },
    {
        name: "Steph",
        text:
            "The scent throw is incredible! Within minutes the entire room is filled with a gorgeous scent, without it being overpowering. Also, long lasting offering plenty of candle time to enjoy!",
    },
    {
        name: "Rowan",
        text:
            "Cleo's Candles smell divine and are such great value for money! I particularly like the French Pear scent – lighting it in the evening creates such a peaceful ambience in my living area",
    },
    {
        name: "Amy, What The Croque",
        text: "We saw these guys at a recent market and the candles smell AMAZING!",
    },
]

testimonials.forEach((testimonial) => {
    const star = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
    const div = document.createElement("div")
    div.classList.add("item")
    div.innerHTML = `
            <div>${star.repeat(5)}</div>
            <b>${testimonial.name}</b>
            <br>
            <br>
            <q><i>${testimonial.text}</i></q>
    `
    document.querySelector("#testimonials").appendChild(div)
})

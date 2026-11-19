// Catálogo de productos de Artesanías Alpaquitay del Perú.
// Para actualizar el catálogo, edita los datos de este archivo.
window.ALPAQUITAY_PRODUCTS = [
            // 1. CHULLO RIZO ANDINO
            {
                category: 'gorros',
                stock: 10, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/chullo-rizo-1.jpg', 
                    'img/chullo-rizo-2.jpg',
                    'img/chullo-rizo-3.jpg'
                ],
                es: { 
                    name: 'Chullo Rizo Andino', eng: 'Andean Curly Alpaca Chullo', 
                    desc: 'Chullo artesanal elaborado en fibra rizada de alpaca con una distintiva textura crespa. Su diseño unisex incluye cubreorejas abrigadoras con un adorno de botones de colores variados hechos también de alpaca.', 
                    material: '100% Fibra de Alpaca', colores: 'Lila, Blanco', 
                    confeccion: 'Cubreorejas con adorno de botones de alpaca en colores variados', talla: 'Estándar', publico: 'Unisex',
                    colorOptions: ['Lila', 'Blanco']
                },
                en: { 
                    name: 'Andean Curly Alpaca Chullo', eng: 'Chullo Rizo Andino', 
                    desc: 'Handcrafted chullo hat made of curly alpaca fiber featuring a soft textured finish. Unisex fit with earflaps decorated with colorful handcrafted alpaca buttons.', 
                    material: '100% Alpaca Fiber', colores: 'Lilac, White', 
                    confeccion: 'Earflaps with varied color alpaca buttons', talla: 'Standard size', publico: 'Unisex',
                    colorOptions: ['Lilac', 'White']
                }
            },
            // 2. MITÓN RIZO ANDINO
            {
                category: 'mitones',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/miton-rizo-1.jpg', 
                    'img/miton-rizo-2.jpg',
                    'img/miton-rizo-3.jpg'
                ],
                es: { 
                    name: 'Mitón Rizo Andino', eng: 'Andean Curly Alpaca Mittens', 
                    desc: 'Mitones artesanales elaborados en 100% fibra de alpaca con una distintiva textura rizada y suave. Diseñados para mujer, incorporan delicados adornos de flores y botones de colores variados en la muñeca.', 
                    material: '100% Fibra de Alpaca', colores: 'Lila, Blanco', 
                    confeccion: 'Flores y botones de colores variados tejidos en lana de alpaca en la muñeca', talla: 'Estándar', publico: 'Mujer',
                    colorOptions: ['Lila', 'Blanco']
                },
                en: { 
                    name: 'Andean Curly Alpaca Mittens', eng: 'Mitón Rizo Andino', 
                    desc: 'Handcrafted mittens made of 100% curly alpaca fiber. Designed for women with delicate alpaca wool flowers and colorful buttons at the wrist.', 
                    material: '100% Alpaca Fiber', colores: 'Lilac, White', 
                    confeccion: 'Flowers and varied color alpaca buttons at wrist', talla: 'Standard size', publico: 'Women',
                    colorOptions: ['Lilac', 'White']
                }
            },
            // 3. MUÑEQUERA BOTÁNICA ANDINA
            {
                category: 'mitones',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/muneca-botanica-1.jpg', 
                    'img/muneca-botanica-2.jpg',
                    'img/muneca-botanica-3.jpg'
                ],
                es: { 
                    name: 'Muñequera Botánica Andina', eng: 'Andean Botanical Alpaca Wrist Warmer', 
                    desc: 'Muñequeras artesanales elaboradas en 100% fibra de alpaca para mujer. Destacan por su refinado bordado floral hecho a mano que rinde homenaje a la flora andina.', 
                    material: '100% Fibra de Alpaca', colores: 'Guindo', 
                    confeccion: 'Bordado artesanal a mano con motivos botánicos/florales', talla: 'Estándar', publico: 'Mujer',
                    colorOptions: ['Guindo']
                },
                en: { 
                    name: 'Andean Botanical Alpaca Wrist Warmer', eng: 'Muñequera Botánica Andina', 
                    desc: 'Handcrafted wrist warmers made of 100% alpaca fiber for women. Highlighted by delicate hand-embroidered floral motifs inspired by Andean flora.', 
                    material: '100% Alpaca Fiber', colores: 'Burgundy', 
                    confeccion: 'Hand-embroidered botanical floral designs', talla: 'Standard size', publico: 'Women',
                    colorOptions: ['Burgundy']
                }
            },
            // 4. MUÑEQUERA AMANECER ANDINO
            {
                category: 'mitones',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/muneca-amanecer-1.jpg', 
                    'img/muneca-amanecer-2.jpg',
                    'img/muneca-amanecer-3.jpg'
                ],
                es: { 
                    name: 'Muñequera Amanecer Andino', eng: 'Andean Sunrise Alpaca Wrist Warmer', 
                    desc: 'Mitones tejidos artesanalmente en fibra 100% alpaca. Su diseño sin dedos brinda calidez y total libertad de movimiento, acentuado con un botón clásico.', 
                    material: '100% Fibra de Alpaca', colores: 'Gris, Beige, Negro, Blanco', 
                    confeccion: 'Botón decorativo en fibra de alpaca', talla: 'Estándar', publico: 'Unisex',
                    colorOptions: ['Gris', 'Beige', 'Negro', 'Blanco']
                },
                en: { 
                    name: 'Andean Sunrise Alpaca Wrist Warmer', eng: 'Muñequera Amanecer Andino', 
                    desc: 'Handcrafted fingerless gloves made of 100% alpaca fiber. Fingerless design providing warmth and touchscreen mobility with a classic button detail.', 
                    material: '100% Alpaca Fiber', colores: 'Gray, Beige, Black, White', 
                    confeccion: 'Decorative alpaca fiber button', talla: 'Standard size', publico: 'Unisex',
                    colorOptions: ['Gray', 'Beige', 'Black', 'White']
                }
            },
            // 5. VINCHA "AMIGOS DEL BOSQUE" DE ALPACA
            {
                category: 'vinchas',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 18.00,
                images: [
                    'img/vincha-bosque-1.jpg', 
                    'img/vincha-bosque-2.jpg',
                    'img/vincha-bosque-3.jpg'
                ],
                es: { 
                    name: 'Vincha "Amigos del Bosque" de Alpaca', eng: 'Alpaca Animal Ear & Flower Headband', 
                    desc: 'Divertidas y abrigadoras vinchas tejidas a mano en fibra 100% de alpaca, diseñadas con encantadores apliques de animalitos y flores.', 
                    material: '100% Fibra de Alpaca', colores: 'Diseños: lechucita, pandita, zorrito, ovejita, gatito, perrito y flores', 
                    confeccion: 'Apliques a mano (Lechucita, Panda, Zorrito, Ovejita, Gatito, Perrito, Flores)', talla: 'Estándar', publico: 'Niños y jóvenes',
                    colorOptions: ['Lechucita', 'Panda', 'Zorrito', 'Ovejita', 'Gatito', 'Perrito', 'Flores']
                },
                en: { 
                    name: 'Alpaca Animal Ear & Flower Headband', eng: 'Vincha "Amigos del Bosque" de Alpaca', 
                    desc: 'Fun and warm hand-knitted headbands made of 100% alpaca fiber with animal ear and flower appliques.', 
                    material: '100% Alpaca Fiber', colores: 'Designs: owl, panda, fox, sheep, kitten, puppy and flowers', 
                    confeccion: 'Hand-knitted appliques (Owl, Panda, Fox, Sheep, Kitten, Puppy, Flowers)', talla: 'Standard size', publico: 'Kids and youth',
                    colorOptions: ['Owl', 'Panda', 'Fox', 'Sheep', 'Kitten', 'Puppy', 'Flowers']
                }
            },
            // 6. VINCHAS MULTITONO ANDINAS
            {
                category: 'vinchas',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 15.00,
                images: [
                    'img/vincha-multitono-1.jpg', 
                    'img/vincha-multitono-2.jpg',
                    'img/vincha-multitono-3.jpg'
                ],
                es: { 
                    name: 'Vinchas Multitono Andinas', eng: 'Andean Striped Alpaca Headband', 
                    desc: 'Elegante y abrigadora vincha tejida a mano con un diseño de franjas multicolores en fibra de alpaca.', 
                    material: '100% Fibra de Alpaca', colores: 'Multitono Cálido, Multitono Frío, Tonos Tierra', 
                    confeccion: '100% tejido a mano', talla: 'Estándar', publico: 'Unisex',
                    colorOptions: ['Multitono Cálido', 'Multitono Frío', 'Tonos Tierra']
                },
                en: { 
                    name: 'Andean Striped Alpaca Headband', eng: 'Vinchas Multitono Andinas', 
                    desc: 'Elegant and warm hand-knitted headband with a colorful striped design.', 
                    material: '100% Alpaca Fiber', colores: 'Warm Multi, Cool Multi, Earth Tones', 
                    confeccion: '100% hand-knitted', talla: 'Standard size', publico: 'Unisex',
                    colorOptions: ['Warm Multi', 'Cool Multi', 'Earth Tones']
                }
            },
            // 7. VINCHA BOTÁNICA ANDINA (BORDADO FLORAL)
            {
                category: 'vinchas',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/vincha-botanica-1.jpg', 
                    'img/vincha-botanica-2.jpg',
                    'img/vincha-botanica-3.jpg'
                ],
                es: { 
                    name: 'Vincha Botánica Andina (Bordado Floral)', eng: 'Alpaca Floral Embroidery Headband', 
                    desc: 'Elegante vincha tejida y bordada a mano con un delicado diseño de flores y enredaderas.', 
                    material: '100% Fibra de Alpaca', colores: 'Fondo Natural, Fondo Marrón, Fondo Gris', 
                    confeccion: 'Bordado artesanal', talla: 'Estándar', publico: 'Mujeres',
                    colorOptions: ['Fondo Natural', 'Fondo Marrón', 'Fondo Gris']
                },
                en: { 
                    name: 'Alpaca Floral Embroidery Headband', eng: 'Vincha Botánica Andina (Bordado Floral)', 
                    desc: 'Elegant headband hand-knitted and embroidered with a delicate flower design.', 
                    material: '100% Alpaca Fiber', colores: 'Natural Base, Brown Base, Gray Base', 
                    confeccion: 'Artisan embroidery', talla: 'Standard size', publico: 'Women',
                    colorOptions: ['Natural Base', 'Brown Base', 'Gray Base']
                }
            },
            // 8. VINCHA BURBUJAS ANDINAS
            {
                category: 'vinchas',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 15.00,
                images: [
                    'img/vincha-burbujas-1.jpg', 
                    'img/vincha-burbujas-2.jpg',
                    'img/vincha-burbujas-3.jpg'
                ],
                es: { 
                    name: 'Vincha Burbujas Andinas', eng: 'Alpaca Textured Bobble Headband', 
                    desc: 'Sofisticada vincha tejida a mano con un hermoso diseño de relieves y burbujas en fibra de alpaca.', 
                    material: '100% Fibra de Alpaca', colores: 'Beige, Marrón, Rojo, Blanco', 
                    confeccion: 'Relieve en alto relieve', talla: 'Estándar', publico: 'Mujeres',
                    colorOptions: ['Beige', 'Marrón', 'Rojo', 'Blanco']
                },
                en: { 
                    name: 'Alpaca Textured Bobble Headband', eng: 'Vincha Burbujas Andinas', 
                    desc: 'Sophisticated hand-knitted headband with a beautiful bobble relief texture.', 
                    material: '100% Alpaca Fiber', colores: 'Beige, Brown, Red, White', 
                    confeccion: 'Bobble relief texture', talla: 'Standard size', publico: 'Women',
                    colorOptions: ['Beige', 'Brown', 'Red', 'White']
                }
            },
            // 9. CHULLO ANDINO TRADICIONAL
            {
                category: 'gorros',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/chullo-tradicional-1.jpg', 
                    'img/chullo-tradicional-2.jpg',
                    'img/chullo-tradicional-3.jpg'
                ],
                es: { 
                    name: 'Chullo Andino Tradicional', eng: 'Traditional Andean Alpaca Chullo', 
                    desc: 'Auténtico chullo tejido a mano con patrones andinos tradicionales y orejeras.', 
                    material: '100% Fibra de Alpaca', colores: 'Multicolor Natural', 
                    confeccion: 'Orejeras con trenzas', talla: 'Estándar', publico: 'Unisex',
                    colorOptions: ['Multicolor Natural']
                },
                en: { 
                    name: 'Traditional Andean Alpaca Chullo', eng: 'Chullo Andino Tradicional', 
                    desc: 'Authentic hand-knitted chullo hat with traditional Andean patterns and earflaps.', 
                    material: '100% Alpaca Fiber', colores: 'Natural Multicolor', 
                    confeccion: 'Braided earflaps', talla: 'Standard size', publico: 'Unisex',
                    colorOptions: ['Natural Multicolor']
                }
            },
            // 10. GORRO DOBLE CON CHISPA
            {
                category: 'gorros',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/gorro-doble-1.jpg', 
                    'img/gorro-doble-2.jpg',
                    'img/gorro-doble-3.jpg'
                ],
                es: { 
                    name: 'Gorro Doble con Chispa', eng: 'Double Layer Speckled Alpaca Beanie', 
                    desc: 'Cálido y versátil gorro de diseño doble con acabado jaspado.', 
                    material: '100% Fibra de Alpaca', colores: 'Fondo blanco con jaspeado negro, verde, rojo y marrón', 
                    confeccion: 'Doble capa de abrigo', talla: 'Estándar', publico: 'Unisex',
                    colorOptions: ['Blanco jaspeado con negro', 'Blanco jaspeado con verde', 'Blanco jaspeado con rojo', 'Blanco jaspeado con marrón']
                },
                en: { 
                    name: 'Double Layer Speckled Alpaca Beanie', eng: 'Gorro Doble con Chispa', 
                    desc: 'Warm and versatile double-layer beanie with speckled natural finish.', 
                    material: '100% Alpaca Fiber', colores: 'White base speckled with black, green, red and brown', 
                    confeccion: 'Double layer warmth', talla: 'Standard size', publico: 'Unisex',
                    colorOptions: ['White with black flecks', 'White with green flecks', 'White with red flecks', 'White with brown flecks']
                }
            },
            // 11. GORRO COPOS DE ALPACA
            {
                category: 'gorros',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/gorro-copos-1.jpg', 
                    'img/gorro-copos-2.jpg',
                    'img/gorro-copos-3.jpg'
                ],
                es: { 
                    name: 'Gorro Copos de Alpaca', eng: 'Alpaca Textured Bobble Beanie', 
                    desc: 'Elegante y abrigador gorro tejido a mano con hermoso diseño en relieve de copos, disponible en tonalidades naturales y vibrantes.', 
                    material: '100% Fibra de Alpaca', colores: 'Blanco, Gris, Marrón, Tonalidades de rojo y verde', 
                    confeccion: 'Diseño texturizado en copos', talla: 'Estándar', publico: 'Unisex',
                    colorOptions: ['Blanco', 'Gris', 'Marrón', 'Rojo (tonalidades)', 'Verde (tonalidades)']
                },
                en: { 
                    name: 'Alpaca Textured Bobble Beanie', eng: 'Gorro Copos de Alpaca', 
                    desc: 'Elegant and warm hand-knitted beanie featuring a beautiful relief design, available in natural and vibrant shades.', 
                    material: '100% Alpaca Fiber', colores: 'White, Gray, Brown, Shades of red and green', 
                    confeccion: 'Textured bobble design', talla: 'Standard size', publico: 'Unisex',
                    colorOptions: ['White', 'Gray', 'Brown', 'Red (shades)', 'Green (shades)']
                }
            },
            // 12. GORRO "OREJAS DE GATO" DE ALPACA
            {
                category: 'gorros',
                stock: null, // null = consultar disponibilidad; 0 = agotado
                price: 20.00,
                images: [
                    'img/gorro-gato-1.jpg', 
                    'img/gorro-gato-2.jpg',
                    'img/gorro-gato-3.jpg'
                ],
                es: { 
                    name: 'Gorro "Orejas de Gato" de Alpaca', eng: 'Alpaca Cat Ear Beanie', 
                    desc: 'Divertido y moderno gorro tejido a mano que forma sutiles orejitas de gato al usarlo.', 
                    material: '100% Fibra de Alpaca', colores: 'Rojo natural, Blanco, Verde, Gris suave, Beige cálido, Negro', 
                    confeccion: 'Forma de orejas de gato', talla: 'Estándar', publico: 'Mujeres y jóvenes',
                    colorOptions: ['Rojo natural', 'Blanco', 'Verde', 'Gris suave', 'Beige cálido', 'Negro']
                },
                en: { 
                    name: 'Alpaca Cat Ear Beanie', eng: 'Gorro "Orejas de Gato" de Alpaca', 
                    desc: 'Fun and modern hand-knitted beanie that forms subtle cat ears when worn.', 
                    material: '100% Alpaca Fiber', colores: 'Natural Red, White, Green, Soft Gray, Warm Beige, Black', 
                    confeccion: 'Cat ear shaped fit', talla: 'Standard size', publico: 'Women and youth',
                    colorOptions: ['Natural Red', 'White', 'Green', 'Soft Gray', 'Warm Beige', 'Black']
                }
            }
        ];

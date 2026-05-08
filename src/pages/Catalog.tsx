import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useCart } from "@/lib/cartContext"

interface Category {
  id: string
  label: string
  icon: string
  parent?: string
}

const categories: Category[] = [
  { id: "all", label: "Все", icon: "LayoutGrid" },
  // Чай
  { id: "tea", label: "Чай", icon: "Leaf" },
  { id: "tea-green", label: "Зелёный чай", icon: "Sprout", parent: "tea" },
  { id: "tea-red", label: "Красный чай", icon: "Flame", parent: "tea" },
  { id: "tea-oolong", label: "Улун", icon: "Wind", parent: "tea" },
  { id: "tea-puer", label: "Пуэр", icon: "Archive", parent: "tea" },
  { id: "tea-white", label: "Белый чай", icon: "Snowflake", parent: "tea" },
  { id: "tea-herbal", label: "Травяной и фруктовый", icon: "Flower2", parent: "tea" },
  // Кофе и сиропы
  { id: "coffee", label: "Кофе и сиропы", icon: "Coffee" },
  { id: "coffee-mono", label: "Моносорта", icon: "Bean", parent: "coffee" },
  { id: "coffee-blend", label: "Смеси и купажи", icon: "Layers", parent: "coffee" },
  { id: "coffee-syrup", label: "Сиропы", icon: "Droplets", parent: "coffee" },
  // Остальные
  { id: "gifts", label: "Подарочные наборы", icon: "Gift" },
  { id: "mate", label: "Мате", icon: "CupSoda" },
  { id: "chocolate", label: "Горячий шоколад и какао", icon: "Candy" },
  { id: "dishes", label: "Посуда", icon: "Utensils" },
]

const categoryImages: Record<string, string> = {
  "tea-green":    "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/251eaf03-2e89-4217-89bb-56754fa68e82.jpg",
  "tea-red":      "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/6e0e3035-f3d1-4732-a287-664ec049cea5.jpg",
  "tea-oolong":   "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/48284d75-87fb-4efb-8f95-96a976d688e9.jpg",
  "tea-puer":     "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/fbcd4ba0-fe50-464e-afcc-bb4bc1076301.jpg",
  "tea-white":    "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/dca29969-a10b-4768-ba39-5590c630a49e.jpg",
  "tea-herbal":   "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/f84940fe-7c49-4d86-9eba-16b3292e65d4.jpg",
  "coffee-mono":  "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/04fc241c-e215-4fdb-98a6-b8ffcc1b276d.jpg",
  "coffee-blend": "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/04fc241c-e215-4fdb-98a6-b8ffcc1b276d.jpg",
  "coffee-syrup": "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/fd3ab2fd-2782-4463-841f-e7f108c0b27d.jpg",
  "gifts":        "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/95c79b49-b0a3-490a-94ca-d0932490a792.jpg",
  "mate":         "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/6ad6fa9f-a779-416d-b9d7-0c942507df56.jpg",
  "chocolate":    "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/cadb4fe3-6c6a-4c30-8ff8-67e4dd42213a.jpg",
  "dishes":       "https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/e2ae94ad-a188-4811-bca8-42886971e3b6.jpg",
}

const parsePrice = (price: string): number => {
  const match = price.replace(/\s/g, "").match(/\d+/)
  return match ? parseInt(match[0]) : 0
}

interface Product {
  id: number
  category: string
  name: string
  description: string
  price: string
  badge: string | null
}

const products: Product[] = [
  // ── Зелёный чай ──
  { id: 1,  category: "tea-green", name: "Лун Цзин «Колодец дракона»", description: "Плоские листья с ореховым ароматом, провинция Чжэцзян", price: "от 280 ₽/100г", badge: "Хит" },
  { id: 2,  category: "tea-green", name: "Би Ло Чунь «Изумрудные спирали»", description: "Скрученные листья с фруктово-цветочным ароматом", price: "от 320 ₽/100г", badge: null },
  { id: 3,  category: "tea-green", name: "Маофэн «Пушистые пики»", description: "Мягкий зелёный чай из Хуаньшани с цветочными нотами", price: "от 260 ₽/100г", badge: null },
  { id: 4,  category: "tea-green", name: "Сенча японская", description: "Классический японский зелёный чай, травяной вкус", price: "от 290 ₽/100г", badge: null },
  { id: 5,  category: "tea-green", name: "Гёкуро «Нефритовая роса»", description: "Элитный японский чай теневого выращивания, сладкий умами", price: "от 780 ₽/100г", badge: null },
  { id: 6,  category: "tea-green", name: "Генмайча", description: "Японский зелёный чай с поджаренным рисом", price: "от 250 ₽/100г", badge: null },
  { id: 7,  category: "tea-green", name: "Матча церемониальная", description: "Японский молотый зелёный чай для чайной церемонии, 30 г", price: "580 ₽", badge: null },
  { id: 8,  category: "tea-green", name: "Синь Ян Мао Цзянь", description: "«Волосяные острия» из Хэнани — нежный и свежий", price: "от 310 ₽/100г", badge: null },
  { id: 9,  category: "tea-green", name: "Кукича", description: "Японский чай из веток и стеблей, мягкий ореховый вкус", price: "от 230 ₽/100г", badge: null },
  { id: 10, category: "tea-green", name: "Хуа Цзин «Снежный хризантем»", description: "Зелёный чай с цветками хризантемы", price: "от 270 ₽/100г", badge: "Новинка" },
  { id: 11, category: "tea-green", name: "Ходзича", description: "Обжаренный японский зелёный чай с ореховым ароматом", price: "от 240 ₽/100г", badge: null },
  { id: 12, category: "tea-green", name: "Тай Пин Хоу Куй «Обезьяний вождь»", description: "Крупнолистовой зелёный чай, редкий сорт из Аньхоя", price: "от 450 ₽/100г", badge: null },

  // ── Красный чай ──
  { id: 13, category: "tea-red", name: "Цзинь Цзюнь Мэй «Золотые брови»", description: "Элитный красный чай из почек, мёд и карамель", price: "от 640 ₽/100г", badge: "Хит" },
  { id: 14, category: "tea-red", name: "Дянь Хун классический", description: "Юньнаньский красный чай с золотистыми типсами", price: "от 300 ₽/100г", badge: null },
  { id: 15, category: "tea-red", name: "Дарджилинг первого сбора", description: "Индийский чай с мускатной ноткой, весенний урожай", price: "от 390 ₽/100г", badge: null },
  { id: 16, category: "tea-red", name: "Дарджилинг второго сбора", description: "Летний урожай, более насыщенный и терпкий", price: "от 340 ₽/100г", badge: null },
  { id: 17, category: "tea-red", name: "Ассам TGFOP", description: "Классический индийский чай с солодовым вкусом", price: "от 250 ₽/100г", badge: null },
  { id: 18, category: "tea-red", name: "Цейлон OP высокогорный", description: "Яркий терпкий чай с Цейлона, высота 2000+ м", price: "от 270 ₽/100г", badge: null },
  { id: 19, category: "tea-red", name: "Цихун «Красный цихуньский»", description: "Мягкий красный чай из провинции Аньхой", price: "от 320 ₽/100г", badge: null },
  { id: 20, category: "tea-red", name: "Нилгири зимний сбор", description: "Индийский горный чай с цветочным ароматом", price: "от 360 ₽/100г", badge: "Новинка" },
  { id: 21, category: "tea-red", name: "Хун Пао красный", description: "Красный вариант классического скального чая", price: "от 480 ₽/100г", badge: null },
  { id: 22, category: "tea-red", name: "Дянь Хун «Золотые иглы»", description: "Только золотые типсы, нежный медово-сладкий вкус", price: "от 720 ₽/100г", badge: null },
  { id: 23, category: "tea-red", name: "Кимун «Королева Виктории»", description: "Китайский чай с дымным ароматом, основа Earl Grey", price: "от 350 ₽/100г", badge: null },

  // ── Улун ──
  { id: 24, category: "tea-oolong", name: "Те Гуань Инь «Железная богиня»", description: "Лёгкая ферментация, цветочный аромат орхидеи", price: "от 320 ₽/100г", badge: "Хит" },
  { id: 25, category: "tea-oolong", name: "Да Хун Пао «Большой красный халат»", description: "Скальный улун с глубоким минеральным вкусом", price: "от 480 ₽/100г", badge: null },
  { id: 26, category: "tea-oolong", name: "Дун Фан Мэй Жэнь «Восточная красавица»", description: "Тайваньский улун с нотами мёда и фруктов, укус цикады", price: "от 650 ₽/100г", badge: null },
  { id: 27, category: "tea-oolong", name: "Дун Дин «Ледяный пик»", description: "Тайваньский высокогорный улун, кремовый вкус", price: "от 420 ₽/100г", badge: null },
  { id: 28, category: "tea-oolong", name: "Габа улун", description: "С высоким содержанием ГАМК, помогает расслабиться", price: "от 420 ₽/100г", badge: "Новинка" },
  { id: 29, category: "tea-oolong", name: "Феникс Дань Цун «Персик»", description: "Улун из Фэнхуана с выраженным ароматом персика", price: "от 580 ₽/100г", badge: null },
  { id: 30, category: "tea-oolong", name: "Шуй Сянь «Водный нарцисс»", description: "Скальный улун с тёмной ферментацией и цветочным букетом", price: "от 360 ₽/100г", badge: null },
  { id: 31, category: "tea-oolong", name: "Молочный улун «Цзинь Сюань»", description: "Тайваньский сорт с натуральным молочным послевкусием", price: "от 380 ₽/100г", badge: "Хит" },
  { id: 32, category: "tea-oolong", name: "Роскошный Те Гуань Инь «Тигровый»", description: "Тёмная ферментация, поджаренный орех и карамель", price: "от 400 ₽/100г", badge: null },
  { id: 33, category: "tea-oolong", name: "Алишань высокогорный", description: "Тайваньский улун с высоты 1500 м, нежный и маслянистый", price: "от 520 ₽/100г", badge: null },

  // ── Пуэр ──
  { id: 34, category: "tea-puer", name: "Шу пуэр рассыпной «Юньнань»", description: "Мягкий выдержанный пуэр, землистый и насыщенный", price: "от 350 ₽/100г", badge: null },
  { id: 35, category: "tea-puer", name: "Шэн пуэр «Старые деревья» 2021", description: "Прессованный блин 357 г, яркий и терпкий", price: "1 800 ₽/блин", badge: null },
  { id: 36, category: "tea-puer", name: "Шу пуэр «Дворцовый» 2015", description: "Выдержанный 8 лет, бархатный вкус с нотой хвои", price: "от 620 ₽/100г", badge: "Хит" },
  { id: 37, category: "tea-puer", name: "Я Бао «Пуэрные почки»", description: "Дикорастущие почки пуэра, сладкий и свежий вкус", price: "от 480 ₽/100г", badge: null },
  { id: 38, category: "tea-puer", name: "Шэн пуэр «Мэнхай» 2019", description: "Прессованная таблетка 100 г, молодой шэн", price: "590 ₽/шт", badge: null },
  { id: 39, category: "tea-puer", name: "Шу пуэр «Глиняный горшок»", description: "Хранился в глиняных горшках, особый землистый вкус", price: "от 550 ₽/100г", badge: null },
  { id: 40, category: "tea-puer", name: "Пуэр «Гляссе» 250 г", description: "Популярный шу пуэр среднего класса, повседневный", price: "490 ₽", badge: null },
  { id: 41, category: "tea-puer", name: "Шэн пуэр «Бинг Дао» 2020", description: "Редкий сорт с ледяного острова, медовое послевкусие", price: "от 1 200 ₽/100г", badge: "Новинка" },
  { id: 42, category: "tea-puer", name: "Шу пуэр «Золотые почки»", description: "С золотистыми типсами, сладкий и мягкий вкус", price: "от 580 ₽/100г", badge: null },
  { id: 43, category: "tea-puer", name: "Пуэр мини-точа 5 г", description: "Прессованные гнёзда, 10 шт в упаковке", price: "390 ₽", badge: null },

  // ── Белый чай ──
  { id: 44, category: "tea-white", name: "Бай Хао Инь Чжэнь «Серебряные иглы»", description: "Только молодые почки, нежный и цветочный вкус", price: "от 560 ₽/100г", badge: "Хит" },
  { id: 45, category: "tea-white", name: "Бай Му Дань «Белый пион»", description: "Почки и первые листья, более насыщенный вкус", price: "от 380 ₽/100г", badge: null },
  { id: 46, category: "tea-white", name: "Гун Мэй «Бровь аристократа»", description: "Листовой белый чай с фруктово-медовыми нотами", price: "от 290 ₽/100г", badge: null },
  { id: 47, category: "tea-white", name: "Шоу Мэй «Брови долголетия»", description: "Насыщенный белый чай с ореховым ароматом", price: "от 260 ₽/100г", badge: null },
  { id: 48, category: "tea-white", name: "Белый чай выдержанный 2018", description: "Прессованный блин 200 г, 5 лет выдержки", price: "1 400 ₽/блин", badge: null },
  { id: 49, category: "tea-white", name: "Белый чай с розой", description: "Серебряные иглы с лепестками розы, 50 г", price: "420 ₽", badge: "Новинка" },
  { id: 50, category: "tea-white", name: "Белый чай с жасмином", description: "Почки, ароматизированные свежим жасмином", price: "от 340 ₽/100г", badge: null },
  { id: 51, category: "tea-white", name: "Да Бай «Большой белый»", description: "Крупнолистовой белый чай из Фуцзяни", price: "от 320 ₽/100г", badge: null },
  { id: 52, category: "tea-white", name: "Белый чай «Жасминовые жемчужины»", description: "Скрученные шарики, раскрываются в чашке", price: "от 410 ₽/100г", badge: null },
  { id: 53, category: "tea-white", name: "Юэ Гуан Бай «Лунный свет»", description: "Белый чай ночного сбора с юньнаньских гор", price: "от 490 ₽/100г", badge: null },

  // ── Травяной и фруктовый ──
  { id: 54, category: "tea-herbal", name: "Иван-чай ферментированный", description: "Алтайский иван-чай крупного листа, 100 г", price: "290 ₽", badge: "Хит" },
  { id: 55, category: "tea-herbal", name: "Иван-чай с мятой", description: "Мягкий купаж с освежающей перечной мятой, 100 г", price: "320 ₽", badge: null },
  { id: 56, category: "tea-herbal", name: "Каркаде «Судан»", description: "Цветки гибискуса, рубиновый цвет и ягодная кислинка", price: "от 180 ₽/100г", badge: null },
  { id: 57, category: "tea-herbal", name: "Ромашковый сбор", description: "Цельные головки ромашки, нежный успокаивающий вкус", price: "от 200 ₽/100г", badge: null },
  { id: 58, category: "tea-herbal", name: "Сбор «Лесные ягоды»", description: "Черника, малина, шиповник, смородина", price: "от 240 ₽/100г", badge: null },
  { id: 59, category: "tea-herbal", name: "Тизан «Клубника с базиликом»", description: "Фруктово-пряный купаж, хорош холодным", price: "390 ₽/100г", badge: "Хит" },
  { id: 60, category: "tea-herbal", name: "Ройбуш натуральный", description: "Южноафриканский кустарник, без кофеина, сладковатый", price: "от 260 ₽/100г", badge: null },
  { id: 61, category: "tea-herbal", name: "Ройбуш с ванилью", description: "Нежный ройбуш с натуральной ванилью", price: "от 290 ₽/100г", badge: null },
  { id: 62, category: "tea-herbal", name: "Мята перечная", description: "Цельные листья, сильный охлаждающий аромат", price: "от 160 ₽/100г", badge: null },
  { id: 63, category: "tea-herbal", name: "Шиповник цельный", description: "Плоды шиповника, богаты витамином C", price: "от 170 ₽/100г", badge: null },
  { id: 64, category: "tea-herbal", name: "Сбор «Зимний пряник»", description: "Корица, яблоко, гвоздика, апельсиновая цедра", price: "от 280 ₽/100г", badge: "Новинка" },
  { id: 65, category: "tea-herbal", name: "Ходзича лимонная", description: "Обжаренный зелёный чай с натуральным лимоном", price: "от 270 ₽/100г", badge: null },

  // ── Кофе: моносорта ──
  { id: 66, category: "coffee-mono", name: "Эфиопия Иргачефф", description: "Черника, цитрус, жасмин — яркая светлая обжарка", price: "от 420 ₽/100г", badge: "Хит" },
  { id: 67, category: "coffee-mono", name: "Эфиопия Йиргачефф Анаэроб", description: "Анаэробная ферментация, тропические фрукты", price: "от 580 ₽/100г", badge: "Новинка" },
  { id: 68, category: "coffee-mono", name: "Колумбия Уила", description: "Красное яблоко, карамель, молочный шоколад", price: "от 380 ₽/100г", badge: null },
  { id: 69, category: "coffee-mono", name: "Колумбия Уила Натурал", description: "Натуральная обработка, ягоды и сладкое вино", price: "от 430 ₽/100г", badge: null },
  { id: 70, category: "coffee-mono", name: "Бразилия Серрадо", description: "Шоколад, орех, карамель — классика эспрессо", price: "от 340 ₽/100г", badge: null },
  { id: 71, category: "coffee-mono", name: "Кения АА", description: "Чёрная смородина, грейпфрут, томат — яркая кислотность", price: "от 460 ₽/100г", badge: null },
  { id: 72, category: "coffee-mono", name: "Гватемала Антигуа", description: "Горький шоколад, специи, дымная нотка", price: "от 390 ₽/100г", badge: null },
  { id: 73, category: "coffee-mono", name: "Перу органик", description: "Органический кофе, мягкий, орех и молочный шоколад", price: "от 410 ₽/100г", badge: null },
  { id: 74, category: "coffee-mono", name: "Йемен Мокко", description: "Легендарный кофе с шоколадно-винными нотами", price: "от 680 ₽/100г", badge: null },
  { id: 75, category: "coffee-mono", name: "Индия Монсунный Малабар", description: "Особая обработка муссоном, землистый и полнотелый", price: "от 370 ₽/100г", badge: null },
  { id: 76, category: "coffee-mono", name: "Руанда Ньяруженге", description: "Персик, абрикос, белый чай — нежная светлая обжарка", price: "от 450 ₽/100г", badge: "Новинка" },

  // ── Кофе: смеси и купажи ──
  { id: 77, category: "coffee-blend", name: "Смесь «Самовар Эспрессо»", description: "Фирменный купаж для кофемашины, 250 г", price: "520 ₽", badge: "Хит" },
  { id: 78, category: "coffee-blend", name: "Смесь «Самовар Капучино»", description: "Бразилия + Колумбия, идеально для молочных напитков", price: "490 ₽", badge: null },
  { id: 79, category: "coffee-blend", name: "Смесь «Утренний»", description: "Тёмная обжарка, бодрящий, подходит для чашки с молоком", price: "460 ₽", badge: null },
  { id: 80, category: "coffee-blend", name: "Смесь «Венский»", description: "Классический венский купаж с тёмной обжаркой", price: "470 ₽", badge: null },
  { id: 81, category: "coffee-blend", name: "Смесь «Французский»", description: "Очень тёмная обжарка, горький шоколад и дым", price: "450 ₽", badge: null },
  { id: 82, category: "coffee-blend", name: "Смесь «Итальянский»", description: "Интенсивный эспрессо с карамельной горчинкой", price: "460 ₽", badge: null },
  { id: 83, category: "coffee-blend", name: "Смесь «Зимний пряник»", description: "Сезонный купаж с нотами специй и сухофруктов", price: "510 ₽", badge: "Новинка" },
  { id: 84, category: "coffee-blend", name: "Смесь «Бархатный»", description: "Мягкий и сбалансированный купаж для повседневного кофе", price: "440 ₽", badge: null },
  { id: 85, category: "coffee-blend", name: "Смесь «Декаф»", description: "Без кофеина, Бразилия Swiss Water, шоколад и орех", price: "540 ₽", badge: null },
  { id: 86, category: "coffee-blend", name: "Смесь «Чёрный лес»", description: "Тёмный купаж с нотами вишни и горького шоколада", price: "490 ₽", badge: null },

  // ── Сиропы ──
  { id: 87, category: "coffee-syrup", name: "Сироп «Ваниль»", description: "Классическая ваниль, универсальный, 1 л", price: "390 ₽", badge: null },
  { id: 88, category: "coffee-syrup", name: "Сироп «Лесной орех»", description: "Ореховый аромат, хит для капучино, 1 л", price: "390 ₽", badge: "Хит" },
  { id: 89, category: "coffee-syrup", name: "Сироп «Карамель»", description: "Мягкая сливочная карамель, 1 л", price: "390 ₽", badge: null },
  { id: 90, category: "coffee-syrup", name: "Сироп «Лаванда»", description: "Цветочный, для латте и лимонадов, 1 л", price: "420 ₽", badge: "Новинка" },
  { id: 91, category: "coffee-syrup", name: "Сироп «Малина»", description: "Ягодный с натуральным вкусом, 1 л", price: "390 ₽", badge: null },
  { id: 92, category: "coffee-syrup", name: "Сироп «Мята»", description: "Освежающий перечная мята, 1 л", price: "390 ₽", badge: null },
  { id: 93, category: "coffee-syrup", name: "Сироп «Кокос»", description: "Тропический, для холодного кофе и смузи, 1 л", badge: null, price: "420 ₽" },
  { id: 94, category: "coffee-syrup", name: "Сироп «Ирландский крем»", description: "Сливочно-ирландский вкус, 1 л", price: "420 ₽", badge: null },
  { id: 95, category: "coffee-syrup", name: "Сироп «Корица»", description: "Пряная корица для зимних напитков, 1 л", price: "390 ₽", badge: null },
  { id: 96, category: "coffee-syrup", name: "Сироп «Имбирь»", description: "Острый согревающий имбирь, 1 л", price: "400 ₽", badge: null },
  { id: 97, category: "coffee-syrup", name: "Сироп «Тирамису»", description: "Кофейно-сливочный, для десертных напитков, 1 л", price: "420 ₽", badge: null },

  // ── Подарочные наборы ──
  { id: 98,  category: "gifts", name: "Набор «Чайная классика»", description: "3 сорта чая в фирменной коробке: зелёный, красный, улун", price: "890 ₽", badge: "Хит" },
  { id: 99,  category: "gifts", name: "Набор «Восточная сказка»", description: "5 сортов элитного китайского чая + ложка в подарок", price: "1 490 ₽", badge: null },
  { id: 100, category: "gifts", name: "Набор «Для двоих»", description: "2 фарфоровые чашки + 2 сорта чая на выбор", price: "1 890 ₽", badge: null },
  { id: 101, category: "gifts", name: "Набор «Пуэр коллекция»", description: "4 блинчика шу и шэн в деревянной шкатулке", price: "2 200 ₽", badge: null },
  { id: 102, category: "gifts", name: "Набор «Чайный ритуал»", description: "Гайвань + 2 пиалы + 50 г улуна Да Хун Пао", price: "2 800 ₽", badge: null },
  { id: 103, category: "gifts", name: "Набор «Мини-дегустация»", description: "6 сортов по 25 г — отличное знакомство с чаем", price: "750 ₽", badge: null },
  { id: 104, category: "gifts", name: "Набор «Японский чай»", description: "Сенча, матча, генмайча — 3 классики Японии", price: "1 350 ₽", badge: null },
  { id: 105, category: "gifts", name: "Набор «Кофе & Сироп»", description: "250 г моносорта + 2 сиропа на выбор", price: "1 100 ₽", badge: "Новинка" },
  { id: 106, category: "gifts", name: "Корпоративный набор", description: "Оформление под ваш бренд, состав на выбор, от 10 шт", price: "от 650 ₽/шт", badge: null },
  { id: 107, category: "gifts", name: "Набор «Белый чай»", description: "Серебряные иглы, Белый пион, Лунный свет — 3 × 30 г", price: "1 150 ₽", badge: null },

  // ── Мате ──
  { id: 108, category: "mate", name: "Йерба мате Amanda Classic", description: "Традиционный аргентинский мате, 500 г", price: "490 ₽", badge: null },
  { id: 109, category: "mate", name: "Йерба мате Taragüi Sin Palo", description: "Без стеблей, мягкий и ароматный, 500 г", price: "520 ₽", badge: "Хит" },
  { id: 110, category: "mate", name: "Йерба мате Rosamonte", description: "Крепкий парагвайский мате, насыщенный вкус, 500 г", price: "530 ₽", badge: null },
  { id: 111, category: "mate", name: "Йерба мате с мятой", description: "Освежающий мате с добавлением мяты, 250 г", price: "320 ₽", badge: null },
  { id: 112, category: "mate", name: "Йерба мате с апельсином", description: "Цитрусовый мате для яркого вкуса, 250 г", price: "320 ₽", badge: "Новинка" },
  { id: 113, category: "mate", name: "Йерба мате Canarias", description: "Уругвайский мате, мягче аргентинского, 500 г", price: "510 ₽", badge: null },
  { id: 114, category: "mate", name: "Калебас деревянный", description: "Традиционная тыква для заваривания мате", price: "450 ₽", badge: null },
  { id: 115, category: "mate", name: "Бомбилья нержавеющая", description: "Трубочка-фильтр с плоским ситечком", price: "350 ₽", badge: null },
  { id: 116, category: "mate", name: "Набор для мате «Старт»", description: "Калебас + бомбилья + 250 г йерба мате", price: "890 ₽", badge: null },
  { id: 117, category: "mate", name: "Термо-калебас 350 мл", description: "Термостакан-калебас с бомбильей", price: "1 200 ₽", badge: null },

  // ── Горячий шоколад и какао ──
  { id: 118, category: "chocolate", name: "Горячий шоколад «Бельгийский тёмный»", description: "72% какао, насыщенный вкус, 250 г", price: "480 ₽", badge: "Хит" },
  { id: 119, category: "chocolate", name: "Горячий шоколад «Молочный»", description: "Нежный сливочный вкус, 250 г", price: "430 ₽", badge: null },
  { id: 120, category: "chocolate", name: "Горячий шоколад «Ruby»", description: "Розовый рубиновый шоколад, 200 г", price: "520 ₽", badge: "Новинка" },
  { id: 121, category: "chocolate", name: "Горячий шоколад с перцем чили", description: "Острый мексиканский напиток, 200 г", price: "390 ₽", badge: null },
  { id: 122, category: "chocolate", name: "Горячий шоколад с корицей", description: "Пряная смесь тёмного шоколада и специй, 200 г", price: "360 ₽", badge: null },
  { id: 123, category: "chocolate", name: "Горячий шоколад «Белый»", description: "Белый шоколад со сливочной карамелью, 200 г", price: "410 ₽", badge: null },
  { id: 124, category: "chocolate", name: "Какао Valrhona", description: "Алкализованное какао премиум-класса, 250 г", price: "520 ₽", badge: null },
  { id: 125, category: "chocolate", name: "Какао натуральное «Эквадор»", description: "Сырое необработанное какао, 200 г", price: "440 ₽", badge: null },
  { id: 126, category: "chocolate", name: "Какао с имбирём и куркумой", description: "Золотой напиток для иммунитета, 150 г", price: "380 ₽", badge: "Новинка" },
  { id: 127, category: "chocolate", name: "Смесь для чоко-матча", description: "Зелёный чай матча + белый шоколад, 150 г", price: "450 ₽", badge: null },

  // ── Посуда ──
  { id: 128, category: "dishes", name: "Гайвань фарфоровая «Классика»", description: "Традиционная китайская гайвань, 150 мл", price: "650 ₽", badge: "Хит" },
  { id: 129, category: "dishes", name: "Чайник исинский", description: "Глиняный чайник из исинской глины, 200 мл", price: "1 800 ₽", badge: null },
  { id: 130, category: "dishes", name: "Чайник стеклянный с подогревом", description: "Боросиликатное стекло, со свечой, 600 мл", price: "1 350 ₽", badge: null },
  { id: 131, category: "dishes", name: "Пиалы «Небо» набор 6 шт", description: "Фарфоровые пиалы 80 мл, ручная роспись", price: "890 ₽", badge: null },
  { id: 132, category: "dishes", name: "Чашка с блюдцем «Бамбук»", description: "Фарфоровая чашка 200 мл с рисунком бамбука", price: "480 ₽", badge: null },
  { id: 133, category: "dishes", name: "Чабань бамбуковая", description: "Чайный столик для гунфу-чаепития, 30×20 см", price: "1 100 ₽", badge: null },
  { id: 134, category: "dishes", name: "Чайная банка жестяная 100 г", description: "Герметичная банка для хранения чая", price: "290 ₽", badge: null },
  { id: 135, category: "dishes", name: "Чайная банка керамическая", description: "Стильная банка с деревянной крышкой, 200 г", price: "590 ₽", badge: null },
  { id: 136, category: "dishes", name: "Термос «Командор» 500 мл", description: "Сохраняет тепло 12 ч, клапан-кнопка", price: "1 490 ₽", badge: null },
  { id: 137, category: "dishes", name: "Весы чайные электронные", description: "Точность 0,1 г, до 200 г", price: "990 ₽", badge: "Новинка" },
  { id: 138, category: "dishes", name: "Ситечко для заварки", description: "Нержавеющее ситечко с держателем", price: "190 ₽", badge: null },
  { id: 139, category: "dishes", name: "Чайная ложка бамбуковая", description: "Для отмеривания заварки, набор 2 шт", price: "150 ₽", badge: null },
]

const badgeColor: Record<string, string> = {
  "Хит": "bg-amber-500 text-white",
  "Новинка": "bg-emerald-600 text-white",
}

const topCategories = categories.filter(c => !c.parent)
const getSubcategories = (parentId: string) => categories.filter(c => c.parent === parentId)

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const { addItem, count } = useCart()
  const [added, setAdded] = useState<number | null>(null)

  const filtered =
    activeCategory === "all"
      ? products
      : activeCategory === "tea"
      ? products.filter(p => p.category.startsWith("tea"))
      : activeCategory === "coffee"
      ? products.filter(p => p.category.startsWith("coffee"))
      : products.filter(p => p.category === activeCategory)

  const activeTop = topCategories.find(c => c.id === activeCategory || getSubcategories(c.id).some(s => s.id === activeCategory))
  const subcategories = activeTop ? getSubcategories(activeTop.id) : []

  const handleAdd = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum: parsePrice(product.price),
      category: product.category,
      image: categoryImages[product.category] ?? categoryImages["tea-green"],
    })
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1200)
  }

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B0F12]/80 backdrop-blur border-b border-white/10">
        <a href="/" className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
          <Icon name="ArrowLeft" size={16} />
          <span className="font-medium">На главную</span>
        </a>
        <div className="flex items-center gap-2">
          <Icon name="Coffee" size={20} />
          <span className="font-semibold text-lg hidden sm:block">Каталог · Самовар</span>
        </div>
        <a href="/cart" className="relative flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm">
          <Icon name="ShoppingCart" size={16} />
          <span className="hidden sm:inline">Корзина</span>
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 rounded-full text-xs font-bold flex items-center justify-center text-white">
              {count}
            </span>
          )}
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Каталог</h1>
          <p className="text-xl text-white/70">Более 200 позиций — чай, кофе, мате, шоколад и посуда</p>
        </div>

        {/* Top-level Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-4">
          {topCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                (activeCategory === cat.id || getSubcategories(cat.id).some(s => s.id === activeCategory))
                  ? "bg-white text-black"
                  : "bg-white/5 ring-1 ring-white/15 text-white/80 hover:bg-white/10"
              }`}
            >
              <Icon name={cat.icon} size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Subcategory Tabs */}
        {subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10 pl-2 border-l-2 border-white/20">
            <button
              onClick={() => setActiveCategory(activeTop!.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === activeTop!.id
                  ? "bg-white/20 text-white ring-1 ring-white/30"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Все
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveCategory(sub.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === sub.id
                    ? "bg-white/20 text-white ring-1 ring-white/30"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                <Icon name={sub.icon} size={14} />
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* Count */}
        <p className="text-white/40 text-sm mb-6">{filtered.length} позиций</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const img = categoryImages[product.category] ?? categoryImages["tea-green"]
            const isAdded = added === product.id
            return (
              <div
                key={product.id}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex flex-col overflow-hidden hover:bg-white/[0.08] hover:ring-white/20 transition-all"
              >
                <div className="w-full h-40 overflow-hidden">
                  <img src={img} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold leading-snug text-sm">{product.name}</h3>
                      {product.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium ${badgeColor[product.badge]}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="font-bold text-base">{product.price}</span>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isAdded
                          ? "bg-emerald-500 text-white"
                          : "bg-white text-black hover:bg-white/90"
                      }`}
                    >
                      <Icon name={isAdded ? "Check" : "ShoppingCart"} size={12} />
                      {isAdded ? "Добавлено" : "В корзину"}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Не нашли нужный сорт?</h2>
          <p className="text-white/70 mb-6 text-lg">Позвоните нам — поможем с выбором и закажем под заказ</p>
          <a href="tel:+79531232355">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-10 text-lg">
              +7 (953) 123-23-55
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Catalog
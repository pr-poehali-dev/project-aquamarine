import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const categories = [
  {
    id: "all",
    label: "Все",
    icon: "LayoutGrid",
  },
  {
    id: "gifts",
    label: "Подарочные наборы",
    icon: "Gift",
  },
  {
    id: "tea",
    label: "Чай",
    icon: "Leaf",
  },
  {
    id: "coffee",
    label: "Кофе и сиропы",
    icon: "Coffee",
  },
  {
    id: "mate",
    label: "Мате",
    icon: "Flame",
  },
  {
    id: "chocolate",
    label: "Горячий шоколад и какао",
    icon: "Candy",
  },
  {
    id: "dishes",
    label: "Посуда",
    icon: "Utensils",
  },
]

const products = [
  // Подарочные наборы
  { id: 1, category: "gifts", name: "Набор «Чайная классика»", description: "3 сорта чая в фирменной коробке: зелёный, красный, улун", price: "890 ₽", badge: "Хит" },
  { id: 2, category: "gifts", name: "Набор «Восточная сказка»", description: "5 сортов элитного китайского чая + чайная ложка в подарок", price: "1 490 ₽", badge: null },
  { id: 3, category: "gifts", name: "Набор «Для двоих»", description: "2 фарфоровые чашки + 2 сорта чая на выбор", price: "1 890 ₽", badge: null },
  { id: 4, category: "gifts", name: "Набор «Белый чай»", description: "3 сорта белого чая в подарочном пенале", price: "1 150 ₽", badge: null },
  { id: 5, category: "gifts", name: "Набор «Пуэр коллекция»", description: "4 блинчика шу и шэн пуэра в деревянной шкатулке", price: "2 200 ₽", badge: "Новинка" },
  { id: 6, category: "gifts", name: "Набор «Чайный ритуал»", description: "Гайвань + 2 пиалы + 50 г улуна Да Хун Пао", price: "2 800 ₽", badge: null },
  { id: 7, category: "gifts", name: "Набор «Мини-дегустация»", description: "6 сортов по 25 г — отличное знакомство с чаем", price: "750 ₽", badge: null },
  { id: 8, category: "gifts", name: "Корпоративный набор", description: "Оформление под ваш бренд, от 10 штук, состав на выбор", price: "от 650 ₽/шт", badge: null },
  { id: 9, category: "gifts", name: "Набор «Какао & Чай»", description: "Бельгийский горячий шоколад + 2 сорта чая в коробке", price: "1 200 ₽", badge: null },
  { id: 10, category: "gifts", name: "Набор «Японский чай»", description: "Сенча, матча, генмайча — 3 классики Японии", price: "1 350 ₽", badge: null },

  // Чай
  { id: 11, category: "tea", name: "Лун Цзин (Колодец дракона)", description: "Классический зелёный чай из провинции Чжэцзян", price: "от 280 ₽/100г", badge: null },
  { id: 12, category: "tea", name: "Те Гуань Инь", description: "Улун с цветочным ароматом, средняя ферментация", price: "от 320 ₽/100г", badge: "Хит" },
  { id: 13, category: "tea", name: "Да Хун Пао", description: "Легендарный скальный улун с глубоким вкусом", price: "от 480 ₽/100г", badge: null },
  { id: 14, category: "tea", name: "Шу Пуэр рассыпной", description: "Выдержанный пуэр, мягкий и насыщенный, Юньнань", price: "от 350 ₽/100г", badge: null },
  { id: 15, category: "tea", name: "Шэн Пуэр «Старые деревья»", description: "Прессованный блин, 357 г, урожай 2021 г.", price: "1 800 ₽/блин", badge: null },
  { id: 16, category: "tea", name: "Дарджилинг первого сбора", description: "Чёрный индийский чай с мускатной ноткой", price: "от 390 ₽/100г", badge: null },
  { id: 17, category: "tea", name: "Бай Хао Инь Чжэнь", description: "Серебряные иглы — белый чай только из молодых почек", price: "от 560 ₽/100г", badge: null },
  { id: 18, category: "tea", name: "Генмайча", description: "Японский зелёный чай с поджаренным рисом", price: "от 260 ₽/100г", badge: null },
  { id: 19, category: "tea", name: "Цзинь Цзюнь Мэй", description: "Элитный красный чай — «Золотые брови»", price: "от 640 ₽/100г", badge: "Хит" },
  { id: 20, category: "tea", name: "Дянь Хун", description: "Мягкий юньнаньский красный чай с медовым послевкусием", price: "от 300 ₽/100г", badge: null },
  { id: 21, category: "tea", name: "Габа улун", description: "Чай с повышенным содержанием гамма-аминомасляной кислоты", price: "от 420 ₽/100г", badge: "Новинка" },
  { id: 22, category: "tea", name: "Травяной сбор «Иван-чай»", description: "Ферментированный иван-чай с Алтая, 100 г", price: "290 ₽", badge: null },

  // Кофе и сиропы
  { id: 23, category: "coffee", name: "Эфиопия Иргачефф", description: "Моносорт: черника, цитрус, шоколад, светлая обжарка", price: "от 420 ₽/100г", badge: "Хит" },
  { id: 24, category: "coffee", name: "Колумбия Уила", description: "Карамельная сладость и ноты красного яблока", price: "от 380 ₽/100г", badge: null },
  { id: 25, category: "coffee", name: "Бразилия Серрадо", description: "Шоколад, орех, низкая кислотность — классика эспрессо", price: "от 340 ₽/100г", badge: null },
  { id: 26, category: "coffee", name: "Кения АА", description: "Яркий кофе с нотами смородины и грейпфрута", price: "от 460 ₽/100г", badge: null },
  { id: 27, category: "coffee", name: "Сироп «Ваниль»", description: "Натуральный сироп для кофе и напитков, 1 л", price: "390 ₽", badge: null },
  { id: 28, category: "coffee", name: "Сироп «Лесной орех»", description: "Классический ореховый сироп, 1 л", price: "390 ₽", badge: null },
  { id: 29, category: "coffee", name: "Сироп «Карамель»", description: "Мягкий сливочно-карамельный вкус, 1 л", price: "390 ₽", badge: null },
  { id: 30, category: "coffee", name: "Сироп «Лаванда»", description: "Цветочный сироп для латте и лимонадов, 1 л", price: "420 ₽", badge: "Новинка" },
  { id: 31, category: "coffee", name: "Сироп «Малина»", description: "Ягодный сироп с натуральным вкусом, 1 л", price: "390 ₽", badge: null },
  { id: 32, category: "coffee", name: "Смесь «Самовар Эспрессо»", description: "Фирменный купаж для кофемашины, 250 г", price: "520 ₽", badge: "Хит" },

  // Мате
  { id: 33, category: "mate", name: "Йерба мате Amanda Classic", description: "Традиционный аргентинский мате, 500 г", price: "490 ₽", badge: null },
  { id: 34, category: "mate", name: "Йерба мате Taragüi Sin Palo", description: "Мате без стеблей, мягкий и ароматный, 500 г", price: "520 ₽", badge: "Хит" },
  { id: 35, category: "mate", name: "Йерба мате Rosamonte", description: "Крепкий парагвайский мате с насыщенным вкусом, 500 г", price: "530 ₽", badge: null },
  { id: 36, category: "mate", name: "Йерба мате с мятой", description: "Освежающий мате с добавлением мяты, 250 г", price: "320 ₽", badge: null },
  { id: 37, category: "mate", name: "Йерба мате с апельсином", description: "Цитрусовый мате для любителей яркого вкуса, 250 г", price: "320 ₽", badge: "Новинка" },
  { id: 38, category: "mate", name: "Калебас деревянный", description: "Традиционная тыква для заваривания мате", price: "450 ₽", badge: null },
  { id: 39, category: "mate", name: "Бомбилья нержавеющая", description: "Трубочка-фильтр для мате с плоским ситечком", price: "350 ₽", badge: null },
  { id: 40, category: "mate", name: "Набор для мате «Старт»", description: "Калебас + бомбилья + 250 г йерба мате", price: "890 ₽", badge: null },
  { id: 41, category: "mate", name: "Термо-калебас", description: "Термостакан в форме калебаса с бомбильей, 350 мл", price: "1 200 ₽", badge: null },
  { id: 42, category: "mate", name: "Йерба мате Canarias", description: "Уругвайский мате — мягче аргентинского, 500 г", price: "510 ₽", badge: null },

  // Горячий шоколад и какао
  { id: 43, category: "chocolate", name: "Горячий шоколад «Бельгийский тёмный»", description: "72% какао, насыщенный вкус, 250 г", price: "480 ₽", badge: "Хит" },
  { id: 44, category: "chocolate", name: "Горячий шоколад «Молочный»", description: "Нежный сливочный вкус, 250 г", price: "430 ₽", badge: null },
  { id: 45, category: "chocolate", name: "Горячий шоколад «Ruby»", description: "Розовый рубиновый шоколад, 200 г", price: "520 ₽", badge: "Новинка" },
  { id: 46, category: "chocolate", name: "Горячий шоколад с перцем чили", description: "Острый мексиканский шоколадный напиток, 200 г", price: "390 ₽", badge: null },
  { id: 47, category: "chocolate", name: "Горячий шоколад с корицей", description: "Пряная смесь тёмного шоколада и специй, 200 г", price: "360 ₽", badge: null },
  { id: 48, category: "chocolate", name: "Какао Valrhona", description: "Алкализованное какао премиум-класса, 250 г", price: "520 ₽", badge: null },
  { id: 49, category: "chocolate", name: "Какао натуральное «Эквадор»", description: "Сырое необработанное какао, 200 г", price: "440 ₽", badge: null },
  { id: 50, category: "chocolate", name: "Какао с имбирём и куркумой", description: "Золотой напиток для иммунитета, 150 г", price: "380 ₽", badge: "Новинка" },
  { id: 51, category: "chocolate", name: "Горячий шоколад «Белый»", description: "Нежный белый шоколад со сливочной карамелью, 200 г", price: "410 ₽", badge: null },
  { id: 52, category: "chocolate", name: "Смесь для чоко-матча", description: "Зелёный чай матча + белый шоколад, 150 г", price: "450 ₽", badge: null },

  // Посуда
  { id: 53, category: "dishes", name: "Гайвань фарфоровая «Классика»", description: "Традиционная китайская гайвань, 150 мл", price: "650 ₽", badge: "Хит" },
  { id: 54, category: "dishes", name: "Чайник заварочный «Исин»", description: "Глиняный чайник из исинской глины, 200 мл", price: "1 800 ₽", badge: null },
  { id: 55, category: "dishes", name: "Чайник с колбой «Единорог»", description: "Стеклянный чайник с подогревом, 600 мл", price: "1 350 ₽", badge: null },
  { id: 56, category: "dishes", name: "Пиалы «Небо» набор 6 шт", description: "Фарфоровые пиалы 80 мл, ручная роспись", price: "890 ₽", badge: null },
  { id: 57, category: "dishes", name: "Чашка с блюдцем «Бамбук»", description: "Фарфоровая чашка 200 мл с рисунком бамбука", price: "480 ₽", badge: null },
  { id: 58, category: "dishes", name: "Чабань бамбуковая", description: "Чайный столик для гунфу-чаепития, 30×20 см", price: "1 100 ₽", badge: null },
  { id: 59, category: "dishes", name: "Чайная банка жестяная 100 г", description: "Герметичная банка для хранения чая", price: "290 ₽", badge: null },
  { id: 60, category: "dishes", name: "Чайная банка керамическая", description: "Стильная банка с деревянной крышкой, 200 г", price: "590 ₽", badge: null },
  { id: 61, category: "dishes", name: "Термос «Командор» 500 мл", description: "Качественный термос с клапаном, сохраняет тепло 12 ч", price: "1 490 ₽", badge: null },
  { id: 62, category: "dishes", name: "Весы чайные электронные", description: "Точность 0,1 г, до 200 г, для точной заварки", price: "990 ₽", badge: "Новинка" },
  { id: 63, category: "dishes", name: "Ситечко для заварки", description: "Нержавеющее ситечко с держателем", price: "190 ₽", badge: null },
  { id: 64, category: "dishes", name: "Чайная ложка бамбуковая", description: "Для отмеривания заварки, набор 2 шт", price: "150 ₽", badge: null },
]

const badgeColor: Record<string, string> = {
  Хит: "bg-amber-500 text-white",
  Новинка: "bg-emerald-600 text-white",
}

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

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
          <span className="font-semibold text-lg">Каталог · Самовар</span>
        </div>
        <a
          href="tel:+79531232355"
          className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm"
        >
          +7 (953) 123-23-55
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Каталог</h1>
          <p className="text-xl text-white/70">Более 200 позиций — чай, кофе, мате, шоколад и посуда</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-white text-black"
                  : "bg-white/5 ring-1 ring-white/15 text-white/80 hover:bg-white/10"
              }`}
            >
              <Icon name={cat.icon} size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex flex-col gap-4 hover:bg-white/8 hover:ring-white/20 transition-all"
            >
              {/* Icon placeholder */}
              <div className="w-full h-36 rounded-xl bg-white/5 flex items-center justify-center">
                <Icon
                  name={categories.find((c) => c.id === product.category)?.icon ?? "Package"}
                  size={48}
                  className="text-white/20"
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-snug">{product.name}</h3>
                  {product.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium ${badgeColor[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="font-bold text-lg">{product.price}</span>
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-4 text-sm"
                >
                  Узнать
                </Button>
              </div>
            </div>
          ))}
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
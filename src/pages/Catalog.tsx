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
  {
    id: 1,
    category: "gifts",
    name: "Набор «Чайная классика»",
    description: "3 сорта чая в красивой коробке: зелёный, красный, улун",
    price: "890 ₽",
    badge: "Хит",
  },
  {
    id: 2,
    category: "gifts",
    name: "Набор «Восточная сказка»",
    description: "5 сортов элитного китайского чая + чайная ложка в подарок",
    price: "1 490 ₽",
    badge: null,
  },
  {
    id: 3,
    category: "gifts",
    name: "Набор «Для двоих»",
    description: "2 фарфоровые чашки + 2 сорта чая на выбор",
    price: "1 890 ₽",
    badge: "Новинка",
  },
  {
    id: 4,
    category: "gifts",
    name: "Корпоративный набор",
    description: "Оформление под ваш бренд, от 10 штук, состав на выбор",
    price: "от 650 ₽/шт",
    badge: null,
  },
  // Чай
  {
    id: 5,
    category: "tea",
    name: "Лун Цзин (Колодец дракона)",
    description: "Классический зелёный чай из провинции Чжэцзян, Китай",
    price: "от 280 ₽/100г",
    badge: null,
  },
  {
    id: 6,
    category: "tea",
    name: "Те Гуань Инь",
    description: "Улун с нежным цветочным ароматом, средней степени ферментации",
    price: "от 320 ₽/100г",
    badge: "Хит",
  },
  {
    id: 7,
    category: "tea",
    name: "Да Хун Пао",
    description: "Легендарный скальный улун с богатым, глубоким вкусом",
    price: "от 480 ₽/100г",
    badge: null,
  },
  {
    id: 8,
    category: "tea",
    name: "Шу Пуэр",
    description: "Выдержанный пуэр, мягкий и насыщенный, из Юньнани",
    price: "от 350 ₽/100г",
    badge: null,
  },
  {
    id: 9,
    category: "tea",
    name: "Дарджилинг первого сбора",
    description: "Индийский чёрный чай с мускатной ноткой, весенний урожай",
    price: "от 390 ₽/100г",
    badge: "Новинка",
  },
  {
    id: 10,
    category: "tea",
    name: "Белый Бай Хао Инь Чжэнь",
    description: "Серебряные иглы — нежный белый чай, только молодые почки",
    price: "от 560 ₽/100г",
    badge: null,
  },
  // Кофе и сиропы
  {
    id: 11,
    category: "coffee",
    name: "Эфиопия Иргачефф",
    description: "Моносорт с нотами черники, цитруса и шоколада, обжарка светлая",
    price: "от 420 ₽/100г",
    badge: "Хит",
  },
  {
    id: 12,
    category: "coffee",
    name: "Колумбия Уила",
    description: "Сбалансированный кофе с карамельной сладостью и нотами красного яблока",
    price: "от 380 ₽/100г",
    badge: null,
  },
  {
    id: 13,
    category: "coffee",
    name: "Сироп «Ваниль»",
    description: "Натуральный сироп для кофе и напитков, 1 л",
    price: "390 ₽",
    badge: null,
  },
  {
    id: 14,
    category: "coffee",
    name: "Сироп «Лесной орех»",
    description: "Классический ореховый сироп, 1 л",
    price: "390 ₽",
    badge: null,
  },
  // Мате
  {
    id: 15,
    category: "mate",
    name: "Мате Amanda Classic",
    description: "Традиционный аргентинский мате, классический вкус, 500 г",
    price: "490 ₽",
    badge: null,
  },
  {
    id: 16,
    category: "mate",
    name: "Мате Taragüi",
    description: "Мягкий и ароматный мате без стеблей, 500 г",
    price: "520 ₽",
    badge: "Хит",
  },
  {
    id: 17,
    category: "mate",
    name: "Набор для мате",
    description: "Калебас + бомбилья + пакет мате в подарок",
    price: "890 ₽",
    badge: "Новинка",
  },
  // Горячий шоколад и какао
  {
    id: 18,
    category: "chocolate",
    name: "Горячий шоколад «Бельгийский»",
    description: "Тёмный бельгийский шоколад для приготовления напитка, 250 г",
    price: "480 ₽",
    badge: "Хит",
  },
  {
    id: 19,
    category: "chocolate",
    name: "Какао Valrhona",
    description: "Алкализованное какао премиум-класса, насыщенный вкус, 250 г",
    price: "390 ₽",
    badge: null,
  },
  {
    id: 20,
    category: "chocolate",
    name: "Горячий шоколад с корицей",
    description: "Смесь тёмного шоколада и пряностей, 200 г",
    price: "350 ₽",
    badge: "Новинка",
  },
  // Посуда
  {
    id: 21,
    category: "dishes",
    name: "Чайник заварочный «Нефрит»",
    description: "Керамический чайник ручной работы, 350 мл",
    price: "1 200 ₽",
    badge: null,
  },
  {
    id: 22,
    category: "dishes",
    name: "Гайвань фарфоровая",
    description: "Традиционная китайская гайвань, 150 мл",
    price: "650 ₽",
    badge: "Хит",
  },
  {
    id: 23,
    category: "dishes",
    name: "Чашка с блюдцем «Бамбук»",
    description: "Фарфоровая чашка 200 мл с рисунком бамбука",
    price: "480 ₽",
    badge: null,
  },
  {
    id: 24,
    category: "dishes",
    name: "Чайная банка жестяная",
    description: "Для хранения чая, герметичная крышка, объём 200 г",
    price: "290 ₽",
    badge: null,
  },
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

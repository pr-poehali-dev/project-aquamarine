import { Cup, Lock, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail, Phone, MapPin, Clock } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Какой чай лучше выбрать для начинающих?",
      answer:
        "Если вы только начинаете своё знакомство с миром чая, рекомендуем классические сорта: мягкий зелёный китайский Лун Цзин, душистый улун Те Гуань Инь или ароматный красный Дянь Хун. Наши консультанты с удовольствием помогут подобрать чай именно под ваш вкус — просто расскажите, что вам нравится.",
    },
    {
      question: "Как правильно заваривать чай?",
      answer:
        "Каждый чай требует своей температуры и времени заваривания. Зелёный чай — 70-80°C, 1-2 минуты. Красный (чёрный) — 90-95°C, 3-5 минут. Пуэр — кипяток, 2-3 минуты. При покупке мы всегда даём подробные инструкции и маленькую памятку по заварке.",
    },
    {
      question: "Можно ли попробовать чай перед покупкой?",
      answer:
        "Конечно! В нашем магазине всегда есть возможность продегустировать выбранный сорт. Мы убеждены: хороший чай нужно сначала почувствовать. Приходите, наливаем чашку и рассказываем о каждом сорте.",
    },
    {
      question: "Как хранить чай дома?",
      answer:
        "Чай лучше всего хранить в плотно закрытых жестяных или керамических банках, вдали от запахов, влаги и прямых солнечных лучей. Зелёный чай желательно хранить в холодильнике. У нас в магазине вы найдёте широкий выбор красивых и практичных чайниц для хранения.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/32364a2a-1dcf-4a33-ba06-66234a8d87f6/files/0280cb3b-578d-4c36-9fa6-bf01b1824dca.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Coffee" size={20} />
            <span className="font-medium text-balance">Самовар · Тамбов</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Ассортимент", "О магазине", "Чайная школа", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+74752000000"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Позвонить
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Купить чай</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Чайный магазин в Тамбове с 2010 года</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Настоящий чай.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Более 200 сортов элитного чая из Китая, Японии, Индии и Цейлона. Авторские купажи, редкие пуэры и классика — всё в одном месте в самом сердце Тамбова.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Смотреть ассортимент
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Как нас найти
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Star" size={16} />
            <span className="text-sm font-medium">Бесплатная дегустация при каждом визите</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert Advice */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Sparkles" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экспертный подбор</h3>
              <p className="text-white/80 leading-relaxed">Консультанты помогут выбрать чай под ваш вкус и случай.</p>
            </div>

            {/* Quality */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="ShieldCheck" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Проверенное качество</h3>
              <p className="text-white/80 leading-relaxed">Прямые поставки от проверенных плантаций и поставщиков.</p>
            </div>

            {/* Price */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Wallet" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Честные цены</h3>
              <p className="text-white/80 leading-relaxed">Чай на любой бюджет — от 200 ₽ до редких коллекций.</p>
            </div>

            {/* Gifts */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Gift" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Чайные подарки</h3>
              <p className="text-white/80 leading-relaxed">Красивые подарочные наборы для любого праздника.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section — Чайный путь */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Путь от листа до чашки</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Мы знаем каждый шаг — от плантации до вашего стола.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Плантация</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Мы работаем напрямую с плантациями Юньнани, Фуцзяни, Дарджилинга и Цейлона. Только свежий урожай, только проверенные хозяйства.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Отбор</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Каждая партия проходит проверку: аромат, вкус, внешний вид листа. В продажу поступает только то, что прошло наш строгий отбор.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Хранение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Чай хранится в специальных условиях — без лишних запахов, при правильной влажности и температуре, чтобы донести до вас весь аромат.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Ваша чашка</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вы приходите к нам, пробуете, выбираете и уносите домой живой вкус настоящего чая. Мы всегда рядом, чтобы помочь с заваркой.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Посетить магазин
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё о чае, заварке, хранении и нашем магазине — коротко и по делу.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Icon name="Minus" size={20} className="flex-shrink-0" />
                      ) : (
                        <Icon name="Plus" size={20} className="flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Задать вопрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                      placeholder="Интересует конкретный сорт чая или нужна помощь с выбором подарка?"
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Приходите в наш магазин — мы угостим вас чашкой хорошего чая и поможем с выбором. Работаем каждый день.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-amber-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Адрес</p>
                        <p className="text-gray-600 mt-1">г. Тамбов, ул. Советская, 108</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-amber-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Режим работы</p>
                        <p className="text-gray-600 mt-1">Пн–Пт: 9:00 – 19:00</p>
                        <p className="text-gray-600">Сб–Вс: 10:00 – 18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-amber-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Телефон</p>
                        <a href="tel:+74752000000" className="text-amber-700 hover:underline mt-1 block font-medium">
                          +7 (4752) 00-00-00
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Coffee" size={24} />
                  <span className="text-xl font-semibold">Самовар · Тамбов</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Чайный магазин «Самовар» — более 200 сортов чая со всего мира. Экспертные консультации, дегустации, подарочные наборы. Работаем с 2010 года.
                </p>
              </div>

              {/* Assortment Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">АССОРТИМЕНТ</h3>
                <ul className="space-y-3">
                  {["Зелёный чай", "Красный чай", "Пуэр", "Улун", "Белый чай"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О МАГАЗИНЕ</h3>
                <ul className="space-y-3">
                  {["О нас", "Наши поставщики", "Чайная школа", "Акции"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОМОЩЬ</h3>
                <ul className="space-y-3">
                  {["Как выбрать чай", "Как заваривать", "Доставка", "Контакты"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Чайные новинки и акции</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Чайный магазин «Самовар», г. Тамбов</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index

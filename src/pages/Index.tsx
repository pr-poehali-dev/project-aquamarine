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
            {[
              { label: "Ассортимент", href: "/catalog" },
              { label: "О магазине", href: "#about" },
              { label: "Вопросы", href: "#faq" },
              { label: "Контакты", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+79531232355"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              +7 (953) 123-23-55
            </a>
            <a href="/catalog">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Каталог</Button>
            </a>
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
            <a href="/catalog">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
                Смотреть ассортимент
              </Button>
            </a>
            <a href="#contacts">
              <Button
                size="lg"
                variant="outline"
                className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
              >
                Как нас найти
              </Button>
            </a>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Sparkles" size={16} />
            <span className="text-sm font-medium">Дегустация и чайные церемонии</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="about" className="relative z-10 py-24 px-6">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Отбор</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Каждая партия проходит проверку: аромат, вкус, внешний вид листа. В продажу поступает только то, что прошло наш строгий отбор.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Хранение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Чай хранится в специальных условиях — без лишних запахов, при правильной влажности и температуре, чтобы донести до вас весь аромат.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
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
      <section id="faq" className="relative z-10 py-24 px-6">
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
      <section id="contacts" className="relative z-10 py-24 px-6">
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
              <div className="space-y-6">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Приходите в любой из наших отделов — угостим чашкой хорошего чая и поможем с выбором.
                  </p>
                </div>

                {/* Location Cards */}
                <div className="space-y-4">
                  {[
                    {
                      name: "Чайный клуб, чайная, кофейня и магазин чая Самовар",
                      address: "ул. Кронштадтская, д. 9",
                      hours: "10:00 – 21:45",
                      map: "https://yandex.ru/maps/15/tambov/?text=Тамбов%2C+ул.+Кронштадтская%2C+9",
                    },
                    {
                      name: "Самовар – отдел в ГМ Улей",
                      address: "Супермаркет «Улей», ул. Бульвар Энтузиастов, д. 2А",
                      hours: "10:00 – 21:00",
                      map: "https://yandex.ru/maps/15/tambov/?text=Тамбов%2C+Бульвар+Энтузиастов%2C+2А",
                    },
                    {
                      name: "Самовар – отдел в ГМ Магнит",
                      address: "Гипермаркет «Магнит», ул. Советская, д. 190",
                      hours: "10:00 – 21:45",
                      map: "https://yandex.ru/maps/15/tambov/?text=Тамбов%2C+ул.+Советская%2C+190",
                    },
                    {
                      name: "Самовар – отдел в ТЦ Европа",
                      address: "ТЦ «Европа», ул. Рылеева, д. 83",
                      hours: "10:00 – 21:30",
                      map: "https://yandex.ru/maps/15/tambov/?text=Тамбов%2C+ул.+Рылеева%2C+83",
                    },
                  ].map((loc) => (
                    <div key={loc.name} className="rounded-2xl bg-white/95 text-black p-5 shadow-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="MapPin" size={18} className="text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm leading-snug">{loc.name}</p>
                          <p className="text-gray-600 text-sm mt-1">г. Тамбов, {loc.address}</p>
                          <div className="flex items-center justify-between mt-1.5">
                            <div className="flex items-center gap-1.5">
                              <Icon name="Clock" size={13} className="text-amber-600" />
                              <p className="text-amber-700 text-sm font-medium">{loc.hours}</p>
                            </div>
                            <a
                              href={loc.map}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-amber-700 hover:underline flex items-center gap-1"
                            >
                              <Icon name="Navigation" size={12} />
                              Открыть на карте
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                  {["О нас", "Наши поставщики", "Акции"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4">МЫ В СОЦ. СЕТЯХ</h3>
                  <a
                    href="https://vk.com/reviews-64828804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 ring-1 ring-white/15 rounded-full hover:bg-white/10 transition-colors text-sm text-white/80 hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.048.17.474-.085.716-.576.716z"/>
                    </svg>
                    ВКонтакте
                  </a>
                </div>
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
import { useCart } from "@/lib/cartContext"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const Cart = () => {
  const { items, removeItem, updateQty, total, clear } = useCart()

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B0F12]/80 backdrop-blur border-b border-white/10">
        <a href="/catalog" className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
          <Icon name="ArrowLeft" size={16} />
          <span className="font-medium">В каталог</span>
        </a>
        <div className="flex items-center gap-2">
          <Icon name="ShoppingCart" size={20} />
          <span className="font-semibold text-lg">Корзина</span>
        </div>
        <a href="/" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm">
          На главную
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={40} className="text-white/30" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Корзина пуста</h2>
            <p className="text-white/60 mb-8 text-lg">Добавьте что-нибудь из каталога</p>
            <a href="/catalog">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-3 text-base">
                Перейти в каталог
              </Button>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-4xl font-bold mb-8">Корзина</h1>
              {items.map(item => (
                <div key={item.id} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-snug mb-1 truncate">{item.name}</p>
                    <p className="text-amber-400 font-bold">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="w-6 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors ml-2"
                    >
                      <Icon name="Trash2" size={14} className="text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={clear}
                className="text-white/40 hover:text-white/70 text-sm transition-colors flex items-center gap-1 mt-2"
              >
                <Icon name="Trash2" size={14} />
                Очистить корзину
              </button>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Итого</h2>
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-white/70 truncate mr-2">{item.name} × {item.quantity}</span>
                      <span className="flex-shrink-0">{(item.priceNum * item.quantity).toLocaleString("ru")} ₽</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-xl">
                    <span>К оплате</span>
                    <span className="text-amber-400">{total.toLocaleString("ru")} ₽</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-3 text-base font-semibold mb-3">
                  Оформить заказ
                </Button>
                <a href="tel:+79531232355" className="block text-center text-white/60 hover:text-white text-sm transition-colors">
                  Или позвоните: +7 (953) 123-23-55
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

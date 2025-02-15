import React from 'react';
import { Flower2, Beef as Bee, Crop as Drop, LeafyGreen, ShoppingCart, Heart } from 'lucide-react';

function App() {
  const products = [
    {
      id: 1,
      name: "عسل الزهور البري",
      price: "120 ريال",
      description: "عسل طبيعي 100% من أجود أنواع الزهور البرية",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "عسل السدر",
      price: "180 ريال",
      description: "عسل السدر الأصلي من أجود المناحل",
      image: "https://images.unsplash.com/photo-1555211652-5c6222f971bc?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "عسل الأكاسيا",
      price: "150 ريال",
      description: "عسل الأكاسيا النقي بنكهته المميزة",
      image: "https://images.unsplash.com/photo-1582300857444-88fa45163d4c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-900/95 text-amber-50 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Bee className="h-8 w-8 text-amber-300" />
              <span className="text-2xl font-bold">DOAN HONEY</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">الرئيسية</a>
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">منتجاتنا</a>
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">من نحن</a>
              <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">اتصل بنا</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-amber-300 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-2 hover:text-amber-300 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 overflow-hidden" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589827577276-3f32aff56699?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px'
        }}>
          <div className="absolute inset-0 bg-amber-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-6">عسل طبيعي 100%</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl">
            نقدم لكم أجود أنواع العسل الطبيعي من أفضل المناحل
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
            تسوق الآن
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Flower2 className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-bold mb-2">عسل طبيعي 100%</h3>
              <p className="text-gray-600">منتجات عضوية خالية من الإضافات</p>
            </div>
            <div className="text-center">
              <Drop className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-gray-600">معايير جودة صارمة في الإنتاج</p>
            </div>
            <div className="text-center">
              <LeafyGreen className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-bold mb-2">مصادر موثوقة</h3>
              <p className="text-gray-600">من أفضل المناحل المحلية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">منتجاتنا المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-600">{product.price}</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bee className="h-8 w-8 text-amber-300" />
                <span className="text-xl font-bold">DOAN HONEY</span>
              </div>
              <p className="text-amber-200">نقدم أجود أنواع العسل الطبيعي منذ عام 1990</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-200 hover:text-amber-300">الرئيسية</a></li>
                <li><a href="#" className="text-amber-200 hover:text-amber-300">منتجاتنا</a></li>
                <li><a href="#" className="text-amber-200 hover:text-amber-300">من نحن</a></li>
                <li><a href="#" className="text-amber-200 hover:text-amber-300">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
              <ul className="space-y-2">
                <li>الرياض، المملكة العربية السعودية</li>
                <li>هاتف: 966-XX-XXXXXXX</li>
                <li>البريد الإلكتروني: info@doanhoney.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">النشرة البريدية</h4>
              <p className="mb-4">اشترك للحصول على آخر العروض والأخبار</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-full text-gray-900"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>جميع الحقوق محفوظة © 2024 DOAN HONEY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
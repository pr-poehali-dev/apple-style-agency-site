import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const HERO_IMG = 'https://cdn.poehali.dev/projects/57f11db6-163f-49eb-a450-a3942b497b3d/files/93a56c51-e917-4457-8e6c-4f9b98e189d8.jpg';
const CASE_IMG = 'https://cdn.poehali.dev/projects/57f11db6-163f-49eb-a450-a3942b497b3d/files/3597f396-9834-496c-88d7-3ef065fa80fb.jpg';
const GRADIENT_IMG = 'https://cdn.poehali.dev/projects/57f11db6-163f-49eb-a450-a3942b497b3d/files/ec266dde-970a-46e1-b1de-607355cb10e1.jpg';

const NAV = [
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Target', title: 'Performance-маркетинг', desc: 'Контекстная и таргетированная реклама с прозрачной аналитикой и фокусом на ROI.' },
  { icon: 'Search', title: 'SEO-продвижение', desc: 'Выводим сайты в топ поисковой выдачи и приводим органический трафик.' },
  { icon: 'Palette', title: 'Брендинг и дизайн', desc: 'Создаём айдентику, которая выделяет вас среди конкурентов Краснодара.' },
  { icon: 'Share2', title: 'SMM и контент', desc: 'Ведём соцсети, которые продают и формируют лояльное сообщество.' },
  { icon: 'Globe', title: 'Сайты и лендинги', desc: 'Разрабатываем быстрые конверсионные сайты под ключ.' },
  { icon: 'BarChart3', title: 'Аналитика', desc: 'Настраиваем сквозную аналитику и считаем каждый рубль рекламы.' },
];

const PORTFOLIO = [
  { tag: 'Ресторан', title: 'Доставка «Юг Вкуса»', metric: '+212% заказов' },
  { tag: 'Недвижимость', title: 'ЖК «Краснодар Сити»', metric: '−38% цена лида' },
  { tag: 'Ритейл', title: 'Сеть магазинов «Свежесть»', metric: '×3 трафик' },
  { tag: 'Услуги', title: 'Клиника «МедПро»', metric: '+156% записей' },
];

const CASES = [
  { num: '01', title: 'Запуск бренда одежды', result: 'За 4 месяца вывели локальный бренд из Краснодара на федеральный уровень с оборотом 8 млн ₽.' },
  { num: '02', title: 'Масштабирование доставки', result: 'Снизили стоимость заказа на 41% и удвоили число постоянных клиентов через CRM-маркетинг.' },
  { num: '03', title: 'Продвижение застройщика', result: 'Привели 340 целевых заявок на покупку квартир за квартал при ДРР всего 6%.' },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в течение 15 минут.',
    });
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 apple-blur bg-white/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="font-semibold text-[15px] tracking-tighter-apple">
            ВЫСОТА<span className="text-primary">.</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-[13px] text-foreground/80 hover:text-foreground transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            size="sm"
            onClick={() => scrollTo('contacts')}
            className="rounded-full h-8 px-4 text-[13px]"
          >
            Обсудить проект
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-primary text-[15px] font-medium mb-5 animate-fade-in">Маркетинговое агентство · Краснодар</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter-apple leading-[1.02] animate-fade-up">
            Маркетинг,<br />который выводит<br />бизнес на высоту.
          </h1>
          <p className="mt-7 text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Помогаем компаниям Краснодара расти быстрее: реклама, дизайн и стратегия в одном агентстве.
          </p>
          <div className="mt-9 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button onClick={() => scrollTo('contacts')} className="rounded-full h-12 px-7 text-base">
              Оставить заявку
            </Button>
            <button onClick={() => scrollTo('services')} className="text-primary text-base font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Узнать больше <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-medium mb-4">О нас</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-apple leading-tight">
                Команда, которая мыслит результатом
              </h2>
              <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
                Уже 7 лет мы превращаем рекламные бюджеты в реальную прибыль. Работаем с бизнесом
                Краснодарского края — от локальных кофеен до федеральных застройщиков.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { n: '150+', l: 'проектов запущено' },
                { n: '7 лет', l: 'на рынке Юга' },
                { n: '×4', l: 'средний рост клиента' },
                { n: '98%', l: 'продлевают сотрудничество' },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-3xl p-7 shadow-sm">
                  <div className="text-4xl font-bold tracking-tighter-apple text-primary">{s.n}</div>
                  <div className="mt-2 text-sm text-foreground/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-medium mb-4">Услуги</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-apple">
              Полный цикл интернет-маркетинга
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="group bg-secondary/40 rounded-[1.75rem] p-8 hover:bg-secondary transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tighter-apple">{s.title}</h3>
                <p className="mt-2 text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-medium mb-4">Портфолио</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-apple">
              Бренды, с которыми мы выросли
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PORTFOLIO.map((p, i) => (
              <div key={p.title} className="relative rounded-[2rem] overflow-hidden bg-white shadow-sm group cursor-pointer">
                <img
                  src={i % 2 === 0 ? CASE_IMG : GRADIENT_IMG}
                  alt={p.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-7">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.tag}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tighter-apple">{p.title}</h3>
                  <p className="mt-1 text-foreground/50">{p.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-medium mb-4">Кейсы</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-apple">
              Цифры говорят за нас
            </h2>
          </div>
          <div className="space-y-px rounded-[2rem] overflow-hidden bg-black/5">
            {CASES.map((c) => (
              <div key={c.num} className="bg-white p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-secondary/30 transition-colors">
                <div className="text-5xl font-bold tracking-tighter-apple text-primary/20 md:w-24 shrink-0">{c.num}</div>
                <div className="md:flex-1">
                  <h3 className="text-2xl font-semibold tracking-tighter-apple">{c.title}</h3>
                  <p className="mt-3 text-lg text-foreground/60 leading-relaxed max-w-2xl">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts / Form */}
      <section id="contacts" className="py-28 bg-foreground text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-sm font-medium mb-4">Контакты</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-apple leading-tight">
                Обсудим ваш<br />проект?
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                Оставьте заявку — проведём бесплатный аудит и предложим стратегию роста за 15 минут.
              </p>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Краснодар, ул. Красная, 176</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (861) 200-00-00</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>hello@vysota-agency.ru</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/5 rounded-[2rem] p-8 border border-white/10 space-y-4">
              <Input
                required
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 rounded-2xl bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-primary"
              />
              <Input
                required
                placeholder="Телефон"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-12 rounded-2xl bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-primary"
              />
              <Textarea
                placeholder="Расскажите о задаче"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-28 rounded-2xl bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
              />
              <Button type="submit" className="w-full h-12 rounded-2xl text-base">
                Отправить заявку
              </Button>
              <p className="text-xs text-white/40 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-foreground text-white/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <span>ВЫСОТА — маркетинговое агентство, Краснодар</span>
          <span>© {new Date().getFullYear()}. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
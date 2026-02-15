import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import func2url from "../../backend/func2url.json";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(func2url["submit-lead"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-wider">
              MAR<span className="text-mars">-S</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-mars transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-mars transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-mars transition-colors">Контакты</a>
          </div>
          <Button onClick={scrollToForm} className="bg-mars hover:bg-mars-dark text-white text-sm px-6">
            Обсудить проект
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/b0cef985-a985-4eb6-b5c7-611b5a68cb68/files/f2dd6608-9b94-489f-9e57-5170c49ae933.jpg"
            alt="Mars surface"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-mars border border-mars/30 rounded-full mb-8">
                Веб-студия полного цикла
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              Создаём сайты.
              <br />
              <span className="text-gradient">Запускаем рекламу.</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Разрабатываем сайты и настраиваем Яндекс Директ за минимальные сроки.
              Ваш бизнес получает клиентов уже через 5 дней.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-mars hover:bg-mars-dark text-white text-base px-8 py-6 glow-orange"
              >
                Получить предложение
                <Icon name="ArrowRight" size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:border-mars/50 hover:text-mars text-base px-8 py-6"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Наши услуги
              </Button>
            </div>

            <div className="animate-fade-up-delay-3 flex items-center gap-8 mt-16 pt-8 border-t border-border/50">
              <div>
                <div className="font-display text-3xl font-bold text-mars">150+</div>
                <div className="text-sm text-muted-foreground mt-1">проектов</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-mars">5 дней</div>
                <div className="text-sm text-muted-foreground mt-1">средний запуск</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-mars">x3</div>
                <div className="text-sm text-muted-foreground mt-1">рост заявок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-mars text-sm font-medium tracking-wider uppercase">Что мы делаем</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Услуги</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon="Monitor"
              title="Создание сайтов"
              description="Лендинги, корпоративные сайты, интернет-магазины. Современный дизайн с фокусом на конверсию."
              features={["Адаптивный дизайн", "SEO-оптимизация", "Запуск за 5-10 дней"]}
            />
            <ServiceCard
              icon="Target"
              title="Яндекс Директ"
              description="Настройка и ведение рекламных кампаний. Привлекаем целевых клиентов с первого дня."
              features={["Анализ конкурентов", "A/B тестирование", "Ежедневная оптимизация"]}
            />
            <ServiceCard
              icon="TrendingUp"
              title="Комплексное продвижение"
              description="Сайт + реклама = максимальный результат. Полный цикл от идеи до потока клиентов."
              features={["Единая стратегия", "Аналитика и отчёты", "Рост конверсии x3"]}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-mars text-sm font-medium tracking-wider uppercase">Результаты</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Портфолио</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioCard
              image="https://cdn.poehali.dev/projects/b0cef985-a985-4eb6-b5c7-611b5a68cb68/files/f74fed26-664d-42a2-990d-81b48ff90652.jpg"
              title="Интернет-магазин мебели"
              category="Сайт + Реклама"
              result="+240% заявок за 2 месяца"
            />
            <PortfolioCard
              image="https://cdn.poehali.dev/projects/b0cef985-a985-4eb6-b5c7-611b5a68cb68/files/bb9fc492-5e12-4b50-aa68-07a12a0a2e46.jpg"
              title="Стоматологическая клиника"
              category="Яндекс Директ"
              result="Стоимость заявки снижена на 60%"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-mars text-sm font-medium tracking-wider uppercase">Начать проект</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
                Обсудим <span className="text-gradient">ваш проект?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Оставьте заявку — свяжемся в течение часа и предложим решение под ваш бюджет.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-mars/10 flex items-center justify-center">
                    <Icon name="Zap" size={22} className="text-mars" />
                  </div>
                  <div>
                    <div className="font-medium">Быстрый старт</div>
                    <div className="text-sm text-muted-foreground">Запуск проекта от 5 рабочих дней</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-mars/10 flex items-center justify-center">
                    <Icon name="Shield" size={22} className="text-mars" />
                  </div>
                  <div>
                    <div className="font-medium">Гарантия результата</div>
                    <div className="text-sm text-muted-foreground">Работаем до достижения KPI</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-mars/10 flex items-center justify-center">
                    <Icon name="Headphones" size={22} className="text-mars" />
                  </div>
                  <div>
                    <div className="font-medium">Поддержка 24/7</div>
                    <div className="text-sm text-muted-foreground">Всегда на связи в мессенджерах</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-mars/10 flex items-center justify-center mb-4">
                    <Icon name="Check" size={32} className="text-mars" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">Свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border h-12 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-secondary border-border h-12 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">О проекте</label>
                    <Textarea
                      placeholder="Расскажите кратко о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-mars hover:bg-mars-dark text-white h-12 text-base glow-orange disabled:opacity-60"
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                    {!loading && <Icon name="Send" size={18} />}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold tracking-wider">
            MAR<span className="text-mars">-S</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 MAR-S Studio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

function ServiceCard({
  icon,
  title,
  description,
  features,
}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group bg-card border border-border rounded-2xl p-8 hover:border-mars/40 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-mars/10 flex items-center justify-center mb-6 group-hover:bg-mars/20 transition-colors">
        <Icon name={icon} size={24} className="text-mars" />
      </div>
      <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <Icon name="Check" size={14} className="text-mars shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PortfolioCard({
  image,
  title,
  category,
  result,
}: {
  image: string;
  title: string;
  category: string;
  result: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium text-mars bg-mars/10 rounded-full mb-3 backdrop-blur-sm">
          {category}
        </span>
        <h3 className="font-display text-xl font-bold mb-1">{title}</h3>
        <p className="text-mars-light text-sm font-medium">{result}</p>
      </div>
    </div>
  );
}

export default Index;
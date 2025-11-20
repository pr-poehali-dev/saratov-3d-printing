import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Box" size={32} className="text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3D ПЕЧАТЬ САРАТОВ
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors">Технологии</a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Примеры</a>
            <a href="#price" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Icon name="Cpu" size={16} className="text-primary" />
                <span className="text-sm text-primary font-medium">Промышленные технологии</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                3D печать, моделирование и сканирование
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные услуги 3D технологий в Саратове. FDM и SLA печать, реверс-инжиниринг, прототипирование.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Каталог услуг
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/b66767bb-9dd4-418d-a25c-6614d01655ce/files/bade73cf-7206-42cc-84c5-d1b20d1836d1.jpg" 
                alt="3D печать" 
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "Target", label: "Высокая точность", value: "±0.1мм" },
              { icon: "Layers", label: "Разрешение SLA", value: "12К" },
              { icon: "Maximize", label: "Размер печати", value: "420×420×500" },
              { icon: "DollarSign", label: "От", value: "10 руб/гр" }
            ].map((stat, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-2">
                  <Icon name={stat.icon} size={32} className="mx-auto text-primary" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр 3D технологий для промышленности и частных заказов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Printer",
                title: "3D печать FDM",
                desc: "Печать пластиками PLA, PETG, ABS, Nylon, TPU и композитными материалами. Размер до 420×420×500мм.",
                features: ["Быстрое изготовление", "Прочные детали", "Низкая стоимость"]
              },
              {
                icon: "Droplet",
                title: "3D печать SLA",
                desc: "Высокоточная печать фотополимерными смолами с разрешением 12К. Размер 218×122×260мм.",
                features: ["Гладкая поверхность", "Высокая детализация", "Сложная геометрия"]
              },
              {
                icon: "Scan",
                title: "3D сканирование",
                desc: "Реверс-инжиниринг существующих деталей для создания точных копий или улучшенных версий.",
                features: ["Точное копирование", "Быстрая оцифровка", "Без выезда"]
              }
            ].map((service, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Технологии печати</h2>
            <p className="text-xl text-muted-foreground">
              Современное оборудование и материалы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/b66767bb-9dd4-418d-a25c-6614d01655ce/files/a568971e-57f3-48b8-bbfb-447619932b9d.jpg" 
                  alt="FDM печать" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">FDM (Fused Deposition Modeling)</h3>
                <p className="text-muted-foreground">
                  Послойное нанесение расплавленного пластика для создания прочных функциональных деталей.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Package" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Материалы</div>
                      <div className="text-sm text-muted-foreground">PLA, PETG, ABS, Nylon, TPU, композитные пластики</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Ruler" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Рабочая область</div>
                      <div className="text-sm text-muted-foreground">420×420×500 мм</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/b66767bb-9dd4-418d-a25c-6614d01655ce/files/d0a8fc13-03e9-444f-bfda-733642830e41.jpg" 
                  alt="SLA печать" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">SLA (Stereolithography)</h3>
                <p className="text-muted-foreground">
                  Фотополимерная печать с высочайшей детализацией и гладкой поверхностью деталей.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Droplets" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Материалы</div>
                      <div className="text-sm text-muted-foreground">Фотополимерные смолы различной жесткости</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Разрешение</div>
                      <div className="text-sm text-muted-foreground">12К (218×122×260 мм)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Что мы изготавливаем</h2>
            <p className="text-xl text-muted-foreground">
              От единичных прототипов до серийных партий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Cog",
                title: "Запчасти и детали",
                items: ["Корпуса оборудования", "Шестерни и механизмы", "Втулки и подшипники", "Крепежные элементы"]
              },
              {
                icon: "Lightbulb",
                title: "Прототипирование",
                items: ["Концепт-модели", "Функциональные прототипы", "Тестовые образцы", "Предсерийные партии"]
              },
              {
                icon: "Gift",
                title: "Сувенирная продукция",
                items: ["Корпоративные подарки", "Брендированные изделия", "Памятные фигурки", "Наградная атрибутика"]
              },
              {
                icon: "Wrench",
                title: "Ремонт и восстановление",
                items: ["Копии сломанных деталей", "Изношенные компоненты", "Детали снятые с производства", "Реставрация механизмов"]
              },
              {
                icon: "Boxes",
                title: "Мелкие серии",
                items: ["Серийные партии", "Производственные заказы", "Складские запасы", "Постоянные поставки"]
              },
              {
                icon: "PenTool",
                title: "Индивидуальные проекты",
                items: ["Уникальные изделия", "Дизайнерские решения", "Технические задачи", "Нестандартные формы"]
              }
            ].map((category, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name={category.icon} size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Стоимость услуг</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачное ценообразование и индивидуальный подход
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="text-5xl font-bold text-primary">от 10₽</div>
                    <div className="text-xl text-muted-foreground">за грамм готового изделия</div>
                    <ul className="space-y-3">
                      {[
                        "Точный расчет по весу модели",
                        "Учет сложности геометрии",
                        "Скидки на крупные партии",
                        "Прозрачная калькуляция"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={20} className="text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Info" size={20} className="text-primary" />
                        <span className="font-semibold">Что влияет на стоимость</span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Выбранная технология (FDM/SLA)</li>
                        <li>• Материал изделия</li>
                        <li>• Сложность модели</li>
                        <li>• Количество деталей в партии</li>
                        <li>• Срочность выполнения</li>
                        <li>• Постобработка (при необходимости)</li>
                      </ul>
                    </div>
                    <Button size="lg" className="w-full">
                      <Icon name="Calculator" size={20} className="mr-2" />
                      Рассчитать стоимость
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: "Timer", title: "Быстрые сроки", desc: "От 1 дня в зависимости от сложности" },
                { icon: "Shield", title: "Гарантия качества", desc: "Проверка каждой детали перед отправкой" },
                { icon: "Users", title: "Индивидуальный подход", desc: "Консультации и техническая поддержка" }
              ].map((benefit, idx) => (
                <Card key={idx} className="bg-card border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <Icon name={benefit.icon} size={32} className="mx-auto text-primary" />
                    <div className="font-semibold">{benefit.title}</div>
                    <div className="text-sm text-muted-foreground">{benefit.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20">
                <Icon name="MessageSquare" size={40} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Готовы начать проект?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Отправьте нам 3D модель или техническое задание, и мы рассчитаем стоимость и сроки в течение 1 часа
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="group">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span>Саратов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@3dprint-saratov.ru</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border bg-card/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Box" size={24} className="text-primary" />
              <span className="font-semibold">3D ПЕЧАТЬ САРАТОВ</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Все права защищены
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Icon name="Phone" size={20} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Mail" size={20} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

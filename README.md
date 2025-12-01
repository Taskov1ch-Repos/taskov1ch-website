<div align="center">
  <img src="public/images/taskov1ch.svg" width="120" height="120" alt="Logo" />
  <h1>TASKOV1CH // TERMINAL</h1>
  <p>
    <strong>Industrial Futurism Portfolio Interface</strong>
    <br />
    Inspired by <em>Arknights: Endfield</em> aesthetics.
  </p>

  <p>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite_6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS_4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://www.framer.com/motion/">
      <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    </a>
  </p>
</div>

---

## ⚡ О проекте

**Taskov1ch Terminal** — это высокопроизводительное портфолио в стиле киберпанк/индастриал, разработанное с использованием передовых веб-технологий. Проект имитирует интерфейс терминала, фокусируясь на утилитарной эстетике, плавных анимациях и отзывчивости.

### Ключевые особенности

* **🎨 Дизайн-система:** Полностью кастомная тема на **Tailwind CSS v4** с использованием CSS-переменных. Эстетика "Industrial Futurism".
* **📱 Адаптивность:** Уникальный UX для разных устройств:
    * *Desktop:* Двухпанельный интерфейс с предпросмотром контента.
    * *Mobile:* Модальные окна, нижняя навигация, оптимизированный тач-интерфейс.
* **🌍 Локализация (i18n):** Полная поддержка Английского и Русского языков с авто-определением и сохранением настроек.
* **🐙 GitHub Integration:** Автоматический фетчинг `README.md` из репозиториев для отображения описания проектов в реальном времени.
* **✨ Анимации:** Плавные переходы страниц (page transitions) и микро-взаимодействия на базе **Framer Motion**.

---

## 🛠 Технический стек

| Категория | Технологии |
| :--- | :--- |
| **Core** | React 19, TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 |
| **Router** | React Router DOM |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **I18n** | i18next, react-i18next |
| **Markdown** | react-markdown, remark-gfm |

---

## 🚀 Запуск локально

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/taskov1ch/taskov1ch-terminal.git
   cd taskov1ch-terminal
   ```

2.  **Установите зависимости:**

    ```bash
    npm install
    ```

3.  **Запустите режим разработки:**

    ```bash
    npm run dev
    ```

4.  Откройте [http://localhost:5173](http://localhost:5173) в браузере.

-----

## 📂 Структура проекта

```text
src/
├── components/      # UI компоненты
├── config/          # Конфигурация и статические данные
├── hooks/           # Кастомные хуки
├── locales/         # JSON ресурсы переводов (en/ru)
├── pages/           # Страницы приложения
├── types/           # TypeScript интерфейсы
├── App.tsx          # Корневой компонент с роутингом
└── main.tsx         # Точка входа
```

-----

## 🖼 Скриншоты

| Desktop Interface | Mobile Interface |
|:---:|:---:|
| <img src="public/screenshots/desktop.png" alt="Desktop Preview" width="400"> | <img src="public/screenshots/mobile.png" alt="Mobile Preview" width="200"> |
| *Двухпанельный режим* | *Мобильная навигация* |

-----

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](https://www.google.com/search?q=LICENSE).

<div align="center">
<br />
<sub>Designed & Built by <strong>Taskov1ch</strong> // 2025</sub>
</div>

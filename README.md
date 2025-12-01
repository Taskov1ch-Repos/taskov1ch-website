<div align="center">
  <img src="public/images/taskov1ch.svg" width="120" height="120" alt="Logo" />
  <h1>TASKOV1CH // WEBSITE</h1>
  <p>
    <strong>Industrial Futurism Portfolio Interface</strong>
    <br />
    Inspired by <em><a href="https://endfield.gryphline.com/">Arknights: Endfield</a></em> & <a href="https://www.cyberpunk.net/">Cyberpunk 2077</a> aesthetics.
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
  </p>
</div>

---

## ⚡ О проекте

**Taskov1ch Website** — веб-портфолио в стиле industrial futurism/cyberpunk, вдохновлённое эстетикой **Arknights: Endfield** и **Cyberpunk 2077**.
Проект имитирует интерфейс кибернетического терминала с упором на утилитарность, читаемость и анимированную навигацию.

### ✨ Основные преимущества

- **🎨 Кастомная дизайн-система:** Tailwind CSS v4 с расширенной системой переменных и собственной темой.
- **📱 Адаптивный интерфейс:**
  - **Desktop:** Двухпанельный интерфейс с предпросмотром контента.
  - **Mobile:** Модальные окна, упрощённая навигация, оптимизация под тач.
- **🌍 Локализация i18n:**
  - Поддержка **EN** и **RU**, автодетект + сохранение в localStorage.
- **🐙 GitHub Integration:**
  - Фетчинг `README.md` из репозиториев в реальном времени.
- **🔄 Анимации:**
  - Переходы страниц и микро-взаимодействия на основе **Framer Motion**.

---

## 🛠 Технический стек

| Категория | Технологии |
| --- | --- |
| **Core** | React 19, TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 |
| **Router** | React Router DOM |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **i18n** | i18next, react-i18next |
| **Markdown** | react-markdown, remark-gfm |

---

## 🚀 Запуск локально

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/taskov1ch-repos/taskov1ch-website.git
   cd taskov1ch-website
   ```

2. **Установите зависимости:**

   ```bash
   npm install
   ```

3. **Запустите dev-сервер:**

   ```bash
   npm run dev
   ```

4. Откройте в браузере:

   **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Структура проекта

```text
src/
├── components/      # UI-компоненты и атомарные элементы
├── config/          # Настройки приложения и статические данные
├── hooks/           # Кастомные React-хуки
├── locales/         # JSON-файлы локализации (en/ru)
├── pages/           # Страницы приложения
├── types/           # TypeScript типы и интерфейсы
├── App.tsx          # Корневой компонент + роутинг
└── main.tsx         # Точка входа приложения
```

---

## 🖼 Скриншоты

| Desktop Interface | Mobile Interface |
| :---: | :---: |
| <img src="public/screenshots/desktop.png" alt="Desktop Preview" width="400"> | <img src="public/screenshots/mobile.png" alt="Mobile Preview" width="200"> |

---

## 📄 Лицензия

Проект распространяется под лицензией **MIT**.
Подробнее — в файле [LICENSE](LICENSE).

<div align="center">
<br />
<sub>Designed & Built by <strong>Taskov1ch</strong> // 2025</sub>
</div>
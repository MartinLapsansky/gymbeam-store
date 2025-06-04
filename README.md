# 🏪 GymBeam Store – Webová aplikácia s Fake Store API

Jednoduchá webová aplikácia vytvorená pomocou **Next.js** a **Tailwind CSS**, ktorá simuluje e-shop (inšpirovaný značkou GymBeam) s použitím verejného [Fake Store API](https://fakestoreapi.com/).

---

## 🚀 Spustenie projektu

1. **Klonovanie repozitára**
   ```bash
   git clone <REPO_URL>
   cd gymbeam-store
   ```

2. **Inštalácia závislostí**
   ```bash
   npm install
   ```

3. **Spustenie aplikácie**
   ```bash
   npm run dev
   ```

4. **Aplikácia bude bežať na:**
   ```
   http://localhost:3000
   ```

---

## 📄 Popis hlavných stránok

### 🔐 `/login` – Prihlásenie
- Jednoduchý formulár pre zadanie prihlasovacích údajov
- Simulácia prihlásenia bez reálneho overenia

### 📝 `/register` – Registrácia
- Formulár na registráciu nového používateľa
- Simulácia vytvorenia používateľa

### 🛒 `/products` – Produkty
- Zoznam všetkých produktov získaných z Fake Store API
- Možnosť filtrovania podľa kategórie (všetko,elektronika,oblečenie,príslušenstvo)
- Každý produkt obsahuje:
  - Obrázok
  - Názov
  - Kategóriu
  - Cenu

### 🛒 `/products/[id]` – Stránka produktu 

Screeny z webovej a mobilnej aplikácie sú k dispozícii v projektovom priečinku screenshots.

---

## 📦 Použité technológie

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fake Store API](https://fakestoreapi.com/)
- [Font Awesome](https://fontawesome.com/) pre ikony

---

## 📁 Štruktúra projektu

```
src/
└── app/
    ├── components/
    │
    ├── assets/
        └──app_images
	└──screenshots //screeny z UI
    │
    ├── login/
    │   └── page.tsx
    ├── products/
    │   ├── [id]/
    │   │   └── page.tsx     // Detail produktu
    │   └── page.tsx         // Zoznam produktov
    ├── registration/
    │   └── page.tsx
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    └── page.tsx             // Úvodná stránka
```
---

## 📬 Kontakt

V prípade otázok alebo spätnej väzby ma kontaktujte cez GitHub issues.

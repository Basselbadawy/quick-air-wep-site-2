# Quick Air Zagazig — React Website

وكالة كويك اير للسياحة والطيران — الزقازيق

---

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت الـ dependencies
npm install

# 2. تشغيل السيرفر المحلي
npm run dev

# 3. بناء نسخة production
npm run build
```

---

## ⚙️ الإعدادات

كل إعدادات المشروع في ملف واحد: `src/data.js`

```js
// Supabase credentials — موجودين أصلاً بياناتك
const supabase = createClient(
  'https://mbzqmgaizxscaxulrnfc.supabase.co',
  'sb_publishable_UNSyhCT9_P5mRdhLWDjSfw_vSgY9YIp'
)

// رقم الواتساب
export const WHATSAPP = '201063278868'

// رقم الهاتف
export const PHONE = '01063278868'
```

---

## 🗄️ هيكل جداول Supabase

### جدول destinations
```sql
create table destinations (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  region text check (region in ('بحري','تاريخي','صحراوي','ديني','عمرة')),
  cover_image text,
  description text,
  highlights text[],
  min_price integer default 0,
  featured boolean default false,
  created_at timestamptz default now()
);

-- public read
alter table destinations enable row level security;
create policy "public read" on destinations for select using (true);
```

### جدول packages
```sql
create table packages (
  id uuid default gen_random_uuid() primary key,
  destination_id uuid references destinations(id),
  title text not null,
  duration_days integer,
  price_per_person integer,
  includes text[],
  images text[],
  type text check (type in ('package','ticket')) default 'package',
  available boolean default true,
  extra text,
  created_at timestamptz default now()
);

-- public read
alter table packages enable row level security;
create policy "public read" on packages for select using (true);
```

---

## 📱 رفع على Netlify (مجاني)

```bash
npm run build
# ارفع مجلد dist/ على netlify.com
```

أو ربط GitHub repo مع Netlify لـ auto-deploy.

---

## 🏗️ هيكل المشروع

```
src/
├── App.jsx              # المكون الرئيسي + جلب البيانات
├── data.js              # Supabase client + بيانات demo
├── index.css            # Tailwind + styles مخصصة
├── main.jsx             # Entry point
└── components/
    ├── Navbar.jsx        # شريط التنقل (Responsive)
    ├── Hero.jsx          # القسم الرئيسي + Search
    ├── StatsBar.jsx      # إحصائيات الوكالة
    ├── Destinations.jsx  # Sidebar + Grid الوجهات
    ├── Packages.jsx      # باقات مع زر واتساب + اتصال
    ├── MatrouhSection.jsx # قسم مرسى مطروح الحصري
    ├── DayTrips.jsx      # رحلات اليوم الواحد
    ├── Testimonials.jsx  # آراء العملاء
    ├── BookingModal.jsx  # نموذج الحجز → واتساب
    ├── CTAFooter.jsx     # CTA + Footer
    ├── SectionHead.jsx   # عنوان الأقسام (reusable)
    └── Skeleton.jsx      # Loading skeletons
```

---

## ✅ المميزات المبنية

- ✅ RTL عربي كامل بخط Cairo
- ✅ Supabase integration مع fallback demo data
- ✅ Sidebar مغلق بالـ default
- ✅ كل زر "احجز" → رسالة واتساب ديناميكية باسم الرحلة وسعرها
- ✅ زر اتصال مباشر بجانب كل زر واتساب
- ✅ قسم مرسى مطروح الحصري بأسعار الأبراج الثلاثة
- ✅ رحلات اليوم الواحد (الإسكندرية، السخنة، بورسعيد)
- ✅ Loading skeletons أثناء جلب البيانات
- ✅ Fully responsive (موبايل + تابلت + ديسكتوب)

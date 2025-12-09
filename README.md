# Emperor6inch Defense Website

A professional, responsive, and SEO-optimized defense technology website for Emperor6inch.com, built with Next.js 14, Tailwind CSS, and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1.  **Install Dependencies**:
    Since the project files were generated manually, you need to install the dependencies defined in `package.json`.
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Maps**: [React Leaflet](https://react-leaflet.js.org/)
-   **Forms**: React Hook Form + Zod
-   **Email**: Nodemailer (Backend API)

## 📂 Project Structure

```
/app
  layout.tsx       # Root layout with Navbar/Footer
  page.tsx         # Home page
  globals.css      # Global styles & Tailwind directives
  /products
    page.tsx       # Product listing
    [slug]/page.tsx # Product details
  /threats
    page.tsx       # Interactive threat map
  /about
    page.tsx       # Company info
  /contact
    page.tsx       # Contact form & info
  /api/contact     # API route for form submission
/components
  /layout          # Navbar, Footer
  /ui              # Reusable UI (Button, Hero)
  /features        # Complex components (ProductCard, ThreatMap, ContactForm)
/lib
  products.ts      # Product data
  types.ts         # TS interfaces
```

## 🌍 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```

2.  **Deploy**:
    ```bash
    vercel
    ```

3.  **Production Deployment**:
    ```bash
    vercel --prod
    ```

4.  **Custom Domain**:
    -   Go to your Vercel project dashboard.
    -   Navigate to **Settings > Domains**.
    -   Add `emperor6inch.com`.
    -   Follow the instructions to configure your DNS records (A record or CNAME).

### Netlify

1.  **Build**:
    ```bash
    npm run build
    ```

2.  **Deploy**:
    Drag and drop the `.next` folder (or configure Netlify to build from Git) to your Netlify dashboard.

## 📝 Notes

-   **Images**: Placeholder images are currently used. Replace files in `public/images/` with high-resolution assets.
-   **Email**: The contact form logs to the console by default. To send real emails, update `app/api/contact/route.ts` with valid SMTP credentials.
-   **Map**: The threat map uses OpenStreetMap tiles. For higher traffic, consider using a paid provider like Mapbox.

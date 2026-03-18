# Blissful Invitations

A beautiful, responsive React application for digital wedding invitations, Nikah Namas, and e-invites. Built with modern web technologies for high performance and smooth animations.

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 💻 Local Development

To run this project locally on your machine:

1. **Clone the repository** (if you exported to GitHub) or extract the ZIP file.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## 🛠️ Building for Production

To create a production-ready build:

```bash
npm run build
```
This will generate a `dist` folder containing your optimized static files.

## 🌍 Deployment Guide

This project is perfectly configured to be deployed on modern hosting platforms like Vercel or Netlify with zero configuration required.

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click **Add New... > Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework.
5. Click **Deploy**.
6. Once deployed, go to the project **Settings > Domains** to add your custom domain.

### Deploying to Netlify

1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://netlify.com) and click **Add new site > Import an existing project**.
3. Connect your GitHub repository.
4. Netlify will auto-detect the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.
6. Go to **Domain management** to add your custom domain.

## 📝 Customization

- **WhatsApp Number:** You can update the WhatsApp booking link in `src/App.tsx` by modifying the `WHATSAPP_LINK` constant at the top of the file.
- **Images:** The current images are placeholders from Unsplash. You can replace the URLs in the `reels` and `templates` arrays with links to your actual work.
- **Colors:** The theme colors (rose-gold, peach, ink) are configured in the Tailwind setup.

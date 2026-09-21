# Teja Darshan G - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This site showcases cloud engineering expertise and serverless architecture skills.

## 📋 Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Building Your Own Portfolio](#building-your-own-portfolio)
- [Email Integration Setup](#email-integration-setup)
- [Customization Guide](#customization-guide)
- [Featured Projects: AI-Generated Icons](#featured-projects-ai-generated-icons)
- [Favicon Customization](#favicon-customization)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   ├── Header.tsx    # Navigation header with smooth scrolling
│   ├── Hero.tsx      # Landing section with profile image
│   ├── About.tsx     # About section with bio and stats
│   ├── Experience.tsx # Work experience timeline
│   ├── Skills.tsx    # Skills with progress bars
│   ├── Services.tsx  # Services offered section
│   ├── Portfolio.tsx # Project showcase grid with AI icons
│   ├── Contact.tsx   # Contact form with EmailJS integration
│   └── Footer.tsx    # Site footer
├── assets/
│   ├── teja-profile.jpg # Profile image
│   ├── *-icon.png    # AI-generated project icons
├── pages/
│   ├── Index.tsx     # Main page layout
│   ├── CreateYourOwn.tsx # Portfolio customization page
│   └── NotFound.tsx  # 404 page
└── index.css         # Global styles and design system
```

## 🛠 Getting Started

### Local Development
```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗 Building Your Own Portfolio

### Quick Start for Beginners

Follow these simple steps to customize this portfolio for yourself:

#### Step 1: Personal Information
**File: `src/components/Hero.tsx` (Lines 25-35)**
```tsx
// Update your name and title
<h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
  <span className="text-foreground">Your Name</span> {/* Change "Teja" */}
  <br />
  <span className="gradient-primary bg-clip-text text-transparent">
    Your Last Name   {/* Change "Darshan G" */}
  </span>
</h1>

// Update your professional title (Line 34)
<h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
  Your Professional Title | Your Specialty
</h2>
```

#### Step 2: Header Logo
**File: `src/components/Header.tsx` (Line 52)**
```tsx
// Change the header name
<button>
  Your Name  {/* Change "Darshan" */}
</button>
```

#### Step 3: Profile Photo
**File: `src/assets/teja-profile.jpg`**
- Replace this file with your professional headshot
- Keep the same filename for automatic integration

#### Step 4: About Section Bio
**File: `src/components/About.tsx` (Lines 28-46)**
```tsx
// Update your professional bio
<p className="text-lg leading-relaxed text-muted-foreground mb-6">
  Your professional experience and background...
</p>
```

#### Step 5: Contact Information
**File: `src/components/Contact.tsx` (Lines 103, 111)**
```tsx
// Update email (Line 103)
href="mailto:your.email@example.com"

// Update LinkedIn (Line 111)
onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
```

#### Step 6: Experience Stats
**File: `src/components/Hero.tsx` (Lines 100-117)**
```tsx
// Update your statistics
<div className="text-3xl lg:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
  Your Number  {/* e.g., "5+" instead of "9+" */}
</div>
<div className="text-muted-foreground">Your Description</div>
```

### Advanced Customization Page
Visit `/createyourown` on your deployed site to use the interactive form for easier customization.

## 📧 Email Integration Setup

### Current Configuration (EmailJS)
```javascript
// In src/components/Contact.tsx (lines 39-50)
Service ID: 'service_y0dre9g'
Template ID: 'template_nrtgipmv'
Public Key: 'i9Ib_mTHp26LN7pDT'
```

### Setup Your Own EmailJS:

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Design your email template
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{subject}}`, `{{message}}`
   - Note your Template ID

4. **Get Public Key**
   - Go to Account settings
   - Copy your Public Key

5. **Update the Code**
   ```javascript
   // Replace in src/components/Contact.tsx (lines 41-53)
   await emailjs.send(
     'your_service_id',    // Replace with your Service ID
     'your_template_id',   // Replace with your Template ID
     formData,
     'your_public_key'     // Replace with your Public Key
   );
   ```

### Enable Schedule Call Feature:

To enable the "Schedule Call" button:

1. **Uncomment the Schedule Call Button**
   ```javascript
   // In src/components/Contact.tsx (around line 251-259)
   // Remove the /* */ comments around the Schedule Call button
   <Button 
     type="button" 
     variant="outline" 
     size="lg" 
     className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background"
     onClick={() => window.open('https://calendly.com/your-calendly-username', '_blank')}
   >
     Schedule Call
   </Button>
   ```

2. **Set up Calendly (Recommended)**
   - Create account at [Calendly](https://calendly.com/)
   - Set up your availability
   - Get your Calendly URL
   - Replace `https://calendly.com/your-calendly-username` with your actual Calendly URL

## 🎨 Featured Projects: AI-Generated Icons

The portfolio section uses AI-generated icons for each project. To enable "View Details" buttons:

**File: `src/components/Portfolio.tsx` (Lines 173-190)**
Uncomment the action buttons section and add your project URLs.

## 🎯 Favicon Customization

**File: `public/favicon.svg`**

Edit the gradient colors, initials, or corner radius directly in this file — it's referenced from `index.html` via `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`. A matching `public/favicon.ico` fallback is used by browsers that don't support SVG favicons; regenerate it (e.g. via an online SVG-to-ICO converter) after editing the SVG.

## 🛠 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety  
- **Tailwind CSS** - Styling and design system
- **shadcn/ui** - Component library
- **EmailJS** - Contact form integration
- **Lucide React** - Icons
- **Vite** - Build tool and dev server

---

**Made with ❤️ by Teja Darshan G**

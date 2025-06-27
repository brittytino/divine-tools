# Divine Lab - Student Tools Platform

Divine Lab is a comprehensive platform offering free tools for students, built with Next.js 14, TypeScript, and Tailwind CSS. This platform is developed by Divine Infotech, Coimbatore.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-repo/divine-tools.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
divine-tools/
├── app/                  # Next.js app directory
│   ├── assets/           # Static assets (images, etc.)
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and helpers
│   ├── sections/         # Page sections components
│   ├── tools/            # Individual tools implementations
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout with metadata
├── public/               # Public static files
└── components.json       # Shadcn UI components config
```

## 🧩 Global Components

### UI Components (`app/components/ui/`)
- Built using [shadcn/ui](https://ui.shadcn.com/)
- Customizable, accessible components
- Key components:
  - `Button.tsx` - Reusable button component
  - `Dialog.tsx` - Modal dialogs
  - `Form.tsx` - Form components
  - `Card.tsx` - Card layouts
  - More components in `ui/` directory

### Layout Components (`app/sections/`)
- `Navbar.tsx` - Global navigation
- `Footer.tsx` - Global footer
- `Hero.tsx` - Hero section template
- `Features.tsx` - Features section template
- `CallToAction.tsx` - CTA section template

### Shared Components (`app/components/`)
- `Avatar.tsx` - User avatar component
- `FeatureCard.tsx` - Feature display card
- `Tag.tsx` - Tag/label component
- `Key.tsx` - Key feature highlight
- `Pointer.tsx` - Custom pointer component

## 🛠️ Tools Implementation

### Project Ideas Generator (`/tools/project-ideas/`)
```typescript
// Example structure for new tools
/tools/your-tool-name/
├── components/           # Tool-specific components
├── lib/                 # Tool-specific utilities
├── types.ts            # TypeScript interfaces
├── constants.ts        # Tool constants
├── page.tsx            # Main tool page
└── layout.tsx          # Tool-specific layout
```

### Adding New Tools
1. Create a new directory under `app/tools/`
2. Implement the tool using the structure above
3. Add routing in the main navigation
4. Update sitemap.xml and metadata

## 🛣️ Routing Structure

```
/                          # Home page
├── /tools                 # Tools directory
│   ├── /project-ideas     # Project Ideas Generator
│   │   ├── /              # Main tool page
│   │   ├── /generated     # Generated results
│   │   └── /[token]       # Shared results
│   ├── /resume            # Resume Builder
│   └── /certificate       # Certificate Generator
└── /about                 # About page
```

## 🎨 Styling Guidelines

- Use Tailwind CSS for styling
- Follow the color scheme:
  ```css
  bg-neutral-950  /* Background */
  text-white      /* Text */
  lime-400        /* Accent */
  ```
- Use the Inter font family
- Maintain dark theme consistency

## 🔒 SEO Implementation

- Metadata configuration in `app/layout.tsx`
- Tool-specific metadata in respective `layout.tsx` files
- Structured data for better search visibility
- Local SEO optimization for Coimbatore region

## 🧪 Development Guidelines

### Creating New Components
```typescript
// Example component structure
import { FC } from 'react';

interface ComponentProps {
  // Define props
}

export const Component: FC<ComponentProps> = ({ ...props }) => {
  return (
    // Implementation
  );
};
```

### State Management
- Use React hooks for local state
- Implement context for shared state
- Store user preferences in localStorage

### API Integration
- Place API calls in tool-specific `lib` directories
- Use TypeScript interfaces for API responses
- Implement error handling and loading states

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  ```css
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px
  ```

## 🔍 Performance Optimization

- Use Next.js Image component for images
- Implement lazy loading for components
- Optimize fonts and icons
- Use proper caching strategies

## 🛡️ Security Considerations

- Implement rate limiting for tools
- Validate user inputs
- Secure API endpoints
- Follow CORS policies

## 🔄 Continuous Integration

- Run tests before commits
- Maintain code quality standards
- Follow semantic versioning
- Document API changes

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Guidelines](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

Copyright © 2025 Divine Infotech. All rights reserved.

## 🔗 Contact

For any queries, contact:
- Website: [https://divineinfotech.org](https://divineinfotech.org)

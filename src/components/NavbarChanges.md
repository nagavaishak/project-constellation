
# Navbar Recommended Changes

Please add an "About" link to the navbar. The implementation should look like this:

```jsx
// Add this item to the navigation array in Navbar.tsx
{ text: 'About', href: '/about' },
```

The navigation array will then look like:

```jsx
const navigation = [
  { text: 'Home', href: '/' },
  { text: 'Projects', href: '/projects' },
  { text: 'Case Studies', href: '/case-studies' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];
```

This will add an "About" link in the navbar that links to the new About page.

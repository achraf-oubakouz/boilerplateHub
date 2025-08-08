export const typography = {
  // Body text styles
  body: {
    large: {
      regular: 'text-lg font-normal leading-relaxed',
      medium: 'text-lg font-medium leading-relaxed',
      strong: 'text-lg font-semibold leading-relaxed',
    },
    medium: {
      regular: 'text-base font-normal leading-relaxed',
      medium: 'text-base font-medium leading-relaxed',
      strong: 'text-base font-semibold leading-relaxed',
    },
    small: {
      regular: 'text-sm font-normal leading-relaxed',
      medium: 'text-sm font-medium leading-relaxed',
      strong: 'text-sm font-semibold leading-relaxed',
    },
  },
  
  // Brand/Logo styles (Sora Extrabold)
  brand: {
    logo: 'font-extrabold',
  },
}

export type Typography = typeof typography

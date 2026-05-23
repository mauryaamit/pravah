// src/lib/utils/cn.ts
// Class name utility (like clsx/twMerge but lightweight)

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const STANDARD_LEVELS = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  accent: "accent",
  info: "info",
  neutral: "neutral",
  success: "success",
  warning: "warning",
  error: "error",
} as const

export const STANDARD_LEVELS_CLASSES = {
  [STANDARD_LEVELS.default]: "bg-default-950",
  [STANDARD_LEVELS.primary]: "bg-primary-400",
  [STANDARD_LEVELS.secondary]: "bg-secondary-400",
  [STANDARD_LEVELS.accent]: "bg-accent-500",
  [STANDARD_LEVELS.info]: "bg-info-400",
  [STANDARD_LEVELS.neutral]: "bg-neutral-950",
  [STANDARD_LEVELS.success]: "bg-success-300",
  [STANDARD_LEVELS.warning]: "bg-warning-300",
  [STANDARD_LEVELS.error]: "bg-error-400",
} as const

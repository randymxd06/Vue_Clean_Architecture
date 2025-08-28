// Types for components

// Icon component now accepts any Lucide icon name
// No need to define specific icon names anymore!
// You can use any icon from: https://lucide.dev/icons/

// Common icon names for reference (but not limited to these):
export type CommonIconNames = 
  | 'layout-dashboard'  // Use kebab-case names
  | 'folder-open'
  | 'message-circle'
  | 'calendar'
  | 'file-text'
  | 'bar-chart-3'
  | 'users'
  | 'settings'
  | 'mail'
  | 'chevron-down'
  | 'user'
  | 'log-out'
  | 'menu'
  | 'x'
  | 'home'
  | 'search'
  | 'bell'
  | 'plus'
  | 'heart'
  | 'star'
  | 'edit'
  | 'trash-2'
  | 'download'
  | 'upload'
  | 'share'
  | 'copy'
  | 'external-link'
  | 'eye'
  | 'eye-off'
  | 'lock'
  | 'unlock'
  | 'shield'
  | 'alert-circle'
  | 'check-circle'
  | 'info'
  | 'help-circle';

// The Icon component accepts any string now
export type IconName = string;

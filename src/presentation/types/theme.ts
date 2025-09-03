export interface Theme {
    id: string
    name: string
    description: string
    mode: "light" | "dark"
    colors: {
        primary: string
        secondary: string
        accent: string
    }
    preview: {
        background: string
        surface: string
        text: string
    }
}

export const AVAILABLE_THEMES: Theme[] = [
    {
        id: "light",
        name: "Claro",
        description: "Tema claro predeterminado",
        mode: "light",
        colors: {
            primary: "#3B82F6",
            secondary: "#64748B",
            accent: "#10B981",
        },
        preview: {
            background: "#FFFFFF",
            surface: "#F9FAFB",
            text: "#111827",
        },
    },
    {
        id: "dark",
        name: "Oscuro",
        description: "Tema oscuro predeterminado",
        mode: "dark",
        colors: {
            primary: "#3B82F6",
            secondary: "#64748B",
            accent: "#10B981",
        },
        preview: {
            background: "#111827",
            surface: "#1F2937",
            text: "#F3F4F6",
        },
    },
    {
        id: "emerald-light",
        name: "Esmeralda Claro",
        description: "Tema verde esmeralda en modo claro",
        mode: "light",
        colors: {
            primary: "#10B981",
            secondary: "#64748B",
            accent: "#DC2626",
        },
        preview: {
            background: "#FFFFFF",
            surface: "#ECFDF5",
            text: "#111827",
        },
    },
    {
        id: "emerald-dark",
        name: "Esmeralda Oscuro",
        description: "Tema verde esmeralda en modo oscuro",
        mode: "dark",
        colors: {
            primary: "#10B981",
            secondary: "#64748B",
            accent: "#DC2626",
        },
        preview: {
            background: "#064E3B",
            surface: "#047857",
            text: "#F3F4F6",
        },
    },
    {
        id: "purple-light",
        name: "Púrpura Claro",
        description: "Tema púrpura en modo claro",
        mode: "light",
        colors: {
            primary: "#A855F7",
            secondary: "#64748B",
            accent: "#F59E0B",
        },
        preview: {
            background: "#FFFFFF",
            surface: "#FAF5FF",
            text: "#111827",
        },
    },
    {
        id: "purple-dark",
        name: "Púrpura Oscuro",
        description: "Tema púrpura en modo oscuro",
        mode: "dark",
        colors: {
            primary: "#A855F7",
            secondary: "#64748B",
            accent: "#F59E0B",
        },
        preview: {
            background: "#581C87",
            surface: "#6B21A8",
            text: "#F3F4F6",
        },
    },
    {
        id: "rose-light",
        name: "Rosa Claro",
        description: "Tema rosa en modo claro",
        mode: "light",
        colors: {
            primary: "#F43F5E",
            secondary: "#64748B",
            accent: "#0EA5E9",
        },
        preview: {
            background: "#FFFFFF",
            surface: "#FFF1F2",
            text: "#111827",
        },
    },
    {
        id: "rose-dark",
        name: "Rosa Oscuro",
        description: "Tema rosa en modo oscuro",
        mode: "dark",
        colors: {
            primary: "#F43F5E",
            secondary: "#64748B",
            accent: "#0EA5E9",
        },
        preview: {
            background: "#881337",
            surface: "#9F1239",
            text: "#F3F4F6",
        },
    },
    {
        id: "ocean-light",
        name: "Océano Claro",
        description: "Tema azul océano en modo claro",
        mode: "light",
        colors: {
            primary: "#0EA5E9",
            secondary: "#64748B",
            accent: "#14B8A6",
        },
        preview: {
            background: "#FFFFFF",
            surface: "#F0F9FF",
            text: "#111827",
        },
    },
    {
        id: "ocean-dark",
        name: "Océano Oscuro",
        description: "Tema azul océano en modo oscuro",
        mode: "dark",
        colors: {
            primary: "#0EA5E9",
            secondary: "#64748B",
            accent: "#14B8A6",
        },
        preview: {
            background: "#0C4A6E",
            surface: "#075985",
            text: "#F3F4F6",
        },
    },
    {
        id: "sunset-light",
        name: "Atardecer Claro",
        description: "Tema naranja atardecer en modo claro",
        mode: "light",
        colors: {
            primary: "#F97316",
            secondary: "#64748B",
            accent: "#DC2626",
        },
        preview: {
            background: "#FFFFFF",
            surface: "#FFF7ED",
            text: "#111827",
        },
    },
    {
        id: "sunset-dark",
        name: "Atardecer Oscuro",
        description: "Tema naranja atardecer en modo oscuro",
        mode: "dark",
        colors: {
            primary: "#F97316",
            secondary: "#64748B",
            accent: "#DC2626",
        },
        preview: {
            background: "#7C2D12",
            surface: "#9A3412",
            text: "#F3F4F6",
        },
    },
]

export type ThemeId = (typeof AVAILABLE_THEMES)[number]["id"]

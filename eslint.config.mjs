import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    // Artefactos, dependencias y ficheros generados: nunca se lintan.
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "lib/biblioteca/data.json",
    ],
  },

  ...coreWebVitals,
  ...typescript,

  {
    // Convención del repositorio: un identificador con prefijo "_" se declara a
    // propósito sin usarse (p.ej. las fuentes de app/layout.tsx, que solo se cargan).
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  {
    // Primitivos shadcn y hooks copiados tal cual: código de terceros que no
    // mantenemos nosotros. Se lintan, pero sin las reglas que solo señalan
    // patrones heredados de la plantilla original.
    files: ["components/ui/**", "hooks/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default config;

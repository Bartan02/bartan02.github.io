import { fixupPluginRules } from "@eslint/compat";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            "@next/next": fixupPluginRules(nextPlugin),
            "react-hooks": fixupPluginRules(reactHooksPlugin),
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            "react-hooks/rules-of-hooks": "off",
            "@next/next/no-duplicate-head": "off",
            "react-hooks/exhaustive-deps": "off",
        },
    },
    {
        ignores: [
            ".next/**/*",
            "node_modules/**/*",
            "dist/**/*",
            "out/**/*",
            "public/**/*"
        ]
    },
];
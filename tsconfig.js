{
    "compilerOptions": {
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "paths": {
        "@/*": ["./src/*"]
      },
      "allowJs": true,
      "skipLibCheck": true,
      "strict": false,
      "noEmit": true,
      "incremental": true,
      "module": "esnext",
      "esModuleInterop": true,
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "plugins": [
        {
          "name": "next"
        }
      ]
    },
    "include": [
      "next-env.d.ts",
      ".next/types/**/*.ts",
      "**/*.ts",
      "**/*.tsx", 
    ],
    "exclude": [
      "node_modules"
    ]
  }
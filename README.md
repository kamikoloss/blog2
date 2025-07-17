# blog2

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 画像リサイズ方法メモ (ffmpeg)

- `ffmpeg -i input.jpg -vf scale=1280:-1 -quality <q> output.webp`
- 幅が 1280px 未満の場合は `-vf scale=1280:-1` 部分は省略する
- q: 中画質 = 75, 高画質 = 90

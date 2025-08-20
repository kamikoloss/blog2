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

## ffmpeg メモ

- `vf scale=<Width>:-1` オプションは元ファイルの幅が `<Width>` px 以下のときは省略する (拡大されてしまう)
- 画像を WebP に変換 + リサイズする
    - `ffmpeg -i input.jpg -vf scale=1280:-1 output.webp`
- 動画を WebP に変換 + リサイズする
    - `ffmpeg -i input.mp4 -vf scale=640:-1 -r 12 output.webp`
- 動画の `<Sec>` 秒時点のスクリーンショットを WebP で保存する
    - `ffmpeg -i input.mp4 -ss <Sec> -frames:v 1 output.webp`

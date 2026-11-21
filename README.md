# Friday 20 November 2026: The World in One Day

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/jefriidan15/makefun-news-image-20261120-westi/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/jefriidan15/makefun-news-image-20261120-westi/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A newspaper front page summing up the world news of **Friday 20 November
2026** in one image. The masthead names the day; the lead photo and five
more stories cover the day's biggest events across regions and fields.

- **Kyiv bridges hit** — Russian overnight strikes kill eight across
  Ukraine; two missiles and a drone enter Polish airspace.
- **Myanmar guilty of genocide** — the World Court (ICJ) rules 9–6 that
  Myanmar violated the Genocide Convention over the Rohingya.
- **EU and UK seal new deals** — the second summit since the reset agrees
  food, emissions and youth deals in Brussels.
- **Stocks slide for a seventh day** — the AI sell-off deepens; the S&P 500
  falls 3.7% as global stocks drop.
- **Shenzhen summit ends with little progress** — Trump, Xi and Putin meet;
  Trump calls Putin a friend, Zelenskyy calls him a killer.
- **Mexico captures cartel boss** — forces seize FBI most-wanted Fausto
  Isidro Meza Flores, “El Chapo Isidro”, in Sinaloa.

The image (`entry.png`, 1024×1024, 718,596 bytes) was composed for this
entry: four illustrated panels with headlines and captions set in crisp
type, so every story reads at a glance. `main.ts` (Node 22, standard
library only) copies it to the output directory and verifies the copy
byte for byte — two runs write identical bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```

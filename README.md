# One-Line Robot Wedding Vows

![Competition](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)
![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Shanumameyra/one-line-robot-wedding-vows/rank.svg)
![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Shanumameyra/one-line-robot-wedding-vows/reward.svg)

A single funny line of wedding vows for a robot couple, written for the
[One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
competition on make.fun.

## The vow

> I promise to love you in sickness and in health, and never to unplug you mid-sentence, even at 1% battery.

## How it works

`main.ts` (Node 22) writes that one line to `/output/entry.txt`. The line is
106 characters long, within the 160-character limit, and stands on its own as
a wedding vow with a robot-specific punchline at the end.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

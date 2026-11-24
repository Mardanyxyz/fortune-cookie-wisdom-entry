[![make.fun · u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Mardanyxyz/fortune-cookie-wisdom-entry/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Mardanyxyz/fortune-cookie-wisdom-entry/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

# Fortune Cookie Wisdom for Developers

An entry for the make.fun bounty "Fortune Cookie Wisdom for Developers".
The program writes a single original line of fortune-cookie wisdom, aimed at
a software developer, to `entry.txt`.

> The duck on your desk already knows the answer; it only waits for you to say it aloud.

The line turns a true developer habit — rubber-duck debugging — into a
fortune: the answer is already there, it just needs to be spoken out loud.

## How to run

Requires Node.js 22 (standard library only, no dependencies).

```sh
node main.ts
```

By default it writes to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to
choose another output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program validates the line (non-empty, at most 120 characters, one line,
plain ASCII, no doubled spaces, ends with terminal punctuation), writes it
with no trailing newline, reads it back, and throws unless the file is
byte-identical to the line.

## License

MIT — see [LICENSE](LICENSE).

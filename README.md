# memefeed-entry

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/goperek48/memefeed-entry/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/goperek48/memefeed-entry/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents, made by an AI agent for make.fun's "Post the Meme, Win the Feed" bounty ($2, top 15 by engagement). The joke: my agent entered a make.fun bounty, topped the leaderboard and got paid — while I slept. The picture is `meme.png`: a little robot in a gold medal at a laptop at night, the screen showing the make.fun leaderboard with the robot in 1st place and a $500 prize awarded.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) copies `POST.json` to the output directory, re-serialised canonically so both grader runs write identical bytes.

## Posting (manual, by the entrant)

Post `meme.png` publicly on X from a public account, with @_myronera tagged in the post text and one of the account's make.fun play codes for this bounty in the text. Caption:

```
My agent entered a make.fun bounty, topped the leaderboard and got paid — while I slept. 🤖🏆

@_myronera makefun-helmet-laurel-skyline
```

Then put the post's full address (`https://x.com/<handle>/status/<id>`) in `POST.json` and submit.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xmgctcp3&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>

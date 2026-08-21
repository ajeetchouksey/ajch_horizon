You already know AI learns from examples instead of exact rules. But *how* does that actually happen? This is the "training" story — and it's a lot more like practicing free throws than programming a calculator.

## The 1,000-cat-photos story

Imagine you want to teach a computer to recognize cats. Here's roughly what happens:

1. **Show it examples.** You feed it thousands of photos, each labeled "cat" or "not a cat."
2. **Let it guess.** At first, the computer's guesses are basically random — it hasn't learned anything yet.
3. **Tell it when it's wrong.** Every time it guesses, you compare its answer to the real label. Right or wrong gets recorded.
4. **Nudge it to do better.** The computer slightly adjusts itself — the actual math changes a tiny bit — to make similar mistakes less likely next time.
5. **Repeat. A lot.** Thousands, sometimes millions, of rounds of guess → check → nudge.

By the end, the computer hasn't memorized the exact 1,000 photos — it's found general patterns (fur texture, ear shape, whisker placement) that show up across *many* cat photos. That's what lets it make a reasonable guess about a cat photo it's never seen before.

## A human comparison

This is a lot like learning to shoot free throws. Nobody hands you a rulebook of exact arm angles. You shoot, miss, notice what felt off, adjust, and shoot again — hundreds of times — until your body has "learned" the pattern of a good shot, even though you couldn't write down the exact physics formula for it.

AI training is that same loop — guess, check, adjust, repeat — just done by a computer, at a scale no human could manage by hand.

## Why more examples usually means better guesses

If you only showed the computer 10 cat photos, it might latch onto something weirdly specific — like "cats are always photographed on beige carpets" — because that pattern happened to be true in your tiny example set. With thousands of *varied* examples (different breeds, colors, backgrounds, lighting), the real cat-shaped patterns rise to the top, and the accidental ones (like carpet color) wash out.

This is also exactly why AI can get things wrong in surprising ways: if its training examples were missing something — a certain skin tone, a certain accent, a certain kind of question — it never got the chance to learn the pattern for it.

> **Quick check:** If an AI was only ever trained on photos of cats sitting still, do you think it would do a good job recognizing a cat mid-jump? What's missing from its training examples that might trip it up?

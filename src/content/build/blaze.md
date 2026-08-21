Two projects for Blaze (ages 14–16) that go a level deeper — real Python code and a genuine ethics-in-design exercise.

## Project 1: Build a Quiz Bot with Python + a Real API

A beginner-friendly intro to calling a real API from Python code.

**What you need:** a Python environment (a free tool like [replit.com](https://replit.com) works well and needs no install), and about an hour.

**Steps:**
1. Pick a topic for your quiz bot (space facts, your favorite game, history — anything).
2. Write a Python list of at least 5 question/answer pairs as dictionaries, e.g. `{"question": "...", "answer": "..."}`.
3. Write a loop that asks each question with `input()`, compares the typed answer to the correct one (case-insensitively — `str.lower()` is your friend), and keeps score.
4. Once the basic quiz works, look up a free, no-signup trivia API (like Open Trivia DB) and use Python's `requests` library to fetch a real question from the internet instead of your hardcoded list.
5. Print the final score with a message that changes based on how well the player did.

**What you're learning:** the fundamentals of calling a real web API from code — sending a request, getting back structured data (usually JSON), and using it in your program. This is the same basic pattern professional software uses to talk to AI APIs.

## Project 2: Ethics-in-Design Challenge

A thinking exercise, not a coding one — practice spotting the ethical questions *before* a feature ships, which is exactly what real AI teams have to do.

**Steps:**
1. Pick a real or invented AI feature — for example, "an AI that recommends which students get extra tutoring help."
2. Write down who benefits from this feature, and who could be harmed by it if it goes wrong.
3. Ask: what data would this AI need to be trained on? Could that data be missing important groups of people, the way you learned about in "How machines learn"?
4. Ask: what happens if the AI is *confidently wrong* about a specific student? Who notices, and who's responsible for fixing it?
5. Write one concrete design change that would make the feature safer or fairer — for example, "a teacher reviews the AI's recommendation before it's final, instead of it being automatic."
6. Optional: repeat the exercise with a feature you actually use, like a content recommender or a grading tool.

**What you're learning:** that responsible AI design isn't an afterthought — it's a set of specific questions (who benefits, who's at risk, what data is missing, who's accountable) that need to be asked *before* something is built, not just after something goes wrong.

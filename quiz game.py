#python quiz game

questions =("how many elements are in the periodic table?:"
            " which animal lays the largest egg?:",
            "what is the most abundunt gas in the earth's atmosphere?:",
            "howmany bones are inthe human body?:",
            "which planet in the solar system is the hottest?:.")

options = (("A. 116","B.117","C.118","D.119"),
          ("A. whale","B.crocodile ","C.elephant","D.ostrich"),
          ("A. nitrogen","B. oxygen","C. carbondioxied","D. htydrogen"),
          ("A.206","B. 207","C. 208","D. 209"),
          ("A. mercury","B. venus","C. earth","D. mars"))

answers = ("C", "D", "A", "A","B")
gueses = []
score = 0
question_num = 0

for question in questions:
    print("-----------")
    print(question)
    for option in options[question_num]:
        print(option)

    guess = input("enter (A,B,C,D): ").upper()
    gueses.append(guess)
    if guess == answers[question_num]:
        score+= 1
        print("correct!")
    else:
        print("incorrect!")
        print(f"{answers[question_num]} is the correct answer")

    question_num+= 1


print("-----------------")
print("     RESULTS     ")
print("-----------------")

print("answers:", end="")
for answer in answers:
    print(answer,end=" ")
print()

print("gueses:", end="")
for guess in gueses:
    print(guess,end=" ")
print()

score = int(score/len(questions)*100)
print(f"your score is {score}%")
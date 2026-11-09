const questionsData = [
  {
    "id": 1,
    "question": "We visited our relatives (　　) we were on vacation.",
    "choices": [
      "①what",
      "②while",
      "③how",
      "④during"
    ],
    "answer": "②while",
    "explanation": "whileは節(S+V)を従える接続詞で、「〜している間に」という意味を表します。duringは前置詞なので名詞句を従えます。"
  },
  {
    "id": 2,
    "question": "(　　) she is only 16 years old, she seems very mature for her age.",
    "choices": [
      "①Because of",
      "②Even though",
      "③In spite of",
      "④Why"
    ],
    "answer": "②Even though",
    "explanation": "Even thoughは接続詞で「〜にもかかわらず」という意味の譲歩節を導きます。Because ofとIn spite ofは前置詞句です。"
  },
  {
    "id": 3,
    "question": "This plant only lives for a year, (　　) new seeds must be planted every year.",
    "choices": [
      "①before",
      "②after",
      "③so",
      "④while"
    ],
    "answer": "③so",
    "explanation": "「だから／したがって」という結果・結論を表す等位接続詞soが適当です。"
  },
  {
    "id": 4,
    "question": "(　　) had she sat down when the phone rang.",
    "choices": [
      "①Once",
      "②Never",
      "③Hardly",
      "④Almost"
    ],
    "answer": "③Hardly",
    "explanation": "Hardly ... when ~「…するかしないうちに〜した」の倒置構文です。Had she sat downと倒置が起こっています。"
  },
  {
    "id": 5,
    "question": "Not only does he write novels (　　) he draws illustrations.",
    "choices": [
      "①but",
      "②except",
      "③if",
      "④that"
    ],
    "answer": "①but",
    "explanation": "Not only A but (also) B「AだけでなくBも」の構文です。alsoが省略されています。"
  },
  {
    "id": 6,
    "question": "(　　) she tries, she will not be able to convince her friend.",
    "choices": [
      "①As though",
      "②Even if",
      "③How much",
      "④Nevertheless"
    ],
    "answer": "②Even if",
    "explanation": "Even if...「たとえ〜だとしても」という仮定の譲歩節を導く接続詞です。"
  },
  {
    "id": 7,
    "question": "He had (　　) gone to sleep when the doorbell rang.",
    "choices": [
      "①never",
      "②forever",
      "③faintly",
      "④scarcely"
    ],
    "answer": "④scarcely",
    "explanation": "had scarcely + 過去分詞 ... when ~「…するかしないうちに〜した」の構文です。"
  },
  {
    "id": 8,
    "question": "(　　) a child, it's not necessary for you to pay.",
    "choices": [
      "①For you are",
      "②Since you are",
      "③If you are",
      "④Though you are"
    ],
    "answer": "②Since you are",
    "explanation": "「〜なので」という理由を表す接続詞Sinceが適当です（Since you are a child...）。"
  },
  {
    "id": 9,
    "question": "I have not read the book, (　　) do I want to.",
    "choices": [
      "①but",
      "②then",
      "③nor",
      "④so"
    ],
    "answer": "③nor",
    "explanation": "「〜もまた…ない」を表す接続詞norです。後ろは否定語の前置に伴い V + S (do I want) の倒置形になります。"
  },
  {
    "id": 10,
    "question": "The building has deteriorated to (　　) an extent that it will have to be torn down soon.",
    "choices": [
      "①what",
      "②such",
      "③much",
      "④how"
    ],
    "answer": "②such",
    "explanation": "such an extent that...「〜するほどの程度まで」の構文です。such a(n) + 名詞 + that...の形です。"
  },
  {
    "id": 11,
    "question": "We sat up all night worrying lest (　　) by the troops.",
    "choices": [
      "①he has been captured",
      "②he were to be captured",
      "③had he been captured",
      "④he be captured"
    ],
    "answer": "④he be captured",
    "explanation": "lest S (should) V「SがVしないように／SがVすることを恐れて」の構文です。shouldが省略されると動詞の原形（be captured）になります。"
  },
  {
    "id": 12,
    "question": "(　　) we went up the mountain, the air became thinner.",
    "choices": [
      "①As",
      "②During",
      "③When",
      "④Since"
    ],
    "answer": "①As",
    "explanation": "As...で「〜につれて」という比例・変化を表す接続詞です。"
  },
  {
    "id": 13,
    "question": "It will not be long (　　) he gets well again.",
    "choices": [
      "①after",
      "②before",
      "③since",
      "④until"
    ],
    "answer": "②before",
    "explanation": "It will not be long before S V...「まもなくSはVするだろう」の決まり文句です。"
  },
  {
    "id": 14,
    "question": "(　　) at home or at school, parents expected boys and girls to be good.",
    "choices": [
      "①During",
      "②Despite",
      "③Whether",
      "④Although"
    ],
    "answer": "③Whether",
    "explanation": "Whether A or B「AであろうとBであろうと」の副詞節で、(Whether they were) at home or... の主語+be動詞が省略された形です。"
  },
  {
    "id": 15,
    "question": "(　　) if I run all day, I never seem to lose weight.",
    "choices": [
      "①However",
      "②Although",
      "③But",
      "④Even"
    ],
    "answer": "④Even",
    "explanation": "Even if...で「たとえ〜だとしても」という譲歩を表します。"
  },
  {
    "id": 16,
    "question": "Ichiro thanked Ms. Ogawa (　　) she drove him to the airport.",
    "choices": [
      "①despite",
      "②because",
      "③unless",
      "④whether"
    ],
    "answer": "②because",
    "explanation": "「〜だから／〜という理由で」を表す理由の接続詞becauseが適当です。"
  },
  {
    "id": 17,
    "question": "(　　) was his talent that he was selected at the age of 12 to play for the Queen.",
    "choices": [
      "①It",
      "②Such",
      "③That",
      "④Which"
    ],
    "answer": "②Such",
    "explanation": "Such is/was + S + that...「Sは大変なものだったので…」という強調の倒置構文です。"
  },
  {
    "id": 18,
    "question": "Hurry up, (　　) you will be late for class.",
    "choices": [
      "①and",
      "②or",
      "③but",
      "④so"
    ],
    "answer": "②or",
    "explanation": "命令文 + , or ...「〜しなさい、さもなければ…」を表します。"
  },
  {
    "id": 19,
    "question": "I wrote down her telephone number (　　) I forgot it.",
    "choices": [
      "①in case",
      "②so that",
      "③unless",
      "④when"
    ],
    "answer": "①in case",
    "explanation": "in case S V「SがVするといけないから／SがVする場合に備えて」を表す接続詞です。"
  },
  {
    "id": 20,
    "question": "(　　) it were true, nothing would be different.",
    "choices": [
      "①Supposing",
      "②Doing",
      "③Being",
      "④Having"
    ],
    "answer": "①Supposing",
    "explanation": "Supposing (that)...「仮に〜だとしたら」という仮定を表す接続詞（分詞構文由来）です。"
  },
  {
    "id": 21,
    "question": "(　　) I started university, I'd never had a part time job.",
    "choices": [
      "①Thus",
      "②At the same time",
      "③Previously",
      "④Before"
    ],
    "answer": "④Before",
    "explanation": "Before S V「〜する前は」という時を表す接続詞です。過去完了形句とともに用いられています。"
  },
  {
    "id": 22,
    "question": "It's not very cold in Kanazawa (　　) we do have snow.",
    "choices": [
      "①although",
      "②as",
      "③because",
      "④even"
    ],
    "answer": "①although",
    "explanation": "although「〜だけれども」という逆接・譲歩の接続詞です。"
  },
  {
    "id": 23,
    "question": "(　　) that you mention it, I do remember.",
    "choices": [
      "①Since",
      "②Now",
      "③Because",
      "④Once"
    ],
    "answer": "②Now",
    "explanation": "Now that S V「今や〜なのだから」という理由・背景を表す接続詞です。"
  },
  {
    "id": 24,
    "question": "(　　) that you are a college student, you ought to know better.",
    "choices": [
      "①After",
      "②In order",
      "③Now",
      "④So"
    ],
    "answer": "③Now",
    "explanation": "Now that S V「今や〜なのだから」を表します。"
  },
  {
    "id": 25,
    "question": "This game is easy, (　　) you learn the basic rules.",
    "choices": [
      "①with all",
      "②even if",
      "③once",
      "④unless"
    ],
    "answer": "③once",
    "explanation": "接続詞onceは「ひとたび〜すれば／いったん〜すると」という意味を表します。"
  },
  {
    "id": 26,
    "question": "The waiter asked me (　　) I would like some coffee.",
    "choices": [
      "①if",
      "②that",
      "③what",
      "④which"
    ],
    "answer": "①if",
    "explanation": "ask + 人 + if/whether...で「人に〜かどうか尋ねる」となります。"
  },
  {
    "id": 27,
    "question": "Jennifer is concerned because her girls want to play video games (　　) day and night.",
    "choices": [
      "①at",
      "②both",
      "③during",
      "④for"
    ],
    "answer": "②both",
    "explanation": "both A and B「AもBも両方」の相関接続詞です（both day and night: 昼も夜も）。"
  },
  {
    "id": 28,
    "question": "Don't fall asleep, (　　) you will miss the next bus stop.",
    "choices": [
      "①or",
      "②and",
      "③so",
      "④though"
    ],
    "answer": "①or",
    "explanation": "命令文＋, or ...「〜するな、さもないと…」の構文です。"
  },
  {
    "id": 29,
    "question": "There seems to have been an earthquake (　　) I was asleep.",
    "choices": [
      "①during",
      "②through",
      "③while",
      "④within"
    ],
    "answer": "③while",
    "explanation": "whileは節(S+V: I was asleep)を導く接続詞です。"
  },
  {
    "id": 30,
    "question": "I'll never forget your kindness as (　　) as I live.",
    "choices": [
      "①far",
      "②long",
      "③soon",
      "④much"
    ],
    "answer": "②long",
    "explanation": "as long as S V「〜する限りは（時間的継続）」を表す接続詞表現です。"
  },
  {
    "id": 31,
    "question": "The fact (　　) a man lives next door to me does not mean he is my friend.",
    "choices": [
      "①if",
      "②of",
      "③that",
      "④which"
    ],
    "answer": "③that",
    "explanation": "The fact that...「〜という事実」と同格節を導く接続詞thatです。"
  },
  {
    "id": 32,
    "question": "My hotel bed was (　　) uncomfortable that my back hurts this morning.",
    "choices": [
      "①as",
      "②such",
      "③too",
      "④so"
    ],
    "answer": "④so",
    "explanation": "so + 形容詞 + that...「非常に〜なので…」の程度・結果を表す構文です。"
  },
  {
    "id": 33,
    "question": "The given name Naomi is ambiguous (　) the person may be either male or female.",
    "choices": [
      "①in that",
      "②in so much",
      "③far as",
      "④as long as"
    ],
    "answer": "①in that",
    "explanation": "in that S V「〜という点において／〜なので」という理由・根拠を表す接続詞です。"
  },
  {
    "id": 34,
    "question": "I'll tell you my secret on the (　　) that you promise not to tell anyone else.",
    "choices": [
      "①ambition",
      "②intention",
      "③distinction",
      "④condition"
    ],
    "answer": "④condition",
    "explanation": "on condition that S V「〜という条件で」という意味の接続詞表現です。"
  },
  {
    "id": 35,
    "question": "The man was smart (　　) unkind.",
    "choices": [
      "①because",
      "②but",
      "③for",
      "④so"
    ],
    "answer": "②but",
    "explanation": "smart と unkind という相反する形容詞を結ぶ等位接続詞but「しかし」が適当です。"
  },
  {
    "id": 36,
    "question": "Please leave my desk (　　) it is.",
    "choices": [
      "①on",
      "②so",
      "③as",
      "④which"
    ],
    "answer": "③as",
    "explanation": "as it is で「あるがままに／そのままに」という意味を表す接続詞用法です。"
  },
  {
    "id": 37,
    "question": "(　　) say you're sorry or you'll be fired.",
    "choices": [
      "①If you",
      "②So that",
      "③Either",
      "④Because not"
    ],
    "answer": "③Either",
    "explanation": "Either A or B「AかBのどちらか」の構文です（Either say... or you'll...）。"
  },
  {
    "id": 38,
    "question": "Tatsuya went home early today (　{0}　) he could prepare dinner for his wife.",
    "choices": [
      "①so that",
      "②as for",
      "③as such",
      "④in order to"
    ],
    "answer": "①so that",
    "explanation": "so that S can/could V「SがVできるように」という目的を表す接続詞です。"
  },
  {
    "id": 39,
    "question": "I'll give him the message (　　) he arrives.",
    "choices": [
      "①soon",
      "②as soon",
      "③as soon as",
      "④soon than"
    ],
    "answer": "③as soon as",
    "explanation": "as soon as S V「SがVするとすぐに」という時を表す接続詞です。"
  },
  {
    "id": 40,
    "question": "You must finish your task by tomorrow (　　) you like it or not.",
    "choices": [
      "①when",
      "②either",
      "③until",
      "④whether"
    ],
    "answer": "④whether",
    "explanation": "whether A or not / whether A or B「Aであろうとなかろうと」の副詞節を導きます。"
  },
  {
    "id": 41,
    "question": "Miss Jones is not a pianist (　　) a violinist.",
    "choices": [
      "①but",
      "②and",
      "③that",
      "④for"
    ],
    "answer": "①but",
    "explanation": "not A but B「AではなくB」の構文です。"
  },
  {
    "id": 42,
    "question": "Had my daughter done (　　) I told her, she wouldn't have failed the exam.",
    "choices": [
      "①why",
      "②which",
      "③as",
      "④that"
    ],
    "answer": "③as",
    "explanation": "as S V「SがVしたように／指示通りに」を表す様態の接続詞です。"
  },
  {
    "id": 43,
    "question": "Tom has lived here (　　) he was a child.",
    "choices": [
      "①before",
      "②for",
      "③since",
      "④when"
    ],
    "answer": "③since",
    "explanation": "現在完了形とともに用いて「〜以来ずっと」を表す接続詞sinceです。"
  },
  {
    "id": 44,
    "question": "We won't be getting married (　{0}　) we've saved enough money.",
    "choices": [
      "①as",
      "②if",
      "③while",
      "④until"
    ],
    "answer": "④until",
    "explanation": "not ... until ~「〜するまで…しない／〜して初めて…する」の構文です。"
  },
  {
    "id": 45,
    "question": "(　　) to the right, and you will find the building you are looking for.",
    "choices": [
      "①To turn",
      "②Turning",
      "③Turn",
      "④Turned"
    ],
    "answer": "③Turn",
    "explanation": "命令文 + , and ...「〜しなさい、そうすれば…」の構文です。動詞の原形Turnが入ります。"
  },
  {
    "id": 46,
    "question": "The show had started (　　) we got there.",
    "choices": [
      "①until",
      "②by the time",
      "③after the time",
      "④on the time"
    ],
    "answer": "②by the time",
    "explanation": "by the time S V「SがVする時までに（はすでに）」という期限・完了を表す接続詞表現です。"
  },
  {
    "id": 47,
    "question": "Don't touch my writing-table; leave it (　{0}　) it is.",
    "choices": [
      "①as",
      "②if",
      "③that",
      "④when"
    ],
    "answer": "①as",
    "explanation": "leave A as it is で「Aをそのままにしておく」の慣用表現です。"
  },
  {
    "id": 48,
    "question": "(　　) we start to take care of the environment, we will leave many problems for future generations.",
    "choices": [
      "①Unless",
      "②Although",
      "③If",
      "④However"
    ],
    "answer": "①Unless",
    "explanation": "Unless...「〜しない限りは／もし〜なければ（＝if not）」を表す条件節の接続詞です。"
  },
  {
    "id": 49,
    "question": "I was driving home from work one night (　　) I heard the most remarkable news on the radio.",
    "choices": [
      "①as if",
      "②during",
      "③since",
      "④when"
    ],
    "answer": "④when",
    "explanation": "was/were -ing ... when ~「〜していたところ、その時〜した」という進行中の動作への割り込みを表すwhenです。"
  },
  {
    "id": 50,
    "question": "I would prefer to go by bus, (　　) the roads aren't crowded.",
    "choices": [
      "①considered",
      "②decided",
      "③provided",
      "④supposed"
    ],
    "answer": "③provided",
    "explanation": "provided (that) S V「〜という条件で／もし〜ならば」を表す接続詞表現（分詞由来）です。"
  },
  {
    "id": 51,
    "question": "Any book will do as (　　) as it is instructive.",
    "choices": [
      "①long",
      "②hard",
      "③possible",
      "④many"
    ],
    "answer": "①long",
    "explanation": "as long as S V「〜でありさえすれば（条件）」を表す接続詞表現です。"
  },
  {
    "id": 52,
    "question": "No sooner had Mary come home (　　) she began feeding the cat.",
    "choices": [
      "①where",
      "②than",
      "③before",
      "④more"
    ],
    "answer": "②than",
    "explanation": "No sooner had + S + 過去分詞 + than + S + 過去形「Sが〜するやいなや…した」の構文です。"
  },
  {
    "id": 53,
    "question": "Neither Takeshi's mother (　{0}　) English.",
    "choices": [
      "①or his father speak",
      "②and his father speak",
      "③nor his father speaks",
      "④either his father speaks"
    ],
    "answer": "③nor his father speaks",
    "explanation": "Neither A nor B で「AもBも〜ない」となります。主語はB（his father: 単数）に一致させるため、動詞はspeaksとなります。"
  },
  {
    "id": 54,
    "question": "I like my teacher (　　) he treats us fairly.",
    "choices": [
      "①that",
      "②which",
      "③in that",
      "④in which"
    ],
    "answer": "③in that",
    "explanation": "in that S V「〜という点において／〜なので」という理由・根拠を表す接続詞です。"
  },
  {
    "id": 55,
    "question": "(　　) you talk with him, you'll find he is a funny man.",
    "choices": [
      "①Once",
      "②However",
      "③Since",
      "④Though"
    ],
    "answer": "①Once",
    "explanation": "Once S V「いったん〜すれば／ひとたび〜すると」を表す接続詞です。"
  },
  {
    "id": 56,
    "question": "No sooner had he seen the bear than he lay down. ＝ (　　) he met the bear, he lay down.",
    "choices": [
      "①At once",
      "②The moment",
      "③Unless",
      "④Though"
    ],
    "answer": "②The moment",
    "explanation": "No sooner ... than 〜 は The moment S V...（〜した瞬間に）と言い換えられます。"
  },
  {
    "id": 57,
    "question": "He ( A ) outside Japan as ( B ). He doesn't even have a passport yet.",
    "choices": [
      "①(A) has never been / (B) far as I know",
      "②(A) doesn't go / (B) I am understanding",
      "③(A) has never experienced / (B) I heard",
      "④(A) never was gone / (B) much I listen"
    ],
    "answer": "①(A) has never been / (B) far as I know",
    "explanation": "as far as I know「私の知る限りでは」という範囲を表す接続詞表現と、have been to...「〜へ行ったことがある」の否定（has never been）の組み合わせです。"
  },
  {
    "id": 58,
    "question": "The meeting will be put off until the boss can be present.",
    "choices": [
      "①It is expected that the boss will come and start the meeting.",
      "②The meeting will be postponed to a time when the boss is able to attend.",
      "③The meeting will continue as long as the boss is there.",
      "④When the boss arrives, the meeting will be stopped."
    ],
    "answer": "②The meeting will be postponed to a time when the boss is able to attend.",
    "explanation": "put off until...（〜まで延期される）は postponed to a time when...（〜できる時間まで延期される）と同義です。"
  },
  {
    "id": 59,
    "question": "He has to speak louder, so everyone can hear him.",
    "choices": [
      "①He should listen to what everyone else thinks.",
      "②Not everybody is going to agree with what he says.",
      "③Everybody is ready to listen to what he is going to say.",
      "④He has to talk louder, otherwise people will not be able to hear him."
    ],
    "answer": "④He has to talk louder, otherwise people will not be able to hear him.",
    "explanation": "so S can...「Sが〜できるように」の文は、「大声で話さなければならない、さもないと(otherwise)聞こえない」と同義になります。"
  },
  {
    "id": 60,
    "question": "The children did ①not realize ②so that ③a thief ④was standing ⑤right behind them. （不要な1語）",
    "choices": [
      "①not",
      "②so that",
      "③a thief",
      "⑤right behind"
    ],
    "answer": "②②so that",
    "explanation": "realizeの目的語となるthat節を導く接続詞thatで十分であり、目的を表すso thatのsoは不要です（soを削除してthatのみにする）。"
  },
  {
    "id": 61,
    "question": "Scarcely had the president finished his presentation (　　) the audience erupted into applause.",
    "choices": [
      "①than",
      "②before",
      "③after",
      "④then"
    ],
    "answer": "②before",
    "explanation": "Scarcely [Hardly] had S + 過去分詞 ... before [when] ~「Sが…するやいなや〜した」の難関定番構文です。"
  },
  {
    "id": 62,
    "question": "(　　) all the evidence points to his guilt, the jury was unable to reach a unanimous verdict.",
    "choices": [
      "①Granted that",
      "②For fear that",
      "③On condition that",
      "④In proportion as"
    ],
    "answer": "①Granted that",
    "explanation": "Granted (that) S V...「仮に〜だとしても／確かに〜ではあるが」という譲歩を表す発展接続詞表現です。"
  },
  {
    "id": 63,
    "question": "The policy will remain in force (　　) revised or repealed by the board of directors.",
    "choices": [
      "①until",
      "②unless",
      "③whereas",
      "④seeing that"
    ],
    "answer": "②unless",
    "explanation": "unless (it is) revised or repealed... 主語とbe動詞が省略された関係で「取締役会によって改定または撤廃されない限り」を意味します。"
  },
  {
    "id": 64,
    "question": "He agreed to take on the hazardous mission, (　　) he were given full authority over the team.",
    "choices": [
      "①provided that",
      "②as though",
      "③in case",
      "④for fear that"
    ],
    "answer": "①provided that",
    "explanation": "provided (that) S V「〜という条件で／もし〜ならば（＝if）」を表します。"
  },
  {
    "id": 65,
    "question": "The prices of raw materials have skyrocketed; (　　), the manufacturing costs have increased sharply.",
    "choices": [
      "①consequently",
      "②nevertheless",
      "③conversely",
      "④notwithstanding"
    ],
    "answer": "①consequently",
    "explanation": "consequently「その結果として／したがって」という文接続の副詞です。前文の理由を受けて結果を述べる接続詞的働きをします。"
  },
  {
    "id": 66,
    "question": "He saved a portion of his monthly salary (　　) he should encounter unexpected medical expenses.",
    "choices": [
      "①so that",
      "②lest",
      "③in order that",
      "④for fear that"
    ],
    "answer": "④for fear that",
    "explanation": "for fear that S (should) V / lest S (should) V「SがVするといけないので／Vすることを恐れて」を表します。in order that / so that は「〜するために」。"
  },
  {
    "id": 67,
    "question": "Small and medium-sized enterprises are struggling, (　　) multinational corporations are reaping record profits.",
    "choices": [
      "①whereas",
      "②so long as",
      "③in that",
      "④as far as"
    ],
    "answer": "①whereas",
    "explanation": "whereas「〜であるのに対して／〜の一方で」という強い対比を表す接続詞です。"
  },
  {
    "id": 68,
    "question": "(　　) that the candidate lacks international experience, his strong leadership in domestic crisis management makes him a formidable contender.",
    "choices": [
      "①Allowing",
      "②Seeing",
      "③Assuming",
      "④Given"
    ],
    "answer": "④Given",
    "explanation": "Given that S V「〜であることを考慮すると／〜を踏まえると」という前提・条件を表す超頻出構文です。"
  },
  {
    "id": 69,
    "question": "The negotiation continued late into the night, (　　) no final agreement was reached.",
    "choices": [
      "①save that",
      "②except that",
      "③only that",
      "④but that"
    ],
    "answer": "③only that",
    "explanation": "only that...「ただ〜ということ除いては／ただ〜だが」という条件・制限の接続詞表現です（except thatとも近いですが語節のつながりに注意）。"
  },
  {
    "id": 70,
    "question": "The CEO made it clear that the merger would proceed (　　) the stock market crashed.",
    "choices": [
      "①save if",
      "②even though",
      "③unless",
      "④barring that"
    ],
    "answer": "③unless",
    "explanation": "unless「〜でない限りは」という条件節です。「株式市場が暴落しない限りは合併を進める」。"
  },
  {
    "id": 71,
    "question": "(　　) had the referee blown the whistle than the home fans invaded the pitch.",
    "choices": [
      "①No sooner",
      "②Hardly",
      "③Scarcely",
      "④Barely"
    ],
    "answer": "①No sooner",
    "explanation": "No sooner had S + 過去分詞 + than ...「〜するやいなや…」の過去完了倒置構文です。thanと連動するのはNo soonerのみです。"
  },
  {
    "id": 72,
    "question": "The new algorithm is highly efficient (　　) it drastically reduces computation time.",
    "choices": [
      "①in that",
      "②in case",
      "③so far as",
      "④as long as"
    ],
    "answer": "①in that",
    "explanation": "in that S V「〜という点において／〜なので」という根拠・説明を添える接続詞です。"
  },
  {
    "id": 73,
    "question": "He was determined to complete the dissertation, (　　) long it might take him.",
    "choices": [
      "①however",
      "②whatever",
      "③no matter",
      "④whichever"
    ],
    "answer": "①however",
    "explanation": "however + 形容詞/副詞 + S + V「たとえどんなに〜でも（＝no matter how）」という複合関係副詞の譲歩節です。"
  },
  {
    "id": 74,
    "question": "She double-checked all the legal documents (　　) there should be any loophole.",
    "choices": [
      "①in case",
      "②for fear",
      "③so that",
      "④on condition that"
    ],
    "answer": "①in case",
    "explanation": "in case S (should) V「万一〜するといけないから／〜する場合に備えて」を表します。"
  },
  {
    "id": 75,
    "question": "Rich (　　) he was, he lived a simple and frugal life in a small town.",
    "choices": [
      "①as",
      "②though",
      "③like",
      "④for"
    ],
    "answer": "①as",
    "explanation": "形容詞 + as [though] + S + V「〜だけれども」という譲歩の倒置構文です（Rich as he was = Though he was rich）。"
  },
  {
    "id": 76,
    "question": "You may leave the venue early (　　) you submit your evaluation form beforehand.",
    "choices": [
      "①so far as",
      "②as long as",
      "③so much as",
      "④as well as"
    ],
    "answer": "②as long as",
    "explanation": "as long as S V「〜でありさえすれば（条件＝provided that）」を表します。"
  },
  {
    "id": 77,
    "question": "The treaty was signed by both nations, (　　) it would take effect early next year.",
    "choices": [
      "①whereby",
      "②whereupon",
      "③whereof",
      "④wherein"
    ],
    "answer": "②whereupon",
    "explanation": "whereupon S V「それを受けてすぐに／そこで」という継続・結果を表す関係副詞/接続詞的表現です。"
  },
  {
    "id": 78,
    "question": "It matters little whether he succeeds or fails, (　　) he does his absolute best.",
    "choices": [
      "①so long as",
      "②so far as",
      "③in proportion as",
      "④insomuch as"
    ],
    "answer": "①so long as",
    "explanation": "so long as S V「〜でありさえすれば」という条件を表します。"
  },
  {
    "id": 79,
    "question": "He acted (　　) he knew all the confidential secrets of the firm.",
    "choices": [
      "①as if",
      "②as for",
      "③as to",
      "④as though as"
    ],
    "answer": "①as if",
    "explanation": "as if [as though] S V「まるで〜かのように」という様態・仮定を表す接続詞です。"
  },
  {
    "id": 80,
    "question": "(　　) that the severe storm caused widespread power outages, the event was postponed indefinitely.",
    "choices": [
      "①Seeing",
      "②Looking",
      "③Thinking",
      "④Regarding"
    ],
    "answer": "①Seeing",
    "explanation": "Seeing that S V「〜なのだから／〜という理由で（＝Since / Considering that）」を表す理由の接続詞表現です。"
  },
  {
    "id": 81,
    "question": "No sooner had the curtain fallen (　　) the audience stood up and cheered wildly.",
    "choices": [
      "①when",
      "②than",
      "③before",
      "④then"
    ],
    "answer": "②than",
    "explanation": "No sooner ... than ... の比較級構文に対応する接続詞thanが正解です。"
  },
  {
    "id": 82,
    "question": "He would have accepted the proposal (　　) that he had been informed of the risks earlier.",
    "choices": [
      "①but",
      "②save",
      "③except",
      "④only"
    ],
    "answer": "①but",
    "explanation": "but that S V「〜でなかったら／〜ということがなければ（＝if it had not been that...）」という仮定法・条件の発展表現です。"
  },
  {
    "id": 83,
    "question": "The dispute was resolved peacefully, (　　) both parties were willing to compromise.",
    "choices": [
      "①for",
      "②so",
      "③or",
      "④nor"
    ],
    "answer": "①for",
    "explanation": "等位接続詞forは「というのも〜だからだ」と前言に対する補足的・判断の根拠理由を後から付け加えます。"
  },
  {
    "id": 84,
    "question": "(　　) I am concerned, the proposed budget is completely unacceptable.",
    "choices": [
      "①As far as",
      "②As long as",
      "③In so far",
      "④As much as"
    ],
    "answer": "①As far as",
    "explanation": "As far as S is concerned「Sに関する限りでは（範囲）」という超頻出表現です。"
  },
  {
    "id": 85,
    "question": "The criminal escaped from the high-security prison, (　　) no one knows how.",
    "choices": [
      "①though",
      "②despite",
      "③while",
      "④unless"
    ],
    "answer": "①though",
    "explanation": "文末・文中に挿入される接続詞/副詞のthoughで「〜だが／しかしながら」という意味を表します。"
  },
  {
    "id": 86,
    "question": "He works out at the gym every single day, (　　) his brother rarely exercises.",
    "choices": [
      "①whereas",
      "②unless",
      "③in case",
      "④supposing"
    ],
    "answer": "①whereas",
    "explanation": "whereas「〜であるのに対して」と対比を鮮明にする接続詞です。"
  },
  {
    "id": 87,
    "question": "The suspect maintained his innocence (　　) presented with overwhelming evidence.",
    "choices": [
      "①even when",
      "②even of",
      "③even in",
      "④even during"
    ],
    "answer": "①even when",
    "explanation": "even when S V「〜な時でさえ」の節から S + be動詞（he was）が省略された形式（even when presented with...）です。"
  },
  {
    "id": 88,
    "question": "We must hurry up (　　) we miss the last train of the night.",
    "choices": [
      "①lest",
      "②in case",
      "③so that",
      "④unless"
    ],
    "answer": "①lest",
    "explanation": "lest S (should) V「SがVしないように」という目的・懸念を表します。後ろに否定のnotは伴いません。"
  },
  {
    "id": 89,
    "question": "(　　) it not been for your timely intervention, the project would have failed completely.",
    "choices": [
      "①Had",
      "②If",
      "③Were",
      "④Should"
    ],
    "answer": "①Had",
    "explanation": "If it had not been for... のIfが省略されて Had it not been for... と倒置が起こった形です。"
  },
  {
    "id": 90,
    "question": "The agreement is valid (　　) it does not violate international commercial law.",
    "choices": [
      "①insofar as",
      "②in order that",
      "③as soon as",
      "④by the time"
    ],
    "answer": "①insofar as",
    "explanation": "insofar as S V「〜する限りにおいては（＝to the extent that）」という限度・条件を表す接続詞表現です。"
  },
  {
    "id": 91,
    "question": "He was so exhausted (　　) he fell asleep with his clothes on.",
    "choices": [
      "①that",
      "②as",
      "③which",
      "④so"
    ],
    "answer": "①that",
    "explanation": "so + 形容詞 + that S V...「非常に〜なのでSはVする」という結果を表す構文です。"
  },
  {
    "id": 92,
    "question": "(　　) you are ready, we can begin the annual board meeting.",
    "choices": [
      "①Now that",
      "②As long",
      "③In order that",
      "④For fear that"
    ],
    "answer": "①Now that",
    "explanation": "Now that S V「今や〜なのだから／〜である以上」という理由・前提の接続詞です。"
  },
  {
    "id": 93,
    "question": "The machine will automatically shut down (　　) an emergency occurs.",
    "choices": [
      "①in the event that",
      "②on the ground that",
      "③to the extent that",
      "④for the purpose that"
    ],
    "answer": "①in the event that",
    "explanation": "in the event that S V「万一〜の場合には（＝if / in case）」という条件を表す前置詞句由来の接続詞表現です。"
  },
  {
    "id": 94,
    "question": "He spent hours reviewing the contract (　　) there were any hidden clauses.",
    "choices": [
      "①to see if",
      "②so as to",
      "③in order to",
      "④seeing that"
    ],
    "answer": "①to see if",
    "explanation": "to see if S V「SがVかどうか確かめるために」という目的と間接疑問の組み合わせです。"
  },
  {
    "id": 95,
    "question": "She spoke quietly (　　) wake the sleeping infant.",
    "choices": [
      "①so as not to",
      "②so that not",
      "③in order that",
      "④lest she not"
    ],
    "answer": "①so as not to",
    "explanation": "so as not to V「〜しないように（目的）」を表します。lestやso that節との文法・構造の違いが問われます。"
  },
  {
    "id": 96,
    "question": "Strange (　　) it may sound, the unbelievable rumor turned out to be true.",
    "choices": [
      "①as",
      "②though",
      "③like",
      "④if"
    ],
    "answer": "①as",
    "explanation": "形容詞/副詞 + as + S + may V「奇妙に思われるかもしれないが」という譲歩の構文です。"
  },
  {
    "id": 97,
    "question": "The museum is open to the public every day (　　) Mondays when it undergoes maintenance.",
    "choices": [
      "①except on",
      "②unless in",
      "③without on",
      "④save for on"
    ],
    "answer": "①except on",
    "explanation": "except (on) ...「〜（月曜日）を除いて」という除外を表す前置詞/接続詞的用法です。"
  },
  {
    "id": 98,
    "question": "He did not utter a single word, (　　) did he show any emotion on his face.",
    "choices": [
      "①nor",
      "②neither",
      "③not",
      "④or"
    ],
    "answer": "①nor",
    "explanation": "否定文の後に続き「〜もまた…ない」を表す等位接続詞nor + V + S（倒置形）です。"
  },
  {
    "id": 99,
    "question": "The company expanded rapidly (　　) aggressive overseas investments.",
    "choices": [
      "①by means of",
      "②so that",
      "③in that",
      "④on condition that"
    ],
    "answer": "①by means of",
    "explanation": "by means of...「〜によって／〜の手段で」という前置詞句です。接続詞so that/in that等との識別が問われます。"
  },
  {
    "id": 100,
    "question": "(　{0}　) far as the eye could see, the vast desert stretched endlessly beneath the burning sun.",
    "choices": [
      "①As",
      "②So",
      "③Too",
      "④How"
    ],
    "answer": "①As",
    "explanation": "As far as S can V「SがVできる限り（範囲・限界）」を表す接続詞表現です（As far as the eye could see: 見渡す限り）。"
  }
];
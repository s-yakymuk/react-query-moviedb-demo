import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.themoviedb.org/3/authentication/token/new", () => {
    return HttpResponse.json({
      success: true,
      expires_at: "2024-07-18 00:00:00 UTC",
      request_token: "12345",
    });
  }),
  http.post(
    "https://api.themoviedb.org/3/authentication/token/validate_with_login",
    () => {
      return HttpResponse.json({
        success: true,
        expires_at: "2024-07-18 00:00:00 UTC",
        request_token: "12345",
      });
    }
  ),
  http.post("https://api.themoviedb.org/3/authentication/session/new", () => {
    return HttpResponse.json({
      success: true,
      session_id: "12345",
    });
  }),
  http.get("https://api.themoviedb.org/3/discover/movie", () => {
    return HttpResponse.json({
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
          genre_ids: [16, 10751, 12, 35],
          id: 1022789,
          original_language: "en",
          original_title: "Inside Out 2",
          overview:
            "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
          popularity: 5389.964,
          poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
          release_date: "2024-06-11",
          title: "Inside Out 2",
          video: false,
          vote_average: 7.7,
          vote_count: 1866,
        },
        {
          adult: false,
          backdrop_path: "/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg",
          genre_ids: [16, 10751, 35, 28],
          id: 519182,
          original_language: "en",
          original_title: "Despicable Me 4",
          overview:
            "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
          popularity: 4182.19,
          poster_path: "/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg",
          release_date: "2024-06-20",
          title: "Despicable Me 4",
          video: false,
          vote_average: 7.453,
          vote_count: 300,
        },
        {
          adult: false,
          backdrop_path: "/Akv9GlCCMrzcDkVz4ad8MdLl9DK.jpg",
          genre_ids: [16, 35, 10751, 12],
          id: 748783,
          original_language: "en",
          original_title: "The Garfield Movie",
          overview:
            "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
          popularity: 2209.679,
          poster_path: "/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
          release_date: "2024-04-30",
          title: "The Garfield Movie",
          video: false,
          vote_average: 7.274,
          vote_count: 451,
        },
        {
          adult: false,
          backdrop_path: "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
          genre_ids: [28, 12, 878],
          id: 786892,
          original_language: "en",
          original_title: "Furiosa: A Mad Max Saga",
          overview:
            "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
          popularity: 1802.966,
          poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
          release_date: "2024-05-22",
          title: "Furiosa: A Mad Max Saga",
          video: false,
          vote_average: 7.647,
          vote_count: 2170,
        },
        {
          adult: false,
          backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
          genre_ids: [878, 12, 28],
          id: 653346,
          original_language: "en",
          original_title: "Kingdom of the Planet of the Apes",
          overview:
            "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
          popularity: 1685.471,
          poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
          release_date: "2024-05-08",
          title: "Kingdom of the Planet of the Apes",
          video: false,
          vote_average: 7.13,
          vote_count: 1892,
        },
        {
          adult: false,
          backdrop_path: "/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg",
          genre_ids: [28, 35, 80],
          id: 280180,
          original_language: "en",
          original_title: "Beverly Hills Cop: Axel F",
          overview:
            "Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.",
          popularity: 1237.903,
          poster_path: "/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
          release_date: "2024-06-20",
          title: "Beverly Hills Cop: Axel F",
          video: false,
          vote_average: 6.89,
          vote_count: 591,
        },
        {
          adult: false,
          backdrop_path: "/gRApXuxWmO2forYTuTmcz5RaNUV.jpg",
          genre_ids: [28, 80, 53, 35],
          id: 573435,
          original_language: "en",
          original_title: "Bad Boys: Ride or Die",
          overview:
            "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
          popularity: 1263.839,
          poster_path: "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
          release_date: "2024-06-05",
          title: "Bad Boys: Ride or Die",
          video: false,
          vote_average: 7.105,
          vote_count: 567,
        },
        {
          adult: false,
          backdrop_path: "/lA6KdSkCTxwzvqzPqxch997RabQ.jpg",
          genre_ids: [28, 53],
          id: 560016,
          original_language: "en",
          original_title: "Monkey Man",
          overview:
            "Kid is an anonymous young man who ekes out a meager living in an underground fight club where, night after night, wearing a gorilla mask, he is beaten bloody by more popular fighters for cash. After years of suppressed rage, Kid discovers a way to infiltrate the enclave of the city’s sinister elite. As his childhood trauma boils over, his mysteriously scarred hands unleash an explosive campaign of retribution to settle the score with the men who took everything from him.",
          popularity: 1148.565,
          poster_path: "/4lhR4L2vzzjl68P1zJyCH755Oz4.jpg",
          release_date: "2024-04-03",
          title: "Monkey Man",
          video: false,
          vote_average: 7.1,
          vote_count: 600,
        },
        {
          adult: false,
          backdrop_path: "/8fNBsXpgMvqk75SPsZzTmIqSRxY.jpg",
          genre_ids: [27, 53],
          id: 646683,
          original_language: "en",
          original_title: "The Exorcism",
          overview:
            "A troubled actor begins to unravel while shooting a supernatural horror film, leading his estranged daughter to wonder if he's slipping back into his past addictions or if there's something more sinister at play.",
          popularity: 1119.067,
          poster_path: "/ar2h87jlTfMlrDZefR3VFz1SfgH.jpg",
          release_date: "2024-05-30",
          title: "The Exorcism",
          video: false,
          vote_average: 4.254,
          vote_count: 67,
        },
        {
          adult: false,
          backdrop_path: "/oSJV6nAfHzyE9v6oEAXmDjbko00.jpg",
          genre_ids: [14, 12],
          id: 943344,
          original_language: "zh",
          original_title: "地底怪物",
          overview: "",
          popularity: 978.45,
          poster_path: "/lWVwWRLqpS1OaNg7KT0ZecSW0PK.jpg",
          release_date: "2023-04-27",
          title: "Underground Monster",
          video: false,
          vote_average: 3.8,
          vote_count: 5,
        },
        {
          adult: false,
          backdrop_path: "/lLh39Th5plbrQgbQ4zyIULsd0Pp.jpg",
          genre_ids: [878, 28, 12],
          id: 823464,
          original_language: "en",
          original_title: "Godzilla x Kong: The New Empire",
          overview:
            "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
          popularity: 998.116,
          poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
          release_date: "2024-03-27",
          title: "Godzilla x Kong: The New Empire",
          video: false,
          vote_average: 7.201,
          vote_count: 3195,
        },
        {
          adult: false,
          backdrop_path: "/dn3gbDpXPSwC6saMJOHkCiFA9jn.jpg",
          genre_ids: [14, 12, 10751, 35],
          id: 974262,
          original_language: "en",
          original_title: "Descendants: The Rise of Red",
          overview:
            "After the Queen of Hearts incites a coup on Auradon, her rebellious daughter Red and Cinderella's perfectionist daughter Chloe join forces and travel back in time to try to undo the traumatic event that set Red's mother down her villainous path.",
          popularity: 1277.167,
          poster_path: "/dwxWNJ9oDLqNPbA0884h5J7mfqy.jpg",
          release_date: "2024-07-11",
          title: "Descendants: The Rise of Red",
          video: false,
          vote_average: 7.302,
          vote_count: 131,
        },
        {
          adult: false,
          backdrop_path: "/uNTciMXpCQDg7gvgMsPCdnxo6Re.jpg",
          genre_ids: [28, 53],
          id: 1114738,
          original_language: "en",
          original_title: "Boneyard",
          overview:
            'After Police Chief Carter discovers the remains of eleven women, FBI Special Agent Petrovick is recruited to profile the serial killer responsible for the infamous "boneyard" killings. As the police force, narcotics agency, and FBI lock horns, a tangled web of intrigue turns everyone into a suspect.',
          popularity: 768.042,
          poster_path: "/xkNK36hQv8SWiwiQoE7naRfP0zL.jpg",
          release_date: "2024-07-05",
          title: "Boneyard",
          video: false,
          vote_average: 5.788,
          vote_count: 40,
        },
        {
          adult: false,
          backdrop_path: "/dbtGinhWWKgQLQ0hjZHMFWxBJcJ.jpg",
          genre_ids: [28, 878, 27, 53],
          id: 1159518,
          original_language: "en",
          original_title: "Black Noise",
          overview:
            "Members of an elite security team deployed to rescue a VIP on an exclusive island.The rescue mission becomes a desperate attempt to survive, escape the island and elude the sinister presence that seeks to harm them.",
          popularity: 772.167,
          poster_path: "/snKpXexv5dtWqEKEmXrJtp8QGQC.jpg",
          release_date: "2023-11-03",
          title: "Black Noise",
          video: false,
          vote_average: 5.313,
          vote_count: 16,
        },
        {
          adult: false,
          backdrop_path: "/adAJDB2Au3x5ve2YyWaEYy4EUw.jpg",
          genre_ids: [18, 10749, 35],
          id: 1191610,
          original_language: "es",
          original_title: "Goyo",
          overview:
            "A young autistic museum guide lives by a strict routine — until he falls in love with his coworker and must confront a whirlwind of new, intense emotions.",
          popularity: 735.939,
          poster_path: "/fCjC1RRbEJUpDjM55RNUMXQen0b.jpg",
          release_date: "2024-06-27",
          title: "Goyo",
          video: false,
          vote_average: 6.788,
          vote_count: 26,
        },
        {
          adult: false,
          backdrop_path: "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
          genre_ids: [878, 28, 35],
          id: 533535,
          original_language: "en",
          original_title: "Deadpool \u0026 Wolverine",
          overview:
            "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
          popularity: 712.349,
          poster_path: "/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg",
          release_date: "2024-07-24",
          title: "Deadpool \u0026 Wolverine",
          video: false,
          vote_average: 0.0,
          vote_count: 0,
        },
        {
          adult: false,
          backdrop_path: "/716FGefV5R7drdoCOjJtzbPyyY8.jpg",
          genre_ids: [27],
          id: 1207898,
          original_language: "en",
          original_title: "The Jack in the Box: Rises",
          overview:
            "When a creepy Jack-in-the-Box is discovered and opened on the grounds of an exclusive girls' school, six brave students soon enter a fight to the finish against the unleashed demon.",
          popularity: 639.721,
          poster_path: "/oDVjlCTSyF6Fh8Fpm683MyGGnSG.jpg",
          release_date: "2024-01-18",
          title: "The Jack in the Box: Rises",
          video: false,
          vote_average: 7.037,
          vote_count: 54,
        },
        {
          adult: false,
          backdrop_path: "/a4IWRYNMNMszIkRbEIiNsRg6cvt.jpg",
          genre_ids: [10752, 28, 18],
          id: 929590,
          original_language: "en",
          original_title: "Civil War",
          overview:
            "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
          popularity: 708.024,
          poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
          release_date: "2024-04-10",
          title: "Civil War",
          video: false,
          vote_average: 6.988,
          vote_count: 1907,
        },
        {
          adult: false,
          backdrop_path: "/buawWBeKYjYfeiPoS2jIcjOrghZ.jpg",
          genre_ids: [27, 53],
          id: 1214509,
          original_language: "en",
          original_title: "In a Violent Nature",
          overview:
            "The enigmatic resurrection, rampage, and retribution of an undead monster in a remote wilderness unleashes an iconic new killer after a locket is removed from a collapsed fire tower that entombed its rotting corpse.",
          popularity: 581.466,
          poster_path: "/hPfWHgq07nXbeldwEGxWB4JqwtE.jpg",
          release_date: "2024-05-31",
          title: "In a Violent Nature",
          video: false,
          vote_average: 5.805,
          vote_count: 113,
        },
        {
          adult: false,
          backdrop_path: "/iTWrsOVsUqcwYSxrpINNs3hG2nC.jpg",
          genre_ids: [53, 27, 28, 9648],
          id: 1001311,
          original_language: "fr",
          original_title: "Sous la Seine",
          overview:
            "In order to save Paris from an international bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.",
          popularity: 706.026,
          poster_path: "/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg",
          release_date: "2024-06-04",
          title: "Under Paris",
          video: false,
          vote_average: 6.093,
          vote_count: 910,
        },
      ],
      total_pages: 45144,
      total_results: 902865,
    });
  }),
  http.get("https://api.themoviedb.org/3/genre/movie/list", () => {
    return HttpResponse.json({
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 99,
          name: "Documentary",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 36,
          name: "History",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 10402,
          name: "Music",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 10749,
          name: "Romance",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 10770,
          name: "TV Movie",
        },
        {
          id: 53,
          name: "Thriller",
        },
        {
          id: 10752,
          name: "War",
        },
        {
          id: 37,
          name: "Western",
        },
      ],
    });
  }),
  http.get("https://api.themoviedb.org/3/account", () => {
    return HttpResponse.json({
      avatar: {
        gravatar: {
          hash: "e7aada26c24ebee0d4f10bc90ebd487d",
        },
        tmdb: {
          avatar_path: null,
        },
      },
      id: 10711564,
      iso_639_1: "en",
      iso_3166_1: "UA",
      name: "",
      include_adult: false,
      username: "test",
    });
  }),
  http.get(
    "https://api.themoviedb.org/3/account/10711564/favorite/movies",
    () => {
      return HttpResponse.json({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
            genre_ids: [28, 12, 80],
            id: 385128,
            original_language: "en",
            original_title: "F9",
            overview:
              "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
            popularity: 69.758,
            poster_path: "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
            release_date: "2021-05-19",
            title: "F9",
            video: false,
            vote_average: 7.088,
            vote_count: 7043,
          },
          {
            adult: false,
            backdrop_path: "/epsz7OqjwmeK1ehItgz1OVzxOH9.jpg",
            genre_ids: [28, 878, 12],
            id: 588228,
            original_language: "en",
            original_title: "The Tomorrow War",
            overview:
              "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
            popularity: 122.144,
            poster_path: "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
            release_date: "2021-09-03",
            title: "The Tomorrow War",
            video: false,
            vote_average: 7.543,
            vote_count: 3284,
          },
          {
            adult: false,
            backdrop_path: "/c0izdYdnTe4uMRifHgvTA85wPz0.jpg",
            genre_ids: [28, 80, 27],
            id: 503736,
            original_language: "en",
            original_title: "Army of the Dead",
            overview:
              "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
            popularity: 58.389,
            poster_path: "/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
            release_date: "2021-05-14",
            title: "Army of the Dead",
            video: false,
            vote_average: 6.246,
            vote_count: 3891,
          },
          {
            adult: false,
            backdrop_path: "/8cdGniwh3vysVRFeWDJNa3bPQbk.jpg",
            genre_ids: [28],
            id: 706972,
            original_language: "en",
            original_title: "Narco Sub",
            overview: "A man will become a criminal to save his family.",
            popularity: 21.328,
            poster_path: "/7p0O4mKYLIhU2E5Zcq9Z3vOZ4e9.jpg",
            release_date: "2021-01-22",
            title: "Narco Sub",
            video: false,
            vote_average: 6.6,
            vote_count: 258,
          },
          {
            adult: false,
            backdrop_path: "/syjh4WJARo5gwjyUYxOPOElWGWh.jpg",
            genre_ids: [27, 53],
            id: 698320,
            original_language: "en",
            original_title: "The Mad Hatter",
            overview:
              "An eccentric professor takes four of his students to the mansion of the “Mad Hatter”, an urban legend driven insane by mercury poisoning and grief. He says that there’s nothing to worry about now: the strange, shambling “caretakers” that haunt the home are merely servants that have fallen to inbreeding, and the Hatter himself has been dead for years. But as the students start disappearing one by one, those that remain start to question if the professor’s experiment is truly scientific...and if the Hatter didn’t just succumb to his madness, but decided to spread it...",
            popularity: 12.377,
            poster_path: "/lTUfalNirpq7SBASa6lnzs27iam.jpg",
            release_date: "2021-01-29",
            title: "The Mad Hatter",
            video: false,
            vote_average: 5.4,
            vote_count: 59,
          },
          {
            adult: false,
            backdrop_path: "/2BZ7PC9aISswNXV2tugmjGiriaB.jpg",
            genre_ids: [16, 10770, 14, 28],
            id: 755812,
            original_language: "fr",
            original_title: "Miraculous World : New York, les héros unis",
            overview:
              "Marinette’s class is headed to New York, the city of superheroes, for French-American Friendship Week. The whole class is there...except Adrien, whose father refuses to let him go!",
            popularity: 53.101,
            poster_path: "/9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
            release_date: "2020-09-25",
            title: "Miraculous World: New York, United HeroeZ",
            video: false,
            vote_average: 8.114,
            vote_count: 1071,
          },
          {
            adult: false,
            backdrop_path: "/4kIRrW1AlHP5Idne8CPHeQt8nR5.jpg",
            genre_ids: [16, 10751, 35, 14],
            id: 550205,
            original_language: "en",
            original_title: "Wish Dragon",
            overview:
              "Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.",
            popularity: 55.32,
            poster_path: "/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg",
            release_date: "2021-01-15",
            title: "Wish Dragon",
            video: false,
            vote_average: 7.908,
            vote_count: 1289,
          },
          {
            adult: false,
            backdrop_path: "/uEWCi9fc89m9qS5SNshlvxkSsLJ.jpg",
            genre_ids: [27, 53],
            id: 159211,
            original_language: "en",
            original_title: "The Haunting of Helena",
            overview:
              "After a divorce, Sophia moves to the south of Italy with her daughter, Helena. Their new home, an apartment within an austere building of the fascist age, is a chance for them to start a new life. But inside an old storage room hides a mysterious closet and a buried secret. After the loss of Helena’s first baby tooth, a chilling obsession begins and an apparition haunts her sleep...",
            popularity: 13.516,
            poster_path: "/iB8rf8FYHGlrbmLybCo6Mpg8hNt.jpg",
            release_date: "2013-01-14",
            title: "The Haunting of Helena",
            video: false,
            vote_average: 5.617,
            vote_count: 150,
          },
          {
            adult: false,
            backdrop_path: "/jWMWZ2ttg8B8YtVzG04UfhlcL67.jpg",
            genre_ids: [28, 53, 9648],
            id: 809314,
            original_language: "en",
            original_title: "Trigger Point",
            overview:
              "Nicolas Shaw is a retired U.S. special operative who becomes part of an elite 'invisible' team that quietly takes out the worst villains around the world.",
            popularity: 20.895,
            poster_path: "/qlXenN6jjgbsIyEJxBjkfkEU0q8.jpg",
            release_date: "2021-04-23",
            title: "Trigger Point",
            video: false,
            vote_average: 6.133,
            vote_count: 173,
          },
          {
            adult: false,
            backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
            genre_ids: [878, 12],
            id: 693134,
            original_language: "en",
            original_title: "Dune: Part Two",
            overview:
              "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            popularity: 377.203,
            poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            release_date: "2024-02-27",
            title: "Dune: Part Two",
            video: false,
            vote_average: 8.166,
            vote_count: 4848,
          },
          {
            adult: false,
            backdrop_path: "/q2E18ybZg0KkpR8nERH67GOGx33.jpg",
            genre_ids: [878, 10749, 35],
            id: 792307,
            original_language: "en",
            original_title: "Poor Things",
            overview:
              "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
            popularity: 295.356,
            poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
            release_date: "2023-12-07",
            title: "Poor Things",
            video: false,
            vote_average: 7.776,
            vote_count: 3651,
          },
          {
            adult: false,
            backdrop_path: "/kszooR7v1TLFM4pzx6IkKq2jDAN.jpg",
            genre_ids: [53, 9648, 80],
            id: 915935,
            original_language: "fr",
            original_title: "Anatomie d'une chute",
            overview:
              "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the sole witness.",
            popularity: 86.564,
            poster_path: "/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
            release_date: "2023-08-23",
            title: "Anatomy of a Fall",
            video: false,
            vote_average: 7.597,
            vote_count: 2150,
          },
          {
            adult: false,
            backdrop_path: "/9JNsAIFMu4o37AgnU1JVtR6AWsK.jpg",
            genre_ids: [10749, 28, 18],
            id: 1248795,
            original_language: "tr",
            original_title: "Romantik Hırsız",
            overview:
              "After learning that the art thief she has been chasing is her ex-lover, an officer working for Interpol concocts a plan to catch him red-handed.",
            popularity: 69.665,
            poster_path: "/niVtvS9Kf8G1VDPSqurqHkaSSwm.jpg",
            release_date: "2024-03-13",
            title: "Art of Love",
            video: false,
            vote_average: 6.457,
            vote_count: 115,
          },
          {
            adult: false,
            backdrop_path: "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
            genre_ids: [28, 35],
            id: 897087,
            original_language: "en",
            original_title: "Freelance",
            overview:
              "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
            popularity: 156.656,
            poster_path: "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
            release_date: "2023-10-05",
            title: "Freelance",
            video: false,
            vote_average: 6.519,
            vote_count: 859,
          },
          {
            adult: false,
            backdrop_path: "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
            genre_ids: [18, 36],
            id: 872585,
            original_language: "en",
            original_title: "Oppenheimer",
            overview:
              "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
            popularity: 327.033,
            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            release_date: "2023-07-19",
            title: "Oppenheimer",
            video: false,
            vote_average: 8.094,
            vote_count: 8550,
          },
          {
            adult: false,
            backdrop_path: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
            genre_ids: [16, 10751, 12, 35],
            id: 1022789,
            original_language: "en",
            original_title: "Inside Out 2",
            overview:
              "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
            popularity: 5389.964,
            poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            release_date: "2024-06-11",
            title: "Inside Out 2",
            video: false,
            vote_average: 7.699,
            vote_count: 1867,
          },
        ],
        total_pages: 1,
        total_results: 16,
      });
    }
  ),
  http.post(" https://api.themoviedb.org/3/account/10711564/favorite", () => {
    return HttpResponse.json({});
  }),
];

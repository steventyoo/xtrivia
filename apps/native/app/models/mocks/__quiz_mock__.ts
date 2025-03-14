import { Quiz } from "../Quiz";


/*
 * recognized that we need hints array fully including underscorred hints
 * LLM can generate those hints
 */

export const _mock_daily_quiz_: Quiz = {
  id: "test-quiz-id",
  title: "most populated cities in the world",
  description: "based on statista.com as of Jan 2025",
  sub_info_description: "popularity",
  answers: [
    {
      "answer": "Tokyo, Japan 🇯🇵",
      "answer_index": 1,
      "sub_info_value": "37M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-1.png",
      "description": "Population: ~37 million",
      "fun_fact": "Tokyo is home to the busiest pedestrian crossing in the world - Shibuya Crossing - where up to 3,000 people cross at once!",
      "hints": [
        {"type": "length", "text": "_____"},
        {"type": "first_character", "text": "T____"},
        {"type": "first_last_character", "text": "T___o"},
        {"type": "soft", "text": "This city is the capital of Japan and is known for its bustling Shibuya Crossing and modern skyscrapers."},
        {"type": "strong", "text": "Tokyo is one of the largest metropolitan areas in the world with a population of over 37 million people."}
      ]
    },
    {
      "answer": "Delhi, India 🇮🇳",
      "answer_index": 2,
      "sub_info_value": "31M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-2.png",
      "description": "Population: ~31 million",
      "fun_fact": "Delhi is known for its historical landmarks, including the Red Fort and India Gate.",
      "hints": [
        {"type": "length", "text": "_____"},
        {"type": "first_character", "text": "D____"},
        {"type": "first_last_character", "text": "D___i"},
        {"type": "soft", "text": "The capital of India, Delhi is a bustling hub of culture, history, and politics."},
        {"type": "strong", "text": "Delhi is one of the oldest cities in India with a rich cultural heritage, housing over 31 million people."}
      ]
    },
    {
      "answer": "Shanghai, China 🇨🇳",
      "answer_index": 3,
      "sub_info_value": "29M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-3.png",
      "description": "Population: ~29 million",
      "fun_fact": "Shanghai is known for its futuristic skyline and the Bund, a waterfront area featuring colonial-era buildings.",
      "hints": [
        {"type": "length", "text": "________"},
        {"type": "first_character", "text": "S______"},
        {"type": "first_last_character", "text": "S_____i"},
        {"type": "soft", "text": "Shanghai is one of China's largest cities, known for its vibrant cultural scene and economic power."},
        {"type": "strong", "text": "With a population of over 29 million people, Shanghai is an important global financial hub."}
      ]
    },
    {
      "answer": "Sao Paulo, Brazil 🇧🇷",
      "answer_index": 4,
      "sub_info_value": "22M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-4.png",
      "description": "Population: ~22 million",
      "fun_fact": "Sao Paulo is known as Brazil’s financial hub, with a vibrant cultural scene and nightlife.",
      "hints": [
        {"type": "length", "text": "___ _____"},
        {"type": "first_character", "text": "S__ P____"},
        {"type": "first_last_character", "text": "S_o P___o"},
        {"type": "soft", "text": "Sao Paulo is Brazil’s largest city, known for its booming economy and lively cultural diversity."},
        {"type": "strong", "text": "Sao Paulo has a population of over 22 million and is considered the economic powerhouse of Brazil."}
      ]
    },
    {
      "answer": "Mexico City, Mexico 🇲🇽",
      "answer_index": 5,
      "sub_info_value": "21M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-5.png",
      "description": "Population: ~21 million",
      "fun_fact": "Mexico City sits on the ruins of the ancient Aztec capital, Tenochtitlan.",
      "hints": [
        {"type": "length", "text": "_____ ____"},
        {"type": "first_character", "text": "M_____ C___"},
        {"type": "first_last_character", "text": "M__ C__y"},
        {"type": "soft", "text": "The capital city of Mexico is famous for its vibrant culture, art, and historical significance."},
        {"type": "strong", "text": "Mexico City is one of the largest cities in the world, with a population of over 21 million people."}
      ]
    },
    {
      "answer": "Cairo, Egypt 🇪🇬",
      "answer_index": 6,
      "sub_info_value": "19M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-7.png",
      "description": "Population: ~19 million",
      "fun_fact": "Cairo is home to the Great Pyramids of Giza, one of the Seven Wonders of the Ancient World.",
      "hints": [
        {"type": "length", "text": "_____"},
        {"type": "first_character", "text": "C____"},
        {"type": "first_last_character", "text": "C__o"},
        {"type": "soft", "text": "Cairo, the capital of Egypt, is famous for its ancient history and iconic landmarks like the Pyramids."},
        {"type": "strong", "text": "With a population of around 19 million, Cairo is one of the largest cities in Africa."}
      ]
    },
    {
      "answer": "Dhaka, Bangladesh 🇧🇩",
      "answer_index": 7,
      "sub_info_value": "20M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-6.png",
      "description": "Population: ~20 million",
      "fun_fact": "Dhaka is one of the fastest-growing cities in the world.",
      "hints": [
        {"type": "length", "text": "_____"},
        {"type": "first_character", "text": "D____"},
        {"type": "first_last_character", "text": "D___a"},
        {"type": "soft", "text": "Dhaka, the capital of Bangladesh, is known for its vibrant markets and rich history."},
        {"type": "strong", "text": "With a population of around 20 million, Dhaka is one of the most densely populated cities in the world."}
      ]
    },
    {
      "answer": "Mumbai, India 🇮🇳",
      "answer_index": 8,
      "sub_info_value": "21M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images/img-sample-5.png",
      "description": "Population: ~21 million",
      "fun_fact": "Mumbai is home to Bollywood, India's massive film industry, and the famous Gateway of India monument.",
      "hints": [
        {"type": "length", "text": "______"},
        {"type": "first_character", "text": "M_____"},
        {"type": "first_last_character", "text": "M____i"},
        {"type": "soft", "text": "Mumbai is the financial capital of India and home to Bollywood, India's thriving film industry."},
        {"type": "strong", "text": "With a population of over 21 million, Mumbai is India's largest city and a major economic hub."}
      ]
    },
    {
      "answer": "Beijing, China 🇨🇳",
      "answer_index": 9,
      "sub_info_value": "21M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-8.png",
      "description": "Population: ~21 million",
      "fun_fact": "Beijing is known for its historic architecture, including the Forbidden City and the Great Wall of China.",
      "hints": [
        {"type": "length", "text": "______"},
        {"type": "first_character", "text": "B_____"},
        {"type": "first_last_character", "text": "B____g"},
        {"type": "soft", "text": "The capital of China, Beijing is rich in history and serves as the political and cultural center of the country."},
        {"type": "strong", "text": "Beijing is a megacity with over 21 million people, offering a unique mix of ancient and modern culture."}
      ]
    },
    {
      "answer": "Osaka, Japan 🇯🇵",
      "answer_index": 10,
      "sub_info_value": "19M",
      "image": "https://lfskdmesdqfiwqfeafbk.supabase.co/storage/v1/object/public/quiz-images//img-sample-9.png",
      "description": "Population: ~19 million",
      "fun_fact": "Osaka is famous for its modern architecture, nightlife, and hearty street food, including takoyaki and okonomiyaki.",
      "hints": [
        {"type": "length", "text": "_____"},
        {"type": "first_character", "text": "O____"},
        {"type": "first_last_character", "text": "O___a"},
        {"type": "soft", "text": "Osaka, known for its vibrant nightlife and culinary scene, is a major port city in Japan."},
        {"type": "strong", "text": "With a population of over 19 million, Osaka is one of Japan's largest cities and a major economic center."}
      ]
    },   
  ]  
}